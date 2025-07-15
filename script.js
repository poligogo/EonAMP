// 等待DOM載入完成
document.addEventListener('DOMContentLoaded', function() {
    // 導航欄功能
    initNavigation();
    
    // 介面展示切換功能
    initScreenshotNavigation();
    
    // 滾動效果
    initScrollEffects();
    
    // 手機導航選單
    initMobileMenu();
});

// 導航欄功能
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // 滾動時改變導航欄樣式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 平滑滾動到對應區域
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 介面展示切換功能
function initScreenshotNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    
    // 創建不同的螢幕內容
    const screenContents = {
        dashboard: createDashboardScreen(),
        records: createRecordsScreen(),
        statistics: createStatisticsScreen(),
        settings: createSettingsScreen()
    };
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // 移除所有活動狀態
            navButtons.forEach(btn => btn.classList.remove('active'));
            screenshotItems.forEach(item => item.classList.remove('active'));
            
            // 添加活動狀態
            this.classList.add('active');
            
            // 更新螢幕內容
            updateScreenContent(target, screenContents[target]);
            
            // 顯示對應的截圖項目
            setTimeout(() => {
                screenshotItems[0].classList.add('active');
            }, 100);
        });
    });
}

// 創建儀表板螢幕
function createDashboardScreen() {
    return {
        title: '儀表板',
        description: '一目了然的總覽介面，快速掌握您的電動車使用狀況、充電統計和效率表現。',
        content: `
            <div class="screen-header">
                <h3>EonAmp</h3>
                <div class="user-greeting">您好，EonAmp使用者</div>
            </div>
            <div class="metrics-grid">
                <div class="metric-card">
                    <i class="fas fa-route"></i>
                    <div class="metric-value">1,234</div>
                    <div class="metric-label">總里程 (km)</div>
                </div>
                <div class="metric-card">
                    <i class="fas fa-leaf"></i>
                    <div class="metric-value">5.2</div>
                    <div class="metric-label">平均效率 (km/kWh)</div>
                </div>
            </div>
            <div class="chart-placeholder">
                <div class="chart-title">每日充電量</div>
                <div class="chart-bars">
                    <div class="bar" style="height: 60%"></div>
                    <div class="bar" style="height: 80%"></div>
                    <div class="bar" style="height: 45%"></div>
                    <div class="bar" style="height: 90%"></div>
                    <div class="bar" style="height: 70%"></div>
                </div>
            </div>
        `
    };
}

// 創建記錄管理螢幕
function createRecordsScreen() {
    return {
        title: '記錄管理',
        description: '詳細管理您的充電記錄、保養歷史和駕駛日誌，所有資料一目了然。',
        content: `
            <div class="status-bar-ios">
                <div class="time">9:41</div>
                <div class="status-icons">
                    <div class="signal">●●●</div>
                    <div class="wifi">📶</div>
                    <div class="battery">🔋</div>
                </div>
            </div>
            <div class="app-header">
                <img src="EonAmp.png" alt="EonAmp" class="app-icon">
                <h3>充電記錄</h3>
                <div class="filter-tabs">
                    <button class="filter-tab active">全部</button>
                    <button class="filter-tab">本月</button>
                    <button class="filter-tab">本週</button>
                </div>
            </div>
            <div class="records-list">
                <div class="record-item">
                    <div class="record-icon">
                        <i class="fas fa-charging-station"></i>
                    </div>
                    <div class="record-details">
                        <div class="record-title">台北101充電站</div>
                        <div class="record-time">2024-01-15 14:30</div>
                        <div class="record-stats">
                            <span class="energy">45.2 kWh</span>
                            <span class="cost">NT$320</span>
                            <span class="duration">1小時25分</span>
                        </div>
                    </div>
                    <div class="record-status completed">已完成</div>
                </div>
                <div class="record-item">
                    <div class="record-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="record-details">
                        <div class="record-title">家用充電樁</div>
                        <div class="record-time">2024-01-14 22:00</div>
                        <div class="record-stats">
                            <span class="energy">38.7 kWh</span>
                            <span class="cost">NT$180</span>
                            <span class="duration">6小時30分</span>
                        </div>
                    </div>
                    <div class="record-status completed">已完成</div>
                </div>
                <div class="record-item">
                    <div class="record-icon">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="record-details">
                        <div class="record-title">快充站 - 信義區</div>
                        <div class="record-time">2024-01-13 16:45</div>
                        <div class="record-stats">
                            <span class="energy">28.5 kWh</span>
                            <span class="cost">NT$285</span>
                            <span class="duration">35分鐘</span>
                        </div>
                    </div>
                    <div class="record-status completed">已完成</div>
                </div>
            </div>
            <div class="tab-bar">
                <div class="tab-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>儀表板</span>
                </div>
                <div class="tab-item active">
                    <i class="fas fa-list"></i>
                    <span>記錄</span>
                </div>
                <div class="tab-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>統計</span>
                </div>
                <div class="tab-item">
                    <i class="fas fa-cog"></i>
                    <span>設定</span>
                </div>
            </div>
        `
    };
}

