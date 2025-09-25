# 🚀 创建 GitHub Release 步骤指南

## 📋 准备工作 ✅

- [x] 代码已推送到 GitHub
- [x] Release Notes 已准备好
- [x] 构建文件已生成 (`release/sora-prompt-auto-runner-v1.0.0.zip`)

## 🎯 创建 Release 步骤

### 步骤 1: 访问 GitHub 仓库
打开您的项目页面：
```
https://github.com/wide3751/sora-prompt-auto-runner
```

### 步骤 2: 进入 Releases 页面
1. 在仓库主页面，点击右侧的 **"Releases"** 
2. 或者直接访问：`https://github.com/wide3751/sora-prompt-auto-runner/releases`

### 步骤 3: 创建新 Release
点击 **"Create a new release"** 绿色按钮

### 步骤 4: 填写 Release 信息

**Tag version:**
```
v1.0.0
```

**Release title:**
```
🎬 Sora Prompt Auto Runner v1.0.0 - 首次发布
```

**Description:** (复制下面的内容)

```markdown
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

**📚 完整文档**: [README.md](https://github.com/wide3751/sora-prompt-auto-runner/blob/main/README.md)

**🐛 问题反馈**: [GitHub Issues](https://github.com/wide3751/sora-prompt-auto-runner/issues)

⭐ **如果有帮助，请给个 Star！**
```

### 步骤 5: 上传文件
在 "Attach binaries by dropping them here or selecting them." 区域：

1. 点击选择文件或直接拖拽
2. 上传 `release/sora-prompt-auto-runner-v1.0.0.zip` 文件

### 步骤 6: 发布设置
- ✅ **Set as the latest release** (设为最新版本)
- ✅ **Create a discussion for this release** (可选，创建讨论)

### 步骤 7: 发布
点击 **"Publish release"** 绿色按钮

## 🎉 完成！

您的 Release 将在以下地址可见：
```
https://github.com/wide3751/sora-prompt-auto-runner/releases/tag/v1.0.0
```

## 📱 发布后的推广

### 自动生成的内容
GitHub 会自动：
- 生成 Source Code 下载链接 (zip 和 tar.gz)
- 在 Releases 页面显示您的发布
- 发送通知给 Watch 该仓库的用户

### 可选的推广渠道
- 在 README.md 中添加 "Latest Release" 徽章
- 分享到社交媒体和开发者社区
- 考虑提交到 Chrome Web Store

## 🏷️ Release 徽章

您可以在 README.md 中添加这个徽章：
```markdown
[![GitHub release](https://img.shields.io/github/release/wide3751/sora-prompt-auto-runner.svg)](https://github.com/wide3751/sora-prompt-auto-runner/releases)
```

## 🔄 后续版本发布

对于未来的版本更新：
1. 更新 `manifest.json` 中的版本号
2. 运行 `.\build.ps1` 重新构建
3. 创建新的 Git tag 和 Release
4. 上传新的构建文件

记住：每个版本都应该有对应的 tag，便于用户追踪版本历史。