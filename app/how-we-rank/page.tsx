import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'How We Test & Rank Casinos — Our Editorial Policy',
  description:
    'The full CasinoJackpots methodology: our 25-point casino testing checklist, how offers are scored, and the editorial policy that keeps commercial interests out of rankings.',
  path: '/how-we-rank',
});

const CHECKLIST = [
  {
    area: 'Licensing & safety (5 points)',
    items:
      'UKGC licence verification, fund segregation terms, ADR provider, complaint history, corporate transparency.',
  },
  {
    area: 'Jackpot library (5 points)',
    items:
      'Networked progressive count, local progressive count, daily-drop coverage, flagship game versions and RTP builds, jackpot lobby usability.',
  },
  {
    area: 'Banking (5 points)',
    items:
      'Real-money withdrawal speed (tested), payment method range, minimum deposit, fees, verification process quality.',
  },
  {
    area: 'Bonuses & fairness (5 points)',
    items:
      'Wagering level, game weightings, win caps, maximum bet clauses, clarity and prominence of significant terms.',
  },
  {
    area: 'Responsible gambling (5 points)',
    items:
      'Speed of limit-setting, time-out accessibility, GAMSTOP integration, RG signposting prominence, marketing conduct.',
  },
];

export default function HowWeRankPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[{ name: 'Home', path: '/' }, { name: 'How We Test & Rank', path: '/how-we-rank' }]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">How We Test &amp; Rank</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p>
          Every casino ranking on this site is produced by the same process: a reviewer opens a real
          account, deposits real money, plays the jackpot library, requests withdrawals and scores
          the experience against the 25-point checklist below. Scores set rankings. Nothing else
          does.
        </p>
        <p>
          <strong className="text-white">The commercial firewall:</strong> we earn affiliate
          commissions, and operators know our traffic is valuable. So the rule is mechanical rather
          than aspirational — commission rates are not visible to reviewers, commercial
          conversations never reference specific scores, and a casino that stops converting is
          removed from pages, never moved up them. If an operator will not accept coverage of its
          weaknesses, we do not cover it at all.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-white">The 25-point checklist</h2>
      <div className="mt-4 space-y-3">
        {CHECKLIST.map((section) => (
          <div key={section.area} className="rounded-xl border border-ink-600 bg-ink-800 p-5">
            <h3 className="font-bold text-gold-400">{section.area}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{section.items}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-white">How offers are scored</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        Offers on our{' '}
        <Link href="/offers/best-uk-casino-offers" className="text-gold-400 underline hover:text-gold-300">
          Best Casino Offers
        </Link>{' '}
        page are modelled, not eyeballed: we calculate the expected cost of clearing each bonus from
        its wagering requirement, game weightings and win caps, then weight that value against the
        operator&apos;s checklist score and the offer&apos;s relevance to jackpot play. Every offer
        is re-verified weekly, and the last-checked date is stored against each record.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-white">Corrections</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        When we publish an error, we correct the page, note the correction and date it. Factual
        complaints go to {`editorial@casinojackpots.io`} and are reviewed within five working days.
      </p>
    </div>
  );
}
