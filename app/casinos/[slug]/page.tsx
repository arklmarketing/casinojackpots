import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, formatDate } from '@/lib/seo';
import { casinoReviewSchema } from '@/lib/schema';
import { casinos, getCasino } from '@/content/casinos';
import { getOffersForCasino } from '@/content/offers';
import { getAuthor } from '@/content/authors';
import Breadcrumbs from '@/components/Breadcrumbs';
import Prose from '@/components/Prose';
import Rating from '@/components/Rating';
import FaqSection from '@/components/FaqSection';
import RgBanner from '@/components/RgBanner';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return casinos.map((casino) => ({ slug: casino.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const casino = getCasino(params.slug);
  if (!casino) return {};
  return buildMetadata({
    title: casino.metaTitle,
    description: casino.metaDescription,
    path: `/casinos/${casino.slug}`,
    type: 'article',
    publishedTime: casino.lastUpdated,
  });
}

export default function CasinoReviewPage({ params }: Props) {
  const casino = getCasino(params.slug);
  if (!casino) notFound();

  const author = getAuthor(casino.authorId);
  const casinoOffers = getOffersForCasino(casino.slug);

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={casinoReviewSchema(casino)} />
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Casinos', path: '/casinos' },
          { name: casino.name, path: `/casinos/${casino.slug}` },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{casino.name} Review</h1>
      <p className="mt-2 text-lg text-slate-400">{casino.headline}</p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <Rating value={casino.rating} label="Expert rating" />
        <span className="text-sm text-slate-500">
          By {author.name} · Updated {formatDate(casino.lastUpdated)}
        </span>
      </div>

      {casino.isExample && (
        <p className="mt-4 rounded-lg border border-amber-600/50 bg-amber-950/40 p-3 text-sm text-amber-200">
          Demo content: this is a fictional example brand illustrating the review template. Replace
          with verified operator data before launch.
        </p>
      )}

      {/* Key facts */}
      <dl className="mt-6 space-y-2 rounded-xl border border-ink-600 bg-ink-800 p-5 text-sm">
        {casino.keyFacts.map((fact) => (
          <div key={fact.label} className="flex justify-between gap-4 border-b border-ink-700 pb-2 last:border-0 last:pb-0">
            <dt className="text-slate-500">{fact.label}</dt>
            <dd className="text-right font-semibold text-white">{fact.value}</dd>
          </div>
        ))}
      </dl>

      {/* Current offers */}
      {casinoOffers.length > 0 && (
        <section className="mt-6 rounded-xl border border-gold-600/40 bg-ink-800 p-5">
          <h2 className="text-lg font-bold text-white">Current offer</h2>
          {casinoOffers.map((offer) => (
            <div key={offer.id} className="mt-3">
              <p className="text-xl font-bold text-gold-300">{offer.bonusHeadline}</p>
              <a
                href={offer.affiliateUrl}
                rel="nofollow sponsored noopener"
                target="_blank"
                className="mt-3 inline-block rounded-lg bg-mint-500 px-6 py-3 font-bold text-ink-950 hover:bg-mint-400"
              >
                Claim Offer
              </a>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{offer.keyTerms}</p>
            </div>
          ))}
        </section>
      )}

      <div className="mt-8 space-y-6">
        <p className="text-lg leading-relaxed text-slate-300">{casino.intro}</p>

        {/* Pros & cons */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-mint-500/30 bg-ink-800 p-5">
            <h2 className="font-bold text-mint-400">What we like</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {casino.pros.map((pro) => (
                <li key={pro} className="flex gap-2">
                  <span aria-hidden="true" className="text-mint-400">✓</span> {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-ink-800 p-5">
            <h2 className="font-bold text-red-400">What could improve</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {casino.cons.map((con) => (
                <li key={con} className="flex gap-2">
                  <span aria-hidden="true" className="text-red-400">✗</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Prose sections={casino.sections} />
      </div>

      <section className="mt-10 rounded-xl border border-gold-600/40 bg-ink-800 p-6">
        <h2 className="text-xl font-bold text-white">Our verdict</h2>
        <p className="mt-3 leading-relaxed text-slate-300">{casino.verdict}</p>
        <p className="mt-3 text-sm text-slate-400">
          Compare against the rest of our{' '}
          <Link href="/casinos" className="text-gold-400 underline hover:text-gold-300">
            top-rated jackpot casinos
          </Link>{' '}
          or see all{' '}
          <Link href="/offers/best-casino-offers" className="text-gold-400 underline hover:text-gold-300">
            current offers
          </Link>
          .
        </p>
      </section>

      <FaqSection faqs={casino.faqs} title={`${casino.name} FAQs`} />
      <RgBanner />
    </article>
  );
}
