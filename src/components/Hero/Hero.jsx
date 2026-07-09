import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import TypingText from './TypingText';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Avatar */}
        <motion.div variants={item} className="relative mb-8">
          <span className="absolute -inset-1 rounded-full bg-accent-gradient opacity-60 blur-md" />
          <img
            src="/profile.jpg"
            alt={profile.fullName}
            className="relative h-32 w-32 rounded-full border-2 border-white/20 object-cover shadow-glow sm:h-36 sm:w-36"
          />
        </motion.div>

        {/* Location */}
        <motion.div variants={item} className="mb-4">
          <span className="badge">
            <MapPin size={13} /> {profile.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
        >
          Hi, I'm {profile.firstName}{' '}
          <span className="text-gradient">{profile.lastName}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={item}
          className="mt-4 font-display text-2xl font-semibold sm:text-3xl"
        >
          <TypingText phrases={profile.roles} />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          {profile.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => scrollTo('projects')} className="btn-primary">
            View my work <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-ghost">
            Get in touch
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          {[
            { href: profile.socials.github, Icon: Github, label: 'GitHub' },
            { href: profile.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-glow dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
            >
              <Icon size={19} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('stats')}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-current p-1">
          <span className="h-1.5 w-1 rounded-full bg-current" />
        </div>
      </motion.button>
    </section>
  );
}
