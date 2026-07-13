'use client';

import { useEffect, useState } from 'react';

interface TickerValueProps {
  /** Base amount at the moment of the last scrape (major units). */
  amount: number;
  currency: string;
  /** ISO timestamp of the last scrape — ticking is measured from here. */
  updatedAt: string;
  /** Estimated pool growth per hour, used to animate between scrapes. */
  ratePerHour: number;
  /** Static display (no ticking) for sample/fixed values. */
  animate?: boolean;
  className?: string;
}

function format(currency: string, value: number, decimals: boolean): string {
  return (
    currency +
    value.toLocaleString('en-GB', {
      minimumFractionDigits: decimals ? 2 : 0,
      maximumFractionDigits: decimals ? 2 : 0,
    })
  );
}

/**
 * Animated jackpot ticker. Counts upward from the last scraped value at an
 * estimated growth rate; when a new scrape lands (new `amount`/`updatedAt`
 * from the server), the ticker resets to the fresh real value — that is the
 * loop. Server renders the static base value, so SEO and no-JS visitors see
 * the real scraped figure.
 */
export default function TickerValue({
  amount,
  currency,
  updatedAt,
  ratePerHour,
  animate = true,
  className,
}: TickerValueProps) {
  const [display, setDisplay] = useState<string>(format(currency, amount, false));

  useEffect(() => {
    if (!animate || ratePerHour <= 0) {
      setDisplay(format(currency, amount, false));
      return;
    }
    const base = new Date(updatedAt).getTime();
    const tick = () => {
      const elapsedHours = Math.max(0, (Date.now() - base) / 3_600_000);
      setDisplay(format(currency, amount + elapsedHours * ratePerHour, true));
    };
    tick();
    const id = setInterval(tick, 150);
    return () => clearInterval(id);
  }, [amount, currency, updatedAt, ratePerHour, animate]);

  return (
    <span className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  );
}
