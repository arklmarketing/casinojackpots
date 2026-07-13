import type { CasinoOffer } from './types';

/**
 * Live partner offers. Terms must be verified against the operator's own
 * published T&Cs and re-checked weekly (update lastUpdated on each check).
 * UK compliance: significant terms must be displayed alongside every CTA.
 */
export const offers: CasinoOffer[] = [
  {
    id: 'netbet-welcome',
    casinoSlug: 'netbet',
    bonusHeadline: 'Bet £20, Get 100 Free Spins — winnings paid as cash',
    bonusType: 'free-spins',
    wagering: 'None — spin winnings paid as cash',
    minDeposit: '£10',
    expiry: 'See full T&Cs',
    keyTerms:
      '18+. New customers only. Min deposit £10. Opt in and bet £20+ on any slot. 100 Free Spins on Big Bass Splash at £0.10 per spin. Winnings paid as cash; max win £100. Full T&Cs apply. BeGambleAware.org.',
    isExample: false,
    affiliateUrl: 'https://netbet.livepartners.com/view.php?z=189477',
    lastUpdated: '2026-07-14',
  },
];

export function getOffersForCasino(casinoSlug: string): CasinoOffer[] {
  return offers.filter((o) => o.casinoSlug === casinoSlug);
}
