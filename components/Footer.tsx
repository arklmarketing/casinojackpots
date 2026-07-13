import Link from 'next/link';
import { RG_LINKS, SITE } from '@/lib/site';

const FOOTER_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/how-we-rank', label: 'How We Test & Rank' },
  { href: '/responsible-gambling', label: 'Responsible Gambling' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-content px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold text-white">
              Casino<span className="text-gold-400">Jackpots</span>
              <span className="text-slate-500">.io</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{SITE.tagline}</p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              <strong className="text-slate-400">Affiliate disclosure:</strong> {SITE.name} is an
              independent comparison site. We may earn a commission when you visit a casino through
              our links, at no cost to you. Commercial relationships never influence our ratings —
              see our <Link href="/how-we-rank" className="underline">editorial policy</Link>.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-300">Site</h2>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-gold-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-300">
              Safer Gambling
            </h2>
            <ul className="mt-3 space-y-2">
              {RG_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="nofollow noopener"
                    target="_blank"
                    className="text-sm text-slate-400 hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-red-500 text-[10px] font-bold text-red-400">
                18+
              </span>
              Gambling is for over-18s only. Play responsibly.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-ink-700 pt-6 text-xs leading-relaxed text-slate-500">
          <p>
            © {new Date().getFullYear()}{' '}
            <a
              href="https://www.wager.media"
              target="_blank"
              rel="noopener"
              className="font-semibold text-slate-400 underline hover:text-gold-400"
            >
              Wager Media
            </a>
            . All rights reserved. Gambling involves risk —
            never bet more than you can afford to lose. Bonuses and offers shown are subject to the
            operator&apos;s full terms and conditions, which you should always read before playing.
            Nothing on this site guarantees winnings; all casino games are games of chance.
          </p>
        </div>
      </div>
    </footer>
  );
}
