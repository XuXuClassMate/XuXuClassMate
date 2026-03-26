# 📱 XuXu Pro - 原生功能配置指南

**应用名称**: XuXu Pro  
**包名**: com.xuxuclassmate.portfolio  
**版本**: 1.0.0

---

## ✅ 已配置的原生功能

### 1. 通知功能 (Notifications) ⭐

#### 功能说明
- ✅ 推送通知支持
- ✅ 徽章计数
- ✅ 提示音
- ✅ 弹窗提醒

#### 使用方法

```typescript
import { Notifications } from '@capacitor/notifications';

// 请求权限
const status = await Notifications.requestPermissions();

// 发送本地通知
await Notifications.schedule({
  notifications: [{
    title: '欢迎使用 XuXu Pro',
    body: '这是你的专业作品集应用',
    id: 'welcome',
    sound: 'notification.wav',
    actionTypeId: 'open_app',
    extra: { url: 'https://xuxuclassmate.com' }
  }]
});

// 取消通知
await Notifications.cancel({ notifications: [{ id: 'welcome' }] });
```

#### 权限配置

**AndroidManifest.xml**:
```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

---

### 2. 地理位置 (Geolocation) ⭐

#### 功能说明
- ✅ GPS 定位
- ✅ 网络定位
- ✅ 精度显示
- ✅ 权限管理

#### 使用方法

```typescript
import { Geolocation } from '@capacitor/geolocation';

// 获取当前位置
const position = await Geolocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
});

console.log('纬度:', position.coords.latitude);
console.log('经度:', position.coords.longitude);
console.log('精度:', position.coords.accuracy);

// 监听位置变化
const watchId = Geolocation.watchPosition({}, (position, err) => {
  if (position) {
    console.log('新位置:', position.coords);
  }
});

// 停止监听
Geolocation.clearWatch({ id: watchId });
```

#### 权限配置

**AndroidManifest.xml**:
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

**iOS Info.plist**:
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>需要您的位置信息来展示附近的项目</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>需要您的位置信息来提供个性化内容</string>
```

---

## 🔧 安装原生插件

### 自动安装脚本

```bash
#!/bin/bash
# install-native-plugins.sh

echo "📦 安装原生插件..."

# 通知插件
npm install @capacitor/local-notifications
npm install @capacitor/push-notifications

# 地理位置插件
npm install @capacitor/geolocation

# 其他实用插件
npm install @capacitor/camera        # 相机
npm install @capacitor/filesystem    # 文件系统
npm install @capacitor/share         # 分享功能
npm install @capacitor/app           # 应用生命周期

# 同步到原生项目
npx cap sync

echo "✅ 插件安装完成！"
```

### 手动安装

```bash
# 通知
npm install @capacitor/local-notifications
npx cap sync

# 地理位置
npm install @capacitor/geolocation
npx cap sync
```

---

## 📝 权限请求代码示例

### 完整示例组件

```typescript
// src/components/NativeFeatures.tsx
'use client'

import { useState } from 'react'
import { Notifications } from '@capacitor/notifications'
import { Geolocation } from '@capacitor/geolocation'
import { Camera } from '@capacitor/camera'

export default function NativeFeatures() {
  const [location, setLocation] = useState<any>(null)
  const [notificationSent, setNotificationSent] = useState(false)

  // 请求通知权限
  const requestNotificationPermission = async () => {
    const status = await Notifications.requestPermissions()
    console.log('通知权限:', status)
    return status
  }

  // 发送通知
  const sendNotification = async () => {
    await Notifications.schedule({
      notifications: [{
        title: 'XuXu Pro',
        body: '欢迎使用我的作品集应用！',
        id: 'welcome-notification',
        sound: 'notification.wav',
      }]
    })
    setNotificationSent(true)
  }

  // 获取位置
  const getLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      })
      setLocation(position.coords)
    } catch (error) {
      console.error('获取位置失败:', error)
    }
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">原生功能测试</h2>
      
      {/* 通知 */}
      <div className="space-y-2">
        <button
          onClick={requestNotificationPermission}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          请求通知权限
        </button>
        
        <button
          onClick={sendNotification}
          className="px-4 py-2 bg-green-600 text-white rounded"
          disabled={!notificationSent}
        >
          发送测试通知
        </button>
      </div>

      {/* 地理位置 */}
      <div className="space-y-2">
        <button
          onClick={getLocation}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          获取当前位置
        </button>
        
        {location && (
          <div className="p-4 bg-slate-100 rounded">
            <p>纬度：{location.latitude}</p>
            <p>经度：{location.longitude}</p>
            <p>精度：{location.accuracy} 米</p>
          </div>
        )}
      </div>
    </div>
  )
}
```

