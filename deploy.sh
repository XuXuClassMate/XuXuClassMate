#!/bin/bash

# XuXuClassMate Portfolio - 快速部署脚本
# 使用方法：./deploy.sh

set -e

echo "🚀 XuXuClassMate Portfolio - 部署脚本"
echo "======================================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查 Git 状态
echo "📦 检查 Git 状态..."
git status

# 询问是否推送
read -p "🤔 是否推送到 GitHub? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📤 推送到 GitHub portfolio 分支..."
    git push origin portfolio
    echo "✅ 推送完成！"
else
    echo "⏭️  跳过推送"
fi

echo ""
echo "🔧 安装依赖..."
npm install

echo ""
echo "🏗️  构建项目..."
npm run build

echo ""
echo "✅ 构建完成！"
echo ""
echo "📋 下一步："
echo "1. 访问 https://vercel.com"
echo "2. 登录 GitHub 账号"
echo "3. 点击 'Add New Project'"
echo "4. 选择 XuXuClassMate/XuXuClassMate"
echo "5. 分支选择：portfolio"
echo "6. 点击 'Deploy'"
echo ""
echo "或者使用 Vercel CLI:"
echo "  vercel --prod"
echo ""
echo "🎉 部署完成！"
