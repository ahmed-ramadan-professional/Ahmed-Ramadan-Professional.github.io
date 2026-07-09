// Auto-collects any image dropped into src/assets/projects/<slug>/.
// Just add files to those folders — no manual listing needed. Vite hashes and
// bundles them; order is filename-sorted, so name them 01.jpg, 02.jpg, … to
// control the sequence.
const modules = import.meta.glob(
  '../assets/projects/*/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true, import: 'default' }
);

// Build { slug: [url, url, …] }
const galleries = {};
for (const path in modules) {
  const match = path.match(/\/projects\/([^/]+)\//);
  if (!match) continue;
  const slug = match[1];
  (galleries[slug] ||= []).push({ path, url: modules[path] });
}
for (const slug in galleries) {
  galleries[slug].sort((a, b) => a.path.localeCompare(b.path));
  galleries[slug] = galleries[slug].map((i) => i.url);
}

export function galleryFor(slug) {
  return galleries[slug] || [];
}
