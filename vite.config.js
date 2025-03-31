import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tasks': 'http://localhost:3000', // << proxy ทุก path ที่ขึ้นต้นด้วย /tasks ไป backend
    },
  },
})
