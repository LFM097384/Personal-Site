@echo off
REM 学术个人网站开发服务器启动脚本
REM 作者：Zhang Ming
REM 创建日期：2025-05-23

echo ===============================================
echo    学术个人网站 - 开发服务器启动工具
echo ===============================================
echo.

REM 显示当前目录
echo 当前目录: %cd%
echo.

REM 检查是否已安装所有依赖
echo 正在检查项目依赖...
if not exist "node_modules\" (
    echo 未发现node_modules目录，正在安装依赖...
    call npm install
    if %errorlevel% neq 0 (
        echo 依赖安装失败，请检查网络连接后重试。
        exit /b 1
    )
    echo 依赖安装成功！
) else (
    echo 依赖检查完成。
)
echo.

REM 启动开发服务器
echo 正在启动开发服务器...
echo 服务器启动后，可通过 http://localhost:3000 访问网站
echo.
echo 按下 Ctrl+C 可停止服务器
echo.

call npm run dev
