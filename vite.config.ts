import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCommonjs(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'React PWA App',
        short_name: 'ReactPWA',
        description: 'A Progressive Web App built with Vite and React',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Configure caching routes here
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-api-url\.com\//, // Cache API routes
            handler: 'NetworkFirst', // Use network first strategy for API calls
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // Cache for 24 hours
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/i, // Cache image files
            handler: 'CacheFirst', // Use cache first strategy for images
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 20,
              },
            },
          },
          {
            urlPattern: /\.(?:js|css)$/i, // Cache JS and CSS files
            handler: 'StaleWhileRevalidate', // Use stale-while-revalidate strategy for JS and CSS
            options: {
              cacheName: 'static-assets',
              expiration: {
                maxEntries: 50,
              },
            },
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['@cornerstonejs/dicom-image-loader'],
    include: ['dicom-parser'],
  },
  worker: {
    format: 'es',
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'), // optional, nice to have
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
});
