import type { Locale } from "./types";
import { getNotes } from "./notes";

export type HomeLink = { title: string; href: string; external?: boolean };

export type PortfolioHome = {
  greeting: string;
  roles: string[];
  tagline: string;
  description: string;
  ctaWork: string;
  ctaGithub: string;
  ctaContact: string;
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
  stack: string[];
  articlesTitle: string;
  articlesCta: string;
  ossTitle: string;
  ossDescription: string;
  ossGithubLabel: string;
  ossOrgLabel: string;
  ossPlaygroundLabel: string;
  connectGithub: string;
};

const GITHUB = "https://github.com/XuXuClassMate";

const featuredEn = [
  {
    title: "AI Test Case Generator",
    description:
      "Flagship AI Testing product: multimodal QA inputs → structured cases with review loops. Install via Docker, npm, or ClawHub.",
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
      "旗舰 AI Testing 产品：多模态 QA 输入 → 结构化用例与评审闭环。可通过 Docker、npm 或 ClawHub 安装。",
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
      ? "我是 QA Engineer / SDET，专注测试自动化、AI Testing、接口测试与性能测试；并构建 Playwright、Docker Testing 与 AI 用例生成工具。"
      : "I'm a QA Engineer / SDET focused on test automation, AI testing, API testing, and performance testing — building Playwright suites, Docker testing infrastructure, and AI test case generation.",
    ctaWork: isZh ? "查看项目" : "View Projects",
    ctaGithub: "GitHub",
    ctaContact: isZh ? "联系我" : "Contact Me",
    whatIDoTitle: isZh ? "我在做什么" : "What I Do",
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
        href: isZh ? "/zh/blog.html" : "/en/blog.html",
      },
      {
        title: "AI Testing",
        href: isZh ? "/zh/ai-testing.html" : "/en/ai-testing.html",
      },
      {
        title: "Playwright",
        href: isZh ? "/zh/playwright.html" : "/en/playwright.html",
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
        value: isZh ? "5万+" : "50k+",
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
    stack: [
      "Playwright",
      "API Testing",
      "Performance Testing",
      "AI Testing",
      "Java",
      "Python",
      "TypeScript",
      "Pytest",
      "JUnit",
      "RestAssured",
      "Locust",
      "Docker Testing",
      "Test Infrastructure",
      "CI/CD",
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
