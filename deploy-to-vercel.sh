#!/bin/bash

# XuXu Pro - 一键部署到 Vercel
# 使用方法：./deploy-to-vercel.sh

set -e

echo "🚀 XuXu Pro - 部署到 Vercel"
echo "============================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查是否已构建
if [ ! -d "out" ]; then
    echo "📦 检测到未构建，先执行构建..."
    npm run build
fi

# 检查 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安装 Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "🔐 登录 Vercel..."
vercel login

echo ""
echo "📤 开始部署..."
vercel --prod

echo ""
echo "✅ 部署完成！"
echo ""
echo "🔗 访问你的网站:"
echo "   vercel --open"
echo ""
echo "📝 绑定域名:"
echo "   1. 访问 https://vercel.com/dashboard"
echo "   2. 选择项目"
echo "   3. Settings → Domains"
echo "   4. 添加 www.xuxuclassmate.com"
echo ""
