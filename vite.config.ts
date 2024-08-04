import {defineConfig} from 'vite'
import viteReact from '@vitejs/plugin-react'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'build',
    target: 'esnext',
    rollupOptions: {
      // react and react-dom are externalized
      external: ['react', 'react-dom'],
      input: {
        index: 'index.html',
        'mf-portal': 'src/sspa-main.tsx',
      },
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        entryFileNames: '[name].js',
        chunkFileNames: '[hash].js',
        format: 'system',
      },
      preserveEntrySignatures: 'strict',
    },
  },
})
