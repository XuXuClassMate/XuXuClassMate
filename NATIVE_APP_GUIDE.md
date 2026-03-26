# 📱 XuXu Portfolio - 原生应用构建指南

**应用名称**: XuXu Portfolio  
**包名**: com.xuxuclassmate.portfolio  
**版本**: 1.0.0  
**平台**: Android / iOS / 鸿蒙

---

## 🎯 构建真正的安装包

### 方案说明

使用 **Capacitor** 将 Next.js 网站打包成：
- ✅ **Android APK** - 直接安装到安卓手机
- ✅ **iOS IPA** - TestFlight 或直接安装
- ✅ **鸿蒙 HAP** - 鸿蒙系统安装

---

## 📦 快速构建（一键打包）

### Android APK

```bash
cd /tmp/XuXuClassMate

# 1. 安装 Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android --save-dev
npm install @capacitor/ios --save-dev

# 2. 初始化 Capacitor
npx cap init

# 3. 构建 Next.js 静态网站
npm run build

# 4. 添加 Android 平台
npx cap add android

# 5. 同步代码
npx cap sync

# 6. 打开 Android Studio 构建
npx cap open android

# 或在命令行直接构建
cd android
./gradlew assembleRelease
```

**APK 输出位置**: 
```
android/app/build/outputs/apk/release/app-release.apk
```

### iOS IPA

```bash
# 1. 添加 iOS 平台
npx cap add ios

# 2. 同步代码
npx cap sync

# 3. 打开 Xcode
npx cap open ios

# 4. 在 Xcode 中:
#    - 选择签名团队
#    - Product → Archive
#    - 导出 IPA
```

### 鸿蒙 HAP

```bash
# 需要使用 DevEco Studio
# 1. 导入 HarmonyOS 项目
# 2. 构建 → Build Hap(s) / APP(s)
```

---

## 🤖 自动化构建脚本

### build-android.sh

```bash
#!/bin/bash

echo "🚀 开始构建 Android APK..."

# 1. 构建 Next.js 静态网站
echo "📦 构建 Next.js..."
npm run build

# 2. 同步到 Capacitor
echo "🔄 同步到 Capacitor..."
npx cap sync android

# 3. 进入 Android 目录
cd android

# 4. 构建 Release APK
echo "🔨 构建 APK..."
./gradlew assembleRelease

# 5. 检查输出
if [ -f "app/build/outputs/apk/release/app-release.apk" ]; then
    echo ""
    echo "✅ Android APK 构建成功！"
    echo "📱 位置：android/app/build/outputs/apk/release/app-release.apk"
    echo ""
    echo "📤 安装到手机:"
    echo "   adb install app/build/outputs/apk/release/app-release.apk"
else
    echo "❌ 构建失败！"
    exit 1
fi
```

### build-ios.sh

```bash
#!/bin/bash

echo "🚀 开始构建 iOS IPA..."

# 1. 构建 Next.js
npm run build

# 2. 同步到 Capacitor
npx cap sync ios

# 3. 打开 Xcode
echo "📱 请打开 Xcode 完成构建:"
echo "   npx cap open ios"
echo ""
echo "在 Xcode 中:"
echo "1. 选择签名团队 (Team)"
echo "2. Product → Archive"
echo "3. 导出 IPA"
```

### build-all.sh

```bash
#!/bin/bash

echo "🚀 构建所有平台..."

# 1. 构建 Next.js
npm run build

# 2. 同步所有平台
npx cap sync

echo ""
echo "✅ 同步完成！"
echo ""
echo "📦 下一步:"
echo ""
echo "Android:"
echo "  cd android && ./gradlew assembleRelease"
echo "  输出：android/app/build/outputs/apk/release/app-release.apk"
echo ""
echo "iOS:"
echo "  npx cap open ios"
echo "  然后在 Xcode 中 Product → Archive"
echo ""
```

---

## 📱 安装包分发方式

### Android APK

#### 方式 1: GitHub Releases（推荐）
```bash
# 1. 上传 APK 到 GitHub Releases
# 2. 用户从 GitHub 下载
# 3. 直接安装
```

#### 方式 2: 应用商店
- 华为应用市场
- 小米应用商店
- OPPO 软件商店
- vivo 应用商店
- 应用宝

#### 方式 3: 直接分享
- 邮件发送 APK
- 网盘分享链接
- 二维码下载

### iOS IPA

#### 方式 1: TestFlight（推荐）
1. 上传 IPA 到 App Store Connect
2. 添加测试用户
3. 用户通过 TestFlight App 安装

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

## 🎨 应用图标和启动图

### 准备图标

需要以下尺寸的图标：

