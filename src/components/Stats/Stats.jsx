import { StaggerGroup, staggerItem } from '../Reveal/Reveal';
import { motion } from 'framer-motion';
import { stats } from '../../data/profile';
import Counter from './Counter';

export default function Stats() {
  return (
    <section id="stats" className="px-4 py-12">
      <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={staggerItem}
            className="glass flex flex-col items-center justify-center p-6 text-center transition-transform hover:-translate-y-1"
          >
            <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {s.label}
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}
