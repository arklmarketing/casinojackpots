import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-6xl font-black text-gold-400">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-slate-400">
        The page you are looking for has moved or never existed. Try one of these instead:
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-lg bg-gold-500 px-5 py-2.5 font-bold text-ink-950 hover:bg-gold-400">
          Home
        </Link>
        <Link href="/offers/best-casino-offers" className="rounded-lg border border-ink-600 px-5 py-2.5 font-semibold text-slate-200 hover:border-gold-600">
          Best Casino Offers
        </Link>
        <Link href="/jackpots/news" className="rounded-lg border border-ink-600 px-5 py-2.5 font-semibold text-slate-200 hover:border-gold-600">
          Jackpot News
        </Link>
      </div>
    </div>
  );
}
