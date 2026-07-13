import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildMetadata, formatDate } from '@/lib/seo';
import { newsArticleSchema } from '@/lib/schema';
import { news, getNewsArticle } from '@/content/news';
import { getSlot } from '@/content/slots';
import { getCasino } from '@/content/casinos';
import { getAuthor } from '@/content/authors';
import Breadcrumbs from '@/components/Breadcrumbs';
import Prose from '@/components/Prose';
import RgBanner from '@/components/RgBanner';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getNewsArticle(params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/jackpots/news/${article.slug}`,
    type: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default function JackpotNewsArticlePage({ params }: Props) {
  const article = getNewsArticle(params.slug);
  if (!article) notFound();

  const author = getAuthor(article.authorId);
  const relatedSlots = article.relatedSlotSlugs.map(getSlot).filter(Boolean);
  const relatedCasinos = article.relatedCasinoSlugs.map(getCasino).filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={newsArticleSchema(article)} />
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Jackpots', path: '/jackpots' },
          { name: 'News', path: '/jackpots/news' },
          { name: article.headline, path: `/jackpots/news/${article.slug}` },
        ]}
      />
      <p className="text-sm font-bold uppercase tracking-widest text-gold-400">Jackpot News</p>
      <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        {article.headline}
      </h1>
      <p className="mt-3 text-lg text-slate-400">{article.subhead}</p>
      <p className="mt-4 border-b border-ink-700 pb-4 text-sm text-slate-500">
        By {author.name} · Published{' '}
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        {article.updatedAt !== article.publishedAt && (
          <>
            {' '}
            · Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
          </>
        )}
      </p>

      {article.jackpotFacts && (
        <div className="mt-6 rounded-xl border border-gold-600/40 bg-ink-800 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gold-400">
            Jackpot at a glance
          </h2>
          <dl className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-slate-500">Amount</dt>
              <dd className="font-bold text-white">
                {article.jackpotFacts.currency === 'GBP' ? '£' : '€'}
                {article.jackpotFacts.amount}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Game</dt>
              <dd className="font-bold text-white">{article.jackpotFacts.game}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Date</dt>
              <dd className="font-bold text-white">{formatDate(article.jackpotFacts.date)}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Location</dt>
              <dd className="font-bold text-white">{article.jackpotFacts.location}</dd>
            </div>
          </dl>
        </div>
      )}

      <div className="mt-8">
        <Prose sections={article.sections} />
      </div>

      {(relatedSlots.length > 0 || relatedCasinos.length > 0) && (
        <section className="mt-10 rounded-xl border border-ink-600 bg-ink-800 p-6">
          <h2 className="text-lg font-bold text-white">Related on {`CasinoJackpots`}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {relatedSlots.map(
              (slot) =>
                slot && (
                  <li key={slot.slug}>
                    <Link href={`/slots/${slot.slug}`} className="text-gold-400 hover:text-gold-300">
                      {slot.name} review — {slot.headline}
                    </Link>
                  </li>
                ),
            )}
            {relatedCasinos.map(
              (casino) =>
                casino && (
                  <li key={casino.slug}>
                    <Link href={`/casinos/${casino.slug}`} className="text-gold-400 hover:text-gold-300">
                      {casino.name} review — {casino.headline}
                    </Link>
                  </li>
                ),
            )}
            <li>
              <Link href="/offers/best-uk-casino-offers" className="text-gold-400 hover:text-gold-300">
                Best casino offers for jackpot slots →
              </Link>
            </li>
          </ul>
        </section>
      )}

      <RgBanner />
    </article>
  );
}
