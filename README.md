# 🎬 Sora Prompt Auto Runner

一個專為 Sora 影片生成平台設計的 Chrome 擴充功能，能夠自動批量提交提示詞（prompts），讓您輕鬆完成大批量的影片生成任務。

## ✨ 功能特點

- 🚀 **批量自動化**: 支援一次性提交多個提示詞，無需手動逐個輸入
- 🎯 **精確定位**: 使用 XPath 精確定位頁面元素，相容性強
- 📝 **多格式支援**: 支援字串和 JSON 物件兩種提示詞格式
- 🔄 **智慧等待**: 自動檢測頁面回應，等待上一個提示詞處理完成後再繼續
- 📊 **詳細記錄**: 可選的詳細記錄輸出，方便偵錯和監控執行過程
- 🎨 **現代介面**: 美觀的使用者介面，操作簡單直觀
- ⚙️ **可設定**: 支援自訂 XPath，適應不同網站佈局

## 🛠️ 安裝方法

### 方法一：從原始碼安裝（推薦）

1. **下載原始碼**
   ```bash
   git clone https://github.com/wide3751/sora-prompt-auto-runner.git
   cd sora-prompt-auto-runner
   ```

2. **在 Chrome 中載入擴充功能**
   - 開啟 Chrome 瀏覽器
   - 造訪 `chrome://extensions/`
   - 開啟右上角的「開發者模式」
   - 點擊「載入未封裝項目」
   - 選擇專案資料夾

3. **確認安裝成功**
   - 擴充功能圖示會出現在 Chrome 工具列中
   - 點擊圖示開啟控制面板

### 方法二：直接下載

