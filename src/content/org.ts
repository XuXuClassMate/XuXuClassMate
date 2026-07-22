import type { Card } from "./types";

export type OssCategoryId =
  | "AI"
  | "Testing"
  | "Developer Tools"
  | "Infrastructure"
  | "Automation";

export type OrgProject = Card & {
  status?: string;
  org?: string;
  category: OssCategoryId;
};

export const OSS_CATEGORY_ORDER: OssCategoryId[] = [
  "AI",
  "Testing",
  "Developer Tools",
  "Infrastructure",
  "Automation",
];

type OrgProjectDef = {
  title: string;
  href: string;
  category: OssCategoryId;
  org: "InnoNestX" | "XuXuClassMate";
  ctaHref?: string;
  ctaLabel?: { en: string; zh: string };
  linkLabel: { en: string; zh: string };
  tags: { en: string[]; zh: string[] };
  status: { en: string; zh: string };
  description: { en: string; zh: string };
};

type CategoryMeta = {
  en: { title: string; description: string };
  zh: { title: string; description: string };
};

const CATEGORY_META: Record<OssCategoryId, CategoryMeta> = {
  AI: {
    en: {
      title: "AI",
      description:
        "Installable AI products and agent skills — multimodal QA, risk tooling, and review loops.",
    },
    zh: {
      title: "AI",
      description:
        "可安装的 AI 产品与 Agent 技能——多模态 QA、风险工具与评审闭环。",
    },
  },
  Testing: {
    en: {
      title: "Testing",
      description:
        "Environment and quality tooling that cuts setup time — for developers, QA, ops, and DBAs.",
    },
    zh: {
      title: "Testing",
      description:
        "缩短环境搭建成本的质量与基础设施工具——开发、测试、运维、DBA 都能用。",
    },
  },
  "Developer Tools": {
    en: {
      title: "Developer Tools",
      description:
        "APIs, gateways, and developer-facing utilities used in real workflows.",
    },
    zh: {
      title: "Developer Tools",
      description: "API、网关与开发者工具——服务真实工作流。",
    },
  },
  Infrastructure: {
    en: {
      title: "Infrastructure",
      description:
        "Runnable systems on Cloudflare Workers and related delivery stacks.",
    },
    zh: {
      title: "Infrastructure",
      description: "可运行的系统——Cloudflare Workers 与投递栈。",
    },
  },
  Automation: {
    en: {
      title: "Automation",
      description:
        "API and E2E automation frameworks — patterns you can fork and extend.",
    },
    zh: {
      title: "Automation",
      description: "接口与 E2E 自动化框架——可 fork、可扩展的模式。",
    },
  },
};

