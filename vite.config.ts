import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use the GitHub Pages repository path as the base for production builds.
// This ensures assets are served from https://<user>.github.io/sara-portfolio/
const repoBase = '/sara-portfolio/'

export default defineConfig({
  base: repoBase,
  plugins: [react()],
  // Vite exposes variables prefixed with VITE_ via import.meta.env automatically.
})
