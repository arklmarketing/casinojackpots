import type { JackpotNewsArticle } from './types';

/**
 * News articles below cover well-documented historical jackpot events and
 * evergreen news-style roundups. New articles should be generated via the
 * JackpotNewsArticle prompt template (lib/prompts/templates.ts) from verified
 * source data — never invent winners, amounts or dates.
 */
export const news: JackpotNewsArticle[] = [
  {
    slug: 'biggest-online-casino-jackpots-ever',
    headline: 'The Biggest Online Casino Jackpots Ever Won',
    subhead: 'From a soldier’s 25p spin to an €18.9m record — the wins that made jackpot history',
    metaTitle: 'Biggest Online Casino Jackpots Ever — Record Slot Wins Ranked',
    metaDescription:
      'The biggest online casino jackpots ever won, ranked: the €18.9m Mega Moolah record, Jon Heywood’s £13.2m and more record slot payouts — with the stories behind them.',
    excerpt:
      'Online slots have paid out some staggering sums over the past two decades. We rank the record-breaking jackpot wins — and look at what they have in common.',
    publishedAt: '2026-06-15',
    updatedAt: '2026-07-01',
    authorId: 'news-desk',
    relatedSlotSlugs: ['mega-moolah', 'mega-fortune'],
    relatedCasinoSlugs: ['aurora-casino', 'kings-vault'],
    jackpotFacts: {
      amount: '18,915,872',
      currency: 'EUR',
      game: 'Mega Moolah (Absolootly Mad)',
      date: '2021-04-27',
      location: 'Belgium',
    },
    sections: [
      {
        paragraphs: [
          'Two decades of networked progressive slots have produced a remarkable roll of honour: ordinary players turned multi-millionaires by a single spin. The record books are dominated by two games — Microgaming’s Mega Moolah and NetEnt’s Mega Fortune — whose shared prize pools swell across hundreds of casinos simultaneously.',
        ],
      },
      {
        heading: 'The €18.9 million record',
        paragraphs: [
          'The largest widely-reported online slot payout stands at €18,915,872, won in April 2021 by a Belgian player on Absolootly Mad: Mega Moolah, part of the Mega Moolah progressive network. The win surpassed the previous Guinness World Record and underlined a pattern: the network’s biggest prizes tend to fall within months of the pool passing €10 million.',
        ],
      },
      {
        heading: 'Jon Heywood’s £13.2 million',
        paragraphs: [
          'Perhaps the most famous jackpot story remains that of Jon Heywood, a 26-year-old British soldier who won £13,213,838 on Mega Moolah in October 2015 from a 25p spin. The payout set the Guinness World Record at the time and remains the benchmark UK win. Heywood told reporters he planned to buy his father a yacht and fund medical treatment — a reminder that these stories resonate far beyond gambling circles.',
        ],
      },
      {
        heading: 'The €17.8 million Mega Fortune spin',
        paragraphs: [
          'NetEnt’s moment came in January 2013, when a Finnish player turned a 25-cent bet on Mega Fortune into €17,861,800 — Europe’s record at the time. The win was notable for its stake: proof that networked progressives can, and occasionally do, pay their top prize to minimum-stake players.',
        ],
      },
      {
        heading: 'What record wins have in common',
        paragraphs: [
          'Three threads run through nearly every record payout. The games are networked progressives, where pools build across many casinos at once. The winning stakes are frequently small — 25p and 25c appear repeatedly. And the wins cluster when pools are historically large, which is why our jackpot trackers highlight pots that have climbed well beyond their average drop point.',
          'None of this changes the fundamental odds: jackpot triggers are random, and no strategy can force one. But if you are going to chase a dream, the record books at least tell you which games have actually delivered it.',
        ],
      },
    ],
  },
  {
    slug: 'mega-moolah-13-million-record-win-story',
    headline: 'The 25p Spin That Won £13.2 Million: The Mega Moolah Record Win, Revisited',
    subhead: 'How a soldier’s late-night session produced the UK’s most famous online jackpot',
    metaTitle: 'Mega Moolah £13.2m Record Win — The Full Story of Jon Heywood',
    metaDescription:
      'The full story of Jon Heywood’s £13.2 million Mega Moolah jackpot — the 25p spin, the Guinness World Record and what happened next.',
    excerpt:
      'In October 2015, a 26-year-old British soldier placed a 25p spin on Mega Moolah and won £13,213,838 — a Guinness World Record. We revisit the win that defined online jackpots.',
    publishedAt: '2026-05-20',
    updatedAt: '2026-07-01',
    authorId: 'news-desk',
    relatedSlotSlugs: ['mega-moolah'],
    relatedCasinoSlugs: ['aurora-casino'],
    jackpotFacts: {
      amount: '13,213,838',
      currency: 'GBP',
      game: 'Mega Moolah',
      date: '2015-10-06',
      location: 'United Kingdom',
    },
    sections: [
      {
        paragraphs: [
          'Every industry has its defining story. For online slots, it is the night in October 2015 when Jon Heywood, a 26-year-old soldier from Cheshire recently returned from service in Afghanistan, opened Mega Moolah and placed a 25p spin.',
          'The jackpot wheel triggered, the pointer landed on the Mega segment, and Heywood became the holder of a new Guinness World Record: £13,213,838 — at the time the largest payout an online slot machine had ever awarded.',
        ],
      },
      {
        heading: 'A win that changed the conversation',
        paragraphs: [
          'What made the story travel far beyond gambling media was Heywood himself. His stated plans were disarmingly modest: a yacht for his father, and funding for the best available medical treatment for him. Mainstream newspapers that rarely covered online casinos ran the story on front pages, and Mega Moolah entered the public vocabulary as “the millionaire maker”.',
        ],
      },
      {
        heading: 'The mechanics behind the moment',
        paragraphs: [
          'Heywood’s stake matters to the story. Mega Moolah’s jackpot wheel can trigger on any real-money spin, with entry odds weighted by stake — yet a 25p bet took the entire Mega pool. It remains the clearest demonstration that while higher stakes improve the odds of entering the jackpot round, the prize itself is available at every bet level.',
          'The record has since been surpassed — a Belgian player’s €18.9 million Mega Moolah network win in 2021 currently tops the list — but Heywood’s remains the reference point for UK players, and the win every jackpot tracker page is quietly built around.',
        ],
      },
      {
        heading: 'The responsible-gambling footnote that matters',
        paragraphs: [
          'For every record winner there are millions of players who never see a jackpot round. Progressive slots pay for their headline prizes through below-average base returns, and no session should ever be funded by money you cannot afford to lose. If gambling has stopped feeling like entertainment, free and confidential support is available from GamCare and GambleAware.',
        ],
      },
    ],
  },
  {
    slug: 'how-jackpot-pools-build-and-when-they-drop',
    headline: 'Why Jackpot Pools Surge Past £10 Million — and What History Says Happens Next',
    subhead: 'Inside the mathematics of progressive prize pools and their drop cycles',
    metaTitle: 'When Do Progressive Jackpots Drop? Pool Cycles Explained',
    metaDescription:
      'Progressive jackpot pools follow visible build-and-drop cycles. We explain how pools grow, what "overdue" really means and how to read a jackpot tracker properly.',
    excerpt:
      'Progressive pools climb, break records, then reset to their seed value. Understanding that cycle — and its limits — is the key to reading jackpot news intelligently.',
    publishedAt: '2026-06-28',
    updatedAt: '2026-07-01',
    authorId: 'news-desk',
    relatedSlotSlugs: ['mega-moolah', 'divine-fortune', 'age-of-the-gods'],
    relatedCasinoSlugs: ['neon-spin'],
    sections: [
      {
        paragraphs: [
          'Jackpot news follows a rhythm. A network pool — Mega Moolah’s, WowPot’s, Age of the Gods’ — climbs for months, crosses a psychologically significant threshold, generates a flurry of coverage, then drops and resets to its seed value. Understanding that cycle is the difference between reading jackpot trackers intelligently and reading them superstitiously.',
        ],
      },
      {
        heading: 'How pools actually build',
        paragraphs: [
          'Every networked progressive takes a fixed percentage of each wager — roughly 8.8% for Mega Moolah, around 1% for Age of the Gods titles — and routes it to shared prize pools. Growth is therefore a direct function of network-wide play volume: the bigger a pool gets, the more coverage it attracts, the more it is played, and the faster it grows. Record pools are partly self-fuelling.',
        ],
      },
      {
        heading: 'What “overdue” really means',
        paragraphs: [
          'Here is the uncomfortable truth for pattern-seekers: jackpot triggers are random and memoryless. A pool that has built for eight months is not “due” in any mathematical sense — each spin’s chance is identical regardless of history. What is true is that larger pools produce larger wins when they eventually fall, and drop timing observed across many cycles gives averages, not predictions.',
          'That is how we recommend using our trackers: not to predict a drop, but to know when a pool is unusually large relative to its historical average — the only moment when a progressive’s effective return to player genuinely improves.',
        ],
      },
      {
        heading: 'The cycle in practice',
        paragraphs: [
          'When the Mega Moolah network pool passed €10 million in early 2021, play volume surged — and within weeks the record €18.9 million win landed in Belgium. The pattern has repeated at smaller scales across WowPot and Playtech’s networks. Watch the pools, understand the maths, and treat every headline about an “overdue” jackpot with the scepticism it deserves.',
        ],
      },
    ],
  },
];

export function getNewsArticle(slug: string): JackpotNewsArticle | undefined {
  return news.find((n) => n.slug === slug);
}

export function getLatestNews(limit?: number): JackpotNewsArticle[] {
  const sorted = [...news].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return limit ? sorted.slice(0, limit) : sorted;
}
