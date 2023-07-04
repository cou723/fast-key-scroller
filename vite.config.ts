import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
    manifest_version: 3,
    description: "This extension makes scrolling with the arrow keys smoother and faster",
    name: "Fast Key Scroller",
    version: "1.0.0",
    icons: {
        16: "icons/icon16.png",
        24: "icons/icon24.png",
        32: "icons/icon32.png",
        128: "icons/icon128.png",
    },
    action: {
        default_icon: "icons/icon128.png",
        default_title: "Fast Key Scroller",
    },
    content_scripts: [
        {
            matches: ["<all_urls>"],
            js: ["src/content-script/scroller.ts"],
            run_at: "document_start",
        },
    ],

});

export default defineConfig({
    plugins: [crx({ manifest })],
});
