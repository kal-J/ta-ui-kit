// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      //entry: resolve(__dirname, 'src/lib/index.js'),
      entry: {
        'ta-ui-kit': resolve(__dirname, 'src/lib/index.js'),
        'ta-ui-kit-vue': resolve(__dirname, 'src/lib/vue/index.js'),
        'ta-ui-kit-react': resolve(__dirname, 'src/lib/react/index.js'),
      },
      formats: ["esm", "cjs"],
      //name: 'ta-ui-kit',
      // the proper extensions will be added
      //fileName: 'ta-ui-kit',
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
