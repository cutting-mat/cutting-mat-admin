import { resolve } from "path";
import vue from "@vitejs/plugin-vue2";
import legacy from "@vitejs/plugin-legacy";

export default {
  plugins: [
    vue(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  base:
    process.env.NODE_ENV === "production" // 生产/开发环境构建路径
      ? "/cutting-mat-admin/"
      : "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          ui: ["element-ui"],
        },
      },
    },
  },
};
