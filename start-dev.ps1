#!/usr/bin/env pwsh
# 学术个人网站开发服务器启动脚本
# 作者：Zhang Ming
# 创建日期：2025-05-23

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "   学术个人网站 - 开发服务器启动工具" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# 显示当前目录
$currentDir = Get-Location
Write-Host "当前目录: $currentDir" -ForegroundColor Yellow
Write-Host ""

# 检查是否已安装所有依赖
Write-Host "正在检查项目依赖..." -ForegroundColor Green
if (-not (Test-Path -Path "node_modules")) {
    Write-Host "未发现node_modules目录，正在安装依赖..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "依赖安装失败，请检查网络连接后重试。" -ForegroundColor Red
        exit 1
    }
    Write-Host "依赖安装成功！" -ForegroundColor Green
} else {
    Write-Host "依赖检查完成。" -ForegroundColor Green
}
Write-Host ""

# 启动开发服务器
Write-Host "正在启动开发服务器..." -ForegroundColor Green
Write-Host "服务器启动后，可通过 http://localhost:3000 访问网站" -ForegroundColor Magenta
Write-Host ""
Write-Host "按下 Ctrl+C 可停止服务器" -ForegroundColor Yellow
Write-Host ""

npm run dev
