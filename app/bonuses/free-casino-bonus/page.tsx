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
  title: 'UK Free Casino Bonus 2026 — What “Free” Really Means',
  description:
    'The honest guide to free casino bonuses in the UK: no-deposit offers, free spins and wager-free deals — what genuinely exists, what the terms hide and this month’s verified picks.',
  path: '/bonuses/free-casino-bonus',
});

const FAQS = [
  {
    question: 'Can I get a genuinely free casino bonus in the UK?',
    answer:
      'Yes, but manage expectations: genuine no-deposit offers in the regulated UK market are small (typically £5–£10 or a handful of spins), carry win caps around £100, and often have wagering attached. The more meaningful “free” structure is wager-free spins on a low qualifying action, where winnings are paid as real cash.',
  },
  {
    question: 'What is the catch with free casino bonuses?',
    answer:
      'Three terms do the damage: wagering requirements (winnings locked until you bet a multiple of them), maximum win caps (a jackpot on free spins may still pay only £100), and maximum bet or game restrictions while wagering. Free offers are marketing — fair ones are still worth taking, but read all three terms first.',
  },
  {
    question: 'What is the best free casino bonus right now?',
    answer:
      'Our current pick is NetBet’s welcome offer: bet £20 on any slot and receive 100 free spins on Big Bass Splash with winnings paid as withdrawable cash and no wagering requirement (max win £100). It requires qualifying play rather than being no-deposit, but the cash-paid structure beats every bonus-fund alternative we have verified.',
  },
  {
    question: 'Why are big no-deposit bonuses so rare in the UK?',
    answer:
      'UK Gambling Commission rules on fair terms and marketing, plus mandatory identity verification before play, make large no-deposit giveaways commercially and legally unattractive for licensed operators. Offshore sites still advertise them to UK players — without UKGC protections, which is precisely why we do not list them.',
  },
];

export default function FreeCasinoBonusPage() {
  const rows = offers.map((offer) => ({
    offer,
    casino: casinos.find((c) => c.slug === offer.casinoSlug)!,
  }));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'UK Casino Bonuses', path: '/bonuses' },
          { name: 'Free Casino Bonus', path: '/bonuses/free-casino-bonus' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        UK Free Casino Bonus — What “Free” Really Means
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Every casino advertises something free. This page is the honest audit: what free casino
        bonuses actually exist for UK players in 2026, which terms quietly shrink them, and the
        rare structures where “free” genuinely means withdrawable cash. No listed offer here comes
        from an unlicensed operator, however generous the banner.
      </p>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white">The three kinds of “free”</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-slate-300">
            <p>
              <strong className="text-white">No-deposit bonuses</strong> — the purest free, and the
              rarest. UK-licensed casinos occasionally offer £5–£10 or a small batch of spins on
              registration, almost always with wagering and a win cap near £100. Worth taking as a
              risk-free trial of a casino; never the reason to choose one.
            </p>
            <p>
              <strong className="text-white">Free spins with a qualifying action</strong> — the UK
              standard. Deposit or bet a small amount, receive spins on a named slot. The decisive
              term is what winnings become: cash you can withdraw, or bonus funds locked behind 35x
              wagering. Same headline, wildly different value.
            </p>
            <p>
              <strong className="text-white">Wager-free offers</strong> — the structure worth
              hunting. Winnings paid as cash, no playthrough, everything transparent except a win
              cap. Competition between UK brands is slowly making these more common; they are the
              only “free” we rate at face value.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">How to read a free bonus in 30 seconds</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
            Find three numbers in the significant terms: the <strong className="text-white">wagering
            multiplier</strong> (none is best; 35x is market norm; above 40x, walk), the{' '}
            <strong className="text-white">maximum win</strong> (caps near £100 are standard on free
            offers — fine, as long as you know), and the{' '}
            <strong className="text-white">expiry</strong> (spins that vanish in 24 hours are
            designed to be forgotten). If any of the three is missing from the advert, the operator
            is hiding it — and UK advertising rules say they should not be.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-bold text-white">This month’s verified pick</h2>
        <OfferTable rows={rows} />
      </section>

      <RgBanner />

      <section className="mt-10 rounded-xl border border-ink-600 bg-ink-800 p-6">
        <h2 className="text-xl font-bold text-white">Related reading</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/bonuses" className="text-gold-400 hover:text-gold-300">
              All UK casino bonus types explained →
            </Link>
          </li>
          <li>
            <Link href="/offers/best-uk-casino-offers" className="text-gold-400 hover:text-gold-300">
              Best UK casino offers this month →
            </Link>
          </li>
        </ul>
      </section>

      <FaqSection faqs={FAQS} />
    </>
  );
}
