/**
 * Content Engine — weekly jackpot news generator.
 *
 * Reads the first unprocessed item from content/news-queue.json, drafts a
 * news article with the Anthropic API, runs compliance checks, and appends
 * the article to content/news-generated.json. Run by
 * .github/workflows/weekly-news.yml, which opens a pull request for human
 * review — nothing publishes without approval.
 *
 * Requires: ANTHROPIC_API_KEY environment variable.
 * Optional: ANTHROPIC_MODEL (defaults to claude-sonnet-5).
 *
 * Hard rules mirrored from lib/prompts/templates.ts: British English, no
 * invented facts (only queue data), responsible-gambling framing, banned
 * hype phrases rejected.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE_PATH = resolve(root, 'content/news-queue.json');
const OUTPUT_PATH = resolve(root, 'content/news-generated.json');

const BANNED_PHRASES = [
  'guaranteed win',
  "can't lose",
  'due to drop',
  'due a win',
  'make money gambling',
  'risk-free',
  'sure thing',
  'beat the casino',
];

function checks(text) {
  const lower = text.toLowerCase();
  const violations = BANNED_PHRASES.filter((p) => lower.includes(p));
  const unresolved = text.match(/\[VERIFY:[^\]]*\]/g) ?? [];
  return { ok: violations.length === 0 && unresolved.length === 0, violations: [...violations, ...unresolved] };
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
}

const prompt = (item) => `You are a reporter on the CasinoJackpots.io news desk covering jackpot wins and prize-pool milestones.

STYLE & COMPLIANCE RULES:
- Write in British English for a UK audience, in a clear, expert, trustworthy tone.
- Never describe gambling as a way to make money. Never use "guaranteed", "can't lose", "due to drop" or similar.
- Never invent facts. Use ONLY the figures provided below. If a required figure is missing, write the placeholder [VERIFY: description] instead.
- Close with a short responsible-gambling paragraph (18+, GamCare/GambleAware).
- Write original prose. Do not imitate existing published articles.

Write a 600-900 word news article from this verified source data ONLY:
Amount: ${item.currency} ${item.amount}; Game: ${item.game}; Casino/operator: ${item.casino}; Date: ${item.date}; Location: ${item.location}; Source notes: ${item.sourceNotes}.
PRIMARY KEYWORD: "${item.primaryKeyword}" — use it naturally in the first 100 words, one heading and the meta title.

Respond with ONLY a JSON object (no markdown fences) exactly matching:
{"headline": string, "subhead": string, "metaTitle": string (max 60 chars), "metaDescription": string (max 155 chars), "excerpt": string, "sections": [{"heading": string or null, "paragraphs": [string]}]}`;

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not set');

  const queue = JSON.parse(readFileSync(QUEUE_PATH, 'utf8'));
  const item = (queue.items ?? []).find((i) => !i.processed);
  if (!item) {
    console.log('No unprocessed items in the news queue — nothing to generate.');
    return;
  }

  console.log(`Generating article for: ${item.game} (${item.currency} ${item.amount})`);

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-5',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt(item) }],
    }),
  });
  const rawBody = await res.text();
  // Always save the raw response — uploaded as a debug artifact on failure.
  writeFileSync(resolve(root, 'debug-response.json'), rawBody);
  if (!res.ok) throw new Error(`Anthropic API error ${res.status}: ${rawBody.slice(0, 500)}`);

  const data = JSON.parse(rawBody);
  // Diagnostics — makes any failure self-explanatory in the Actions log.
  console.log(
    `API response: stop_reason=${data.stop_reason}, blocks=[${(data.content ?? [])
      .map((b) => b.type)
      .join(', ')}], usage=${JSON.stringify(data.usage ?? {})}`,
  );
  if (data.stop_reason === 'max_tokens') throw new Error('Response truncated (max_tokens) — increase the limit');

  // The response may contain multiple content blocks (e.g. thinking blocks
  // on newer models) — take the text block(s) only.
  const text = (data.content ?? [])
    .filter((b) => b.type === 'text' && typeof b.text === 'string')
    .map((b) => b.text)
    .join('\n');

  // Extract the JSON object even if the model wrapped it in prose or fences.
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) {
    throw new Error(`No JSON object found in model response. First 500 chars:\n${text.slice(0, 500)}`);
  }
  let draft;
  try {
    draft = JSON.parse(text.slice(start, end + 1));
  } catch (err) {
    throw new Error(
      `Failed to parse draft JSON (${err.message}). Extracted slice starts:\n${text.slice(start, start + 500)}\n...ends:\n${text.slice(Math.max(start, end - 300), end + 1)}`,
    );
  }

  const flat = JSON.stringify(draft);
  const result = checks(flat);
  if (!result.ok) {
    throw new Error(`Draft failed compliance checks: ${result.violations.join('; ')}`);
  }

  const today = new Date().toISOString().slice(0, 10);
  const article = {
    slug: slugify(draft.headline),
    headline: draft.headline,
    subhead: draft.subhead,
    metaTitle: draft.metaTitle,
    metaDescription: draft.metaDescription,
    excerpt: draft.excerpt,
    publishedAt: today,
    updatedAt: today,
    authorId: 'news-desk',
    relatedSlotSlugs: [],
    relatedCasinoSlugs: [],
    sections: draft.sections.map((s) => ({
      ...(s.heading ? { heading: s.heading } : {}),
      paragraphs: s.paragraphs,
    })),
    jackpotFacts: {
      amount: item.amount,
      currency: item.currency,
      game: item.game,
      date: item.date,
      location: item.location,
    },
  };

  const generated = JSON.parse(readFileSync(OUTPUT_PATH, 'utf8'));
  if (generated.some((a) => a.slug === article.slug)) {
    throw new Error(`Duplicate slug: ${article.slug} already exists in news-generated.json`);
  }
  generated.push(article);
  writeFileSync(OUTPUT_PATH, JSON.stringify(generated, null, 2) + '\n');

  item.processed = true;
  writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2) + '\n');

  console.log(`Article drafted: ${article.slug}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
