import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Contact the CasinoJackpots.io team: editorial corrections, partnership enquiries and reader questions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Contact Us</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p>
          For editorial matters — corrections, factual complaints or story tips — email{' '}
          <a href={`mailto:${SITE.email}`} className="text-gold-400 underline hover:text-gold-300">
            {SITE.email}
          </a>
          . We review correction requests within five working days.
        </p>
        <p>
          For partnership and affiliate enquiries, use the same address with “Partnerships” in the
          subject line. Note that commercial relationships have no influence on our reviews or
          rankings — see{' '}
          <a href="/how-we-rank" className="text-gold-400 underline hover:text-gold-300">
            How We Test &amp; Rank
          </a>
          .
        </p>
        <p>
          If you are struggling with gambling, please do not wait for an email reply — the National
          Gambling Helpline is available 24/7 on 0808 8020 133, and our{' '}
          <a href="/responsible-gambling" className="text-gold-400 underline hover:text-gold-300">
            Responsible Gambling page
          </a>{' '}
          lists free, confidential support services.
        </p>
      </div>
    </div>
  );
}
