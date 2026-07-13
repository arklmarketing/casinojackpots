import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { slots } from '@/content/slots';
import Breadcrumbs from '@/components/Breadcrumbs';
import Rating from '@/components/Rating';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'Best Slot Games UK 2026 — Jackpot Slots Reviewed & Rated',
  description:
    'Expert reviews of the best online slot games in the UK: progressive jackpots, fixed jackpots and daily drops — with RTP, volatility and honest verdicts for every game.',
  path: '/slots',
});

export default function SlotsHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Slots', path: '/slots' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Best Slot Games — Jackpot Slots Reviewed
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Every slot review on this page follows the same method: we play with real money, verify the
        published RTP and volatility, test the jackpot mechanics and tell you plainly who each game
        suits. No fluff, no reprinted press releases — just the numbers and an honest verdict.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {slots.map((slot) => (
          <article
            key={slot.slug}
            className="rounded-xl border border-ink-600 bg-ink-800 p-6 transition-colors hover:border-gold-600/60"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {slot.provider}
                </p>
                <h2 className="mt-1 text-xl font-bold text-white">
                  <Link href={`/slots/${slot.slug}`} className="hover:text-gold-400">
                    {slot.name}
                  </Link>
                </h2>
              </div>
              <span className="rounded-full bg-ink-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-400">
                {slot.jackpotType}
              </span>
            </div>
            <div className="mt-2">
              <Rating value={slot.rating} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{slot.headline}</p>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg bg-ink-900 p-2 text-center">
                <dt className="text-slate-500">RTP</dt>
                <dd className="font-bold text-white">{slot.rtp.split(' ')[0]}</dd>
              </div>
              <div className="rounded-lg bg-ink-900 p-2 text-center">
                <dt className="text-slate-500">Volatility</dt>
                <dd className="font-bold capitalize text-white">{slot.volatility}</dd>
              </div>
              <div className="rounded-lg bg-ink-900 p-2 text-center">
                <dt className="text-slate-500">Paylines</dt>
                <dd className="font-bold text-white">{slot.paylines}</dd>
              </div>
            </dl>
            <Link
              href={`/slots/${slot.slug}`}
              className="mt-4 inline-block font-semibold text-gold-400 hover:text-gold-300"
            >
              Read full review →
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-ink-600 bg-ink-800 p-6">
        <h2 className="text-xl font-bold text-white">Not sure where to start?</h2>
        <p className="mt-2 leading-relaxed text-slate-300">
          Read our guides on{' '}
          <Link href="/guides/rtp-and-volatility-explained" className="text-gold-400 underline hover:text-gold-300">
            RTP and volatility
          </Link>{' '}
          and{' '}
          <Link href="/guides/fixed-vs-progressive-jackpots" className="text-gold-400 underline hover:text-gold-300">
            fixed vs progressive jackpots
          </Link>{' '}
          to find the right style of game — then check the{' '}
          <Link href="/offers/best-uk-casino-offers" className="text-gold-400 underline hover:text-gold-300">
            best casino offers
          </Link>{' '}
          that work on jackpot slots.
        </p>
      </section>

      <RgBanner />
    </>
  );
}