// 創建統計分析螢幕
function createStatisticsScreen() {
    return {
        title: '統計分析',
        description: '深入分析您的駕駛習慣、充電效率和成本統計，幫助您優化電動車使用體驗。',
        content: `
            <div class="status-bar-ios">
                <div class="time">9:41</div>
                <div class="status-icons">
                    <div class="signal">●●●</div>
                    <div class="wifi">📶</div>
                    <div class="battery">🔋</div>
                </div>
            </div>
            <div class="app-header">
                <img src="EonAmp.png" alt="EonAmp" class="app-icon">
                <h3>統計分析</h3>
                <div class="user-greeting">深入了解您的用車習慣</div>
            </div>
            <div class="stats-overview">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-calendar-month"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value">1,234 km</div>
                        <div class="stat-label">本月里程</div>
                    </div>
                    <div class="stat-change positive">+12%</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value">5.2 km/kWh</div>
                        <div class="stat-label">平均效率</div>
                    </div>
                    <div class="stat-change positive">+8%</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value">NT$1,280</div>
                        <div class="stat-label">本月費用</div>
                    </div>
                    <div class="stat-change negative">-5%</div>
                </div>
            </div>
            <div class="chart-section">
                <div class="chart-title">月度里程趨勢</div>
                <div class="trend-chart">
                    <svg viewBox="0 0 300 120" class="trend-svg">
                        <polyline points="20,100 60,80 100,60 140,40 180,50 220,30 260,35" 
                                 fill="none" stroke="#007AFF" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="20" cy="100" r="4" fill="#007AFF"/>
                        <circle cx="60" cy="80" r="4" fill="#007AFF"/>
                        <circle cx="100" cy="60" r="4" fill="#007AFF"/>
                        <circle cx="140" cy="40" r="4" fill="#007AFF"/>
                        <circle cx="180" cy="50" r="4" fill="#007AFF"/>
                        <circle cx="220" cy="30" r="4" fill="#007AFF"/>
                        <circle cx="260" cy="35" r="4" fill="#007AFF"/>
                    </svg>
                    <div class="chart-labels">
                        <span>7月</span><span>8月</span><span>9月</span><span>10月</span><span>11月</span><span>12月</span><span>1月</span>
                    </div>
                </div>
            </div>
            <div class="efficiency-breakdown">
                <div class="breakdown-title">效率分析</div>
                <div class="efficiency-items">
                    <div class="efficiency-item">
                        <span class="efficiency-label">市區駕駛</span>
                        <div class="efficiency-bar">
                            <div class="efficiency-fill" style="width: 75%"></div>
                        </div>
                        <span class="efficiency-value">4.8 km/kWh</span>
                    </div>
                    <div class="efficiency-item">
                        <span class="efficiency-label">高速公路</span>
                        <div class="efficiency-bar">
                            <div class="efficiency-fill" style="width: 85%"></div>
                        </div>
                        <span class="efficiency-value">5.6 km/kWh</span>
                    </div>
                    <div class="efficiency-item">
                        <span class="efficiency-label">綜合</span>
                        <div class="efficiency-bar">
                            <div class="efficiency-fill" style="width: 80%"></div>
                        </div>
                        <span class="efficiency-value">5.2 km/kWh</span>
                    </div>
                </div>
            </div>
            <div class="tab-bar">
                <div class="tab-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>儀表板</span>
                </div>
                <div class="tab-item">
                    <i class="fas fa-list"></i>
                    <span>記錄</span>
                </div>
                <div class="tab-item active">
                    <i class="fas fa-chart-bar"></i>
                    <span>統計</span>
                </div>
                <div class="tab-item">
                    <i class="fas fa-cog"></i>
                    <span>設定</span>
                </div>
            </div>
        `
    };
}

