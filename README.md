# CasinoJackpots.io

SEO-optimised casino jackpots news + affiliate site for the UK market. Next.js 14 (App Router), TypeScript, Tailwind CSS. Fully server-rendered/statically generated.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/` — routes: `/jackpots` (+ `/news/[slug]`), `/slots/[slug]`, `/games`, `/casinos/[slug]`, `/offers/best-casino-offers`, `/guides/[slug]`, compliance pages, `sitemap.ts`, `robots.ts`
- `content/` — file-based content model (mirrors CMS schemas; see `types.ts`)
- `components/` — Header, Footer, OfferTable, Breadcrumbs (+schema), FaqSection (+schema), JsonLd, RgBanner, etc.
- `lib/` — `site.ts` (config), `seo.ts` (metadata builder), `schema.ts` (JSON-LD builders), `prompts/templates.ts` (LLM content-generation templates + pre-publish checks)
- `docs/` — `SEO-STRATEGY.md` (silos, keywords, linking rules), `OPERATIONS.md` (deploy + automation plan)

## ⚠️ Before launch

1. **Replace demo data.** All 5 casinos and all offers in `content/casinos.ts` / `content/offers.ts` are fictional example brands (`isExample: true`) demonstrating the templates. Replace with verified partner data and real affiliate tracking links.
2. **Verify RTP figures** in `content/slots.ts` against provider game sheets.
3. **Legal review** of `/privacy` and `/terms` templates.
4. **Compliance**: this site targets Great Britain. Ensure your affiliate operation complies with UKGC expectations and the CAP Code (significant terms near CTAs, 18+, no appeal to minors). Consider registering with GamStop's affiliate programme requirements where applicable.
5. Set `NEXT_PUBLIC_SITE_URL` and Search Console verification (see `.env.example`).

## Deployment

See `docs/OPERATIONS.md`. Short version: push to GitHub → import into Vercel → add domain `casinojackpots.io` → submit sitemap in Search Console.
