import type { Casino } from './types';

/**
 * DEMO DATA — these are fictional example brands used to demonstrate the
 * template, ranking layout and schema. Replace with your real affiliate
 * partners' verified details (licence numbers, bonus terms, tracking links)
 * before launch. Never publish unverified claims about real operators.
 */
export const casinos: Casino[] = [
  {
    slug: 'aurora-casino',
    name: 'Aurora Casino',
    isExample: true,
    rating: 4.7,
    licence: 'UK Gambling Commission (example licence no. 000-000000-R-000000-000)',
    established: 2019,
    headline: 'Best overall for progressive jackpot slots',
    metaTitle: 'Aurora Casino Review 2026 — Jackpot Slots, Bonuses & Payouts',
    metaDescription:
      'Our full Aurora Casino review: 1,200+ slots including Mega Moolah and Age of the Gods jackpots, fast withdrawals and a strong welcome offer. UK licensed.',
    intro:
      'Aurora Casino tops our jackpot rankings for one simple reason: depth. With more than 40 progressive jackpot titles — including the full Microgaming WowPot and Playtech Age of the Gods networks — it offers UK players more routes to a seven-figure win than any other site we have tested. Add sub-24-hour withdrawals and clear bonus terms, and it earns its place at the head of our table.',
    keyFacts: [
      { label: 'Licence', value: 'UKGC (example)' },
      { label: 'Slots', value: '1,200+ (40+ progressive jackpots)' },
      { label: 'Welcome offer', value: '100% up to £200 + 50 free spins (example)' },
      { label: 'Withdrawal time', value: 'Under 24 hours (e-wallets)' },
      { label: 'Min deposit', value: '£10' },
    ],
    pros: [
      'Largest progressive jackpot library in our test group',
      'E-wallet withdrawals typically processed in under 24 hours',
      'Wagering terms displayed on every bonus before opt-in',
    ],
    cons: [
      'Live-dealer selection is average for the market',
      'No dedicated jackpot filter in the mobile app',
    ],
    sections: [
      {
        heading: 'Jackpot slots and games',
        paragraphs: [
          'The jackpot lobby is where Aurora separates itself. Alongside the headline progressives — Mega Moolah, WowPot, Age of the Gods and Divine Fortune — you will find daily-drop jackpots from Red Tiger that guarantee a payout before a set time each day. In total we counted 43 jackpot titles during our latest review, roughly double what most UK rivals carry.',
          'Beyond jackpots, the wider library covers 1,200+ slots, a competent table games section and around 60 live-dealer tables. Search and filtering are excellent on desktop, though the mobile app currently lacks a dedicated jackpot category — a small but annoying omission we have flagged to the operator.',
        ],
      },
      {
        heading: 'Bonuses and offers',
        paragraphs: [
          'The example welcome package is a 100% match up to £200 plus 50 free spins on a featured jackpot slot, with 35x wagering on the bonus. Terms are presented clearly before you opt in, and — unusually — winnings from the free spins are credited as cash rather than bonus funds.',
          'Ongoing promotions rotate weekly and typically include jackpot-slot free spins and cashback. Always read the full terms: wagering requirements, game weightings and maximum bet limits apply to every offer.',
        ],
      },
      {
        heading: 'Banking and payouts',
        paragraphs: [
          'Deposits are instant from £10 via debit card, PayPal, Skrill and Apple Pay. In our withdrawal tests, e-wallet payouts landed in 6–18 hours and debit card withdrawals in 1–3 working days. Verification (KYC) is required before your first withdrawal, so upload documents early to avoid delays.',
        ],
      },
      {
        heading: 'Safety and responsible gambling',
        paragraphs: [
          'Aurora holds a UKGC licence (example), which means player funds are segregated, games are independently audited, and the full suite of UK safer-gambling tools is available: deposit limits, time-outs, self-exclusion via GAMSTOP and reality checks. We rate its responsible gambling hub above average — limits can be set in two taps from the account menu.',
        ],
      },
    ],
    verdict:
      'If chasing progressive jackpots is your priority, Aurora Casino is the strongest overall package we have reviewed this year: the deepest jackpot library, fast payouts and transparent terms. The mobile app needs a jackpot filter, but that is a small complaint about an otherwise excellent site.',
    faqs: [
      {
        question: 'Is Aurora Casino licensed in the UK?',
        answer:
          'Yes — this example profile assumes a UK Gambling Commission licence. Always verify any casino’s licence number at the foot of its homepage against the public UKGC register before depositing.',
      },
      {
        question: 'How fast are Aurora Casino withdrawals?',
        answer:
          'In our tests, e-wallet withdrawals (PayPal, Skrill) were processed in under 24 hours. Debit card withdrawals took 1–3 working days. First withdrawals require identity verification.',
      },
      {
        question: 'Can I play Mega Moolah at Aurora Casino?',
        answer:
          'Yes. Aurora carries the full Games Global progressive network including Mega Moolah and WowPot, plus Playtech’s Age of the Gods series.',
      },
    ],
    affiliateUrl: 'https://example-tracking.link/aurora',
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'kings-vault',
    name: "King's Vault Casino",
    isExample: true,
    rating: 4.5,
    headline: 'Best welcome offer for jackpot hunters',
    licence: 'UK Gambling Commission (example)',
    established: 2017,
    metaTitle: "King's Vault Casino Review 2026 — Welcome Bonus & Jackpot Slots",
    metaDescription:
      "King's Vault Casino review: a market-leading welcome package, 30+ jackpot slots and low 30x wagering. See bonus terms, payout speeds and our expert verdict.",
    intro:
      "King's Vault wins our 'best welcome offer' category thanks to a rare combination: a full match bonus with 30x wagering — below the 35–40x market norm — and free spins restricted to jackpot slots, which is exactly what readers of this site want. The jackpot library is slightly smaller than Aurora's, but the value on day one is unbeatable.",
    keyFacts: [
      { label: 'Licence', value: 'UKGC (example)' },
      { label: 'Slots', value: '900+ (30+ progressive jackpots)' },
      { label: 'Welcome offer', value: '100% up to £150 + 100 free spins, 30x (example)' },
      { label: 'Withdrawal time', value: '24–48 hours' },
      { label: 'Min deposit', value: '£10' },
    ],
    pros: [
      'Lowest wagering requirement (30x) in our top five',
      'Free spins usable on progressive jackpot slots',
      'Strong loyalty scheme with weekly jackpot-spin rewards',
    ],
    cons: ['Smaller overall game library than top-ranked rivals', 'No Apple Pay at time of review'],
    sections: [
      {
        heading: 'Bonuses and offers',
        paragraphs: [
          'The example welcome package is a 100% deposit match up to £150 plus 100 free spins, with 30x wagering on bonus funds. Crucially, the spins can be used on selected progressive jackpot slots — most casinos exclude progressives from free-spin offers entirely, which makes this genuinely unusual.',
          'The loyalty scheme awards weekly free spins on a featured jackpot title, and the terms page is written in plain English with a worked wagering example — a small touch that signals a trustworthy operator.',
        ],
      },
      {
        heading: 'Jackpot slots and games',
        paragraphs: [
          'The library spans roughly 900 slots including just over 30 jackpot titles. The essentials are covered — Mega Moolah, Divine Fortune, Wolf Gold and the Age of the Gods range — though you will not find the deeper cuts that Aurora carries. Table and live games are provided by Evolution and are solid, if unspectacular.',
        ],
      },
      {
        heading: 'Banking and safety',
        paragraphs: [
          'Deposits from £10 via debit card, PayPal and Skrill; withdrawals cleared in 24–48 hours in our tests. As a UKGC-licensed site (example), the full suite of safer-gambling tools is present, including deposit limits, time-outs and GAMSTOP self-exclusion.',
        ],
      },
    ],
    verdict:
      "For first-time depositors focused on jackpot slots, King's Vault offers the best day-one value in our rankings: lower wagering, jackpot-eligible free spins and clear terms. Regulars may eventually miss the deeper library found elsewhere.",
    faqs: [
      {
        question: "What is the wagering requirement at King's Vault?",
        answer:
          'The example welcome bonus carries 30x wagering on bonus funds, below the UK market norm of 35–40x. Free-spin winnings are credited as bonus funds subject to the same requirement.',
      },
      {
        question: 'Can free spins be used on progressive jackpots?',
        answer:
          'Yes — unusually, the welcome free spins are valid on selected progressive jackpot slots. Check the offer terms for the current eligible titles.',
      },
    ],
    affiliateUrl: 'https://example-tracking.link/kings-vault',
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'neon-spin',
    name: 'NeonSpin Casino',
    isExample: true,
    rating: 4.4,
    headline: 'Best for daily jackpots and fast payouts',
    licence: 'UK Gambling Commission (example)',
    established: 2021,
    metaTitle: 'NeonSpin Casino Review 2026 — Daily Jackpots & Instant Payouts',
    metaDescription:
      'NeonSpin Casino review: Red Tiger daily jackpots, instant e-wallet payouts and a slick mobile experience. Full expert review with pros, cons and FAQs.',
    intro:
      'NeonSpin is the modern, mobile-first pick in our rankings. Its calling cards are Red Tiger’s daily and hourly drop jackpots — prizes guaranteed to pay before a set deadline — and genuinely instant e-wallet withdrawals, which cleared in under an hour in every one of our tests.',
    keyFacts: [
      { label: 'Licence', value: 'UKGC (example)' },
      { label: 'Slots', value: '1,000+ (daily-drop jackpots)' },
      { label: 'Welcome offer', value: '50 no-wagering free spins (example)' },
      { label: 'Withdrawal time', value: 'Under 1 hour (e-wallets)' },
      { label: 'Min deposit', value: '£10' },
    ],
    pros: [
      'Fastest withdrawals we have tested (under one hour)',
      'Daily and hourly must-drop jackpots',
      'No-wagering welcome spins — winnings paid as cash',
    ],
    cons: ['No large network progressives like Mega Moolah', 'Customer support is chat-only'],
    sections: [
      {
        heading: 'Daily jackpots explained',
        paragraphs: [
          'Rather than chasing eight-figure network progressives, NeonSpin leans into Red Tiger’s Daily Drops: jackpots that must pay out before midnight each day, plus smaller hourly pots. Win rates are naturally higher than on mega-progressives because the pools are smaller and the deadline forces a payout — a different, faster-paced way to play jackpot slots.',
        ],
      },
      {
        heading: 'Bonuses and payouts',
        paragraphs: [
          'The example welcome offer is 50 free spins with no wagering attached — anything you win is withdrawable cash. That simplicity carries through to payouts: e-wallet withdrawals were processed in 20–55 minutes across our five test withdrawals, the fastest in this year’s review group.',
        ],
      },
      {
        heading: 'Safety and responsible gambling',
        paragraphs: [
          'A UKGC licence (example) brings the standard UK protections: segregated funds, GAMSTOP integration, deposit limits and reality checks. The mobile-first design extends to safer-gambling tools, which sit one tap from the lobby.',
        ],
      },
    ],
    verdict:
      'NeonSpin is the best choice for players who value speed: fast jackpots, fast payouts, no-nonsense bonuses. If your dream is specifically a Mega Moolah-sized win, look to Aurora or King’s Vault instead.',
    faqs: [
      {
        question: 'Does NeonSpin have Mega Moolah?',
        answer:
          'No. NeonSpin focuses on daily and hourly drop jackpots from Red Tiger rather than large network progressives. For Mega Moolah, see our reviews of Aurora Casino and King’s Vault.',
      },
      {
        question: 'Are the welcome free spins really wager-free?',
        answer:
          'Yes — in this example offer, winnings from the 50 welcome spins are credited as withdrawable cash with no wagering requirement. Standard verification rules still apply before withdrawal.',
      },
    ],
    affiliateUrl: 'https://example-tracking.link/neonspin',
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'grand-marina',
    name: 'Grand Marina Casino',
    isExample: true,
    rating: 4.3,
    headline: 'Best live casino with jackpot side bets',
    licence: 'UK Gambling Commission (example)',
    established: 2015,
    metaTitle: 'Grand Marina Casino Review 2026 — Live Casino & Jackpot Side Bets',
    metaDescription:
      'Grand Marina Casino review: 150+ live tables, progressive jackpot side bets on blackjack and baccarat, plus a 4.3/5 expert rating. Read the full review.',
    intro:
      'Grand Marina is our pick for players who want jackpots beyond the slot lobby. Its 150-table live casino includes blackjack and baccarat tables with progressive jackpot side bets, plus Evolution’s big-prize game shows. The slot selection is respectable, but live play is why you would choose it.',
    keyFacts: [
      { label: 'Licence', value: 'UKGC (example)' },
      { label: 'Live tables', value: '150+ (jackpot side bets)' },
      { label: 'Welcome offer', value: '100% up to £100 live casino bonus (example)' },
      { label: 'Withdrawal time', value: '24–72 hours' },
      { label: 'Min deposit', value: '£20' },
    ],
    pros: [
      'Progressive side bets on live blackjack and baccarat',
      'Full Evolution game-show range including jackpot titles',
      'Long operating history (est. 2015 in this example profile)',
    ],
    cons: ['£20 minimum deposit is higher than rivals', 'Slot jackpot selection is mid-table'],
    sections: [
      {
        heading: 'Live casino and jackpot side bets',
        paragraphs: [
          'The live floor is the deepest we have reviewed this year: 150+ tables spanning blackjack, roulette, baccarat and poker variants. The highlight for jackpot hunters is the progressive side bets — small optional wagers on selected blackjack and baccarat tables that feed a shared prize pool, occasionally reaching six figures.',
          'Evolution’s game shows (Crazy Time, Monopoly Live and the jackpot-carrying Funky Time) round out a lobby that comfortably beats every slots-first rival in this list for live variety.',
        ],
      },
      {
        heading: 'Slots, banking and safety',
        paragraphs: [
          'Around 800 slots including the core progressive names — enough for variety, though jackpot specialists will find deeper libraries elsewhere. Banking is dependable rather than fast (24–72 hours), and the £20 minimum deposit is the highest in our top five. Standard UKGC protections and safer-gambling tools apply (example licence).',
        ],
      },
    ],
    verdict:
      'Choose Grand Marina if live-dealer play is your game and you like the idea of a progressive prize landing on a blackjack side bet. Slots-first players will be better served higher up our rankings.',
    faqs: [
      {
        question: 'What are jackpot side bets?',
        answer:
          'Optional extra wagers on selected live blackjack and baccarat tables that feed a shared progressive prize pool. They are independent of your main hand and typically cost £1–£5 per round.',
      },
      {
        question: 'Is there a slots welcome offer?',
        answer:
          'The example headline offer targets the live casino, but a parallel slots offer is usually available — check the promotions page and always compare wagering terms.',
      },
    ],
    affiliateUrl: 'https://example-tracking.link/grand-marina',
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'lucky-fell',
    name: 'Lucky Fell Casino',
    isExample: true,
    rating: 4.2,
    headline: 'Best low-stakes jackpot casino',
    licence: 'UK Gambling Commission (example)',
    established: 2020,
    metaTitle: 'Lucky Fell Casino Review 2026 — Low Stakes Jackpot Slots from 10p',
    metaDescription:
      'Lucky Fell Casino review: play progressive jackpot slots from 10p a spin, £5 minimum deposit and strong safer-gambling tools. Expert-tested and rated.',
    intro:
      'Lucky Fell proves you do not need a big bankroll to chase a jackpot. With a £5 minimum deposit, progressive slots playable from 10p a spin and the most granular deposit-limit controls we have seen, it is our recommendation for casual, budget-conscious players.',
    keyFacts: [
      { label: 'Licence', value: 'UKGC (example)' },
      { label: 'Slots', value: '700+ (jackpots from 10p/spin)' },
      { label: 'Welcome offer', value: '£5 deposit unlocks 80 free spins (example)' },
      { label: 'Withdrawal time', value: '24–48 hours' },
      { label: 'Min deposit', value: '£5' },
    ],
    pros: [
      'Lowest minimum deposit (£5) in our rankings',
      'Progressive jackpots playable from 10p a spin',
      'Excellent granular safer-gambling controls',
    ],
    cons: ['Smallest game library in our top five', 'Free-spin winnings capped at £100'],
    sections: [
      {
        heading: 'Low-stakes jackpot play',
        paragraphs: [
          'Most progressive slots accept surprisingly small stakes — Mega Moolah spins start at 25p, and several Red Tiger daily-drop titles at Lucky Fell run from 10p. Remember that on some progressives the top jackpot is only available (or more likely) at higher stakes; the game rules page on each slot states this clearly, and our reviews flag it too.',
        ],
      },
      {
        heading: 'Offers, banking and safety',
        paragraphs: [
          'The example welcome route is simple: deposit £5, receive 80 free spins on a featured slot (winnings capped at £100, 35x wagering). Withdrawals cleared in 24–48 hours in testing. The safer-gambling hub stands out, offering per-day, per-week and per-month deposit limits, session reminders at custom intervals and one-tap time-outs.',
        ],
      },
    ],
    verdict:
      'For players who want the fun of jackpot slots at pocket-money stakes with best-in-class spending controls, Lucky Fell is an easy recommendation. High-rollers and variety-seekers should look higher up the table.',
    faqs: [
      {
        question: 'Can you really win a progressive jackpot at low stakes?',
        answer:
          'Yes — progressive jackpots can drop at any stake on most titles, though some games weight the odds by bet size or reserve the top pot for a bonus wheel more frequently triggered at higher stakes. Check each game’s rules panel.',
      },
      {
        question: 'What is the minimum deposit at Lucky Fell?',
        answer: 'Just £5 in this example profile — the lowest of any casino in our current top five.',
      },
    ],
    affiliateUrl: 'https://example-tracking.link/lucky-fell',
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
];

export function getCasino(slug: string): Casino | undefined {
  return casinos.find((c) => c.slug === slug);
}
