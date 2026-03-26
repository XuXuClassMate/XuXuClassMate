#!/bin/bash

# XuXu Portfolio - GitHub Release 自动上传脚本
# 使用方法：./upload-to-github-release.sh

set -e

echo "📤 GitHub Release 自动上传"
echo "=========================="
echo ""

# 配置
GITHUB_USER="XuXuClassMate"
GITHUB_REPO="XuXuClassMate"
APK_PATH="android/app/build/outputs/apk/release/app-release.apk"
VERSION="1.0.0"
RELEASE_TAG="v${VERSION}"
RELEASE_NAME="XuXu Portfolio v${VERSION}"
RELEASE_DESC="🎉 XuXu Portfolio 原生应用正式发布！

## 📱 应用信息
- **应用名称**: XuXu Pro
- **版本**: ${VERSION}
- **包名**: com.xuxuclassmate.portfolio
- **平台**: Android

## ✨ 功能特性
- 🎨 个人作品集展示
- 🌍 国际化支持 (EN/ZH)
- 📱 原生应用体验
- 🚀 流畅动画效果
- 🌙 深色/浅色模式

## 🔧 技术栈
- Next.js 14
- Capacitor
- TypeScript
- Tailwind CSS

## 📥 安装说明
1. 下载 APK 文件
2. 在手机上安装
3. 允许'未知来源'
4. 完成安装

## 📝 更新内容
- 首次发布
- 完整功能实现
- 性能优化

## 🔗 相关链接
- GitHub: https://github.com/${GITHUB_USER}/${GITHUB_REPO}
- 问题反馈: https://github.com/${GITHUB_USER}/${GITHUB_REPO}/issues
"

# 检查 APK 文件
if [ ! -f "$APK_PATH" ]; then
    echo "❌ 错误：找不到 APK 文件"
    echo "位置：$APK_PATH"
    echo ""
    echo "请先运行：./build-android-apk.sh"
    exit 1
fi

# 检查 GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "⚠️  未安装 GitHub CLI，尝试使用 curl 上传..."
    echo ""
    
    # 检查是否有 GitHub Token
    if [ -z "$GITHUB_TOKEN" ]; then
        echo "❌ 错误：未设置 GITHUB_TOKEN"
        echo ""
        echo "请设置环境变量:"
        echo "  export GITHUB_TOKEN=your_token"
        echo ""
        echo "或安装 GitHub CLI:"
        echo "  sudo apt install gh"
        echo "  gh auth login"
        exit 1
    fi
    
    # 使用 curl 创建 Release
    echo "📝 创建 Release..."
    RESPONSE=$(curl -s -X POST \
      -H "Authorization: token $GITHUB_TOKEN" \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/releases \
      -d "{
        \"tag_name\": \"${RELEASE_TAG}\",
        \"name\": \"${RELEASE_NAME}\",
        \"body\": \"${RELEASE_DESC}\",
        \"draft\": false,
        \"prerelease\": false
      }")
    
    UPLOAD_URL=$(echo $RESPONSE | grep -o '"upload_url": "[^"]*' | cut -d'"' -f4 | sed 's/{?name,label}//')
    
    if [ -z "$UPLOAD_URL" ]; then
        echo "❌ 创建 Release 失败"
        echo "响应：$RESPONSE"
        exit 1
    fi
    
    echo "✅ Release 创建成功"
    echo ""
    echo "📤 上传 APK..."
    curl -s -X POST \
      -H "Authorization: token $GITHUB_TOKEN" \
      -H "Accept: application/vnd.github.v3+json" \
      -H "Content-Type: application/vnd.android.package-archive" \
      --data-binary @"$APK_PATH" \
      "${UPLOAD_URL}?name=app-release.apk&label=XuXu-Portfolio-${VERSION}.apk"
    
    echo ""
    echo "✅ APK 上传成功！"
    
else
    # 使用 GitHub CLI
    echo "📝 创建 Release..."
    gh release create ${RELEASE_TAG} \
      --repo ${GITHUB_USER}/${GITHUB_REPO} \
      --title "${RELEASE_NAME}" \
      --notes "${RELEASE_DESC}" \
      ${APK_PATH}#XuXu-Portfolio-${VERSION}.apk
    
    echo ""
    echo "✅ Release 创建并上传成功！"
fi

echo ""
echo "🔗 Release 链接:"
echo "https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/tag/${RELEASE_TAG}"
echo ""
echo "📥 直接下载链接:"
echo "https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/latest/download/app-release.apk"
echo ""
echo "🎉 完成！"
