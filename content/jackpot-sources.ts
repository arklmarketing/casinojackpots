/**
 * Jackpot tracker source configuration.
 *
 * Each entry maps a tracked jackpot (single slot or network) to a source web
 * page displaying its current value. The fetcher (lib/jackpots.ts) scrapes
 * each unique source URL once per refresh cycle and extracts every value
 * from it — ten jackpots on one page cost one Firecrawl credit, not ten.
 *
 * sourceUrl: null → tracker shows the fallback value labelled as a sample.
 * FIRECRAWL_API_KEY must be set in the hosting environment.
 */

const BETFRED_TRACKER = 'https://insights.betfred.com/games/jackpot-tracker/';

export interface JackpotSource {
  /** Unique ID. Matches a slot review slug when we have one. */
  slotSlug: string;
  displayName: string;
  provider: string;
  jackpotType: 'progressive' | 'fixed' | 'daily';
  /** Slot review to link to, when one exists. */
  reviewSlug?: string;
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
    displayName: 'Mega Moolah',
    provider: 'Games Global (Microgaming)',
    jackpotType: 'progressive',
    reviewSlug: 'mega-moolah',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Mega Moolah[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 12270205,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'jackpot-king',
    displayName: 'Jackpot King',
    provider: 'Blueprint Gaming',
    jackpotType: 'progressive',
    reviewSlug: 'jackpot-king',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Jackpot King[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 1729162,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'mega-jackpots',
    displayName: 'Mega Jackpots',
    provider: 'IGT',
    jackpotType: 'progressive',
    reviewSlug: 'mega-jackpots',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Mega Jackpots[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 667775,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'empire-treasures',
    displayName: 'Empire Treasures',
    provider: 'Playtech',
    jackpotType: 'progressive',
    reviewSlug: 'empire-treasures',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Empire Treasures[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 559180,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'pixel-samurai',
    displayName: 'Pixel Samurai',
    provider: 'Playtech',
    jackpotType: 'progressive',
    reviewSlug: 'pixel-samurai',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Pixel Samurai[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 543081,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'jackpot-blitz',
    displayName: 'Jackpot Blitz',
    provider: 'Playtech',
    jackpotType: 'progressive',
    reviewSlug: 'jackpot-blitz',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Blitz[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 294386,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'age-of-the-gods',
    displayName: 'Age of the Gods',
    provider: 'Playtech',
    jackpotType: 'progressive',
    reviewSlug: 'age-of-the-gods',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Age of the Gods[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 188610,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'sporting-legends',
    displayName: 'Sporting Legends',
    provider: 'Playtech',
    jackpotType: 'progressive',
    reviewSlug: 'sporting-legends',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Sporting Legends[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 185273,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'adventures-beyond-wonderland',
    displayName: 'Adventures Beyond Wonderland',
    provider: 'Playtech Live',
    jackpotType: 'progressive',
    reviewSlug: 'adventures-beyond-wonderland',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Adventures Beyond Wonderland[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 156095,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'gladiator',
    displayName: 'Gladiator',
    provider: 'Playtech',
    jackpotType: 'progressive',
    reviewSlug: 'gladiator',
    sourceUrl: BETFRED_TRACKER,
    pattern: 'Gladiator[\\s\\S]{0,160}?£([\\d,]+\\.\\d{2})',
    currency: '£',
    fallbackValue: 153234,
    fallbackNote: 'Last recorded value — refreshed from the Betfred jackpot tracker.',
  },
  {
    slotSlug: 'divine-fortune',
    displayName: 'Divine Fortune',
    provider: 'NetEnt',
    jackpotType: 'progressive',
    reviewSlug: 'divine-fortune',
    sourceUrl: null,
    currency: '£',
    fallbackValue: 62000,
    fallbackNote: 'Sample value — local Grand pot; varies by operator, typically five figures.',
  },
  {
    slotSlug: 'wolf-gold',
    displayName: 'Wolf Gold',
    provider: 'Pragmatic Play',
    jackpotType: 'fixed',
    reviewSlug: 'wolf-gold',
    sourceUrl: null,
    currency: '£',
    fallbackValue: 1000,
    fallbackNote: 'Fixed jackpot — 1,000x your total bet, not a progressive pool (value shown at £1/spin).',
  },
];

export function getJackpotSource(slotSlug: string): JackpotSource | undefined {
  return jackpotSources.find((s) => s.slotSlug === slotSlug);
}
