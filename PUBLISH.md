# 🚀 发布到 GitHub 指南

## 📋 发布前检查清单

- [ ] 确认所有功能正常工作
- [ ] 更新版本号在 `manifest.json` 中
- [ ] 更新 `README.md` 中的版本信息
- [ ] 测试扩展在不同网站上的兼容性
- [ ] 检查代码中没有个人敏感信息

## 🛠️ GitHub 仓库设置步骤

### 1. 创建 GitHub 仓库
```bash
# 在 GitHub 上创建新仓库: sora-prompt-auto-runner
# 不要初始化 README、.gitignore 或 LICENSE（我们已经有了）
```

### 2. 初始化本地 Git 仓库
```bash
cd e:\Projects\prompt-auto-runner
git init
git add .
git commit -m "🎉 Initial release: Sora Prompt Auto Runner v1.0.0"
```

### 3. 连接到 GitHub 并推送
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sora-prompt-auto-runner.git
git push -u origin main
```

### 4. 创建第一个 Release
1. 前往 GitHub 仓库页面
2. 点击 "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `🎬 Sora Prompt Auto Runner v1.0.0`
5. 描述发布内容（从 README.md 的更新日志复制）
6. 上传打包的扩展文件（可选）

## 📦 打包扩展（可选）

如果要提供 .crx 文件供用户直接安装：

1. 在 Chrome 扩展页面 (`chrome://extensions/`) 点击"打包扩展程序"
2. 选择项目根目录
3. 生成的 .crx 文件可以上传到 GitHub Release

## 🔄 后续更新流程

1. 修改代码
2. 更新 `manifest.json` 中的版本号
3. 更新 `README.md` 中的更新日志
4. 提交更改：
   ```bash
   git add .
   git commit -m "✨ Add new feature: 功能描述"
   git push
   ```
5. 创建新的 Release（如果是重要更新）

## 📝 README.md 需要修改的内容

记得在 README.md 中更新以下占位符：
- `your-username` → 你的 GitHub 用户名
- `your-email@example.com` → 你的联系邮箱

## 🏷️ 建议的 GitHub Topics

在仓库设置中添加以下 topics：
- `chrome-extension`
- `sora`
- `automation`
- `video-generation`
- `prompt-engineering`
- `batch-processing`
- `javascript`
- `ai-tools`

## 📊 GitHub Pages（可选）

如果想要一个项目主页：
1. 在仓库设置中启用 GitHub Pages
2. 选择 "Deploy from a branch" → `main` → `/ (root)`
3. README.md 会自动成为主页内容