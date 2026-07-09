import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-8">
      <div className="glass flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.fullName}. Built with React, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 transition-colors hover:text-accent">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-accent">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 transition-colors hover:text-accent">
            <Mail size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-accent hover:text-accent dark:border-white/10"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
