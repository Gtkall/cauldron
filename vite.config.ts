import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  base: '/cauldron/',
  build: {
    outDir: 'docs'
  }
})
