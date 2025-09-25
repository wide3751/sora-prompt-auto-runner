# Sora Prompt Auto Runner 构建脚本
Write-Host "🚀 开始构建 Sora Prompt Auto Runner..." -ForegroundColor Green

# 检查必要文件
$requiredFiles = @("manifest.json", "popup.html", "popup.js")
foreach ($file in $requiredFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "❌ 错误：缺少必要文件 $file" -ForegroundColor Red
        exit 1
    }
}

# 读取版本号
try {
    $manifestContent = Get-Content "manifest.json" -Raw | ConvertFrom-Json
    $version = $manifestContent.version
    Write-Host "📋 当前版本: $version" -ForegroundColor Cyan
} catch {
    Write-Host "❌ 错误：无法读取 manifest.json" -ForegroundColor Red
    exit 1
}

# 清理之前的构建
Write-Host "🧹 清理旧构建文件..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
}
if (Test-Path "release") {
    Remove-Item -Recurse -Force "release"
}

# 创建构建目录
New-Item -ItemType Directory -Force -Path "dist" | Out-Null
New-Item -ItemType Directory -Force -Path "release" | Out-Null

# 复制生产文件到 dist
Write-Host "📁 复制文件到构建目录..." -ForegroundColor Yellow
Copy-Item "manifest.json" "dist/"
Copy-Item "popup.html" "dist/"
Copy-Item "popup.js" "dist/"

# 创建用于 Chrome Web Store 的 ZIP 文件
$zipName = "release/sora-prompt-auto-runner-v$version.zip"
Write-Host "📦 创建 ZIP 文件: $zipName" -ForegroundColor Yellow
Compress-Archive -Path "dist\*" -DestinationPath $zipName -Force

# 显示文件信息
$zipInfo = Get-Item $zipName
Write-Host "✅ 构建完成！" -ForegroundColor Green
Write-Host "📄 文件名: $($zipInfo.Name)" -ForegroundColor White
Write-Host "📐 文件大小: $([math]::Round($zipInfo.Length / 1KB, 2)) KB" -ForegroundColor White
Write-Host "📍 位置: $($zipInfo.FullName)" -ForegroundColor White

# 显示下一步操作
Write-Host ""
Write-Host "🎯 下一步操作:" -ForegroundColor Cyan
Write-Host "1. 测试 ZIP 文件中的扩展功能" -ForegroundColor White
Write-Host "2. 上传到 GitHub Releases 或 Chrome Web Store" -ForegroundColor White
Write-Host "3. 如需创建 .crx 文件，请使用 Chrome 扩展页面的打包功能" -ForegroundColor White

Write-Host ""
Write-Host "📋 文件清单:" -ForegroundColor Cyan
Get-ChildItem "dist" | ForEach-Object {
    Write-Host "  ✓ $($_.Name)" -ForegroundColor Green
}