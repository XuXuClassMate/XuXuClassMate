import type { Locale } from "./types";
import { getNotes } from "./notes";

export type HomeLink = { title: string; href: string; external?: boolean };

export type PortfolioHome = {
  greeting: string;
  roles: string[];
  tagline: string;
  description: string;
  ctaWork: string;
  ctaAiTesting: string;
  whatIDoTitle: string;
  whatIDo: HomeLink[];
  achievementsTitle: string;
  achievements: { value: string; label: string }[];
  featuredTitle: string;
  featuredCta: string;
  featured: {
    title: string;
    description: string;
    href: string;
    tags: string[];
  }[];
  stackTitle: string;
  stackLead: string;
  stack: { title: string; items: string[] }[];
  articlesTitle: string;
  articlesCta: string;
  ossTitle: string;
  ossDescription: string;
  ossGithubLabel: string;
  ossOrgLabel: string;
  ossPlaygroundLabel: string;
  connectGithub: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  builtWith: string;
};

const GITHUB = "https://github.com/XuXuClassMate";

const featuredEn = [
  {
    title: "AI Test Case Generator",
    description:
      "AI-powered test case generation for PRDs and multimodal QA inputs — PDF / Word / TXT / image / video in; three-persona review loop; Excel / Markdown / XMind out. Runs via Docker, local source, npm, or OpenClaw plugin.",
    href: "/en/work/testcase-generator.html",
    tags: ["Flagship", "AI Testing", "AI Test Case Generation"],
  },
  {
    title: "Test DB Docker Suite",
    description:
      "Docker database images for developers, QA, ops, and DBAs — Dameng, Highgo, Kingbase, TiDB and more.",
    href: "/en/work/docker-suite.html",
    tags: ["Docker Testing", "Test Infrastructure", "DevOps"],
  },
];

const featuredZh = [
  {
    title: "AI 测试用例生成器",
    description:
      "面向 PRD 与多模态 QA 输入的 AI 用例生成——接入 PDF / Word / TXT / 图片 / 视频，经三角色评审闭环，导出 Excel / Markdown / XMind。支持 Docker、本地源码、npm 与 OpenClaw 插件。",
    href: "/zh/work/testcase-generator.html",
    tags: ["旗舰", "AI Testing", "AI Test Case Generation"],
  },
  {
    title: "测试库 Docker 套件",
    description:
      "即用数据库镜像——达梦、瀚高、人大金仓、TiDB 等，开发 / 测试 / 运维 / DBA 都能用。",
    href: "/zh/work/docker-suite.html",
    tags: ["Docker Testing", "Test Infrastructure", "DevOps"],
  },
];

