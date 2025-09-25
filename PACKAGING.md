# 📦 Chrome 扩展打包指南

## 方法一：Chrome 内置打包工具（推荐）

### 步骤 1：准备扩展
确保您的扩展目录包含以下文件：
```
prompt-auto-runner/
├── manifest.json
├── popup.html
├── popup.js
├── README.md
└── LICENSE
```

### 步骤 2：打开 Chrome 扩展页面
1. 打开 Chrome 浏览器
2. 在地址栏输入：`chrome://extensions/`
3. 确保右上角的"开发者模式"已启用

### 步骤 3：打包扩展
1. 点击页面左上角的"打包扩展程序"按钮
2. 在弹出的对话框中：
   - **扩展程序根目录**：选择您的项目文件夹 `E:\Projects\prompt-auto-runner`
   - **私有密钥文件**：第一次打包时留空（Chrome 会自动生成）
3. 点击"打包扩展程序"

### 步骤 4：获取打包文件
打包成功后，您会在项目目录的上一级文件夹中找到：
- `prompt-auto-runner.crx` - 这是用户可以直接安装的扩展包
- `prompt-auto-runner.pem` - 私有密钥文件（请妥善保管，用于后续更新）

## 方法二：使用 Chrome CLI 工具

### 安装 Chrome CLI
```powershell
# 使用 npm 安装
npm install -g chrome-cli

# 或使用 yarn
yarn global add chrome-cli
```

### 打包命令
```powershell
cd E:\Projects\prompt-auto-runner
chrome-cli pack --extension=. --pack-extension-key=key.pem
```

## 方法三：手动创建 ZIP 文件（用于 Chrome Web Store）

### 创建发布版本的 ZIP
```powershell
# 创建一个发布文件夹
mkdir release
cd release

# 复制必要文件（排除开发文件）
copy ..\manifest.json .
copy ..\popup.html .
copy ..\popup.js .

# 创建 ZIP 文件
Compress-Archive -Path *.* -DestinationPath ..\sora-prompt-auto-runner-v1.0.0.zip
cd ..
```

## 📋 打包前检查清单

- [ ] 测试扩展在不同网站上的功能
- [ ] 检查 `manifest.json` 中的版本号
- [ ] 确保所有必要文件都存在
- [ ] 移除开发和测试文件
- [ ] 检查没有敏感信息（API 密钥等）
- [ ] 测试打包后的扩展是否正常工作

## 🔐 私有密钥管理

### 首次打包
- Chrome 会自动生成 `.pem` 私有密钥文件
- **重要**：请将此文件安全保存，不要上传到 GitHub

### 后续更新打包
1. 使用相同的私有密钥文件
2. 在打包时选择您保存的 `.pem` 文件
3. 这确保扩展 ID 保持一致

### 添加到 .gitignore
```gitignore
# 私有密钥文件
*.pem
key.pem

# 打包文件
*.crx
```

## 📤 分发选项

### 选项 1：GitHub Releases
1. 在 GitHub 创建新的 Release
2. 上传 `.crx` 文件作为附件
3. 用户可以直接下载并拖拽到 Chrome 安装

### 选项 2：Chrome Web Store（推荐）
1. 准备 ZIP 文件（不是 .crx）
2. 注册 Chrome Web Store 开发者账户（一次性费用 $5）
3. 上传 ZIP 文件进行审核

### 选项 3：直接分发源码
用户需要：
1. 下载源码
2. 在 Chrome 扩展页面启用开发者模式
3. 加载已解压的扩展程序

## 🛠️ 开发和生产版本

### 创建构建脚本
创建 `build.ps1` 文件：

```powershell
# build.ps1
Write-Host "开始构建 Sora Prompt Auto Runner..."

# 清理之前的构建
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
}
New-Item -ItemType Directory -Force -Path "dist"

# 复制生产文件
Copy-Item "manifest.json" "dist/"
Copy-Item "popup.html" "dist/"
Copy-Item "popup.js" "dist/"

# 创建 ZIP 文件
$version = (Get-Content "manifest.json" | ConvertFrom-Json).version
$zipName = "sora-prompt-auto-runner-v$version.zip"

Compress-Archive -Path "dist\*" -DestinationPath $zipName -Force

Write-Host "构建完成: $zipName"
```

### 运行构建
```powershell
# 给脚本执行权限
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 运行构建
.\build.ps1
```

## 🔍 验证打包结果

### 测试 .crx 文件
1. 打开新的 Chrome 窗口
2. 将 `.crx` 文件拖拽到 Chrome 窗口
3. 确认安装提示并测试功能

### 测试 ZIP 文件
1. 解压 ZIP 文件到临时文件夹
2. 在 Chrome 扩展页面加载解压后的文件夹
3. 测试所有功能是否正常

## ⚠️ 常见问题

### Q: 打包时提示"无法加载扩展"
A: 检查 `manifest.json` 语法是否正确，使用 JSON 验证工具检查

### Q: 打包后扩展无法正常工作
A: 确保所有引用的文件都已包含在打包中

### Q: 私有密钥文件丢失
A: 如果丢失，重新打包会生成新的扩展 ID，已安装的用户需要重新安装

### Q: Chrome 警告"无法验证开发者"
A: 这是正常现象，用户需要在警告中选择"仍要安装"

## 📊 版本管理建议

1. **语义化版本**：使用 `主版本.次版本.修订版本` 格式
2. **构建脚本**：自动化打包和版本管理
3. **测试环境**：在不同的 Chrome 版本中测试
4. **备份密钥**：将 `.pem` 文件备份到安全位置