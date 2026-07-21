import type { Card, CaseSlug, Locale } from "./types";

type ProjectId = CaseSlug;

type LocalizedFields = {
  title: string;
  description: string;
  tags: string[];
  linkLabel: string;
  ctaLabel?: string;
  imageAlt: string;
  caseLabel: string;
};

type ProjectDef = {
  id: ProjectId;
  category: string;
  href: string;
  ctaHref?: string;
  image: string;
  en: LocalizedFields;
  zh: LocalizedFields;
};

const FEATURED_IDS: ProjectId[] = [
  "testcase-generator",
  "trading-assistant",
  "globalpulse",
  "docker-hub-api-gateway",
  "docker-suite",
];

const PROJECT_ORDER: ProjectId[] = [
  "testcase-generator",
  "trading-assistant",
  "globalpulse",
  "docker-hub-api-gateway",
  "docker-suite",
  "automation-framework",
];

export const PROJECTS: Record<ProjectId, ProjectDef> = {
  "testcase-generator": {
    id: "testcase-generator",
    category: "AI",
    href: "https://github.com/XuXuClassMate/testcase-generator",
    ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
    image: "/images/cover-testcase.jpg",
    en: {
      title: "AI Test Case Generator",
      description:
        "Multimodal QA inputs (PDF, Word, images, video) → structured cases with Test / Dev / Product review loops. Ships as Docker, npm, and OpenClaw plugin; published on ClawHub as AI Test Case Generator.",
      tags: ["TypeScript", "Multimodal AI", "ClawHub"],
      linkLabel: "GitHub",
      ctaLabel: "Docker Hub",
      imageAlt: "AI Test Case Generator cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "AI 测试用例生成器",
      description:
        "多模态 QA 输入（PDF、Word、图片、视频）→ 结构化用例，含测试/开发/产品三角色评审。支持 Docker、npm、OpenClaw 插件，并在 ClawHub 发布为 AI Test Case Generator。",
      tags: ["TypeScript", "多模态 AI", "ClawHub"],
      linkLabel: "GitHub",
      ctaLabel: "Docker Hub",
      imageAlt: "AI 测试用例生成器封面",
      caseLabel: "案例详解",
    },
  },
  "trading-assistant": {
    id: "trading-assistant",
    category: "AI",
    href: "https://github.com/XuXuClassMate/trading-assistant",
    ctaHref: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
    image: "/images/cover-trading.jpg",
    en: {
      title: "Trading Assistant Core",
      description:
        "OpenClaw agent skill for support/resistance, multi-indicator signals, position sizing, and risk alerts. Install via ClawHub, Docker, or `pip` / `ta` CLI.",
      tags: ["Agent Skill", "ClawHub", "CLI"],
      linkLabel: "GitHub",
      ctaLabel: "ClawHub",
      imageAlt: "Trading Assistant Core cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "Trading Assistant Core",
      description:
        "OpenClaw Agent 技能：支撑阻力、多指标信号、仓位与风险提醒。可通过 ClawHub、Docker 或 pip / `ta` CLI 安装。",
      tags: ["Agent 技能", "ClawHub", "CLI"],
      linkLabel: "GitHub",
      ctaLabel: "ClawHub",
      imageAlt: "Trading Assistant 封面",
      caseLabel: "案例详解",
    },
  },
  globalpulse: {
    id: "globalpulse",
    category: "Product",
    href: "https://github.com/InnoNestX/GlobalPulse",
    ctaHref: "https://pulse.xuxuclassmate.com/",
    image: "/images/cover-globalpulse.jpg",
    en: {
      title: "GlobalPulse",
      description:
        "Self-hosted market intelligence and scheduled finance/global hotspot briefings on Cloudflare Workers — Admin UI, cron delivery, and Feishu / WeChat / Telegram push.",
      tags: ["Cloudflare", "Workers", "Briefings"],
      linkLabel: "GitHub",
      ctaLabel: "Live",
      imageAlt: "GlobalPulse cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "GlobalPulse",
      description:
        "自托管的市场情报与定时财经/全球热点简报（Cloudflare Workers）— Admin UI、Cron 投递，以及飞书 / 微信 / Telegram 推送。",
      tags: ["Cloudflare", "Workers", "简报"],
      linkLabel: "GitHub",
      ctaLabel: "在线体验",
      imageAlt: "GlobalPulse 封面",
      caseLabel: "案例详解",
    },
  },
  "docker-hub-api-gateway": {
    id: "docker-hub-api-gateway",
    category: "Infra",
    href: "https://github.com/InnoNestX/docker-hub-pull-counter",
    ctaHref: "https://docker-hub-pull-counter.vercel.app",
    image: "/images/cover-docker-gateway.jpg",
    en: {
      title: "Docker Hub API Gateway",
      description:
        "Unified REST API gateway for Docker Hub — user stats, SVG cards, repo/tag lookup, OpenAPI docs, and interactive testing (EN/ZH).",
      tags: ["API", "Docker Hub", "Hono"],
      linkLabel: "GitHub",
      ctaLabel: "Live API",
      imageAlt: "Docker Hub API Gateway cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "Docker Hub API Gateway",
      description:
        "面向 Docker Hub 的统一 REST API 网关 — 用户统计、SVG 卡片、仓库/标签查询、OpenAPI 文档与交互式调试（中英）。",
      tags: ["API", "Docker Hub", "Hono"],
      linkLabel: "GitHub",
      ctaLabel: "在线 API",
      imageAlt: "Docker Hub API Gateway 封面",
      caseLabel: "案例详解",
    },
  },
  "docker-suite": {
    id: "docker-suite",
    category: "Infra",
    href: "https://hub.docker.com/u/xuxuclassmate",
    image: "/images/cover-docker.jpg",
    en: {
      title: "Test DB Docker Suite",
      description:
        "Ready-to-run database images for QA environments — Dameng, Highgo, Kingbase, TiDB and more, ranked by live Docker Hub pulls.",
      tags: ["Docker", "Dameng", "Highgo"],
      linkLabel: "Docker Hub",
      imageAlt: "Test DB Docker Suite cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "测试库 Docker 套件",
      description:
        "面向 QA 环境的即用数据库镜像——达梦、瀚高、人大金仓、TiDB 等，见 Docker Hub 实时拉取量。",
      tags: ["Docker", "Dameng", "Highgo"],
      linkLabel: "Docker Hub",
      imageAlt: "测试库 Docker 套件封面",
      caseLabel: "案例详解",
    },
  },
  "automation-framework": {
    id: "automation-framework",
    category: "Automation",
    href: "https://github.com/XuXuClassMate/My_Test_JAProject",
    image: "/images/cover-automation.jpg",
    en: {
      title: "Automation Framework Craft",
      description:
        "Reusable API / UI automation patterns and practice projects — the craft underneath the AI tools, not locked to one language.",
      tags: ["Framework", "API", "Playwright"],
      linkLabel: "GitHub",
      imageAlt: "Automation Framework cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "自动化框架手艺",
      description:
        "可复用的接口 / UI 自动化模式与练习项目——AI 工具底下的手艺底座，不绑死某一种语言。",
      tags: ["Framework", "API", "Playwright"],
      linkLabel: "GitHub",
      imageAlt: "自动化框架封面",
      caseLabel: "案例详解",
    },
  },
};

function toCard(locale: Locale, id: ProjectId): Card {
  const project = PROJECTS[id];
  const copy = project[locale];
  return {
    title: copy.title,
    description: copy.description,
    tags: copy.tags,
    href: project.href,
    linkLabel: copy.linkLabel,
    ctaHref: project.ctaHref,
    ctaLabel: copy.ctaLabel,
    category: project.category,
    image: project.image,
    imageAlt: copy.imageAlt,
    slug: project.id,
    caseHref: `/${locale}/work/${project.id}.html`,
    caseLabel: copy.caseLabel,
  };
}

export function getFeaturedProjects(locale: Locale): Card[] {
  return FEATURED_IDS.map((id) => toCard(locale, id));
}

export function getWorkProjects(locale: Locale): Card[] {
  return PROJECT_ORDER.map((id) => toCard(locale, id));
}

export function projectCover(slug: CaseSlug): string {
  return PROJECTS[slug].image;
}
