#!/bin/bash

# XuXu Portfolio - 生成 Android 签名密钥脚本
# 使用方法：./generate-keystore.sh

set -e

echo "🔐 生成 Android 签名密钥"
echo "========================"
echo ""

# 配置
KEYSTORE_NAME="xuxu-pro.keystore"
KEY_ALIAS="xuxu-pro"
KEY_PASSWORD="xuxu2026"
STORE_PASSWORD="xuxu2026"
VALIDITY_DAYS=10000

# 检查 keytool
if ! command -v keytool &> /dev/null; then
    echo "❌ 错误：找不到 keytool"
    echo ""
    echo "请安装 JDK:"
    echo "  Ubuntu/Debian: sudo apt install openjdk-17-jdk"
    echo "  macOS: brew install openjdk@17"
    echo "  Windows: 下载 JDK 并配置 PATH"
    exit 1
fi

# 生成密钥
echo "🔑 生成密钥库..."
keytool -genkey -v \
  -keystore $KEYSTORE_NAME \
  -alias $KEY_ALIAS \
  -keyalg RSA \
  -keysize 2048 \
  -validity $VALIDITY_DAYS \
  -dname "CN=XuXu, OU=Portfolio, O=XuXuClassMate, L=Beijing, ST=Beijing, C=CN" \
  -storepass $STORE_PASSWORD \
  -keypass $KEY_PASSWORD

echo ""
echo "✅ 密钥库生成成功！"
echo ""
echo "📁 文件位置: $KEYSTORE_NAME"
echo "🔑 密钥别名：$KEY_ALIAS"
echo "🔒 密钥密码：$KEY_PASSWORD"
echo "🔒 仓库密码：$STORE_PASSWORD"
echo ""
echo "⚠️  重要提示:"
echo "1. 备份密钥库文件到安全位置"
echo "2. 不要将密钥库提交到 Git"
echo "3. 记住密码，丢失后无法恢复"
echo ""
echo "📝 下一步:"
echo "1. 将密钥库文件复制到 android/app/"
echo "2. 配置 android/gradle.properties"
echo "3. 配置 android/app/build.gradle"
echo ""
