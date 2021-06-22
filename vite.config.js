import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import ViteComponents from 'vite-plugin-components';

const config = defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`
    },
    dedupe: ['vue-demi']
  },
  build: {
    minify: true
  },

  plugins: [
    createVuePlugin(),
    ViteComponents({
      customComponentResolvers: [
      ]
    }),
  ],

  server: {
    port: 9000
  }
})

export default config
