import type { Note, NoteCategory, NoteSection, PageMeta } from "./types";

export const NOTE_CATEGORIES: NoteCategory[] = [
  "QA Engineering",
  "AI Testing",
  "Playwright",
  "API Testing",
  "Performance Testing",
  "Docker",
  "Cloudflare",
  "OpenClaw",
  "DevOps"
];

type LandingDef = {
  slug: Note["slug"];
  category: NoteCategory;
  tags: { en: string[]; };
  proof?: { en: string; };
  related?: {
    en: NonNullable<Note["related"]>;

  };
  ctas?: {
    en: NonNullable<Note["ctas"]>;

  };
  en: {
    title: string;
    description: string;
    sections: NoteSection[];
    meta: PageMeta;
  };

};

const keywordsCore =
  "QA Engineer, SDET, Test Automation, AI Testing, Playwright, API Testing, Performance Testing, Docker Testing, XuXuClassMate";

function sectionsEn(blocks: Array<{ id: string; heading: string; body: string[]; bullets?: string[] }>): NoteSection[] {
  return blocks.map((block) => ({
    id: block.id,
    heading: block.heading,
    paragraphs: block.body,
    bullets: block.bullets
  }));
}

/** SEO landing articles — each page is an independent searchable entry. */
export const ENGINEERING_ARTICLES: LandingDef[] = [
  {
    slug: "ai-testcase-generator-multimodal",
    category: "AI Testing",
    tags: {
      en: ["AI Testing", "AI Test Case Generation", "Multimodal", "SDET"]

    },
    proof: {
      en: "Flagship product · ClawHub installs live on the homepage"

    },
    related: {
      en: [
        {
          label: "Flagship case study",
          href: "/en/work/testcase-generator"
        },
        { label: "AI Testing Lab", href: "/en/ai-testing" }
      ]

    },
    ctas: {
      en: [
        {
          label: "Open flagship case study",
          href: "/en/work/testcase-generator",
          primary: true
        },
        {
          label: "Try interactive demo",
          href: "/en/demo/ai-testcase-generator"
        },
        {
          label: "GitHub",
          href: "https://github.com/InnoNestX/testcase-generator",
          external: true
        }
      ]

    },
    en: {
      title: "How I Built an AI Test Case Generator with Multimodal Inputs",
      description:
        "A QA Engineer / SDET walkthrough of multimodal AI test case generation — PDF, Word, image, and video in; human review; reviewable cases out.",
      sections: sectionsEn([
        {
          id: "why",
          heading: "Why multimodal AI testing matters for QA Engineers",
          body: [
            "Most requirement artifacts are not clean Markdown. They arrive as PDFs, Word specs, screenshots, and short videos. As a QA Engineer and SDET, I needed AI Testing that starts from those real inputs — not from a demo prompt box.",
            "This article explains how I shaped AI Test Case Generation into an installable product with AI with Human Review — a three-persona review loop (Test · Dev · Product Manager) — instead of a one-off LLM notebook."
          ]
        },
        {
          id: "pipeline",
          heading: "The product pipeline",
          body: ["The generator follows a fixed chain:"],
          bullets: [
            "PDF / Word / TXT / Image / Video intake",
            "AI case generation",
            "Three-persona review loop (Test · Dev · Product Manager)",
            "Excel / Markdown / XMind export"
          ]
        },
        {
          id: "shipping",
          heading: "Shipping as installable AI Test Automation",
          body: [
            "AI Testing only counts when teams can install it. Official run modes: Docker, local source, npm global install, and OpenClaw plugin.",
            "Read the full flagship case study for architecture, My Role, metrics, and Try it now commands."
          ]
        }
      ]),
      meta: {
        title:
          "How I Built an AI Test Case Generator with Multimodal Inputs | XuXuClassMate",
        description:
          "QA Engineer / SDET guide to multimodal AI test case generation: PDF/Word/TXT/image/video → three-persona review → Excel/Markdown/XMind. Docker, source, npm, OpenClaw.",
        keywords: `${keywordsCore}, AI Test Case Generation, multimodal testing`
      }
    }

  },
  {
    slug: "playwright-e2e-framework",
    category: "Playwright",
    tags: {
      en: ["Playwright", "E2E", "Test Automation", "SDET"]

    },
    proof: {
      en: "Core Playwright showcase · repository upcoming"

    },
    related: {
      en: [
        { label: "Full-Stack E2E case", href: "/en/work/fullstack-e2e" },
        { label: "Playwright Lab", href: "/en/playwright" }
      ]

    },
    ctas: {
      en: [
        {
          label: "Open E2E case study",
          href: "/en/work/fullstack-e2e",
          primary: true
        },
        { label: "Playwright Lab", href: "/en/playwright" }
      ]

    },
    en: {
      title: "Building a Playwright E2E Testing Framework",
      description:
        "How a QA Engineer / SDET designs Playwright test automation beyond UI clicks — covering API, database, Redis, and message queues.",
      sections: sectionsEn([
        {
          id: "beyond-ui",
          heading: "Playwright as a Test Automation spine",
          body: [
            "Playwright is one of the strongest SEO and hiring keywords in modern test automation — and for good reason. For SDET work, I treat it as the execution spine of a full-chain framework, not only a browser driver.",
            "UI-only green builds miss regressions in API contracts, cache layers, and message paths. The framework goal is End-to-End Testing across the system chain."
          ]
        },
        {
          id: "chain",
          heading: "The full-stack validation chain",
          body: ["The target architecture validates:"],
          bullets: [
            "Frontend via Playwright",
            "API assertions",
            "Backend behavior",
            "MySQL / database state",
            "Redis cache side effects",
            "Message queue outcomes"
          ]
        },
        {
          id: "next",
          heading: "What ships next",
          body: [
            "The public TypeScript + Playwright repository is upcoming. Until then, the case study documents architecture, My Role, and the hiring-facing showcase narrative."
          ]
        }
      ]),
      meta: {
        title: "Building a Playwright E2E Testing Framework | XuXuClassMate",
        description:
          "QA Engineer / SDET guide to building a Playwright E2E testing framework covering UI, API, database, Redis, and MQ validation.",
        keywords: `${keywordsCore}, Playwright E2E, Full-Stack E2E, Test Automation Engineer`
      }
    }

  },
  {
    slug: "locust-api-performance-testing",
    category: "Performance Testing",
    tags: {
      en: ["Performance Testing", "Locust", "Go", "API Testing"]

    },
    proof: {
      en: "Python Locust suite · Go workers + Locust WebUI"

    },
    related: {
      en: [
        {
          label: "Python practice repo",
          href: "https://github.com/XuXuClassMate/My_Test_PyProject"
        },
        {
          label: "Go practice repo",
          href: "https://github.com/XuXuClassMate/My_Test_GoProject"
        },
        {
          label: "Java API automation case",
          href: "/en/work/automation-framework"
        }
      ]

    },
    ctas: {
      en: [
        {
          label: "Open Locust examples",
          href: "https://github.com/XuXuClassMate/My_Test_PyProject",
          primary: true,
          external: true
        },
        {
          label: "Open Go practice repo",
          href: "https://github.com/XuXuClassMate/My_Test_GoProject",
          external: true
        }
      ]

    },
    en: {
      title: "API Performance Testing with Locust and Go",
      description:
        "A practical Performance Testing note for QA Engineers: Locust for Python scripts, Go load frameworks behind Locust WebUI for heavier concurrency, and what to measure beyond green charts.",
      sections: sectionsEn([
        {
          id: "goal",
          heading: "What Performance Testing should prove",
          body: [
            "Performance Testing is not a vanity QPS number. For API Testing under load, I care about latency distribution, error budget, saturation points, and whether the database or cache is the first wall.",
            "Locust stays in my toolkit because it is Python-native, scriptable, and easy to keep next to API automation practice suites."
          ]
        },
        {
          id: "go-locust",
          heading: "Go workers + Locust WebUI",
          body: [
            "When concurrency needs to climb, I do not stay on Python alone. A Go load framework drives the workers while Locust still owns the master WebUI — same charts, hatch rate, and distributed control, with Go handling the heavy request path.",
            "That split keeps the familiar Locust operator experience, and lets me choose the worker language by pressure and ecosystem — Python for fast scripting, Go when throughput and resource efficiency matter more."
          ]
        },
        {
          id: "practice",
          heading: "Where the practice lives",
          body: [
            "My public Python project includes Locust, API, Selenium, and Appium examples. The Go practice repo is where I keep language-side load and tooling experiments that plug into the same Locust WebUI workflow."
          ]
        },
        {
          id: "signals",
          heading: "Signals I watch",
          body: ["When load rises, I look for:"],
          bullets: [
            "p95 / p99 latency cliffs",
            "Error rate vs throughput tradeoffs",
            "DB lock / connection pool pressure",
            "Cache miss amplification"
          ]
        }
      ]),
      meta: {
        title: "API Performance Testing with Locust and Go | XuXuClassMate",
        description:
          "QA Engineer guide to API Performance Testing — Locust, Go load frameworks + Locust WebUI, latency, error budgets, and practice repos.",
        keywords: `${keywordsCore}, Locust, Go, API Performance Testing, load testing, Locust WebUI`
      }
    }

  },
  {
    slug: "dockerized-test-environment",
    category: "Docker",
    tags: {
      en: ["Docker", "Test Infrastructure", "Docker Testing", "QA"]

    },
    proof: {
      en: "Related field guide: Dameng / Highgo Docker for QA · 54k+ pulls"

    },
    related: {
      en: [
        {
          label: "Dameng / Highgo Docker guide",
          href: "/en/blog/enterprise-db-docker-qa"
        },
        { label: "Docker Suite case", href: "/en/work/docker-suite" },
        { label: "Test Infrastructure", href: "/en/infrastructure" }
      ]

    },
    ctas: {
      en: [
        {
          label: "Browse Docker Hub",
          href: "https://hub.docker.com/u/xuxuclassmate",
          primary: true,
          external: true
        },
        {
          label: "Read Dameng / Highgo guide",
          href: "/en/blog/enterprise-db-docker-qa"
        }
      ]

    },
    en: {
      title: "Building a Dockerized Test Environment",
      description:
        "How QA Engineers build Docker Testing environments that boot in minutes — reusable images, CI stability, and inspectable pull proof.",
      sections: sectionsEn([
        {
          id: "problem",
          heading: "The install tax kills Test Infrastructure",
          body: [
            "If every engineer spends a day installing databases before the first automated run, Test Infrastructure has already failed. Docker Testing exists to remove that tax.",
            "I publish pull-and-run images so local laptops and CI share the same environment contract."
          ]
        },
        {
          id: "principles",
          heading: "Principles that keep images usable",
          body: [],
          bullets: [
            "Predictable tags over clever names",
            "One service per image when possible",
            "Docs written for pull-and-run, not folklore",
            "Live pull metrics so adoption is visible"
          ]
        },
        {
          id: "proof",
          heading: "Where to go deeper",
          body: [
            "For Dameng / Highgo specifics and live Docker Hub numbers, read the dedicated field guide. For product packaging and My Role, open the Test DB Docker Suite case study."
          ]
        }
      ]),
      meta: {
        title: "Building a Dockerized Test Environment | XuXuClassMate",
        description:
          "QA Engineer guide to Docker Testing and Test Infrastructure — reusable DB images, CI-ready environments, and live pull proof.",
        keywords: `${keywordsCore}, Docker Testing, Test Infrastructure, Dockerized test environment`
      }
    }

  },
  {
    slug: "ai-assisted-test-case-generation",
    category: "AI Testing",
    tags: {
      en: ["AI Testing", "AI Test Automation", "Test Cases", "QA"]

    },
    related: {
      en: [
        {
          label: "Flagship case study",
          href: "/en/work/testcase-generator"
        },
        {
          label: "Multimodal generator article",
          href: "/en/blog/ai-testcase-generator-multimodal"
        },
        { label: "AI Testing Lab", href: "/en/ai-testing" }
      ]

    },
    ctas: {
      en: [
        {
          label: "Open flagship case study",
          href: "/en/work/testcase-generator",
          primary: true
        },
        {
          label: "Try interactive demo",
          href: "/en/demo/ai-testcase-generator"
        }
      ]

    },
    en: {
      title: "AI-Assisted Test Case Generation",
      description:
        "What AI-assisted test case generation means for QA Engineers — human review loops, export formats, and why drafts without judgment create noise.",
      sections: sectionsEn([
        {
          id: "definition",
          heading: "AI assistance is not autopilot",
          body: [
            "AI-Assisted Test Case Generation should accelerate drafting for QA Engineers, not replace SDET judgment. Without Test / Developer / Product Manager review, LLM dumps become review debt.",
            "Useful outputs are structured scenarios, boundary cases, negative paths, and exports teams already use — Excel, Markdown, XMind."
          ]
        },
        {
          id: "practice",
          heading: "How I practice it",
          body: [
            "My installable generator encodes that human review loop. Read the flagship case study for architecture and live Docker / npm / ClawHub metrics, or the multimodal build article for the engineering walkthrough."
          ]
        }
      ]),
      meta: {
        title: "AI-Assisted Test Case Generation | XuXuClassMate",
        description:
          "QA Engineer / SDET perspective on AI-assisted test case generation — human review loops, structured outputs, and installable AI Testing tools.",
        keywords: `${keywordsCore}, AI-Assisted Test Case Generation, AI Testing, human review`
      }
    }

  },
  {
    slug: "ai-agent-software-testing",
    category: "AI Testing",
    tags: {
      en: ["AI Testing", "AI Agent", "OpenClaw", "SDET"]

    },
    related: {
      en: [
        { label: "AI Testing Lab", href: "/en/ai-testing" },
        {
          label: "Shipping ClawHub skills",
          href: "/en/blog/clawhub-skill-shipping"
        }
      ]

    },
    ctas: {
      en: [
        {
          label: "Explore AI Testing Lab",
          href: "/en/ai-testing",
          primary: true
        },
        {
          label: "ClawHub profile",
          href: "https://clawhub.ai/xuxuclassmate",
          external: true
        }
      ]

    },
    en: {
      title: "AI Agent for Software Testing",
      description:
        "How QA Engineers and SDETs should think about AI agents for software testing — installable skills, evidence, and review loops over demos.",
      sections: sectionsEn([
        {
          id: "shape",
          heading: "Agents need an install path",
          body: [
            "An AI Agent for Software Testing is only real when an agent runtime can install it. That is why ClawHub / OpenClaw packaging sits next to Docker and CLI paths in my work.",
            "The research line covers requirement → test plan → cases → execution → bug detection → report. Products ship when that chain is installable and reviewable."
          ]
        },
        {
          id: "evidence",
          heading: "Evidence over theater",
          body: [
            "Downloads, Docker pulls, and case studies are the proof layer. See AI Testing Lab for the roadmap and ClawHub shipping notes for packaging discipline."
          ]
        }
      ]),
      meta: {
        title: "AI Agent for Software Testing | XuXuClassMate",
        description:
          "QA Engineer / SDET view on AI agents for software testing — installable OpenClaw skills, evidence metrics, and three-persona review loops.",
        keywords: `${keywordsCore}, AI Agent for Software Testing, OpenClaw, ClawHub`
      }
    }

  }
];

export function toNote(def: LandingDef): Note {
  const copy = def.en;
  return {
    slug: def.slug,
    title: copy.title,
    description: copy.description,
    category: def.category,
    proof: def.proof?.en,
    tags: def.tags.en,
    sections: copy.sections,
    related: def.related?.en,
    ctas: def.ctas?.en,
    meta: copy.meta
  };
}
