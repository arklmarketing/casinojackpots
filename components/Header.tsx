import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500 text-lg font-black text-ink-950">
            £
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Casino<span className="text-gold-400">Jackpots</span>
            <span className="text-slate-500">.io</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-red-500 text-xs font-bold text-red-400"
          title="18+ only"
          aria-label="18 plus only"
        >
          18+
        </span>
      </div>
      {/* Mobile nav */}
      <nav aria-label="Primary mobile" className="flex gap-4 overflow-x-auto border-t border-ink-700 px-4 py-2 md:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-sm font-medium text-slate-300 hover:text-gold-400"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
