export const SITE = {
  name: 'CasinoJackpots',
  domain: 'casinojackpots.io',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://casinojackpots.io',
  tagline: 'Jackpot news, slot reviews and the best UK casino offers',
  description:
    'CasinoJackpots.io tracks the biggest casino jackpots, reviews the top jackpot slots and compares the best UK casino offers — with honest, expert analysis and responsible gambling at the core.',
  locale: 'en_GB',
  twitter: '@casinojackpots',
  email: 'editorial@casinojackpots.io',
} as const;

export const NAV_LINKS = [
  { href: '/jackpots', label: 'Jackpots' },
  { href: '/jackpots/news', label: 'Jackpot News' },
  { href: '/slots', label: 'Slots' },
  { href: '/games', label: 'Casino Games' },
  { href: '/offers/best-uk-casino-offers', label: 'Best Offers' },
  { href: '/bonuses', label: 'Bonuses' },
  { href: '/guides', label: 'Guides' },
] as const;

export const RG_LINKS = [
  { href: 'https://www.gambleaware.org', label: 'GambleAware' },
  { href: 'https://www.gamcare.org.uk', label: 'GamCare' },
  { href: 'https://www.gamstop.co.uk', label: 'GAMSTOP' },
  { href: 'https://www.gamblersanonymous.org.uk', label: 'Gamblers Anonymous UK' },
] as const;

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
