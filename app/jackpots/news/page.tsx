import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getLatestNews } from '@/content/news';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'Casino Jackpot News — Biggest Wins, Record Pools & Winner Stories',
  description:
    'The latest casino jackpot news: record progressive wins, surging prize pools and the stories behind the biggest slot payouts. Updated by the CasinoJackpots news desk.',
  path: '/jackpots/news',
});

export default function JackpotNewsIndexPage() {
  const articles = getLatestNews();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Jackpots', path: '/jackpots' },
          { name: 'News', path: '/jackpots/news' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Casino Jackpots News</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Record wins, surging prize pools and the people behind the payouts. Our news desk covers
        every significant jackpot story — sourced from provider announcements and public records,
        never invented. When a pool is climbing towards record territory, you will read it here
        first.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
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
      <RgBanner />
    </>
  );
}
