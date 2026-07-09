import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/projects';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectCard from './ProjectCard';
import { cn } from '../../lib/cn';

const filters = ['All', 'Frontend', 'Full Stack', 'Systems'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        subtitle="Production sites and systems I've designed, built and shipped."
      />

      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              filter === f
                ? 'text-white'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-10 rounded-full bg-accent-gradient shadow-glow"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div key={p.title} layout exit={{ opacity: 0, scale: 0.95 }}>
              <ProjectCard project={p} featured={p.featured} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
