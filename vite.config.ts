/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { webfontDownload } from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Rosario:ital,wght@0,300..700;1,300..700&display=swap",
    ]),
  ],
  test: {
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/**/main.tsx",
        "src/setupTests.ts",
        "**/src/components/App/App.tsx",
        "**/src/routes/routes.tsx",
        "**/src/router/mainRouter.tsx",
        "**/src/router/lazyImports.ts",
      ],
      reporter: "lcov",
    },
  },
});
