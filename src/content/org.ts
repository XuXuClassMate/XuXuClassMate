import type { Card } from "./types";

export type OrgProject = Card & {
  status?: string;
};

type OrgProjectDef = {
  title: string;
  href: string;
  ctaHref?: string;
  ctaLabel?: { en: string; zh: string };
  linkLabel: { en: string; zh: string };
  tags: { en: string[]; zh: string[] };
  status: { en: string; zh: string };
  description: { en: string; zh: string };
};

const ORG_PROJECTS: OrgProjectDef[] = [
  {
    title: "GlobalPulse",
    href: "https://github.com/InnoNestX/GlobalPulse",
    ctaHref: "https://pulse.xuxuclassmate.com/",
    ctaLabel: { en: "Open live site", zh: "打开在线站点" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["Cloudflare Workers", "Briefings", "Multi-channel"],
      zh: ["Cloudflare Workers", "简报", "多通道"],
    },
    status: { en: "Live", zh: "在线" },
    description: {
      en: "Self-hosted market intelligence and scheduled briefings — Feishu / WeChat / Telegram delivery on Cloudflare Workers.",
      zh: "自托管市场情报与定时简报——基于 Cloudflare Workers，支持飞书 / 微信 / Telegram 投递。",
    },
  },
  {
    title: "Docker Hub API Gateway",
    href: "https://github.com/InnoNestX/docker-hub-pull-counter",
    ctaHref: "https://docker-hub-pull-counter.vercel.app",
    ctaLabel: { en: "Open API", zh: "打开 API" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["API", "OpenAPI", "SVG cards"],
      zh: ["API", "OpenAPI", "SVG 卡片"],
    },
    status: { en: "Live", zh: "在线" },
    description: {
      en: "REST + SVG stats for Docker Hub pulls — dogfooded by this site’s homepage metrics and README badges.",
      zh: "Docker Hub 拉取量的 REST + SVG 统计——本站首页指标与 README 徽章也在用。",
    },
  },
  {
    title: "AI Test Case Generator",
    href: "https://github.com/InnoNestX/testcase-generator",
    ctaHref: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
    ctaLabel: { en: "ClawHub skill", zh: "ClawHub 技能" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["AI testing", "ClawHub", "Docker"],
      zh: ["AI 测试", "ClawHub", "Docker"],
    },
    status: { en: "Open source", zh: "开源" },
    description: {
      en: "Multimodal test-case generation with review loops — also published as Docker / npm / ClawHub skill.",
      zh: "多模态用例生成与评审闭环——同时提供 Docker / npm / ClawHub 技能。",
    },
  },
  {
    title: "Trading Assistant",
    href: "https://github.com/InnoNestX/trading-assistant",
    ctaHref: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
    ctaLabel: { en: "ClawHub skill", zh: "ClawHub 技能" },
    linkLabel: { en: "GitHub", zh: "GitHub" },
    tags: {
      en: ["OpenClaw", "Risk", "CLI"],
      zh: ["OpenClaw", "风险", "CLI"],
    },
    status: { en: "Open source", zh: "开源" },
    description: {
      en: "Signals, sizing, and risk checks as an installable OpenClaw skill — with Docker / CLI paths for humans.",
      zh: "信号、仓位与风险检查，打包为可安装 OpenClaw 技能——并保留 Docker / CLI 给人用。",
    },
  },
];

export function getOrgProjects(locale: "en" | "zh"): OrgProject[] {
  return ORG_PROJECTS.map((project) => ({
    title: project.title,
    description: project.description[locale],
    href: project.href,
    linkLabel: project.linkLabel[locale],
    ctaHref: project.ctaHref,
    ctaLabel: project.ctaLabel?.[locale],
    tags: project.tags[locale],
    status: project.status[locale],
  }));
}
