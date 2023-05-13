import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  // ホストからアクセスできるように設定する
  // base: '/vue-md-store/',
  server: {
    host: true
  },
  
  plugins: [vue()],
})
