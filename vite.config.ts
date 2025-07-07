import path from "node:path";
import Components from "unplugin-vue-components/vite";
import MotionResolver from "motion-v/resolver";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        Components({
            dts: true,
            resolvers: [MotionResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