```
resources/
├── android/
│   ├── mipmap-mdpi/ (48x48)
│   ├── mipmap-hdpi/ (72x72)
│   ├── mipmap-xhdpi/ (96x96)
│   ├── mipmap-xxhdpi/ (144x144)
│   └── mipmap-xxxhdpi/ (192x192)
├── ios/
│   ├── AppIcon-20x20@2x.png
│   ├── AppIcon-20x20@3x.png
│   ├── AppIcon-29x29@2x.png
│   ├── AppIcon-29x29@3x.png
│   ├── AppIcon-40x40@2x.png
│   ├── AppIcon-40x40@3x.png
│   ├── AppIcon-60x60@2x.png
│   └── AppIcon-60x60@3x.png
└── icon-1024.png (源文件)
```

### 自动生成工具

```bash
# 安装工具
npm install -g @capacitor/assets

# 生成所有尺寸
npx @capacitor/assets generate --iconSrc ./resources/icon-1024.png
```

---

## 🔐 签名配置

### Android 签名

#### 1. 生成签名密钥

```bash
keytool -genkey -v \
  -keystore xuxu-portfolio.keystore \
  -alias xuxu \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

#### 2. 配置 gradle.properties

```properties
XUXU_UPLOAD_STORE_FILE=xuxu-portfolio.keystore
XUXU_UPLOAD_KEY_ALIAS=xuxu
XUXU_UPLOAD_STORE_PASSWORD=你的密码
XUXU_UPLOAD_KEY_PASSWORD=你的密码
```

#### 3. 配置 android/app/build.gradle

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
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### iOS 签名

需要 Apple Developer 账号（$99/年）：

1. 登录 https://developer.apple.com
2. 创建 App ID
3. 创建证书（Certificate）
4. 创建 Provisioning Profile
5. 在 Xcode 中配置签名

---

## 📊 应用配置

### AndroidManifest.xml

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:label="XuXu Portfolio"
        android:icon="@mipmap/ic_launcher"
        android:theme="@style/AppTheme">
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
<string>1</string>
<key>CFBundleShortVersionString</key>
<string>1.0.0</string>
```

---

## 🧪 测试安装

### Android

```bash
# 通过 ADB 安装到真机
adb install android/app/build/outputs/apk/release/app-release.apk

# 或安装到模拟器
adb install -r android/app/build/outputs/apk/release/app-release.apk
```

### iOS

```bash
# 使用 Xcode 直接运行到模拟器
# 或通过 TestFlight 安装到真机
```

### 鸿蒙

```bash
# 使用 DevEco Studio 运行到模拟器或真机
```

---

## 📦 安装包大小优化

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

## 🚀 完整构建流程

### 第一次构建

```bash
# 1. 克隆项目
cd /tmp/XuXuClassMate

# 2. 安装依赖
npm install

# 3. 安装 Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios --save-dev

# 4. 初始化 Capacitor
npx cap init "XuXu Portfolio" com.xuxuclassmate.portfolio

# 5. 构建 Next.js
npm run build

# 6. 添加平台
npx cap add android
npx cap add ios

# 7. 同步
npx cap sync

# 8. 构建 APK
cd android
./gradlew assembleRelease
```

### 后续更新

```bash
# 1. 修改代码
# 2. 构建 Next.js
npm run build

# 3. 同步到原生
npx cap sync

# 4. 重新构建
cd android && ./gradlew assembleRelease
```

---

## 📝 分发清单

### Android
- [ ] APK 文件
- [ ] 应用图标（512x512）
- [ ] 应用截图（至少 2 张）
- [ ] 应用描述
- [ ] 隐私政策链接

### iOS
- [ ] IPA 文件
- [ ] TestFlight 配置
- [ ] 应用图标（1024x1024）
- [ ] 应用截图（6.5 寸和 5.5 寸）
- [ ] 应用描述
- [ ] 隐私政策链接

### 鸿蒙
- [ ] HAP 文件
- [ ] 应用图标
- [ ] 应用截图
- [ ] 应用描述
- [ ] 隐私政策链接

---

## 🎯 下一步

### 立即执行

1. **安装 Capacitor**
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios --save-dev
   ```

2. **初始化 Capacitor**
   ```bash
   npx cap init
   ```

3. **构建 Next.js**
   ```bash
   npm run build
   ```

4. **添加 Android 平台**
   ```bash
   npx cap add android
   ```

5. **同步代码**
   ```bash
   npx cap sync
   ```

6. **构建 APK**
   ```bash
   cd android && ./gradlew assembleRelease
   ```

### 输出

- **Android APK**: `android/app/build/outputs/apk/release/app-release.apk`
- **iOS IPA**: 通过 Xcode 导出
- **鸿蒙 HAP**: 通过 DevEco Studio 构建

---

## 🔗 相关资源

- [Capacitor 官方文档](https://capacitorjs.com)
- [Android 构建指南](https://developer.android.com/studio/build)
- [iOS 构建指南](https://developer.apple.com/documentation/xcode)
- [鸿蒙开发文档](https://developer.harmonyos.com)

---

**准备就绪！开始构建真正的原生应用！** 🚀

**项目位置**: `/tmp/XuXuClassMate`  
**分支**: `portfolio`  
**包名**: `com.xuxuclassmate.portfolio`
