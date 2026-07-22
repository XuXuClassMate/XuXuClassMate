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
        ? "关于我 | QA / SDET / AI Testing Engineer | 旭旭同学"
        : "About | QA Engineer & Test Automation Engineer | XuXuClassMate",
      description: isZh
        ? "QA / SDET，专注测试自动化、接口测试、性能测试与 AI 辅助测试。"
        : "I'm a QA / Test Engineer focused on test automation, API testing, performance testing, and AI-assisted testing.",
      keywords:
        "QA Engineer, SDET, Test Automation Engineer, AI Testing Engineer, Playwright, About XuXuClassMate",
    },
    subtitle: isZh ? "关于我" : "ABOUT ME",
    title: isZh ? "旭旭同学" : "XuXuClassMate",
    intro: isZh
      ? "我是一名 QA / Test Engineer，专注测试自动化、接口测试、性能测试与 AI 辅助测试。"
      : "I'm a QA / Test Engineer focused on test automation, API testing, performance testing, and AI-assisted testing.",
    sections: [
      {
        title: isZh ? "我在做什么" : "What I Do",
        items: [
          "Test Automation",
          "API Testing",
          "Web UI Testing",
          "Performance Testing",
          "Test Framework Development",
          "CI/CD",
          "Docker",
          "AI-assisted Testing",
        ],
      },
      {
        title: isZh ? "我在探索什么" : "What I'm Exploring",
        items: [
          "AI Testing",
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
          "AI-powered testing tools",
        ],
      },
    ],
    ctaWork: isZh ? "查看项目" : "View projects",
    ctaWorkHref: isZh ? "/zh/work.html" : "/en/work.html",
    ctaLab: isZh ? "AI Testing Lab" : "AI Testing Lab",
    ctaLabHref: isZh ? "/zh/ai-testing.html" : "/en/ai-testing.html",
  };
}
