# 🎬 Sora Prompt Auto Runner

一个专为 Sora 视频生成平台设计的 Chrome 扩展，能够自动批量提交提示词（prompts），让您轻松完成大批量的视频生成任务。

![Extension Preview](https://via.placeholder.com/800x500/667eea/ffffff?text=Sora+Prompt+Auto+Runner)

## ✨ 功能特点

- 🚀 **批量自动化**: 支持一次性提交多个提示词，无需手动逐个输入
- 🎯 **精确定位**: 使用 XPath 精确定位页面元素，兼容性强
- 📝 **多格式支持**: 支持字符串和 JSON 对象两种提示词格式
- 🔄 **智能等待**: 自动检测页面响应，等待上一个提示词处理完成后再继续
- 📊 **详细日志**: 可选的详细日志输出，方便调试和监控执行过程
- 🎨 **现代界面**: 美观的用户界面，操作简单直观
- ⚙️ **可配置**: 支持自定义 XPath，适应不同网站布局

## 🛠️ 安装方法

### 方法一：从源码安装（推荐）

1. **下载源码**
   ```bash
   git clone https://github.com/wide3751/sora-prompt-auto-runner.git
   cd sora-prompt-auto-runner
   ```

2. **在 Chrome 中加载扩展**
   - 打开 Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 打开右上角的"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择项目文件夹

3. **确认安装成功**
   - 扩展图标会出现在 Chrome 工具栏中
   - 点击图标打开控制面板

### 方法二：直接下载

1. 点击右侧的 [Releases](https://github.com/wide3751/sora-prompt-auto-runner/releases) 页面
2. 下载最新版本的 `.zip` 文件
3. 解压后按照方法一的步骤 2-3 进行安装

## 📖 使用指南

### 基本使用步骤

1. **打开目标网站**
   - 导航到 Sora 或其他视频生成平台

2. **准备提示词**
   - 准备您的提示词 JSON 数组，例如：
   ```json
   [
     {
       "scene": "一个宁静的日式庭院，樱花飘落",
       "shot": {
         "type": "wide shot",
         "camera_movement": "slow pan",
         "duration": "5 seconds"
       },
       "style": "cinematic, soft lighting"
     },
     {
       "scene": "现代都市夜景，霓虹灯闪烂",
       "shot": {
         "type": "drone shot",
         "camera_movement": "rising up",
         "duration": "8 seconds"
       },
       "style": "cyberpunk, vibrant colors"
     },
     "简单的文字提示词范例"
   ]
   ```

3. **配置扩展**
   - 点击 Chrome 工具栏中的扩展图标
   - 粘贴您的提示词到文本框中
   - 或点击"✨ 插入范例"查看示例格式

4. **开始执行**
   - 点击"🚀 开始执行"按钮
   - 扩展将自动依次提交每个提示词
   - 在浏览器控制台中查看详细日志（如果启用）

5. **停止执行**
   - 随时点击"⏹️ 停止执行"按钮终止任务

### 高级配置

点击"🔧 进阶设定"展开高级选项：

- **TEXTAREA XPath**: 输入框的 XPath 选择器
- **SUBMIT BUTTON XPath**: 提交按钮的 XPath 选择器

> 💡 **提示**: 大多数情况下不需要修改这些设置，默认值适用于主流的 Sora 平台

### 获取 XPath 的方法

如果默认的 XPath 不适用于您使用的网站：

1. 在目标网站上右键点击输入框
2. 选择"检查元素"
3. 在开发者工具中右键点击对应的 HTML 元素
4. 选择 "Copy" → "Copy XPath"
5. 将获取的 XPath 粘贴到扩展配置中

## 🔧 支持的提示词格式

### 格式一：字符串数组
```json
[
  "一个美丽的日落场景",
  "城市夜景，车水马龙",
  "森林中的小溪流水"
]
```

### 格式二：对象数组
```json
[
  {
    "scene": "场景描述",
    "shot": {
      "type": "镜头类型",
      "movement": "镜头运动",
      "duration": "持续时间"
    },
    "style": "风格描述"
  }
]
```

### 格式三：混合数组
```json
[
  "简单文字描述",
  {
    "scene": "复杂场景对象",
    "parameters": {...}
  },
  "另一个简单描述"
]
```

## 🐛 故障排除

### 常见问题

**Q: 扩展无法找到输入框或提交按钮**
- A: 检查页面是否完全加载，或尝试更新 XPath 选择器

**Q: 提示词没有被正确提交**
- A: 确认 JSON 格式正确，并检查浏览器控制台中的错误信息

**Q: 扩展执行过程中卡住**
- A: 点击停止按钮，然后重新开始，或刷新页面后重试

**Q: 提示词格式错误**
- A: 使用"插入范例"功能查看正确的格式示例

### 调试技巧

1. **启用详细日志**：勾选"📊 显示详细日志到页面 Console"
2. **查看控制台**：按 F12 打开开发者工具，查看 Console 标签页
3. **逐步测试**：先用少量提示词测试，确认正常后再批量处理

## 🤝 贡献指南

欢迎您为项目做出贡献！

### 开发环境设置

1. Fork 本项目
2. 克隆到本地开发环境
3. 进行修改和测试
4. 提交 Pull Request

### 文件结构

```
sora-prompt-auto-runner/
├── manifest.json       # Chrome 扩展配置文件
├── popup.html         # 扩展弹窗界面
├── popup.js          # 主要功能逻辑
└── README.md         # 项目说明文档
```

## 📝 更新日志

### v1.0.0 (2025-09-25)
- ✨ 初始版本发布
- 🎨 现代化的用户界面设计
- 🚀 基本的批量自动化功能
- 📊 详细日志支持
- ⚙️ 可配置的 XPath 选择器
- 🔄 智能等待和错误处理

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 感谢所有为项目贡献代码和建议的开发者
- 特别感谢 Sora 平台为创意工作者提供的强大工具

## � 支持项目

如果这个项目对您有帮助，您可以通过以下方式支持我们：

### ⭐ 免费支持
- **给个 Star**: 点击右上角的 ⭐ 按钮
- **分享项目**: 推荐给其他有需要的朋友
- **提供反馈**: 报告 Bug 或提出改进建议
- **贡献代码**: 提交 Pull Request 帮助改进项目

### 💰 资金支持

**🎯 为什么需要您的支持？**
- 持续开发新功能和改进现有功能
- 维护项目稳定性和兼容性
- 提供及时的技术支持和问题解答
- 支持更多视频生成平台的适配

**💳 捐赠方式：**

[![GitHub Sponsors](https://img.shields.io/badge/GitHub-Sponsors-EA4AAA?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/wide3751)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.me/wide3751)

**🏆 赞助者权益：**
- ✅ 优先技术支持
- ✅ 功能建议优先考虑
- ✅ 在 README 中展示（可选）
- ✅ 早期体验新功能

**☕ 其他支持方式：**
- **Buy me a coffee**: 请我喝杯咖啡 ☕
- **加密货币**: Bitcoin, Ethereum 等（联系我获取地址）
- **实物赞助**: 开发设备或云服务积分

### 🏅 贡献者和赞助者

**🌟 特别感谢以下支持者：**
<!-- 这里会自动更新赞助者信息 -->

*成为第一个支持者，您的名字将出现在这里！*

## �📞 支持与反馈

- 🐛 **问题报告**: [GitHub Issues](https://github.com/your-username/sora-prompt-auto-runner/issues)
- 💡 **功能建议**: [GitHub Discussions](https://github.com/your-username/sora-prompt-auto-runner/discussions)
- 📧 **联系邮箱**: your-email@example.com

---

⭐ **如果这个项目对您有帮助，请给我们一个星标！**

[![GitHub stars](https://img.shields.io/github/stars/wide3751/sora-prompt-auto-runner.svg?style=social&label=Star)](https://github.com/wide3751/sora-prompt-auto-runner)
[![GitHub forks](https://img.shields.io/github/forks/wide3751/sora-prompt-auto-runner.svg?style=social&label=Fork)](https://github.com/wide3751/sora-prompt-auto-runner/fork)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/wide3751?style=social)](https://github.com/sponsors/wide3751)

💝 **考虑赞助支持项目持续发展**