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

export function getAbout(_locale: Locale): AboutCopy {
  return {
    meta: {
      title: "About | QA Engineer · SDET · AI Testing | XuXuClassMate",
      description:
        "I'm a QA Engineer / SDET focused on test automation, API testing, performance testing, Playwright, and AI testing.",
      keywords:
        "QA Engineer, SDET, Test Automation Engineer, AI Testing, AI Test Automation, Playwright, API Testing, Performance Testing, About XuXuClassMate"
    },
    subtitle: "ABOUT ME",
    title: "XuXuClassMate",
    intro:
      "I'm a QA Engineer / SDET focused on test automation, API testing, performance testing, and AI testing.",
    sections: [
      {
        title: "What I Do",
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
          "AI Test Case Generation"
        ]
      },
      {
        title: "What I'm Exploring",
        items: [
          "AI Testing",
          "AI Test Automation",
          "LLM-based Test Generation",
          "AI Agent Testing",
          "MCP",
          "Autonomous Testing",
          "Intelligent Test Case Generation",
          "AI-assisted Root Cause Analysis"
        ]
      },
      {
        title: "What I Build",
        items: [
          "Playwright automation frameworks",
          "Python testing tools",
          "Java API testing frameworks",
          "Dockerized test environments",
          "Performance testing systems",
          "Go load frameworks + Locust WebUI",
          "AI-powered testing tools",
          "AI Test Case Generation products"
        ]
      }
    ],
    ctaWork: "View projects",
    ctaWorkHref: "/en/work",
    ctaLab: "AI Testing Lab",
    ctaLabHref: "/en/ai-testing"
  };
}
