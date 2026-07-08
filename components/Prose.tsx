import type { ContentSection } from '@/content/types';

/** Renders the portable section/paragraph content model as clean article HTML. */
export default function Prose({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <section key={i}>
          {section.heading && (
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">{section.heading}</h2>
          )}
          <div className="space-y-4">
            {section.paragraphs.map((p, j) => (
              <p key={j} className="leading-relaxed text-slate-300">
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
