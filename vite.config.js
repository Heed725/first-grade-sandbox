import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes built asset paths relative, so the site works
// whether it's served from "/", "/repo-name/", or any subfolder —
// including GitHub Pages project sites.
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { port: 3000, host: true },
});
