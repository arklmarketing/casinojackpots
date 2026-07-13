# Geo Expansion Playbook — replicating the UK strategy for NZ / CA

The UK silo structure is the template. Root-level pages serve Great Britain;
each new market gets a subfolder clone with local data, local compliance and
hreflang wiring.

## URL architecture

| Market | Structure | Example |
|---|---|---|
| UK (current) | Root | `/offers/best-uk-casino-offers`, `/bonuses` |
| New Zealand | `/nz/` subfolder | `/nz/offers/best-nz-casino-offers`, `/nz/bonuses` |
| Canada (Ontario) | `/ca/` subfolder | `/ca/offers/best-casino-offers-ontario`, `/ca/bonuses` |

Subfolders (not subdomains) keep all authority on one domain. Every cloned
page carries `hreflang` alternates (`en-GB`, `en-NZ`, `en-CA`) plus
`x-default` pointing at the UK root — add via the `alternates.languages`
field in `lib/seo.ts` once the first clone ships.

## What gets cloned per market

1. **Money page** — `best-[geo]-casino-offers` with local partner offers only
2. **Bonuses silo** — bonus types are universal; rewrite examples in local
   currency and local market norms (NZ has no wagering-cap culture; Ontario
   bans public bonus advertising — see compliance below)
3. **Casino reviews** — local licensees only, licence verified against the
   local register
4. **Jackpot tracker** — same engine; add geo-relevant source pages and
   currency to `content/jackpot-sources.ts` (structure already supports £/€/$)
5. **Guides** — regulatory sections rewritten; maths content is universal

## Compliance per market (the part that is NOT copy-paste)

- **NZ**: online casino is not domestically licensed — offshore operators
  serve NZ legally from their own jurisdictions. List only reputable
  licensees (MGA etc.), replace GAMSTOP/GambleAware references with NZ
  equivalents (Gambling Helpline NZ, Safer Gambling Aotearoa). No UKGC
  claims.
- **CA (Ontario)**: iGaming Ontario / AGCO-registered operators only; note
  that Ontario **prohibits public advertising of bonuses/inducements** —
  bonus content must be informational, with offers only behind intent
  (registered-user contexts). Take legal advice before launching /ca/.
  Other provinces have different regimes.
- RG bodies per market: swap `RG_LINKS` in `lib/site.ts` into a per-geo map.

## Technical steps when cloning (est. one session per market)

1. Create `app/nz/` route group mirroring the UK page set
2. Add geo config: currency, RG links, licence-register URL, market name
3. Add hreflang alternates to `buildMetadata`
4. Local partner data in `content/` (offers-nz.ts, casinos-nz.ts)
5. Sitemap: append geo pages; robots unchanged
6. Search Console: same property covers subfolders; submit updated sitemap
7. Content engine: add geo field to news queue items so articles can target
   market-specific pages

## Order of operations for a new market

Partners first, pages second. A geo clone with no local affiliate deals is a
doorway page in Google's eyes — sign at least one local partner, then build
the silo around a real, verifiable offer, exactly as the UK site did with
NetBet.
