import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 這裡非常重要，這行會修正 404 路徑錯誤
  base: '/chuan-fa-honey-redesign/', 
})
