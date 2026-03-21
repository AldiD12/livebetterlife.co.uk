import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    open: true
  },
  ssr: {
    // These packages use browser APIs and should not be bundled for SSR
    noExternal: [
      'react-helmet',
      'lucide-react',
      'react-icons',
      'swiper',
    ],
  },
});
