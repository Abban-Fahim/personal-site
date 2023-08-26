import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import mdPlugin from "vite-plugin-markdown"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), mdPlugin.plugin({ mode: ["html"] })],
    optimizeDeps: { exclude: ["svelte-navigator"] },
});
