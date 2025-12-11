import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chuan-fa-honey-redesign/', // 重要！你的倉庫名稱
  plugins: [react()],
})
```

### 步驟 2：建立 GitHub Actions 設定檔

在你的專案根目錄中建立這個資料夾結構和檔案：
```
你的專案/
├── .github/
│   └── workflows/
│       └── deploy.yml
