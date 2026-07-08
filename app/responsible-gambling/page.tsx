import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { RG_LINKS } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Responsible Gambling — Tools, Support & Where to Get Help',
  description:
    'Responsible gambling resources for UK players: deposit limits, GAMSTOP self-exclusion, and free confidential support from GambleAware, GamCare and Gamblers Anonymous.',
  path: '/responsible-gambling',
});

export default function ResponsibleGamblingPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Responsible Gambling', path: '/responsible-gambling' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Responsible Gambling</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p>
          Everything on this site rests on one premise: gambling is entertainment with a known
          price, never a way to make money. Every game we review returns less than it takes over
          time — that is how casinos exist. Jackpot stories are real, but they are the rare
          exception that the mathematics permits, not a strategy anyone can follow.
        </p>
        <p>
          If you play, the tools below keep the price of that entertainment under your control.
          Every UKGC-licensed casino must provide them; the good ones make them easy to find.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-white">Tools every UK casino must offer</h2>
      <ul className="mt-4 space-y-3">
        {[
          ['Deposit limits', 'Cap what you can deposit per day, week or month. Set them when you open an account, before you play.'],
          ['Time-outs', 'Lock yourself out of an account for 24 hours to six weeks. Instant to apply, impossible to reverse early.'],
          ['Self-exclusion & GAMSTOP', 'Exclude yourself from all UK-licensed sites at once for six months to five years via GAMSTOP — free, and casinos must enforce it.'],
          ['Reality checks', 'On-screen reminders of how long you have played and your net position for the session.'],
        ].map(([title, desc]) => (
          <li key={title} className="rounded-xl border border-ink-600 bg-ink-800 p-5">
            <h3 className="font-bold text-white">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{desc}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-white">The warning signs</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        Chasing losses, hiding play from people close to you, gambling with money needed for bills,
        or feeling anxious when not playing — any one of these is reason to stop and talk to
        someone. There is no threshold you must pass before support applies to you.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-white">Free, confidential help</h2>
      <ul className="mt-4 space-y-3">
        {RG_LINKS.map((link) => (
          <li key={link.href} className="rounded-xl border border-ink-600 bg-ink-800 p-5">
            <a
              href={link.href}
              rel="nofollow noopener"
              target="_blank"
              className="font-bold text-gold-400 hover:text-gold-300"
            >
              {link.label} →
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-slate-400">
        The National Gambling Helpline (run by GamCare) is available 24 hours a day on 0808 8020
        133. Calls are free and confidential.
      </p>
    </div>
  );
}
