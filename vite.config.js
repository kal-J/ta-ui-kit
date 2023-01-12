// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import vueJsx from "@vitejs/plugin-vue-jsx";


export default defineConfig({
  plugins: [vue(), vueJsx(), pluginRewriteAll()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      
      entry: {
        'ta-ui-kit': resolve(__dirname, 'src/lib/index.js'),
        'ta-ui-kit-vue': resolve(__dirname, 'src/lib/vue/index.js'),
        //'ta-ui-kit-react': resolve(__dirname, 'src/lib/react/index.js'),
        'ta-ui-kit-theme': resolve(__dirname, 'src/lib/theme/index.js'),
        //'style.css': resolve(__dirname, 'src/index.css'),
      },
      formats: ["esm", "cjs"],
      
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          vue: 'Vue',
        },
      },
    },
  },
})
