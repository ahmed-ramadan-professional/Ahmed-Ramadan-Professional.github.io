// Google Drive as the live source of truth for project galleries.
// Edit a folder in Drive -> images update on the next page load, no rebuild.
//
// Setup (one time):
//   1. Share each folder: "Anyone with the link" -> Viewer.
//   2. Create a Google API key with the Drive API enabled, restricted to your
//      site's domain (see README / setup notes).
//   3. Put the key in an env var named VITE_GDRIVE_API_KEY (.env locally,
//      GitHub Actions secret for deploy).
//
// The value is the folder ID — the part after /folders/ in the share URL.
export const DRIVE_API_KEY = import.meta.env.VITE_GDRIVE_API_KEY || '';

export const driveFolders = {
  'anchor-elite': '16bcIltRFJ7vwNFL_5o8jmpz-SQ6XRh4d',
  rentopia: '11DJ741YfgV0eZC_CCdDURwlT88wDU6Yl',
  'speed-e-service': '1rQ0uSpqFJohrmbYpTY6kT7ArTZEVk1y7',
  // Add more when you have folders, e.g.:
  // 'smart-community': 'FOLDER_ID',
};

// Renders a Drive file id as a sized image URL (works in <img>, no CORS needed).
export function driveImageUrl(id, width = 1600) {
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}
