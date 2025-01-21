import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import * as path from 'path'

export default defineConfig({
  plugins: [react(), // Enable Brotli compression
  viteCompression({ algorithm: "brotliCompress" }), 
  ],
  resolve: {
    alias: {
      '@contexts': path.resolve(__dirname, 'src/contexts'),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },

    sourcemap: true
  },
});