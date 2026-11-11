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
  ctaHref: { en: string; };
  description: { en: string; };
  ctaLabel: { en: string; };
};

const MODE_LABELS: Record<
  PlaygroundMode,
  { en: string; }
> = {
  interactive: { en: "Interactive" },
  live: { en: "Live" },
  install: { en: "Install" }
};

const EXPERIENCES: ExperienceDef[] = [
  {
    id: "ai-testcase-generator",
    mode: "interactive",
    title: "AI Test Case Generator",
    githubHref: "https://github.com/InnoNestX/testcase-generator",
    ctaHref: {
      en: "/en/demo/ai-testcase-generator"

    },
    description: {
      en: "Shift testing left with multi-modal AI. Feed a sample PRD in the browser — curated demo output, not a live LLM."

    },
    ctaLabel: {
      en: "Open interactive demo"

    }
  },
  {
    id: "docker-hub-api",
    mode: "interactive",
    title: "Docker Hub API Gateway",
    githubHref: "https://github.com/InnoNestX/docker-hub-pull-counter",
    tryAnchor: "try-docker-hub-api",
    ctaHref: {
      en: "#try-docker-hub-api"

    },
    description: {
      en: "Look up Docker Hub pull stats through the same public gateway this site dogfoods."

    },
    ctaLabel: {
      en: "Try the API here"

    }
  },
  {
    id: "docker-suite",
    mode: "install",
    title: "Test DB Docker Suite",
    ctaExternal: true,
    ctaHref: {
      en: "https://hub.docker.com/u/xuxuclassmate"

    },
    description: {
      en: "Ready-to-run Dameng / Highgo / Kingbase / TiDB images — pull and run on your machine (not in-browser)."

    },
    ctaLabel: {
      en: "Open Docker Hub"

    }
  }
];

export function getPlaygroundExperiences(
  _locale: Locale,
): PlaygroundExperience[] {
  return EXPERIENCES.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description.en,
    mode: item.mode,
    modeLabel: MODE_LABELS[item.mode].en,
    ctaLabel: item.ctaLabel.en,
    ctaHref: item.ctaHref.en,
    ctaExternal: item.ctaExternal,
    githubHref: item.githubHref,
    tryAnchor: item.tryAnchor,
  }));
}
