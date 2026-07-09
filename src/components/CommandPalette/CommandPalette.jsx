import { useEffect } from 'react';
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Home,
  Sparkles,
  Wrench,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
} from 'lucide-react';
import { navSections } from '../../data/nav';
import { profile } from '../../data/profile';

const sectionIcons = {
  about: Home,
  stats: Sparkles,
  skills: Sparkles,
  experience: Briefcase,
  internships: GraduationCap,
  projects: FolderGit2,
  utilities: Wrench,
  contact: Mail,
};

export default function CommandPalette({ open, setOpen, theme, onToggleTheme }) {
  // Toggle with Cmd/Ctrl+K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setOpen]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLink = (url) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center p-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg"
          >
            <Command
              label="Command palette"
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111726]"
            >
              <Command.Input
                autoFocus
                placeholder="Jump to a section or link…"
                className="w-full border-b border-slate-200 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-slate-400 dark:border-white/10 dark:text-white"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-slate-400">
                  No results.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="px-1 pb-1 text-xs font-medium text-slate-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                >
                  {navSections.map((s) => {
                    const Icon = sectionIcons[s.id] || Home;
                    return (
                      <Item key={s.id} onSelect={() => go(s.id)}>
                        <Icon size={16} /> {s.label}
                      </Item>
                    );
                  })}
                </Command.Group>

                <Command.Group
                  heading="Links"
                  className="px-1 pb-1 pt-2 text-xs font-medium text-slate-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                >
                  <Item onSelect={() => openLink(profile.socials.github)}>
                    <Github size={16} /> GitHub
                  </Item>
                  <Item onSelect={() => openLink(profile.socials.linkedin)}>
                    <Linkedin size={16} /> LinkedIn
                  </Item>
                  <Item onSelect={() => openLink(`mailto:${profile.email}`)}>
                    <Mail size={16} /> Email me
                  </Item>
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="px-1 pb-1 pt-2 text-xs font-medium text-slate-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
                >
                  <Item
                    onSelect={() => {
                      onToggleTheme();
                      setOpen(false);
                    }}
                  >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    Switch to {theme === 'dark' ? 'light' : 'dark'} theme
                  </Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Item({ children, onSelect }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 aria-selected:bg-accent/10 aria-selected:text-accent dark:text-slate-200 dark:aria-selected:bg-white/10 dark:aria-selected:text-white"
    >
      {children}
    </Command.Item>
  );
}
