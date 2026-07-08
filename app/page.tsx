import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { casinos } from '@/content/casinos';
import { offers } from '@/content/offers';
import { slots } from '@/content/slots';
import { getLatestNews } from '@/content/news';
import { guides } from '@/content/guides';
import OfferTable from '@/components/OfferTable';
import ArticleCard from '@/components/ArticleCard';
import RgBanner from '@/components/RgBanner';
import Rating from '@/components/Rating';

export const metadata: Metadata = buildMetadata({
  title: `Casino Jackpots — Jackpot News, Slot Reviews & Best UK Casino Offers`,
  description: SITE.description,
  path: '/',
});

export default function HomePage() {
  const topOffers = offers.slice(0, 3).map((offer) => ({
    offer,
    casino: casinos.find((c) => c.slug === offer.casinoSlug)!,
  }));
  const latestNews = getLatestNews(3);
  const featuredSlots = slots.slice(0, 3);
  const featuredGuides = guides.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="rounded-2xl border border-ink-600 bg-gradient-to-br from-ink-800 to-ink-950 p-8 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-widest text-gold-400">
          The UK&apos;s jackpot authority
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          Casino jackpot news, expert slot reviews &amp; the best UK offers
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
          We track the biggest progressive jackpots, review every slot that matters and test
          UK-licensed casinos with real money — so you know exactly where the value is before you
          spin. Independent, expert and built on responsible play.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/offers/best-casino-offers"
            className="rounded-lg bg-gold-500 px-6 py-3 font-bold text-ink-950 transition-colors hover:bg-gold-400"
          >
            Best Casino Offers
          </Link>
          <Link
            href="/jackpots/news"
            className="rounded-lg border border-ink-600 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-gold-600"
          >
            Latest Jackpot News
          </Link>
        </div>
      </section>

      {/* Top offers */}
      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Top casino offers this month</h2>
          <Link href="/offers/best-casino-offers" className="text-sm font-semibold text-gold-400 hover:text-gold-300">
            View all →
          </Link>
        </div>
        <OfferTable rows={topOffers} />
      </section>

      <RgBanner />

      {/* Latest news */}
      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Casino jackpots news</h2>
          <Link href="/jackpots/news" className="text-sm font-semibold text-gold-400 hover:text-gold-300">
            All news →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestNews.map((article) => (
            <ArticleCard
              key={article.slug}
              href={`/jackpots/news/${article.slug}`}
              title={article.headline}
              excerpt={article.excerpt}
              date={article.publishedAt}
              tag="News"
            />
          ))}
        </div>
      </section>

      {/* Featured slots */}
      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Best jackpot slots</h2>
          <Link href="/slots" className="text-sm font-semibold text-gold-400 hover:text-gold-300">
            All slot reviews →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredSlots.map((slot) => (
            <article
              key={slot.slug}
              className="rounded-xl border border-ink-600 bg-ink-800 p-5 transition-colors hover:border-gold-600/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {slot.provider}
              </p>
              <h3 className="mt-1 font-bold text-white">
                <Link href={`/slots/${slot.slug}`} className="hover:text-gold-400">
                  {slot.name}
                </Link>
              </h3>
              <div className="mt-2">
                <Rating value={slot.rating} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{slot.headline}</p>
              <Link
                href={`/slots/${slot.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-gold-400 hover:text-gold-300"
              >
                Read review →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Jackpot guides &amp; strategy</h2>
          <Link href="/guides" className="text-sm font-semibold text-gold-400 hover:text-gold-300">
            All guides →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <ArticleCard
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              title={guide.title}
              excerpt={guide.excerpt}
              tag="Guide"
            />
          ))}
        </div>
      </section>

      {/* Trust block */}
      <section className="mt-12 rounded-2xl border border-ink-600 bg-ink-800 p-8">
        <h2 className="text-2xl font-bold text-white">Why trust {SITE.name}?</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
          Every casino we recommend is tested against a published 25-point checklist covering
          licensing, jackpot library depth, real-money withdrawal speed, bonus fairness and
          safer-gambling tools. We only feature UK Gambling Commission-licensed operators, we
          disclose our affiliate relationships plainly, and commercial partnerships never influence
          a score. Read our{' '}
          <Link href="/how-we-rank" className="text-gold-400 underline hover:text-gold-300">
            full editorial policy
          </Link>{' '}
          to see exactly how we work.
        </p>
      </section>
    </>
  );
}