---

## 🔐 权限说明文档

### Android 权限列表

```xml
<!-- 通知 -->
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

<!-- 地理位置 -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

<!-- 相机 (可选) -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- 存储 (可选) -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<!-- 网络 -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

### iOS 权限说明

```xml
<!-- Info.plist -->

<!-- 位置 -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>需要位置信息展示附近项目</string>

<!-- 通知 -->
<key>NSUserNotificationUsageDescription</key>
<string>发送重要通知给你</string>

<!-- 相机 -->
<key>NSCameraUsageDescription</key>
<string>需要相机拍摄照片</string>
```

---

## 🧪 测试原生功能

### 测试清单

- [ ] 通知权限请求
- [ ] 发送本地通知
- [ ] 获取地理位置
- [ ] 位置更新监听
- [ ] 相机拍照
- [ ] 文件读写
- [ ] 分享功能

### Android 测试

```bash
# 安装应用
adb install android/app/build/outputs/apk/release/app-release.apk

# 查看日志
adb logcat | grep -i capacitor

# 测试权限
adb shell pm list permissions | grep com.xuxuclassmate.portfolio
```

### iOS 测试

```bash
# 打开 Xcode
npx cap open ios

# 在 Xcode 中运行到模拟器或真机
# 查看控制台日志
```

---

## 📊 应用信息配置

### Android (android/app/src/main/res/values/strings.xml)

```xml
<resources>
    <string name="app_name">XuXu Pro</string>
    <string name="title_activity_main">XuXu Portfolio</string>
    <string name="package_name">com.xuxuclassmate.portfolio</string>
</resources>
```

### iOS (ios/App/App/Info.plist)

```xml
<key>CFBundleName</key>
<string>XuXu Pro</string>
<key>CFBundleDisplayName</key>
<string>XuXu Pro</string>
<key>CFBundleVersion</key>
<string>1</string>
<key>CFBundleShortVersionString</key>
<string>1.0.0</string>
```

---

## 🚀 完整构建流程

### 1. 安装插件

```bash
npm install @capacitor/local-notifications @capacitor/geolocation
npx cap sync
```

### 2. 构建应用

```bash
./build-android-apk.sh
```

### 3. 测试功能

```bash
# 安装到手机
adb install android/app/build/outputs/apk/release/app-release.apk

# 打开应用，测试通知和定位功能
```

### 4. 上传 Release

```bash
./upload-to-github-release.sh
```

---

## 📝 注意事项

### 隐私政策

如果使用了地理位置等敏感权限，需要：

1. 创建隐私政策页面
2. 说明数据收集和使用方式
3. 在应用商店提交时提供隐私政策链接

### 用户同意

- 首次启动时请求权限
- 说明为什么需要这些权限
- 允许用户拒绝

### 最佳实践

- 只在需要时请求权限
- 提供清晰的权限说明
- 优雅处理权限拒绝
- 提供替代方案

---

## 🔗 相关资源

- [Capacitor Notifications](https://capacitorjs.com/docs/guides/local-notifications)
- [Capacitor Geolocation](https://capacitorjs.com/docs/apis/geolocation)
- [Android 权限指南](https://developer.android.com/guide/topics/permissions/overview)
- [iOS 权限指南](https://developer.apple.com/documentation/uikit/protecting_user_privacy)

---

**配置完成！开始测试原生功能！** 🚀
