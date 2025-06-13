import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }, 
    },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate node_modules packages into individual chunks
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    port: 3001,
  },
  base: '/',
})
