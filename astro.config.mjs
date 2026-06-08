import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// For gh-pages, set `site` to your GitHub Pages URL.
// User repo (username.github.io): site = "https://username.github.io"
// Project repo:                  site = "https://username.github.io/repo-name"
// Build outputs to `dist/` — deploys via GitHub Actions.
export default defineConfig({
  site: "https://username.github.io",
  outDir: "dist",
  integrations: [mdx()],
  // trailingSlash: "always"  // uncomment if you get 404s on direct navigation
});
