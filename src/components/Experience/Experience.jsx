import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../../data/experience';
import SectionHeading from '../SectionHeading/SectionHeading';

const typeStyles = {
  Frontend: 'text-cyan-500 border-cyan-500/30 bg-cyan-500/10',
  'Full Stack': 'text-violet-500 border-violet-500/30 bg-violet-500/10',
};

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Journey"
        title="Work Experience"
        subtitle="From Laravel systems to React products — two years shipping for real clients."
      />

      <div className="relative ml-2 border-l border-slate-200 pl-8 dark:border-white/10">
        {experience.map((job, i) => (
          <motion.div
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-8 last:mb-0"
          >
            {/* Node */}
            <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-accent-gradient shadow-glow">
              <Briefcase size={10} className="text-white" />
            </span>

            <div className="glass p-5 transition-transform hover:-translate-y-0.5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug">{job.role}</h3>
                  <p className="text-sm font-medium text-accent">{job.company}</p>
                </div>
                <span className={`badge shrink-0 ${typeStyles[job.type] || ''}`}>
                  {job.type}
                </span>
              </div>

              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono">{job.period}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {job.location}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
