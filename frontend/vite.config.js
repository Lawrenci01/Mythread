<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
>>>>>>> c1828078672a495e4b0467140bfa7c54cece3190

export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    ...(process.env.NODE_ENV === 'production'
      ? [visualizer({ filename: './stats.html', open: true })]
      : []),
=======
    visualizer({
      filename: './stats.html', // Generates a stats report in this file
      open: true, // Opens the stats report automatically after the build
    }),
>>>>>>> c1828078672a495e4b0467140bfa7c54cece3190
  ],
  server: {
    port: 3000,
    proxy: {
<<<<<<< HEAD
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:4000',
=======
      "/api": {
        target: "http://localhost:4000",
>>>>>>> c1828078672a495e4b0467140bfa7c54cece3190
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
<<<<<<< HEAD
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
=======
    outDir: 'dist', // Ensure the output directory is separate from publicDir
    chunkSizeWarningLimit: 500, // Customize the warning limit for chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Example of splitting dependencies into separate chunks
          vendor: ['react', 'react-dom'],
>>>>>>> c1828078672a495e4b0467140bfa7c54cece3190
        },
      },
    },
  },
<<<<<<< HEAD
  publicDir: 'public',
=======
  publicDir: 'public', // Explicitly set the public directory
>>>>>>> c1828078672a495e4b0467140bfa7c54cece3190
});
