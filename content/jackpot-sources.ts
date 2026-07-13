/**
 * Jackpot tracker source configuration.
 *
 * Each entry maps a slot to a source web page that displays its current
 * progressive jackpot value. The daily fetcher (lib/jackpots.ts) scrapes the
 * page via Firecrawl and extracts the value.
 *
 * sourceUrl: null → tracker shows the fallback value labelled as a sample.
 * Set real source URLs (ideally provider pages or your affiliate partners'
 * pages, with permission) to go live. FIRECRAWL_API_KEY must be set in the
 * hosting environment.
 */

export interface JackpotSource {
  slotSlug: string;
  /** Page displaying the live jackpot value. null = not yet configured. */
  sourceUrl: string | null;
  /**
   * Optional regex (as string) with one capture group for the value.
   * If omitted, the fetcher takes the largest currency amount on the page.
   */
  pattern?: string;
  currency: '£' | '€' | '$';
  /** Shown until a live source is configured or when a fetch fails. */
  fallbackValue: number;
  fallbackNote: string;
}

export const jackpotSources: JackpotSource[] = [
  {
    slotSlug: 'mega-moolah',
    sourceUrl: 'https://insights.betfred.com/games/jackpot-tracker/',
    pattern: 'Mega Moolah[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 12270205,
    fallbackNote: 'Last recorded value — refreshed daily from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'mega-fortune',
    sourceUrl: null,
    currency: '€',
    fallbackValue: 2900000,
    fallbackNote: 'Sample value — Mega Fortune’s pool typically drops in the low millions.',
  },
  {
    slotSlug: 'divine-fortune',
    sourceUrl: null,
    currency: '£',
    fallbackValue: 62000,
    fallbackNote: 'Sample value — local Grand pot; varies by operator, typically five figures.',
  },
  {
    slotSlug: 'age-of-the-gods',
    sourceUrl: 'https://insights.betfred.com/games/jackpot-tracker/',
    pattern: 'Age of the Gods[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 188610,
    fallbackNote: 'Last recorded value — refreshed daily from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'wolf-gold',
    sourceUrl: null,
    currency: '£',
    fallbackValue: 1000,
    fallbackNote: 'Fixed jackpot — 1,000x your total bet, not a progressive pool (value shown at £1/spin).',
  },
];

export function getJackpotSource(slotSlug: string): JackpotSource | undefined {
  return jackpotSources.find((s) => s.slotSlug === slotSlug);
}
