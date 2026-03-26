# 🚀 XuXu Pro - APK 构建替代方案

**状态**: ⚠️ 系统环境限制，需要本地构建  
**时间**: 2026-03-26 11:23 UTC

---

## ⚠️ 当前环境限制

当前系统缺少以下构建工具：
- ❌ Java/JDK (必需)
- ❌ Gradle (必需)
- ❌ Android SDK (必需)
- ❌ Docker (可选)

**原因**: 这些工具需要管理员权限安装

---

## ✅ 解决方案（三选一）

### 方案 1: 在本地计算机构建（推荐）⭐

**步骤**:

#### 1.1 下载项目

```bash
# 从 GitHub 克隆
git clone -b portfolio https://github.com/XuXuClassMate/XuXuClassMate.git
cd XuXuClassMate
```

#### 1.2 安装 Android Studio

**Windows/macOS/Linux**:
- 访问：https://developer.android.com/studio
- 下载并安装
- 首次启动会自动安装 Android SDK

#### 1.3 打开项目

1. 启动 Android Studio
2. File → Open
3. 选择 `XuXuClassMate/android` 目录
4. 等待 Gradle 同步完成

#### 1.4 构建 APK

**方法 A: 使用界面**
1. Build → Build Bundle(s) / APK(s)
2. Build APK(s)
3. 等待构建完成

**方法 B: 使用命令行**
```bash
cd android
./gradlew assembleDebug
```

#### 1.5 获取 APK

构建完成后，APK 位置：
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

### 方案 2: 使用在线构建服务

#### 2.1 GitHub Actions (推荐)

**步骤**:

1. **创建 GitHub Actions 工作流**

在项目根目录创建 `.github/workflows/android-build.yml`:

```yaml
name: Android APK Build

on:
  push:
    branches: [ portfolio ]
  pull_request:
    branches: [ portfolio ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
    
    - name: Grant execute permission for gradlew
      run: chmod +x android/gradlew
      working-directory: .
    
    - name: Build Debug APK
      run: ./gradlew assembleDebug
      working-directory: android
    
    - name: Upload APK
      uses: actions/upload-artifact@v3
      with:
        name: app-debug
        path: android/app/build/outputs/apk/debug/app-debug.apk
```

2. **推送到 GitHub**

```bash
git add .github/workflows/android-build.yml
git commit -m "Add GitHub Actions workflow for Android build"
git push origin portfolio
```

3. **获取 APK**

- 访问：https://github.com/XuXuClassMate/XuXuClassMate/actions
- 点击最新的构建
- 下载 `app-debug.apk`

---

### 方案 3: 使用 Capacitor CLI（需要 Node.js）

**步骤**:

#### 3.1 安装 Capacitor

```bash
npm install -g @capacitor/cli @capacitor/core
npm install @capacitor/android
```

#### 3.2 初始化 Capacitor

```bash
cd /tmp/XuXuClassMate
npx cap init "XuXu Pro" com.xuxuclassmate.portfolio --web-dir=out
```

#### 3.3 添加 Android 平台

```bash
npx cap add android
```

#### 3.4 同步代码

```bash
npx cap sync
```

#### 3.5 打开 Android Studio

```bash
npx cap open android
```

#### 3.6 构建 APK

在 Android Studio 中：
1. Build → Build APK
2. 获取 APK

---

## 📦 快速测试方案（无需构建）

### 方案 A: 使用 WebView 测试应用

**Android 设备**:
1. 安装 "WebView Browser" 应用
2. 打开应用
3. 访问：`file:///sdcard/Download/index.html`
4. 将网站文件复制到设备

**iOS 设备**:
1. 使用 Safari
2. 访问部署的网站
3. 添加到主屏幕

### 方案 B: 部署到 Vercel 后测试

```bash
# 部署到 Vercel
npm install -g vercel
cd /tmp/XuXuClassMate
vercel --prod

# 获得网址，在手机上访问
```

---

## 🎯 推荐流程

### 最快方式（10 分钟）

1. **使用 GitHub Actions**
   ```bash
   # 创建工作流文件
   # 推送到 GitHub
   git push origin portfolio
   
   # 等待自动构建
   # 下载 APK
   ```

2. **本地构建（如果有 Android Studio）**
   ```bash
   # 打开 Android Studio
   # 打开 android/ 目录
   # Build → Build APK
   ```

---

## 📝 详细步骤（GitHub Actions）

### 1. 创建工作流文件

```bash
cd /tmp/XuXuClassMate
mkdir -p .github/workflows
```

创建 `.github/workflows/android-build.yml`（内容见上方）

### 2. 提交并推送

```bash
git add .github/workflows/
git commit -m "Add GitHub Actions workflow for Android APK build"
git push origin portfolio
```

### 3. 等待构建

- 访问：https://github.com/XuXuClassMate/XuXuClassMate/actions
- 等待 5-10 分钟
- 下载 APK

### 4. 安装测试

```bash
adb install app-debug.apk
```

---

## 📊 方案对比

| 方案 | 时间 | 难度 | 需要工具 | 推荐度 |
|------|------|------|---------|--------|
| **GitHub Actions** | 10 分钟 | ⭐ 简单 | GitHub 账号 | ⭐⭐⭐⭐⭐ |
| **Android Studio** | 15 分钟 | ⭐⭐ 中等 | Android Studio | ⭐⭐⭐⭐ |
| **Capacitor CLI** | 20 分钟 | ⭐⭐ 中等 | Node.js, Android SDK | ⭐⭐⭐ |
| **在线构建服务** | 10 分钟 | ⭐ 简单 | 网络 | ⭐⭐⭐⭐ |

---

## 🔗 相关资源

- **Android Studio 下载**: https://developer.android.com/studio
- **GitHub Actions 文档**: https://docs.github.com/en/actions
- **Capacitor 文档**: https://capacitorjs.com/docs
- **项目仓库**: https://github.com/XuXuClassMate/XuXuClassMate

---

## 🎉 总结

由于当前系统环境限制，推荐以下两种方案：

### 方案 1: GitHub Actions（最简单）
- ✅ 无需安装任何工具
- ✅ 自动构建
- ✅ 自动上传 APK
- ✅ 每次推送自动构建

### 方案 2: 本地 Android Studio
- ✅ 完全控制
- ✅ 可以调试
- ✅ 适合开发

---

**选择一种方案，立即构建 APK！** 🚀

**推荐**: GitHub Actions（10 分钟搞定）
