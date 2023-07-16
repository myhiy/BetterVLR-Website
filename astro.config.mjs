import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel/serverless";
const site = "https://bettervlr.com";

// https://astro.build/config
export default defineConfig({
    site,
    vite: {
        build: {
            sourcemap: true,
        },
    },
    markdown: {
        shikiConfig: {
            theme: "css-variables",
        },
    },
    integrations: [
        mdx(),
        sitemap({
            customPages: [site + "/discord", site + "/github"],
        }),
        svelte(),
    ],
    output: "server",
    //adapter: cloudflare(),
    adapter: vercel(),
});
