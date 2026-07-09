import { motion } from 'framer-motion';
import { Github, Terminal } from 'lucide-react';
import { utilities } from '../../data/projects';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function Utilities() {
  return (
    <section id="utilities" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Open Source"
        title="Utilities & Tools"
        subtitle="Small developer tools I built and open-sourced."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {utilities.map((u, i) => (
          <motion.a
            key={u.title}
            href={u.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass group flex items-start gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
              <Terminal size={20} />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold leading-snug">{u.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{u.description}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <Github size={15} /> View repository
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
