import type { SlotGame } from './types';

/**
 * Slot reviews reference real, well-known games. RTP and max-win figures are
 * the providers' published numbers as commonly reported — verify against the
 * provider's current game sheet before launch, as figures can vary by operator.
 */
export const slots: SlotGame[] = [
  {
    slug: 'mega-moolah',
    name: 'Mega Moolah',
    provider: 'Games Global (Microgaming)',
    jackpotType: 'progressive',
    rtp: '88.12% (published; verify with provider)',
    volatility: 'high',
    maxWin: 'Progressive — Mega jackpot seeds at £1,000,000',
    reels: '5',
    paylines: '25',
    rating: 4.6,
    metaTitle: 'Mega Moolah Review 2026 — RTP, Jackpot Odds & Where to Play',
    metaDescription:
      'Mega Moolah review: how the record-breaking progressive jackpot works, its 88.12% RTP explained, jackpot wheel odds and the best UK casinos to play it.',
    headline: 'The millionaire-maker: the most famous progressive slot ever built',
    intro:
      'No slot has minted more multi-millionaires than Mega Moolah. Launched in 2006 and now the flagship of the Games Global progressive network, its Mega jackpot seeds at £1 million and has paid out well beyond £10 million on multiple occasions — including the famous £13.2 million Guinness World Record win in 2015. Here is how it actually works, and what the headline RTP figure really means.',
    sections: [
      {
        heading: 'How the jackpot works',
        paragraphs: [
          'Mega Moolah carries four progressive pots — Mini, Minor, Major and Mega — funded by a small slice of every wager placed across the entire network of casinos carrying the game. The jackpot bonus wheel triggers at random on any spin; land the centre segment and the Mega pot is yours, paid as a lump sum.',
          'The trigger is random but weighted by stake: higher bets earn proportionally more wheel entries. That does not mean small stakes cannot win — jackpots have dropped at 25p — but it is a fact worth knowing before you choose a bet size.',
        ],
      },
      {
        heading: 'RTP and volatility explained',
        paragraphs: [
          'The published base RTP of 88.12% looks low against the 96% industry standard, but roughly 8.8% of every stake feeds the progressive pools rather than base-game returns. In effect, you trade short-term return for a shot at a life-changing prize. Volatility is high: expect long quiet stretches punctuated by the free-spins round, where all wins are tripled.',
        ],
      },
      {
        heading: 'Base game and features',
        paragraphs: [
          'The safari-themed base game is deliberately simple: 5 reels, 25 paylines, a lion wild that doubles wins and a scatter-triggered round of 15 free spins with a 3x multiplier. Nobody plays Mega Moolah for the base game — but the free-spins round is where the biggest non-jackpot wins land.',
        ],
      },
    ],
    verdict:
      'Mega Moolah remains the definitive progressive slot: the biggest average jackpots, the richest history and a genuinely random trigger that keeps every spin live. Accept the below-average base RTP for what it is — the entry fee to the biggest prize pool in online slots.',
    faqs: [
      {
        question: 'What is the biggest Mega Moolah win ever?',
        answer:
          'Wins above £13 million have been recorded, including Jon Heywood’s £13.2 million win in 2015, which set a Guinness World Record for an online slot payout at the time.',
      },
      {
        question: 'Why is Mega Moolah’s RTP only 88.12%?',
        answer:
          'Around 8.8% of every bet funds the four progressive jackpot pools. Combined, total theoretical return approaches the industry norm — but most of it is concentrated in rare, enormous jackpot payouts.',
      },
      {
        question: 'Can you win the Mega jackpot on a small stake?',
        answer:
          'Yes — the wheel can trigger on any spin at any stake, and small-stake wins have happened. Higher stakes do earn proportionally more wheel entries, however.',
      },
    ],
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'mega-fortune',
    name: 'Mega Fortune',
    provider: 'NetEnt',
    jackpotType: 'progressive',
    rtp: '96.6% base (published; verify with provider)',
    volatility: 'medium',
    maxWin: 'Progressive — record win of €17.8 million',
    reels: '5',
    paylines: '25',
    rating: 4.4,
    metaTitle: 'Mega Fortune Review 2026 — The €17.8 Million Record Slot',
    metaDescription:
      'Mega Fortune review: NetEnt’s luxury-themed progressive that paid Europe’s record €17.8m online jackpot. RTP, bonus wheel odds and where to play in the UK.',
    headline: 'The slot behind Europe’s record online jackpot',
    intro:
      'Mega Fortune is NetEnt’s answer to Mega Moolah — a champagne-and-yachts progressive that famously paid a Finnish player €17.8 million in 2013 from a 25-cent spin, a European record that stood for years. Unusually for a big progressive, its base RTP is a healthy 96.6%, making it one of the more forgiving jackpot slots to actually sit and play.',
    sections: [
      {
        heading: 'The bonus wheel',
        paragraphs: [
          'Land three bonus symbols on a payline to enter a three-tier wheel. Each inner ring raises the stakes: Rapid, Major and finally the Mega progressive. Arrows can also drop you back out with a coin win, which keeps the feature tense without being cruel — most entries pay something.',
        ],
      },
      {
        heading: 'RTP, stakes and strategy',
        paragraphs: [
          'With a published 96.6% base return, Mega Fortune costs meaningfully less to play per hour than Mega Moolah, at the price of somewhat smaller average jackpots. Bet levels affect how often you reach the wheel’s inner rings, so the same honest caveat applies: read the paytable and set a budget before you spin.',
        ],
      },
    ],
    verdict:
      'The thinking player’s progressive: near-standard base RTP, a genuinely fun wheel and a record-setting history. If you want jackpot excitement without Mega Moolah’s brutal base game, start here.',
    faqs: [
      {
        question: 'What is the biggest Mega Fortune win?',
        answer:
          'A €17,861,800 win in January 2013 — at the time the largest online slot payout ever recorded, and still one of the biggest in history.',
      },
      {
        question: 'Is Mega Fortune better than Mega Moolah?',
        answer:
          'They target different players. Mega Fortune offers a much higher base RTP (96.6% vs 88.12%) and steadier play; Mega Moolah offers larger average top jackpots. Choose based on whether session value or maximum prize matters more to you.',
      },
    ],
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'divine-fortune',
    name: 'Divine Fortune',
    provider: 'NetEnt',
    jackpotType: 'progressive',
    rtp: '96.09% base (published; verify with provider)',
    volatility: 'medium',
    maxWin: 'Local progressive — typically five to six figures',
    reels: '5',
    paylines: '20',
    rating: 4.3,
    metaTitle: 'Divine Fortune Review 2026 — RTP, Falling Wilds & Jackpot Guide',
    metaDescription:
      'Divine Fortune review: NetEnt’s Greek-myth progressive with Falling Wilds, a high 96.09% RTP and frequent local jackpots. Full expert review and FAQs.',
    headline: 'The most winnable progressive in the mainstream market',
    intro:
      'Divine Fortune trades eight-figure dreams for something rarer among progressives: jackpots that actually drop often. Its Grand pot is local (per-operator) rather than networked, typically landing in the tens of thousands — and because pools are smaller, they pay far more frequently than the mega-networks. Combined with a 96.09% base RTP, it is arguably the best everyday progressive on the market.',
    sections: [
      {
        heading: 'Features that carry the game',
        paragraphs: [
          'The Greek-mythology base game is unusually rich for a progressive: Falling Wilds that shift down the reels over consecutive spins, a Wild on Wild feature, and free spins where every wild triggers a re-drop. The jackpot round is a coin-collection bonus — gather enough Medusa coins and you climb from Minor to Major to the Grand pot.',
        ],
      },
      {
        heading: 'Why local jackpots matter',
        paragraphs: [
          'Because each operator runs its own Grand pool, the prize is smaller but the mathematics are friendlier: fewer players share each pool, so it fills and drops on a much faster cycle. If your goal is “win a jackpot someday” rather than “win eight figures or nothing”, this structure is genuinely better suited to it.',
        ],
      },
    ],
    verdict:
      'The best progressive for realists: strong base game, honest RTP and jackpots measured in months rather than years between drops. A staple of our recommended list.',
    faqs: [
      {
        question: 'How big is the Divine Fortune jackpot?',
        answer:
          'It varies by operator because the Grand pot is local. Typical drops range from the low tens of thousands to six figures — far smaller than Mega Moolah, but far more frequent.',
      },
      {
        question: 'What is Divine Fortune’s RTP?',
        answer:
          'The published base RTP is 96.09%, unusually high for a progressive jackpot slot. Verify the figure on your chosen casino, as operators can license reduced-RTP variants of some titles.',
      },
    ],
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'wolf-gold',
    name: 'Wolf Gold',
    provider: 'Pragmatic Play',
    jackpotType: 'fixed',
    rtp: '96.01% (published; verify with provider)',
    volatility: 'medium',
    maxWin: 'Mega Jackpot — 1,000x total bet',
    reels: '5',
    paylines: '25',
    rating: 4.2,
    metaTitle: 'Wolf Gold Review 2026 — Money Respin & 1,000x Mega Jackpot',
    metaDescription:
      'Wolf Gold review: Pragmatic Play’s classic with the Money Respin feature and a fixed 1,000x Mega Jackpot. RTP, volatility and expert verdict.',
    headline: 'The fixed-jackpot classic that never leaves the top ten',
    intro:
      'Wolf Gold is proof that a jackpot does not need to be progressive to be worth chasing. Its Money Respin feature — lock six or more moon symbols and respin for more — can award a fixed Mega Jackpot of 1,000x your total bet. Seven years after release it still sits in the most-played lists at almost every UK casino, and for good reason.',
    sections: [
      {
        heading: 'The Money Respin feature',
        paragraphs: [
          'Land six moon symbols to trigger three respins on a blank reel set. Every new moon locks and resets the counter; fill all fifteen positions and the Mega Jackpot (1,000x bet) is yours. Moons carry cash values or Mini/Major jackpot tags, so even partial fills pay meaningfully. It is a simple, transparent mechanic — you can always see exactly what you are chasing.',
        ],
      },
      {
        heading: 'Why fixed jackpots suit most players',
        paragraphs: [
          'Because the 1,000x prize is funded by the game’s own maths rather than a shared pool, the RTP is a full 96.01% with no hidden progressive tax. At £1 a spin the Mega Jackpot is £1,000; at £5 it is £5,000. Predictable, scalable and far more attainable than any networked progressive — the right trade-off for most everyday players.',
        ],
      },
    ],
    verdict:
      'A perfectly-tuned crowd-pleaser: standard RTP, medium volatility and a jackpot feature you will actually see trigger. The ideal first jackpot slot, and a reliable staple thereafter.',
    faqs: [
      {
        question: 'Is Wolf Gold a progressive jackpot slot?',
        answer:
          'No — its three jackpots (Mini, Major, Mega) are fixed multiples of your stake, with the Mega worth 1,000x total bet. This keeps the RTP at a full 96.01% with no progressive contribution.',
      },
      {
        question: 'How do you win the Wolf Gold Mega Jackpot?',
        answer:
          'Fill all 15 reel positions with moon symbols during the Money Respin feature. The feature triggers when six or more moons land in the base game.',
      },
    ],
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
  {
    slug: 'age-of-the-gods',
    name: 'Age of the Gods',
    provider: 'Playtech',
    jackpotType: 'progressive',
    rtp: '95.02% base (published; verify with provider)',
    volatility: 'medium',
    maxWin: 'Ultimate Power progressive — guaranteed win in jackpot game',
    reels: '5',
    paylines: '20',
    rating: 4.1,
    metaTitle: 'Age of the Gods Review 2026 — Playtech’s Progressive Network',
    metaDescription:
      'Age of the Gods review: Playtech’s flagship progressive series with a four-tier jackpot game that always pays. RTP, features and best UK casinos.',
    headline: 'The jackpot round that never sends you away empty-handed',
    intro:
      'Age of the Gods anchors Playtech’s sprawling Greek-mythology series — more than twenty linked titles feeding four shared progressive pools. Its defining quality: the randomly-triggered jackpot game always pays one of the four pots. Once you are in, a prize is guaranteed; the only question is which tier.',
    sections: [
      {
        heading: 'The four-tier jackpot game',
        paragraphs: [
          'The jackpot round triggers at random on any real-money spin. You pick from twenty coins to match three symbols, and the first tier matched — Power, Extra Power, Super Power or Ultimate Power — is the pot you win. Because every entry pays, the feature feels rewarding even when the top pool escapes you.',
        ],
      },
      {
        heading: 'The wider series',
        paragraphs: [
          'The same jackpot network runs across the whole Age of the Gods family — King of Olympus, Furious 4, Norse Legends and more — so you can rotate games without leaving the prize pool. Base RTPs across the series hover around 95%, reflecting the roughly 1% progressive contribution.',
        ],
      },
    ],
    verdict:
      'The friendliest introduction to progressive jackpots: a guaranteed-payout jackpot round, a huge series to explore and pots that drop frequently at the lower tiers. Top-tier prizes trail Mega Moolah’s, but the journey is far more forgiving.',
    faqs: [
      {
        question: 'Does the Age of the Gods jackpot game always pay?',
        answer:
          'Yes — once the jackpot game triggers, you are guaranteed to win one of the four progressive pots. The tier depends on which symbols you match first.',
      },
      {
        question: 'Which Age of the Gods slot is best?',
        answer:
          'All series titles share the same four progressive pools, so choose on base-game preference. The original Age of the Gods and King of Olympus are the most popular among UK players.',
      },
    ],
    lastUpdated: '2026-07-01',
    authorId: 'editorial-team',
  },
];

export function getSlot(slug: string): SlotGame | undefined {
  return slots.find((s) => s.slug === slug);
}
