import type { Locale } from "./types";
import { getNotes } from "./notes";

export type HomeLink = { title: string; href: string; external?: boolean };

export type PortfolioHome = {
  greeting: string;
  roles: string[];
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
  connectTitle: string;
  connectGithub: string;
  connectEmail: string;
};

const GITHUB = "https://github.com/XuXuClassMate";

const featuredEn = [
  {
    title: "Playwright E2E Framework",
    description:
      "Full-chain automation covering frontend, API, backend, MySQL, Redis, and message queues.",
    href: "/en/work/fullstack-e2e.html",
    tags: ["Playwright", "E2E", "TypeScript"],
  },
  {
    title: "Java API Automation",
    description:
      "Scalable API automation with Java, JUnit, RestAssured, Maven, and Allure.",
    href: "/en/work/automation-framework.html",
    tags: ["Java", "RestAssured", "API"],
  },
  {
    title: "Python Automation",
    description:
      "Python practice suites for API, UI, performance (Locust), and mobile automation.",
    href: "https://github.com/XuXuClassMate/My_Test_PyProject",
    tags: ["Python", "Pytest", "Locust"],
  },
  {
    title: "Docker Test Infrastructure",
    description:
      "Reusable database and QA environment images teams can pull and boot in CI.",
    href: "/en/work/docker-suite.html",
    tags: ["Docker", "CI/CD", "Infra"],
  },
  {
    title: "AI Testing Lab",
    description:
      "AI test case generation, API testing with LLMs, bug analysis, and testing agents.",
    href: "/en/ai-testing.html",
    tags: ["AI Testing", "LLM", "SDET"],
  },
];

const featuredZh = [
  {
    title: "Playwright 全链路 E2E",
    description:
      "覆盖前端、API、后端、MySQL、Redis 与消息队列的全链路自动化框架。",
    href: "/zh/work/fullstack-e2e.html",
    tags: ["Playwright", "E2E", "TypeScript"],
  },
  {
    title: "Java 接口自动化",
    description: "基于 Java、JUnit、RestAssured、Maven 与 Allure 的可扩展接口自动化。",
    href: "/zh/work/automation-framework.html",
    tags: ["Java", "RestAssured", "API"],
  },
  {
    title: "Python 自动化",
    description: "Python 练习套件：接口、UI、性能（Locust）与移动端自动化。",
    href: "https://github.com/XuXuClassMate/My_Test_PyProject",
    tags: ["Python", "Pytest", "Locust"],
  },
  {
    title: "Docker 测试基础设施",
    description: "可复用的数据库与 QA 环境镜像，支持本地与 CI 一键启动。",
    href: "/zh/work/docker-suite.html",
    tags: ["Docker", "CI/CD", "Infra"],
  },
  {
    title: "AI Testing Lab",
    description: "AI 用例生成、LLM 接口测试、缺陷分析与测试 Agent。",
    href: "/zh/ai-testing.html",
    tags: ["AI Testing", "LLM", "SDET"],
  },
];

export function getPortfolioHome(locale: Locale): PortfolioHome {
  const isZh = locale === "zh";
  const notes = getNotes(locale).slice(0, 3);

  return {
    greeting: isZh ? "你好，我是旭旭。" : "Hi, I'm XuXu.",
    roles: isZh
      ? ["QA Engineer", "Test Automation Engineer", "AI Testing Explorer"]
      : ["QA Engineer", "Test Automation Engineer", "AI Testing Explorer"],
    description: isZh
      ? "我构建可靠的测试系统、自动化框架，以及 AI 辅助的测试解决方案。"
      : "I build reliable testing systems, automation frameworks and AI-assisted testing solutions.",
    ctaWork: isZh ? "查看项目" : "View My Work",
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
        title: "E2E Testing",
        href: isZh
          ? "/zh/work/fullstack-e2e.html"
          : "/en/work/fullstack-e2e.html",
      },
      {
        title: "AI Testing",
        href: isZh ? "/zh/ai-testing.html" : "/en/ai-testing.html",
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
        label: isZh ? "自动化覆盖率" : "Automation Coverage",
      },
      {
        value: isZh ? "5万+" : "50k+",
        label: isZh ? "QPS 性能测试" : "QPS Performance Testing",
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
    stack: [
      "Java",
      "Python",
      "TypeScript",
      "Playwright",
      "Pytest",
      "JUnit",
      "RestAssured",
      "Locust",
      "Docker",
      "CI/CD",
      "AI",
    ],
    articlesTitle: isZh ? "最新技术文章" : "Latest Technical Articles",
    articlesCta: isZh ? "查看全部" : "View all",
    ossTitle: isZh ? "GitHub / 开源" : "GitHub / Open Source",
    ossDescription: isZh
      ? "开源 QA 工具、自动化框架与可安装的测试产品。"
      : "Open-source QA tools, frameworks, and installable testing products.",
    ossGithubLabel: isZh ? "打开 GitHub" : "Open GitHub",
    ossOrgLabel: isZh ? "InnoNestX 组织" : "InnoNestX org",
    connectTitle: isZh ? "保持联系" : "Let's Connect",
    connectGithub: GITHUB,
    connectEmail: "mail@xuxuclassmate.com",
    // articles pulled live in HomePage via notes
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
