import type { Faq } from '@/content/types';
import JsonLd from './JsonLd';
import { faqSchema } from '@/lib/schema';

export default function FaqSection({ faqs, title = 'Frequently asked questions' }: { faqs: Faq[]; title?: string }) {
  if (faqs.length === 0) return null;
  return (
    <section className="mt-10">
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-ink-600 bg-ink-800 p-4 open:border-gold-600/50"
          >
            <summary className="cursor-pointer font-semibold text-slate-100 marker:text-gold-400">
              {faq.question}
            </summary>
            <p className="mt-3 leading-relaxed text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
