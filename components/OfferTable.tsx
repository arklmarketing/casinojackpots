import Link from 'next/link';
import type { Casino, CasinoOffer } from '@/content/types';
import Rating from './Rating';

interface OfferRow {
  offer: CasinoOffer;
  casino: Casino;
}

/** Conversion-focused offers grid used on the Best Casino Offers page + home. */
export default function OfferTable({ rows }: { rows: OfferRow[] }) {
  return (
    <div className="space-y-4">
      {rows.map(({ offer, casino }, i) => (
        <article
          key={offer.id}
          className="relative rounded-xl border border-ink-600 bg-ink-800 p-5 transition-colors hover:border-gold-600/60"
        >
          {i === 0 && (
            <span className="absolute -top-3 left-5 rounded-full bg-gold-500 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-ink-950">
              Top pick
            </span>
          )}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ink-700 text-xl font-black text-gold-400">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-white">
                  <Link href={`/casinos/${casino.slug}`} className="hover:text-gold-400">
                    {casino.name}
                  </Link>
                </h3>
                <Rating value={casino.rating} />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-gold-300">{offer.bonusHeadline}</p>
              <p className="mt-1 text-sm text-slate-400">
                Wagering: {offer.wagering} · Min deposit: {offer.minDeposit} · Expires: {offer.expiry}
              </p>
            </div>
            <div className="sm:w-44 sm:shrink-0 sm:text-right">
              <a
                href={`/go/${offer.id}`}
                rel="nofollow sponsored noopener"
                target="_blank"
                className="inline-block w-full rounded-lg bg-mint-500 px-5 py-3 text-center font-bold text-ink-950 transition-colors hover:bg-mint-400 sm:w-auto"
              >
                Claim Offer
              </a>
              <p className="mt-2 text-xs text-slate-500">
                <Link href={`/casinos/${casino.slug}`} className="underline hover:text-gold-400">
                  Read review
                </Link>
              </p>
            </div>
          </div>
          <p className="mt-4 border-t border-ink-700 pt-3 text-xs leading-relaxed text-slate-500">
            {offer.keyTerms}
            {offer.isExample && ' [Example offer — replace with live verified terms before launch.]'}
          </p>
        </article>
      ))}
    </div>
  );
}
