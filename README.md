# EonAmp 靜態介紹網站

這是 EonAmp 電動車生活管理助手的[官方介紹網站](https://poligogo.github.io/EonAMP/)，用於展示應用程式的功能特色和使用介面。

## 網站特色

### 🎨 現代化設計
- 響應式設計，支援桌面和行動裝置
- 漸層背景和流暢動畫效果
- 符合現代 UI/UX 設計趨勢

### 📱 互動式介面展示
- 動態手機模型展示應用程式介面
- 四個主要功能頁面的互動切換：
  - 儀表板：總覽統計和圖表
  - 記錄管理：充電記錄和保養歷史
  - 統計分析：效率趨勢和成本分析
  - 設定：個人化設定選項

### 🚀 功能亮點
- 平滑滾動導航
- 視差滾動效果
- 載入動畫
- 手機版漢堡選單
- 互動式功能卡片

## 文件結構

```
website/
├── index.html          # 主要 HTML 文件
├── styles.css          # CSS 樣式文件
├── script.js           # JavaScript 互動功能
└── README.md           # 說明文件
```

## 網站區塊

### 1. 導航欄 (Navigation)
- 固定在頁面頂部
- 包含 Logo 和主要導航連結
- 響應式漢堡選單（行動版）

### 2. 首頁區域 (Hero Section)
- 吸引人的標題和描述
- 下載按鈕和了解更多按鈕
- 動態手機模型展示

### 3. 功能介紹 (Features)
- 六大核心功能卡片：
  - 充電記錄管理
  - 智能統計分析
  - 保養提醒
  - 充電站管理
  - 成就系統
  - 數據備份

### 4. 介面展示 (Screenshots)
- 互動式手機介面展示
- 四個主要功能頁面切換
- 詳細功能說明

### 5. 下載區域 (Download)
- App Store 下載連結
- 系統需求和特色說明

### 6. 頁腳 (Footer)
- 公司資訊和連結
- 法律聲明

## 技術特色

### CSS 特色
- CSS Grid 和 Flexbox 佈局
- CSS 變數和自訂屬性
- 漸層背景和陰影效果
- 關鍵幀動畫
- 媒體查詢響應式設計

### JavaScript 功能
- 模組化程式碼結構
- 事件監聽器管理
- 動態內容切換
- 滾動效果和視差
- 交叉觀察器 API

### 響應式設計
- 桌面版（1200px+）
- 平板版（768px - 1199px）
- 手機版（< 768px）
- 小螢幕手機（< 480px）

## 使用方法

### 本地開發
1. 直接在瀏覽器中開啟 `index.html`
2. 或使用本地伺服器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx serve .
   
   # 使用 PHP
   php -S localhost:8000
   ```

### 部署
網站為純靜態文件，可部署到任何靜態網站託管服務：
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## 自訂修改

### 修改顏色主題
在 `styles.css` 中修改 CSS 變數：
```css
:root {
    --primary-color: #007AFF;
    --secondary-color: #5856D6;
    --text-color: #1a202c;
    --background-color: #f8fafc;
}
```

### 添加新的介面展示
在 `script.js` 中的 `screenContents` 物件添加新內容：
```javascript
const screenContents = {
    // 現有內容...
    newScreen: createNewScreen()
};
```

### 修改動畫效果
在 `styles.css` 中調整動畫參數：
```css
@keyframes fadeInUp {
    /* 自訂動畫效果 */
}
```

## 效能優化

- 使用 CDN 載入字體和圖示
- CSS 和 JavaScript 檔案壓縮
- 圖片最佳化（建議使用 WebP 格式）
- 延遲載入非關鍵資源

## 授權

本專案採用 MIT 授權條款。

## 聯絡資訊

如有任何問題或建議，請聯絡開發團隊。
