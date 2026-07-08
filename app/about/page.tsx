import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { authors } from '@/content/authors';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'About Us — Who Writes CasinoJackpots.io',
  description:
    'Who we are, how we work and why you can trust CasinoJackpots.io: an independent, expert-led casino comparison site built on real testing and responsible gambling.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">About {SITE.name}</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p>
          {SITE.name} exists to answer three questions properly: which jackpots are worth chasing,
          which casinos deserve your custom, and what the mathematics really say about both. We are
          an independent comparison and news site — we are not a casino, we take no bets, and we
          hold no gambling licences because we need none.
        </p>
        <p>
          We are funded by affiliate commissions: when a reader joins a casino through one of our
          links, the operator pays us a fee at no cost to the reader. That model creates an obvious
          potential conflict of interest, which we manage the only way that works — with a
          published, checklist-based review methodology that commercial teams cannot touch. Read it
          in full on our{' '}
          <Link href="/how-we-rank" className="text-gold-400 underline hover:text-gold-300">
            How We Test &amp; Rank
          </Link>{' '}
          page.
        </p>
        <p>
          We only review operators licensed by the UK Gambling Commission, we test with real
          deposits and withdrawals, and we re-verify offer terms weekly. When we get something
          wrong, we correct it visibly and date the correction.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-white">The team</h2>
      <div className="mt-4 space-y-4">
        {authors.map((author) => (
          <div key={author.id} className="rounded-xl border border-ink-600 bg-ink-800 p-5">
            <h3 className="font-bold text-white">{author.name}</h3>
            <p className="text-sm text-gold-400">{author.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{author.bio}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-white">Our commitment to safer gambling</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        Gambling content carries responsibility. Every commercial page on this site carries 18+
        messaging and signposting to GambleAware, GamCare and GAMSTOP; we never describe gambling as
        a way to make money; and we will never publish content designed to appeal to under-18s or to
        people who have self-excluded. See our{' '}
        <Link href="/responsible-gambling" className="text-gold-400 underline hover:text-gold-300">
          Responsible Gambling
        </Link>{' '}
        page for support resources.
      </p>
    </div>
  );
}
