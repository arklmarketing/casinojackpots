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

async function fetchOne(source: JackpotSource): Promise<JackpotValue> {
  const fallback: JackpotValue = {
    slotSlug: source.slotSlug,
    currency: source.currency,
    amount: source.fallbackValue,
    isLive: false,
    note: source.fallbackNote,
    updatedAt: new Date().toISOString(),
  };

  if (!source.sourceUrl || !process.env.FIRECRAWL_API_KEY) return fallback;

  const markdown = await scrapeMarkdown(source.sourceUrl);
  if (!markdown) return fallback;

  const amount = extractAmount(markdown, source);
  if (amount === null) return fallback;

  return {
    slotSlug: source.slotSlug,
    currency: source.currency,
    amount,
    isLive: true,
    updatedAt: new Date().toISOString(),
  };
}

/** All jackpot values, cached for 24 hours. */
export const getJackpotValues = unstable_cache(
  async (): Promise<JackpotValue[]> => {
    return Promise.all(jackpotSources.map(fetchOne));
  },
  ['jackpot-values'],
  // 6-hourly: values stay fresh and a failed scrape self-heals the same day.
  // ~360 Firecrawl credits/month for 3 source pages — within the free tier.
  { revalidate: 21600 },
);

export async function getJackpotValue(slotSlug: string): Promise<JackpotValue | undefined> {
  const values = await getJackpotValues();
  return values.find((v) => v.slotSlug === slotSlug);
}

export function formatJackpot(value: JackpotValue): string {
  return `${value.currency}${Math.round(value.amount).toLocaleString('en-GB')}`;
}
