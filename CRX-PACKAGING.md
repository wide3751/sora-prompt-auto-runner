# 🔧 使用 Chrome 创建 .crx 文件的详细步骤

## 📋 准备工作

确保您的扩展在开发模式下能正常工作：

1. 打开 Chrome 浏览器
2. 在地址栏输入：`chrome://extensions/`
3. 确保右上角"开发者模式"已开启
4. 如果还没加载，点击"加载已解压的扩展程序"，选择您的项目文件夹

## 🎯 创建 .crx 文件步骤

### 步骤 1：找到打包按钮
在 Chrome 扩展管理页面左上方找到"打包扩展程序"按钮

### 步骤 2：填写打包信息
点击"打包扩展程序"后会弹出对话框：

**扩展程序根目录**：
```
E:\Projects\prompt-auto-runner
```

**私有密钥文件**：
- 首次打包：留空
- 更新版本：选择之前生成的 .pem 文件

### 步骤 3：开始打包
点击"打包扩展程序"按钮

### 步骤 4：获取文件
打包成功后，会在项目**上级目录**生成两个文件：
- `prompt-auto-runner.crx` - 安装包
- `prompt-auto-runner.pem` - 私有密钥

## 📁 文件位置

打包后的文件会在：
```
E:\Projects\
├── prompt-auto-runner\          # 您的项目文件夹
├── prompt-auto-runner.crx       # ← 生成的安装包
└── prompt-auto-runner.pem       # ← 生成的私有密钥
```

## 🔐 私有密钥管理

### 重要性
- `.pem` 文件是您扩展的"身份证"
- 用于签名和更新扩展
- 丢失后无法更新已安装的扩展

### 保管方法
1. **备份**：复制到安全的地方
2. **不要分享**：不要上传到 GitHub
3. **重命名**：可以重命名为更有意义的名字

```powershell
# 移动并重命名密钥文件到项目中（但不提交到 Git）
Move-Item ..\prompt-auto-runner.pem .\private-key.pem
```

### 添加到 .gitignore
确保私有密钥不会被提交到 Git：
```gitignore
# 私有密钥文件
*.pem
private-key.pem
key.pem

# Chrome 扩展包
*.crx
```

## 🧪 测试 .crx 文件

### 方法 1：拖拽安装
1. 打开新的 Chrome 窗口
2. 将 `.crx` 文件拖拽到 Chrome 窗口
3. 确认安装提示

### 方法 2：开发者安装
1. `chrome://extensions/`
2. 拖拽 `.crx` 文件到页面上
3. 点击"添加扩展程序"

### 预期警告
Chrome 可能显示警告：
- "无法验证此扩展程序的开发者"
- 这是正常的，选择"仍要安装"

## 🔄 更新扩展

### 更新版本号
1. 编辑 `manifest.json`
2. 增加版本号（例如：1.0.0 → 1.0.1）

### 重新打包
1. 回到 Chrome 扩展页面
2. 再次点击"打包扩展程序"
3. **重要**：选择之前的 `.pem` 文件
4. 这样扩展 ID 保持一致

### 分发更新
- 用新的 `.crx` 文件替换旧版本
- 用户安装新版本会自动覆盖旧版本

## 🚀 自动化脚本

创建 `pack.ps1` 自动化打包脚本：

```powershell
# pack.ps1 - 自动打包脚本
Write-Host "🚀 开始打包扩展..." -ForegroundColor Green

# 检查是否存在私有密钥
$keyFile = "private-key.pem"
if (Test-Path $keyFile) {
    Write-Host "🔑 找到私有密钥文件" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  首次打包，将生成新的私有密钥" -ForegroundColor Yellow
}

Write-Host "📋 请手动完成以下步骤：" -ForegroundColor Cyan
Write-Host "1. 打开 Chrome: chrome://extensions/" -ForegroundColor White
Write-Host "2. 点击'打包扩展程序'" -ForegroundColor White
Write-Host "3. 扩展程序根目录: $PWD" -ForegroundColor White
if (Test-Path $keyFile) {
    Write-Host "4. 私有密钥文件: $PWD\$keyFile" -ForegroundColor White
} else {
    Write-Host "4. 私有密钥文件: 留空" -ForegroundColor White
}
Write-Host "5. 点击'打包扩展程序'" -ForegroundColor White

Write-Host ""
Write-Host "打包完成后，记得：" -ForegroundColor Cyan
Write-Host "- 将 .pem 文件移动到项目目录并重命名" -ForegroundColor White
Write-Host "- 测试 .crx 文件是否正常工作" -ForegroundColor White
```

## ⚠️ 常见问题

### Q: 打包时提示"无法加载扩展"
**A**: 检查 manifest.json 格式是否正确

### Q: 找不到生成的文件
**A**: 文件在项目的**上级目录**，不在项目文件夹内

### Q: 安装时 Chrome 阻止
**A**: 这是正常的安全机制，用户需要确认安装

### Q: 更新后扩展 ID 变了
**A**: 没有使用相同的 .pem 文件，需要重新打包

### Q: 私有密钥丢失怎么办
**A**: 只能重新打包，但扩展 ID 会改变，用户需要重新安装

## 🎯 最佳实践

1. **版本管理**：每次更新都要增加版本号
2. **测试优先**：打包前充分测试功能
3. **密钥备份**：将 .pem 文件备份到多个安全位置
4. **文档更新**：更新 README 中的版本信息
5. **用户通知**：如果有重大更新，通知用户