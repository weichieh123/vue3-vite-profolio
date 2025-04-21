import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // https://你的帳號.github.io/你的-repo-name/
  // base 前後都有 /，而且大小寫要和 GitHub repo 名稱完全一致
  base: '/vue3-vite-profolio/', 
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`
      }
    }
  }
})
