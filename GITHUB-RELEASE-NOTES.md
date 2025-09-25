🎬 **Sora Prompt Auto Runner v1.0.0 - 首次发布**

专为 Sora 视频生成平台设计的 Chrome 扩展工具，实现批量自动提交提示词功能！

## ✨ 主要功能

🚀 **批量自动化**
- 支持一次性提交多个提示词
- 智能等待机制，自动检测页面状态
- 支持字符串和 JSON 对象两种格式

🎨 **现代化界面**
- 美观的渐变设计和直观操作
- 可折叠的高级设置区域  
- 实时状态反馈和详细日志

⚙️ **高度可配置**
- 支持自定义 XPath 选择器
- 预设主流平台默认配置
- 自动保存用户设置

## 🎮 快速开始

1. 下载并解压 ZIP 文件
2. Chrome 浏览器打开 `chrome://extensions/`
3. 启用"开发者模式"，加载解压的扩展
4. 点击工具栏扩展图标开始使用

## 📝 示例格式

```json
[
  {
    "scene": "宁静的日式庭院，樱花飘落",
    "shot": {
      "type": "wide shot", 
      "camera_movement": "slow pan",
      "duration": "5 seconds"
    },
    "style": "cinematic, soft lighting"
  },
  "简单的文字提示词"
]
```

## 📊 技术特性

- 🪶 **轻量级**: 仅 6.4KB 大小
- ⚡ **高性能**: 支持处理 100+ 提示词
- 🔒 **安全性**: 开源代码，本地运行
- 🛠️ **开发友好**: 完整构建工具和文档

## 🔧 包含工具

- 自动化构建脚本 (`build.ps1`)
- 详细的安装和使用指南
- 打包和分发工具

## 🐛 已知限制

- 需要手动配置不同网站的 XPath
- 依赖目标网站的 DOM 结构

## 🔮 后续计划

- 自动检测网站类型和元素
- 支持更多视频生成平台
- 添加执行统计功能

---

**📦 安装文件**: `sora-prompt-auto-runner-v1.0.0.zip` (6.4 KB)

**📚 完整文档**: [README.md](https://github.com/wide3751/sora-prompt-auto-runner/blob/main/README.md)

**🐛 问题反馈**: [GitHub Issues](https://github.com/wide3751/sora-prompt-auto-runner/issues)

⭐ **如果有帮助，请给个 Star！**