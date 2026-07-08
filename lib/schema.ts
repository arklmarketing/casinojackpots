import { SITE, absoluteUrl } from './site';
import type { Casino, Faq, GuideArticle, JackpotNewsArticle, SlotGame } from '@/content/types';
import { getAuthor } from '@/content/authors';

/** JSON-LD builders. Every builder returns a plain object ready for <JsonLd />. */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    logo: absoluteUrl('/logo.svg'),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-GB',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function casinoReviewSchema(casino: Casino) {
  const author = getAuthor(casino.authorId);
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: casino.name,
      url: absoluteUrl(`/casinos/${casino.slug}`),
    },
    reviewRating: { '@type': 'Rating', ratingValue: casino.rating, bestRating: 5, worstRating: 0 },
    author: { '@type': 'Organization', name: author.name },
    publisher: { '@id': `${SITE.url}/#organization` },
    datePublished: casino.lastUpdated,
    reviewBody: casino.intro,
  };
}

export function slotReviewSchema(slot: SlotGame) {
  const author = getAuthor(slot.authorId);
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Game',
      name: slot.name,
      gamePlatform: 'Online',
      author: { '@type': 'Organization', name: slot.provider },
    },
    reviewRating: { '@type': 'Rating', ratingValue: slot.rating, bestRating: 5, worstRating: 0 },
    author: { '@type': 'Organization', name: author.name },
    publisher: { '@id': `${SITE.url}/#organization` },
    datePublished: slot.lastUpdated,
    reviewBody: slot.intro,
  };
}

export function newsArticleSchema(article: JackpotNewsArticle) {
  const author = getAuthor(article.authorId);
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.headline,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { '@type': 'Organization', name: author.name },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: absoluteUrl(`/jackpots/news/${article.slug}`),
    inLanguage: 'en-GB',
  };
}

export function guideArticleSchema(guide: GuideArticle) {
  const author = getAuthor(guide.authorId);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: { '@type': 'Organization', name: author.name },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
    inLanguage: 'en-GB',
  };
}

/** ItemList of offers for the Best Casino Offers page. */
export function offerListSchema(
  items: { name: string; url: string; description: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Offer',
        name: item.name,
        url: item.url,
        description: item.description,
      },
    })),
  };
}
