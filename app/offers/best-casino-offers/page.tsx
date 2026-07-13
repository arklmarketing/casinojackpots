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
  title: 'Best Casino Offers UK 2026 — Top Bonuses Compared & Tested',
  description:
    'The best UK casino offers for July 2026, expert-tested and ranked: welcome bonuses, no-wagering free spins and jackpot-slot deals — with every significant term shown upfront.',
  path: '/offers/best-casino-offers',
});

const FAQS = [
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
          { name: 'Offers', path: '/offers/best-casino-offers' },
          { name: 'Best Casino Offers', path: '/offers/best-casino-offers' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Best Casino Offers UK — July 2026
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        These are the best UK casino offers our team has tested this month, ranked by real value:
        wagering requirements, game eligibility, payout speed and the fine print most comparison
        sites skip. Every casino listed holds a UK Gambling Commission licence, and every
        significant term is shown before you click. Offers change frequently — we re-verify this
        page every week.
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

      <FaqSection faqs={FAQS} />
    </>
  );
}
