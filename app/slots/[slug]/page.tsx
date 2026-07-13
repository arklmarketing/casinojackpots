import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, formatDate } from '@/lib/seo';
import { slotReviewSchema } from '@/lib/schema';
import { slots, getSlot } from '@/content/slots';
import { getAuthor } from '@/content/authors';
import { getJackpotValue } from '@/lib/jackpots';
import JackpotBadge from '@/components/JackpotBadge';
import Breadcrumbs from '@/components/Breadcrumbs';
import Prose from '@/components/Prose';
import Rating from '@/components/Rating';
import FaqSection from '@/components/FaqSection';
import RgBanner from '@/components/RgBanner';
import JsonLd from '@/components/JsonLd';

export const revalidate = 3600; // refresh page hourly (jackpot scrape itself is cached daily)

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return slots.map((slot) => ({ slug: slot.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const slot = getSlot(params.slug);
  if (!slot) return {};
  return buildMetadata({
    title: slot.metaTitle,
    description: slot.metaDescription,
    path: `/slots/${slot.slug}`,
    type: 'article',
    publishedTime: slot.lastUpdated,
  });
}

export default async function SlotReviewPage({ params }: Props) {
  const slot = getSlot(params.slug);
  if (!slot) notFound();

  const author = getAuthor(slot.authorId);
  const jackpotValue = await getJackpotValue(slot.slug);

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={slotReviewSchema(slot)} />
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Slots', path: '/slots' },
          { name: slot.name, path: `/slots/${slot.slug}` },
        ]}
      />
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{slot.provider}</p>
      <h1 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">{slot.name} Review</h1>
      <p className="mt-2 text-lg text-slate-400">{slot.headline}</p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <Rating value={slot.rating} label="Expert rating" />
        <span className="text-sm text-slate-500">
          By {author.name} · Updated {formatDate(slot.lastUpdated)}
        </span>
      </div>

      {jackpotValue && (
        <div className="mt-6">
          <JackpotBadge value={jackpotValue} />
        </div>
      )}

      {/* Key facts */}
      <dl className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-ink-600 bg-ink-800 p-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-slate-500">RTP</dt>
          <dd className="font-bold text-white">{slot.rtp}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Volatility</dt>
          <dd className="font-bold capitalize text-white">{slot.volatility}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Jackpot type</dt>
          <dd className="font-bold capitalize text-white">{slot.jackpotType}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Max win</dt>
          <dd className="font-bold text-white">{slot.maxWin}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Reels</dt>
          <dd className="font-bold text-white">{slot.reels}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Paylines</dt>
          <dd className="font-bold text-white">{slot.paylines}</dd>
        </div>
      </dl>

      <div className="mt-8 space-y-6">
        <p className="text-lg leading-relaxed text-slate-300">{slot.intro}</p>
        <Prose sections={slot.sections} />
      </div>

      <section className="mt-10 rounded-xl border border-gold-600/40 bg-ink-800 p-6">
        <h2 className="text-xl font-bold text-white">Our verdict</h2>
        <p className="mt-3 leading-relaxed text-slate-300">{slot.verdict}</p>
        <Link
          href="/offers/best-uk-casino-offers"
          className="mt-4 inline-block rounded-lg bg-gold-500 px-5 py-2.5 font-bold text-ink-950 hover:bg-gold-400"
        >
          Where to play {slot.name} →
        </Link>
      </section>

      <FaqSection faqs={slot.faqs} title={`${slot.name} FAQs`} />
      <RgBanner />
    </article>
  );
}
