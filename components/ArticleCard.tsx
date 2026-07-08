import Link from 'next/link';
import { formatDate } from '@/lib/seo';

interface ArticleCardProps {
  href: string;
  title: string;
  excerpt: string;
  date?: string;
  tag?: string;
}

export default function ArticleCard({ href, title, excerpt, date, tag }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-ink-600 bg-ink-800 p-5 transition-colors hover:border-gold-600/60">
      <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
        {tag && (
          <span className="rounded-full bg-ink-700 px-2.5 py-0.5 font-semibold uppercase tracking-wide text-gold-400">
            {tag}
          </span>
        )}
        {date && <time dateTime={date}>{formatDate(date)}</time>}
      </div>
      <h3 className="font-bold text-white">
        <Link href={href} className="hover:text-gold-400">
          {title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{excerpt}</p>
      <Link href={href} className="mt-3 text-sm font-semibold text-gold-400 hover:text-gold-300">
        Read more →
      </Link>
    </article>
  );
}
