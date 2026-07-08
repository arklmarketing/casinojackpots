import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How CasinoJackpots.io collects, uses and protects personal data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }]} />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Privacy Policy</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p className="rounded-lg border border-amber-600/50 bg-amber-950/40 p-3 text-sm text-amber-200">
          Template — have this reviewed by a solicitor and completed with your registered company
          details before launch.
        </p>
        <p>
          {SITE.name} (&quot;we&quot;) operates {SITE.url}. This policy explains what personal data
          we collect, why, and your rights under UK GDPR and the Data Protection Act 2018.
        </p>
        <h2 className="text-xl font-bold text-white">What we collect</h2>
        <p>
          We collect analytics data (pages visited, approximate location, device type) to improve
          the site, and any information you send us directly by email. We do not require accounts
          and do not collect payment information. When you click through to a casino, that
          operator&apos;s own privacy policy applies.
        </p>
        <h2 className="text-xl font-bold text-white">Cookies and affiliate tracking</h2>
        <p>
          Outbound casino links carry affiliate tracking parameters so operators can attribute
          sign-ups to us. Analytics cookies are used only with your consent where required by law.
        </p>
        <h2 className="text-xl font-bold text-white">Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data by emailing{' '}
          {SITE.email}. You may complain to the Information Commissioner&apos;s Office (ico.org.uk)
          if you believe we have mishandled your data.
        </p>
      </div>
    </div>
  );
}
