import { formatJackpot, type JackpotValue } from '@/lib/jackpots';
import { formatDate } from '@/lib/seo';

/** Displays a current jackpot value with live/sample labelling. */
export default function JackpotBadge({ value }: { value: JackpotValue }) {
  return (
    <div className="rounded-xl border border-gold-600/40 bg-ink-800 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
        Current jackpot {value.isLive ? '· live' : '· sample'}
      </p>
      <p className="mt-1 text-3xl font-extrabold text-white">{formatJackpot(value)}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        {value.isLive
          ? `Updated ${formatDate(value.updatedAt)}. Values refresh daily and may lag the in-game ticker.`
          : value.note ?? 'Sample value — live feed not yet connected.'}
      </p>
    </div>
  );
}
