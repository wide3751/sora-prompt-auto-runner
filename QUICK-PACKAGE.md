# 🎯 快速打包指南

## 📦 您刚刚完成的构建

✅ **已生成文件**：`release/sora-prompt-auto-runner-v1.0.0.zip` (6.4 KB)

这个 ZIP 文件可以用于：
- 上传到 GitHub Releases
- 提交到 Chrome Web Store
- 分发给其他用户进行测试

## 🚀 三种打包和分发方式

### 方式 1：Chrome 内置打包 (.crx 文件)

**适用于**：直接分发给用户安装

**步骤**：
1. 打开 Chrome，访问 `chrome://extensions/`
2. 启用"开发者模式"
3. 点击"打包扩展程序"
4. 选择项目根目录：`E:\Projects\prompt-auto-runner`
5. 私有密钥文件：留空（首次打包）
6. 点击"打包扩展程序"

**结果**：
- 生成 `prompt-auto-runner.crx` - 可安装的扩展包
- 生成 `prompt-auto-runner.pem` - 私有密钥（请保管好！）

**用户安装方法**：
- 将 .crx 文件拖拽到 Chrome 窗口
- 或者双击 .crx 文件

### 方式 2：ZIP 文件分发 (推荐)

**适用于**：Chrome Web Store 或 GitHub Releases

**步骤**：
```powershell
# 已经完成！使用我们的构建脚本
.\build.ps1
```

**结果**：
- `release/sora-prompt-auto-runner-v1.0.0.zip` - 用于上传

**上传到 Chrome Web Store**：
1. 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. 创建新项目
3. 上传 ZIP 文件
4. 填写描述信息
5. 提交审核

### 方式 3：源码分发

**适用于**：开发者和高级用户

**用户安装步骤**：
1. 下载或克隆项目
2. Chrome → `chrome://extensions/`
3. 启用"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目文件夹

## 🔄 版本更新流程

### 更新版本号
```powershell
# 编辑 manifest.json，更新版本号
# 例如：1.0.0 → 1.0.1
```

### 重新构建
```powershell
.\build.ps1
```

### 更新 .crx 文件（如果使用）
1. Chrome 扩展页面 → "打包扩展程序"
2. **重要**：使用之前的 `.pem` 密钥文件
3. 这样扩展 ID 保持不变，用户可以直接更新

## 📋 上传前检查清单

- [ ] ✅ 扩展功能测试正常
- [ ] ✅ manifest.json 版本号正确
- [ ] ✅ 没有测试代码或 console.log
- [ ] ✅ 没有敏感信息
- [ ] ✅ README.md 更新了版本信息
- [ ] ✅ 构建文件生成成功

## 📤 立即可用的文件

您现在有这些可用的文件：

1. **`release/sora-prompt-auto-runner-v1.0.0.zip`**
   - ✅ 可以上传到 Chrome Web Store
   - ✅ 可以添加到 GitHub Releases
   - ✅ 可以发给用户手动加载

2. **源码文件夹**
   - ✅ 可以直接作为开发版本加载
   - ✅ 可以推送到 GitHub

## 🎯 下一步建议

### 现在就可以做：
1. **测试 ZIP 文件**：
   ```powershell
   # 解压到临时文件夹测试
   Expand-Archive release\sora-prompt-auto-runner-v1.0.0.zip -DestinationPath temp-test
   ```

2. **上传到 GitHub**：
   ```bash
   git add .
   git commit -m "📦 Add build scripts and packaging files"
   git push origin main
   ```

3. **创建 GitHub Release**：
   - 附上 `sora-prompt-auto-runner-v1.0.0.zip` 文件
   - 用户可以直接下载使用

### 如果要发布到 Chrome Web Store：
1. 注册开发者账户（$5 一次性费用）
2. 上传 ZIP 文件
3. 等待审核（通常 1-3 个工作日）

## 💡 小贴士

- **保存好 .pem 文件**：这是您的扩展"身份证"
- **版本管理**：建议使用语义化版本（1.0.0 → 1.0.1 → 1.1.0）
- **测试优先**：每次打包前都要测试功能
- **备份构建**：保留每个版本的构建文件