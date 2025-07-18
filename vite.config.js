import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    historyApiFallback: true, // 🟡 ensures React Router works in dev
  },
  preview: {
    port: 4173,
    historyApiFallback: true, // 🟢 ensures routes work with `npm run preview`
  },
  build: {
    outDir: 'dist',
  },
});
