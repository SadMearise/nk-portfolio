import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(),
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        webp: {
          lossless: true,
        },
      }),
    ],
    base: command === "build" ? "/nk-portfolio/" : "/",
    build: {
      sourcemap: true,
    },
  };

  return config;
});
