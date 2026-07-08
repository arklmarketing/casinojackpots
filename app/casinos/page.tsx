import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { casinos } from '@/content/casinos';
import Breadcrumbs from '@/components/Breadcrumbs';
import Rating from '@/components/Rating';
import RgBanner from '@/components/RgBanner';

export const metadata: Metadata = buildMetadata({
  title: 'Best Jackpot Casinos UK 2026 — Expert Reviews & Rankings',
  description:
    'The best UK jackpot casinos, tested with real money and ranked against our 25-point checklist: jackpot libraries, payout speed, bonus fairness and player safety.',
  path: '/casinos',
});

export default function CasinosIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Casinos', path: '/casinos' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
        Best Jackpot Casinos — Reviewed &amp; Ranked
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
        Every casino below has been tested with real deposits and withdrawals and scored against our
        published 25-point checklist. Rankings reflect scores alone — commercial partnerships never
        move a casino up this list. Only UK Gambling Commission-licensed operators are considered.
      </p>

      <div className="mt-8 space-y-5">
        {casinos.map((casino, i) => (
          <article
            key={casino.slug}
            className="rounded-xl border border-ink-600 bg-ink-800 p-6 transition-colors hover:border-gold-600/60"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ink-700 text-xl font-black text-gold-400">
                {i + 1}
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">
                  <Link href={`/casinos/${casino.slug}`} className="hover:text-gold-400">
                    {casino.name}
                  </Link>
                </h2>
                <p className="text-sm text-slate-400">{casino.headline}</p>
                <div className="mt-1">
                  <Rating value={casino.rating} />
                </div>
              </div>
              <Link
                href={`/casinos/${casino.slug}`}
                className="shrink-0 rounded-lg border border-gold-600 px-5 py-2.5 text-center font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-ink-950"
              >
                Read review
              </Link>
            </div>
          </article>
        ))}
      </div>

      <RgBanner />
    </>
  );
}
