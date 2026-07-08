import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { getLatestNews } from '@/content/news';
import { slots } from '@/content/slots';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'Casino Jackpots — Progressive Jackpot Tracker, News & Biggest Wins',
  description:
    'Everything casino jackpots: how progressive pools work, the biggest wins in history, jackpot news and the best slots and casinos for chasing a life-changing prize.',
  path: '/jackpots',
});

export default function JackpotsHubPage() {
  const progressives = slots.filter((s) => s.jackpotType === 'progressive');
  const latestNews = getLatestNews();

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Jackpots', path: '/jackpots' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Casino Jackpots</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        This is the hub for everything jackpot: news on record wins and surging prize pools, expert
        reviews of the progressive slots that pay them, and honest guidance on the mathematics
        behind the headlines. Progressive pools are shared across hundreds of casinos and can pass
        £10 million before they drop — we track the games that matter and explain exactly how they
        work.
      </p>

      <section className="mt-10">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white">Latest jackpot news</h2>
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

      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-bold text-white">The progressive jackpot slots we track</h2>
        <div className="overflow-x-auto rounded-xl border border-ink-600">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-ink-800 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">Slot</th>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Jackpot type</th>
                <th className="px-4 py-3">RTP</th>
                <th className="px-4 py-3">Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700 bg-ink-900">
              {slots.map((slot) => (
                <tr key={slot.slug} className="hover:bg-ink-800">
                  <td className="px-4 py-3 font-semibold text-white">{slot.name}</td>
                  <td className="px-4 py-3 text-slate-400">{slot.provider}</td>
                  <td className="px-4 py-3 capitalize text-slate-400">{slot.jackpotType}</td>
                  <td className="px-4 py-3 text-slate-400">{slot.rtp.split(' ')[0]}</td>
                  <td className="px-4 py-3">
                    <Link href={`/slots/${slot.slug}`} className="font-semibold text-gold-400 hover:text-gold-300">
                      Read →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          RTP figures are provider-published values and can vary by operator — always check the game
          rules panel at your casino.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-ink-600 bg-ink-800 p-6">
          <h2 className="text-xl font-bold text-white">New to progressive jackpots?</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Start with our complete guide: seed values, network pools, trigger odds and what
            “overdue” really means (nothing).
          </p>
          <Link href="/guides/how-progressive-jackpots-work" className="mt-3 inline-block font-semibold text-gold-400 hover:text-gold-300">
            How progressive jackpots work →
          </Link>
        </div>
        <div className="rounded-xl border border-ink-600 bg-ink-800 p-6">
          <h2 className="text-xl font-bold text-white">Ready to play?</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            See which UK-licensed casinos carry the deepest jackpot libraries — and the offers that
            actually work on jackpot slots ({progressives.length} progressives reviewed).
          </p>
          <Link href="/offers/best-casino-offers" className="mt-3 inline-block font-semibold text-gold-400 hover:text-gold-300">
            Best jackpot casino offers →
          </Link>
        </div>
      </section>

      <RgBanner />
    </>
  );
}
