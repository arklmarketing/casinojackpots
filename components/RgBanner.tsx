import { RG_LINKS } from '@/lib/site';

/** Responsible-gambling strip shown on all commercial pages. */
export default function RgBanner() {
  return (
    <aside className="my-8 rounded-lg border border-ink-600 bg-ink-800 p-4 text-sm text-slate-300">
      <p>
        <strong className="text-white">18+ | Please gamble responsibly.</strong> Gambling should be
        entertainment, never a way to make money. Set limits, never chase losses, and if it stops
        being fun, free and confidential help is available from{' '}
        {RG_LINKS.map((l, i) => (
          <span key={l.href}>
            <a href={l.href} rel="nofollow noopener" target="_blank" className="text-gold-400 underline hover:text-gold-300">
              {l.label}
            </a>
            {i < RG_LINKS.length - 1 ? ', ' : '.'}
          </span>
        ))}
      </p>
    </aside>
  );
}
