import { useEffect, useState } from 'react';
import { DRIVE_API_KEY, driveImageUrl } from '../data/drive';

// Lists images in a public Drive folder at runtime via the Drive API.
// Cached per-folder for the session so we don't refetch on re-render/scroll.
const cache = new Map();

export function useDriveGallery(folderId) {
  const [images, setImages] = useState(() => cache.get(folderId) || []);

  useEffect(() => {
    if (!folderId) return;
    if (!DRIVE_API_KEY) {
      console.warn(
        '[gallery] VITE_GDRIVE_API_KEY is empty. Stop the dev server (Ctrl+C) and run `npm run dev` again so it reads .env.'
      );
      return;
    }
    if (cache.has(folderId)) {
      setImages(cache.get(folderId));
      return;
    }

    const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`;
    const params = new URLSearchParams({
      q,
      key: DRIVE_API_KEY,
      fields: 'files(id,name)',
      pageSize: '100',
    });
    const url = `https://www.googleapis.com/drive/v3/files?${params}`;

    // Natural sort so "2.png" comes before "10.png" regardless of zero-padding.
    const byName = (a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });

    let active = true;
    fetch(url)
      .then(async (r) => {
        if (r.ok) return r.json();
        const body = await r.text();
        throw new Error(`Drive API ${r.status}: ${body}`);
      })
      .then((data) => {
        if (!active) return;
        const urls = (data.files || []).sort(byName).map((f) => driveImageUrl(f.id));
        cache.set(folderId, urls);
        setImages(urls);
      })
      .catch((err) => {
        // Surface the reason (403 = referer/port not in the key's allow-list;
        // check the port `npm run dev` printed is added to the API key).
        console.error('[gallery] Drive fetch failed:', err.message || err);
      });

    return () => {
      active = false;
    };
  }, [folderId]);

  return images;
}
