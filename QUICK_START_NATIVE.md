# 📱 XuXu Portfolio - 原生应用快速开始

**目标**: 构建真正的手机安装包（APK/IPA）

---

## 🎯 三种构建方式

### 方式 1: 一键构建脚本（推荐）⭐

```bash
cd /tmp/XuXuClassMate

# Android APK
./build-android-apk.sh

# iOS IPA (需要 macOS)
./build-ios-ipa.sh
```

### 方式 2: 手动构建

```bash
# 1. 安装 Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios --save-dev

# 2. 初始化
npx cap init "XuXu Portfolio" com.xuxuclassmate.portfolio

# 3. 构建 Next.js
npm run build

# 4. 添加平台
npx cap add android
npx cap add ios

# 5. 同步
npx cap sync

# 6. 构建 APK
cd android && ./gradlew assembleRelease
```

### 方式 3: 使用 Android Studio / Xcode

```bash
# 同步后打开 IDE
npx cap open android   # Android Studio
npx cap open ios       # Xcode

# 然后在 IDE 中构建
```

---

## 📦 输出文件

### Android
- **文件**: `android/app/build/outputs/apk/release/app-release.apk`
- **大小**: 约 20-50MB
- **安装**: 直接复制到手机安装

### iOS
- **文件**: 通过 Xcode 导出的 `.ipa` 文件
- **大小**: 约 30-100MB
- **安装**: TestFlight 或企业证书

### 鸿蒙
- **文件**: `.hap` 或 `.app` 文件
- **大小**: 约 20-50MB
- **安装**: 华为应用市场或直接安装

---

## 🚀 快速测试（5 分钟）

### Android 快速测试

```bash
# 1. 进入项目
cd /tmp/XuXuClassMate

# 2. 运行构建脚本
./build-android-apk.sh

# 3. 等待构建完成（约 2-5 分钟）

# 4. 安装到手机
adb install android/app/build/outputs/apk/release/app-release.apk

# 或通过邮件/网盘发送给手机安装
```

### iOS 快速测试

```bash
# 1. 进入项目
cd /tmp/XuXuClassMate

# 2. 运行构建脚本
./build-ios-ipa.sh

# 3. 在 Xcode 中构建
npx cap open ios

# 4. 选择 Product → Run (直接在模拟器测试)
```

---

## 📱 安装包分发

### GitHub Releases（推荐）

1. 访问 https://github.com/XuXuClassMate/XuXuClassMate/releases
2. 创建新 Release
3. 上传 APK 文件
4. 用户从 Release 页面下载

### 直接分享

- **Android**: 通过邮件/微信/QQ 发送 APK 文件
- **iOS**: 通过 TestFlight 邀请
- **鸿蒙**: 通过华为分享

### 应用商店

- **华为应用市场**
- **小米应用商店**
- **OPPO 软件商店**
- **vivo 应用商店**
- **App Store** (需要审核)

---

## 🔧 常见问题

### Q: 构建失败怎么办？

```bash
# 清理缓存
rm -rf node_modules
rm -rf android
rm -rf ios
npm install

# 重新构建
./build-android-apk.sh
```

### Q: APK 太大怎么办？

- 检查图片资源是否压缩
- 移除未使用的依赖
- 启用 ProGuard 代码混淆

### Q: 如何在真机测试？

**Android**:
```bash
# 1. 手机开启 USB 调试
# 2. 连接电脑
adb devices

# 3. 安装
adb install app-release.apk
```

**iOS**:
```bash
# 1. 在 Xcode 中添加设备
# 2. 选择真机运行
# 3. 或导出 IPA 通过 TestFlight 安装
```

### Q: 需要开发者账号吗？

- **Android**: 不需要（可以直接安装 APK）
- **iOS**: 需要（$99/年，用于签名）
- **鸿蒙**: 需要（用于发布到应用市场）

---

## 📊 构建时间参考

| 步骤 | 首次构建 | 后续构建 |
|------|---------|---------|
| 安装依赖 | 2-5 分钟 | - |
| Next.js 构建 | 1-2 分钟 | 1-2 分钟 |
| Capacitor 同步 | 30 秒 | 30 秒 |
| Android 编译 | 3-5 分钟 | 1-2 分钟 |
| **总计** | **6-12 分钟** | **2-4 分钟** |

---

## 🎯 下一步

### 立即执行

```bash
cd /tmp/XuXuClassMate

# 构建 Android APK
./build-android-apk.sh

# 或构建 iOS IPA
./build-ios-ipa.sh
```

### 构建后

1. **测试安装** - 安装到手机测试功能
2. **上传 GitHub** - 创建 Release 分享 APK
3. **收集反馈** - 让朋友测试并提供反馈
4. **迭代更新** - 根据反馈改进

---

## 📝 重要提示

### Android
- ✅ 不需要开发者账号
- ✅ 可以直接安装 APK
- ⚠️ 首次安装需要"允许未知来源"

### iOS
- ⚠️ 需要 Apple Developer 账号（$99/年）
- ⚠️ 需要 macOS 和 Xcode
- ✅ 可以通过 TestFlight 分发（免费测试）

### 鸿蒙
- ⚠️ 需要 DevEco Studio
- ⚠️ 需要华为开发者账号
- ✅ 可以直接安装 HAP

---

## 🔗 相关资源

- [Capacitor 文档](https://capacitorjs.com)
- [Android 开发](https://developer.android.com)
- [iOS 开发](https://developer.apple.com)
- [鸿蒙开发](https://developer.harmonyos.com)

---

**准备就绪！开始构建真正的原生应用！** 🚀

**项目位置**: `/tmp/XuXuClassMate`  
**构建脚本**: `build-android-apk.sh`, `build-ios-ipa.sh`  
**输出**: Android APK / iOS IPA / 鸿蒙 HAP
