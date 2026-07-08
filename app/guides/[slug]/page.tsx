import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata, formatDate } from '@/lib/seo';
import { guideArticleSchema } from '@/lib/schema';
import { guides, getGuide } from '@/content/guides';
import { getAuthor } from '@/content/authors';
import Breadcrumbs from '@/components/Breadcrumbs';
import Prose from '@/components/Prose';
import FaqSection from '@/components/FaqSection';
import RgBanner from '@/components/RgBanner';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
    type: 'article',
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt,
  });
}

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const author = getAuthor(guide.authorId);

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={guideArticleSchema(guide)} />
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ]}
      />
      <p className="text-sm font-bold uppercase tracking-widest text-gold-400">Guide</p>
      <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        {guide.title}
      </h1>
      <p className="mt-4 border-b border-ink-700 pb-4 text-sm text-slate-500">
        By {author.name} · Updated <time dateTime={guide.updatedAt}>{formatDate(guide.updatedAt)}</time>
      </p>
      <div className="mt-8">
        <Prose sections={guide.sections} />
      </div>
      <FaqSection faqs={guide.faqs} />
      <RgBanner />
    </article>
  );
}
