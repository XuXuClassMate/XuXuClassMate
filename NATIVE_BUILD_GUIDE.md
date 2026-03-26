# 📱 XuXu Portfolio - 原生应用构建指南

**应用名称**: XuXu Portfolio  
**包名**: com.xuxuclassmate.portfolio  
**平台**: Android / iOS / 鸿蒙

---

## 🎯 构建真正的安装包

### 方案说明

使用 **Capacitor** 将 Next.js 网站打包成：
- ✅ **Android APK** - 直接安装
- ✅ **iOS IPA** - TestFlight 或直接安装
- ✅ **鸿蒙 HAP** - 鸿蒙系统安装

---

## 📦 构建步骤

### 第 1 步：构建 Next.js 静态网站

```bash
cd /tmp/XuXuClassMate

# 构建静态网站
npm run build

# 生成 out 目录（静态文件）
```

### 第 2 步：同步到 Capacitor

```bash
# 同步 Web 资源到原生项目
npx cap sync
```

### 第 3 步：构建 Android APK

```bash
# 打开 Android Studio
npx cap open android

# 或在命令行构建
cd android
./gradlew assembleRelease
```

**APK 位置**: `android/app/build/outputs/apk/release/app-release.apk`

### 第 4 步：构建 iOS IPA

```bash
# 打开 Xcode
npx cap open ios

# 在 Xcode 中:
# 1. 选择签名团队
# 2. Product → Archive
# 3. 导出 IPA
```

### 第 5 步：构建鸿蒙 HAP

```bash
# 需要 DevEco Studio
# 导入 HarmonyOS 项目
# 构建 → Build Hap(s) / APP(s)
```

---

## 🔧 自动化构建脚本

### Android APK 一键构建

```bash
#!/bin/bash
# build-android.sh

echo "🚀 构建 Android APK..."

# 1. 构建 Next.js
npm run build

# 2. 同步到 Capacitor
npx cap sync

# 3. 进入 Android 目录
cd android

# 4. 构建 Release APK
./gradlew assembleRelease

# 5. 输出位置
echo "✅ APK 生成成功！"
echo "位置：android/app/build/outputs/apk/release/app-release.apk"
```

### iOS IPA 构建

```bash
#!/bin/bash
# build-ios.sh

echo "🚀 构建 iOS IPA..."

# 1. 构建 Next.js
npm run build

# 2. 同步到 Capacitor
npx cap sync

# 3. 打开 Xcode
npx cap open ios

echo "✅ 请在 Xcode 中完成构建:"
echo "1. 选择签名团队"
echo "2. Product → Archive"
echo "3. 导出 IPA"
```

---

## 📱 安装包分发

### Android APK

#### 方式 1: GitHub Releases
```bash
# 上传 APK 到 GitHub Releases
# 用户直接从 GitHub 下载
```

#### 方式 2: 应用商店
- 华为应用市场
- 小米应用商店
- OPPO 软件商店
- vivo 应用商店
- 应用宝

#### 方式 3: 直接分享
- 通过邮件发送 APK
- 通过网盘分享
- 通过二维码下载

### iOS IPA

#### 方式 1: TestFlight（推荐）
1. 上传 IPA 到 App Store Connect
2. 添加测试用户
3. 用户通过 TestFlight 安装

#### 方式 2: Ad Hoc
1. 收集设备 UDID
2. 创建 Ad Hoc 证书
3. 打包 IPA
4. 通过企业证书分发

#### 方式 3: 企业证书
- 购买企业开发者账号（$299/年）
- 打包企业版 IPA
- 直接安装（无需 App Store）

### 鸿蒙 HAP

#### 方式 1: 华为应用市场
- 提交到 AppGallery
- 审核通过后上架

#### 方式 2: 直接分享
- 通过华为分享
- 通过二维码下载

---

## 🎨 应用图标配置

### 准备图标文件

准备以下尺寸的图标：

```
resources/
├── android/
│   ├── mipmap-mdpi/
│   ├── mipmap-hdpi/
│   ├── mipmap-xhdpi/
│   ├── mipmap-xxhdpi/
│   └── mipmap-xxxhdpi/
├── ios/
│   ├── AppIcon-20x20@2x.png
│   ├── AppIcon-20x20@3x.png
│   ├── AppIcon-29x29@2x.png
│   ├── AppIcon-29x29@3x.png
│   ├── AppIcon-40x40@2x.png
│   ├── AppIcon-40x40@3x.png
│   ├── AppIcon-60x60@2x.png
│   └── AppIcon-60x60@3x.png
└── harmony/
    └── app_icon.png
```

