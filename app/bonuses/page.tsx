import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { offers } from '@/content/offers';
import { casinos } from '@/content/casinos';
import OfferTable from '@/components/OfferTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqSection from '@/components/FaqSection';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'UK Casino Bonuses Explained 2026 — Every Type, Honestly Rated',
  description:
    'The complete guide to UK casino bonuses: match bonuses, free spins, no-deposit and no-wagering offers explained — with the maths behind wagering and the current best deals.',
  path: '/bonuses',
});

const BONUS_TYPES = [
  {
    name: 'Deposit match bonus',
    example: '“100% up to £100”',
    body: 'The casino matches your first deposit with bonus funds. Winnings from bonus funds must be wagered — typically 35x in the UK — before withdrawal. Judge these by the wagering requirement and game weightings, not the headline number: a £50 bonus at 30x is usually worth more than £200 at 50x.',
  },
  {
    name: 'Free spins',
    example: '“100 Free Spins on a named slot”',
    body: 'Spins on a specific slot at a fixed stake, usually 10p. The two terms that decide their value: whether winnings are paid as cash or as wagering-locked bonus funds, and the maximum win cap. Cash-paid spins — like NetBet’s current offer — are the fairest structure on the market.',
  },
  {
    name: 'No-deposit bonus',
    example: '“£10 free on registration”',
    body: 'Rare in the UK since stricter regulation, and usually small with high wagering and low win caps when it does appear. Treat as a free taste of a casino, never as meaningful value. Anything generous with no deposit required deserves double scrutiny of its terms.',
  },
  {
    name: 'No-wagering bonus',
    example: '“Wager-free spins, winnings paid in cash”',
    body: 'The gold standard: whatever you win is yours to withdraw immediately. Increasingly common among UK brands competing on fairness. Almost always capped — check the maximum win — but what you see is genuinely what you get.',
  },
  {
    name: 'Cashback offers',
    example: '“10% back on weekly losses”',
    body: 'Returns a percentage of net losses, as cash or bonus funds. Check whether the cashback itself carries wagering, the minimum loss threshold, and the cap. Useful for regular players; never a reason to lose more.',
  },
  {
    name: 'Reload and loyalty bonuses',
    example: '“50% on your next deposit”',
    body: 'Ongoing offers for existing customers, from deposit matches to jackpot-slot spins. The same rules apply: significant terms next to the claim, wagering at or below market norms, and no lock on your own deposit.',
  },
];

const FAQS = [
  {
    question: 'What is the best casino bonus in the UK?',
    answer:
      'Judged on structure rather than headline size, the best UK casino bonuses pay winnings as cash with no wagering requirement. Our current top pick is NetBet’s welcome offer: bet £20 on any slot for 100 free spins whose winnings are paid as withdrawable cash, capped at £100.',
  },
  {
    question: 'Are UK casino bonuses worth it?',
    answer:
      'Yes, if you read the terms and would have played anyway — a fair bonus extends your entertainment at no extra cost. No, if you deposit specifically to chase bonus value: wagering requirements are priced so the casino keeps its edge. A bonus is a discount, never an income.',
  },
  {
    question: 'Why do casinos ask for wagering requirements?',
    answer:
      'Without wagering, players could deposit, claim a bonus and withdraw immediately at the casino’s expense. Wagering makes the bonus money circulate through games — where the house edge applies — before it can leave. That is also exactly why lower wagering means better value for you.',
  },
  {
    question: 'Can I get a UK casino bonus without depositing?',
    answer:
      'Occasionally — no-deposit offers exist but are rare, small and tightly capped in the regulated UK market. Registration free spins with a £100 win cap are the typical shape. Be wary of unlicensed sites advertising large no-deposit bonuses to UK players.',
  },
];

export default function BonusesPage() {
  const rows = offers.map((offer) => ({
    offer,
    casino: casinos.find((c) => c.slug === offer.casinoSlug)!,
  }));

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'UK Casino Bonuses', path: '/bonuses' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        UK Casino Bonuses — Every Type, Honestly Explained
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        A UK casino bonus is only as good as its terms. This guide explains every bonus type
        offered by UK Gambling Commission-licensed casinos — deposit matches, free spins,
        no-deposit, no-wagering and cashback — with the wagering mathematics that separates a
        genuine offer from a decorated trap. Every bonus we list is verified against the
        operator&apos;s own published terms and re-checked weekly.
      </p>

      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-white">The six UK bonus types</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {BONUS_TYPES.map((type) => (
            <article key={type.name} className="rounded-xl border border-ink-600 bg-ink-800 p-6">
              <h3 className="text-lg font-bold text-white">{type.name}</h3>
              <p className="mt-1 text-sm font-semibold text-gold-400">{type.example}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{type.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">The wagering maths, in one example</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
          Take a “100% up to £100” bonus at 35x wagering. Deposit £100, receive £100 in bonus
          funds — but before withdrawing bonus winnings you must place £3,500 of bets (35 × £100).
          On slots returning 96%, £3,500 of play costs on average £140 in losses: more than the
          bonus itself. That is not a scandal — it is how every match bonus is priced — but it is
          why we rate cash-paid, no-wagering offers above bigger headline numbers, and why the
          wagering figure matters more than the bonus size.
        </p>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Current verified UK bonuses</h2>
          <Link href="/offers/best-uk-casino-offers" className="text-sm font-semibold text-gold-400 hover:text-gold-300">
            Full offers page →
          </Link>
        </div>
        <OfferTable rows={rows} />
      </section>

      <RgBanner />

      <section className="mt-10 rounded-xl border border-ink-600 bg-ink-800 p-6">
        <h2 className="text-xl font-bold text-white">Related reading</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/bonuses/free-casino-bonus" className="text-gold-400 hover:text-gold-300">
              UK free casino bonuses — what “free” really means →
            </Link>
          </li>
          <li>
            <Link href="/offers/best-uk-casino-offers" className="text-gold-400 hover:text-gold-300">
              Best UK casino offers this month →
            </Link>
          </li>
          <li>
            <Link href="/guides/how-to-choose-a-jackpot-casino" className="text-gold-400 hover:text-gold-300">
              How to choose a casino: our 25-point checklist →
            </Link>
          </li>
        </ul>
      </section>

      <FaqSection faqs={FAQS} />
    </>
  );
}
