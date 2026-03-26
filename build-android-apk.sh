#!/bin/bash

# XuXu Pro - Android APK 构建脚本
# 使用方法：./build-android-apk.sh

set -e

echo "🚀 XuXu Pro - Android APK 构建"
echo "=============================="
echo ""

PROJECT_DIR="/tmp/XuXuClassMate"
ANDROID_DIR="$PROJECT_DIR/android"
APK_OUTPUT="$ANDROID_DIR/app/build/outputs/apk"

cd "$ANDROID_DIR"

# 检查是否有 gradle
if command -v gradle &> /dev/null; then
    echo "✅ 使用系统 Gradle"
    gradle assembleDebug
elif [ -f "gradlew" ]; then
    echo "✅ 使用 Gradle Wrapper"
    chmod +x gradlew
    ./gradlew assembleDebug
else
    echo "⚠️  Gradle 未找到，尝试使用 Docker 构建..."
    
    # 使用 Docker 构建
    docker run --rm -v "$ANDROID_DIR:/app" -w /app gradle:8.0 gradle assembleDebug
fi

# 检查 APK 是否生成
if [ -f "$APK_OUTPUT/debug/app-debug.apk" ]; then
    echo ""
    echo "✅ APK 构建成功！"
    echo ""
    echo "📦 APK 位置：$APK_OUTPUT/debug/app-debug.apk"
    echo ""
    
    # 复制到项目根目录
    cp "$APK_OUTPUT/debug/app-debug.apk" "$PROJECT_DIR/XuXuPro-v1.0.0.apk"
    
    echo "📁 已复制到：$PROJECT_DIR/XuXuPro-v1.0.0.apk"
    echo ""
    
    # 显示文件大小
    ls -lh "$PROJECT_DIR/XuXuPro-v1.0.0.apk"
    
    echo ""
    echo "🎉 完成！"
else
    echo ""
    echo "❌ APK 构建失败"
    echo ""
    echo "请检查："
    echo "1. Android SDK 是否已安装"
    echo "2. 环境变量 ANDROID_HOME 是否设置"
    echo "3. 是否安装了 build-tools"
    echo ""
    exit 1
fi
