/**
 * Content model — mirrors headless-CMS schemas (Sanity/Contentful) one-to-one
 * so the file-based content layer can be swapped for a CMS client in /cms
 * without touching page templates.
 */

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface Faq {
  question: string;
  answer: string;
}

/** A simple portable rich-text block: an optional H2 plus paragraphs. */
export interface ContentSection {
  heading?: string;
  paragraphs: string[];
}

export interface Casino {
  slug: string;
  name: string;
  /** Demo brand flag — replace with live affiliate partner data before launch. */
  isExample: boolean;
  rating: number; // 0–5
  licence: string;
  established: number;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  keyFacts: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  sections: ContentSection[];
  verdict: string;
  faqs: Faq[];
  affiliateUrl: string; // placeholder tracking link
  lastUpdated: string; // ISO date
  authorId: string;
}

export interface CasinoOffer {
  id: string;
  casinoSlug: string;
  bonusHeadline: string;
  bonusType: 'welcome' | 'free-spins' | 'no-wagering' | 'cashback';
  wagering: string;
  minDeposit: string;
  expiry: string;
  keyTerms: string;
  isExample: boolean;
  affiliateUrl: string;
  lastUpdated: string;
}

export interface SlotGame {
  slug: string;
  name: string;
  provider: string;
  jackpotType: 'progressive' | 'fixed' | 'daily';
  rtp: string; // published figure — verify with provider before launch
  volatility: 'low' | 'medium' | 'high';
  maxWin: string;
  reels: string;
  paylines: string;
  rating: number;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  sections: ContentSection[];
  verdict: string;
  faqs: Faq[];
  lastUpdated: string;
  authorId: string;
}

export interface JackpotNewsArticle {
  slug: string;
  headline: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  authorId: string;
  relatedSlotSlugs: string[];
  relatedCasinoSlugs: string[];
  sections: ContentSection[];
  /** Structured facts for NewsArticle schema + jackpot data table */
  jackpotFacts?: {
    amount: string;
    currency: string;
    game: string;
    date: string;
    location: string;
  };
}

export interface GuideArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  intent: 'informational' | 'commercial';
  publishedAt: string;
  updatedAt: string;
  authorId: string;
  sections: ContentSection[];
  faqs: Faq[];
}
