import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow access from Gitpod
    allowedHosts: [
      // wildcard lets Gitpod preview URLs work
      '.gitpod.io'
    ],
  },
})
