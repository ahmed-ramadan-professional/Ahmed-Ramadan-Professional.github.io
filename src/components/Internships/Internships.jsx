import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { internships } from '../../data/internships';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function Internships() {
  return (
    <section id="internships" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Training"
        title="Internships"
        subtitle="Structured, hands-on programs that sharpened my full-stack foundation."
      />

      <div className="grid gap-6">
        {internships.map((item, i) => (
          <motion.div
            key={`${item.org}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
                <GraduationCap size={20} />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {item.org}
                    </h3>
                    <p className="text-sm font-medium text-accent">{item.program}</p>
                  </div>
                  <span className="badge shrink-0 border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                    Internship
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.track}</p>

                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono">{item.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