// 創建設定螢幕
function createSettingsScreen() {
    return {
        title: '設定',
        description: '個人化您的應用程式設定，管理帳戶資訊、通知偏好和數據備份選項。',
        content: `
            <div class="status-bar-ios">
                <div class="time">9:41</div>
                <div class="status-icons">
                    <div class="signal">●●●</div>
                    <div class="wifi">📶</div>
                    <div class="battery">🔋</div>
                </div>
            </div>
            <div class="app-header">
                <img src="EonAmp.png" alt="EonAmp" class="app-icon">
                <h3>設定</h3>
                <div class="user-greeting">個人化您的EonAmp體驗</div>
            </div>
            <div class="settings-content">
                <div class="user-profile">
                    <div class="profile-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="profile-info">
                        <div class="profile-name">EonAmp 使用者</div>
                        <div class="profile-email">user@eonamp.com</div>
                    </div>
                    <div class="profile-edit">
                        <i class="fas fa-edit"></i>
                    </div>
                </div>
                <div class="settings-groups">
                    <div class="settings-group">
                        <div class="group-title">帳戶設定</div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">個人資料</div>
                                <div class="setting-subtitle">管理您的個人資訊</div>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">通知設定</div>
                                <div class="setting-subtitle">充電完成、保養提醒</div>
                            </div>
                            <div class="setting-toggle">
                                <div class="toggle-switch active"></div>
                            </div>
                        </div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">隱私設定</div>
                                <div class="setting-subtitle">資料使用與隱私</div>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="settings-group">
                        <div class="group-title">車輛設定</div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-car"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">車輛資訊</div>
                                <div class="setting-subtitle">Tesla Model 3</div>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-charging-station"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">充電偏好</div>
                                <div class="setting-subtitle">充電限制與排程</div>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="settings-group">
                        <div class="group-title">應用程式</div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-palette"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">主題設定</div>
                                <div class="setting-subtitle">淺色模式</div>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="setting-item">
                            <div class="setting-icon">
                                <i class="fas fa-info-circle"></i>
                            </div>
                            <div class="setting-info">
                                <div class="setting-title">關於 EonAmp</div>
                                <div class="setting-subtitle">版本 1.0.0</div>
                            </div>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-bar">
                <div class="tab-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>儀表板</span>
                </div>
                <div class="tab-item">
                    <i class="fas fa-list"></i>
                    <span>記錄</span>
                </div>
                <div class="tab-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>統計</span>
                </div>
                <div class="tab-item active">
                    <i class="fas fa-cog"></i>
                    <span>設定</span>
                </div>
            </div>
        `
    };
}

// 更新螢幕內容
function updateScreenContent(target, screenData) {
    // 圖片映射
    const screenMappings = {
        'dashboard': 'firstindex.png',
        'records': 'powerSum.png',
        'statistics': 'index2.png',
        'settings': 'settings.png'
    };
    
    const screenContent = document.querySelector('.screen-content');
    const screenshotInfo = document.querySelector('.screenshot-info');
    
    // 添加淡出效果
    screenContent.style.opacity = '0';
    screenshotInfo.style.opacity = '0';
    
    setTimeout(() => {
        // 使用圖片而不是HTML內容
        const filename = screenMappings[target];
        if (filename) {
            screenContent.innerHTML = `
                <img src="./screenshots/${filename}" 
                     alt="EonAmp ${target}" 
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 34px; background: #000;">
            `;
        }
        
        screenshotInfo.innerHTML = `
            <h3>${screenData.title}</h3>
            <p>${screenData.description}</p>
        `;
        
        // 添加對應的CSS類別
        screenContent.className = `screen-content ${target}-screen`;
        
        // 添加淡入效果
        screenContent.style.opacity = '1';
        screenshotInfo.style.opacity = '1';
    }, 200);
}

// 滾動效果
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 觀察需要動畫的元素
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 手機導航選單
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 點擊導航連結時關閉選單
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// 添加額外的CSS樣式（通過JavaScript動態添加）
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .records-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
        }
        
        .record-item {
            display: flex;
            align-items: center;
            background: white;
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .record-icon {
            width: 40px;
            height: 40px;
            background: #007AFF;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-right: 15px;
        }
        
        .record-info {
            flex: 1;
        }
        
        .record-title {
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 4px;
        }
        
        .record-details {
            font-size: 12px;
            color: #64748b;
            margin-bottom: 2px;
        }
        
        .record-time {
            font-size: 11px;
            color: #94a3b8;
        }
        
        .stats-overview {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .stat-item {
            background: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .stat-icon {
            width: 30px;
            height: 30px;
            background: #007AFF;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin: 0 auto 10px;
        }
        
        .stat-value {
            font-size: 18px;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 11px;
            color: #64748b;
        }
        
        .efficiency-chart {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            position: relative;
            height: 120px;
        }
        
        .trend-line {
            position: relative;
            height: 80px;
            margin-top: 20px;
        }
        
        .trend-point {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #007AFF;
            border-radius: 50%;
            transform: translate(-50%, 50%);
        }
        
        .settings-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 20px;
        }
        
        .setting-item {
            display: flex;
            align-items: center;
            background: white;
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .setting-icon {
            width: 35px;
            height: 35px;
            background: #007AFF;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-right: 15px;
        }
        
        .setting-info {
            flex: 1;
        }
        
        .setting-title {
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 2px;
            font-size: 14px;
        }
        
        .setting-subtitle {
            font-size: 11px;
            color: #64748b;
        }
        
        .setting-arrow {
            color: #94a3b8;
        }
        
        .setting-toggle {
            width: 40px;
            height: 20px;
        }
        
        .toggle-switch {
            width: 100%;
            height: 100%;
            background: #e2e8f0;
            border-radius: 10px;
            position: relative;
            transition: background 0.3s ease;
        }
        
        .toggle-switch::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background: white;
            border-radius: 50%;
            top: 2px;
            left: 2px;
            transition: transform 0.3s ease;
        }
        
        .toggle-switch.active {
            background: #007AFF;
        }
        
        .toggle-switch.active::after {
            transform: translateX(20px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: white;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                padding: 20px 0;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            
            .hamburger.active span:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// 初始化動態樣式
addDynamicStyles();

// 平滑滾動polyfill（為舊瀏覽器提供支援）
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}