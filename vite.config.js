import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import ViteComponents from 'vite-plugin-components';
import copy from 'rollup-plugin-copy';

const config = defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
      '~': `${path.resolve(__dirname, 'node_modules')}`
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
    copy({
      targets: [
        { src: ['src/scss/*', '!**/cheatsheet.scss'], dest: 'dist/scss' }
      ],
      hook: 'writeBundle'
    }),
  ],

  server: {
    port: 9000
  }
})

export default config
