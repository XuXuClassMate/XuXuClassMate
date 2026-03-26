#!/bin/bash

# XuXu Portfolio - iOS IPA 构建脚本
# 使用方法：./build-ios-ipa.sh

set -e

echo "🚀 XuXu Portfolio - iOS IPA 构建"
echo "=================================="
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查是否在 macOS 上
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "⚠️  注意：iOS 构建需要在 macOS 上进行"
    echo "   当前系统：$OSTYPE"
    echo ""
fi

# 1. 构建 Next.js 静态网站
echo "📦 步骤 1/3: 构建 Next.js 静态网站..."
npm run build
echo "✅ Next.js 构建完成"
echo ""

# 2. 检查 Capacitor 是否安装
if [ ! -d "node_modules/@capacitor" ]; then
    echo "📦 安装 Capacitor..."
    npm install @capacitor/core @capacitor/cli @capacitor/ios --save-dev
    echo "✅ Capacitor 安装完成"
    echo ""
fi

# 3. 初始化 Capacitor（如果还没初始化）
if [ ! -f "capacitor.config.json" ]; then
    echo "📦 初始化 Capacitor..."
    npx cap init "XuXu Portfolio" com.xuxuclassmate.portfolio --web-dir=out
    echo "✅ Capacitor 初始化完成"
    echo ""
else
    echo "⏭️  Capacitor 已初始化，跳过"
    echo ""
fi

# 4. 添加/同步 iOS 平台
echo "📦 同步 iOS 平台..."
if [ ! -d "ios" ]; then
    npx cap add ios
else
    npx cap sync ios
fi
echo "✅ iOS 平台同步完成"
echo ""

# 5. 打开 Xcode
echo "📱 请打开 Xcode 完成构建:"
echo ""
echo "   npx cap open ios"
echo ""
echo "在 Xcode 中:"
echo "1. 选择项目 (XuXu Portfolio)"
echo "2. 选择签名团队 (Signing & Capabilities → Team)"
echo "3. 选择真机或 'Any iOS Device'"
echo "4. Product → Archive"
echo "5. 在 Organizer 窗口中导出 IPA"
echo ""
echo "📝 需要:"
echo "   - Apple Developer 账号 ($99/年)"
echo "   - 有效的签名证书"
echo "   - Provisioning Profile"
echo ""
