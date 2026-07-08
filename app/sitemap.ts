import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { casinos } from '@/content/casinos';
import { slots } from '@/content/slots';
import { news } from '@/content/news';
import { guides } from '@/content/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: absoluteUrl('/offers/best-casino-offers'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/jackpots'), lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: absoluteUrl('/jackpots/news'), lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: absoluteUrl('/slots'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/games'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: absoluteUrl('/casinos'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/guides'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: absoluteUrl('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: absoluteUrl('/how-we-rank'), lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: absoluteUrl('/responsible-gambling'), lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: absoluteUrl('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: absoluteUrl('/privacy'), lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: absoluteUrl('/terms'), lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];

  const casinoPages = casinos.map((c) => ({
    url: absoluteUrl(`/casinos/${c.slug}`),
    lastModified: new Date(c.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const slotPages = slots.map((s) => ({
    url: absoluteUrl(`/slots/${s.slug}`),
    lastModified: new Date(s.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const newsPages = news.map((n) => ({
    url: absoluteUrl(`/jackpots/news/${n.slug}`),
    lastModified: new Date(n.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const guidePages = guides.map((g) => ({
    url: absoluteUrl(`/guides/${g.slug}`),
    lastModified: new Date(g.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...casinoPages, ...slotPages, ...newsPages, ...guidePages];
}
