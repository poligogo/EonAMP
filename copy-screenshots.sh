#!/bin/bash

# EonAmp 截圖整合腳本
# 此腳本幫助您將模擬器截圖複製並重命名到網站目錄

echo "=== EonAmp 截圖整合工具 ==="
echo ""

# 設定目標目錄
TARGET_DIR="/Users/x0rz/Desktop/Ai_MProject/EVLife/EVlife/website/screenshots"

# 確保目標目錄存在
mkdir -p "$TARGET_DIR"

echo "目標目錄: $TARGET_DIR"
echo ""

# 查找桌面上的模擬器截圖
echo "正在搜尋模擬器截圖..."
SCREENSHOTS=($(find ~/Desktop -name '*Simulator*' -name '*.png' 2>/dev/null))

if [ ${#SCREENSHOTS[@]} -eq 0 ]; then
    echo "❌ 在桌面未找到模擬器截圖"
    echo ""
    echo "請確認:"
    echo "1. 已在模擬器中截圖 (Cmd+S)"
    echo "2. 截圖保存在桌面"
    echo "3. 文件名包含 'Simulator' 字樣"
    echo ""
    echo "您也可以手動將截圖複製到: $TARGET_DIR"
    exit 1
fi

echo "✅ 找到 ${#SCREENSHOTS[@]} 個截圖文件:"
for screenshot in "${SCREENSHOTS[@]}"; do
    echo "  - $(basename "$screenshot")"
done
echo ""

# 詢問用戶如何重命名文件
echo "請為每個截圖選擇對應的頁面類型:"
echo "1) dashboard.png (主頁面)"
echo "2) records.png (記錄頁面)"
echo "3) statistics.png (統計頁面)"
echo "4) settings.png (設定頁面)"
echo "5) skip (跳過此文件)"
echo ""

counter=1
for screenshot in "${SCREENSHOTS[@]}"; do
    echo "文件 $counter/${#SCREENSHOTS[@]}: $(basename "$screenshot")"
    echo -n "請選擇類型 (1-5): "
    read choice
    
    case $choice in
        1)
            cp "$screenshot" "$TARGET_DIR/dashboard.png"
            echo "✅ 已複製為 dashboard.png"
            ;;
        2)
            cp "$screenshot" "$TARGET_DIR/records.png"
            echo "✅ 已複製為 records.png"
            ;;
        3)
            cp "$screenshot" "$TARGET_DIR/statistics.png"
            echo "✅ 已複製為 statistics.png"
            ;;
        4)
            cp "$screenshot" "$TARGET_DIR/settings.png"
            echo "✅ 已複製為 settings.png"
            ;;
        5)
            echo "⏭️  已跳過"
            ;;
        *)
            echo "❌ 無效選擇，已跳過"
            ;;
    esac
    echo ""
    ((counter++))
done

echo "=== 完成 ==="
echo "截圖已複製到: $TARGET_DIR"
echo ""
echo "下一步:"
echo "1. 打開網站預覽"
echo "2. 刷新頁面查看真實截圖"
echo ""
echo "如需查看詳細說明，請參考: README-screenshots.md"