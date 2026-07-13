import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';
import { offerListSchema } from '@/lib/schema';
import { offers } from '@/content/offers';
import { casinos } from '@/content/casinos';
import OfferTable from '@/components/OfferTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqSection from '@/components/FaqSection';
import RgBanner from '@/components/RgBanner';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Best UK Casino Offers 2026 — Bonuses Compared & Verified',
  description:
    'The best UK casino offers for July 2026, verified and ranked — plus how to choose the best online casino UK players can trust, what to look for and the red flags to avoid.',
  path: '/offers/best-uk-casino-offers',
});

const FAQS = [
  {
    question: 'What is the best online casino in the UK?',
    answer:
      'The best online casino for UK players is one that holds a verifiable UK Gambling Commission licence, publishes its bonus terms plainly, pays withdrawals quickly and carries the games you actually want. Our current top-rated casino is NetBet (UKGC account 39170), scoring 4.4/5 on our 25-point checklist for its 5,500+ game library and cash-paid welcome spins.',
  },
  {
    question: 'What is the best casino offer right now?',
    answer:
      'Our current top-ranked offer is NetBet Casino’s welcome deal: bet £20 on any slot and receive 100 free spins whose winnings are paid as withdrawable cash — no wagering requirement, capped at £100. Cash-paid spins are rarer and fairer than the market-standard bonus-fund offers, which is why it heads our table.',
  },
  {
    question: 'What does wagering requirement mean?',
    answer:
      'A wagering (or playthrough) requirement is the amount you must bet before bonus winnings become withdrawable. A £100 bonus at 35x wagering means £3,500 of play. Lower is better; anything at or below 30x is competitive in the UK market.',
  },
  {
    question: 'Are these offers really free money?',
    answer:
      'No — every bonus carries terms: wagering requirements, game weightings, maximum bets and expiry dates. Bonuses extend your play; they are not a way to guarantee profit. Always read the full terms before opting in.',
  },
  {
    question: 'How do you make money from these offers?',
    answer:
      'We earn a commission from casinos when readers sign up through our links, at no cost to you. Rankings are set by our published 25-point testing checklist, never by commission rates — see our How We Rank page.',
  },
  {
    question: 'Can I claim more than one welcome offer?',
    answer:
      'Yes — welcome offers are per-casino, so you can claim one at each site. Never chase bonuses with money you cannot afford, and remember each offer carries its own wagering terms.',
  },
];

