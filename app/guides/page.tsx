import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guides } from '@/content/guides';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'Casino Guides & Strategy — Jackpots, RTP and Smart Play',
  description:
    'Expert casino guides for UK players: how progressive jackpots work, RTP and volatility explained, fixed vs progressive prizes and how to choose a safe jackpot casino.',
  path: '/guides',
});

export default function GuidesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Casino Guides &amp; Strategy
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Casinos profit from what players do not know. These guides close the gap: the real
        mathematics of jackpots and RTP, the difference between marketing and mechanics, and the
        checks that keep your money safe. No systems, no superstition — just how it actually works.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <ArticleCard
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            title={guide.title}
            excerpt={guide.excerpt}
            date={guide.updatedAt}
            tag="Guide"
          />
        ))}
      </div>
      <RgBanner />
    </>
  );
}
