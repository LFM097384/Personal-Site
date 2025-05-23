@echo off
REM 学术个人网站构建和部署脚本
REM 作者：Zhang Ming
REM 创建日期：2025-05-23

echo ===============================================
echo    学术个人网站 - 构建和部署工具
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

REM 执行lint检查
echo 正在执行代码质量检查...
call npm run lint
if %errorlevel% neq 0 (
    echo 代码质量检查未通过，请修复问题后重试。
    exit /b 1
)
echo 代码质量检查通过！
echo.

REM 构建项目
echo 正在构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo 项目构建失败，请检查代码错误后重试。
    exit /b 1
)
echo 项目构建成功！
echo.

REM 启动生产服务器
set /p startProduction=是否要启动生产服务器？(Y/N)
if /i "%startProduction%"=="Y" (
    echo 正在启动生产服务器...
    echo 服务器启动后，可通过 http://localhost:3000 访问网站
    echo 按下 Ctrl+C 可停止服务器
    echo.
    call npm run start
) else (
    echo 构建完成！您可以通过执行 'npm run start' 来启动生产服务器。
)
