import type { Locale } from "./types";

/** Edit this file monthly — Now page content lives here. */
export const NOW_UPDATED = {
  /** ISO month used for sorting / meta (YYYY-MM). */
  iso: "2026-07",
  en: "July 2026",
  zh: "2026 年 7 月",
} as const;

export type NowSectionId = "building" | "learning" | "exploring";

export type NowItem = {
  title: string;
  note?: string;
  href?: string;
};

export type NowSection = {
  id: NowSectionId;
  title: string;
  description: string;
  items: NowItem[];
};

type LocalizedItem = {
  en: { title: string; note?: string };
  zh: { title: string; note?: string };
  href?: string;
};

type SectionDef = {
  id: NowSectionId;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  items: LocalizedItem[];
};

const SECTIONS: SectionDef[] = [
  {
    id: "building",
    title: { en: "Building", zh: "正在做" },
    description: {
      en: "Products and tooling shipping right now.",
      zh: "正在推进、可交付的产品与工具。",
    },
    items: [
      {
        en: {
          title: "AI Test Case Generator",
          note: "Multimodal inputs → structured cases with review loops.",
        },
        zh: {
          title: "AI 测试用例生成器",
          note: "多模态输入 → 结构化用例与评审闭环。",
        },
        href: "/work/testcase-generator.html",
      },
      {
        en: {
          title: "OpenClaw QA Skills",
          note: "Installable ClawHub skills for QA and agent workflows.",
        },
        zh: {
          title: "OpenClaw QA Skills",
          note: "面向 QA 与 Agent 工作流的可安装 ClawHub 技能。",
        },
        href: "https://clawhub.ai/xuxuclassmate",
      },
      {
        en: {
          title: "Test DB Docker Suite",
          note: "Ready-to-run Dameng / Highgo / Kingbase / TiDB images for developers, QA, ops, and DBAs.",
        },
        zh: {
          title: "测试库 Docker 套件",
          note: "达梦 / 瀚高 / 人大金仓 / TiDB 即用镜像——开发、测试、运维、DBA 都能用。",
        },
        href: "/work/docker-suite.html",
      },
    ],
  },
  {
    id: "learning",
    title: { en: "Learning", zh: "正在学" },
    description: {
      en: "Skills and stacks I am actively leveling up.",
      zh: "正在系统加深的技能与技术栈。",
    },
    items: [
      {
        en: {
          title: "AI Agent Testing",
          note: "How to test agents, tools, and multi-step workflows.",
        },
        zh: {
          title: "AI Agent Testing",
          note: "如何测 Agent、工具调用与多步工作流。",
        },
      },
      {
        en: {
          title: "MCP",
          note: "Model Context Protocol for toolable agent systems.",
        },
        zh: {
          title: "MCP",
          note: "面向可工具化 Agent 系统的 Model Context Protocol。",
        },
      },
      {
        en: {
          title: "Playwright",
          note: "Deeper fixtures, parallel runs, and CI patterns.",
        },
        zh: {
          title: "Playwright",
          note: "更深的 Fixtures、并行与 CI 模式。",
        },
        href: "/playwright.html",
      },
      {
        en: {
          title: "LLM Evaluation",
          note: "Eval harnesses, scoring, and regression for LLM outputs.",
        },
        zh: {
          title: "LLM Evaluation",
          note: "LLM 输出的评测集、打分与回归。",
        },
      },
    ],
  },
  {
    id: "exploring",
    title: { en: "Exploring", zh: "正在探索" },
    description: {
      en: "Longer-horizon bets — research before commit.",
      zh: "更长周期的方向——先研究，再投入。",
    },
    items: [
      {
        en: {
          title: "Autonomous Testing",
          note: "Where agents can own exploration without losing signal.",
        },
        zh: {
          title: "Autonomous Testing",
          note: "Agent 何时能自主探索，同时不丢掉有效信号。",
        },
      },
      {
        en: {
          title: "AI Test Agents",
          note: "Specialized agents for case design, triage, and repair.",
        },
        zh: {
          title: "AI Test Agents",
          note: "面向用例设计、分诊与修复的专用 Agent。",
        },
      },
      {
        en: {
          title: "Cloud-native Test Infrastructure",
          note: "Ephemeral environments and portable QA stacks.",
        },
        zh: {
          title: "Cloud-native Test Infrastructure",
          note: "临时环境与可移植的 QA 栈。",
        },
        href: "/infrastructure.html",
      },
    ],
  },
];

function localizeHref(locale: Locale, href?: string): string | undefined {
  if (!href) return undefined;
  if (href.startsWith("http")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function getNowSections(locale: Locale): NowSection[] {
  return SECTIONS.map((section) => ({
    id: section.id,
    title: section.title[locale],
    description: section.description[locale],
    items: section.items.map((item) => ({
      title: item[locale].title,
      note: item[locale].note,
      href: localizeHref(locale, item.href),
    })),
  }));
}
