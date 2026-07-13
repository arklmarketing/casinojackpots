import { unstable_cache } from 'next/cache';
import { jackpotSources, type JackpotSource } from '@/content/jackpot-sources';

/**
 * Daily jackpot value fetcher.
 *
 * For each configured source page, asks Firecrawl for the page content and
 * extracts the jackpot value. Results are cached for 24 hours. If a source
 * is unconfigured, the API key is missing, or a fetch/parse fails, the
 * fallback value is returned and labelled as a sample — the page never breaks.
 *
 * Requires FIRECRAWL_API_KEY in the environment (set in Vercel dashboard,
 * never committed to the repository).
 */

export interface JackpotValue {
  slotSlug: string;
  currency: string;
  /** Numeric value (major units). */
  amount: number;
  /** True when scraped from a live source today; false when fallback/sample. */
  isLive: boolean;
  note?: string;
  updatedAt: string; // ISO timestamp
  /** Estimated pool growth per hour — drives the on-page ticker animation. */
  ratePerHour: number;
}

/** Estimated hourly pool growth for the ticker (proportional to pool size). */
function estimateRatePerHour(amount: number): number {
  return Math.max(4, amount * 0.00006);
}

const FIRECRAWL_URL = 'https://api.firecrawl.dev/v2/scrape';

async function scrapeMarkdown(url: string): Promise<string | null> {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch(FIRECRAWL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ url, formats: ['markdown'], onlyMainContent: true }),
      signal: AbortSignal.timeout(25000),
    });
    if (!res.ok) {
      console.error(`jackpot-tracker: Firecrawl ${res.status} for ${url}: ${(await res.text()).slice(0, 200)}`);
      return null;
    }
    const data = (await res.json()) as { data?: { markdown?: string } };
    if (!data.data?.markdown) console.error(`jackpot-tracker: no markdown in Firecrawl response for ${url}`);
    return data.data?.markdown ?? null;
  } catch (err) {
    console.error(`jackpot-tracker: fetch failed for ${url}: ${err instanceof Error ? err.message : err}`);
    return null;
  }
}

/** Extract a jackpot amount from page text. */
function extractAmount(text: string, source: JackpotSource): number | null {
  if (source.pattern) {
    const match = text.match(new RegExp(source.pattern));
    if (match?.[1]) {
      const value = Number(match[1].replace(/[,\s]/g, ''));
      return Number.isFinite(value) ? value : null;
    }
    return null;
  }
  // Default heuristic: the largest currency-prefixed amount on the page.
  const symbol = source.currency.replace('$', '\\$');
  const matches = Array.from(text.matchAll(new RegExp(`${symbol}\\s?([\\d,]+(?:\\.\\d+)?)`, 'g')));
  const values = matches
    .map((m) => Number(m[1].replace(/,/g, '')))
    .filter((n) => Number.isFinite(n) && n > 100); // ignore trivial amounts
  return values.length > 0 ? Math.max(...values) : null;
}

/** All jackpot values. Each unique source URL is scraped once per cycle. */
export const getJackpotValues = unstable_cache(
  async (): Promise<JackpotValue[]> => {
    const now = new Date().toISOString();
    const hasKey = Boolean(process.env.FIRECRAWL_API_KEY);

    // Scrape each unique source page once — many jackpots share one page.
    const uniqueUrls = Array.from(
      new Set(jackpotSources.map((s) => s.sourceUrl).filter((u): u is string => Boolean(u))),
    );
    const pages = new Map<string, string | null>();
    if (hasKey) {
      await Promise.all(uniqueUrls.map(async (url) => pages.set(url, await scrapeMarkdown(url))));
    }

    return jackpotSources.map((source) => {
      const fallback: JackpotValue = {
        slotSlug: source.slotSlug,
        currency: source.currency,
        amount: source.fallbackValue,
        isLive: false,
        note: source.fallbackNote,
        updatedAt: now,
        ratePerHour: 0,
      };

      if (!source.sourceUrl || !hasKey) return fallback;
      const markdown = pages.get(source.sourceUrl);
      if (!markdown) return fallback;

      const amount = extractAmount(markdown, source);
      if (amount === null) {
        console.error(`jackpot-tracker: no value matched for ${source.slotSlug}`);
        return fallback;
      }

      return {
        slotSlug: source.slotSlug,
        currency: source.currency,
        amount,
        isLive: true,
        updatedAt: now,
        ratePerHour: source.jackpotType === 'progressive' ? estimateRatePerHour(amount) : 0,
      };
    });
  },
  ['jackpot-values'],
  // 6-hourly: values stay fresh and a failed scrape self-heals the same day.
  // One shared source page = ~120 Firecrawl credits/month.
  { revalidate: 21600 },
);

export async function getJackpotValue(slotSlug: string): Promise<JackpotValue | undefined> {
  const values = await getJackpotValues();
  return values.find((v) => v.slotSlug === slotSlug);
}

export function formatJackpot(value: JackpotValue): string {
  return `${value.currency}${Math.round(value.amount).toLocaleString('en-GB')}`;
}
