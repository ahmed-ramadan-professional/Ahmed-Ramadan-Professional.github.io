import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User GitHub Pages site (Ahmed-Ramadan-Professional.github.io) served from root.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
});
