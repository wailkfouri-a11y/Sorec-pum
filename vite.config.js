import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'توقعات الخيل SOREC',
        short_name: 'SOREC App',
        description: 'تطبيق توقعات ونتائج سباقات الخيل',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/3069/3069178.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