export function getPortfolioHome(locale: Locale): PortfolioHome {
  const isZh = locale === "zh";

  return {
    greeting: isZh ? "你好，我是旭旭。" : "Hi, I'm XuXu.",
    roles: ["QA Engineer", "SDET", "AI Testing"],
    tagline: isZh ? "可安装的质量工程" : "Installable Quality Engineering",
    description: isZh
      ? "我构建可依赖的测试自动化、AI 驱动的测试工具，以及团队能安装、能运行、能集成的可复用质量基础设施。"
      : "I build reliable test automation, AI-powered testing tools, and reusable quality infrastructure that teams can install, run, and integrate.",
    ctaWork: isZh ? "查看项目" : "View Projects",
    ctaAiTesting: isZh ? "探索 AI Testing" : "Explore AI Testing",
    whatIDoTitle: isZh ? "能力方向" : "What I Do",
    whatIDo: [
      {
        title: "Test Automation",
        href: isZh ? "/zh/playwright.html" : "/en/playwright.html",
      },
      {
        title: "API Testing",
        href: isZh
          ? "/zh/work/automation-framework.html"
          : "/en/work/automation-framework.html",
      },
      {
        title: "Performance Testing",
        href: isZh
          ? "/zh/blog/locust-api-performance-testing.html"
          : "/en/blog/locust-api-performance-testing.html",
      },
      {
        title: "AI Testing",
        href: isZh ? "/zh/ai-testing.html" : "/en/ai-testing.html",
      },
      {
        title: "Test Infrastructure",
        href: isZh ? "/zh/infrastructure.html" : "/en/infrastructure.html",
      },
      {
        title: "E2E Testing",
        href: isZh
          ? "/zh/work/fullstack-e2e.html"
          : "/en/work/fullstack-e2e.html",
      },
    ],
    achievementsTitle: isZh ? "关键成果" : "Key Achievements",
    achievements: [
      {
        value: "80%+",
        label: isZh ? "测试自动化覆盖率" : "Test Automation Coverage",
      },
      {
        value: "500+",
        label: isZh ? "性能测试 QPS" : "Performance Testing QPS",
      },
      {
        value: "40%",
        label: isZh ? "回归时间缩短" : "Regression Time Reduction",
      },
      {
        value: "20–35%",
        label: isZh ? "响应时间改善" : "Response Time Improvement",
      },
    ],
    featuredTitle: isZh ? "质量工程" : "Quality Engineering",
    featuredCta: isZh ? "查看全部项目" : "View all projects",
    featured: isZh ? featuredZh : featuredEn,
    stackTitle: isZh ? "技术栈" : "Technical Stack",
    stackLead: isZh
      ? "能力是方向，技术栈是实现方式——按语言、测试与基础设施分组。"
      : "Capabilities are the lane; the stack is how delivery happens — languages, testing, and infrastructure.",
    stack: isZh
      ? [
          {
            title: "语言",
            items: ["Java", "Python", "TypeScript"],
          },
          {
            title: "测试",
            items: ["Playwright", "Pytest", "JUnit", "RestAssured", "Locust"],
          },
          {
            title: "基础设施",
            items: ["Docker", "CI/CD", "Linux"],
          },
          {
            title: "数据与中间件",
            items: ["MySQL", "Oracle", "Redis", "MQ"],
          },
        ]
      : [
          {
            title: "Languages",
            items: ["Java", "Python", "TypeScript"],
          },
          {
            title: "Testing",
            items: ["Playwright", "Pytest", "JUnit", "RestAssured", "Locust"],
          },
          {
            title: "Infrastructure",
            items: ["Docker", "CI/CD", "Linux"],
          },
          {
            title: "Data",
            items: ["MySQL", "Oracle", "Redis", "MQ"],
          },
        ],
    articlesTitle: isZh ? "最新工程笔记" : "Latest Engineering Notes",
    articlesCta: isZh ? "查看全部" : "View all",
    ossTitle: isZh ? "GitHub / 开源" : "GitHub / Open Source",
    ossDescription: isZh
      ? "XuXuClassMate 个人品牌下的 InnoNestX：AI 工具、QA 工具与基础设施开源。"
      : "InnoNestX under the XuXuClassMate personal brand — open AI tools, QA tools, and infrastructure.",
    ossGithubLabel: isZh ? "打开 GitHub" : "Open GitHub",
    ossOrgLabel: isZh ? "开源页面" : "Open Source page",
    ossPlaygroundLabel: isZh ? "体验台" : "Playground",
    connectGithub: GITHUB,
    lastUpdatedLabel: isZh ? "最近更新" : "Last updated",
    lastUpdated: isZh ? "2026 年 7 月" : "July 2026",
    builtWith: isZh
      ? "基于 Astro 构建 · 部署于 Cloudflare Pages"
      : "Built with Astro · Deployed on Cloudflare Pages",
  };
}

export function getLatestArticles(locale: Locale) {
  return getNotes(locale).slice(0, 3).map((note) => ({
    title: note.title,
    description: note.description,
    href:
      locale === "zh"
        ? `/zh/blog/${note.slug}.html`
        : `/en/blog/${note.slug}.html`,
    tags: note.tags,
  }));
}
