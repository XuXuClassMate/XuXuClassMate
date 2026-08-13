import type { Locale, PageMeta } from "./types";

export type AboutSection = {
  title: string;
  items: string[];
};

export type AboutCopy = {
  meta: PageMeta;
  subtitle: string;
  title: string;
  intro: string;
  sections: AboutSection[];
  ctaWork: string;
  ctaWorkHref: string;
  ctaLab: string;
  ctaLabHref: string;
};

export function getAbout(locale: Locale): AboutCopy {
  const isZh = locale === "zh";
  return {
    meta: {
      title: isZh
        ? "关于我 | QA Engineer · SDET · AI Testing | XuXuClassMate"
        : "About | QA Engineer · SDET · AI Testing | XuXuClassMate",
      description: isZh
        ? "我是一名 QA Engineer / SDET，专注测试自动化、接口测试、性能测试、Playwright 与 AI Testing。"
        : "I'm a QA Engineer / SDET focused on test automation, API testing, performance testing, Playwright, and AI testing.",
      keywords:
        "QA Engineer, SDET, Test Automation Engineer, AI Testing, AI Test Automation, Playwright, API Testing, Performance Testing, About XuXuClassMate",
    },
    subtitle: isZh ? "关于我" : "ABOUT ME",
    title: "XuXuClassMate",
    intro: isZh
      ? "我是一名 QA Engineer / SDET，专注测试自动化、接口测试、性能测试与 AI Testing。"
      : "I'm a QA Engineer / SDET focused on test automation, API testing, performance testing, and AI testing.",
    sections: [
      {
        title: isZh ? "我在做什么" : "What I Do",
        items: [
          "Test Automation",
          "API Testing",
          "Web UI Testing",
          "Performance Testing",
          "Playwright",
          "Test Framework Development",
          "CI/CD",
          "Docker Testing",
          "Test Infrastructure",
          "AI Testing",
          "AI Test Case Generation",
        ],
      },
      {
        title: isZh ? "我在探索什么" : "What I'm Exploring",
        items: [
          "AI Testing",
          "AI Test Automation",
          "LLM-based Test Generation",
          "AI Agent Testing",
          "MCP",
          "Autonomous Testing",
          "Intelligent Test Case Generation",
          "AI-assisted Root Cause Analysis",
        ],
      },
      {
        title: isZh ? "我在构建什么" : "What I Build",
        items: [
          "Playwright automation frameworks",
          "Python testing tools",
          "Java API testing frameworks",
          "Dockerized test environments",
          "Performance testing systems",
          "Go load frameworks + Locust WebUI",
          "AI-powered testing tools",
          "AI Test Case Generation products",
        ],
      },
    ],
    ctaWork: isZh ? "查看项目" : "View projects",
    ctaWorkHref: isZh ? "/zh/work" : "/en/work",
    ctaLab: isZh ? "AI Testing Lab" : "AI Testing Lab",
    ctaLabHref: isZh ? "/zh/ai-testing" : "/en/ai-testing",
  };
}
