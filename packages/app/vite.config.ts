import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import autoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vanillaExtractPlugin(),
    autoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      dts: 'auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ]
});
