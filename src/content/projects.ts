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

};

export type ProjectGroup = {
  id: ProjectGroupId;
  title: string;
  projects: Card[];
};

const GROUP_LABELS: Record<
  ProjectGroupId,
  { en: string; }
> = {
  quality: {
    en: "Quality Engineering"

  },
  infra: {
    en: "Developer Infrastructure"

  },
  agent: {
    en: "AI / Agent Projects"

  }
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
  "custom-mail",
  "trading-assistant"
];

export const PROJECTS: Record<ProjectId, ProjectDef> = {
  "testcase-generator": {
    id: "testcase-generator",
    group: "quality",
    href: "https://github.com/InnoNestX/testcase-generator",
    ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
    image: "/images/cover-testcase.jpg",
    en: {
      title: "AI Test Case Generator",
      description:
        "AI-powered test case generation for PRDs and multimodal QA inputs — PDF / Word / TXT / image / video in; three-persona review loop; Excel / Markdown / XMind out. Runs via Docker, local source, npm, or OpenClaw plugin.",
      tags: ["TypeScript", "Multimodal AI", "OpenClaw"],
      linkLabel: "GitHub",
      ctaLabel: "Docker Hub",
      imageAlt: "AI Test Case Generator cover",
      caseLabel: "Case study"
    }

  },
  "trading-assistant": {
    id: "trading-assistant",
    group: "agent",
    href: "https://github.com/InnoNestX/trading-assistant",
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
      caseLabel: "Case study"
    }

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
        "Self-hosted market intelligence and scheduled finance/global hotspot briefings on Cloudflare Workers — Admin UI, cron delivery, and Telegram / webhooks push.",
      tags: ["Cloudflare", "Workers", "Briefings"],
      linkLabel: "GitHub",
      ctaLabel: "Live",
      imageAlt: "GlobalPulse cover",
      caseLabel: "Case study"
    }

  },
  "custom-mail": {
    id: "custom-mail",
    group: "infra",
    href: "https://github.com/InnoNestX/Custom-Mail",
    ctaHref: "https://mail.xuxuclassmate.com",
    image: "/images/cover-custom-mail.jpg",
    en: {
      title: "Custom Mail",
      description:
        "Private web mail console on Cloudflare Workers (Rust) — compose, Markdown preview, attachments, send history. Brandable config, pluggable ESP (Brevo / Resend / …), Docker and ClawHub installs.",
      tags: ["Cloudflare", "Workers", "Rust"],
      linkLabel: "GitHub",
      ctaLabel: "Live",
      imageAlt: "Custom Mail cover",
      caseLabel: "Case study"
    }

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
      caseLabel: "Case study"
    }

  },
  "docker-suite": {
    id: "docker-suite",
    group: "quality",
    href: "https://hub.docker.com/u/xuxuclassmate",
    image: "/images/cover-docker.jpg",
    en: {
      title: "Test DB Docker Suite",
      description:
        "Ready-to-run database images for developers, QA, ops, and DBAs — Dameng, Highgo, Kingbase, TiDB and more, ranked by live Docker Hub pulls.",
      tags: ["Docker", "Dameng", "Highgo"],
      linkLabel: "Docker Hub",
      imageAlt: "Test DB Docker Suite cover",
      caseLabel: "Case study"
    }

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
      caseLabel: "Case study"
    }

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
      caseLabel: "Case study"
    }

  }
};

function groupLabel(group: ProjectGroupId): string {
  return GROUP_LABELS[group].en;
}

function toCard(id: ProjectId): Card {
  const project = PROJECTS[id];
  const copy = project.en;
  return {
    title: copy.title,
    description: copy.description,
    tags: copy.tags,
    href: project.href === "#" ? undefined : project.href,
    linkLabel: project.href === "#" ? undefined : copy.linkLabel,
    status:
      project.href === "#"
        ? "Coming Soon"
        : project.id === "automation-framework"
          ? "Stable"
          : "Active",
    ctaHref: project.ctaHref,
    ctaLabel: copy.ctaLabel,
    category: groupLabel(project.group),
    image: project.image,
    imageAlt: copy.imageAlt,
    slug: project.id,
    caseHref: `/en/work/${project.id}`,
    caseLabel: copy.caseLabel,
    demoHref:
      id === "testcase-generator"
        ? "/en/demo/ai-testcase-generator"
        : undefined,
    demoLabel: id === "testcase-generator" ? "Demo" : undefined
  };
}

export function getFeaturedProjects(_locale: Locale): Card[] {
  return FEATURED_IDS.map((id) => toCard(id));
}

export function getWorkProjects(_locale: Locale): Card[] {
  return PROJECT_ORDER.map((id) => toCard(id));
}

export function getProjectGroups(_locale: Locale): ProjectGroup[] {
  return GROUP_ORDER.map((group) => ({
    id: group,
    title: groupLabel(group),
    projects: PROJECT_ORDER.filter((id) => PROJECTS[id].group === group).map(
      (id) => toCard(id),
    )
  })).filter((section) => section.projects.length > 0);
}

export function projectCover(slug: CaseSlug): string {
  return PROJECTS[slug].image;
}
