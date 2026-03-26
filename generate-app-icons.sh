#!/bin/bash

# XuXu Pro - 应用图标生成脚本
# 使用方法：./generate-app-icons.sh

set -e

echo "🎨 生成 XuXu Pro 应用图标"
echo "========================"
echo ""

# 配置
ICON_SIZE=1024
OUTPUT_DIR="resources/icons"
ICON_FILE="${OUTPUT_DIR}/icon-${ICON_SIZE}x${ICON_SIZE}.png"

# 创建输出目录
mkdir -p ${OUTPUT_DIR}/android/mipmap-mdpi
mkdir -p ${OUTPUT_DIR}/android/mipmap-hdpi
mkdir -p ${OUTPUT_DIR}/android/mipmap-xhdpi
mkdir -p ${OUTPUT_DIR}/android/mipmap-xxhdpi
mkdir -p ${OUTPUT_DIR}/android/mipmap-xxxhdpi
mkdir -p ${OUTPUT_DIR}/ios
mkdir -p ${OUTPUT_DIR}/harmony

echo "📁 输出目录：${OUTPUT_DIR}"
echo ""

# 检查是否有源图标
if [ ! -f "${ICON_FILE}" ]; then
    echo "❌ 错误：找不到源图标文件"
    echo "位置：${ICON_FILE}"
    echo ""
    echo "请准备一个 1024x1024 的 PNG 图标文件"
    echo "可以使用设计工具创建，或参考 APP_NAME_DESIGN.md 中的设计方案"
    echo ""
    echo "🎨 设计建议:"
    echo "- 尺寸：1024x1024 像素"
    echo "- 格式：PNG (透明背景)"
    echo "- 风格：简洁、现代"
    echo "- 颜色：科技蓝 (#2563EB) + 测试绿 (#10B981)"
    echo "- 元素：XuXu 字母 + 对勾符号"
    exit 1
fi

# 检查是否安装了 ImageMagick
if ! command -v convert &> /dev/null; then
    echo "⚠️  未安装 ImageMagick，尝试使用其他方法..."
    echo ""
    echo "请安装 ImageMagick:"
    echo "  Ubuntu/Debian: sudo apt install imagemagick"
    echo "  macOS: brew install imagemagick"
    echo "  Windows: 下载 ImageMagick 安装包"
    exit 1
fi

echo "🔄 生成 Android 图标..."

# Android 图标
convert ${ICON_FILE} -resize 48x48 ${OUTPUT_DIR}/android/mipmap-mdpi/ic_launcher.png
convert ${ICON_FILE} -resize 72x72 ${OUTPUT_DIR}/android/mipmap-hdpi/ic_launcher.png
convert ${ICON_FILE} -resize 96x96 ${OUTPUT_DIR}/android/mipmap-xhdpi/ic_launcher.png
convert ${ICON_FILE} -resize 144x144 ${OUTPUT_DIR}/android/mipmap-xxhdpi/ic_launcher.png
convert ${ICON_FILE} -resize 192x192 ${OUTPUT_DIR}/android/mipmap-xxxhdpi/ic_launcher.png

echo "✅ Android 图标生成完成"
echo ""

echo "🔄 生成 iOS 图标..."

# iOS 图标
convert ${ICON_FILE} -resize 20x20 ${OUTPUT_DIR}/ios/AppIcon-20x20@1x.png
convert ${ICON_FILE} -resize 40x40 ${OUTPUT_DIR}/ios/AppIcon-20x20@2x.png
convert ${ICON_FILE} -resize 60x60 ${OUTPUT_DIR}/ios/AppIcon-20x20@3x.png
convert ${ICON_FILE} -resize 29x29 ${OUTPUT_DIR}/ios/AppIcon-29x29@1x.png
convert ${ICON_FILE} -resize 58x58 ${OUTPUT_DIR}/ios/AppIcon-29x29@2x.png
convert ${ICON_FILE} -resize 87x87 ${OUTPUT_DIR}/ios/AppIcon-29x29@3x.png
convert ${ICON_FILE} -resize 40x40 ${OUTPUT_DIR}/ios/AppIcon-40x40@1x.png
convert ${ICON_FILE} -resize 80x80 ${OUTPUT_DIR}/ios/AppIcon-40x40@2x.png
convert ${ICON_FILE} -resize 120x120 ${OUTPUT_DIR}/ios/AppIcon-40x40@3x.png
convert ${ICON_FILE} -resize 60x60 ${OUTPUT_DIR}/ios/AppIcon-60x60@2x.png
convert ${ICON_FILE} -resize 180x180 ${OUTPUT_DIR}/ios/AppIcon-60x60@3x.png
convert ${ICON_FILE} -resize 1024x1024 ${OUTPUT_DIR}/ios/AppIcon-1024x1024.png

echo "✅ iOS 图标生成完成"
echo ""

echo "🎉 所有图标生成完成！"
echo ""
echo "📁 图标位置:"
echo "  Android: ${OUTPUT_DIR}/android/"
echo "  iOS: ${OUTPUT_DIR}/ios/"
echo ""
echo "📝 下一步:"
echo "1. 复制 Android 图标到 android/app/src/main/res/mipmap-*/"
echo "2. 复制 iOS 图标到 ios/App/App/Assets.xcassets/AppIcon.appiconset/"
echo "3. 运行 npx cap sync 同步"
echo ""
