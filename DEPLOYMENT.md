# 🚀 Portfolio Website - 部署指南

**项目**: XuXuClassMate Portfolio  
**分支**: portfolio  
**技术栈**: Next.js 14 + TypeScript + Tailwind CSS + PWA

---

## ✅ 已完成

- [x] Next.js 14 项目初始化
- [x] TypeScript 配置
- [x] Tailwind CSS 样式
- [x] PWA 支持（可安装到手机）
- [x] 国际化（英文/中文）
- [x] 测试主题设计
- [x] 响应式布局
- [x] GitHub 头像集成

---

## 📦 本地文件位置

代码已保存在：
```
/tmp/XuXuClassMate/
```

**分支**: `portfolio`

---

## 🌐 部署到 Vercel

### 方式 1: Vercel CLI（推荐）

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 进入项目目录
cd /tmp/XuXuClassMate

# 4. 部署
vercel

# 5. 生产环境部署
vercel --prod
```

### 方式 2: Vercel 网站

1. 访问 https://vercel.com
2. 登录 GitHub 账号
3. 点击 "Add New Project"
4. 选择 `XuXuClassMate/XuXuClassMate` 仓库
5. 选择分支：`portfolio`
6. Root Directory: 留空（或设置为 `/`）
7. 点击 "Deploy"

---

## 🔗 绑定域名

### 在 Vercel 后台

1. 进入项目 Settings → Domains
2. 添加域名：`www.xuxuclassmate.com`
3. 按照提示配置 DNS：
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com
4. 等待 DNS 生效（通常几分钟到几小时）

### 在域名注册商处

如果是其他平台注册的域名：
- 添加 CNAME 记录指向 Vercel
- 或修改 Nameserver 为 Vercel 的 DNS

---

## 📱 PWA 安装说明

### iOS (Safari)
1. 打开网站
2. 点击底部 "分享" 按钮
3. 选择 "添加到主屏幕"
4. 点击 "添加"

### Android (Chrome)
1. 打开网站
2. 点击右上角菜单 (⋮)
3. 选择 "安装应用" 或 "添加到主屏幕"
4. 点击 "安装"

### 鸿蒙系统
1. 打开浏览器
2. 访问网站
3. 菜单 → 添加到桌面
4. 确认添加

---

## 🌍 国际化

### 默认语言：英语
- 网站默认显示英文

### 切换中文
- 在导航栏点击语言切换按钮
- 或访问 `/zh` 路径

### 添加更多语言
编辑 `src/i18n/` 目录下的语言文件

---

## 🎨 自定义内容

### 修改个人信息

编辑 `src/components/Hero.tsx`:
- 头像：已自动使用 GitHub 头像
- 标题、描述：在 `src/i18n/en.json` 和 `src/i18n/zh.json`

### 添加项目

创建 `src/components/Projects.tsx`:
```tsx
const projects = [
  {
    name: "Trading Assistant",
    description: "...",
    github: "https://github.com/XuXuClassMate/trading-assistant",
    tech: ["Python", "Technical Analysis"]
  }
]
```

### 添加技能

编辑 `src/i18n/en.json` 和 `zh.json` 的 Skills 部分

---

## 🧪 测试元素

已包含的测试主题元素：
- ✅ 代码片段装饰 (`<Test />`)
- ✅ 复选框图标 (✓)
- ✅ 终端样式 (`$ npm test`)
- ✅ 试管图标
- ✅ 技能标签展示

---

## 📊 下一步

### 立即可做
1. **部署到 Vercel** - 5 分钟
2. **绑定域名** - 10 分钟
3. **测试 PWA** - 用手机访问

### 后续优化
1. **添加项目页面** - 展示你的作品
2. **添加博客集成** - 链接飞书文档
3. **添加工作经历** - 时间线展示
4. **添加联系表单** - 使用 Formspree 等

---

## 🐛 故障排除

### 构建失败
```bash
# 清除缓存重新构建
rm -rf .next
npm run build
```

### PWA 不工作
- 确保使用 HTTPS
- 清除浏览器缓存
- 检查 manifest.json 配置

### 域名不生效
- 检查 DNS 配置
- 等待 DNS 传播（最多 48 小时）
- 使用 `nslookup www.xuxuclassmate.com` 检查

---

## 📚 相关资源

- **Next.js 文档**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **PWA 指南**: https://web.dev/progressive-web-apps
- **Vercel 文档**: https://vercel.com/docs

---

## 🎯 快速命令

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 部署到 Vercel
vercel --prod
```

---

**准备就绪！现在可以部署了！** 🚀
