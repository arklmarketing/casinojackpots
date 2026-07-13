import { formatJackpot, type JackpotValue } from '@/lib/jackpots';
import { formatDate } from '@/lib/seo';
import TickerValue from './TickerValue';

/** Displays a current jackpot value with live/sample labelling. */
export default function JackpotBadge({ value }: { value: JackpotValue }) {
  return (
    <div className="rounded-xl border border-gold-600/40 bg-ink-800 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
        Current jackpot {value.isLive ? '· live' : '· sample'}
      </p>
      <p className="mt-1 text-3xl font-extrabold text-white">
        {value.isLive ? (
          <TickerValue
            amount={value.amount}
            currency={value.currency}
            updatedAt={value.updatedAt}
            ratePerHour={value.ratePerHour}
          />
        ) : (
          formatJackpot(value)
        )}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        {value.isLive
          ? `Last verified ${formatDate(value.updatedAt)}; the count between refreshes is an estimate based on typical pool growth.`
          : value.note ?? 'Sample value — live feed not yet connected.'}
      </p>
    </div>
  );
}
