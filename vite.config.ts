import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'


// @ts-ignore
import { resolve } from 'path';

// @ts-ignore
const root = resolve(__dirname, 'src');


// https://vite.dev/config/
const viteConfig = defineViteConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root
    }
  },
});

const vitestConfig = defineVitestConfig({  
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.tests']
  },
})

export default mergeConfig(viteConfig, vitestConfig);
