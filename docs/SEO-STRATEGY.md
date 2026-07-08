# CasinoJackpots.io — SEO Strategy

## Architecture: hub-and-spoke

Five topical silos, each with a hub (pillar) page and spoke content. Spokes always link up to their hub and sideways to 2–3 relevant spokes; hubs interlink once in body copy; the money page (`/offers/best-casino-offers`) and news section (`/jackpots/news`) receive contextual links from every silo.

| Silo | Hub URL | H1 / Primary keyword | Secondary keywords | Spokes |
|---|---|---|---|---|
| Jackpots | `/jackpots` | Casino Jackpots | biggest casino jackpots, progressive jackpot tracker | News articles, slot reviews, jackpot guides |
| Jackpot News | `/jackpots/news` | Casino Jackpots News | casino jackpot news, slot jackpot winners, biggest casino jackpots | `/jackpots/news/[slug]` articles |
| Slots | `/slots` | Best Slot Games (jackpot slots) | casino slot games, online slots, best slot games | `/slots/[slug]` reviews (Mega Moolah, Mega Fortune, Divine Fortune, Wolf Gold, Age of the Gods) |
| Casino Games | `/games` | Best Casino Games | online casino games, casino games UK | Category sections → link to slots + guides |
| Offers | `/offers/best-casino-offers` | Best Casino Offers UK | top casino bonuses, best online casino deals | `/casinos/[slug]` reviews (support the money page) |
| Guides | `/guides` | Casino Guides & Strategy | how progressive jackpots work, slot RTP explained | `/guides/[slug]` articles |

## Keyword cluster targets

- **"casino jackpots" cluster** → `/jackpots` hub + news section + biggest-wins article. Freshness matters: publish jackpot news weekly minimum.
- **"casino games" cluster** → `/games` hub, informational intent, links down into slots and guides.
- **"slot games" cluster** → `/slots` hub + individual reviews for long-tail ("mega moolah rtp", "wolf gold jackpot").
- **"casino offers" cluster** → the money page, supported by casino reviews and the "how to choose a jackpot casino" commercial guide.

## Internal linking rules

1. Every spoke links to its hub in the breadcrumb AND once in body copy.
2. News articles link to reviewed slots/casinos mentioned (related-content block is automatic via `relatedSlotSlugs`/`relatedCasinoSlugs`).
3. Every review's verdict links to `/offers/best-casino-offers` (money-page equity).
4. Guides cross-link to each other and to relevant reviews (topical authority).
5. No orphan pages: everything in `/content` is emitted in `sitemap.ts` automatically.

## E-E-A-T signals implemented

- Published methodology (`/how-we-rank`), team page (`/about`), corrections policy, dated + authored content, first-hand testing language, honest cons in every review, Review/NewsArticle/FAQPage/Organization schema, affiliate disclosure in footer, RG signposting site-wide.

## Technical

- SSR/SSG via Next.js App Router (all pages statically generated, `generateStaticParams` on dynamic routes).
- Canonicals, OG/Twitter cards via `lib/seo.ts`; JSON-LD via `lib/schema.ts`.
- `sitemap.ts` + `robots.ts` auto-generated. 301s configured in `next.config.mjs`.
- Core Web Vitals targets: LCP < 2.0s, INP < 200ms, CLS < 0.1. No client-side JS beyond React hydration; zero external fonts; system font stack.

## Pre-launch checklist

1. Replace demo casino brands/offers with verified partner data (`content/casinos.ts`, `content/offers.ts`).
2. Verify all RTP figures against provider game sheets.
3. Set real affiliate tracking links.
4. Legal review of privacy/terms pages.
5. Deploy → verify domain in Google Search Console → submit sitemap.
6. Run Lighthouse (target 95+ across the board) and validate schema at validator.schema.org.
7. Confirm UK advertising compliance (CAP Code): significant terms visible near every CTA. Consider whether GambleAware research/affiliate requirements apply to your jurisdiction of operation.
