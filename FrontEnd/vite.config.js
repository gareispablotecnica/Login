import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Desarrollo local sin `vercel dev`: reenvía /api al servidor Express
    proxy: { '/api': 'http://localhost:3000' },
  },
})
