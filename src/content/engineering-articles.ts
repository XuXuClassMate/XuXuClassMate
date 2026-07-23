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
  "DevOps",
];

type LandingDef = {
  slug: Note["slug"];
  category: NoteCategory;
  tags: { en: string[]; zh: string[] };
  proof?: { en: string; zh: string };
  related?: {
    en: NonNullable<Note["related"]>;
    zh: NonNullable<Note["related"]>;
  };
  ctas?: {
    en: NonNullable<Note["ctas"]>;
    zh: NonNullable<Note["ctas"]>;
  };
  en: {
    title: string;
    description: string;
    sections: NoteSection[];
    meta: PageMeta;
  };
  zh: {
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
    bullets: block.bullets,
  }));
}

function sectionsZh(blocks: Array<{ id: string; heading: string; body: string[]; bullets?: string[] }>): NoteSection[] {
  return sectionsEn(blocks);
}

/** SEO landing articles — each page is an independent searchable entry. */
export const ENGINEERING_ARTICLES: LandingDef[] = [
  {
    slug: "ai-testcase-generator-multimodal",
    category: "AI Testing",
    tags: {
      en: ["AI Testing", "AI Test Case Generation", "Multimodal", "SDET"],
      zh: ["AI Testing", "AI 用例生成", "多模态", "SDET"],
    },
    proof: {
      en: "Flagship product · ClawHub installs live on the homepage",
      zh: "旗舰产品 · ClawHub 安装量在首页实时可见",
    },
    related: {
      en: [
        {
          label: "Flagship case study",
          href: "/en/work/testcase-generator.html",
        },
        { label: "AI Testing Lab", href: "/en/ai-testing.html" },
      ],
      zh: [
        { label: "旗舰案例", href: "/zh/work/testcase-generator.html" },
        { label: "AI Testing Lab", href: "/zh/ai-testing.html" },
      ],
    },
    ctas: {
      en: [
        {
          label: "Open case study",
          href: "/en/work/testcase-generator.html",
          primary: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/XuXuClassMate/testcase-generator",
          external: true,
        },
      ],
      zh: [
        {
          label: "打开案例页",
          href: "/zh/work/testcase-generator.html",
          primary: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/XuXuClassMate/testcase-generator",
          external: true,
        },
      ],
    },
    en: {
      title: "How I Built an AI Test Case Generator with Multimodal Inputs",
      description:
        "A QA Engineer / SDET walkthrough of multimodal AI test case generation — PDF, Word, image, and video in; reviewable cases out.",
      sections: sectionsEn([
        {
          id: "why",
          heading: "Why multimodal AI testing matters for QA Engineers",
          body: [
            "Most requirement artifacts are not clean Markdown. They arrive as PDFs, Word specs, screenshots, and short videos. As a QA Engineer and SDET, I needed AI Testing that starts from those real inputs — not from a demo prompt box.",
            "This article explains how I shaped AI Test Case Generation into an installable product with a three-persona review loop (Test · Dev · Product Manager), instead of a one-off LLM notebook.",
          ],
        },
        {
          id: "pipeline",
          heading: "The product pipeline",
          body: ["The generator follows a fixed chain:"],
          bullets: [
            "PDF / Word / TXT / Image / Video intake",
            "AI case generation",
            "Three-persona review loop (Test · Dev · Product Manager)",
            "Excel / Markdown / XMind export",
          ],
        },
        {
          id: "shipping",
          heading: "Shipping as installable AI Test Automation",
          body: [
            "AI Testing only counts when teams can install it. Official run modes: Docker, local source, npm global install, and OpenClaw plugin.",
            "Read the full flagship case study for architecture, My Role, metrics, and Try it now commands.",
          ],
        },
      ]),
      meta: {
        title:
          "How I Built an AI Test Case Generator with Multimodal Inputs | XuXuClassMate",
        description:
          "QA Engineer / SDET guide to multimodal AI test case generation: PDF/Word/TXT/image/video → three-persona review → Excel/Markdown/XMind. Docker, source, npm, OpenClaw.",
        keywords: `${keywordsCore}, AI Test Case Generation, multimodal testing`,
      },
    },
    zh: {
      title: "我如何用多模态输入打造 AI 测试用例生成器",
      description:
        "QA Engineer / SDET 视角的多模态 AI 用例生成：PDF、Word、图片、视频进入，可评审用例产出。",
      sections: sectionsZh([
        {
          id: "why",
          heading: "为什么多模态 AI Testing 对 QA 重要",
          body: [
            "真实需求很少是干净 Markdown，更多是 PDF、Word、截图和短视频。作为 QA Engineer / SDET，我需要 AI Testing 从这些真实输入起步，而不是演示用的提示词框。",
            "本文说明我如何把 AI 用例生成做成可安装产品，并内置测试经理 · 开发经理 · 产品经理三角色评审闭环，而不是一次性 LLM 笔记本。",
          ],
        },
        {
          id: "pipeline",
          heading: "产品流水线",
          body: ["生成器固定走这条链："],
          bullets: [
            "PDF / Word / TXT / Image / Video 接入",
            "AI 用例生成",
            "三角色评审闭环（测试经理 · 开发经理 · 产品经理）",
            "Excel / Markdown / XMind 导出",
          ],
        },
        {
          id: "shipping",
          heading: "按可安装 AI Test Automation 交付",
          body: [
            "AI Testing 只有在团队装得上时才算数。官方运行方式：Docker、本地源码、npm 全局安装与 OpenClaw 插件。",
            "完整架构、我的角色、指标与 Try it now 见旗舰案例页。",
          ],
        },
      ]),
      meta: {
        title: "我如何用多模态输入打造 AI 测试用例生成器 | 旭旭同学",
        description:
          "QA Engineer / SDET 多模态 AI 用例生成指南：PDF/Word/TXT/图片/视频 → 三角色评审 → Excel/Markdown/XMind。Docker、源码、npm、OpenClaw。",
        keywords: `${keywordsCore}, AI 用例生成, 多模态测试`,
      },
    },
  },
  {
    slug: "playwright-e2e-framework",
    category: "Playwright",
    tags: {
      en: ["Playwright", "E2E", "Test Automation", "SDET"],
      zh: ["Playwright", "E2E", "测试自动化", "SDET"],
    },
    proof: {
      en: "Core Playwright showcase · repository upcoming",
      zh: "Playwright 核心 Showcase · 仓库即将公开",
    },
    related: {
      en: [
        { label: "Full-Stack E2E case", href: "/en/work/fullstack-e2e.html" },
        { label: "Playwright Lab", href: "/en/playwright.html" },
      ],
      zh: [
        { label: "全链路 E2E 案例", href: "/zh/work/fullstack-e2e.html" },
        { label: "Playwright Lab", href: "/zh/playwright.html" },
      ],
    },
    ctas: {
      en: [
        {
          label: "Open E2E case study",
          href: "/en/work/fullstack-e2e.html",
          primary: true,
        },
        { label: "Playwright Lab", href: "/en/playwright.html" },
      ],
      zh: [
        {
          label: "打开 E2E 案例",
          href: "/zh/work/fullstack-e2e.html",
          primary: true,
        },
        { label: "Playwright Lab", href: "/zh/playwright.html" },
      ],
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
            "UI-only green builds miss regressions in API contracts, cache layers, and message paths. The framework goal is End-to-End Testing across the system chain.",
          ],
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
            "Message queue outcomes",
          ],
        },
        {
          id: "next",
          heading: "What ships next",
          body: [
            "The public TypeScript + Playwright repository is upcoming. Until then, the case study documents architecture, My Role, and the hiring-facing showcase narrative.",
          ],
        },
      ]),
      meta: {
        title: "Building a Playwright E2E Testing Framework | XuXuClassMate",
        description:
          "QA Engineer / SDET guide to building a Playwright E2E testing framework covering UI, API, database, Redis, and MQ validation.",
        keywords: `${keywordsCore}, Playwright E2E, Full-Stack E2E, Test Automation Engineer`,
      },
    },
    zh: {
      title: "打造 Playwright E2E 测试框架",
      description:
        "QA Engineer / SDET 如何设计不止于点击的 Playwright 测试自动化——覆盖 API、数据库、Redis 与消息队列。",
      sections: sectionsZh([
        {
          id: "beyond-ui",
          heading: "把 Playwright 当作自动化主轴",
          body: [
            "在现代测试自动化里，Playwright 既是招聘关键词，也是工程主轴。对 SDET 来说，我把它当作全链路框架的执行中枢，而不只是浏览器驱动。",
            "只验证 UI 的绿灯会漏掉 API、缓存与消息路径上的回归。目标是系统链路上的 End-to-End Testing。",
          ],
        },
        {
          id: "chain",
          heading: "全栈校验链",
          body: ["目标架构覆盖："],
          bullets: [
            "Playwright 验证前端",
            "API 断言",
            "后端行为",
            "MySQL / 数据库状态",
            "Redis 缓存副作用",
            "消息队列结果",
          ],
        },
        {
          id: "next",
          heading: "下一步交付",
          body: [
            "公开的 TypeScript + Playwright 仓库即将上线。在此之前，案例页记录架构、我的角色与面向招聘的 Showcase。",
          ],
        },
      ]),
      meta: {
        title: "打造 Playwright E2E 测试框架 | 旭旭同学",
        description:
          "QA Engineer / SDET 打造 Playwright E2E 框架：覆盖 UI、API、数据库、Redis 与 MQ 校验。",
        keywords: `${keywordsCore}, Playwright E2E, 全链路 E2E, 测试自动化`,
      },
    },
  },
  {
    slug: "locust-api-performance-testing",
    category: "Performance Testing",
    tags: {
      en: ["Performance Testing", "Locust", "API Testing", "Python"],
      zh: ["性能测试", "Locust", "接口测试", "Python"],
    },
    proof: {
      en: "Practice suite on GitHub · Locust examples included",
      zh: "GitHub 练习仓 · 含 Locust 示例",
    },
    related: {
      en: [
        {
          label: "Python practice repo",
          href: "https://github.com/XuXuClassMate/My_Test_PyProject",
        },
        {
          label: "Java API automation case",
          href: "/en/work/automation-framework.html",
        },
      ],
      zh: [
        {
          label: "Python 练习仓",
          href: "https://github.com/XuXuClassMate/My_Test_PyProject",
        },
        {
          label: "Java 接口自动化案例",
          href: "/zh/work/automation-framework.html",
        },
      ],
    },
    ctas: {
      en: [
        {
          label: "Open Locust examples",
          href: "https://github.com/XuXuClassMate/My_Test_PyProject",
          primary: true,
          external: true,
        },
      ],
      zh: [
        {
          label: "打开 Locust 示例",
          href: "https://github.com/XuXuClassMate/My_Test_PyProject",
          primary: true,
          external: true,
        },
      ],
    },
    en: {
      title: "Performance Testing an API with Locust",
      description:
        "A practical Performance Testing note for QA Engineers: Locust-based API load testing, bottlenecks, and what to measure beyond green charts.",
      sections: sectionsEn([
        {
          id: "goal",
          heading: "What Performance Testing should prove",
          body: [
            "Performance Testing is not a vanity QPS number. For API Testing under load, I care about latency distribution, error budget, saturation points, and whether the database or cache is the first wall.",
            "Locust stays in my toolkit because it is Python-native, scriptable, and easy to keep next to API automation practice suites.",
          ],
        },
        {
          id: "practice",
          heading: "Where the practice lives",
          body: [
            "My public Python project includes Locust, API, Selenium, and Appium examples. Use it as a starting point for API Performance Testing patterns — then wire the same checks into CI when the suite matures.",
          ],
        },
        {
          id: "signals",
          heading: "Signals I watch",
          body: ["When load rises, I look for:"],
          bullets: [
            "p95 / p99 latency cliffs",
            "Error rate vs throughput tradeoffs",
            "DB lock / connection pool pressure",
            "Cache miss amplification",
          ],
        },
      ]),
      meta: {
        title: "Performance Testing an API with Locust | XuXuClassMate",
        description:
          "QA Engineer guide to API Performance Testing with Locust — latency, error budgets, bottlenecks, and practice repos.",
        keywords: `${keywordsCore}, Locust, API Performance Testing, load testing`,
      },
    },
    zh: {
      title: "用 Locust 做 API 性能测试",
      description:
        "面向 QA Engineer 的性能测试笔记：基于 Locust 的接口压测、瓶颈判断，以及绿灯图表之外该看什么。",
      sections: sectionsZh([
        {
          id: "goal",
          heading: "性能测试要证明什么",
          body: [
            "性能测试不是虚荣的 QPS。接口压测里我更关心延迟分布、错误预算、饱和点，以及数据库/缓存谁先成为墙。",
            "Locust 仍在我的工具箱里：Python 原生、可脚本化，也容易和接口自动化练习仓放在一起。",
          ],
        },
        {
          id: "practice",
          heading: "练习放在哪里",
          body: [
            "公开的 Python 项目包含 Locust、接口、Selenium 与 Appium 示例。可先当 API 性能测试模式起点，再在套件成熟后接入 CI。",
          ],
        },
        {
          id: "signals",
          heading: "我盯的信号",
          body: ["负载升高时，我会看："],
          bullets: [
            "p95 / p99 延迟断崖",
            "错误率与吞吐的取舍",
            "数据库锁 / 连接池压力",
            "缓存未命中放大",
          ],
        },
      ]),
      meta: {
        title: "用 Locust 做 API 性能测试 | 旭旭同学",
        description:
          "QA Engineer 的 Locust API 性能测试指南——延迟、错误预算、瓶颈与练习仓库。",
        keywords: `${keywordsCore}, Locust, 接口性能测试, 压测`,
      },
    },
  },
  {
    slug: "dockerized-test-environment",
    category: "Docker",
    tags: {
      en: ["Docker", "Test Infrastructure", "Docker Testing", "QA"],
      zh: ["Docker", "Test Infrastructure", "Docker Testing", "QA"],
    },
    proof: {
      en: "Related field guide: Dameng / Highgo Docker for QA · 54k+ pulls",
      zh: "相关实战：达梦 / 瀚高 Docker · 54k+ 拉取",
    },
    related: {
      en: [
        {
          label: "Dameng / Highgo Docker guide",
          href: "/en/blog/domestic-db-docker-qa.html",
        },
        { label: "Docker Suite case", href: "/en/work/docker-suite.html" },
        { label: "Test Infrastructure", href: "/en/infrastructure.html" },
      ],
      zh: [
        {
          label: "达梦 / 瀚高 Docker 指南",
          href: "/zh/blog/domestic-db-docker-qa.html",
        },
        { label: "Docker 套件案例", href: "/zh/work/docker-suite.html" },
        { label: "Test Infrastructure", href: "/zh/infrastructure.html" },
      ],
    },
    ctas: {
      en: [
        {
          label: "Browse Docker Hub",
          href: "https://hub.docker.com/u/xuxuclassmate",
          primary: true,
          external: true,
        },
        {
          label: "Read Dameng / Highgo guide",
          href: "/en/blog/domestic-db-docker-qa.html",
        },
      ],
      zh: [
        {
          label: "浏览 Docker Hub",
          href: "https://hub.docker.com/u/xuxuclassmate",
          primary: true,
          external: true,
        },
        {
          label: "阅读达梦 / 瀚高指南",
          href: "/zh/blog/domestic-db-docker-qa.html",
        },
      ],
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
            "I publish pull-and-run images so local laptops and CI share the same environment contract.",
          ],
        },
        {
          id: "principles",
          heading: "Principles that keep images usable",
          body: [],
          bullets: [
            "Predictable tags over clever names",
            "One service per image when possible",
            "Docs written for pull-and-run, not folklore",
            "Live pull metrics so adoption is visible",
          ],
        },
        {
          id: "proof",
          heading: "Where to go deeper",
          body: [
            "For Dameng / Highgo specifics and live Docker Hub numbers, read the dedicated field guide. For product packaging and My Role, open the Test DB Docker Suite case study.",
          ],
        },
      ]),
      meta: {
        title: "Building a Dockerized Test Environment | XuXuClassMate",
        description:
          "QA Engineer guide to Docker Testing and Test Infrastructure — reusable DB images, CI-ready environments, and live pull proof.",
        keywords: `${keywordsCore}, Docker Testing, Test Infrastructure, Dockerized test environment`,
      },
    },
    zh: {
      title: "打造容器化测试环境",
      description:
        "QA Engineer 如何构建几分钟可启动的 Docker Testing 环境——可复用镜像、CI 稳定与可验证拉取证据。",
      sections: sectionsZh([
        {
          id: "problem",
          heading: "安装税会拖垮 Test Infrastructure",
          body: [
            "如果每位工程师在第一次自动化之前都要花一天装数据库，Test Infrastructure 已经失败。Docker Testing 就是为了去掉这笔税。",
            "我发布 pull-and-run 镜像，让笔记本与 CI 共用同一套环境契约。",
          ],
        },
        {
          id: "principles",
          heading: "让镜像真能用的原则",
          body: [],
          bullets: [
            "标签可预期，不追求花哨命名",
            "尽量一镜像一服务",
            "文档按 pull-and-run 写，不靠口口相传",
            "用实时拉取量证明被采用",
          ],
        },
        {
          id: "proof",
          heading: "深入阅读",
          body: [
            "达梦 / 瀚高细节与 Docker Hub 实时数据见专项指南；产品打包与我的角色见测试库 Docker 套件案例。",
          ],
        },
      ]),
      meta: {
        title: "打造容器化测试环境 | 旭旭同学",
        description:
          "QA Engineer 的 Docker Testing / Test Infrastructure 指南——可复用数据库镜像、CI 环境与实时拉取证据。",
        keywords: `${keywordsCore}, Docker Testing, 容器化测试环境`,
      },
    },
  },
  {
    slug: "ai-assisted-test-case-generation",
    category: "AI Testing",
    tags: {
      en: ["AI Testing", "AI Test Automation", "Test Cases", "QA"],
      zh: ["AI Testing", "AI Test Automation", "用例", "QA"],
    },
    related: {
      en: [
        {
          label: "Multimodal generator article",
          href: "/en/blog/ai-testcase-generator-multimodal.html",
        },
        { label: "AI Testing Lab", href: "/en/ai-testing.html" },
      ],
      zh: [
        {
          label: "多模态生成器文章",
          href: "/zh/blog/ai-testcase-generator-multimodal.html",
        },
        { label: "AI Testing Lab", href: "/zh/ai-testing.html" },
      ],
    },
    ctas: {
      en: [
        {
          label: "Open AI Testing Lab",
          href: "/en/ai-testing.html",
          primary: true,
        },
      ],
      zh: [
        {
          label: "打开 AI Testing Lab",
          href: "/zh/ai-testing.html",
          primary: true,
        },
      ],
    },
    en: {
      title: "AI-Assisted Test Case Generation",
      description:
        "What AI-assisted test case generation means for QA Engineers — review loops, export formats, and why drafts without judgment create noise.",
      sections: sectionsEn([
        {
          id: "definition",
          heading: "AI assistance is not autopilot",
          body: [
            "AI-Assisted Test Case Generation should accelerate drafting for QA Engineers, not replace SDET judgment. Without Test / Dev / Product review, LLM dumps become review debt.",
            "Useful outputs are structured scenarios, boundary cases, negative paths, and exports teams already use — Excel, Markdown, XMind.",
          ],
        },
        {
          id: "practice",
          heading: "How I practice it",
          body: [
            "My installable generator encodes that loop. Read the multimodal build article and the flagship case study for architecture and live install metrics.",
          ],
        },
      ]),
      meta: {
        title: "AI-Assisted Test Case Generation | XuXuClassMate",
        description:
          "QA Engineer / SDET perspective on AI-assisted test case generation — review loops, structured outputs, and installable AI Testing tools.",
        keywords: `${keywordsCore}, AI-Assisted Test Case Generation, AI Testing`,
      },
    },
    zh: {
      title: "AI 辅助测试用例生成",
      description:
        "对 QA Engineer 来说，AI 辅助用例生成意味着什么——评审闭环、导出格式，以及没有判断力的草稿为何只是噪音。",
      sections: sectionsZh([
        {
          id: "definition",
          heading: "AI 辅助不是自动驾驶",
          body: [
            "AI 辅助用例生成应加速 QA Engineer 的草稿，而不是取代 SDET 判断。没有测试/开发/产品评审，LLM 倾倒只会变成评审债务。",
            "有用输出是结构化场景、边界与反向路径，以及团队已在用的导出格式——Excel、Markdown、XMind。",
          ],
        },
        {
          id: "practice",
          heading: "我怎么实践",
          body: [
            "可安装生成器把这条闭环写进产品。架构与实时安装数据见多模态构建文章与旗舰案例。",
          ],
        },
      ]),
      meta: {
        title: "AI 辅助测试用例生成 | 旭旭同学",
        description:
          "QA Engineer / SDET 视角的 AI 辅助用例生成——评审闭环、结构化产物与可安装 AI Testing 工具。",
        keywords: `${keywordsCore}, AI 辅助用例生成, AI Testing`,
      },
    },
  },
  {
    slug: "ai-agent-software-testing",
    category: "AI Testing",
    tags: {
      en: ["AI Testing", "AI Agent", "OpenClaw", "SDET"],
      zh: ["AI Testing", "AI Agent", "OpenClaw", "SDET"],
    },
    related: {
      en: [
        { label: "AI Testing Lab", href: "/en/ai-testing.html" },
        {
          label: "Shipping ClawHub skills",
          href: "/en/blog/clawhub-skill-shipping.html",
        },
      ],
      zh: [
        { label: "AI Testing Lab", href: "/zh/ai-testing.html" },
        {
          label: "发布 ClawHub 技能",
          href: "/zh/blog/clawhub-skill-shipping.html",
        },
      ],
    },
    ctas: {
      en: [
        {
          label: "Explore AI Testing Lab",
          href: "/en/ai-testing.html",
          primary: true,
        },
        {
          label: "ClawHub profile",
          href: "https://clawhub.ai/xuxuclassmate",
          external: true,
        },
      ],
      zh: [
        {
          label: "探索 AI Testing Lab",
          href: "/zh/ai-testing.html",
          primary: true,
        },
        {
          label: "ClawHub 主页",
          href: "https://clawhub.ai/xuxuclassmate",
          external: true,
        },
      ],
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
            "The research line covers requirement → test plan → cases → execution → bug detection → report. Products ship when that chain is installable and reviewable.",
          ],
        },
        {
          id: "evidence",
          heading: "Evidence over theater",
          body: [
            "Downloads, Docker pulls, and case studies are the proof layer. See AI Testing Lab for the roadmap and ClawHub shipping notes for packaging discipline.",
          ],
        },
      ]),
      meta: {
        title: "AI Agent for Software Testing | XuXuClassMate",
        description:
          "QA Engineer / SDET view on AI agents for software testing — installable OpenClaw skills, evidence metrics, and three-persona review loops.",
        keywords: `${keywordsCore}, AI Agent for Software Testing, OpenClaw, ClawHub`,
      },
    },
    zh: {
      title: "面向软件测试的 AI Agent",
      description:
        "QA Engineer / SDET 如何看待软件测试 AI Agent——可安装技能、证据与评审闭环，而不是演示。",
      sections: sectionsZh([
        {
          id: "shape",
          heading: "Agent 需要安装路径",
          body: [
            "软件测试 AI Agent 只有在运行时装得上时才算真。所以我的工作里 ClawHub / OpenClaw 打包与 Docker、CLI 并行。",
            "研究线覆盖：需求 → 测试计划 → 用例 → 执行 → 缺陷发现 → 报告。这条链可安装、可评审，产品才算交付。",
          ],
        },
        {
          id: "evidence",
          heading: "证据大于表演",
          body: [
            "下载量、Docker 拉取与案例页是证据层。路线图见 AI Testing Lab，打包纪律见 ClawHub 发布笔记。",
          ],
        },
      ]),
      meta: {
        title: "面向软件测试的 AI Agent | 旭旭同学",
        description:
          "QA Engineer / SDET 视角的软件测试 AI Agent——可安装 OpenClaw 技能、证据指标与三角色评审闭环。",
        keywords: `${keywordsCore}, 软件测试 AI Agent, OpenClaw, ClawHub`,
      },
    },
  },
];

export function toNote(locale: "en" | "zh", def: LandingDef): Note {
  const copy = def[locale];
  return {
    slug: def.slug,
    title: copy.title,
    description: copy.description,
    category: def.category,
    proof: def.proof?.[locale],
    tags: def.tags[locale],
    sections: copy.sections,
    related: def.related?.[locale],
    ctas: def.ctas?.[locale],
    meta: copy.meta,
  };
}
