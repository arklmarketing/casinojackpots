import { NextRequest, NextResponse } from 'next/server';
import { offers } from '@/content/offers';
import { casinos } from '@/content/casinos';

/**
 * Commercial engine: central affiliate redirect.
 *
 * All CTAs on the site point at /go/<offer-id> (or /go/<casino-slug>).
 * Benefits: affiliate links are managed in one place (content/offers.ts),
 * every outbound click is logged (visible in Vercel → Logs, and ready to
 * pipe into any analytics backend), and links can be swapped without
 * touching page content.
 *
 * /go/ is disallowed in robots.txt — affiliate redirects should not be
 * crawled or indexed.
 */

export const dynamic = 'force-dynamic';

export function GET(req: NextRequest, { params }: { params: { offerId: string } }) {
  const offer = offers.find((o) => o.id === params.offerId);
  const casino = casinos.find((c) => c.slug === params.offerId);
  const target = offer?.affiliateUrl ?? casino?.affiliateUrl;

  if (!target) {
    // Unknown ID — send the visitor somewhere useful rather than a 404.
    return NextResponse.redirect(new URL('/offers/best-casino-offers', req.url), 302);
  }

  // Click log — structured JSON, one line per outbound click.
  console.log(
    JSON.stringify({
      type: 'affiliate_click',
      id: params.offerId,
      casino: offer?.casinoSlug ?? casino?.slug ?? 'unknown',
      ts: new Date().toISOString(),
      referer: req.headers.get('referer') ?? undefined,
    }),
  );

  return NextResponse.redirect(target, 302);
}
