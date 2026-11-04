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
    id: "nas",
    mode: "live",
    title: "NAS",
    ctaExternal: true,
    ctaHref: {
      en: "https://nas.xuxuclassmate.com",
      zh: "https://nas.xuxuclassmate.com",
    },
    description: {
      en: "Sign-in for the self-hosted NAS at nas.xuxuclassmate.com.",
      zh: "nas.xuxuclassmate.com 上的自托管 NAS 登录入口。",
    },
    ctaLabel: {
      en: "Open NAS",
      zh: "打开 NAS",
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
      en: "Market briefings on Cloudflare Workers. The console lives at pulse.xuxuclassmate.com.",
      zh: "基于 Cloudflare Workers 的市场简报。控制台在 pulse.xuxuclassmate.com 首页。",
    },
    ctaLabel: {
      en: "Open live site",
      zh: "打开在线站点",
    },
  },
  {
    id: "custom-mail",
    mode: "live",
    title: "Custom Mail",
    githubHref: "https://github.com/InnoNestX/Custom-Mail",
    ctaExternal: true,
    ctaHref: {
      en: "https://mail.xuxuclassmate.com",
      zh: "https://mail.xuxuclassmate.com",
    },
    description: {
      en: "Private outbound mail on mail.xuxuclassmate.com — compose, attachments, and history.",
      zh: "mail.xuxuclassmate.com 上的私有发信：撰写、附件和发送记录。",
    },
    ctaLabel: {
      en: "Open Mail",
      zh: "打开邮件",
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
