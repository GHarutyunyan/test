import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as path from 'path';

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  
  build: {
    cssCodeSplit: true,
    target: "esnext",
    lib: {
      entry: 'C:\\OpenServer\\domains\\ui-lib-v2\\src\\index.ts',
      name: "GithubPackagesUiLibrary",
      fileName: (format) => `github-packages-ui-library.${format}.js`,
    },
    
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
