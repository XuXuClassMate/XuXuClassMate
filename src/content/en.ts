import type { LocaleCopy } from "./types";
import { getFeaturedProjects, getWorkProjects } from "./projects";
import { getNotes } from "./notes";
import { getOrgProjects } from "./org";

const sharedKeywords =
  "xuxuclassmate, XuXuClassMate, QA Engineer, SDET, Test Automation Engineer, Software Test Engineer, AI Testing Engineer, Playwright QA Engineer, SDET Portfolio, API Automation Testing, Python Test Automation, QA Engineer Dubai, Playwright, Docker, OpenClaw, ClawHub";

const homeSocial = [
  {
    href: "https://github.com/XuXuClassMate",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://fgg6gzb6uk.feishu.cn/docx/LkwDdpLjnoIdGwxOH6zcRwEWnhd?from=from_copylink",
    label: "Blog",
    icon: "blog",
  },
  {
    href: "#",
    label: "WeChat",
    icon: "wechat",
    wechat: true,
  },
] as const;

export const en: LocaleCopy = {
  brand: "XuXuClassMate",
  author: "XuXuClassMate",
  languageSwitch: "中文",
  contactLabel: "Contact：",
  contactHint:
    "Open for collaboration — pick a lane and email me.",
  contactOffers: [
    "AI testing tool / ClawHub skill customization",
    "QA team leadership advisory (startup → scale-up)",
    "Database / Docker test-environment enablement",
    "Join InnoNestX open-source projects — learn and build together",
  ],
  copyEmail: "Copy email",
  copiedEmail: "Copied",
  backToTop: "Back to top",
  themeToggle: "Theme",
  themeToLight: "Light",
  themeToDark: "Dark",
  copyright: "© 2020-2026 XuXuClassMate",
  wechatAlt: "WeChat QR Code",
  closeModal: "Close",
  menuLabel: "Menu",
  skipToContent: "Skip to content",
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    blog: "Tech Blog",
    aiTesting: "AI Testing",
    github: "GitHub",
    life: "Life",
    contact: "Contact",
    learn: "Experience",
    work: "Projects",
    notes: "Tech Blog",
    innonestx: "InnoNestX",
  },
  meta: {
    home: {
      title: "XuXuClassMate | QA Engineer & Test Automation Engineer",
      description:
        "QA Engineer specializing in test automation, API testing, performance testing, Playwright, Python, Java, Docker and AI-assisted testing.",
      keywords: sharedKeywords,
      ogTitle: "XuXuClassMate | QA Engineer & Test Automation Engineer",
    },
    about: {
      title: "About | QA Engineer & SDET | XuXuClassMate",
      description:
        "I'm a QA / Test Engineer focused on test automation, API testing, performance testing, and AI-assisted testing.",
      keywords: `${sharedKeywords}, About`,
    },
    "ai-testing": {
      title: "AI Testing Lab | AI Testing Engineer | XuXuClassMate",
      description:
        "AI test case generation, LLM-based API testing, bug analysis, and testing agents.",
      keywords: `${sharedKeywords}, AI Testing Lab`,
    },
    playwright: {
      title: "Playwright Testing Lab | XuXuClassMate",
      description:
        "Playwright + TypeScript automation lab for UI, API, fixtures, parallel testing, and CI/CD.",
      keywords: `${sharedKeywords}, Playwright Testing Lab`,
    },
    infrastructure: {
      title: "Test Infrastructure | Docker & Cloudflare | XuXuClassMate",
      description:
        "Docker, CI/CD, GitHub Actions, Cloudflare Workers, and containerized testing infrastructure.",
      keywords: `${sharedKeywords}, Test Infrastructure`,
    },
    blog: {
      title: "Technical Blog | QA / SDET Knowledge Base | XuXuClassMate",
      description:
        "Technical articles on Playwright, performance testing, Docker for QA, and AI-assisted testing.",
      keywords: `${sharedKeywords}, Technical Blog, Playwright vs Selenium`,
    },
    life: {
      title: "Life Journey | XuXuClassMate",
      description:
        "Travel, music, and life outside the keyboard — the personal side of XuXuClassMate, QA engineer and AI testing tool builder.",
      keywords: `${sharedKeywords}, travel, hobbies`,
    },
    learn: {
      title: "Experience | QA to AI Testing | XuXuClassMate",
      description:
        "Experience path from QA craft and test management to Locust, Playwright, AI testing, and product systems.",
      keywords: `${sharedKeywords}, Experience, SDET, Locust, QA training`,
    },
    work: {
      title: "Projects | SDET Portfolio & Test Automation | XuXuClassMate",
      description:
        "Project case studies: Playwright E2E, Java API automation, Docker test infrastructure, and AI testing tools.",
      keywords: `${sharedKeywords}, SDET Portfolio, test automation projects`,
    },
    notes: {
      title: "Technical Blog | XuXuClassMate",
      description:
        "Technical articles on database Docker setups, ClawHub skill shipping, and quality engineering.",
      keywords: `${sharedKeywords}, Technical Blog, Dameng Docker, ClawHub`,
    },
    innonestx: {
      title: "InnoNestX | Open-source Lab",
      description:
        "InnoNestX is my open-source organization — practical tools and product systems you can learn from, run, and contribute to.",
      keywords: `${sharedKeywords}, InnoNestX, GlobalPulse, open source`,
    },
  },
  home: {
    subtitle: "Installable quality engineering",
    title: "Turn quality work into products teams can run.",
    description:
      "I ship AI testing tools, OpenClaw / ClawHub skills, and reusable environments — then prove them with live Docker, ClawHub, and API metrics.",
    positioning:
      "I build installable quality tools — then keep shipping systems teams can actually run.",
    valuesTitle: "How I Work",
    values: [
      {
        title: "Installable > Demoable",
        description:
          "If it cannot run via Docker, CLI, or ClawHub, it is not finished — slides do not count as delivery.",
      },
      {
        title: "AI with review loops",
        description:
          "Multimodal generation is useful only when Test / Dev / Product judgment stays in the loop.",
      },
      {
        title: "Environments that reuse",
        description:
          "Containers, database images, and gateways so teams can boot the same stack in CI and on laptops.",
      },
    ],
    highlightsTitle: "By the Numbers",
    highlights: [
      {
        value: "54k+",
        label: "Docker pulls — environments teams reuse",
        metric: "docker:total-pulls",
      },
      {
        value: "1.6k+",
        label: "ClawHub downloads — skills agents install",
        metric: "clawhub:total-downloads",
      },
      {
        value: "500+",
        label: "API Gateway calls — READMEs & tools hitting live stats",
        metric: "api:gateway-calls",
      },
      {
        value: "12",
        label: "Docker images published for QA stacks",
        metric: "docker:repo-count",
      },
    ],
    featuredTitle: "Featured Work",
    featuredCta: "View all projects",
    featured: getFeaturedProjects("en"),
    principlesTitle: "What I Optimize For",
    principles: [
      {
        title: "Installable > Demoable",
        description:
          "If it cannot run via Docker, CLI, or ClawHub, it is not finished.",
      },
      {
        title: "Language Is a Tool",
        description:
          "Pick the stack that ships quality fastest — frameworks and environments matter more than a single language.",
      },
      {
        title: "Judgment Still Leads",
        description:
          "AI accelerates drafting; QA craft decides what is good enough to ship.",
      },
    ],
    channelsTitle: "Find Me On",
    channels: [
      {
        title: "GitHub",
        description:
          "Open-source AI tools, agent skills, and test automation frameworks.",
        href: "https://github.com/XuXuClassMate",
        linkLabel: "View GitHub",
        icon: "github",
      },
      {
        title: "Docker Hub",
        description:
          "Reusable database and test-environment images for QA teams.",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "View Docker Hub",
        icon: "docker",
      },
      {
        title: "ClawHub",
        description:
          "Installable OpenClaw agent skills — Test Case Generator and Trading Assistant.",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "Visit ClawHub",
        icon: "robot",
      },
      {
        title: "GlobalPulse",
        description:
          "Live product — scheduled market intelligence briefings.",
        href: "https://pulse.xuxuclassmate.com/",
        linkLabel: "Open Pulse",
        icon: "robot",
      },
    ],
    links: [
      {
        title: "Learning Path",
        description: "From QA craft to installable AI tools and product systems",
        href: "/en/learn.html",
      },
      {
        title: "Project Gallery",
        description: "Install paths: ClawHub · Docker · browser products",
        href: "/en/work.html",
      },
      {
        title: "Notes",
        description: "Database Docker for QA and ClawHub shipping notes",
        href: "/en/notes.html",
      },
      {
        title: "InnoNestX",
        description: "My open-source org — projects, learning, and ways to join",
        href: "/en/innonestx.html",
      },
    ],
    footerDesc: "Installable quality engineering",
    social: [...homeSocial],
  },
  learn: {
    subtitle: "EXPERIENCE",
    title: "From QA Craft to AI Testing",
    description:
      "Experience across test management, automation frameworks, performance, Playwright, and AI-assisted testing",
    stackTitle: "Tech Stack",
    stack: [
      {
        title: "AI & Agents",
        description: "",
        items: [
          "OpenClaw / ClawHub skills",
          "Multimodal test generation",
          "LLM review loops",
          "Agent-ready CLI & Docker packaging",
        ],
      },
      {
        title: "Test Management",
        description: "",
        items: [
          "QA leadership across ByteDance, SOE, and startups",
          "Release readiness and quality gates",
          "Hiring, mentoring, and capacity planning",
          "Cross-functional delivery with product & engineering",
        ],
      },
      {
        title: "Automation Testing",
        description: "",
        items: [
          "Playwright / Selenium UI automation",
          "API automation (language-agnostic)",
          "Locust performance & load testing",
          "Framework design & reusable suites",
        ],
      },
      {
        title: "Containers & Delivery",
        description: "",
        items: [
          "Docker / Compose",
          "CI/CD pipelines",
          "Domestic & open-source DB images",
          "Test environment management",
        ],
      },
    ],
    resourcesTitle: "Learning Resources",
    resources: [
      {
        title: "AI Test Case Generator",
        description:
          "My open-source tool: turn PRDs, screenshots, and multimodal inputs into Excel / Markdown / XMind with a three-persona review loop.",
        href: "https://github.com/XuXuClassMate/testcase-generator",
        linkLabel: "View on GitHub",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw / ClawHub skill for technical analysis, signals, position sizing, and risk checks — also available via Docker and pip.",
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "View on GitHub",
      },
      {
        title: "GlobalPulse",
        description:
          "Self-hosted market intelligence and scheduled briefings on Cloudflare Workers — try the live app, then dig into how the system is built.",
        href: "https://pulse.xuxuclassmate.com/",
        linkLabel: "Open live site",
      },
      {
        title: "Python QA Practice",
        description:
          "Locust performance scripts plus API, Selenium, and Appium examples in one practice repo.",
        href: "https://github.com/XuXuClassMate/My_Test_PyProject",
        linkLabel: "View on GitHub",
      },
      {
        title: "ClawHub",
        description:
          "Discover and install OpenClaw agent skills — including tools I publish for QA and trading workflows.",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "Browse ClawHub",
      },
    ],
    timelineTitle: "Learning Journey",
    timeline: [
      {
        title: "QA Craft Foundations",
        description:
          "Built solid functional, API, and exploratory testing habits — the judgment that still guides every tool I ship.",
      },
      {
        title: "Team Leadership Across Stages",
        description:
          "Led QA through ByteDance, SOE, and startup contexts — process, people, and release readiness under different constraints.",
      },
      {
        title: "Automation & Performance at Scale",
        description:
          "Grew from scripts to frameworks — Playwright, Locust, and reusable environments, no longer tied to one language.",
      },
      {
        title: "AI-Native Tooling",
        description:
          "Turned repetitive QA work into products — multimodal generation, review loops, and exportable deliverables.",
      },
      {
        title: "OpenClaw Skills & Product Systems",
        description:
          "Packaging ClawHub skills and shipping systems like GlobalPulse and the Docker Hub API Gateway so workflows run beyond demos.",
      },
    ],
    focusTitle: "Current Learning Focus",
    focusHeading: "Agent Skills, Multimodal QA & Product Systems",
    focusIntro:
      "Right now I am deepening the loop from idea → agent skill / product → packaged system that teams can run:",
    focusItems: [
      "Publishing and iterating OpenClaw / ClawHub skills",
      "Multimodal requirement → structured test artifacts",
      "Locust and automation craft behind AI tools",
      "Product systems on Workers and APIs",
    ],
    footerDesc: "Learning in public — AI tools with quality roots",
    social: [
      {
        href: "https://github.com/XuXuClassMate",
        label: "GitHub",
        icon: "github",
      },
      {
        href: "https://hub.docker.com/u/xuxuclassmate",
        label: "Docker Hub",
        icon: "docker",
      },
      {
        href: "https://medium.com/@xuxuclassmate",
        label: "Medium",
        icon: "medium",
      },
    ],
  },
  work: {
    subtitle: "PORTFOLIO",
    title: "Tools, Skills & Environments",
    description:
      "AI products on GitHub / Docker / ClawHub, plus the quality foundations behind them",
    projectsTitle: "Featured Projects",
    filterAll: "All",
    projects: getWorkProjects("en"),
    approachTitle: "How Projects Ship",
    approach: [
      {
        title: "Package for real installs",
        description:
          "Docker images, CLI entrypoints, and OpenClaw / ClawHub skills — so others can run what I build.",
      },
      {
        title: "Keep quality in the loop",
        description:
          "Reviewer personas, regression habits, and environments that teams can reuse — not one-off scripts.",
      },
      {
        title: "Stay stack-flexible",
        description:
          "TypeScript, Python, Java, or whatever fits — the constraint is delivery quality, not language identity.",
      },
    ],
    skillsTitle: "Capabilities & Proof",
    skills: [
      {
        title: "AI Tooling & Agents",
        items: [
          "OpenClaw / ClawHub skill design",
          "Multimodal test generation",
          "LLM review & export pipelines",
          "Docker / npm / pip packaging",
        ],
        evidence: [
          { label: "ClawHub", href: "https://clawhub.ai/xuxuclassmate" },
          {
            label: "Testcase Generator",
            href: "https://github.com/XuXuClassMate/testcase-generator",
          },
        ],
      },
      {
        title: "Test Management",
        items: [
          "QA team leadership across ByteDance, SOE, and startup stages",
          "Release readiness, risk triage, and quality gates",
          "Hiring, mentoring, and capacity planning",
          "Cross-functional delivery with product and engineering",
        ],
      },
      {
        title: "Functional Testing",
        items: [
          "Requirements analysis & test design",
          "Black-box & white-box testing",
          "API & integration testing",
          "Defect management",
        ],
      },
      {
        title: "Test Automation",
        items: [
          "Web UI automation (Playwright / Selenium)",
          "API automation",
          "Mobile automation (Appium)",
          "Reusable framework design",
        ],
        evidence: [
          {
            label: "Java practice",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
          {
            label: "Python practice",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject",
          },
        ],
      },
      {
        title: "Performance Testing",
        items: [
          "Locust load & stress testing",
          "API / scenario performance scripts",
          "Monitoring, analysis, and tuning",
          "Concurrency design",
        ],
        evidence: [
          {
            label: "Locust examples",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject/tree/main/Performance_Test",
          },
        ],
      },
      {
        title: "Test Environments",
        items: [
          "Containerized DB & service stacks",
          "CI/CD pipeline optimization",
          "Domestic & open-source DB images",
          "Tooling integration",
        ],
        evidence: [
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/u/xuxuclassmate",
          },
        ],
      },
    ],
    caseBackLabel: "All projects",
    caseProblemTitle: "Problem",
    caseSolutionTitle: "Solution",
    caseTradeoffsTitle: "Tradeoffs",
    caseOutcomesTitle: "What shipped",
    caseArtifactsTitle: "Inspectable proof",
    caseMetricsTitle: "Proof metrics",
    caseLinksTitle: "Links",
    caseOverviewTitle: "Overview",
    caseStackTitle: "Tech Stack",
    caseArchitectureTitle: "Architecture",
    caseFeaturesTitle: "Key Features",
    caseContributionTitle: "My Contribution",
    caseResultsTitle: "Results",
    cases: [
      {
        slug: "testcase-generator",
        title: "AI Test Case Generator",
        subtitle: "CASE STUDY",
        description:
          "Turn multimodal requirements into reviewable test artifacts teams can export and run.",
        cover: "/images/cover-testcase.jpg",
        coverAlt: "AI Test Case Generator",
        problem:
          "QA teams spend hours turning PDFs, screenshots, and rough notes into structured cases — and AI drafts without review loops create noise, not coverage.",
        solution:
          "Built a multimodal pipeline (PDF, Word, images, video) with Test / Dev / Product review personas, then packaged it as Docker, npm, and an OpenClaw / ClawHub skill.",
        tradeoffs: [
          "Chose review personas over raw LLM dumps — quieter drafts, higher acceptance by QA leads.",
          "Shipped Docker + npm + ClawHub together so agents and humans share one product, not three demos.",
          "Accepted slower first answers in exchange for exportable Excel / Markdown / XMind artifacts teams already use."
        ],
        artifacts: [
          {
            "title": "ClawHub skill page",
            "description": "Install path agents actually use — downloads are live on the homepage.",
            "href": "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            "linkLabel": "Open ClawHub"
          },
          {
            "title": "Docker image",
            "description": "Non-agent local runs with the same pipeline packaged for CI laptops.",
            "href": "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            "linkLabel": "Docker Hub"
          },
          {
            "title": "Source repository",
            "description": "Multimodal input handlers and review-loop wiring in the open.",
            "href": "https://github.com/XuXuClassMate/testcase-generator",
            "linkLabel": "GitHub"
          }
        ],
        outcomes: [
          "Installable on ClawHub as AI Test Case Generator",
          "Docker Hub and npm distribution for local runs",
          "Exportable Excel / Markdown / XMind deliverables",
        ],
        metrics: [
          { label: "ClawHub installs", value: "700+", metric: "clawhub:ai-testcase-generator" },
          { label: "Packaging", value: "Docker · npm · skill" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/testcase-generator",
          },
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
          },
          { label: "ClawHub", href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator" },
        ],
        meta: {
          title: "AI Test Case Generator Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate shipped a multimodal AI test case generator with review loops, Docker/npm packaging, and ClawHub distribution.",
          keywords: `${sharedKeywords}, testcase generator case study`,
        },
      },
      {
        slug: "trading-assistant",
        title: "Trading Assistant Core",
        subtitle: "CASE STUDY",
        description:
          "An OpenClaw skill that agents can install for signals, sizing, and risk checks.",
        cover: "/images/cover-trading.jpg",
        coverAlt: "Trading Assistant Core",
        problem:
          "Trading workflows were stuck in notebooks and chat prompts — agents could not install a durable skill with clear risk guardrails.",
        solution:
          "Packaged support/resistance, multi-indicator signals, position sizing, and risk alerts as a ClawHub skill with Docker and pip / CLI entrypoints.",
        tradeoffs: [
          "Risk sizing and alerts beat signal fireworks — a skill that only shouts entries is unsafe to install.",
          "Kept CLI / Docker paths so traders without an agent runtime can still run the same logic.",
          "Published on ClawHub instead of notebook-only workflows so agents get a durable package."
        ],
        artifacts: [
          {
            "title": "ClawHub skill",
            "description": "Installable OpenClaw skill with live download counts.",
            "href": "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            "linkLabel": "Open ClawHub"
          },
          {
            "title": "GitHub + Docker",
            "description": "Human-facing installs alongside the agent skill.",
            "href": "https://github.com/XuXuClassMate/trading-assistant",
            "linkLabel": "GitHub"
          }
        ],
        outcomes: [
          "Published as an installable OpenClaw / ClawHub skill",
          "CLI and Docker paths for non-agent use",
          "Risk-first defaults instead of signal-only demos",
        ],
        metrics: [
          { label: "ClawHub installs", value: "900+", metric: "clawhub:trading-assistant-core" },
          { label: "Surfaces", value: "Skill · Docker · CLI" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/trading-assistant",
          },
          { label: "ClawHub", href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core" },
        ],
        meta: {
          title: "Trading Assistant Core Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate packaged Trading Assistant Core as an OpenClaw / ClawHub skill with Docker and CLI installs.",
          keywords: `${sharedKeywords}, trading assistant case study`,
        },
      },
      {
        slug: "globalpulse",
        title: "GlobalPulse",
        subtitle: "CASE STUDY",
        description:
          "Scheduled market intelligence briefings with multi-channel delivery on Cloudflare Workers.",
        cover: "/images/cover-globalpulse.jpg",
        coverAlt: "GlobalPulse",
        problem:
          "Teams needed reliable finance and hotspot briefings — not one-off scripts — with calendars, templates, and push channels they control.",
        solution:
          "Built a self-hosted Cloudflare Workers app with Admin UI, KV config, cron schedules, market calendars, and Feishu / WeChat / Telegram providers.",
        tradeoffs: [
          "Self-hosted Workers + KV over a SaaS newsletter — teams keep calendars and credentials.",
          "Admin UI with password gates instead of pure cron scripts — operators can preview before send.",
          "Multi-channel providers (Feishu / WeChat / Telegram) instead of email-only delivery."
        ],
        artifacts: [
          {
            "title": "Live product",
            "description": "Running deployment for scheduled market intelligence briefings.",
            "href": "https://pulse.xuxuclassmate.com/",
            "linkLabel": "Open Pulse"
          },
          {
            "title": "Source repository",
            "description": "Workers app, providers, and admin flows in the open.",
            "href": "https://github.com/InnoNestX/GlobalPulse",
            "linkLabel": "GitHub"
          }
        ],
        outcomes: [
          "Password-protected Admin UI for schedule and provider settings",
          "Cron-driven delivery with timezone-aware market calendars",
          "Previewable multi-channel push before send",
        ],
        metrics: [
          { label: "Runtime", value: "Cloudflare Workers" },
          { label: "Channels", value: "Feishu · WeChat · Telegram" },
        ],
        links: [
          { label: "GitHub", href: "https://github.com/InnoNestX/GlobalPulse" },
          { label: "Live", href: "https://pulse.xuxuclassmate.com/" },
          { label: "InnoNestX", href: "https://github.com/InnoNestX" },
        ],
        meta: {
          title: "GlobalPulse Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate built GlobalPulse — scheduled finance and global hotspot briefings on Cloudflare Workers.",
          keywords: `${sharedKeywords}, GlobalPulse, finance briefing`,
        },
      },
      {
        slug: "docker-hub-api-gateway",
        title: "Docker Hub API Gateway",
        subtitle: "CASE STUDY",
        description:
          "A unified REST gateway for Docker Hub stats, cards, and interactive docs.",
        cover: "/images/cover-docker-gateway.jpg",
        coverAlt: "Docker Hub API Gateway",
        problem:
          "Docker Hub data was fragmented — pull totals, repo details, and badges needed a single, documentable API surface for tools and READMEs.",
        solution:
          "Shipped a Hono-based gateway with user stats, SVG cards, repo/tag APIs, OpenAPI docs, bilingual UI, and live request testing.",
        tradeoffs: [
          "Unified REST + SVG cards over scraping Hub HTML — stable for README embeds.",
          "OpenAPI + bilingual tester so callers can verify before wiring production.",
          "Dogfoods its own /api/stats — this site’s homepage metrics call the same gateway."
        ],
        artifacts: [
          {
            "title": "Live API + docs",
            "description": "User stats, repo details, and interactive OpenAPI.",
            "href": "https://docker-hub-pull-counter.vercel.app",
            "linkLabel": "Open gateway"
          },
          {
            "title": "Embeddable stats card",
            "description": "SVG card used in READMEs and on this site.",
            "href": "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
            "linkLabel": "View SVG"
          }
        ],
        outcomes: [
          "Public REST endpoints for user and repository stats",
          "Embeddable Docker stats SVG cards",
          "Interactive OpenAPI docs for real-time testing",
        ],
        metrics: [
          { label: "Stack", value: "Hono · Vercel" },
          { label: "Docs", value: "OpenAPI · EN/ZH" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/InnoNestX/docker-hub-pull-counter",
          },
          {
            label: "Live API",
            href: "https://docker-hub-pull-counter.vercel.app",
          },
        ],
        meta: {
          title: "Docker Hub API Gateway Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate shipped a unified Docker Hub REST API gateway with interactive docs and SVG stats cards.",
          keywords: `${sharedKeywords}, Docker Hub API gateway`,
        },
      },
      {
        slug: "docker-suite",
        title: "Test DB Docker Suite",
        subtitle: "CASE STUDY",
        description:
          "Reusable database images so QA environments boot in minutes, not days.",
        cover: "/images/cover-docker.jpg",
        coverAlt: "Test DB Docker Suite",
        problem:
          "Domestic and open-source databases were painful to stand up for QA — undocumented installs blocked automation and onboarding.",
        solution:
          "Published ready-to-run Dameng, Highgo, Kingbase, TiDB, and related images on Docker Hub with consistent tags and docs for test teams.",
        tradeoffs: [
          "Boring, predictable tags over clever names — CI suites need stability first.",
          "One service per image so failures stay diagnosable in pull-and-run flows.",
          "Published Dameng / Highgo early — pull volume validated that the database pain was real."
        ],
        artifacts: [
          {
            "title": "Docker Hub namespace",
            "description": "All QA-oriented images with live pull totals on the homepage.",
            "href": "https://hub.docker.com/u/xuxuclassmate",
            "linkLabel": "Browse images"
          },
          {
            "title": "Live user stats API",
            "description": "Aggregated pulls via the Docker Hub API Gateway.",
            "href": "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            "linkLabel": "JSON stats"
          }
        ],
        outcomes: [
          "Dameng and Highgo images used widely by QA teams",
          "Consistent pull-and-run workflow for CI",
          "A reusable foundation under AI tooling demos",
        ],
        metrics: [
          { label: "Dameng pulls", value: "30k+", metric: "docker:dameng" },
          { label: "Highgo pulls", value: "17k+", metric: "docker:highgo" },
          { label: "Kingbase pulls", value: "1.6k+", metric: "docker:kingbase" },
          { label: "TiDB pulls", value: "900+", metric: "docker:tidb" },
        ],
        links: [
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/u/xuxuclassmate",
          },
        ],
        meta: {
          title: "Test DB Docker Suite Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate shipped Dameng, Highgo, and related Docker DB images for reusable QA environments.",
          keywords: `${sharedKeywords}, docker test db case study`,
        },
      },
      {
        slug: "automation-framework",
        title: "Java API Automation Framework",
        subtitle: "CASE STUDY",
        description:
          "A scalable API automation framework based on Java, JUnit and RestAssured.",
        cover: "/images/cover-automation.jpg",
        coverAlt: "Java API Automation Framework",
        overview:
          "A scalable API automation framework based on Java, JUnit and RestAssured — built for reuse across environments, auth modes, and CI pipelines.",
        techStack: ["Java", "JUnit", "RestAssured", "Maven", "Allure"],
        architecture: [
          {
            title: "Test chain",
            layers: [
              "Test Cases",
              "Page / API Objects",
              "Service Layer",
              "RestAssured",
              "API",
            ],
          },
        ],
        features: [
          "API request abstraction",
          "Environment configuration",
          "Test data management",
          "Authentication handling",
          "Assertion utilities",
          "Allure reporting",
          "CI/CD integration",
        ],
        contribution: [
          "Designed layered API object and service abstractions for maintainable suites.",
          "Standardized environment config, auth helpers, and assertion utilities.",
          "Integrated Allure reporting and CI-friendly Maven execution.",
        ],
        results: [
          "Reusable Java API suite structure published on GitHub",
          "Patterns reused beside Python / Locust practice repos",
          "Clear craft base under AI testing tooling",
        ],
        proof: {
          github: "https://github.com/XuXuClassMate/My_Test_JAProject",
          readme: "https://github.com/XuXuClassMate/My_Test_JAProject#readme",
        },
        status: "live",
        problem:
          "One-off scripts do not survive team handoffs — API suites need durable structure.",
        solution:
          "Built a Java + RestAssured framework with clear layers, reporting, and CI hooks.",
        tradeoffs: [
          "Layered API objects over flat scripts — slower first test, faster year-two changes.",
          "Allure + Maven over ad-hoc logs — reports that survive handoffs.",
          "Public practice repo so patterns can be copied without a private wiki.",
        ],
        artifacts: [
          {
            title: "Java practice suite",
            description: "Reusable API automation patterns.",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
            linkLabel: "GitHub",
          },
          {
            title: "Python + Locust examples",
            description: "Performance, API, Selenium, and Appium practice.",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "Reusable suite structure for API work",
          "Allure-ready reporting path",
          "Open practice project on GitHub",
        ],
        metrics: [
          { label: "Stack", value: "Java · JUnit · RestAssured" },
          { label: "Focus", value: "API automation" },
        ],
        links: [
          {
            label: "GitHub Repository",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
        ],
        meta: {
          title: "Java API Automation Framework | XuXuClassMate",
          description:
            "Scalable API automation framework with Java, JUnit, RestAssured, Maven and Allure.",
          keywords: `${sharedKeywords}, Java API automation, RestAssured, JUnit`,
        },
      },
      {
        slug: "fullstack-e2e",
        title: "Full-Stack E2E Testing Framework",
        subtitle: "SHOWCASE",
        description:
          "A full-chain automation framework covering frontend, API, database, Redis and message queue validation.",
        cover: "/images/cover-automation.jpg",
        coverAlt: "Full-Stack E2E Testing Framework",
        overview:
          "A full-chain automation framework covering frontend, API, database, Redis and message queue validation — End-to-End Testing beyond Web UI Automation.",
        techStack: [
          "Playwright",
          "TypeScript",
          "API clients",
          "MySQL",
          "Redis",
          "MQ",
          "Docker",
          "CI/CD",
        ],
        architecture: [
          {
            title: "System chain",
            layers: [
              "Frontend",
              "API",
              "Backend",
              "Database",
              "Redis",
              "MQ",
            ],
          },
          {
            title: "Test chain",
            layers: [
              "Playwright",
              "API",
              "Backend",
              "MySQL",
              "Redis",
              "MQ",
            ],
          },
        ],
        features: [
          "Cross-layer assertions (UI + API + data)",
          "Cache and message-side validation",
          "Environment fixtures and isolation",
          "Parallel execution and rich traces",
          "Dockerized runners and CI hooks",
        ],
        contribution: [
          "Defined full-chain architecture from UI through MQ validation.",
          "Designed Playwright-first execution with API and data checks in one flow.",
          "Preparing a public TypeScript + Playwright repository (coming soon).",
        ],
        results: [
          "Case study and architecture published on this portfolio",
          "Positioned as the core Playwright / E2E showcase",
          "GitHub repository status: upcoming",
        ],
        status: "upcoming",
        problem:
          "UI-only automation misses regressions in API, cache, and message paths.",
        solution:
          "Validate the full chain: Playwright through API, backend, MySQL, Redis, and MQ.",
        tradeoffs: [
          "Full-chain coverage over shallow UI checks — fewer green lies.",
          "TypeScript + Playwright as the primary execution spine.",
          "Public case study ships before the repo is ready — no fake GitHub links.",
        ],
        outcomes: [
          "Clear full-stack E2E narrative for hiring review",
          "Architecture ready for the upcoming open-source repo",
        ],
        metrics: [
          { label: "Scope", value: "UI · API · DB · Redis · MQ" },
          { label: "Status", value: "Coming soon" },
        ],
        links: [],
        meta: {
          title: "Full-Stack E2E Testing Framework | XuXuClassMate",
          description:
            "Full-chain Playwright automation covering frontend, API, MySQL, Redis and message queues.",
          keywords: `${sharedKeywords}, Full-Stack E2E, Playwright E2E, End-to-End Testing`,
        },
      },
    ],
    footerDesc: "AI tools you can install — quality you can trust",
    social: [
      {
        href: "https://github.com/XuXuClassMate",
        label: "GitHub",
        icon: "github",
      },
      {
        href: "https://hub.docker.com/u/xuxuclassmate",
        label: "Docker Hub",
        icon: "docker",
      },
      {
        href: "https://blog.csdn.net/XuXuClassMate",
        label: "CSDN",
        icon: "blogger",
      },
    ],
  },
  life: {
    subtitle: "LIFE & HOBBIES",
    title: "Life Journey",
    description: "Sharing my life experiences and interests beyond coding",
    galleryTitle: "Life Moments",
    gallery: [
      {
        title: "Travel Vlogs",
        description: "Exploring nature's beauty through my lens",
        href: "https://www.tiktok.com/@xuxuclassmate",
        image: "/images/douyin-cover.jpg",
        imageAlt: "Travel Vlogs",
      },
      {
        title: "Music Time",
        description: "My favorite playlist for coding and relaxing",
        href: "https://music.163.com/#/playlist?id=368129876",
        image: "/images/music.webp",
        imageAlt: "Music Time",
      },
      {
        title: "Movie Time",
        description: "Enjoying the magical world of Miyazaki films",
        href: "https://www.iqiyi.com/playlist1921084202.html?vfrm=psbdl",
        image: "/images/movie.webp",
        imageAlt: "Movie Time - Miyazaki Films",
      },
    ],
    hobbiesTitle: "My Hobbies",
    hobbies: [
      {
        title: "Reading",
        description:
          "Technical books and literature across craft, systems, and fiction.",
        icon: "Read",
        items: ["Technical books", "Science fiction", "History"],
      },
      {
        title: "Gaming",
        description:
          "Strategy and RPG sessions that keep systems thinking sharp.",
        icon: "Play",
        items: ["Strategy", "RPG", "Indie"],
      },
      {
        title: "Music",
        description:
          "Folk songs, piano and violin pieces, and pop I still hum on the road.",
        icon: "Tune",
        items: ["Folk", "Piano & violin", "Pop"],
      },
      {
        title: "Sports",
        description:
          "Steady movement that keeps rhythm alive off the screen.",
        icon: "Move",
        items: ["Hiking", "Climbing", "Badminton"],
      },
    ],
    blogTitle: "Life Notes",
    blog: [
      {
        title: "Annual Plan",
        description:
          "A new year, a fresh start — sharing yearly goals and focus areas.",
        image: "/images/plan.webp",
        imageAlt: "Annual plan cover",
        href: "https://fgg6gzb6uk.feishu.cn/base/H07ebpIM1aBTuGsYtaacHK9NnBb?table=tblwIKtfaCQWbaKW",
        linkLabel: "Read more",
      },
      {
        title: "Progress Tracker",
        description:
          "Tracking execution against the annual plan and sharing the growth trail.",
        image: "/images/summary.webp",
        imageAlt: "Progress tracker cover",
        href: "https://fgg6gzb6uk.feishu.cn/base/H07ebpIM1aBTuGsYtaacHK9NnBb?table=blkcP1vbErcMDacd",
        linkLabel: "Read more",
      },
    ],
    footerDesc: "A personal space for learning and sharing",
    social: [
      {
        href: "https://www.tiktok.com/@xuxuclassmate",
        label: "TikTok",
        icon: "tiktok",
      },
      {
        href: "https://www.instagram.com/xuxuclassmate",
        label: "Instagram",
        icon: "instagram",
      },
      {
        href: "#",
        label: "WeChat",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  notes: {
    subtitle: "NOTES",
    title: "Practical Notes",
    description:
      "Long-form field notes with live Docker / ClawHub numbers — database environments and installable agent skills.",
    backLabel: "All notes",
    tocLabel: "On this page",
    relatedLabel: "Related",
    items: getNotes("en"),
    footerDesc: "Installable quality engineering — written down",
    social: [...homeSocial],
  },
  innonestx: {
    subtitle: "OPEN SOURCE",
    title: "InnoNestX",
    description:
      "My open-source organization for practical tools and product systems — learn together, ship together.",
    aboutTitle: "What InnoNestX is",
    about: [
      "InnoNestX is the GitHub organization I founded to host open tools and product systems — not a separate company narrative on this site.",
      "The bar is simple: something others can install, run, or fork. Demos without an install path do not belong here.",
      "If you like quality engineering, agents, Cloudflare Workers, or Docker tooling, you are welcome to learn with us and contribute to projects that interest you.",
    ],
    projectsTitle: "Projects under InnoNestX",
    projects: getOrgProjects("en"),
    joinTitle: "Join us",
    joinIntro:
      "Looking for collaborators who want to learn by building — not by watching slides.",
    joinItems: [
      "Pick a repo that interests you and open an issue or PR",
      "Suggest a feature, fix docs, or help with bilingual UX",
      "Want to start something new under the org? Use Contact below",
    ],
    orgCtaLabel: "GitHub organization",
    orgCtaHref: "https://github.com/InnoNestX",
    footerDesc: "Practical open-source tools — learn and build",
    social: [...homeSocial],
  },
  notFound: {
    title: "Uh-oh! Page Missing",
    message:
      "This page seems to have taken a coffee break ☕. Let’s get you back on track!",
    homeLabel: "Back to Home",
    footerDesc: "Building AI tools with a quality-first mindset",
    social: [...homeSocial],
  },
};
