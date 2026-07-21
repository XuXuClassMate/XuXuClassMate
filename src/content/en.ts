import type { LocaleCopy } from "./types";

const sharedMeta = {
  description:
    "XuXuClassMate builds AI-native quality tools and OpenClaw agent skills — from multimodal testcase generation to trading assistants and reusable Docker test environments.",
  keywords:
    "xuxuclassmate, XuXuClassMate, AI testing, OpenClaw, ClawHub, agent skills, testcase generator, trading assistant, QA engineer, Docker,旭旭同学",
};

const homeSocial = [
  {
    href: "https://github.com/XuXuClassMate",
    label: "GitHub",
    icon: "fab fa-github",
  },
  {
    href: "https://fgg6gzb6uk.feishu.cn/docx/LkwDdpLjnoIdGwxOH6zcRwEWnhd?from=from_copylink",
    label: "Blog",
    icon: "fas fa-blog",
  },
  {
    href: "#",
    label: "WeChat",
    icon: "fab fa-weixin",
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
  nav: {
    life: "Life",
    learn: "Learn",
    work: "Work",
  },
  meta: {
    home: { title: "XuXuClassMate", ...sharedMeta },
    life: { title: "XuXuClassMate - Life Journey", ...sharedMeta },
    learn: { title: "XuXuClassMate - Learning Journey", ...sharedMeta },
    work: { title: "XuXuClassMate - Work Projects", ...sharedMeta },
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
        linkLabel: "View on GitHub",
        ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
        ctaLabel: "Docker Hub",
        category: "AI",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw agent skill for support/resistance, multi-indicator signals, position sizing, and risk alerts. Install via ClawHub, Docker, or `pip` / `ta` CLI.",
        tags: ["Agent Skill", "ClawHub", "CLI"],
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "View on GitHub",
        ctaHref: "https://clawhub.ai",
        ctaLabel: "ClawHub",
        category: "AI",
      },
      {
        title: "Test DB Docker Suite",
        description:
          "Ready-to-run database images for QA environments — Dameng (~30k pulls), Highgo (~17k), Kingbase, TiDB, and more on Docker Hub.",
        tags: ["Docker", "Dameng", "Highgo"],
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "View Docker Hub",
        category: "Infra",
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
        icon: "fab fa-github",
      },
      {
        title: "Docker Hub",
        description:
          "Reusable database and test-environment images for QA teams.",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "View Docker Hub",
        icon: "fab fa-docker",
      },
      {
        title: "ClawHub",
        description:
          "Installable OpenClaw agent skills — Test Case Generator and Trading Assistant.",
        href: "https://clawhub.ai",
        linkLabel: "Visit ClawHub",
        icon: "fas fa-robot",
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
        icon: "fab fa-github",
      },
      {
        href: "https://hub.docker.com/u/xuxuclassmate",
        label: "Docker Hub",
        icon: "fab fa-docker",
      },
      {
        href: "https://medium.com/@xuxuclassmate",
        label: "Medium",
        icon: "fab fa-medium",
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
        linkLabel: "View on GitHub",
        ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
        ctaLabel: "Docker Hub",
        category: "AI",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw agent skill for support/resistance, multi-indicator signals, position sizing, and risk alerts. Install via ClawHub, Docker, or `pip` / `ta` CLI.",
        tags: ["Agent Skill", "ClawHub", "CLI"],
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "View on GitHub",
        ctaHref: "https://clawhub.ai",
        ctaLabel: "ClawHub",
        category: "AI",
      },
      {
        title: "Test DB Docker Suite",
        description:
          "Ready-to-run database images for QA environments — Dameng (~30k pulls), Highgo (~17k), Kingbase, TiDB, and more on Docker Hub.",
        tags: ["Docker", "Dameng", "Highgo"],
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "View Docker Hub",
        category: "Infra",
      },
      {
        title: "Automation Framework Craft",
        description:
          "Reusable API / UI automation patterns and practice projects — the craft underneath the AI tools, not locked to one language.",
        tags: ["Framework", "API", "Playwright"],
        href: "https://github.com/XuXuClassMate/My_Test_JAProject",
        linkLabel: "View on GitHub",
        category: "Automation",
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
    skillsTitle: "Technical Skills",
    skills: [
      {
        title: "AI Tooling & Agents",
        progress: 90,
        items: [
          "OpenClaw / ClawHub skill design",
          "Multimodal test generation",
          "LLM review & export pipelines",
          "Docker / npm / pip packaging",
        ],
      },
      {
        title: "Functional Testing",
        progress: 95,
        items: [
          "Requirements Analysis & Test Case Design",
          "Black Box & White Box Testing",
          "API Testing & Integration Testing",
          "Defect Management & Tracking",
        ],
      },
      {
        title: "Test Automation",
        progress: 95,
        items: [
          "Web UI Automation",
          "API Automation",
          "Mobile Automation",
          "Automation Framework Design & Development",
        ],
      },
      {
        title: "Performance Testing",
        progress: 90,
        items: [
          "Stress Testing & Load Testing",
          "Performance Monitoring & Analysis",
          "Performance Optimization",
          "Concurrency Test Design",
        ],
      },
      {
        title: "Test Environment",
        progress: 90,
        items: [
          "Containerized DB & service stacks",
          "CI/CD Pipeline Optimization",
          "Domestic & open-source database images",
          "Test Tools Integration & Management",
        ],
      },
    ],
    footerDesc: "AI tools you can install — quality you can trust",
    social: [
      {
        href: "https://github.com/XuXuClassMate",
        label: "GitHub",
        icon: "fab fa-github",
      },
      {
        href: "https://hub.docker.com/u/xuxuclassmate",
        label: "Docker Hub",
        icon: "fab fa-docker",
      },
      {
        href: "https://blog.csdn.net/XuXuClassMate",
        label: "CSDN",
        icon: "fab fa-blogger",
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
          "Enjoying technical books and literature, exploring different fields of knowledge",
        icon: "📚",
        items: ["Technical Books", "Science Fiction", "Historical Archives"],
      },
      {
        title: "Gaming",
        description:
          "Enjoying games while learning game development technologies",
        icon: "🎮",
        items: ["Strategy Games", "RPG Adventures", "Indie Games"],
      },
      {
        title: "Music",
        description: "Creating and enjoying music in different styles",
        icon: "🎵",
        items: ["Electronic Music", "Classical Piano", "Jazz"],
      },
    ],
    footerDesc: "A personal space for learning and sharing",
    social: [
      {
        href: "https://www.tiktok.com/@xuxuclassmate",
        label: "TikTok",
        icon: "fab fa-tiktok",
      },
      {
        href: "https://www.instagram.com/xuxuclassmate",
        label: "Instagram",
        icon: "fab fa-instagram",
      },
      {
        href: "#",
        label: "WeChat",
        icon: "fab fa-weixin",
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
