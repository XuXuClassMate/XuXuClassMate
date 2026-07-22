import type { Card, CaseSlug, Locale } from "./types";

type ProjectId = CaseSlug;

type ProjectGroupId = "quality" | "infra" | "agent";

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
  group: ProjectGroupId;
  href: string;
  ctaHref?: string;
  image: string;
  en: LocalizedFields;
  zh: LocalizedFields;
};

export type ProjectGroup = {
  id: ProjectGroupId;
  title: string;
  projects: Card[];
};

const GROUP_LABELS: Record<
  ProjectGroupId,
  { en: string; zh: string }
> = {
  quality: {
    en: "Quality Engineering",
    zh: "质量工程",
  },
  infra: {
    en: "Developer Infrastructure",
    zh: "开发者基础设施",
  },
  agent: {
    en: "AI / Agent Projects",
    zh: "AI / Agent 项目",
  },
};

const GROUP_ORDER: ProjectGroupId[] = ["quality", "infra", "agent"];

/** Homepage highlights Quality Engineering products. */
const FEATURED_IDS: ProjectId[] = ["testcase-generator", "docker-suite"];

const PROJECT_ORDER: ProjectId[] = [
  "testcase-generator",
  "docker-suite",
  "fullstack-e2e",
  "automation-framework",
  "docker-hub-api-gateway",
  "globalpulse",
  "trading-assistant",
];

export const PROJECTS: Record<ProjectId, ProjectDef> = {
  "testcase-generator": {
    id: "testcase-generator",
    group: "quality",
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
    group: "agent",
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
    group: "infra",
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
    group: "infra",
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
    group: "quality",
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
    group: "quality",
    href: "https://github.com/XuXuClassMate/My_Test_JAProject",
    image: "/images/cover-automation.jpg",
    en: {
      title: "Java API Automation",
      description:
        "Scalable API automation with Java, JUnit, RestAssured, Maven, and Allure.",
      tags: ["Java", "RestAssured", "API"],
      linkLabel: "GitHub",
      imageAlt: "Java API Automation cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "Java 接口自动化",
      description:
        "基于 Java、JUnit、RestAssured、Maven 与 Allure 的可扩展接口自动化。",
      tags: ["Java", "RestAssured", "API"],
      linkLabel: "GitHub",
      imageAlt: "Java 接口自动化封面",
      caseLabel: "案例详解",
    },
  },
  "fullstack-e2e": {
    id: "fullstack-e2e",
    group: "quality",
    href: "#",
    image: "/images/cover-automation.jpg",
    en: {
      title: "Playwright E2E Framework",
      description:
        "Full-chain automation covering frontend, API, backend, MySQL, Redis, and MQ. Repository coming soon.",
      tags: ["Playwright", "E2E", "TypeScript"],
      linkLabel: "Coming soon",
      imageAlt: "Full-Stack E2E Framework cover",
      caseLabel: "Case study",
    },
    zh: {
      title: "Playwright 全链路 E2E",
      description:
        "覆盖前端、API、后端、MySQL、Redis 与消息队列的全链路自动化。仓库即将公开。",
      tags: ["Playwright", "E2E", "TypeScript"],
      linkLabel: "即将上线",
      imageAlt: "全链路 E2E 框架封面",
      caseLabel: "案例详解",
    },
  },
};

function groupLabel(locale: Locale, group: ProjectGroupId): string {
  return GROUP_LABELS[group][locale];
}

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
    category: groupLabel(locale, project.group),
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

export function getProjectGroups(locale: Locale): ProjectGroup[] {
  return GROUP_ORDER.map((group) => ({
    id: group,
    title: groupLabel(locale, group),
    projects: PROJECT_ORDER.filter((id) => PROJECTS[id].group === group).map(
      (id) => toCard(locale, id),
    ),
  })).filter((section) => section.projects.length > 0);
}

export function projectCover(slug: CaseSlug): string {
  return PROJECTS[slug].image;
}
