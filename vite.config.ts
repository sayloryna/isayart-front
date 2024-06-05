/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
        " **/src/router/mainRouter.tsx",
      ],
      reporter: "lcov",
    },
  },
});
