import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.SITE_ORIGIN,
  base: process.env.SITE_BASE || '/',
  vite: { plugins: [tailwindcss()] },
});
