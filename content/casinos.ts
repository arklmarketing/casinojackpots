import type { Casino } from './types';

/**
 * Live partner casinos. Every entry must be a real, UKGC-licensed operator
 * with verified terms and a working affiliate tracking link. Reviews are
 * based on verifiable public facts (licence register, published terms, site
 * inspection) — first-hand testing claims are only added once testing has
 * actually been carried out.
 */
export const casinos: Casino[] = [
  {
    slug: 'netbet',
    name: 'NetBet Casino',
    isExample: false,
    rating: 4.4,
    licence: 'UK Gambling Commission, account no. 39170 (NetBet Enterprises Ltd)',
    established: 2001,
    headline: 'Huge 5,500-game library with wager-free welcome spins',
    metaTitle: 'NetBet Casino Review 2026 — 100 Free Spins, Jackpots & Payouts',
    metaDescription:
      'Our NetBet Casino review: 5,500+ games including Playtech jackpots, a Bet £20 Get 100 Free Spins welcome offer with winnings paid as cash, and full UKGC licensing.',
    intro:
      'NetBet is one of the longest-established names in European online gambling — the brand dates back to 2001 — and its UK casino arm holds a full UK Gambling Commission licence (account 39170, verifiable on the public register). Two things stand out for jackpot players: a library of more than 5,500 games that includes the Playtech progressive families we track on this site, and a welcome offer whose free-spin winnings are paid as withdrawable cash rather than bonus funds.',
    keyFacts: [
      { label: 'Licence', value: 'UKGC — account no. 39170' },
      { label: 'Games', value: '5,500+ (incl. Playtech jackpot ranges)' },
      { label: 'Welcome offer', value: 'Bet £20 on slots, get 100 Free Spins (cash winnings)' },
      { label: 'Min deposit', value: '£10' },
      { label: 'Established', value: '2001 (NetBet brand)' },
    ],
    pros: [
      'Welcome spin winnings are paid as cash — no wagering requirement',
      'One of the largest UK game libraries at 5,500+ titles',
      'Carries Playtech jackpot families we track: Age of the Gods, Gladiator Jackpot and Kingdoms Rise',
    ],
    cons: [
      'Welcome free-spin winnings are capped at £100',
      'The offer requires £20 of qualifying slot bets rather than being credited on deposit',
    ],
    sections: [
      {
        heading: 'Jackpot slots and games',
        paragraphs: [
          'For readers of this site, NetBet’s draw is its Playtech jackpot coverage: the Age of the Gods series and its four-tier progressive network, Gladiator Jackpot with its nine-helmet bonus, and the Kingdoms Rise range with its own tiered pools all appear in the lobby, alongside a dedicated jackpot section. The wider library spans more than 5,500 titles from providers including Pragmatic Play, NetEnt, Play’n GO, Big Time Gaming and Games Global.',
          'The live casino floor runs on Evolution — Immersive Roulette and the Monopoly Big Baller game show among the highlights — plus a full spread of virtual tables, roulette and blackjack variants.',
        ],
      },
      {
        heading: 'The welcome offer, in plain English',
        paragraphs: [
          'The current UK offer: opt in, deposit at least £10, and place £20 or more of bets on any slot. You then receive 100 free spins on Big Bass Splash at 10p a spin. The two terms that matter most: winnings from the spins are credited as withdrawable cash with no wagering requirement, and the maximum you can win from them is £100. That cash-not-bonus structure is genuinely better than the market norm — most casinos pay spin winnings as restricted bonus funds.',
          'Always read the full terms on NetBet’s site before opting in, as offers change and eligibility rules apply.',
        ],
      },
      {
        heading: 'Banking',
        paragraphs: [
          'At the time of review, NetBet lists debit cards (Visa, Mastercard), PayPal, Apple Pay, Google Pay, Trustly, paysafecard, Skrill, Neteller and bank transfer among its payment options. Deposits start from £10. As with any UKGC casino, identity verification is required before your first withdrawal — upload documents early to avoid delays.',
        ],
      },
      {
        heading: 'Safety and responsible gambling',
        paragraphs: [
          'NetBet Enterprises Ltd is licensed and regulated in Great Britain by the Gambling Commission under account number 39170 — you can verify this on the Commission’s public register. That brings the full suite of UK player protections: segregated funds arrangements, independently tested games, deposit limits, time-outs, reality checks and GAMSTOP self-exclusion, with GambleAware signposting throughout the site.',
        ],
      },
    ],
    verdict:
      'A credible, fully licensed first port of call for jackpot players: the Playtech progressive families we track are all here, the library is enormous, and the welcome offer’s cash-paid spins are fairer than most rivals’ headline deals. The £100 cap on spin winnings is the main catch — read the terms and treat the offer as a bonus, not the reason to join.',
    faqs: [
      {
        question: 'Is NetBet Casino licensed in the UK?',
        answer:
          'Yes. NetBet Enterprises Ltd holds UK Gambling Commission licence account number 39170, which you can verify on the Gambling Commission’s public register. The UK site (netbet.co.uk) operates under this licence.',
      },
      {
        question: 'What is the NetBet welcome offer?',
        answer:
          'At the time of writing: opt in, deposit £10+, bet £20 or more on any slot, and receive 100 free spins on Big Bass Splash (10p per spin). Winnings are paid as cash with no wagering requirement, capped at £100. Full T&Cs apply on NetBet’s site.',
      },
      {
        question: 'Does NetBet have progressive jackpot slots?',
        answer:
          'Yes — including Playtech’s Age of the Gods series, Gladiator Jackpot and the Kingdoms Rise jackpot range, plus a dedicated jackpot lobby within its 5,500+ game library.',
      },
    ],
    affiliateUrl: 'https://netbet.livepartners.com/view.php?z=189477',
    lastUpdated: '2026-07-14',
    authorId: 'editorial-team',
  },
];

export function getCasino(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}