1. 點擊右側的 [Releases](https://github.com/wide3751/sora-prompt-auto-runner/releases) 頁面
2. 下載最新版本的 `.zip` 檔案
3. 解壓縮後按照方法一的步驟 2-3 進行安裝

## 📖 使用指南

### 基本使用步驟

1. **開啟目標網站**
   - 導航到 Sora 或其他影片生成平台

2. **準備提示詞**
   - 準備您的提示詞 JSON 陣列，例如：
   ```json
   [
     {
       "scene": "一個寧靜的日式庭院，櫻花飄落",
       "shot": {
         "type": "wide shot",
         "camera_movement": "slow pan",
         "duration": "5 seconds"
       },
       "style": "cinematic, soft lighting"
     },
     {
       "scene": "現代都市夜景，霓虹燈閃爍",
       "shot": {
         "type": "drone shot",
         "camera_movement": "rising up",
         "duration": "8 seconds"
       },
       "style": "cyberpunk, vibrant colors"
     },
     "簡單的文字提示詞範例"
   ]
   ```

3. **設定擴充功能**
   - 點擊 Chrome 工具列中的擴充功能圖示
   - 將您的提示詞貼到文字框中
   - 或點擊「✨ 插入範例」查看示例格式

4. **開始執行**
   - 點擊「🚀 開始執行」按鈕
   - 擴充功能將自動依次提交每個提示詞
   - 在瀏覽器主控台中查看詳細記錄（如果啟用）

5. **停止執行**
   - 隨時點擊「⏹️ 停止執行」按鈕終止任務

### 進階設定

點擊「🔧 進階設定」展開進階選項：

- **TEXTAREA XPath**: 輸入框的 XPath 選擇器
- **SUBMIT BUTTON XPath**: 提交按鈕的 XPath 選擇器

> 💡 **提示**: 大多數情況下不需要修改這些設定，預設值適用於主流的 Sora 平台

### 取得 XPath 的方法

如果預設的 XPath 不適用於您使用的網站：

1. 在目標網站上右鍵點擊輸入框
2. 選擇「檢查元素」
3. 在開發者工具中右鍵點擊對應的 HTML 元素
4. 選擇 "Copy" → "Copy XPath"
5. 將取得的 XPath 貼到擴充功能設定中

## 🔧 支援的提示詞格式

### 格式一：字串陣列
```json
[
  "一個美麗的日落場景",
  "城市夜景，車水馬龍",
  "森林中的小溪流水"
]
```

### 格式二：物件陣列
```json
[
  {
    "scene": "場景描述",
    "shot": {
      "type": "鏡頭類型",
      "movement": "鏡頭運動",
      "duration": "持續時間"
    },
    "style": "風格描述"
  }
]
```

### 格式三：混合陣列
```json
[
  "簡單文字描述",
  {
    "scene": "複雜場景物件",
    "parameters": {...}
  },
  "另一個簡單描述"
]
```

## 🐛 故障排除

### 常見問題

**Q: 擴充功能無法找到輸入框或提交按鈕**
- A: 檢查頁面是否完全載入，或嘗試更新 XPath 選擇器

**Q: 提示詞沒有被正確提交**
- A: 確認 JSON 格式正確，並檢查瀏覽器主控台中的錯誤訊息

**Q: 擴充功能執行過程中卡住**
- A: 點擊停止按鈕，然後重新開始，或重新整理頁面後重試

**Q: 提示詞格式錯誤**
- A: 使用「插入範例」功能查看正確的格式示例

### 偵錯技巧

1. **啟用詳細記錄**：勾選「📊 顯示詳細記錄到頁面 Console」
2. **查看主控台**：按 F12 開啟開發者工具，查看 Console 標籤頁
3. **逐步測試**：先用少量提示詞測試，確認正常後再批量處理

## 🤝 貢獻指南

歡迎您為專案做出貢獻！

### 開發環境設定

1. Fork 本專案
2. 複製到本地開發環境
3. 進行修改和測試
4. 提交 Pull Request

### 檔案結構

```
sora-prompt-auto-runner/
├── manifest.json       # Chrome 擴充功能設定檔
├── popup.html         # 擴充功能彈出視窗介面
├── popup.js          # 主要功能邏輯
└── README.md         # 專案說明文件
```

## 📝 更新日誌

### v1.1.0 (2025-09-25)
- 🔧 修復 manifest.json 圖示問題
- 📖 新增英文版 README
- ✨ 改善擴充功能相容性

### v1.0.0 (2025-09-25)
- ✨ 初始版本發布
- 🎨 現代化的使用者介面設計
- 🚀 基本的批量自動化功能
- 📊 詳細記錄支援
- ⚙️ 可設定的 XPath 選擇器
- 🔄 智慧等待和錯誤處理

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 🙏 致謝

- 感謝所有為專案貢獻程式碼和建議的開發者
- 特別感謝 Sora 平台為創意工作者提供的強大工具

## 💝 支援專案

如果這個專案對您有幫助，您可以通過以下方式支援我們：

### ⭐ 免費支援
- **給個 Star**: 點擊右上角的 ⭐ 按鈕
- **分享專案**: 推薦給其他有需要的朋友
- **提供回饋**: 回報 Bug 或提出改進建議
- **貢獻程式碼**: 提交 Pull Request 幫助改進專案

**☕ 請我喝杯咖啡：**

如果這個專案對您有幫助，您可以請我喝杯咖啡來支援開發！

[![PayPal](https://img.shields.io/badge/PayPal-Buy_me_a_coffee-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/wide3751)

*每一杯咖啡都是對開發者的鼓勵，讓專案持續更新！* ☕

## 📞 支援與回饋

- 🐛 **問題回報**: [GitHub Issues](https://github.com/wide3751/sora-prompt-auto-runner/issues)
- 💡 **功能建議**: [GitHub Discussions](https://github.com/wide3751/sora-prompt-auto-runner/discussions)

---

⭐ **如果這個專案對您有幫助，請給我們一個星標！**

[![GitHub stars](https://img.shields.io/github/stars/wide3751/sora-prompt-auto-runner.svg?style=social&label=Star)](https://github.com/wide3751/sora-prompt-auto-runner)
[![GitHub forks](https://img.shields.io/github/forks/wide3751/sora-prompt-auto-runner.svg?style=social&label=Fork)](https://github.com/wide3751/sora-prompt-auto-runner/fork)

☕ **考慮請我喝杯咖啡支援專案持續發展**