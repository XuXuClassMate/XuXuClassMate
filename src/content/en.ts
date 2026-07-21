import type { LocaleCopy } from "./types";

const sharedKeywords =
  "xuxuclassmate, XuXuClassMate, 旭旭同学, QA engineer, software testing, test automation, AI testing, quality engineering, OpenClaw, ClawHub, testcase generator, Playwright, API testing, Docker test environment";

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
    "Open for collaboration on AI tools, agent skills, and quality engineering.",
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
    life: "Life",
    learn: "Learn",
    work: "Work",
  },
  meta: {
    home: {
      title: "XuXuClassMate | AI Testing Tools & Quality Engineering",
      description:
        "XuXuClassMate (旭旭同学) — QA engineer building AI testing tools, OpenClaw agent skills, multimodal test case generation, and reusable Docker test environments.",
      keywords: sharedKeywords,
      ogTitle: "XuXuClassMate — AI Testing & Quality Engineering",
    },
    life: {
      title: "Life Journey | XuXuClassMate",
      description:
        "Travel, music, and life outside the keyboard — the personal side of XuXuClassMate, QA engineer and AI testing tool builder.",
      keywords: `${sharedKeywords}, travel, hobbies`,
    },
    learn: {
      title: "Learning Path: QA to AI Testing | XuXuClassMate",
      description:
        "From QA craft to AI-native testing: Playwright, automation frameworks, multimodal test generation, OpenClaw / ClawHub skills, and Docker test environments.",
      keywords: `${sharedKeywords}, learning path, QA training, test framework`,
    },
    work: {
      title: "Testing Projects & AI Tools Portfolio | XuXuClassMate",
      description:
        "Portfolio of AI Test Case Generator, Trading Assistant, Dameng/Highgo Docker test DB images, and automation frameworks — built for real QA teams.",
      keywords: `${sharedKeywords}, test portfolio, Dameng Docker, Highgo Docker, ClawHub skills`,
    },
  },
  home: {
    subtitle: "AI × Quality // Systems",
    title: "Build with AI. Ship with Quality.",
    description:
      "I build OpenClaw agent skills, AI testing tools, and reusable environments — then use them to deliver software people can trust.",
    valuesTitle: "How I Work",
    values: [
      {
        title: "AI-Native Tooling",
        description:
          "Turn repetitive QA work into products: multimodal inputs, review loops, and exportable deliverables.",
      },
      {
        title: "Agent Skills",
        description:
          "Ship skills on ClawHub / OpenClaw that agents can install and run — not demos that only live in slides.",
      },
      {
        title: "Quality Systems",
        description:
          "Pair AI speed with solid automation, containers, and environments that teams can actually reuse.",
      },
    ],
    highlightsTitle: "By the Numbers",
    highlights: [
      { value: "700+", label: "ClawHub AI Test Case Generator installs" },
      { value: "900+", label: "ClawHub Trading Assistant Core installs" },
      { value: "30k+", label: "Dameng Docker pulls" },
      { value: "17k+", label: "Highgo Docker pulls" },
    ],
    featuredTitle: "Featured Work",
    featuredCta: "View all projects",
    featured: [
      {
        title: "AI Test Case Generator",
        description:
          "Multimodal QA inputs (PDF, Word, images, video) → structured cases with Test / Dev / Product review loops. Ships as Docker, npm, and OpenClaw plugin; published on ClawHub as AI Test Case Generator.",
        tags: ["TypeScript", "Multimodal AI", "ClawHub"],
        href: "https://github.com/XuXuClassMate/testcase-generator",
        linkLabel: "GitHub",
        ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
        ctaLabel: "Docker Hub",
        category: "AI",
        image: "/images/cover-testcase.jpg",
        imageAlt: "AI Test Case Generator cover",
        slug: "testcase-generator",
        caseHref: "/en/work/testcase-generator.html",
        caseLabel: "Case study",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw agent skill for support/resistance, multi-indicator signals, position sizing, and risk alerts. Install via ClawHub, Docker, or `pip` / `ta` CLI.",
        tags: ["Agent Skill", "ClawHub", "CLI"],
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "GitHub",
        ctaHref: "https://clawhub.ai",
        ctaLabel: "ClawHub",
        category: "AI",
        image: "/images/cover-trading.jpg",
        imageAlt: "Trading Assistant Core cover",
        slug: "trading-assistant",
        caseHref: "/en/work/trading-assistant.html",
        caseLabel: "Case study",
      },
      {
        title: "Test DB Docker Suite",
        description:
          "Ready-to-run database images for QA environments — Dameng (~30k pulls), Highgo (~17k), Kingbase, TiDB, and more on Docker Hub.",
        tags: ["Docker", "Dameng", "Highgo"],
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "Docker Hub",
        category: "Infra",
        image: "/images/cover-docker.jpg",
        imageAlt: "Test DB Docker Suite cover",
        slug: "docker-suite",
        caseHref: "/en/work/docker-suite.html",
        caseLabel: "Case study",
      },
    ],
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
        href: "https://clawhub.ai",
        linkLabel: "Visit ClawHub",
        icon: "robot",
      },
    ],
    links: [
      {
        title: "Learning Path",
        description: "AI agents, multimodal QA, and the stack behind the tools",
        href: "/en/learn.html",
      },
      {
        title: "Project Gallery",
        description: "Testcase Generator, Trading Assistant, Docker suites",
        href: "/en/work.html",
      },
      {
        title: "Life Journey",
        description: "Travel, music, and the rest of the story",
        href: "/en/life.html",
      },
    ],
    footerDesc: "Building AI tools with a quality-first mindset",
    social: [...homeSocial],
  },
  learn: {
    subtitle: "LEARNING PATH",
    title: "From QA Craft to AI Tools",
    description:
      "Studying agents, multimodal generation, and quality systems that still hold up in production",
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
        title: "Automation Testing",
        description: "",
        items: [
          "Playwright & cross-browser UI",
          "API automation (language-agnostic)",
          "Framework design & reusable suites",
          "CI-ready environments",
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
        title: "Ministry of Testing",
        description:
          "Community learning on modern testing practice, AI-assisted QA, and craft excellence.",
        href: "https://www.ministryoftesting.com/learn",
        linkLabel: "Explore Testing Insights",
      },
      {
        title: "ClawHub",
        description:
          "Discover and install OpenClaw agent skills — including tools I publish for QA and trading workflows.",
        href: "https://clawhub.ai",
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
        title: "Automation at Scale",
        description:
          "Grew from scripts to frameworks — Playwright and reusable environments, no longer tied to one language.",
      },
      {
        title: "AI-Native Tooling",
        description:
          "Turned repetitive QA work into products — multimodal generation, review loops, and exportable deliverables.",
      },
      {
        title: "OpenClaw Agent Skills",
        description:
          "Packaging skills on ClawHub so agents can install and run real workflows, not just demos.",
      },
    ],
    focusTitle: "Current Learning Focus",
    focusHeading: "Agent Skills & Multimodal QA",
    focusIntro:
      "Right now I am deepening the loop from idea → agent skill → packaged tool that teams can run:",
    focusItems: [
      "Publishing and iterating OpenClaw / ClawHub skills",
      "Multimodal requirement → structured test artifacts",
      "Reviewer personas that raise generation quality",
      "Docker / CLI packaging so AI tools are installable, not just demos",
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
    projects: [
      {
        title: "AI Test Case Generator",
        description:
          "Multimodal QA inputs (PDF, Word, images, video) → structured cases with Test / Dev / Product review loops. Ships as Docker, npm, and OpenClaw plugin; published on ClawHub as AI Test Case Generator.",
        tags: ["TypeScript", "Multimodal AI", "ClawHub"],
        href: "https://github.com/XuXuClassMate/testcase-generator",
        linkLabel: "GitHub",
        ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
        ctaLabel: "Docker Hub",
        category: "AI",
        image: "/images/cover-testcase.jpg",
        imageAlt: "AI Test Case Generator cover",
        slug: "testcase-generator",
        caseHref: "/en/work/testcase-generator.html",
        caseLabel: "Case study",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw agent skill for support/resistance, multi-indicator signals, position sizing, and risk alerts. Install via ClawHub, Docker, or `pip` / `ta` CLI.",
        tags: ["Agent Skill", "ClawHub", "CLI"],
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "GitHub",
        ctaHref: "https://clawhub.ai",
        ctaLabel: "ClawHub",
        category: "AI",
        image: "/images/cover-trading.jpg",
        imageAlt: "Trading Assistant Core cover",
        slug: "trading-assistant",
        caseHref: "/en/work/trading-assistant.html",
        caseLabel: "Case study",
      },
      {
        title: "Test DB Docker Suite",
        description:
          "Ready-to-run database images for QA environments — Dameng (~30k pulls), Highgo (~17k), Kingbase, TiDB, and more on Docker Hub.",
        tags: ["Docker", "Dameng", "Highgo"],
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "Docker Hub",
        category: "Infra",
        image: "/images/cover-docker.jpg",
        imageAlt: "Test DB Docker Suite cover",
        slug: "docker-suite",
        caseHref: "/en/work/docker-suite.html",
        caseLabel: "Case study",
      },
      {
        title: "Automation Framework Craft",
        description:
          "Reusable API / UI automation patterns and practice projects — the craft underneath the AI tools, not locked to one language.",
        tags: ["Framework", "API", "Playwright"],
        href: "https://github.com/XuXuClassMate/My_Test_JAProject",
        linkLabel: "GitHub",
        category: "Automation",
        image: "/images/cover-automation.jpg",
        imageAlt: "Automation Framework cover",
        slug: "automation-framework",
        caseHref: "/en/work/automation-framework.html",
        caseLabel: "Case study",
      },
    ],
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
          { label: "ClawHub", href: "https://clawhub.ai" },
          {
            label: "Testcase Generator",
            href: "https://github.com/XuXuClassMate/testcase-generator",
          },
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
          "Web UI automation (Playwright)",
          "API automation",
          "Mobile automation",
          "Reusable framework design",
        ],
        evidence: [
          {
            label: "Framework repo",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
        ],
      },
      {
        title: "Performance Testing",
        items: [
          "Stress & load testing",
          "Monitoring & analysis",
          "Performance optimization",
          "Concurrency design",
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
    caseOutcomesTitle: "What shipped",
    caseMetricsTitle: "Proof",
    caseLinksTitle: "Links",
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
        outcomes: [
          "Installable on ClawHub as AI Test Case Generator",
          "Docker Hub and npm distribution for local runs",
          "Exportable Excel / Markdown / XMind deliverables",
        ],
        metrics: [
          { label: "ClawHub installs", value: "700+" },
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
          { label: "ClawHub", href: "https://clawhub.ai" },
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
        outcomes: [
          "Published as an installable OpenClaw / ClawHub skill",
          "CLI and Docker paths for non-agent use",
          "Risk-first defaults instead of signal-only demos",
        ],
        metrics: [
          { label: "ClawHub installs", value: "900+" },
          { label: "Surfaces", value: "Skill · Docker · CLI" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/trading-assistant",
          },
          { label: "ClawHub", href: "https://clawhub.ai" },
        ],
        meta: {
          title: "Trading Assistant Core Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate packaged Trading Assistant Core as an OpenClaw / ClawHub skill with Docker and CLI installs.",
          keywords: `${sharedKeywords}, trading assistant case study`,
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
        outcomes: [
          "Dameng and Highgo images used widely by QA teams",
          "Consistent pull-and-run workflow for CI",
          "A reusable foundation under AI tooling demos",
        ],
        metrics: [
          { label: "Dameng pulls", value: "30k+" },
          { label: "Highgo pulls", value: "17k+" },
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
        title: "Automation Framework Craft",
        subtitle: "CASE STUDY",
        description:
          "The reusable automation patterns underneath the AI tools.",
        cover: "/images/cover-automation.jpg",
        coverAlt: "Automation Framework Craft",
        problem:
          "One-off scripts do not survive team handoffs — AI tools need a durable automation craft underneath them.",
        solution:
          "Built practice frameworks for API and UI automation (including Playwright) that emphasize reuse, clarity, and language flexibility.",
        outcomes: [
          "Reusable suite structure for API / UI work",
          "Patterns that inform AI tool packaging",
          "Open practice projects on GitHub",
        ],
        metrics: [
          { label: "Focus", value: "API · UI · Playwright" },
          { label: "Constraint", value: "Delivery quality" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
        ],
        meta: {
          title: "Automation Framework Case Study | XuXuClassMate",
          description:
            "Reusable API and UI automation craft behind XuXuClassMate AI testing tools.",
          keywords: `${sharedKeywords}, automation framework case study`,
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
        image: "/images/music.jpg",
        imageAlt: "Music Time",
      },
      {
        title: "Movie Time",
        description: "Enjoying the magical world of Miyazaki films",
        href: "https://www.iqiyi.com/playlist1921084202.html?vfrm=psbdl",
        image: "/images/movie.jpg",
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
        description: "Playlists for deep work and weekends away from the keyboard.",
        icon: "Tune",
        items: ["Electronic", "Classical piano", "Jazz"],
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
  notFound: {
    title: "Uh-oh! Page Missing",
    message:
      "This page seems to have taken a coffee break ☕. Let’s get you back on track!",
    homeLabel: "Back to Home",
    footerDesc: "Building AI tools with a quality-first mindset",
    social: [...homeSocial],
  },
};
