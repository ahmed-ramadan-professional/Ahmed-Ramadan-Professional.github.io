import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import SectionHeading from '../SectionHeading/SectionHeading';
import { StaggerGroup, staggerItem } from '../Reveal/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Technologies"
        subtitle="The stack I reach for — frontend first, full stack deep."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass p-6"
          >
            <h3 className="mb-5 font-display text-lg font-semibold">{group.name}</h3>
            <StaggerGroup className="flex flex-wrap gap-3" stagger={0.05}>
              {group.skills.map((skill) => {
                const { Icon } = skill;
                // '#ffffff' brand marks (Next, Express) would vanish on the
                // light background — let them inherit the theme text color.
                const adaptive = skill.color === '#ffffff';
                return (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/60 px-3.5 py-2.5 text-sm font-medium transition-colors hover:border-accent dark:border-white/10 dark:bg-white/5 dark:hover:border-accent"
                  >
                    <Icon
                      size={20}
                      style={adaptive ? undefined : { color: skill.color }}
                      className={
                        'shrink-0 drop-shadow ' +
                        (adaptive ? 'text-slate-800 dark:text-white' : '')
                      }
                    />
                    <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                  </motion.div>
                );
              })}
            </StaggerGroup>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
