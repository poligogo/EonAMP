# 模擬器截圖整合指南

## 步驟 1: 獲取模擬器截圖

1. 在 Xcode 中打開 EonAmp 專案
2. 運行模擬器 (選擇 iPhone 15 Pro 或類似設備)
3. 在模擬器中截圖:
   - 使用快捷鍵 `Cmd + S`
   - 或者 Device > Screenshot

## 步驟 2: 複製截圖到網站目錄

### 方法 1: 使用命令行
```bash
# 查找桌面上的模擬器截圖
find ~/Desktop -name '*Simulator*' -name '*.png' 2>/dev/null

# 複製截圖到網站目錄
cp ~/Desktop/*Simulator*.png /Users/x0rz/Desktop/Ai_MProject/EVLife/EVlife/website/screenshots/
```

### 方法 2: 手動拖拽
1. 打開 Finder
2. 找到模擬器截圖 (通常在桌面或照片應用中)
3. 將截圖拖拽到 `website/screenshots/` 目錄

## 步驟 3: 重命名截圖文件

為了讓網站正確識別截圖，請將文件重命名為:
- `dashboard.png` - 主頁面截圖
- `records.png` - 記錄頁面截圖
- `statistics.png` - 統計頁面截圖
- `settings.png` - 設定頁面截圖

## 步驟 4: 刷新網站

1. 打開網站預覽
2. 刷新頁面 (F5 或 Cmd+R)
3. 截圖將自動替換模擬的介面展示

## 故障排除

### 截圖未顯示
- 確認文件名正確
- 確認文件格式為 PNG
- 檢查瀏覽器控制台是否有錯誤訊息

### 截圖位置
模擬器截圖通常保存在:
- 桌面 (`~/Desktop/`)
- 照片應用程式
- 模擬器的 Device > Photos 中

## 自動化腳本

網站已包含 `integrate-screenshots.js` 腳本，會自動:
1. 檢測 screenshots 目錄中的文件
2. 將真實截圖替換模擬介面
3. 保持響應式設計

## 注意事項

- 截圖解析度建議: 1170x2532 (iPhone 15 Pro)
- 文件大小建議: < 500KB
- 支援格式: PNG, JPG, JPEG