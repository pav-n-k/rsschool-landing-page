import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@styles": resolve(__dirname, "src/scss"),
    },
  },
  base: "/rsschool-landing-page/",
  build: {
    sourcemap: true,
    outDir: "dist",
    assetsDir: "assets",
  },
});