const ORG_PROJECTS: OrgProjectDef[] = [
  {
    title: "AI Test Case Generator",
    href: "https://github.com/InnoNestX/testcase-generator",
    category: "AI",
    org: "InnoNestX",
    ctaHref: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
    ctaLabel: { en: "ClawHub skill", zh: "ClawHub 技能" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["AI Testing", "ClawHub", "Docker"],
      zh: ["AI Testing", "ClawHub", "Docker"],
    },
    status: { en: "Open source", zh: "开源" },
    description: {
      en: "Multimodal test-case generation with review loops — Docker / npm / ClawHub skill.",
      zh: "多模态用例生成与评审闭环——Docker / npm / ClawHub 技能。",
    },
  },
  {
    title: "Trading Assistant",
    href: "https://github.com/InnoNestX/trading-assistant",
    category: "AI",
    org: "InnoNestX",
    ctaHref: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
    ctaLabel: { en: "ClawHub skill", zh: "ClawHub 技能" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["OpenClaw", "Risk", "CLI"],
      zh: ["OpenClaw", "风险", "CLI"],
    },
    status: { en: "Open source", zh: "开源" },
    description: {
      en: "Signals, sizing, and risk checks as an installable OpenClaw skill.",
      zh: "信号、仓位与风险检查，打包为可安装 OpenClaw 技能。",
    },
  },
  {
    title: "Test DB Docker Suite",
    href: "https://hub.docker.com/u/xuxuclassmate",
    category: "Testing",
    org: "XuXuClassMate",
    linkLabel: { en: "Docker Hub", zh: "Docker Hub" },
    tags: {
      en: ["Docker Testing", "Dameng", "Highgo"],
      zh: ["Docker Testing", "达梦", "瀚高"],
    },
    status: { en: "Live", zh: "在线" },
    description: {
      en: "Ready-to-run DB images — Dameng, Highgo, Kingbase, TiDB and more — for developers, QA, ops, and DBAs.",
      zh: "即用数据库镜像——达梦、瀚高、人大金仓、TiDB 等，开发 / 测试 / 运维 / DBA 都能直接用。",
    },
  },
  {
    title: "Docker Hub API Gateway",
    href: "https://github.com/InnoNestX/docker-hub-pull-counter",
    category: "Developer Tools",
    org: "InnoNestX",
    ctaHref: "https://docker-hub-pull-counter.vercel.app",
    ctaLabel: { en: "Open API", zh: "打开 API" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["API", "OpenAPI", "SVG cards"],
      zh: ["API", "OpenAPI", "SVG 卡片"],
    },
    status: { en: "Live", zh: "在线" },
    description: {
      en: "REST + SVG stats for Docker Hub pulls — dogfooded by this site’s metrics.",
      zh: "Docker Hub 拉取量的 REST + SVG 统计——本站指标也在用。",
    },
  },
  {
    title: "GlobalPulse",
    href: "https://github.com/InnoNestX/GlobalPulse",
    category: "Infrastructure",
    org: "InnoNestX",
    ctaHref: "https://pulse.xuxuclassmate.com/",
    ctaLabel: { en: "Open live site", zh: "打开在线站点" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["Cloudflare Workers", "Briefings", "Multi-channel"],
      zh: ["Cloudflare Workers", "简报", "多通道"],
    },
    status: { en: "Live", zh: "在线" },
    description: {
      en: "Self-hosted market intelligence and scheduled briefings on Cloudflare Workers.",
      zh: "自托管市场情报与定时简报——基于 Cloudflare Workers。",
    },
  },
  {
    title: "Java API Automation",
    href: "https://github.com/XuXuClassMate/My_Test_JAProject",
    category: "Automation",
    org: "XuXuClassMate",
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["Java", "RestAssured", "Allure"],
      zh: ["Java", "RestAssured", "Allure"],
    },
    status: { en: "Open source", zh: "开源" },
    description: {
      en: "Scalable API automation with Java, JUnit, RestAssured, Maven, and Allure.",
      zh: "基于 Java、JUnit、RestAssured、Maven 与 Allure 的可扩展接口自动化。",
    },
  },
  {
    title: "Playwright E2E Framework",
    href: "#",
    category: "Automation",
    org: "InnoNestX",
    linkLabel: { en: "Coming soon", zh: "即将上线" },
    tags: {
      en: ["Playwright", "E2E", "TypeScript"],
      zh: ["Playwright", "E2E", "TypeScript"],
    },
    status: { en: "Planned", zh: "规划中" },
    description: {
      en: "Full-chain UI + API automation patterns — repository moving under InnoNestX.",
      zh: "全链路 UI + API 自动化模式——仓库将迁入 InnoNestX。",
    },
  },
];

function toProject(locale: "en" | "zh", project: OrgProjectDef): OrgProject {
  return {
    title: project.title,
    description: project.description[locale],
    href: project.href,
    linkLabel: project.linkLabel[locale],
    ctaHref: project.ctaHref,
    ctaLabel: project.ctaLabel?.[locale],
    tags: project.tags[locale],
    status: project.status[locale],
    org: project.org,
    category: project.category,
  };
}

export function getOrgProjects(locale: "en" | "zh"): OrgProject[] {
  return ORG_PROJECTS.map((project) => toProject(locale, project));
}

export type OrgCategoryGroup = {
  id: OssCategoryId;
  title: string;
  description: string;
  projects: OrgProject[];
};

export function getOrgCategories(locale: "en" | "zh"): OrgCategoryGroup[] {
  const projects = getOrgProjects(locale);
  return OSS_CATEGORY_ORDER.map((id) => ({
    id,
    title: CATEGORY_META[id][locale].title,
    description: CATEGORY_META[id][locale].description,
    projects: projects.filter((project) => project.category === id),
  }));
}
