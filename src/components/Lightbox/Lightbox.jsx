import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Fullscreen viewer for a mixed list of media items.
// items: [{ type: 'image' | 'video', src }]
export default function Lightbox({ items, index, setIndex, onClose }) {
  const open = index !== null && index >= 0;

  const go = useCallback(
    (dir) => {
      setIndex((i) => {
        if (i === null) return i;
        return (i + dir + items.length) % items.length;
      });
    },
    [items.length, setIndex]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, go, onClose]);

  const current = open ? items[index] : null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {items.length > 1 && (
            <>
              <NavButton side="left" onClick={(e) => { e.stopPropagation(); go(-1); }}>
                <ChevronLeft size={24} />
              </NavButton>
              <NavButton side="right" onClick={(e) => { e.stopPropagation(); go(1); }}>
                <ChevronRight size={24} />
              </NavButton>
            </>
          )}

          {current?.type === 'video' ? (
            <motion.video
              key={index}
              src={current.src}
              controls
              autoPlay
              playsInline
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          ) : (
            <motion.img
              key={index}
              src={current?.src}
              alt={`Media ${index + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
          )}

          {items.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
              {index + 1} / {items.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function NavButton({ side, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous' : 'Next'}
      className={`absolute ${side === 'left' ? 'left-4' : 'right-4'} top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20`}
    >
      {children}
    </button>
  );
}
