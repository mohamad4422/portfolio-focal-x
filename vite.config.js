import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    assetsDir: "css",
    rollupOptions: {
      input: {
        index: "src/index.html",
      },
    },
  },
});
