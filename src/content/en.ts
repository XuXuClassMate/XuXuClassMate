import type { LocaleCopy } from "./types";
import { getFeaturedProjects, getWorkProjects } from "./projects";
import { getNotes } from "./notes";
import { getOrgCategories } from "./org";
import { getNowSections, NOW_UPDATED } from "./now";

const sharedKeywords =
  "QA Engineer, SDET, Test Automation Engineer, AI Testing, AI Test Automation, Playwright, API Testing, Performance Testing, Docker Testing, Test Infrastructure, AI Test Case Generation, XuXuClassMate, xuxuclassmate, SDET Portfolio, QA Engineer Dubai";

const homeSocial = [
  {
    href: "https://github.com/XuXuClassMate",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://medium.com/@xuxuclassmate",
    label: "Medium",
    icon: "medium",
  },
  {
    href: "https://hub.docker.com/u/xuxuclassmate",
    label: "Docker Hub",
    icon: "docker",
  },
] as const;

export const en: LocaleCopy = {
  brand: "XuXuClassMate",
  author: "XuXuClassMate",
  languageSwitch: "EN",
  languageSwitchHint: "Switch to Chinese",
  contactLabel: "Contact:",
  contactHint:
    "Open for collaboration, consulting, and engineering opportunities.",
  contactOffers: [
    "AI Testing tools / ClawHub skill customization",
    "QA / SDET consulting and team advisory",
    "Test infrastructure / Docker environment enablement",
    "Open-source collaboration with InnoNestX",
  ],
  copyEmail: "Copy email",
  copiedEmail: "Copied",
  backToTop: "Back to top",
  themeToggle: "Theme",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
  copyright: "© 2020-2026 XuXuClassMate",
  menuLabel: "Menu",
  skipToContent: "Skip to content",
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    blog: "Notes",
    aiTesting: "AI Testing",
    github: "GitHub",
    contact: "Contact",
    learn: "Experience",
    work: "Projects",
    workMenu: "Work",
    notes: "Notes",
    more: "More",
    innonestx: "Open Source",
    openSource: "Open Source",
    playground: "Playground",
    now: "Now",
  },
  meta: {
    home: {
      title: "XuXuClassMate | QA Engineer · SDET · AI Testing",
      description:
        "QA Engineer and SDET specializing in test automation, AI testing, API testing, performance testing, Playwright, Docker testing, and AI test case generation.",
      keywords: sharedKeywords,
      ogTitle: "XuXuClassMate | QA Engineer · SDET · AI Testing",
    },
    about: {
      title: "About | QA Engineer · SDET · AI Testing | XuXuClassMate",
      description:
        "QA Engineer / SDET focused on test automation, API testing, performance testing, Playwright, and AI testing.",
      keywords: `${sharedKeywords}, About`,
    },
    "ai-testing": {
      title: "AI Testing Lab | AI Test Automation & Case Generation | XuXuClassMate",
      description:
        "AI Testing Lab for AI test case generation, AI test automation, LLM-based API testing, bug analysis, and testing agents.",
      keywords: `${sharedKeywords}, AI Testing Lab, AI Test Case Generation`,
    },
    playwright: {
      title: "Playwright Testing Lab | Test Automation Engineer | XuXuClassMate",
      description:
        "Playwright test automation lab for UI testing, API testing, fixtures, parallel runs, and CI/CD — built for QA Engineers and SDETs.",
      keywords: `${sharedKeywords}, Playwright Testing Lab, Test Automation`,
    },
    infrastructure: {
      title: "Test Infrastructure | Docker Testing & CI/CD | XuXuClassMate",
      description:
        "Test infrastructure for Docker testing environments, CI/CD, GitHub Actions, and containerized QA stacks.",
      keywords: `${sharedKeywords}, Docker Testing, Test Infrastructure`,
    },
    blog: {
      title: "Engineering Notes | QA Engineer & SDET Field Guides | XuXuClassMate",
      description:
        "Engineering Notes on QA Engineering, AI Testing, Playwright, API Testing, Performance Testing, Docker, Cloudflare, OpenClaw, and DevOps.",
      keywords: `${sharedKeywords}, Engineering Notes, QA field guides, Test Automation`,
    },
    learn: {
      title: "Experience | QA Engineer to SDET & AI Testing | XuXuClassMate",
      description:
        "Experience path from QA engineering and test management to Playwright, performance testing, AI testing, and test infrastructure.",
      keywords: `${sharedKeywords}, Experience, Test Automation Engineer`,
    },
    work: {
      title: "Projects | QA Engineer & SDET Portfolio | XuXuClassMate",
      description:
        "SDET portfolio: AI test case generation, Playwright E2E, API testing frameworks, Docker testing, and test infrastructure projects.",
      keywords: `${sharedKeywords}, SDET Portfolio, Test Automation projects`,
    },
    notes: {
      title: "Engineering Notes | QA / SDET Field Guides | XuXuClassMate",
      description:
        "Searchable Engineering Notes for QA Engineers and SDETs — AI Testing, Playwright, Docker Testing, Performance Testing, and more.",
      keywords: `${sharedKeywords}, Engineering Notes, QA field guides, Docker Testing`,
    },
    "open-source": {
      title: "Open Source | InnoNestX · AI Tools · QA Tools | XuXuClassMate",
      description:
        "Open Source under XuXuClassMate: InnoNestX hosts installable AI tools, QA tooling, developer tools, infrastructure, and automation.",
      keywords: `${sharedKeywords}, Open Source, InnoNestX, AI Tools, QA Tools, Test Infrastructure`,
    },
    playground: {
      title: "Playground | Try Open-Source Tools | XuXuClassMate",
      description:
        "Try XuXuClassMate open-source tools on this site — interactive demos, live products, and install paths for AI testing, Docker APIs, and more.",
      keywords: `${sharedKeywords}, Playground, Open Source demo, AI Test Case Generator, Docker Hub API, GlobalPulse`,
    },
    now: {
      title: "Now | What I’m Building & Learning | XuXuClassMate",
      description:
        "What XuXuClassMate is building, learning, and exploring right now — AI Test Case Generator, OpenClaw QA Skills, Playwright, MCP, and more. Updated monthly.",
      keywords: `${sharedKeywords}, Now, AI Test Case Generator, OpenClaw, Playwright, MCP, LLM Evaluation`,
    },
    innonestx: {
      title: "Open Source | InnoNestX · AI Tools · QA Tools | XuXuClassMate",
      description:
        "Open Source under XuXuClassMate: InnoNestX hosts installable AI tools, QA tooling, developer tools, infrastructure, and automation.",
      keywords: `${sharedKeywords}, Open Source, InnoNestX, AI Tools, QA Tools, Test Infrastructure`,
    },
  },
  home: {
    subtitle: "Installable Quality Engineering",
    title: "QA Engineer · SDET · AI Testing",
    description:
      "QA Engineer and SDET focused on test automation, AI testing, API testing, and performance testing — plus Playwright, Docker testing, and AI test case generation.",
    positioning:
      "QA Engineer + SDET + AI Testing — installable quality engineering teams can run.",
    highlightsTitle: "By the Numbers",
    highlightsSubtitle: "Live Public Metrics · Updated Daily",
    highlightsProof: "Prove, don't just show.",
    highlights: [
      {
        value: "54k+",
        label: "Docker Pulls · All Time",
        metric: "docker:total-pulls",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "View Docker Hub →",
      },
      {
        value: "7.3k+",
        label: "ClawHub Downloads · All Time",
        metric: "clawhub:total-downloads",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "View ClawHub →",
      },
      {
        value: "500+",
        label: "API Requests · Live",
        metric: "api:gateway-calls",
        href: "https://docker-hub-pull-counter.vercel.app",
        linkLabel: "View API Gateway →",
      },
      {
        value: "12",
        label: "Docker Images · Public",
        metric: "docker:repo-count",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "View Docker Hub →",
      },
    ],
    featuredTitle: "Featured Projects",
    featuredCta: "View all projects",
    featured: getFeaturedProjects("en"),
    principlesTitle: "Engineering Principles",
    principlesLead:
      "If it cannot be installed, run, or integrated, it is not finished.",
    principles: [
      {
        title: "Installable > Demoable",
        description:
          "Docker, CLI, or ClawHub — if teams cannot install and run it, slides do not count as delivery.",
      },
      {
        title: "AI with Human Review",
        description:
          "AI accelerates test case generation, but every output goes through a structured Test / Developer / Product Manager review loop — not raw LLM output.",
      },
      {
        title: "Reusable Environments",
        description:
          "Containers, database images, and gateways so CI and laptops boot the same stack.",
      },
      {
        title: "Quality Is a System",
        description:
          "Automation, infrastructure, and review loops compound — quality is not a one-off checklist.",
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
          "Reusable database images for developers, QA, ops, and DBAs.",
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
        href: "/en/learn",
      },
      {
        title: "Project Gallery",
        description: "Install paths: ClawHub · Docker · browser products",
        href: "/en/work",
      },
      {
        title: "Engineering Notes",
        description: "QA / SDET field guides — Playwright, AI Testing, Docker, and shipping notes",
        href: "/en/blog",
      },
      {
        title: "Open Source",
        description: "InnoNestX — AI tools, QA tools, and infrastructure under the personal brand",
        href: "/en/open-source",
      },
    ],
    footerDesc: "QA Engineer · SDET · AI Testing — Installable Quality Engineering",
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
          "Locust and Go load frameworks + Locust WebUI",
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
          "Flagship installable AI testing product — from requirements to reviewable cases with a human review loop. Start with the case study or live demo.",
        href: "/en/work/testcase-generator",
        linkLabel: "Open flagship case study",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw / ClawHub skill for technical analysis, signals, position sizing, and risk checks — also available via Docker and pip.",
        href: "https://github.com/InnoNestX/trading-assistant",
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
        title: "Go Load Practice",
        description:
          "Go load frameworks as workers behind Locust WebUI — scale concurrency in Go, keep the Locust operator UX.",
        href: "https://github.com/XuXuClassMate/My_Test_GoProject",
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
          "Grew from scripts to frameworks — Playwright, Locust / Go load workers (Locust WebUI), and reusable environments, no longer tied to one language.",
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
    storiesTitle: "Key Challenges",
    storiesChallengeLabel: "Challenge",
    storiesApproachLabel: "How I Solved It",
    storiesResultLabel: "Result",
    stories: [
      {
        title: "Database bottlenecks under concurrency",
        challenge:
          "High-concurrency account and fund flows hit database saturation — latency spiked before the app layer looked unhealthy.",
        approach:
          "Locust / Go load profiles (Locust WebUI), SQL / index review with engineering, and reproducible Docker DB environments for shared diagnosis.",
        result:
          "Stabilized critical paths under 500+ QPS pressure and shortened the feedback loop between QA and backend.",
      },
      {
        title: "Complex account / fund / risk workflows",
        challenge:
          "End-to-end paths crossed account, fund, and risk-control systems — UI clicks alone could not prove release readiness.",
        approach:
          "Layered Playwright + API automation, shared fixtures, and environment parity so regression covered the real business chain.",
        result:
          "Raised automation coverage above 80% on priority flows and cut regression cycle time by about 40%.",
      },
      {
        title: "Regression efficiency at team scale",
        challenge:
          "Manual regression could not keep up with release cadence across ByteDance, SOE, and startup delivery models.",
        approach:
          "Framework design, CI/CD quality gates, and reusable suites instead of one-off scripts tied to a single language.",
        result:
          "Teams shipped with clearer release readiness signals and 20–35% better response-time outcomes on tuned paths.",
      },
      {
        title: "Turning AI test drafts into installable products",
        challenge:
          "LLM-generated cases looked impressive in demos but failed QA adoption — missing coverage, executability, and a path teams could install.",
        approach:
          "Productized multimodal intake, a scored human review loop (Test / Developer / Product Manager), and four run modes: Docker, npm, OpenClaw, and local source.",
        result:
          "Shipped the AI Test Case Generator as a flagship installable product with live Docker / npm / ClawHub proof — not a notebook demo.",
      },
    ],
    focusTitle: "Current Learning Focus",
    focusHeading: "Agent Skills, Multimodal QA & Product Systems",
    focusIntro:
      "Right now I am deepening the loop from idea → agent skill / product → packaged system that teams can run:",
    focusItems: [
      "Publishing and iterating OpenClaw / ClawHub skills",
      "Multimodal requirement → structured test artifacts",
      "Locust / Go load craft behind AI tools",
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
    subtitle: "PROJECTS",
    title: "Open Source, AI Tools & Infrastructure",
    description:
      "Quality Engineering, developer infrastructure, and AI / agent projects — installable tools teams can run.",
    projectsTitle: "Projects",
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
            href: "https://github.com/InnoNestX/testcase-generator",
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
          "Locust (Python) load & stress testing",
          "Go load frameworks + Locust WebUI (distributed workers)",
          "API / scenario performance scripts",
          "Monitoring, analysis, and tuning",
        ],
        evidence: [
          {
            label: "Locust examples",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject/tree/main/Performance_Test",
          },
          {
            label: "Go practice repo",
            href: "https://github.com/XuXuClassMate/My_Test_GoProject",
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
    caseProblemLead: "Why build this?",
    caseSolutionTitle: "Solution",
    caseSolutionLead: "How was it solved?",
    caseTradeoffsTitle: "Tradeoffs",
    caseOutcomesTitle: "What shipped",
    caseArtifactsTitle: "Inspectable proof",
    caseMetricsTitle: "Metrics",
    caseMetricsLead: "What results can we show?",
    caseLinksTitle: "Links",
    caseOverviewTitle: "Project Overview",
    caseStackTitle: "Tech Stack",
    caseStackLead: "What technologies power it?",
    caseArchitectureTitle: "Architecture",
    caseArchitectureLead: "System architecture",
    caseFeaturesTitle: "Key Features",
    caseFeaturesLead: "Core capabilities",
    caseContributionTitle: "My Contribution",
    caseResultsTitle: "Results",
    caseRoleTitle: "My Role",
    caseRoleLead: "What did I specifically do?",
    caseDeploymentTitle: "Deployment",
    caseDeploymentLead: "How do you run it?",
    caseGithubTitle: "GitHub",
    caseLiveDemoTitle: "Live Demo",
    cases: [
      {
        slug: "testcase-generator",
        title: "AI Test Case Generator",
        subtitle: "FLAGSHIP CASE STUDY",
        description:
          "From requirements to reviewable test cases — PDF · Word · TXT · image · video in; structured AI generation; Test / Developer / Product Manager human review; Excel · Markdown · XMind out. Install via Docker, npm, OpenClaw, or local source.",
        cover: "/images/cover-testcase.jpg",
        coverAlt: "AI Test Case Generator",
        flagship: true,
        status: "live",
        overview:
          "This is the flagship Installable Quality Engineering product on this site: turn real requirement artifacts into reviewable QA deliverables. Generation always runs a human review loop with Test Manager · Developer Manager · Product Manager roles, scoring coverage / logic / executability / clarity / security (100 points; default threshold 90; max 5 rounds). Official docs: https://innonestx.github.io/testcase-generator/",
        problem:
          "Real requirements arrive as PDFs, Word specs, screenshots, and short videos. Hand-building scenarios and boundary cases is slow; raw LLM dumps lack coverage, executability, and security perspective — so QA teams cannot adopt them as-is.",
        solution:
          "I built an installable multimodal generator: parse PDF / Word / TXT / image / video → AI-generate structured cases → run a structured human review loop (Test / Developer / Product Manager; multi-model config) → iterate with the scoring algorithm until threshold or max rounds → export Excel / Markdown / XMind. The same product supports four run modes: Docker, local source, npm global install, and OpenClaw plugin.",
        pipeline: {
          inputs: ["PDF", "Word", "TXT", "Image", "Video"],
          stages: [
            "Multimodal parse",
            "AI case generation",
            "Three-persona review loop",
            "Excel / Markdown / XMind export",
          ],
        },
        architecture: [
          {
            title: "Product pipeline",
            layers: [
              "Multimodal inputs (PDF · Word · TXT · Image · Video)",
              "AI generation (configurable generator / reviewer / both)",
              "Structured scenarios and cases",
              "Human review: Test · Developer · Product Manager",
              "Scoring loop (threshold 90 · max 5 rounds) → export",
            ],
          },
          {
            title: "Supported run modes",
            layers: [
              "Docker / Docker Compose (port 3456 web UI)",
              "Local source run (npm run build && npm run start)",
              "npm global install (testcase-generator --standalone)",
              "OpenClaw plugin (/testgen and generate_test_cases tool)",
            ],
          },
        ],
        features: [
          "Multimodal intake: PDF, Word, TXT, images, and video (optional ffmpeg for frames)",
          "Human review loop: Test Manager (coverage/executability) · Developer Manager (feasibility/security) · Product Manager (business/journey)",
          "Scoring dimensions: Coverage 30 · Logic 20 · Executability 20 · Clarity 15 · Security 15",
          "Multi-vendor model slots: Anthropic, OpenAI, DeepSeek, Qwen, Gemini, or custom OpenAI-compatible endpoints",
          "Export to Excel, Markdown, and XMind; English and Chinese generation",
          "Four install surfaces: Docker, local source, npm, OpenClaw plugin",
        ],
        contribution: [
          "Owned product direction: installable quality tool, not a one-off demo notebook.",
          "Designed the multimodal parse → AI generation → scored human review → export pipeline.",
          "Shipped four run paths: Docker, local source, npm global, and OpenClaw plugin.",
          "Wired review thresholds, max rounds, and QA-native export formats into the default runnable config.",
        ],
        techStack: [
          "TypeScript",
          "Express (Standalone Web)",
          "Anthropic / OpenAI-compatible LLMs",
          "Docker",
          "npm",
          "OpenClaw Plugin",
          "Excel / Markdown / XMind export",
        ],
        metrics: [
          {
            label: "Docker pulls",
            value: "899",
            metric: "docker:testcase-generator",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=testcase-generator",
          },
          {
            label: "npm downloads",
            value: "139",
            metric: "npm:testcase-generator",
            href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
          },
          {
            label: "OpenClaw / ClawHub installs",
            value: "700+",
            metric: "clawhub:ai-testcase-generator",
            href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          },
        ],
        deployment: {
          summary:
            "Distribution centers on Docker, npm, and OpenClaw (local source is also supported). Docker pulls are collected live via the Docker Hub API Gateway.",
          steps: [
            "Docker: docker pull xuxuclassmate/testcase-generator:latest, set AI_PROVIDER + API key, map 3456, open http://localhost:3456.",
            "npm: npm install -g @classmatexuxu/testcase-generator, then testcase-generator --standalone.",
            "OpenClaw: openclaw plugins install -l /path/to/testcase-generator, configure models[] in config.yaml, use /testgen.",
            "Local source (no download counter): clone → npm install → configure .env → npm run build && npm run start.",
          ],
          channels: [
            {
              label: "Official docs",
              href: "https://innonestx.github.io/testcase-generator/",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
            },
            {
              label: "ClawHub / OpenClaw",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
          ],
        },
        tryItNow: {
          title: "Try it now",
          description:
            "Explore → Try → Verify: start with the interactive demo (sample PRD → structured cases → human review), then install for real multimodal uploads.",
          note:
            "The browser demo uses curated sample output — no live LLM. For PDF / Word / image / video upload on your machine, use Docker, npm, or local source per the official docs.",
          primary: {
            label: "Open interactive demo",
            href: "/en/demo/ai-testcase-generator",
          },
          secondary: [
            {
              label: "Official docs",
              href: "https://innonestx.github.io/testcase-generator/",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
            },
            {
              label: "ClawHub",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
            {
              label: "GitHub",
              href: "https://github.com/InnoNestX/testcase-generator",
            },
          ],
          command:
            "docker pull xuxuclassmate/testcase-generator:latest\n# configure .env (AI_PROVIDER + API key), then:\ndocker run -d --name testcase-generator -p 3456:3456 \\\n  -e AI_PROVIDER=anthropic -e ANTHROPIC_API_KEY=sk-ant-... \\\n  -e LANGUAGE=en -e ENABLE_REVIEW=true -e REVIEW_THRESHOLD=90 \\\n  xuxuclassmate/testcase-generator:latest\n# open http://localhost:3456\n\n# or npm:\n# npm install -g @classmatexuxu/testcase-generator\n# testcase-generator --standalone",
        },
        proof: {
          github: "https://github.com/InnoNestX/testcase-generator",
          docker: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
          demo: "/en/demo/ai-testcase-generator",
          readme: "https://innonestx.github.io/testcase-generator/",
        },
        tradeoffs: [
          "Chose a scored human review loop (Test / Developer / Product Manager) over raw LLM dumps — coverage, executability, and security are first-class defaults.",
          "Shipped Docker + source + npm + OpenClaw together so humans and agents share one product (Installable > Demoable).",
          "Accepted multi-round review latency in exchange for Excel / Markdown / XMind artifacts QA teams already use.",
        ],
        artifacts: [
          {
            title: "Interactive demo",
            description:
              "Browser walkthrough of sample PRD → cases → human review — no live LLM required.",
            href: "/en/demo/ai-testcase-generator",
            linkLabel: "Open demo",
          },
          {
            title: "Official docs",
            description:
              "Model config, human review loop, scoring algorithm, and four install modes.",
            href: "https://innonestx.github.io/testcase-generator/",
            linkLabel: "Open docs",
          },
          {
            title: "Docker image",
            description:
              "Local web UI for uploading PDF / Word / image / video and generating cases.",
            href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            linkLabel: "Docker Hub",
          },
          {
            title: "Engineering note",
            description:
              "How I built multimodal AI test case generation as an installable product.",
            href: "/en/blog/ai-testcase-generator-multimodal",
            linkLabel: "Read note",
          },
        ],
        outcomes: [
          "Flagship installable AI testing product on this portfolio",
          "Four official run modes: Docker · source · npm · OpenClaw",
          "Human review + score threshold baked into the default runnable config",
          "Live proof via Docker pulls, npm downloads, and ClawHub installs",
        ],
        links: [
          {
            label: "Interactive demo",
            href: "/en/demo/ai-testcase-generator",
          },
          {
            label: "Official docs",
            href: "https://innonestx.github.io/testcase-generator/",
          },
          {
            label: "GitHub",
            href: "https://github.com/InnoNestX/testcase-generator",
          },
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
          },
          {
            label: "npm",
            href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
          },
          {
            label: "ClawHub",
            href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          },
          {
            label: "Engineering note: multimodal build",
            href: "/en/blog/ai-testcase-generator-multimodal",
          },
          {
            label: "Engineering note: AI-assisted generation",
            href: "/en/blog/ai-assisted-test-case-generation",
          },
        ],
        meta: {
          title:
            "AI Test Case Generator — Flagship Case Study | XuXuClassMate",
          description:
            "From requirements to reviewable test cases: PDF/Word/image/video → AI generation → human review → Excel/Markdown/XMind. Docker, npm, OpenClaw.",
          keywords: `${sharedKeywords}, AI Test Case Generator, multimodal testing, flagship case study, OpenClaw, human review`,
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
        status: "live",
        overview:
          "Installable OpenClaw / ClawHub trading skill that combines support/resistance analysis, multi-indicator signals, position sizing, and risk alerts — with Docker and CLI paths for non-agent users.",
        problem:
          "Trading workflows were stuck in notebooks and chat prompts — agents could not install a durable skill with clear risk guardrails.",
        solution:
          "Packaged support/resistance, multi-indicator signals, position sizing, and risk alerts as a ClawHub skill with Docker and pip / CLI entrypoints.",
        architecture: [
          {
            title: "Decision loop",
            layers: [
              "Market inputs",
              "Indicator / S-R engine",
              "Signal synthesis",
              "Position sizing",
              "Risk alerts",
              "Agent / CLI output",
            ],
          },
          {
            title: "Install surfaces",
            layers: ["ClawHub skill", "Docker image", "pip / ta CLI"],
          },
        ],
        features: [
          "Support and resistance analysis",
          "Multi-indicator trading signals",
          "Position sizing helpers",
          "Risk-first alerts and guardrails",
          "ClawHub / OpenClaw skill install",
          "Docker and CLI for human-facing runs",
        ],
        contribution: [
          "Defined the skill contract: signals without risk controls are not shippable.",
          "Implemented indicator / S-R logic and packaging for ClawHub, Docker, and CLI.",
          "Published and maintained the installable skill with live download metrics.",
        ],
        techStack: [
          "Python",
          "OpenClaw",
          "ClawHub",
          "Docker",
          "pip / CLI",
          "Technical indicators",
        ],
        deployment: {
          summary:
            "Install as an agent skill or run locally without an agent runtime.",
          steps: [
            "ClawHub: install Trading Assistant Core for OpenClaw agents.",
            "Docker: pull and run the published image for containerized use.",
            "CLI: install via pip and use the ta entrypoint for local workflows.",
          ],
          channels: [
            {
              label: "ClawHub",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            },
            {
              label: "GitHub",
              href: "https://github.com/InnoNestX/trading-assistant",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/trading-assistant",
            },
          ],
        },
        proof: {
          github: "https://github.com/InnoNestX/trading-assistant",
          demo: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          docker: "https://hub.docker.com/r/xuxuclassmate/trading-assistant",
        },
        tradeoffs: [
          "Risk sizing and alerts beat signal fireworks — a skill that only shouts entries is unsafe to install.",
          "Kept CLI / Docker paths so traders without an agent runtime can still run the same logic.",
          "Published on ClawHub instead of notebook-only workflows so agents get a durable package.",
        ],
        artifacts: [
          {
            title: "ClawHub skill",
            description: "Installable OpenClaw skill with live download counts.",
            href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            linkLabel: "Open ClawHub",
          },
          {
            title: "GitHub + Docker",
            description: "Human-facing installs alongside the agent skill.",
            href: "https://github.com/InnoNestX/trading-assistant",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "Published as an installable OpenClaw / ClawHub skill",
          "CLI and Docker paths for non-agent use",
          "Risk-first defaults instead of signal-only demos",
        ],
        metrics: [
          {
            label: "ClawHub installs",
            value: "900+",
            metric: "clawhub:trading-assistant-core",
          },
          { label: "Surfaces", value: "Skill · Docker · CLI" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/InnoNestX/trading-assistant",
          },
          {
            label: "ClawHub",
            href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          },
        ],
        meta: {
          title: "Trading Assistant Core Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate packaged Trading Assistant Core as an OpenClaw / ClawHub skill with Docker and CLI installs.",
          keywords: `${sharedKeywords}, trading assistant case study`,
        },
      },
      {
        slug: "custom-mail",
        title: "Custom Mail",
        subtitle: "CASE STUDY",
        description:
          "Private outbound mail console on Cloudflare Workers — Rust runtime, brandable UI, pluggable ESP.",
        cover: "/images/cover-custom-mail.jpg",
        coverAlt: "Custom Mail",
        status: "live",
        overview:
          "Self-hosted web mail workspace written in Rust (workers-rs): session login, Markdown compose with email-safe preview, attachments, send history in KV, and drop-in ESP / theme / layout plugins — without running a mail server.",
        problem:
          "Teams needed a private compose UI they could brand and host on their own Cloudflare account — not another shared SaaS mailbox, and not a VPS mail stack to babysit.",
        solution:
          "Shipped Custom Mail as a Workers + KV product with JSON-driven branding, pluggable providers (Brevo, Resend, SendGrid, …), Docker / GHCR images, docs, and a ClawHub skill for agent installs.",
        architecture: [
          {
            title: "Runtime chain",
            layers: [
              "Session login",
              "Compose + Markdown preview",
              "Attachments",
              "ESP provider plugins",
              "KV send history",
              "Workers + static assets",
            ],
          },
        ],
        features: [
          "Password-protected compose console on Cloudflare Workers",
          "CommonMark + GFM body with email-safe HTML preview",
          "Attachments (multi-file caps) and last-N send history in KV",
          "Brandable config: name, domain, colors, logo, footer, copy",
          "Pluggable ESP / theme / layout / logo catalogs",
          "Docker Hub + GHCR images and ClawHub skill install path",
        ],
        contribution: [
          "Owned product architecture from Workers runtime through ESP plugins.",
          "Implemented Rust/wasm mail console, Markdown preview, and KV history.",
          "Published Docker / GHCR images, docs site, and ClawHub packaging.",
        ],
        techStack: [
          "Rust (workers-rs)",
          "Cloudflare Workers",
          "KV",
          "Brevo / Resend / SendGrid",
          "Docker",
          "OpenClaw / ClawHub",
        ],
        deployment: {
          summary:
            "Deploy on Cloudflare Workers with secrets + KV, or run locally via Docker / wrangler; configure branding and ESP in config/mail.json.",
          steps: [
            "Clone InnoNestX/Custom-Mail and copy .dev.vars.example.",
            "Set ADMIN_PASSWORD and provider API key, then npm run dev or docker run.",
            "Point wrangler routes + mail.json host at your domain and deploy.",
            "Optional: clawhub install custom-mail for the OpenClaw skill path.",
          ],
          channels: [
            { label: "Live", href: "https://mail.xuxuclassmate.com" },
            { label: "Docs", href: "https://innonestx.github.io/Custom-Mail/" },
            {
              label: "GitHub",
              href: "https://github.com/InnoNestX/Custom-Mail",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/custom-mail",
            },
            {
              label: "ClawHub",
              href: "https://clawhub.ai/xuxuclassmate/custom-mail",
            },
          ],
        },
        proof: {
          github: "https://github.com/InnoNestX/Custom-Mail",
          demo: "https://mail.xuxuclassmate.com",
        },
        tradeoffs: [
          "Self-hosted Workers + KV over a SaaS webmail — credentials and branding stay on your account.",
          "Outbound compose console instead of full IMAP inbox — focused on send workflows teams actually run.",
          "Pluggable ESP adapters instead of one locked provider — swap Brevo / Resend / SendGrid via config.",
        ],
        artifacts: [
          {
            title: "Live product",
            description: "Reference deployment of the private mail console.",
            href: "https://mail.xuxuclassmate.com",
            linkLabel: "Open Custom Mail",
          },
          {
            title: "Documentation",
            description: "EN/ZH docs for config, Docker, deploy, and OpenClaw.",
            href: "https://innonestx.github.io/Custom-Mail/",
            linkLabel: "Open docs",
          },
          {
            title: "Source repository",
            description: "Rust Workers app, plugins, and CI in the open.",
            href: "https://github.com/InnoNestX/Custom-Mail",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "Private compose UI with session login on Cloudflare Workers",
          "Markdown preview + attachments + KV send history",
          "Install surfaces: Workers deploy, Docker / GHCR, and ClawHub",
        ],
        metrics: [
          {
            label: "ClawHub installs",
            value: "90+",
            metric: "clawhub:custom-mail",
          },
          { label: "Runtime", value: "Workers · Rust" },
          { label: "Surfaces", value: "Live · Docker · ClawHub" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/InnoNestX/Custom-Mail",
          },
          { label: "Live", href: "https://mail.xuxuclassmate.com" },
          {
            label: "Docs",
            href: "https://innonestx.github.io/Custom-Mail/",
          },
          {
            label: "ClawHub",
            href: "https://clawhub.ai/xuxuclassmate/custom-mail",
          },
        ],
        meta: {
          title: "Custom Mail Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate shipped Custom Mail — a private Cloudflare Workers mail console with Docker and ClawHub installs.",
          keywords: `${sharedKeywords}, Custom Mail, Cloudflare Workers, webmail`,
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
        status: "live",
        overview:
          "Self-hosted market intelligence product on Cloudflare Workers — Admin UI, KV config, cron schedules, market calendars, and Telegram / webhooks delivery.",
        problem:
          "Teams needed reliable finance and hotspot briefings — not one-off scripts — with calendars, templates, and push channels they control.",
        solution:
          "Built a self-hosted Cloudflare Workers app with Admin UI, KV config, cron schedules, market calendars, and Telegram / webhooks providers.",
        architecture: [
          {
            title: "Runtime chain",
            layers: [
              "Admin UI",
              "KV configuration",
              "Cron scheduler",
              "Market calendars / templates",
              "Channel providers",
              "Telegram / webhooks",
            ],
          },
        ],
        features: [
          "Password-protected Admin UI",
          "Timezone-aware market calendars",
          "Cron-driven scheduled briefings",
          "Multi-channel push (Telegram / webhooks)",
          "Preview before send",
          "Self-hosted Workers + KV control plane",
        ],
        contribution: [
          "Owned product architecture from Admin UI through multi-channel providers.",
          "Implemented Workers runtime, KV config, and cron delivery flows.",
          "Shipped and operate the live deployment at pulse.xuxuclassmate.com.",
        ],
        techStack: [
          "Cloudflare Workers",
          "KV",
          "Cron Triggers",
          "TypeScript",
          "Telegram / webhooks APIs",
        ],
        deployment: {
          summary:
            "Deploy on Cloudflare Workers with KV bindings, then configure calendars and channels in Admin UI.",
          steps: [
            "Clone the GlobalPulse repository under InnoNestX.",
            "Configure Workers + KV and deploy with Wrangler.",
            "Open the Admin UI, set schedules and providers, then enable cron delivery.",
            "Use the live instance at pulse.xuxuclassmate.com as a reference deployment.",
          ],
          channels: [
            { label: "Live", href: "https://pulse.xuxuclassmate.com/" },
            {
              label: "GitHub",
              href: "https://github.com/InnoNestX/GlobalPulse",
            },
          ],
        },
        proof: {
          github: "https://github.com/InnoNestX/GlobalPulse",
          demo: "https://pulse.xuxuclassmate.com/",
        },
        tradeoffs: [
          "Self-hosted Workers + KV over a SaaS newsletter — teams keep calendars and credentials.",
          "Admin UI with password gates instead of pure cron scripts — operators can preview before send.",
          "Multi-channel providers (Telegram / webhooks) instead of email-only delivery.",
        ],
        artifacts: [
          {
            title: "Live product",
            description:
              "Running deployment for scheduled market intelligence briefings.",
            href: "https://pulse.xuxuclassmate.com/",
            linkLabel: "Open Pulse",
          },
          {
            title: "Source repository",
            description: "Workers app, providers, and admin flows in the open.",
            href: "https://github.com/InnoNestX/GlobalPulse",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "Password-protected Admin UI for schedule and provider settings",
          "Cron-driven delivery with timezone-aware market calendars",
          "Previewable multi-channel push before send",
        ],
        metrics: [
          { label: "Runtime", value: "Cloudflare Workers" },
          { label: "Channels", value: "Telegram · webhooks" },
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
        status: "live",
        overview:
          "Unified REST API gateway for Docker Hub — user stats, SVG cards, repo/tag lookup, OpenAPI docs, and interactive testing in English and Chinese.",
        problem:
          "Docker Hub data was fragmented — pull totals, repo details, and badges needed a single, documentable API surface for tools and READMEs.",
        solution:
          "Shipped a Hono-based gateway with user stats, SVG cards, repo/tag APIs, OpenAPI docs, bilingual UI, and live request testing.",
        architecture: [
          {
            title: "API surface",
            layers: [
              "Client / README embeds",
              "Gateway (Hono)",
              "Docker Hub upstream",
              "Stats · SVG · OpenAPI responses",
            ],
          },
        ],
        features: [
          "User and repository stats APIs",
          "Embeddable Docker stats SVG cards",
          "Repo / tag lookup endpoints",
          "Interactive OpenAPI documentation",
          "Bilingual EN/ZH tester UI",
          "Dogfooded by this site’s live metrics",
        ],
        contribution: [
          "Designed the unified REST + SVG card contract for Hub data.",
          "Implemented the Hono gateway, OpenAPI docs, and bilingual tester.",
          "Wired production usage into this portfolio’s live metrics pipeline.",
        ],
        techStack: ["Hono", "TypeScript", "Vercel", "OpenAPI", "Docker Hub API"],
        deployment: {
          summary: "Deploy on Vercel and call the public REST / SVG endpoints.",
          steps: [
            "Open the live gateway for interactive docs and testing.",
            "Call /api/user/stats or embed the SVG docker-stats card in READMEs.",
            "Clone the InnoNestX repo to self-host or extend the gateway.",
          ],
          channels: [
            {
              label: "Live API",
              href: "https://docker-hub-pull-counter.vercel.app",
            },
            {
              label: "GitHub",
              href: "https://github.com/InnoNestX/docker-hub-pull-counter",
            },
          ],
        },
        proof: {
          github: "https://github.com/InnoNestX/docker-hub-pull-counter",
          demo: "https://docker-hub-pull-counter.vercel.app",
        },
        tradeoffs: [
          "Unified REST + SVG cards over scraping Hub HTML — stable for README embeds.",
          "OpenAPI + bilingual tester so callers can verify before wiring production.",
          "Dogfoods its own /api/stats — this site’s homepage metrics call the same gateway.",
        ],
        artifacts: [
          {
            title: "Live API + docs",
            description: "User stats, repo details, and interactive OpenAPI.",
            href: "https://docker-hub-pull-counter.vercel.app",
            linkLabel: "Open gateway",
          },
          {
            title: "Embeddable stats card",
            description: "SVG card used in READMEs and on this site.",
            href: "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
            linkLabel: "View SVG",
          },
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
          "Reusable database images so environments boot in minutes, not days — for developers, QA, ops, and DBAs.",
        cover: "/images/cover-docker.jpg",
        coverAlt: "Test DB Docker Suite",
        status: "live",
        overview:
          "Ready-to-run database images — Dameng, Highgo, Kingbase, TiDB and more — with consistent tags, docs, and live Docker Hub pull proof for developers, QA, ops, and DBAs.",
        problem:
          "Domestic and open-source databases were painful to stand up — undocumented installs blocked local development, automation, ops delivery, and onboarding.",
        solution:
          "Published ready-to-run Dameng, Highgo, Kingbase, TiDB, and related images on Docker Hub with consistent tags and docs for every engineering role.",
        architecture: [
          {
            title: "Environment path",
            layers: [
              "Docker Hub images",
              "Pull & run",
              "Local / CI environment",
              "Dev / test / ops workflows",
              "Evidence (live pulls)",
            ],
          },
        ],
        features: [
          "Dameng, Highgo, Kingbase, TiDB and related ready-to-run images",
          "Predictable tags for CI stability",
          "One service per image for diagnosable failures",
          "Docs oriented to pull-and-run workflows",
          "Live pull metrics on this portfolio",
        ],
        contribution: [
          "Identified the cross-role pain of undocumented domestic DB installs.",
          "Built, tagged, and published the reusable Docker image suite.",
          "Maintained docs and live pull evidence for team adoption.",
        ],
        techStack: ["Docker", "Docker Hub", "Dameng", "Highgo", "Kingbase", "TiDB"],
        deployment: {
          summary: "Pull an image from Docker Hub and boot it in local or CI environments.",
          steps: [
            "Browse the xuxuclassmate Docker Hub namespace.",
            "Pull the database image you need (e.g. Dameng / Highgo).",
            "Run with documented ports and env vars for local or CI workflows.",
            "Optionally verify live pull totals via the Docker Hub API Gateway.",
          ],
          channels: [
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/u/xuxuclassmate",
            },
            {
              label: "Live stats",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            },
          ],
        },
        proof: {
          demo: "https://hub.docker.com/u/xuxuclassmate",
          docker: "https://hub.docker.com/u/xuxuclassmate",
        },
        tradeoffs: [
          "Boring, predictable tags over clever names — CI suites need stability first.",
          "One service per image so failures stay diagnosable in pull-and-run flows.",
          "Published Dameng / Highgo early — pull volume validated that the database pain was real.",
        ],
        artifacts: [
          {
            title: "Docker Hub namespace",
            description:
              "All ready-to-run images with live pull totals on the homepage.",
            href: "https://hub.docker.com/u/xuxuclassmate",
            linkLabel: "Browse images",
          },
          {
            title: "Live user stats API",
            description: "Aggregated pulls via the Docker Hub API Gateway.",
            href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            linkLabel: "JSON stats",
          },
        ],
        outcomes: [
          "Dameng and Highgo images used widely across engineering teams",
          "Consistent pull-and-run workflow for CI",
          "A reusable foundation under AI tooling demos",
        ],
        metrics: [
          {
            label: "Dameng pulls",
            value: "30k+",
            metric: "docker:dameng",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=dameng",
          },
          {
            label: "Highgo pulls",
            value: "17k+",
            metric: "docker:highgo",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=highgo",
          },
          {
            label: "Kingbase pulls",
            value: "1.6k+",
            metric: "docker:kingbase",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=kingbase",
          },
          {
            label: "TiDB pulls",
            value: "900+",
            metric: "docker:tidb",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=tidb",
          },
        ],
        links: [
          {
            label: "Docker Hub API Gateway",
            href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
          },
        ],
        meta: {
          title: "Test DB Docker Suite Case Study | XuXuClassMate",
          description:
            "How XuXuClassMate shipped Dameng, Highgo, and related Docker DB images for developers, QA, ops, and DBAs.",
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
          demo: "https://github.com/XuXuClassMate/My_Test_JAProject",
        },
        status: "live",
        deployment: {
          summary: "Clone the Java practice suite and run Maven-based API tests locally or in CI.",
          steps: [
            "Clone https://github.com/XuXuClassMate/My_Test_JAProject",
            "Configure environment and auth settings for the target API.",
            "Run Maven tests and review Allure reports.",
            "Optionally compare patterns with the Python / Locust practice repo.",
          ],
          channels: [
            {
              label: "GitHub",
              href: "https://github.com/XuXuClassMate/My_Test_JAProject",
            },
            {
              label: "Python practice",
              href: "https://github.com/XuXuClassMate/My_Test_PyProject",
            },
          ],
        },
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
        deployment: {
          summary:
            "Repository is upcoming — architecture and case study are published first; clone/run steps will land with the public repo.",
          steps: [
            "Review the system and test chains on this case study page.",
            "Use the architecture as the blueprint for Playwright + API + data validation.",
            "Watch for the public TypeScript + Playwright repository release.",
          ],
          channels: [
            {
              label: "Playwright Lab",
              href: "/en/playwright",
            },
          ],
        },
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
        href: "https://medium.com/@xuxuclassmate",
        label: "Medium",
        icon: "medium",
      },
      {
        href: "https://hub.docker.com/u/xuxuclassmate",
        label: "Docker Hub",
        icon: "docker",
      },
    ],
  },
  notes: {
    subtitle: "ENGINEERING NOTES",
    title: "Engineering Notes",
    description:
      "Field guides and shipping notes for QA Engineers and SDETs — searchable pages on AI Testing, Playwright, API Testing, Performance Testing, Docker, and more.",
    backLabel: "All Engineering Notes",
    tocLabel: "On this page",
    relatedLabel: "Related",
    filterAll: "All",
    categoriesLabel: "Browse by topic",
    items: getNotes("en"),
    footerDesc: "QA Engineer · SDET · AI Testing — written as Engineering Notes",
    social: [...homeSocial],
  },
  openSource: {
    subtitle: "OPEN SOURCE",
    title: "Open Source",
    description:
      "InnoNestX is the open-source organization under the XuXuClassMate personal brand — installable AI tools, QA tooling, and infrastructure you can run and fork.",
    orgLabel: "Organization",
    orgName: "InnoNestX",
    brandTitle: "How the brand and org relate",
    brandLead:
      "XuXuClassMate is the personal brand. InnoNestX is the GitHub org under it — where installable tools ship.",
    brandConnector: "hosts",
    brandPersonalLabel: "Personal brand",
    brandPersonalItems: ["QA / SDET", "AI Testing", "Engineering Notes"],
    brandOrgLabel: "Open-source organization",
    brandOrgItems: ["Open Source", "AI Tools", "QA Tools", "Infrastructure"],
    aboutTitle: "What InnoNestX is",
    about: [
      "InnoNestX hosts open tools and product systems that others can install, run, or fork — not a separate company narrative on this site.",
      "The bar is simple: demos without an install path do not belong here.",
      "If you care about quality engineering, agents, Cloudflare Workers, or Docker tooling, you are welcome to learn with us and contribute.",
    ],
    categoriesTitle: "Open-source focus areas",
    categories: getOrgCategories("en"),
    emptyCategory: "No public repos in this lane yet — suggestions welcome.",
    joinTitle: "Join & contact",
    joinIntro:
      "Looking for collaborators who learn by building — open a PR, improve docs, or email a new idea.",
    joinItems: [
      "Pick a repo that interests you and open an issue or PR",
      "Suggest a feature, fix docs, or help with bilingual UX",
      "Want to start something new under the org? Email me",
    ],
    orgCtaLabel: "GitHub organization",
    orgCtaHref: "https://github.com/InnoNestX",
    playgroundCtaLabel: "Try on Playground",
    footerDesc: "InnoNestX — open-source arm of XuXuClassMate",
    social: [...homeSocial],
  },
  playground: {
    subtitle: "PLAYGROUND",
    title: "Playground",
    description:
      "Try open-source tools from the XuXuClassMate brand on this site — interactive demos, live products, and clear install paths.",
    experiencesTitle: "What you can try",
    modesTitle: "How each experience works",
    modes: [
      {
        id: "interactive",
        label: "Interactive",
        description: "Runs on this site — demo or public API, no install required.",
      },
      {
        id: "live",
        label: "Live",
        description: "Opens a deployed product you can use in another tab.",
      },
      {
        id: "install",
        label: "Install",
        description: "Pull or clone on your machine — not an in-browser runtime.",
      },
    ],
    githubLabel: "GitHub",
    tryTitle: "Try Docker Hub API",
    tryIntro:
      "Enter a Docker Hub username and fetch pull stats from the public gateway this portfolio already uses.",
    tryUsernameLabel: "Docker Hub username",
    tryButton: "Fetch stats",
    tryLoading: "Fetching…",
    tryError: "Could not load stats for that username. Check the name and try again.",
    tryEmpty: "Run a lookup to see total pulls and repository count.",
    tryResultPulls: "Total pulls",
    tryResultRepos: "Repositories",
    tryDefaultUsername: "xuxuclassmate",
    openSourceLabel: "Open Source page",
    footerDesc: "Playground — try before you fork",
    social: [...homeSocial],
  },
  now: {
    subtitle: "NOW",
    title: "Now",
    description:
      "A monthly snapshot of what I’m building, learning, and exploring as a QA Engineer / SDET focused on AI testing.",
    updatedLabel: "Last updated",
    updated: NOW_UPDATED.en,
    updatedIso: NOW_UPDATED.iso,
    cadence: "I refresh this page about once a month.",
    sections: getNowSections("en"),
    footerDesc: "What I’m working on now — updated monthly",
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
