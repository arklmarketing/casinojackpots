import type { Author } from './types';

export const authors: Author[] = [
  {
    id: 'editorial-team',
    name: 'CasinoJackpots Editorial Team',
    role: 'Casino & Slots Analysts',
    bio: 'Our editorial team researches jackpot slots, tracks progressive prize pools and tests UK-licensed casinos against a published 25-point checklist. Every page is reviewed before publication and re-checked on a rolling schedule.',
  },
  {
    id: 'news-desk',
    name: 'CasinoJackpots News Desk',
    role: 'Jackpot News Reporters',
    bio: 'The news desk covers record jackpot wins, prize pool milestones and industry developments, sourcing figures from provider announcements and public records.',
  },
];

export function getAuthor(id: string): Author {
  return authors.find((a) => a.id === id) ?? authors[0];
}
