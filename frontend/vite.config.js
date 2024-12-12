import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './stats.html', // Generates a stats report in this file
      open: true, // Opens the stats report automatically after the build
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Ensure the output directory is separate from publicDir
    chunkSizeWarningLimit: 500, // Customize the warning limit for chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Example of splitting dependencies into separate chunks
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  publicDir: 'public', // Explicitly set the public directory
});
