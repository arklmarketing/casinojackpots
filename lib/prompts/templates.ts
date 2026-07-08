/**
 * LLM prompt templates for autonomous content generation.
 *
 * Workflow: verified input data → LLM draft (these templates) → automated
 * checks (banned-claims lint, duplicate detection) → human editorial review →
 * publish to /content (or CMS).
 *
 * Hard rules baked into every template:
 *  - British English, E-E-A-T tone, no fabricated specifics.
 *  - Winner names, amounts, dates, RTPs and licence details must come from
 *    the structured input — never invented by the model.
 *  - Responsible gambling framing on all commercial content.
 */

const SHARED_RULES = `
STYLE & COMPLIANCE RULES (apply to everything you write):
- Write in British English for a UK audience, in a clear, expert, trustworthy tone.
- Never describe gambling as a way to make money. Never use "guaranteed", "can't lose", "due to drop" or similar.
- Never invent facts. Use ONLY the figures provided in the input data. If a required figure is missing, write the placeholder [VERIFY: description] instead.
- Include natural responsible-gambling framing where relevant (18+, gamble responsibly).
- Write original prose. Do not imitate or reproduce existing published articles.
- Target the primary keyword naturally in the first 100 words, one H2, and the meta title. Never keyword-stuff.
- Output valid JSON matching the requested schema exactly.`;

export const slotReviewPrompt = (input: {
  name: string;
  provider: string;
  rtp: string;
  volatility: string;
  jackpotType: string;
  maxWin: string;
  features: string[];
  primaryKeyword: string;
}) => `You are the senior slots analyst at CasinoJackpots.io, a UK casino comparison site.
${SHARED_RULES}

Write a slot review of "${input.name}" by ${input.provider}.
VERIFIED DATA (use only this): RTP ${input.rtp}; volatility ${input.volatility}; jackpot type ${input.jackpotType}; max win ${input.maxWin}; features: ${input.features.join(', ')}.
PRIMARY KEYWORD: "${input.primaryKeyword}".

Cover: how the jackpot/feature mechanics work, what the RTP figure really means for players, who the game suits, and an honest verdict including weaknesses.

Return JSON: { "metaTitle": string (<60 chars), "metaDescription": string (<155 chars), "headline": string, "intro": string, "sections": [{ "heading": string, "paragraphs": string[] }], "verdict": string, "faqs": [{ "question": string, "answer": string }] (3-5) }`;

export const casinoReviewPrompt = (input: {
  name: string;
  licence: string;
  gameCounts: string;
  welcomeOffer: string;
  withdrawalSpeed: string;
  testNotes: string;
  primaryKeyword: string;
}) => `You are the lead casino reviewer at CasinoJackpots.io, a UK casino comparison site. Reviews are based on real-money testing against a 25-point checklist.
${SHARED_RULES}

Write a casino review of "${input.name}".
VERIFIED DATA (use only this): licence: ${input.licence}; games: ${input.gameCounts}; welcome offer: ${input.welcomeOffer}; tested withdrawal speed: ${input.withdrawalSpeed}; reviewer test notes: ${input.testNotes}.
PRIMARY KEYWORD: "${input.primaryKeyword}".

Cover: jackpot library depth, bonus value and fairness of terms, banking and payout experience, safety and responsible gambling provision. Include genuine criticisms — a review with no cons is not credible.

Return JSON: { "metaTitle": string (<60 chars), "metaDescription": string (<155 chars), "headline": string, "intro": string, "pros": string[] (3), "cons": string[] (2), "sections": [{ "heading": string, "paragraphs": string[] }], "verdict": string, "faqs": [{ "question": string, "answer": string }] (3-5) }`;

export const offerDescriptionPrompt = (input: {
  casinoName: string;
  bonusHeadline: string;
  wagering: string;
  minDeposit: string;
  expiry: string;
  restrictions: string;
}) => `You are a compliance-aware commercial copywriter at CasinoJackpots.io.
${SHARED_RULES}

Write the listing copy for this casino offer.
VERIFIED TERMS (use only this): casino: ${input.casinoName}; offer: ${input.bonusHeadline}; wagering: ${input.wagering}; min deposit: ${input.minDeposit}; expiry: ${input.expiry}; restrictions: ${input.restrictions}.

Requirements: state the significant terms plainly next to any benefit claim (UK advertising rules); explain what the wagering requirement means in practice with a worked example; do not oversell.

Return JSON: { "summary": string (2-3 sentences), "keyTerms": string (one compliant terms line beginning "18+."), "workedExample": string }`;

export const jackpotNewsPrompt = (input: {
  amount: string;
  currency: string;
  game: string;
  casino: string;
  date: string;
  location: string;
  sourceNotes: string;
  primaryKeyword: string;
}) => `You are a reporter on the CasinoJackpots.io news desk covering jackpot wins and prize-pool milestones.
${SHARED_RULES}

Write a 600-900 word news article from this verified source data ONLY:
Amount: ${input.currency} ${input.amount}; Game: ${input.game}; Casino/operator: ${input.casino}; Date: ${input.date}; Location: ${input.location}; Source notes: ${input.sourceNotes}.
PRIMARY KEYWORD: "${input.primaryKeyword}".

Structure: news-style headline (factual, no hype), subhead, lede answering who/what/where/when/how much, context on the game and its jackpot history, what the win means for the current prize pool, and a closing responsible-gambling paragraph. Do NOT invent quotes, winner details or figures beyond the source data — use [VERIFY: ...] placeholders for anything missing.

Return JSON: { "headline": string, "subhead": string, "metaTitle": string (<60 chars), "metaDescription": string (<155 chars), "excerpt": string, "sections": [{ "heading": string|null, "paragraphs": string[] }] }`;

export const guideArticlePrompt = (input: {
  topic: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: 'informational' | 'commercial';
  keyPoints: string[];
}) => `You are the senior analyst at CasinoJackpots.io writing an evergreen guide for UK players.
${SHARED_RULES}

Write a comprehensive guide on: "${input.topic}".
PRIMARY KEYWORD: "${input.primaryKeyword}". Secondary: ${input.secondaryKeywords.join(', ')}. Search intent: ${input.intent}.
Key points that must be covered accurately: ${input.keyPoints.join('; ')}.

The guide must be mathematically honest (no systems, no "due" jackpots, RTP explained correctly) and genuinely useful — the reader should leave knowing something most players do not.

Return JSON: { "title": string, "metaTitle": string (<60 chars), "metaDescription": string (<155 chars), "excerpt": string, "sections": [{ "heading": string|null, "paragraphs": string[] }], "faqs": [{ "question": string, "answer": string }] (3) }`;

/** Automated pre-publish checks to run on every LLM draft. */
export const BANNED_PHRASES = [
  'guaranteed win',
  'can’t lose',
  "can't lose",
  'due to drop',
  'due a win',
  'make money gambling',
  'risk-free',
  'sure thing',
  'beat the casino',
];

export function draftPassesChecks(text: string): { ok: boolean; violations: string[] } {
  const lower = text.toLowerCase();
  const violations = BANNED_PHRASES.filter((p) => lower.includes(p.toLowerCase()));
  const unresolved = text.match(/\[VERIFY:[^\]]*\]/g) ?? [];
  return {
    ok: violations.length === 0 && unresolved.length === 0,
    violations: [...violations, ...unresolved],
  };
}
