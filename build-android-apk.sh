#!/bin/bash

# XuXu Portfolio - Android APK 一键构建脚本
# 使用方法：./build-android-apk.sh

set -e

echo "🚀 XuXu Portfolio - Android APK 构建"
echo "======================================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 1. 构建 Next.js 静态网站
echo "📦 步骤 1/4: 构建 Next.js 静态网站..."
npm run build
echo "✅ Next.js 构建完成"
echo ""

# 2. 检查 Capacitor 是否安装
if [ ! -d "node_modules/@capacitor" ]; then
    echo "📦 步骤 2/4: 安装 Capacitor..."
    npm install @capacitor/core @capacitor/cli @capacitor/android --save-dev
    echo "✅ Capacitor 安装完成"
    echo ""
fi

# 3. 初始化 Capacitor（如果还没初始化）
if [ ! -f "capacitor.config.json" ]; then
    echo "📦 步骤 3/4: 初始化 Capacitor..."
    npx cap init "XuXu Portfolio" com.xuxuclassmate.portfolio --web-dir=out
    echo "✅ Capacitor 初始化完成"
    echo ""
else
    echo "⏭️  Capacitor 已初始化，跳过"
    echo ""
fi

# 4. 添加/同步 Android 平台
echo "📦 步骤 4/4: 同步 Android 平台..."
if [ ! -d "android" ]; then
    npx cap add android
else
    npx cap sync android
fi
echo "✅ Android 平台同步完成"
echo ""

# 5. 构建 APK
echo "🔨 开始构建 Android APK..."
cd android

# 检查是否有 gradlew
if [ ! -f "gradlew" ]; then
    echo "❌ 错误：找不到 gradlew"
    exit 1
fi

# 赋予执行权限
chmod +x gradlew

# 构建 Release APK
./gradlew assembleRelease

cd ..

# 6. 检查输出
echo ""
if [ -f "android/app/build/outputs/apk/release/app-release.apk" ]; then
    echo "✅ Android APK 构建成功！"
    echo ""
    echo "📱 APK 位置:"
    echo "   android/app/build/outputs/apk/release/app-release.apk"
    echo ""
    echo "📤 安装到手机:"
    echo "   adb install android/app/build/outputs/apk/release/app-release.apk"
    echo ""
    echo "📊 APK 大小:"
    ls -lh android/app/build/outputs/apk/release/app-release.apk
    echo ""
    echo "🎉 完成！"
else
    echo "❌ 构建失败！"
    exit 1
fi