### 使用工具生成

```bash
# 安装 capacitor-assets
npm install -g @capacitor/assets

# 生成所有尺寸
npx @capacitor/assets generate --iconSrc ./resources/icon-1024.png
```

---

## 🔐 签名配置

### Android 签名

#### 1. 生成签名密钥

```bash
keytool -genkey -v -keystore xuxu-portfolio.keystore -alias xuxu -keyalg RSA -keysize 2048 -validity 10000
```

#### 2. 配置 gradle.properties

```properties
XUXU_UPLOAD_STORE_FILE=xuxu-portfolio.keystore
XUXU_UPLOAD_KEY_ALIAS=xuxu
XUXU_UPLOAD_STORE_PASSWORD=你的密码
XUXU_UPLOAD_KEY_PASSWORD=你的密码
```

#### 3. 配置 build.gradle

```gradle
android {
    signingConfigs {
        release {
            storeFile file(XUXU_UPLOAD_STORE_FILE)
            storePassword XUXU_UPLOAD_STORE_PASSWORD
            keyAlias XUXU_UPLOAD_KEY_ALIAS
            keyPassword XUXU_UPLOAD_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

### iOS 签名

需要 Apple Developer 账号：

1. 登录 https://developer.apple.com
2. 创建 App ID
3. 创建证书
4. 创建 Provisioning Profile
5. 在 Xcode 中配置

---

## 📊 应用信息

### Android Manifest

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:label="XuXu Portfolio"
        android:icon="@mipmap/ic_launcher">
    </application>
</manifest>
```

### iOS Info.plist

```xml
<key>CFBundleName</key>
<string>XuXu Portfolio</string>
<key>CFBundleDisplayName</key>
<string>XuXu</string>
<key>CFBundleVersion</key>
<string>1.0.0</string>
<key>CFBundleShortVersionString</key>
<string>1.0</string>
```

---

## 🚀 快速构建命令

### 一键构建所有平台

```bash
#!/bin/bash
# build-all.sh

echo "🚀 构建所有平台..."

# 1. 构建 Next.js
npm run build

# 2. 同步到 Capacitor
npx cap sync

# 3. 构建 Android
cd android
./gradlew assembleRelease
cd ..

# 4. 提示 iOS 构建
echo "✅ Android APK 构建完成！"
echo "📱 iOS 构建请打开 Xcode: npx cap open ios"

# 输出位置
echo ""
echo "📦 安装包位置:"
echo "Android: android/app/build/outputs/apk/release/app-release.apk"
echo "iOS: 请在 Xcode 中导出"
```

---

## 📱 安装包大小优化

### 优化建议

1. **代码分割** - Next.js 自动处理
2. **图片压缩** - 使用 WebP 格式
3. **移除未用依赖** - 定期清理
4. **启用 ProGuard** - Android 代码混淆
5. **Bitcode** - iOS 优化

### 目标大小

- **Android APK**: < 50MB
- **iOS IPA**: < 100MB
- **鸿蒙 HAP**: < 50MB

---

## 🧪 测试

### Android 测试

```bash
# 安装到模拟器
adb install app-release.apk

# 安装到真机
adb install -r app-release.apk
```

### iOS 测试

```bash
# 使用 Xcode 直接运行到模拟器或真机
```

### 鸿蒙测试

```bash
# 使用 DevEco Studio 运行到模拟器或真机
```

---

## 📝 分发清单

### Android
- [ ] APK 文件
- [ ] 应用截图
- [ ] 应用描述
- [ ] 隐私政策
- [ ] 下载页面

### iOS
- [ ] IPA 文件
- [ ] TestFlight 配置
- [ ] 应用截图
- [ ] 应用描述
- [ ] 隐私政策

### 鸿蒙
- [ ] HAP 文件
- [ ] 应用截图
- [ ] 应用描述
- [ ] 隐私政策

---

## 🎯 下一步

1. **构建 Next.js** - `npm run build`
2. **同步 Capacitor** - `npx cap sync`
3. **构建 Android** - `cd android && ./gradlew assembleRelease`
4. **构建 iOS** - `npx cap open ios`
5. **测试安装** - 安装到手机测试
6. **分发** - 上传到 GitHub 或应用商店

---

## 🔗 相关资源

- [Capacitor 文档](https://capacitorjs.com)
- [Android 构建](https://developer.android.com/studio/build)
- [iOS 构建](https://developer.apple.com/documentation/xcode)
- [鸿蒙开发](https://developer.harmonyos.com)

---

**准备就绪！开始构建真正的原生应用！** 🚀
