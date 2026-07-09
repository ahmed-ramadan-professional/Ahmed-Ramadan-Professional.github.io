import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Brief branded loading splash on first paint. Auto-dismisses after ~1s.
export default function Splash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 950);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0b0f1a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex h-20 w-20 items-center justify-center">
              <span className="absolute inset-0 rounded-2xl bg-accent-gradient opacity-30 blur-lg animate-pulse" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-gradient font-display text-3xl font-bold text-white shadow-glow">
                AR
              </span>
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent-gradient"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
