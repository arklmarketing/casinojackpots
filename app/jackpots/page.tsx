import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { getLatestNews } from '@/content/news';
import { slots } from '@/content/slots';
import { jackpotSources } from '@/content/jackpot-sources';
import { getJackpotValues, formatJackpot } from '@/lib/jackpots';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleCard from '@/components/ArticleCard';
import RgBanner from '@/components/RgBanner';
import TickerValue from '@/components/TickerValue';

export const revalidate = 3600; // refresh page hourly (jackpot scrape itself is cached daily)

export const metadata: Metadata = buildMetadata({
  title: 'Casino Jackpots — Progressive Jackpot Tracker, News & Biggest Wins',
  description:
    'Everything casino jackpots: how progressive pools work, the biggest wins in history, jackpot news and the best slots and casinos for chasing a life-changing prize.',
  path: '/jackpots',
});

export default async function JackpotsHubPage() {
  const progressives = slots.filter((s) => s.jackpotType === 'progressive');
  const latestNews = getLatestNews();
  const jackpotValues = await getJackpotValues();
  const anyLive = jackpotValues.some((v) => v.isLive);

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
        <h2 className="mb-5 text-2xl font-bold text-white">
          Live progressive jackpot tracker — {jackpotSources.length} jackpots
        </h2>
        <div className="overflow-x-auto rounded-xl border border-ink-600">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-ink-800 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Jackpot</th>
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Current jackpot</th>
                <th className="px-4 py-3">Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700 bg-ink-900">
              {jackpotSources
                .map((source) => ({
                  source,
                  value: jackpotValues.find((v) => v.slotSlug === source.slotSlug),
                }))
                .sort((a, b) => (b.value?.amount ?? 0) - (a.value?.amount ?? 0))
                .map(({ source, value }, i) => (
                  <tr key={source.slotSlug} className="hover:bg-ink-800">
                    <td className="px-4 py-3 font-bold text-gold-400">{i + 1}</td>
                    <td className="px-4 py-3 font-semibold text-white">{source.displayName}</td>
                    <td className="px-4 py-3 text-slate-400">{source.provider}</td>
                    <td className="px-4 py-3 capitalize text-slate-400">{source.jackpotType}</td>
                    <td className="px-4 py-3 font-bold text-gold-300">
                      {value ? (
                        value.isLive ? (
                          <TickerValue
                            amount={value.amount}
                            currency={value.currency}
                            updatedAt={value.updatedAt}
                            ratePerHour={value.ratePerHour}
                          />
                        ) : (
                          formatJackpot(value)
                        )
                      ) : (
                        '—'
                      )}
                      {value && !value.isLive && (
                        <span className="ml-1 text-xs font-normal text-slate-500">(sample)</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {source.reviewSlug ? (
                        <Link
                          href={`/slots/${source.reviewSlug}`}
                          className="font-semibold text-gold-400 hover:text-gold-300"
                        >
                          Read →
                        </Link>
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          {anyLive
            ? 'Live values are verified several times a day; the counting between refreshes is an estimate based on typical pool growth and resets at each verification. '
            : 'Jackpot values shown are samples until the live feed is connected. '}
          Network jackpots are shared across many games — see each review for RTP and mechanics, and
          always check the game rules panel at your casino.
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
          <Link href="/offers/best-uk-casino-offers" className="mt-3 inline-block font-semibold text-gold-400 hover:text-gold-300">
            Best jackpot casino offers →
          </Link>
        </div>
      </section>

      <RgBanner />
    </>
  );
}
