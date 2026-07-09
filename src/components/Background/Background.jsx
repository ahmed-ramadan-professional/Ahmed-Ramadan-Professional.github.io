// Fixed decorative background: animated gradient blobs + subtle grid.
// Pointer-events none so it never blocks interaction.
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base wash */}
      <div className="absolute inset-0 bg-white dark:bg-[#0b0f1a]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          color: '#64748b',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-indigo-500/20 dark:bg-indigo-600/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full bg-cyan-400/15 dark:bg-cyan-500/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-500/15 dark:bg-violet-600/20 blur-3xl animate-blob [animation-delay:8s]" />
    </div>
  );
}
