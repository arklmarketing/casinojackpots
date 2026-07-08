export default function Rating({ value, label }: { value: number; label?: string }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span className="inline-flex items-center gap-2" aria-label={`Rated ${value} out of 5`}>
      <span className="relative inline-block text-lg leading-none" aria-hidden="true">
        <span className="text-ink-600">★★★★★</span>
        <span
          className="absolute inset-0 overflow-hidden whitespace-nowrap text-gold-400"
          style={{ width: `${pct}%` }}
        >
          ★★★★★
        </span>
      </span>
      <span className="font-semibold text-gold-300">{value.toFixed(1)}</span>
      {label && <span className="text-sm text-slate-400">{label}</span>}
    </span>
  );
}
