import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for CasinoJackpots.io.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Terms of Use</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p className="rounded-lg border border-amber-600/50 bg-amber-950/40 p-3 text-sm text-amber-200">
          Template — have this reviewed by a solicitor before launch.
        </p>
        <p>
          By using {SITE.url} you accept these terms. This site is intended for people aged 18 and
          over located in Great Britain. If you are under 18, you must not use this site.
        </p>
        <h2 className="text-xl font-bold text-white">Information, not advice</h2>
        <p>
          Content on this site is provided for information and entertainment. It is not financial
          advice, and nothing here guarantees any gambling outcome. Bonus terms, jackpot values and
          game availability change constantly; while we re-verify commercial content weekly, the
          operator&apos;s own published terms always take precedence over anything shown here.
        </p>
        <h2 className="text-xl font-bold text-white">Affiliate relationships</h2>
        <p>
          We may receive commissions from operators linked on this site. This is disclosed site-wide
          and does not affect what you pay or receive from any operator.
        </p>
        <h2 className="text-xl font-bold text-white">Liability</h2>
        <p>
          To the fullest extent permitted by law, we accept no liability for losses arising from
          gambling activity undertaken at third-party sites, or from reliance on information that an
          operator has since changed.
        </p>
      </div>
    </div>
  );
}
