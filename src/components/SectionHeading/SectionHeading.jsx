import Reveal from '../Reveal/Reveal';

// Consistent eyebrow + title + optional subtitle for every section.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <Reveal className={`mb-10 flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
    </Reveal>
  );
}
