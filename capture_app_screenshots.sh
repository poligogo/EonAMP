#!/bin/bash

# 自動截取EonAmp應用程式各個功能頁面的腳本
# 模擬器UUID
SIMULATOR_ID="9C313F51-9704-4EA8-9855-1A71A781444E"
APP_BUNDLE_ID="com.x0rz.EonAmp"
SCREENSHOTS_DIR="/Users/x0rz/Desktop/Ai_MProject/EVLife/EVlife/website/screenshots"

echo "開始截取EonAmp應用程式截圖..."

# 確保應用程式正在運行
echo "啟動應用程式..."
xcrun simctl launch $SIMULATOR_ID $APP_BUNDLE_ID
sleep 3

# 截取首頁 (DashboardView)
echo "截取首頁..."
xcrun simctl io $SIMULATOR_ID screenshot "$SCREENSHOTS_DIR/dashboard.png"
sleep 2

# 點擊記錄標籤 (索引1)
echo "切換到記錄頁面..."
# 使用座標點擊記錄標籤 (大約在底部導航欄的第二個位置)
xcrun simctl io $SIMULATOR_ID tap 120 850
sleep 2
xcrun simctl io $SIMULATOR_ID screenshot "$SCREENSHOTS_DIR/records.png"
sleep 2

# 點擊新增標籤 (索引2)
echo "切換到新增頁面..."
xcrun simctl io $SIMULATOR_ID tap 200 850
sleep 2
xcrun simctl io $SIMULATOR_ID screenshot "$SCREENSHOTS_DIR/add_record.png"
sleep 2

# 點擊統計標籤 (索引3)
echo "切換到統計頁面..."
xcrun simctl io $SIMULATOR_ID tap 280 850
sleep 2
xcrun simctl io $SIMULATOR_ID screenshot "$SCREENSHOTS_DIR/statistics.png"
sleep 2

# 點擊設定標籤 (索引4)
echo "切換到設定頁面..."
xcrun simctl io $SIMULATOR_ID tap 360 850
sleep 2
xcrun simctl io $SIMULATOR_ID screenshot "$SCREENSHOTS_DIR/settings_new.png"
sleep 2

# 回到首頁
echo "回到首頁..."
xcrun simctl io $SIMULATOR_ID tap 40 850
sleep 2

echo "截圖完成！所有截圖已保存到 $SCREENSHOTS_DIR"
echo "截取的頁面包括："
echo "- dashboard.png (首頁)"
echo "- records.png (記錄頁面)"
echo "- add_record.png (新增記錄頁面)"
echo "- statistics.png (統計頁面)"
echo "- settings_new.png (設定頁面)"