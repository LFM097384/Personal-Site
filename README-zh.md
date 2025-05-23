# 学术个人网站

这是一个专业的学术个人网站项目，基于Next.js框架构建，支持中英双语切换，展示个人学术信息、研究成果和发表论文。

## 项目特点

- 💼 **专业设计**: 现代化的UI设计，适合学术展示
- 🌐 **双语支持**: 完全支持中英文双语切换功能
- 📱 **响应式布局**: 完美适配各种设备的屏幕尺寸
- 🎨 **主题切换**: 支持亮色/暗色主题切换
- 📝 **学术展示**: 包含论文发表、研究项目等学术内容展示

## 本地开发

### 方法一：使用脚本启动（推荐）

本项目提供了便捷的启动脚本，在Windows系统下，您可以使用以下方式启动开发环境：

#### PowerShell脚本

1. 打开项目文件夹
2. 右键点击 `start-dev.ps1` 文件，选择"使用PowerShell运行"
3. 或者在PowerShell中运行：

```powershell
.\start-dev.ps1
```

#### 批处理文件

1. 打开项目文件夹
2. 双击 `start-dev.bat` 文件
3. 或者在命令提示符中运行：

```cmd
start-dev.bat
```

### 方法二：手动启动

如果您不想使用脚本，也可以手动执行以下命令来启动开发环境：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建和部署

### 使用脚本构建（推荐）

本项目提供了构建和部署脚本：

#### PowerShell脚本

```powershell
.\build-deploy.ps1
```

#### 批处理文件

```cmd
build-deploy.bat
```

### 手动构建

```bash
# 安装依赖
npm install

# 代码检查
npm run lint

# 构建项目
npm run build

# 启动生产服务器
npm run start
```

## 项目结构

- `src/app/`: 应用主要页面和路由
  - `page.tsx`: 主页
  - `about/`: 关于页面
  - `projects/`: 研究项目页面
  - `publications/`: 发表论文页面
  - `contact/`: 联系方式页面
- `src/components/`: 可复用组件
  - `language-provider.tsx`: 语言切换提供者
  - `language-toggle.tsx`: 语言切换组件
  - `theme-provider.tsx`: 主题提供者
  - `theme-toggle.tsx`: 主题切换组件
- `public/`: 静态资源

## 技术栈

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion (动画)
- Next-Themes (主题切换)

## 许可证

[MIT](LICENSE)
