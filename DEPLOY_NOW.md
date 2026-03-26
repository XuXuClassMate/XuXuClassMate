# 🚀 XuXu Pro - 部署执行指南

**状态**: ✅ 构建完成，准备部署  
**时间**: 2026-03-26 10:51 UTC

---

## ✅ 已完成

1. **Next.js 静态网站构建** - 成功
   - 输出目录：`/tmp/XuXuClassMate/out/`
   - 主页大小：83KB
   - 所有组件正常工作

2. **Capacitor 配置** - 完成
   - App Name: XuXu Pro
   - Package: com.xuxuclassmate.portfolio

3. **Git 提交** - 完成
   - Commit: `7424a53`
   - 分支：portfolio

---

## 📋 部署选项（三选一）

### 选项 1: Vercel 部署（最简单，推荐）⭐

**无需配置，直接部署！**

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录（首次）
vercel login

# 3. 部署
cd /tmp/XuXuClassMate
vercel --prod
```

**优点**:
- ✅ 免费
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 支持自定义域名
- ✅ 一键部署

**部署后**:
- 获得网址：`https://xuxu-pro.vercel.app`
- 可以绑定域名：`www.xuxuclassmate.com`

---

### 选项 2: GitHub Pages（需要配置 Token）

**步骤**:

#### 2.1 创建 GitHub Token

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 选择权限：`repo` (Full control of private repositories)
4. 生成并复制 Token

#### 2.2 配置 Token

```bash
# 设置环境变量
export GITHUB_TOKEN=你的_token_here

# 或者编辑 Git 配置
git config --global credential.helper store
```

#### 2.3 推送

```bash
cd /tmp/XuXuClassMate

# 推送到 gh-pages 分支
git subtree push --prefix out origin gh-pages

# 或者推送到 portfolio 分支
git push origin portfolio
```

#### 2.4 启用 GitHub Pages

1. 访问 https://github.com/XuXuClassMate/XuXuClassMate/settings/pages
2. Source 选择：`gh-pages` 分支
3. 保存
4. 获得网址：`https://xuxuclassmate.github.io/XuXuClassMate/`

---

### 选项 3: 构建 Android APK（需要 Android Studio）

**步骤**:

#### 3.1 安装 Android Studio

下载地址：https://developer.android.com/studio

#### 3.2 添加 Android 平台

```bash
cd /tmp/XuXuClassMate

# 添加 Android
npx cap add android

# 同步代码
npx cap sync
```

#### 3.3 打开 Android Studio

```bash
npx cap open android
```

#### 3.4 构建 APK

在 Android Studio 中:
1. Build → Build Bundle(s) / APK(s) → Build APK(s)
2. 等待构建完成
3. APK 位置：`android/app/build/outputs/apk/release/app-release.apk`

---

## 🎯 推荐方案

### 最快上线（5 分钟）

```bash
# 1. 部署到 Vercel
npm install -g vercel
cd /tmp/XuXuClassMate
vercel --prod

# 2. 获得网址
# https://xuxu-pro.vercel.app
```

### 构建原生应用（30 分钟）

```bash
# 1. 安装 Android Studio
# https://developer.android.com/studio

# 2. 添加 Android 平台
cd /tmp/XuXuClassMate
npx cap add android
npx cap sync

# 3. 打开并构建
npx cap open android
# 然后在 Android Studio 中 Build → Build APK
```

---

## 📊 部署对比

| 平台 | 时间 | 难度 | 成本 | 适合场景 |
|------|------|------|------|---------|
| **Vercel** | 2 分钟 | ⭐ 简单 | 免费 | 快速上线 |
| **GitHub Pages** | 10 分钟 | ⭐⭐ 中等 | 免费 | 技术展示 |
| **Android APK** | 30 分钟 | ⭐⭐⭐ 复杂 | 免费 | 移动应用 |
| **iOS IPA** | 1 小时 | ⭐⭐⭐⭐ 难 | $99/年 | iOS 用户 |

---

## 🔧 快速命令

### 本地预览

```bash
cd /tmp/XuXuClassMate
npx serve out
# 访问 http://localhost:3000
```

### 重新构建

```bash
cd /tmp/XuXuClassMate
npm run build
```

### 检查构建输出

```bash
ls -lh /tmp/XuXuClassMate/out/
```

---

## 📝 部署后配置

### 绑定自定义域名

**Vercel**:
1. 访问 https://vercel.com/dashboard
2. 选择项目
3. Settings → Domains
4. 添加 `www.xuxuclassmate.com`
5. 配置 DNS (CNAME 到 `cname.vercel-dns.com`)

**GitHub Pages**:
1. Settings → Pages
2. Custom domain: `www.xuxuclassmate.com`
3. 配置 DNS (CNAME 到 `xuxuclassmate.github.io`)

---

## 🎉 部署检查清单

- [ ] 选择部署平台（Vercel/GitHub/Android）
- [ ] 执行部署命令
- [ ] 测试访问
- [ ] 绑定域名（可选）
- [ ] 分享链接

---

## 📞 需要帮助？

### Vercel 部署问题
```bash
vercel --help
```

### GitHub 推送问题
```bash
# 使用 Token
git push https://<TOKEN>@github.com/XuXuClassMate/XuXuClassMate.git portfolio
```

### Android 构建问题
```bash
# 检查 Android Studio
npx cap open android
```

---

**选择一种部署方式，立即上线！** 🚀

**推荐**: Vercel 部署（最快，2 分钟上线）
