import type { Locale } from "./types";
import { getNotes } from "./notes";

export type HomeLink = { title: string; href: string; external?: boolean };

export type PortfolioHome = {
  greeting: string;
  roles: string[];
  tagline: string;
  description: string;
  ctaWork: string;
  ctaDemo: string;
  ctaDemoHref: string;
  ctaGithub: string;
  whatIDoTitle: string;
  whatIDo: HomeLink[];
  achievementsTitle: string;
  achievements: { value: string; label: string }[];
  featuredTitle: string;
  featuredCta: string;
  featured: {
    title: string;
    pitch?: string;
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
};

const GITHUB = "https://github.com/XuXuClassMate";

const featuredEn = [
  {
    title: "AI Test Case Generator",
    pitch: "From requirements to reviewable test cases.",
    description:
      "PDF / Word / TXT / Image / Video → AI → Test Cases → Human Review → Excel / Markdown / XMind. Runs via Docker, local source, npm, or OpenClaw plugin.",
    href: "/en/work/testcase-generator.html",
    tags: ["Flagship", "AI Testing", "Live Demo"],
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
    pitch: "从需求到可评审的测试用例。",
    description:
      "PDF / Word / TXT / 图片 / 视频 → AI → 用例 → 人工评审 → Excel / Markdown / XMind。支持 Docker、本地源码、npm 与 OpenClaw 插件。",
    href: "/zh/work/testcase-generator.html",
    tags: ["旗舰", "AI Testing", "在线 Demo"],
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
    ctaDemo: isZh ? "试用 AI 用例生成器" : "Try AI Test Case Generator",
    ctaDemoHref: isZh
      ? "/zh/demo/ai-testcase-generator.html"
      : "/en/demo/ai-testcase-generator.html",
    ctaGithub: "GitHub",
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
        title: "E2E Testing",
        href: isZh
          ? "/zh/work/fullstack-e2e.html"
          : "/en/work/fullstack-e2e.html",
      },
      {
        title: "Test Infrastructure",
        href: isZh ? "/zh/infrastructure.html" : "/en/infrastructure.html",
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
    featuredTitle: isZh ? "精选项目" : "Featured Projects",
    featuredCta: isZh ? "查看全部项目" : "View all projects",
    featured: isZh ? featuredZh : featuredEn,
    stackTitle: isZh ? "技术栈" : "Technical Stack",
    stackLead: isZh
      ? "能力是方向，技术栈是实现方式——按测试域、数据与基础设施分组。"
      : "Capabilities are the lane; the stack is how delivery happens — testing domains, data, and infrastructure.",
    stack: isZh
      ? [
          {
            title: "UI 自动化",
            items: ["Playwright", "TypeScript"],
          },
          {
            title: "接口测试",
            items: ["Java", "JUnit", "RestAssured", "Python", "Pytest"],
          },
          {
            title: "性能测试",
            items: ["Locust", "Go 压测框架", "Locust WebUI"],
          },
          {
            title: "AI Testing",
            items: [
              "AI Test Case Generation",
              "OpenClaw / ClawHub",
              "Claude Code",
            ],
          },
          {
            title: "数据与消息",
            items: ["MySQL", "Oracle", "Redis", "MQ"],
          },
          {
            title: "基础设施",
            items: ["Docker", "CI/CD"],
          },
        ]
      : [
          {
            title: "UI Automation",
            items: ["Playwright", "TypeScript"],
          },
          {
            title: "API Testing",
            items: ["Java", "JUnit", "RestAssured", "Python", "Pytest"],
          },
          {
            title: "Performance Testing",
            items: ["Locust", "Go Framework", "Locust WebUI"],
          },
          {
            title: "AI Testing",
            items: [
              "AI Test Case Generation",
              "OpenClaw / ClawHub",
              "Claude Code",
            ],
          },
          {
            title: "Data & Messaging",
            items: ["MySQL", "Oracle", "Redis", "MQ"],
          },
          {
            title: "Infrastructure",
            items: ["Docker", "CI/CD"],
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
