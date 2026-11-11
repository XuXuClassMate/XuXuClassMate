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
  "Automation"
];

type OrgProjectDef = {
  title: string;
  href: string;
  category: OssCategoryId;
  org: "InnoNestX" | "XuXuClassMate";
  ctaHref?: string;
  ctaLabel?: { en: string; };
  linkLabel: { en: string; };
  tags: { en: string[]; };
  status: { en: string; };
  description: { en: string; };
};

type CategoryMeta = {
  en: { title: string; description: string };

};

const CATEGORY_META: Record<OssCategoryId, CategoryMeta> = {
  AI: {
    en: {
      title: "AI",
      description:
        "Installable AI products and agent skills — multimodal QA, risk tooling, and review loops."
    }

  },
  Testing: {
    en: {
      title: "Testing",
      description:
        "Environment and quality tooling that cuts setup time — for developers, QA, ops, and DBAs."
    }

  },
  "Developer Tools": {
    en: {
      title: "Developer Tools",
      description:
        "APIs, gateways, and developer-facing utilities used in real workflows."
    }

  },
  Infrastructure: {
    en: {
      title: "Infrastructure",
      description:
        "Runnable systems on Cloudflare Workers and related delivery stacks."
    }

  },
  Automation: {
    en: {
      title: "Automation",
      description:
        "API and E2E automation frameworks — patterns you can fork and extend."
    }

  }
};

const ORG_PROJECTS: OrgProjectDef[] = [
  {
    title: "AI Test Case Generator",
    href: "https://github.com/InnoNestX/testcase-generator",
    category: "AI",
    org: "InnoNestX",
    ctaHref: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
    ctaLabel: { en: "ClawHub skill" },
    linkLabel: { en: "GitHub" },
    tags: {
      en: ["AI Testing", "ClawHub", "Docker"]

    },
    status: { en: "Open source" },
    description: {
      en: "Shift testing left with multi-modal AI. Feed PRDs, images, or video walk-throughs — get production-grade, reviewable cases. Deploy via Docker, npm, or ClawHub."

    }
  },
  {
    title: "Trading Assistant",
    href: "https://github.com/InnoNestX/trading-assistant",
    category: "AI",
    org: "InnoNestX",
    ctaHref: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
    ctaLabel: { en: "ClawHub skill" },
    linkLabel: { en: "GitHub" },
    tags: {
      en: ["OpenClaw", "Risk", "CLI"]

    },
    status: { en: "Open source" },
    description: {
      en: "Signals, sizing, and risk checks as an installable OpenClaw skill."

    }
  },
  {
    title: "Test DB Docker Suite",
    href: "https://hub.docker.com/u/xuxuclassmate",
    category: "Testing",
    org: "XuXuClassMate",
    linkLabel: { en: "Docker Hub" },
    tags: {
      en: ["Docker Testing", "Dameng", "Highgo"]

    },
    status: { en: "Live" },
    description: {
      en: "Ready-to-run DB images — Dameng, Highgo, Kingbase, TiDB and more — for developers, QA, ops, and DBAs."

    }
  },
  {
    title: "Docker Hub API Gateway",
    href: "https://github.com/InnoNestX/docker-hub-pull-counter",
    category: "Developer Tools",
    org: "InnoNestX",
    ctaHref: "https://docker-hub-pull-counter.vercel.app",
    ctaLabel: { en: "Open API" },
    linkLabel: { en: "GitHub" },
    tags: {
      en: ["API", "OpenAPI", "SVG cards"]

    },
    status: { en: "Live" },
    description: {
      en: "REST + SVG stats for Docker Hub pulls — dogfooded by this site’s metrics."

    }
  },
  {
    title: "GlobalPulse",
    href: "https://github.com/InnoNestX/GlobalPulse",
    category: "Infrastructure",
    org: "InnoNestX",
    ctaHref: "https://pulse.xuxuclassmate.com/",
    ctaLabel: { en: "Open live site" },
    linkLabel: { en: "GitHub" },
    tags: {
      en: ["Cloudflare Workers", "Briefings", "Multi-channel"]

    },
    status: { en: "Live" },
    description: {
      en: "Self-hosted market intelligence and scheduled briefings on Cloudflare Workers."

    }
  },
  {
    title: "Custom Mail",
    href: "https://github.com/InnoNestX/Custom-Mail",
    category: "Infrastructure",
    org: "InnoNestX",
    ctaHref: "https://mail.xuxuclassmate.com",
    ctaLabel: { en: "Open live site" },
    linkLabel: { en: "GitHub" },
    tags: {
      en: ["Cloudflare Workers", "Rust", "Email"]

    },
    status: { en: "Live" },
    description: {
      en: "Private outbound mail workspace on Workers — Markdown compose, attachments, history, pluggable ESP."

    }
  },
  {
    title: "Java API Automation",
    href: "https://github.com/XuXuClassMate/My_Test_JAProject",
    category: "Automation",
    org: "XuXuClassMate",
    linkLabel: { en: "GitHub" },
    tags: {
      en: ["Java", "RestAssured", "Allure"]

    },
    status: { en: "Open source" },
    description: {
      en: "Scalable API automation with Java, JUnit, RestAssured, Maven, and Allure."

    }
  },
  {
    title: "Playwright E2E Framework",
    href: "#",
    category: "Automation",
    org: "InnoNestX",
    linkLabel: { en: "Coming soon" },
    tags: {
      en: ["Playwright", "E2E", "TypeScript"]

    },
    status: { en: "Planned" },
    description: {
      en: "Full-chain UI + API automation patterns — repository moving under InnoNestX."

    }
  }
];

function toProject(project: OrgProjectDef): OrgProject {
  return {
    title: project.title,
    description: project.description.en,
    href: project.href,
    linkLabel: project.linkLabel.en,
    ctaHref: project.ctaHref,
    ctaLabel: project.ctaLabel?.en,
    tags: project.tags.en,
    status: project.status.en,
    org: project.org,
    category: project.category,
  };
}

export function getOrgProjects(_locale: "en"): OrgProject[] {
  return ORG_PROJECTS.map((project) => toProject(project));
}

export type OrgCategoryGroup = {
  id: OssCategoryId;
  title: string;
  description: string;
  projects: OrgProject[];
};

export function getOrgCategories(_locale: "en"): OrgCategoryGroup[] {
  const projects = getOrgProjects("en");
  return OSS_CATEGORY_ORDER.map((id) => ({
    id,
    title: CATEGORY_META[id].en.title,
    description: CATEGORY_META[id].en.description,
    projects: projects.filter((project) => project.category === id),
  }));
}
