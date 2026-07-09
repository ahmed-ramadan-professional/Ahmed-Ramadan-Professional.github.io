import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, PlayCircle, Images, Play } from 'lucide-react';
import { galleryFor } from '../../data/galleries';
import { driveFolders } from '../../data/drive';
import { useDriveGallery } from '../../hooks/useDriveGallery';
import Lightbox from '../Lightbox/Lightbox';

const categoryColor = {
  Frontend: 'text-cyan-400',
  'Full Stack': 'text-violet-400',
  Systems: 'text-amber-400',
};

export default function ProjectCard({ project, featured }) {
  const videoRef = useRef(null);
  // Drive is the live source of truth; bundled images are a fallback.
  const driveImages = useDriveGallery(project.slug ? driveFolders[project.slug] : null);
  const bundled = project.slug ? galleryFor(project.slug) : [];
  const images = driveImages.length ? driveImages : bundled;

  // Unified media list: video first (if any), then all gallery images.
  const media = useMemo(() => {
    const list = [];
    if (project.media) list.push({ type: 'video', src: project.media });
    images.forEach((src) => list.push({ type: 'image', src }));
    return list;
  }, [project.media, images]);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const cover = media[0];
  const hasVideo = cover?.type === 'video';

  const onEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`glass group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg ${
        featured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Accent glow on hover */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-accent-gradient opacity-0 transition-opacity group-hover:opacity-100" />

      {media.length > 0 && (
        <div className="mb-4">
          {/* Cover — click opens the fullscreen viewer at item 0 */}
          <button
            onClick={() => setLightboxIndex(0)}
            className="relative block aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40"
            aria-label={`Open ${project.title} ${hasVideo ? 'demo' : 'screenshots'}`}
          >
            {hasVideo ? (
              <video
                ref={videoRef}
                src={cover.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={cover.src}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Play affordance for video */}
            {hasVideo && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:opacity-0">
                <PlayCircle className="text-white/90" size={44} />
              </span>
            )}

            {/* Count / type badge */}
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-lg bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur">
              {hasVideo ? (
                <>
                  <Play size={13} /> Demo{images.length > 0 ? ` + ${images.length}` : ''}
                </>
              ) : (
                <>
                  <Images size={13} /> {images.length} photo{images.length > 1 ? 's' : ''}
                </>
              )}
            </span>
          </button>

          {/* Thumbnail strip for the rest */}
          {media.length > 1 && (
            <div className="thin-scrollbar mt-2 flex gap-2 overflow-x-auto pb-1">
              {media.slice(1, 5).map((item, i) => (
                <button
                  key={item.src}
                  onClick={() => setLightboxIndex(i + 1)}
                  className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/40"
                  aria-label={`Open media ${i + 2}`}
                >
                  {item.type === 'video' ? (
                    <video src={item.src} muted preload="metadata" className="h-full w-full object-cover" />
                  ) : (
                    <img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  )}
                  {i === 3 && media.length > 5 && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-xs font-semibold text-white">
                      +{media.length - 5}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`font-mono text-xs font-medium ${categoryColor[project.category] || 'text-accent'}`}>
            {project.category}
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-slate-200/70 pt-4 dark:border-white/10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            <ExternalLink size={15} /> Live site
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Github size={15} /> Details
          </a>
        )}
      </div>

      {media.length > 0 && (
        <Lightbox
          items={media}
          index={lightboxIndex}
          setIndex={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </motion.article>
  );
}