export default function BestCasinoOffersPage() {
  const rows = offers.map((offer) => ({
    offer,
    casino: casinos.find((c) => c.slug === offer.casinoSlug)!,
  }));

  const listSchema = offerListSchema(
    rows.map(({ offer, casino }) => ({
      name: `${casino.name} — ${offer.bonusHeadline}`,
      url: absoluteUrl(`/casinos/${casino.slug}`),
      description: offer.keyTerms,
    })),
  );

  return (
    <>
      <JsonLd data={listSchema} />
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Offers', path: '/offers/best-uk-casino-offers' },
          { name: 'Best Casino Offers', path: '/offers/best-uk-casino-offers' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Best UK Casino Offers — July 2026
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        These are the best UK casino offers this month, ranked by real value: wagering
        requirements, game eligibility and the fine print most comparison sites skip. Every casino
        listed holds a UK Gambling Commission licence verified on the public register, every
        significant term is shown before you click — and below the table, our full guide to
        choosing the best online casino in the UK: what to look for, and the red flags to walk away
        from. Offers change frequently; we re-verify this page every week.
      </p>

      <div className="mt-8">
        <OfferTable rows={rows} />
      </div>

      <RgBanner />

      <section className="mt-10 rounded-xl border border-ink-600 bg-ink-800 p-6">
        <h2 className="text-xl font-bold text-white sm:text-2xl">How we rank these offers</h2>
        <p className="mt-3 leading-relaxed text-slate-300">
          Each offer is scored on four weighted factors: <strong className="text-white">real value</strong>{' '}
          (bonus size against wagering requirements, modelled as expected cost of clearance),{' '}
          <strong className="text-white">fairness</strong> (game weightings, win caps, maximum bet
          clauses), <strong className="text-white">casino quality</strong> (the operator&apos;s score on
          our 25-point review checklist) and <strong className="text-white">jackpot relevance</strong>{' '}
          (whether bonus funds and spins can be used on jackpot slots). Every offer&apos;s terms are
          verified against the operator&apos;s own published T&amp;Cs before listing and re-checked
          weekly. Read the full methodology on our{' '}
          <Link href="/how-we-rank" className="text-gold-400 underline hover:text-gold-300">
            How We Test &amp; Rank
          </Link>{' '}
          page.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">
          How to find the best online casino in the UK
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-slate-300">
          <p>
            Start with the licence, always. Scroll to the footer of any casino site and find its UK
            Gambling Commission account number, then check it on the Commission&apos;s public
            register at gamblingcommission.gov.uk. A UKGC licence means segregated player funds,
            independently audited games, GAMSTOP self-exclusion and a formal complaints route —
            protections no bonus can compensate for. NetBet, our current top pick, is account
            39170; we verify every listed casino the same way.
          </p>
          <p>
            Then judge the things that shape everyday play: how big and current the game library is
            (5,000+ titles is strong — and check the jackpot lobby specifically if you play
            progressives), which payment methods are supported and from what minimum deposit,
            whether withdrawal times are stated plainly, and how quickly you can reach a human on
            support. Published RTPs matter too: the same slot can run at different return rates at
            different casinos, so check the game rules panel rather than assuming.
          </p>
        </div>

        <h3 className="mt-8 text-xl font-bold text-white">What to look for</h3>
        <ul className="mt-4 max-w-3xl space-y-3">
          {[
            ['UKGC licence number in the footer', 'Verifiable on the public register — the one non-negotiable.'],
            ['Significant terms next to every offer', 'Honest casinos show wagering, caps and expiry beside the headline, not buried three clicks deep.'],
            ['Wagering at 35x or below', 'The UK market norm; lower is better, and cash-paid rewards with no wagering are best of all.'],
            ['Fast, named withdrawal times', '“Within 24 hours to e-wallets” is a commitment; “processing times may vary” is a warning.'],
            ['Visible safer-gambling tools', 'Deposit limits and time-outs reachable in a couple of taps signal an operator that takes its licence seriously.'],
          ].map(([title, desc]) => (
            <li key={title} className="rounded-lg border border-mint-500/30 bg-ink-800 p-4">
              <p className="font-semibold text-white">✓ {title}</p>
              <p className="mt-1 text-sm text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-xl font-bold text-white">Red flags to avoid</h3>
        <ul className="mt-4 max-w-3xl space-y-3">
          {[
            ['No UKGC licence — or one you can’t verify', 'Offshore sites courting UK players offer none of the protections above, and you may have no recourse if things go wrong.'],
            ['Wagering above 40x, or wagering applied to your deposit', 'Maths designed so the bonus is nearly impossible to convert into withdrawable money.'],
            ['Maximum-win caps hidden in the small print', 'A “£500 bonus” capped at £50 of winnings is a £50 bonus wearing a costume.'],
            ['Bonuses that lock your own deposit', 'Some terms prevent withdrawing your own money until wagering completes — walk away.'],
            ['Pressure tactics', 'Countdown timers, “last chance” banners and unsolicited bonus calls are marketing built to rush your judgement.'],
          ].map(([title, desc]) => (
            <li key={title} className="rounded-lg border border-red-500/30 bg-ink-800 p-4">
              <p className="font-semibold text-white">✗ {title}</p>
              <p className="mt-1 text-sm text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl leading-relaxed text-slate-300">
          For the full picture, read our{' '}
          <Link href="/guides/how-to-choose-a-jackpot-casino" className="text-gold-400 underline hover:text-gold-300">
            25-point casino checklist
          </Link>{' '}
          and our complete guide to{' '}
          <Link href="/bonuses" className="text-gold-400 underline hover:text-gold-300">
            UK casino bonuses and how they really work
          </Link>
          .
        </p>
      </section>

      <FaqSection faqs={FAQS} />
    </>
  );
}
