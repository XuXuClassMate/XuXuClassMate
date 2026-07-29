import type { Locale } from "./types";

export type PlaygroundMode = "interactive" | "live" | "install";

export type PlaygroundExperience = {
  id: string;
  title: string;
  description: string;
  mode: PlaygroundMode;
  modeLabel: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  githubHref?: string;
  /** In-page try panel anchor (Docker Hub API). */
  tryAnchor?: string;
};

type ExperienceDef = {
  id: string;
  mode: PlaygroundMode;
  title: string;
  githubHref?: string;
  tryAnchor?: string;
  ctaExternal?: boolean;
  ctaHref: { en: string; zh: string };
  description: { en: string; zh: string };
  ctaLabel: { en: string; zh: string };
};

const MODE_LABELS: Record<
  PlaygroundMode,
  { en: string; zh: string }
> = {
  interactive: { en: "Interactive", zh: "站内体验" },
  live: { en: "Live", zh: "在线产品" },
  install: { en: "Install", zh: "本机安装" },
};

const EXPERIENCES: ExperienceDef[] = [
  {
    id: "ai-testcase-generator",
    mode: "interactive",
    title: "AI Test Case Generator",
    githubHref: "https://github.com/InnoNestX/testcase-generator",
    ctaHref: {
      en: "/en/demo/ai-testcase-generator",
      zh: "/zh/demo/ai-testcase-generator",
    },
    description: {
      en: "Shift testing left with multi-modal AI. Feed a sample PRD in the browser — curated demo output, not a live LLM.",
      zh: "用多模态 AI 把测试左移。浏览器内喂入示例 PRD——精选演示输出，不调用真实 LLM。",
    },
    ctaLabel: {
      en: "Open interactive demo",
      zh: "打开交互演示",
    },
  },
  {
    id: "docker-hub-api",
    mode: "interactive",
    title: "Docker Hub API Gateway",
    githubHref: "https://github.com/InnoNestX/docker-hub-pull-counter",
    tryAnchor: "try-docker-hub-api",
    ctaHref: {
      en: "#try-docker-hub-api",
      zh: "#try-docker-hub-api",
    },
    description: {
      en: "Look up Docker Hub pull stats through the same public gateway this site dogfoods.",
      zh: "用本站同款公开网关查询 Docker Hub 拉取量——当场试一次。",
    },
    ctaLabel: {
      en: "Try the API here",
      zh: "在本页试用 API",
    },
  },
  {
    id: "globalpulse",
    mode: "live",
    title: "GlobalPulse",
    githubHref: "https://github.com/InnoNestX/GlobalPulse",
    ctaExternal: true,
    ctaHref: {
      en: "https://pulse.xuxuclassmate.com/",
      zh: "https://pulse.xuxuclassmate.com/",
    },
    description: {
      en: "Self-hosted market intelligence and scheduled briefings on Cloudflare Workers.",
      zh: "自托管市场情报与定时简报——基于 Cloudflare Workers 的在线产品。",
    },
    ctaLabel: {
      en: "Open live site",
      zh: "打开在线站点",
    },
  },
  {
    id: "docker-suite",
    mode: "install",
    title: "Test DB Docker Suite",
    githubHref: "https://hub.docker.com/u/xuxuclassmate",
    ctaExternal: true,
    ctaHref: {
      en: "https://hub.docker.com/u/xuxuclassmate",
      zh: "https://hub.docker.com/u/xuxuclassmate",
    },
    description: {
      en: "Ready-to-run Dameng / Highgo / Kingbase / TiDB images — pull and run on your machine (not in-browser).",
      zh: "达梦 / 瀚高 / 人大金仓 / TiDB 即用镜像——在本机 Docker 拉取运行（非浏览器内跑库）。",
    },
    ctaLabel: {
      en: "Open Docker Hub",
      zh: "打开 Docker Hub",
    },
  },
];

export function getPlaygroundExperiences(
  locale: Locale,
): PlaygroundExperience[] {
  return EXPERIENCES.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description[locale],
    mode: item.mode,
    modeLabel: MODE_LABELS[item.mode][locale],
    ctaLabel: item.ctaLabel[locale],
    ctaHref: item.ctaHref[locale],
    ctaExternal: item.ctaExternal,
    githubHref: item.githubHref,
    tryAnchor: item.tryAnchor,
  }));
}
