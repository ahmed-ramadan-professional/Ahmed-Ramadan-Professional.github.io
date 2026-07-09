import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun, Command, Menu, X } from 'lucide-react';
import { navSections } from '../../data/nav';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { cn } from '../../lib/cn';

const sectionIds = navSections.map((s) => s.id);

export default function Navbar({ theme, onToggleTheme, onOpenPalette }) {
  const active = useScrollSpy(sectionIds);
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-3 px-4">
        <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 backdrop-blur-md shadow-card dark:border-white/10 dark:bg-white/5">
          {/* Brand */}
          <button
            onClick={() => handleNav('about')}
            className="flex items-center gap-2 rounded-xl px-2 py-1 font-display text-sm font-bold"
            aria-label="Back to top"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-white shadow-glow">
              AR
            </span>
            <span className="hidden sm:block">Ahmed Ramadan</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navSections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNav(s.id)}
                  className={cn(
                    'relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                    active === s.id
                      ? 'text-accent dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  )}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-accent/10 dark:bg-white/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenPalette}
              className="hidden items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-500 transition-colors hover:border-accent hover:text-accent sm:flex dark:border-white/10 dark:text-slate-400 dark:hover:border-accent dark:hover:text-white"
              aria-label="Open command palette"
            >
              <Command size={13} />
              <span className="font-mono">K</span>
            </button>

            <button
              onClick={onToggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-accent dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Toggle color theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl px-4 lg:hidden"
          >
            <ul className="grid gap-1 rounded-2xl border border-slate-200/70 bg-white/90 p-2 backdrop-blur-md shadow-card dark:border-white/10 dark:bg-[#0b0f1a]/90">
              {navSections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav(s.id)}
                    className={cn(
                      'w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                      active === s.id
                        ? 'bg-accent/10 text-accent dark:bg-white/10 dark:text-white'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                    )}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
