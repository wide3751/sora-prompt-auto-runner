# 🎬 Sora Prompt Auto Runner

A Chrome extension designed specifically for Sora video generation platforms, capable of automatically batch-submitting prompts to help you easily complete large-scale video generation tasks.

> **Language Versions**: **English** | [繁體中文](README.md) | [简体中文](README_CN.md)

## ✨ Key Features

- 🚀 **Batch Automation**: Support submitting multiple prompts at once without manual input one by one
- 🎯 **Precise Targeting**: Use XPath to precisely locate page elements with strong compatibility
- 📝 **Multi-format Support**: Support both string and JSON object prompt formats
- 🔄 **Smart Waiting**: Automatically detect page responses and wait for the previous prompt to complete before continuing
- 📊 **Detailed Logging**: Optional detailed log output for easy debugging and execution monitoring
- 🎨 **Modern Interface**: Beautiful user interface with simple and intuitive operation
- ⚙️ **Configurable**: Support custom XPath to adapt to different website layouts

## 🛠️ Installation

### Method 1: Install from Source (Recommended)

1. **Download Source Code**
   ```bash
   git clone https://github.com/wide3751/sora-prompt-auto-runner.git
   cd sora-prompt-auto-runner
   ```

2. **Load Extension in Chrome**
   - Open Chrome browser
   - Visit `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the project folder

3. **Confirm Successful Installation**
   - Extension icon will appear in Chrome toolbar
   - Click the icon to open the control panel

### Method 2: Direct Download

1. Go to the [Releases](https://github.com/wide3751/sora-prompt-auto-runner/releases) page
2. Download the latest version `.zip` file
3. Extract and follow steps 2-3 of Method 1 for installation

## 📖 Usage Guide

### Basic Usage Steps

1. **Open Target Website**
   - Navigate to Sora or other video generation platforms

2. **Prepare Prompts**
   - Prepare your prompt JSON array, for example:
   ```json
   [
     {
       "scene": "A peaceful Japanese garden with falling cherry blossoms",
       "shot": {
         "type": "wide shot",
         "camera_movement": "slow pan",
         "duration": "5 seconds"
       },
       "style": "cinematic, soft lighting"
     },
     {
       "scene": "Modern cityscape at night with neon lights",
       "shot": {
         "type": "drone shot",
         "camera_movement": "rising up",
         "duration": "8 seconds"
       },
       "style": "cyberpunk, vibrant colors"
     },
     "Simple text prompt example"
   ]
   ```

3. **Configure Extension**
   - Click the extension icon in Chrome toolbar
   - Paste your prompts into the text box
   - Or click "✨ Insert Example" to see sample format

4. **Start Execution**
   - Click the "🚀 Start Execution" button
   - Extension will automatically submit each prompt in sequence
   - View detailed logs in browser console (if enabled)

5. **Stop Execution**
   - Click "⏹️ Stop Execution" button anytime to terminate the task

### Advanced Configuration

Click "🔧 Advanced Settings" to expand advanced options:

- **TEXTAREA XPath**: XPath selector for the input field
- **SUBMIT BUTTON XPath**: XPath selector for the submit button

> 💡 **Tip**: In most cases, you don't need to modify these settings. Default values work with mainstream Sora platforms.

### How to Get XPath

If the default XPath doesn't work for your website:

1. Right-click on the input field on the target website
2. Select "Inspect Element"
3. In Developer Tools, right-click on the corresponding HTML element
4. Select "Copy" → "Copy XPath"
5. Paste the obtained XPath into the extension configuration

## 🔧 Supported Prompt Formats

### Format 1: String Array
```json
[
  "A beautiful sunset scene",
  "City night view with busy traffic",
  "Stream flowing through the forest"
]
```

### Format 2: Object Array
```json
[
  {
    "scene": "Scene description",
    "shot": {
      "type": "Shot type",
      "movement": "Camera movement",
      "duration": "Duration"
    },
    "style": "Style description"
  }
]
```

### Format 3: Mixed Array
```json
[
  "Simple text description",
  {
    "scene": "Complex scene object",
    "parameters": {...}
  },
  "Another simple description"
]
```

## 🐛 Troubleshooting

### Common Issues

**Q: Extension cannot find input field or submit button**
- A: Check if the page is fully loaded, or try updating XPath selectors

**Q: Prompts are not submitted correctly**
- A: Ensure JSON format is correct and check browser console for error messages

**Q: Extension gets stuck during execution**
- A: Click stop button, then restart, or refresh the page and try again

**Q: Prompt format error**
- A: Use "Insert Example" feature to view correct format examples

### Debugging Tips

1. **Enable Detailed Logging**: Check "📊 Show detailed logs in Console"
2. **Check Console**: Press F12 to open Developer Tools and view Console tab
3. **Step-by-step Testing**: Test with a small number of prompts first, then batch process after confirming it works

## 🤝 Contributing

Contributions are welcome!

### Development Environment Setup

1. Fork this project
2. Clone to local development environment
3. Make modifications and test
4. Submit Pull Request

### File Structure

```
sora-prompt-auto-runner/
├── manifest.json       # Chrome extension configuration
├── popup.html         # Extension popup interface
├── popup.js          # Main functionality logic
└── README.md         # Project documentation
```

## 📝 Changelog

### v1.2.0 (2025-09-25)
- 📖 Added Simplified Chinese README
- � Added multi-language version links
- ✨ Improved documentation accessibility

### v1.1.0 (2025-09-25)
- � Fix manifest.json icons issue and add English README
- ✨ Improved extension compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Thanks to all developers who contributed code and suggestions to the project
- Special thanks to the Sora platform for providing powerful tools for creators

## 💝 Support the Project

If this project helps you, you can support us in the following ways:

### ⭐ Free Support
- **Give a Star**: Click the ⭐ button in the top right corner
- **Share the Project**: Recommend to friends who need it
- **Provide Feedback**: Report bugs or suggest improvements
- **Contribute Code**: Submit Pull Requests to help improve the project

**☕ Buy Me a Coffee:**

If this project helps you, you can buy me a coffee to support development!

[![PayPal](https://img.shields.io/badge/PayPal-Buy_me_a_coffee-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/wide3751)

*Every cup of coffee encourages the developer and keeps the project updated!* ☕

## 📞 Support & Feedback

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/wide3751/sora-prompt-auto-runner/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/wide3751/sora-prompt-auto-runner/discussions)

---

⭐ **If this project helps you, please give us a star!**

[![GitHub stars](https://img.shields.io/github/stars/wide3751/sora-prompt-auto-runner.svg?style=social&label=Star)](https://github.com/wide3751/sora-prompt-auto-runner)
[![GitHub forks](https://img.shields.io/github/forks/wide3751/sora-prompt-auto-runner.svg?style=social&label=Fork)](https://github.com/wide3751/sora-prompt-auto-runner/fork)

☕ **Consider buying me a coffee to support continued project development**