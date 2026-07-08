# CasinoJackpots.io — Deployment & Operations Guide

## Deploy (Vercel, recommended)

1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import the repo. Framework auto-detects as Next.js. No build config needed.
3. Set environment variables: `NEXT_PUBLIC_SITE_URL=https://casinojackpots.io`, plus `GOOGLE_SITE_VERIFICATION` once you have it.
4. Project → Settings → Domains → add `casinojackpots.io` and `www.casinojackpots.io` (redirect www → apex). Point your registrar's DNS: A record `76.76.21.21` for apex, CNAME `cname.vercel-dns.com` for www. SSL is automatic.
5. Verify the domain in Google Search Console (DNS TXT record), then submit `https://casinojackpots.io/sitemap.xml`.

Netlify works identically (build command `next build`), as does any Node host (`npm run build && npm run start`).

## Content operations cadence

| Job | Frequency | How |
|---|---|---|
| Jackpot news article | Weekly minimum | Feed verified win/pool data into `jackpotNewsPrompt` (lib/prompts/templates.ts) → run `draftPassesChecks` → human review → add to `content/news.ts` |
| Re-verify offers | Weekly | Check each partner's live terms; update `content/offers.ts` `lastUpdated` |
| Refresh money page copy | Monthly | Update intro month reference + re-rank if scores changed |
| Slot review | Fortnightly | New jackpot title via `slotReviewPrompt` |
| Casino review refresh | Quarterly | Re-run withdrawal tests, update `lastUpdated` |
| Guide refresh | Quarterly | Re-verify figures, expand FAQs from Search Console query data |

## Autonomous generation pipeline (when ready to automate)

1. **Input**: a curated feed or manual entry of verified jackpot data (amount, game, date, source).
2. **Draft**: call your LLM API with the matching template from `lib/prompts/templates.ts`.
3. **Check**: run `draftPassesChecks()` — rejects banned claims and unresolved [VERIFY] placeholders.
4. **Review**: human editor approves in a PR (content lives in git, so review = code review).
5. **Publish**: merge → Vercel auto-deploys → sitemap updates automatically.

Schedule steps 1–3 with a cron job (GitHub Actions works well: weekly workflow that opens a draft PR).

## Monitoring

- **Google Search Console**: weekly review of impressions/clicks by query; feed rising queries back into content plans and FAQ sections.
- **Analytics**: track outbound affiliate clicks (add an event listener or use Vercel Analytics) — offer-page CTR is the money metric.
- **Rank tracking**: track the head terms per silo (casino jackpots, casino jackpot news, best slot games, best casino offers, online casino games).
- **Core Web Vitals**: Search Console CWV report monthly; run Lighthouse after any layout change.

## Iteration loop

Monthly: pull the top 20 queries per hub from Search Console → identify near-page-1 terms (positions 5–15) → strengthen those pages (content depth, internal links from high-authority pages, FAQ coverage of the exact query phrasing). This compounding loop is what "ranks autonomously" actually looks like in practice.

## Migrating to a headless CMS (optional, later)

The content model in `content/types.ts` maps one-to-one to CMS schemas. To migrate: recreate the interfaces as Sanity/Contentful content types, replace the exports in `/content/*.ts` with client fetches, and add `revalidate` (ISR) to page files. No template changes required.
