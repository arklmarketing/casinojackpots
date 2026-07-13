import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'Best Casino Games UK 2026 — Slots, Table & Live Games Explained',
  description:
    'The best online casino games for UK players: jackpot slots, blackjack, roulette, baccarat and live dealer games — compared by RTP, house edge and jackpot potential.',
  path: '/games',
});

const GAME_CATEGORIES = [
  {
    name: 'Jackpot Slots',
    href: '/slots',
    rtp: '88–96%',
    description:
      'The heart of this site: progressive, fixed and daily-drop jackpot slots reviewed in depth. Progressives trade base return for shots at seven-figure pools; fixed jackpots keep full RTP with attainable prizes.',
    cta: 'Browse slot reviews →',
  },
  {
    name: 'Blackjack',
    href: '/guides',
    rtp: '~99.5% with basic strategy',
    description:
      'The best-value game on any casino floor. Basic strategy reduces the house edge below 0.5%, and live tables with progressive side bets add a jackpot dimension — at a price. Side bets typically carry a far higher house edge than the main hand.',
    cta: 'Read our guides →',
  },
  {
    name: 'Roulette',
    href: '/guides',
    rtp: '97.3% (European single-zero)',
    description:
      'Choose European or French tables over American double-zero every time — the extra zero nearly doubles the house edge. French rules (la partage) on even-money bets push RTP to 98.65%, the best roulette gets.',
    cta: 'Read our guides →',
  },
  {
    name: 'Live Dealer & Game Shows',
    href: '/casinos/netbet',
    rtp: '95–99% by game',
    description:
      'Streamed tables with real dealers, plus Evolution’s game-show formats — several carrying progressive jackpots. NetBet’s live floor runs on Evolution, from Immersive Roulette to Monopoly Big Baller.',
    cta: 'Read our NetBet review →',
  },
  {
    name: 'Baccarat',
    href: '/guides',
    rtp: '98.9% (banker bet)',
    description:
      'Simple, fast and statistically generous: the banker bet’s 1.06% house edge is among the lowest in the casino. Ignore the tie bet — its edge exceeds 14% — and treat side-bet jackpots as entertainment, not strategy.',
    cta: 'Read our guides →',
  },
];

export default function GamesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Casino Games', path: '/games' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Best Casino Games</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Every casino game is a mathematical proposition — some far better than others. This hub
        compares the major game families by return to player, house edge and jackpot potential, so
        you can spend your bankroll where it works hardest. Slots dominate our coverage because
        jackpots are our speciality, but the table classics deserve their place in any player&apos;s
        rotation.
      </p>

      <div className="mt-8 space-y-5">
        {GAME_CATEGORIES.map((cat) => (
          <article
            key={cat.name}
            className="rounded-xl border border-ink-600 bg-ink-800 p-6 transition-colors hover:border-gold-600/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-white">{cat.name}</h2>
              <span className="rounded-full bg-ink-700 px-3 py-1 text-xs font-bold text-gold-400">
                RTP: {cat.rtp}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{cat.description}</p>
            <Link href={cat.href} className="mt-3 inline-block font-semibold text-gold-400 hover:text-gold-300">
              {cat.cta}
            </Link>
          </article>
        ))}
      </div>

      <RgBanner />
    </>
  );
}
