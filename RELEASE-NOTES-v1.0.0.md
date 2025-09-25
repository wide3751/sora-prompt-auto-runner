# 🎬 Sora Prompt Auto Runner v1.0.0 - 首次发布

> **发布日期**: 2025年9月25日  
> **标签**: `v1.0.0`

我们很高兴宣布 **Sora Prompt Auto Runner** 的首次发布！这是一个专为 Sora 视频生成平台设计的 Chrome 扩展工具，能够自动批量提交提示词，让您轻松完成大批量的视频生成任务。

## 🎯 核心功能

### ✨ 批量自动化
- 🚀 支持一次性提交多个提示词，无需手动逐个输入
- 🔄 智能等待机制，自动检测页面响应状态
- ⏱️ 可配置的执行间隔，避免服务器压力

### 📝 多格式支持
- 🔤 支持简单字符串格式的提示词
- 📋 支持复杂 JSON 对象格式（包含场景、镜头、风格等字段）
- 🔀 支持混合格式，同一批次可包含不同类型的提示词

### 🎨 现代化界面
- 💎 美观的渐变设计和现代化 UI
- 🔧 可折叠的高级设置区域
- 📊 实时状态反馈和详细日志输出
- ✨ 一键插入示例功能

### ⚙️ 高度可配置
- 🎯 支持自定义 XPath 选择器，适应不同网站布局
- 🔍 预设了主流 Sora 平台的默认配置
- 💾 自动保存用户配置和设置

## 📦 安装方式

### 方式一：从源码安装（推荐）
```bash
# 1. 克隆项目
git clone https://github.com/wide3751/sora-prompt-auto-runner.git

# 2. 在 Chrome 中加载
# - 打开 chrome://extensions/
# - 启用"开发者模式"
# - 点击"加载已解压的扩展程序"
# - 选择项目文件夹
```

### 方式二：直接下载
1. 从 [Releases](https://github.com/wide3751/sora-prompt-auto-runner/releases) 页面下载 ZIP 文件
2. 解压后按上述步骤加载到 Chrome

## 🎮 快速开始

### 基本使用
1. **准备提示词**：创建 JSON 数组格式的提示词
2. **打开扩展**：点击 Chrome 工具栏中的扩展图标
3. **粘贴提示词**：将提示词粘贴到文本框，或点击"✨ 插入范例"
4. **开始执行**：点击"🚀 开始执行"按钮
5. **查看进度**：在浏览器控制台查看详细执行日志

### 示例提示词格式
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
  "简单的文字提示词示例"
]
```

## 🔧 技术亮点

### 智能元素检测
- 使用 XPath 精确定位页面元素
- 自动处理不同网站的布局差异
- 支持动态加载的页面内容

### 原生事件触发
- 使用原生 JavaScript 事件模拟用户操作
- 确保与目标网站的完全兼容性
- 支持现代 Web 框架（React, Vue 等）

### 安全性考虑
- 运行在隔离的扩展环境中
- 不收集或传输用户数据
- 开源代码，完全透明

## 📊 性能特性

- **轻量级**: 扩展包仅 6.4KB
- **低资源占用**: 运行时内存占用 < 5MB
- **高效执行**: 支持处理大批量提示词（测试过 100+ 项目）
- **错误恢复**: 自动处理网络错误和页面异常

## 🛠️ 开发工具

本版本还包含了完整的开发和构建工具链：

- **自动化构建**: `build.ps1` 一键构建脚本
- **打包工具**: 支持 ZIP 和 CRX 格式输出
- **文档完整**: 包含详细的安装、使用和开发指南

## 🐛 已知限制

- 需要手动配置不同网站的 XPath 选择器
- 依赖页面 DOM 结构，网站更新可能需要调整配置
- 某些网站的反爬虫机制可能影响使用

## 🔮 下一步计划

- 🔄 自动检测网站类型和元素位置
- 🌐 支持更多视频生成平台
- 📈 添加执行统计和分析功能
- 🎨 提供更多界面主题选择
- 📱 考虑移动端兼容性

## 📁 包含文件

此版本包含以下核心文件：
- `manifest.json` - Chrome 扩展配置
- `popup.html` - 用户界面
- `popup.js` - 核心功能逻辑
- `README.md` - 详细使用文档
- `build.ps1` - 自动构建脚本

## 🔗 相关链接

- 📚 [项目主页](https://github.com/wide3751/sora-prompt-auto-runner)
- 📖 [使用文档](https://github.com/wide3751/sora-prompt-auto-runner/blob/main/README.md)
- 🐛 [问题反馈](https://github.com/wide3751/sora-prompt-auto-runner/issues)
- 💬 [讨论社区](https://github.com/wide3751/sora-prompt-auto-runner/discussions)

## 🙏 致谢

感谢所有测试用户的反馈和建议，帮助我们完善了这个工具。

## 📝 更新说明

这是项目的首次发布版本，包含所有核心功能。我们建议所有用户从这个版本开始使用。

---

**📦 下载附件**:
- `sora-prompt-auto-runner-v1.0.0.zip` (6.4 KB) - Chrome Web Store 格式
- 源码可直接从 GitHub 仓库获取

**🚀 立即开始**: 下载后按照 README.md 中的安装指南即可开始使用！

---

如有任何问题或建议，欢迎在 [GitHub Issues](https://github.com/wide3751/sora-prompt-auto-runner/issues) 中反馈。

⭐ 如果这个工具对您有帮助，请给我们一个 Star！