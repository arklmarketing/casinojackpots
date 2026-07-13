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
  {
    slug: 'jackpot-king',
    name: 'Jackpot King',
    provider: 'Blueprint Gaming',
    jackpotType: 'progressive',
    rtp: 'Varies by base game, typically ~95% (verify per title)',
    volatility: 'high',
    maxWin: 'Jackpot King pot — multi-million network progressive',
    reels: 'Varies by game',
    paylines: 'Varies by game',
    rating: 4.3,
    metaTitle: 'Jackpot King Review 2026 — Blueprint’s Progressive Network',
    metaDescription:
      'Jackpot King review: how Blueprint Gaming’s Wheel King progressive works across 7s Deluxe, King Kong Cashpots and Deal or No Deal — with real UK win history.',
    headline: 'The UK’s most active multi-million slot network',
    intro:
      'Jackpot King is Blueprint Gaming’s flagship progressive system, bolted onto dozens of popular UK slots — 7s Deluxe, King Kong Cashpots, Fishin’ Frenzy and the Deal or No Deal series among them. Its claim to fame is delivery: documented UK payouts include a £5.4 million King Kong Cashpots win in January 2023 and £4.3 million on Deal or No Deal Bankers Boost in October 2024, making it arguably the most productive non-Microgaming network for British players.',
    sections: [
      {
        heading: 'How the Wheel King works',
        paragraphs: [
          'Land five Jackpot King overlay symbols across the reels of any participating game to enter the bonus ladder. Climb far enough and you reach the Wheel King — a wheel whose top segment awards the network-wide Jackpot King pot. Lower rungs pay the smaller Royal and Regal pots, so entries frequently return something even when the main prize escapes you.',
          'Because the overlay system sits on top of ordinary slots, you choose your base game by taste — fruit machine, fishing or game-show branding — while chasing the same shared prize pool from any of them.',
        ],
      },
      {
        heading: 'Value and volatility',
        paragraphs: [
          'Base-game RTPs across the family sit around the 95% mark, a little below premium standalone slots, with roughly 1% feeding the pools. The pot cycle is healthy: the network pays multi-million prizes far more often than most rivals, though as always each spin’s odds are random and unaffected by pool size.',
        ],
      },
    ],
    verdict:
      'The best progressive network for players who want variety: dozens of familiar base games, a proven multi-million payout record and a bonus ladder that pays something on most visits. Check each title’s RTP before you settle in — they vary.',
    faqs: [
      {
        question: 'Which slots are part of Jackpot King?',
        answer:
          'Dozens of Blueprint Gaming titles including 7s Deluxe, King Kong Cashpots, Fishin’ Frenzy, Ted and the Deal or No Deal series. All feed and pay the same shared pots.',
      },
      {
        question: 'What is the biggest Jackpot King win?',
        answer:
          'Documented UK wins include £5.4 million on King Kong Cashpots (January 2023) and £4.3 million on Deal or No Deal Bankers Boost (October 2024), both at Betfred.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'mega-jackpots',
    name: 'Mega Jackpots',
    provider: 'IGT',
    jackpotType: 'progressive',
    rtp: 'Varies by base game (verify per title)',
    volatility: 'high',
    maxWin: 'MegaJackpots pool — seven-figure network progressive',
    reels: 'Varies by game',
    paylines: 'Varies by game',
    rating: 4.0,
    metaTitle: 'MegaJackpots Review 2026 — IGT’s Progressive Slots Network',
    metaDescription:
      'MegaJackpots review: IGT’s long-running progressive network across Cleopatra, Siberian Storm and Golden Goddess — mechanics, win history and honest verdict.',
    headline: 'Vegas heritage with a seven-figure UK prize pool',
    intro:
      'MegaJackpots is IGT’s veteran progressive network, carrying some of the most recognisable names in slots: Cleopatra, Siberian Storm, Golden Goddess, Elephant King and more. It is the closest thing online to a Las Vegas linked-progressive bank — and it has UK form, including a £1.35 million Siberian Storm win in December 2023 and £1.3 million on Cleopatra in 2019.',
    sections: [
      {
        heading: 'How it pays',
        paragraphs: [
          'Each participating game carries a MegaJackpots symbol or feature; line up the requirements — typically the jackpot symbols across a payline — and the full network pool is yours. There is no intermediate wheel or ladder in most titles, which makes it one of the more direct progressive mechanics: rare, but unambiguous when it lands.',
          'The pool builds across all participating casinos and games, and typically drops in the high six to low seven figures for UK players.',
        ],
      },
      {
        heading: 'The games themselves',
        paragraphs: [
          'The base games are classic IGT: familiar Vegas mathematics, moderate feature sets and themes that have run for a decade or more. Cleopatra remains the standout — its free-spins round with tripled wins is a genuine classic. RTPs vary by title and operator build, so check the rules panel on the version you play.',
        ],
      },
    ],
    verdict:
      'Choose MegaJackpots for the pedigree and the directness of its jackpot mechanic. The base games feel dated next to modern releases, but the network’s payout history is real and the top prizes are life-changing by any standard.',
    faqs: [
      {
        question: 'Which slots are in the MegaJackpots network?',
        answer:
          'UK-facing titles include Cleopatra, Siberian Storm, Golden Goddess, Elephant King, Ocean Belles, Mistress of Egypt and Jungle Tower, among others.',
      },
      {
        question: 'How do you win the MegaJackpots prize?',
        answer:
          'Requirements vary by game but typically involve landing the MegaJackpots symbols across a payline at qualifying stakes. The full network pool is paid to a single winner.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'empire-treasures',
    name: 'Empire Treasures',
    provider: 'Playtech',
    jackpotType: 'progressive',
    rtp: '~96% by title (Pride of Persia 95.99%; verify per game)',
    volatility: 'medium',
    maxWin: 'Empire Treasures top pot — six-figure progressive',
    reels: '5 (typical)',
    paylines: '40 (Wild Crusade; varies by title)',
    rating: 3.9,
    metaTitle: 'Empire Treasures Review 2026 — Playtech’s Jackpot Series',
    metaDescription:
      'Empire Treasures review: Playtech’s history-themed progressive series — Pride of Persia, Vikings, Wild Crusade — with strong ~96% RTPs and tiered jackpots.',
    headline: 'The rare progressive series that keeps a full-strength RTP',
    intro:
      'Empire Treasures is Playtech’s history-themed jackpot family — Pride of Persia, Vikings, Wild Crusade, The Queen’s Curse and Rulers of the World — sharing a tiered progressive prize pool. Its quiet superpower is value: published base RTPs around 96% (Pride of Persia 95.99%, The Queen’s Curse 96.34%) make these some of the least punishing progressive slots you can play.',
    sections: [
      {
        heading: 'The series and its jackpots',
        paragraphs: [
          'Each title wraps a different historical empire around solid five-reel gameplay — expanding wilds and multipliers in Wild Crusade, 40-line action in most of the family. The shared progressive pool sits on top, with tiered pots that keep smaller prizes dropping regularly while the top pot builds into six figures.',
        ],
      },
      {
        heading: 'Who it suits',
        paragraphs: [
          'This is the progressive family for players who refuse to pay the usual jackpot tax. With RTPs at or near the standard 96% benchmark, you give up very little session value for genuine jackpot eligibility — the trade-off that makes purists wince at Mega Moolah simply is not here. The ceiling is lower, but so is the cost of chasing it.',
        ],
      },
    ],
    verdict:
      'The value pick among Playtech’s jackpot families: near-standard RTPs, handsome games and a tiered pool that pays often enough to feel alive. If you play progressives regularly rather than dreaming of one enormous hit, start here.',
    faqs: [
      {
        question: 'Which games are in the Empire Treasures series?',
        answer:
          'Pride of Persia, Vikings, Wild Crusade, The Queen’s Curse and Rulers of the World, each sharing the same tiered progressive jackpot pool.',
      },
      {
        question: 'What is the RTP of Empire Treasures slots?',
        answer:
          'Published figures sit around 96% — Pride of Persia at 95.99% and The Queen’s Curse at 96.34% — unusually high for progressive jackpot slots. Verify the build at your casino.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'pixel-samurai',
    name: 'Pixel Samurai',
    provider: 'Playtech',
    jackpotType: 'progressive',
    rtp: '92.99%–93.98% depending on build (verify with provider)',
    volatility: 'high',
    maxWin: 'Progressive jackpot + up to 50,000x cluster wins',
    reels: '5×5 grid',
    paylines: 'Cluster pays (no paylines)',
    rating: 3.8,
    metaTitle: 'Pixel Samurai Review 2026 — Retro Cluster Slot with a Jackpot',
    metaDescription:
      'Pixel Samurai review: Playtech’s 16-bit retro cluster slot with cascading wins and a progressive jackpot triggered by samurai clusters. RTP and verdict.',
    headline: 'A 16-bit oddity hiding a serious progressive',
    intro:
      'Pixel Samurai is the outlier on our tracker: a retro, 16-bit-styled cluster slot from Playtech that plays nothing like the rest of the jackpot field. Wins form from clusters of five or more matching symbols on its 5×5 grid, cascades replace winning symbols, and the progressive jackpot triggers through clusters of the game’s samurai symbols — with the pot share growing the bigger the cluster you land.',
    sections: [
      {
        heading: 'How the jackpot triggers',
        paragraphs: [
          'Land a cluster of eight or more of the top samurai symbols and the progressive pays out, alongside a fixed multiplier win — bigger clusters take a larger slice of the pool. It is a genuinely different trigger mechanic: skill-free like all slots, but visible on the board as it almost happens, which gives near-misses a tension most progressives lack.',
        ],
      },
      {
        heading: 'The honest caveats',
        paragraphs: [
          'The published RTP runs between 92.99% and 93.98% depending on the operator’s build — below the 96% standard and below several rivals on this tracker, with high volatility from the cluster mathematics. Stakes run from 10p to £10 a spin. Treat it as a novelty with a jackpot attached rather than an everyday grinder.',
        ],
      },
    ],
    verdict:
      'Worth a spin for the change of pace and the watchable jackpot mechanic, but the below-par RTP means it should not be your main progressive. Play it when its pot on our tracker looks unusually plump.',
    faqs: [
      {
        question: 'How do you win the Pixel Samurai jackpot?',
        answer:
          'By landing a cluster of eight or more top samurai symbols on the 5×5 grid. Larger clusters award a larger share of the progressive pool, on top of a fixed multiplier payout.',
      },
      {
        question: 'What is Pixel Samurai’s RTP?',
        answer:
          'Between 92.99% and 93.98% depending on the version your casino runs — below the industry standard, which is the price of its progressive pool. Check the in-game rules panel.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'jackpot-blitz',
    name: 'Jackpot Blitz',
    provider: 'Playtech',
    jackpotType: 'progressive',
    rtp: 'Varies by base game (verify per title)',
    volatility: 'medium',
    maxWin: 'Blitz progressive pool — six-figure top pot',
    reels: 'Varies by game',
    paylines: 'Varies by game',
    rating: 3.8,
    metaTitle: 'Jackpot Blitz Review 2026 — Playtech’s Fast-Cycle Progressive',
    metaDescription:
      'Jackpot Blitz review: Playtech’s progressive layer on Buffalo Blitz Mega Merge, Epic Ape 2 and Sharks! — how it works and who it suits.',
    headline: 'Big-name Playtech slots with a shared six-figure pool',
    intro:
      'Jackpot Blitz bolts a shared progressive onto some of Playtech’s most popular action slots — Buffalo Blitz Mega Merge, Epic Ape 2, Sharks! and King Blitz. The formula is simple: take base games players already love, add a pooled jackpot that regularly builds into six figures, and let the network do the rest.',
    sections: [
      {
        heading: 'How it plays',
        paragraphs: [
          'Each participating slot keeps its own identity — Buffalo Blitz’s merge mechanics, Epic Ape’s stacked wilds — with the Blitz jackpot feature layered on top, triggering at random on real-money spins. Because the pool is shared across a small stable of high-traffic games, it cycles faster than giant networks: expect more frequent, more modest drops.',
        ],
      },
      {
        heading: 'Who it suits',
        paragraphs: [
          'Players who pick their slot first and treat the jackpot as a bonus. If you already enjoy the Blitz-family base games, the progressive is effectively free excitement; if you are purely jackpot-hunting, larger pools elsewhere on our tracker will tempt you more.',
        ],
      },
    ],
    verdict:
      'A solid everyday progressive: strong base games, a pool that actually cycles, and no need to learn anything new. Not the biggest prize on the board — but one of the more realistic ones.',
    faqs: [
      {
        question: 'Which games carry the Jackpot Blitz progressive?',
        answer:
          'Buffalo Blitz Mega Merge, Epic Ape 2, Sharks! and King Blitz at participating casinos, all feeding the same shared pool.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'sporting-legends',
    name: 'Sporting Legends',
    provider: 'Playtech',
    jackpotType: 'progressive',
    rtp: 'Varies by base game (verify per title)',
    volatility: 'medium',
    maxWin: 'Sporting Legends top pot — six-figure progressive',
    reels: '5 (typical)',
    paylines: 'Varies by game',
    rating: 3.9,
    metaTitle: 'Sporting Legends Review 2026 — Playtech’s Sports Jackpot Series',
    metaDescription:
      'Sporting Legends review: Playtech’s sports-star slot series — Dettori, O’Sullivan, Bruno — sharing a tiered progressive jackpot. Mechanics and verdict.',
    headline: 'British sporting heroes fronting a tiered prize pool',
    intro:
      'Sporting Legends is Playtech’s most distinctly British jackpot family: officially licensed slots fronted by Frankie Dettori, Ronnie O’Sullivan, Frank Bruno, AP McCoy, Roberto Carlos and Bobby George, all feeding one tiered progressive pool. For sports fans it is an easy sell; for jackpot hunters, the tiered structure keeps prizes landing regularly while the top pot builds well into six figures.',
    sections: [
      {
        heading: 'The series',
        paragraphs: [
          'Each title celebrates its athlete with themed features — racing bonuses for Dettori and McCoy, snooker breaks for O’Sullivan, boxing rounds for Bruno. Under the branding they are dependable five-reel Playtech slots, and every one contributes to and can pay the shared Sporting Legends pool.',
          'The pool is tiered, with smaller pots designed to drop frequently — a structure that favours regular players over long-shot dreamers.',
        ],
      },
    ],
    verdict:
      'The personality pick: licensed British sports stars, dependable base games and a tiered pool with a realistic drop rhythm. Ideal if you want your jackpot chase to come with familiar faces.',
    faqs: [
      {
        question: 'Which stars feature in Sporting Legends?',
        answer:
          'Frankie Dettori, Ronnie O’Sullivan, Frank Bruno, AP McCoy, Roberto Carlos and Bobby George each front their own officially licensed slot in the series.',
      },
      {
        question: 'Do all Sporting Legends games share one jackpot?',
        answer:
          'Yes — every title in the series feeds and can trigger the same tiered Sporting Legends progressive pool at participating casinos.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'adventures-beyond-wonderland',
    name: 'Adventures Beyond Wonderland',
    provider: 'Playtech Live',
    jackpotType: 'progressive',
    rtp: 'Varies by bet type (verify with operator)',
    volatility: 'high',
    maxWin: 'Progressive pool + multiplier wheel wins',
    reels: 'Live game show (wheel)',
    paylines: 'N/A',
    rating: 3.9,
    metaTitle: 'Adventures Beyond Wonderland Review 2026 — Live Jackpot Show',
    metaDescription:
      'Adventures Beyond Wonderland review: Playtech’s Alice-themed live game show with multiplier wheels, Wonderspins and a progressive prize pool.',
    headline: 'The jackpot that lives inside a live game show',
    intro:
      'Adventures Beyond Wonderland is the tracker’s only live entry: an Alice in Wonderland-themed game show from Playtech Live, hosted by real presenters around a giant money wheel. Players bet on wheel segments, chase multiplier-stacking bonus rounds like Wonderspins and Magic Dice — and at participating operators, a progressive prize pool sits on top of the show.',
    sections: [
      {
        heading: 'How the show works',
        paragraphs: [
          'Each round, the host spins a 54-segment wheel; you win by backing the segment it stops on. Number segments pay fixed odds, while bonus segments launch augmented-reality features where multipliers can compound dramatically. The progressive element gives regular viewers a jackpot stake in every spin.',
          'It is streamed continuously with betting open to any stake level, which makes it the most accessible entry point on this list — no slot knowledge required.',
        ],
      },
      {
        heading: 'The honest caveats',
        paragraphs: [
          'Returns vary meaningfully by bet type — the flashy bonus segments carry worse odds than the plain numbers, and house edge on live game shows generally exceeds that of good slots. Treat it as entertainment first: the show is genuinely fun, and the jackpot is the garnish rather than the meal.',
        ],
      },
    ],
    verdict:
      'The most sociable way to chase a progressive: a polished live show where the jackpot rides along with the entertainment. Bet the number segments for value, enjoy the bonus rounds for the spectacle.',
    faqs: [
      {
        question: 'Is Adventures Beyond Wonderland a slot?',
        answer:
          'No — it is a live game show with real hosts and a money wheel, streamed continuously. The progressive jackpot applies at participating operators alongside the show’s standard bets.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
  {
    slug: 'gladiator',
    name: 'Gladiator Jackpot',
    provider: 'Playtech',
    jackpotType: 'progressive',
    rtp: '~91.5% (published; verify with provider)',
    volatility: 'medium',
    maxWin: 'Gladiator Jackpot — full progressive pool via 9 gold helmets',
    reels: '5',
    paylines: '25',
    rating: 3.8,
    metaTitle: 'Gladiator Jackpot Review 2026 — The 9-Helmet Progressive',
    metaDescription:
      'Gladiator Jackpot review: Playtech’s movie-licensed classic where nine golden helmets win the full progressive pool. Mechanics, RTP and honest verdict.',
    headline: 'Nine golden helmets between you and the whole pool',
    intro:
      'Gladiator Jackpot is Playtech’s enduring adaptation of the Ridley Scott epic, and its jackpot mechanic is the most theatrical on our tracker: trigger the Coliseum bonus and a wall of nine helmets appears — turn all nine gold and the entire progressive pool is yours. Sixteen years on, the film licence and that all-or-nothing helmet wall keep it in casino lobbies everywhere.',
    sections: [
      {
        heading: 'The helmet bonus',
        paragraphs: [
          'Three wild Gladiator symbols on the middle reels launch the bonus: nine helmets, each hiding bronze, silver or gold. Every combination pays something, but nine golds — rare, random and unforgettable when it happens — award the full progressive jackpot rather than a tier of it. No wheel, no ladder: the purest jackpot moment in slots.',
        ],
      },
      {
        heading: 'The price of the drama',
        paragraphs: [
          'The published RTP of roughly 91.5% is the lowest on our tracker — a hefty progressive contribution plus an ageing maths model. Play it for the film, the helmet wall and the pool size, not for session value; modern alternatives return meaningfully more per hour.',
        ],
      },
    ],
    verdict:
      'A nostalgia pick with the most dramatic jackpot reveal in the business. The RTP is genuinely poor by modern standards, so keep sessions short and stakes modest — but when that ninth helmet turns gold, nothing else in slots compares.',
    faqs: [
      {
        question: 'How do you win the Gladiator Jackpot?',
        answer:
          'Trigger the helmet bonus with three wild symbols, then reveal gold behind all nine helmets. Nine golds pay the entire progressive pool; mixed combinations pay smaller amounts.',
      },
      {
        question: 'What is Gladiator Jackpot’s RTP?',
        answer:
          'Around 91.5% as published — low by modern standards, reflecting the progressive contribution. Check the rules panel at your casino for the exact build.',
      },
    ],
    lastUpdated: '2026-07-13',
    authorId: 'editorial-team',
  },
];

export function getSlot(slug: string): SlotGame | undefined {
  return slots.find((s) => s.slug === slug);
}
