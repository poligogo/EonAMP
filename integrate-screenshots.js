// 截圖整合腳本 - 簡化版本

class ScreenshotIntegrator {
    constructor() {
        // 使用實際應用程式截圖的映射
        this.screenMappings = {
            'dashboard': 'dashboard.png',      // 儀表板使用實際截圖
            'records': 'records.png',          // 記錄管理使用實際截圖
            'statistics': 'statistics.png',    // 統計分析使用實際截圖
            'settings': 'settings_new.png',    // 設定使用實際截圖
            'add_record': 'add_record.png'     // 新增記錄使用實際截圖
        };
    }

    // 初始化
    init() {
        console.log('初始化截圖展示功能');
        this.setupNavigation();
    }

    // 設置導航按鈕功能
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget.dataset.target;
                const filename = this.screenMappings[target];
                
                if (filename) {
                    const mainPhoneScreen = document.getElementById('main-phone-screen');
                    if (mainPhoneScreen) {
                        console.log(`切換到 ${target} 頁面，載入 ${filename}`);
                        mainPhoneScreen.innerHTML = `
                            <img src="./screenshots/${filename}" 
                                 alt="EonAmp ${target}" 
                                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 34px; background: #000;">
                        `;
                    }
                }
                
                // 更新按鈕狀態
                navButtons.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });
    }
}

// 當頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', () => {
    const integrator = new ScreenshotIntegrator();
    integrator.init();
});

// 導出供其他腳本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScreenshotIntegrator;
}