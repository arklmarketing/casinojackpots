import type { CasinoOffer } from './types';

/**
 * DEMO DATA — example offers attached to the fictional demo casinos.
 * Replace with live, verified offer terms from your affiliate programmes.
 * UK compliance: significant terms must be displayed alongside every CTA.
 */
export const offers: CasinoOffer[] = [
  {
    id: 'aurora-welcome',
    casinoSlug: 'aurora-casino',
    bonusHeadline: '100% up to £200 + 50 Free Spins',
    bonusType: 'welcome',
    wagering: '35x bonus',
    minDeposit: '£10',
    expiry: '30 days',
    keyTerms:
      '18+. New customers only. Min deposit £10. 35x wagering on bonus. Free spin winnings paid as cash. Full T&Cs apply.',
    isExample: true,
    affiliateUrl: 'https://example-tracking.link/aurora',
    lastUpdated: '2026-07-01',
  },
  {
    id: 'kings-vault-welcome',
    casinoSlug: 'kings-vault',
    bonusHeadline: '100% up to £150 + 100 Free Spins (30x)',
    bonusType: 'welcome',
    wagering: '30x bonus',
    minDeposit: '£10',
    expiry: '21 days',
    keyTerms:
      '18+. New customers only. Min deposit £10. 30x wagering. Spins valid on selected jackpot slots. Full T&Cs apply.',
    isExample: true,
    affiliateUrl: 'https://example-tracking.link/kings-vault',
    lastUpdated: '2026-07-01',
  },
  {
    id: 'neonspin-nowager',
    casinoSlug: 'neon-spin',
    bonusHeadline: '50 No-Wagering Free Spins',
    bonusType: 'no-wagering',
    wagering: 'None — winnings paid as cash',
    minDeposit: '£10',
    expiry: '7 days',
    keyTerms:
      '18+. New customers only. Min deposit £10. Spin winnings credited as withdrawable cash. Full T&Cs apply.',
    isExample: true,
    affiliateUrl: 'https://example-tracking.link/neonspin',
    lastUpdated: '2026-07-01',
  },
  {
    id: 'grand-marina-live',
    casinoSlug: 'grand-marina',
    bonusHeadline: '100% up to £100 Live Casino Bonus',
    bonusType: 'welcome',
    wagering: '40x bonus (live games weighted 10%)',
    minDeposit: '£20',
    expiry: '30 days',
    keyTerms:
      '18+. New customers only. Min deposit £20. 40x wagering; live games contribute 10%. Full T&Cs apply.',
    isExample: true,
    affiliateUrl: 'https://example-tracking.link/grand-marina',
    lastUpdated: '2026-07-01',
  },
  {
    id: 'lucky-fell-spins',
    casinoSlug: 'lucky-fell',
    bonusHeadline: 'Deposit £5, Get 80 Free Spins',
    bonusType: 'free-spins',
    wagering: '35x on spin winnings (max £100)',
    minDeposit: '£5',
    expiry: '14 days',
    keyTerms:
      '18+. New customers only. Min deposit £5. Max £100 from spins. 35x wagering. Full T&Cs apply.',
    isExample: true,
    affiliateUrl: 'https://example-tracking.link/lucky-fell',
    lastUpdated: '2026-07-01',
  },
];

export function getOffersForCasino(casinoSlug: string): CasinoOffer[] {
  return offers.filter((o) => o.casinoSlug === casinoSlug);
}
