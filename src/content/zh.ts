import type { LocaleCopy } from "./types";
import { getFeaturedProjects, getWorkProjects } from "./projects";
import { getNotes } from "./notes";
import { getOrgCategories } from "./org";
import { getNowSections, NOW_UPDATED } from "./now";

const sharedKeywords =
  "旭旭同学, xuxuclassmate, XuXuClassMate, QA Engineer, SDET, Test Automation Engineer, AI Testing, AI Test Automation, Playwright, API Testing, Performance Testing, Docker Testing, Test Infrastructure, AI Test Case Generation, 软件测试, 自动化测试, AI测试, 接口测试, 性能测试";

export const zh: LocaleCopy = {
  brand: "旭旭同学",
  author: "旭旭同学",
  languageSwitch: "中文",
  languageSwitchHint: "切换到 English",
  contactLabel: "联系我：",
  contactHint: "欢迎合作——先选方向，再发邮件。",
  contactOffers: [
    "AI 测试工具 / ClawHub 技能定制",
    "测试团队管理顾问（初创 → 规模化）",
    "数据库 / Docker 测试环境落地",
    "加入 InnoNestX 开源项目 / 一起学习、一起做",
  ],
  copyEmail: "复制邮箱",
  copiedEmail: "已复制",
  backToTop: "回到顶部",
  themeToggle: "主题",
  themeToLight: "切换到浅色主题",
  themeToDark: "切换到深色主题",
  copyright: "© 2020-2026 旭旭同学",
  wechatAlt: "微信二维码",
  closeModal: "关闭",
  menuLabel: "菜单",
  skipToContent: "跳到主要内容",
  nav: {
    about: "关于",
    experience: "经历",
    projects: "项目",
    blog: "笔记",
    aiTesting: "AI 测试",
    github: "GitHub",
    life: "生活",
    contact: "联系",
    learn: "经历",
    work: "项目",
    workMenu: "工作",
    notes: "笔记",
    more: "更多",
    innonestx: "开源",
    openSource: "开源",
    playground: "体验台",
    now: "Now",
  },
  meta: {
    home: {
      title: "旭旭同学 | QA Engineer · SDET · AI Testing",
      description:
        "QA Engineer / SDET，专注测试自动化、AI Testing、接口测试、性能测试、Playwright、Docker Testing 与 AI 用例生成。",
      keywords: sharedKeywords,
      ogTitle: "旭旭同学 | QA Engineer · SDET · AI Testing",
    },
    about: {
      title: "关于我 | QA Engineer · SDET · AI Testing | 旭旭同学",
      description:
        "QA Engineer / SDET，专注测试自动化、接口测试、性能测试、Playwright 与 AI Testing。",
      keywords: `${sharedKeywords}, About, SDET`,
    },
    "ai-testing": {
      title: "AI Testing Lab | AI 测试自动化与用例生成 | 旭旭同学",
      description:
        "AI Testing Lab：AI 用例生成、AI 测试自动化、LLM 接口测试、缺陷分析与 Testing Agent。",
      keywords: `${sharedKeywords}, AI Testing Lab, AI Test Case Generation`,
    },
    playwright: {
      title: "Playwright Testing Lab | Test Automation | 旭旭同学",
      description:
        "面向 QA Engineer / SDET 的 Playwright 测试自动化实验室：UI、API、Fixtures、并行与 CI/CD。",
      keywords: `${sharedKeywords}, Playwright Testing Lab`,
    },
    infrastructure: {
      title: "Test Infrastructure | Docker Testing | 旭旭同学",
      description:
        "Test Infrastructure：Docker Testing 环境、CI/CD、GitHub Actions 与容器化 QA 栈。",
      keywords: `${sharedKeywords}, Docker Testing, Test Infrastructure`,
    },
    blog: {
      title: "工程笔记 | QA Engineer & SDET 实战笔记 | 旭旭同学",
      description:
        "Engineering Notes：QA Engineering、AI Testing、Playwright、接口测试、性能测试、Docker、Cloudflare、OpenClaw、DevOps。",
      keywords: `${sharedKeywords}, 工程笔记, QA 实战笔记`,
    },
    life: {
      title: "生活点滴 | 旭旭同学",
      description:
        "旅行、音乐与键盘之外的日常 — QA Engineer / SDET 旭旭同学的生活侧写。",
      keywords: `${sharedKeywords}, 旅行, 爱好`,
    },
    learn: {
      title: "经历 | QA Engineer 到 SDET & AI Testing | 旭旭同学",
      description:
        "从 QA 工程与测试管理，到 Playwright、性能测试、AI Testing 与 Test Infrastructure 的经历路径。",
      keywords: `${sharedKeywords}, 经历, SDET, Test Automation Engineer`,
    },
    work: {
      title: "项目 | QA Engineer & SDET Portfolio | 旭旭同学",
      description:
        "SDET Portfolio：AI 用例生成、Playwright E2E、接口自动化、Docker Testing 与 Test Infrastructure 项目。",
      keywords: `${sharedKeywords}, SDET Portfolio, 测试自动化项目`,
    },
    notes: {
      title: "工程笔记 | QA / SDET 实战笔记 | 旭旭同学",
      description:
        "可检索的工程笔记：QA Engineering、AI Testing、Playwright、接口测试、性能测试、Docker、Cloudflare、OpenClaw、DevOps。",
      keywords: `${sharedKeywords}, 工程笔记, QA 实战笔记, Docker Testing`,
    },
    "open-source": {
      title: "开源 | InnoNestX · AI Tools · QA Tools | 旭旭同学",
      description:
        "XuXuClassMate 个人品牌下的开源：InnoNestX 承载可安装的 AI 工具、QA 工具、开发者工具、基础设施与自动化。",
      keywords: `${sharedKeywords}, 开源, InnoNestX, AI Tools, QA Tools, Test Infrastructure`,
    },
    playground: {
      title: "体验台 | 试用开源工具 | 旭旭同学",
      description:
        "在本站试用 XuXuClassMate 开源工具——交互演示、在线产品与安装路径，覆盖 AI Testing、Docker API 等。",
      keywords: `${sharedKeywords}, 体验台, 开源演示, AI 用例生成, Docker Hub API, GlobalPulse`,
    },
    now: {
      title: "Now | 正在做 · 正在学 · 正在探索 | 旭旭同学",
      description:
        "旭旭同学当前在做、在学、在探索的事——AI 用例生成器、OpenClaw QA Skills、Playwright、MCP 等。每月更新。",
      keywords: `${sharedKeywords}, Now, AI 用例生成, OpenClaw, Playwright, MCP, LLM Evaluation`,
    },
    innonestx: {
      title: "开源 | InnoNestX · AI Tools · QA Tools | 旭旭同学",
      description:
        "XuXuClassMate 个人品牌下的开源：InnoNestX 承载可安装的 AI 工具、QA 工具、开发者工具、基础设施与自动化。",
      keywords: `${sharedKeywords}, 开源, InnoNestX, AI Tools, QA Tools, Test Infrastructure`,
    },
  },
  home: {
    subtitle: "可安装的质量工程",
    title: "QA Engineer · SDET · AI Testing",
    description:
      "QA Engineer / SDET，专注测试自动化、AI Testing、接口测试与性能测试——以及 Playwright、Docker Testing 与 AI 用例生成。",
    positioning:
      "QA Engineer + SDET + AI Testing——团队可运行的可安装质量工程。",
    highlightsTitle: "数据一览",
    highlightsSubtitle: "公开实时指标 · 每日更新",
    highlightsProof: "能验证，才算展示。",
    highlights: [
      {
        value: "54k+",
        label: "Docker 拉取 · 累计",
        metric: "docker:total-pulls",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub →",
      },
      {
        value: "1.6k+",
        label: "ClawHub 下载 · 累计",
        metric: "clawhub:total-downloads",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "查看 ClawHub →",
      },
      {
        value: "500+",
        label: "Gateway 请求 · 实时",
        metric: "api:gateway-calls",
        href: "https://docker-hub-pull-counter.vercel.app",
        linkLabel: "查看 API Gateway →",
      },
      {
        value: "12",
        label: "Docker 镜像 · 公开",
        metric: "docker:repo-count",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub →",
      },
    ],
    featuredTitle: "质量工程",
    featuredCta: "查看全部项目",
    featured: getFeaturedProjects("zh"),
    principlesTitle: "工程原则",
    principlesLead: "不能安装、不能运行、不能集成，就不算完成。",
    principles: [
      {
        title: "Installable > Demoable",
        description:
          "Docker、CLI 或 ClawHub——团队装不上、跑不起来，幻灯片就不算交付。",
      },
      {
        title: "AI with Persona Review",
        description:
          "多模态生成默认走测试经理 · 开发经理 · 产品经理三角色评分闭环，而不是裸 LLM 倾倒。",
      },
      {
        title: "Reusable Environments",
        description: "容器、数据库镜像与网关，让 CI 与笔记本启动同一套栈。",
      },
      {
        title: "Quality Is a System",
        description: "自动化、基础设施与评审闭环会复利——质量不是一次性清单。",
      },
      {
        title: "Judgment Still Leads",
        description: "AI 加速草稿；质量手艺决定什么够格上线。",
      },
    ],
    channelsTitle: "关注渠道",
    channels: [
      {
        title: "GitHub",
        description: "开源 AI 工具、Agent 技能与测试自动化框架。",
        href: "https://github.com/XuXuClassMate",
        linkLabel: "查看 GitHub",
        icon: "github",
      },
      {
        title: "Docker Hub",
        description: "可复用数据库镜像——开发、测试、运维、DBA 都能直接用。",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub",
        icon: "docker",
      },
      {
        title: "ClawHub",
        description:
          "可安装的 OpenClaw Agent 技能——用例生成器与交易助手。",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "访问 ClawHub",
        icon: "robot",
      },
      {
        title: "GlobalPulse",
        description: "在线产品——定时市场情报简报。",
        href: "https://pulse.xuxuclassmate.com/",
        linkLabel: "打开 Pulse",
        icon: "robot",
      },
    ],
    links: [
      {
        title: "学习路径",
        description: "从测试手艺到可安装 AI 工具与产品系统",
        href: "/zh/learn.html",
      },
      {
        title: "项目展示",
        description: "安装路径：ClawHub · Docker · 在线产品",
        href: "/zh/work.html",
      },
      {
        title: "工程笔记",
        description: "QA / SDET 实战笔记 — Playwright、AI Testing、Docker 与交付手记",
        href: "/zh/blog.html",
      },
      {
        title: "开源",
        description: "InnoNestX —— 个人品牌下的 AI / QA 工具与基础设施",
        href: "/zh/open-source.html",
      },
    ],
    footerDesc: "QA Engineer · SDET · AI Testing — 可安装的质量工程",
    social: [
      {
        href: "https://github.com/XuXuClassMate",
        label: "GitHub",
        icon: "github",
      },
      {
        href: "https://fgg6gzb6uk.feishu.cn/docx/LkwDdpLjnoIdGwxOH6zcRwEWnhd?from=from_copylink",
        label: "博客",
        icon: "blog",
      },
      {
        href: "#",
        label: "微信",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  learn: {
    subtitle: "经历",
    title: "从测试手艺到 AI Testing",
    description: "覆盖测试管理、自动化框架、性能、Playwright 与 AI 辅助测试的经历路径",
    stackTitle: "技术栈",
    stack: [
      {
        title: "AI 与 Agent",
        description: "",
        items: [
          "OpenClaw / ClawHub 技能",
          "多模态用例生成",
          "LLM 评审闭环",
          "Agent 可用的 CLI 与 Docker 打包",
        ],
      },
      {
        title: "测试管理",
        description: "",
        items: [
          "覆盖字节、国企、初创等多阶段测试团队管理",
          "发布就绪与质量门禁",
          "招聘培养与产能规划",
          "与产品、研发协同推进交付",
        ],
      },
      {
        title: "自动化测试",
        description: "",
        items: [
          "Playwright / Selenium UI 自动化",
          "接口自动化（不绑死语言）",
          "Locust 性能与负载测试",
          "框架设计与可复用套件",
        ],
      },
      {
        title: "容器与交付",
        description: "",
        items: [
          "Docker / Compose",
          "CI/CD 流水线",
          "国产与开源数据库镜像",
          "测试环境管理",
        ],
      },
    ],
    resourcesTitle: "学习资源",
    resources: [
      {
        title: "AI 测试用例生成器",
        description:
          "开源工具：面向 PRD 与多模态 QA 输入的 AI 用例生成——三角色评审闭环，导出 Excel / Markdown / XMind。支持 Docker、本地源码、npm 与 OpenClaw。",
        href: "https://github.com/XuXuClassMate/testcase-generator",
        linkLabel: "查看 GitHub",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw / ClawHub 技能：技术分析、信号、仓位与风控；也支持 Docker 与 pip 安装。",
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "查看 GitHub",
      },
      {
        title: "GlobalPulse",
        description:
          "自托管市场情报与定时简报（Cloudflare Workers）——先上线体验，再看从单点工具走向产品线的实践。",
        href: "https://pulse.xuxuclassmate.com/",
        linkLabel: "打开在线站点",
      },
      {
        title: "Python 测试实践",
        description:
          "Locust 性能脚本，以及接口、Selenium、Appium 等实践示例集中在一个仓库。",
        href: "https://github.com/XuXuClassMate/My_Test_PyProject",
        linkLabel: "查看 GitHub",
      },
      {
        title: "ClawHub",
        description:
          "发现并安装 OpenClaw Agent 技能——包括我发布的 QA 与交易相关工具。",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "浏览 ClawHub",
      },
    ],
    timelineTitle: "学习历程",
    timeline: [
      {
        title: "测试手艺底座",
        description:
          "打牢功能、接口与探索式测试的判断力——至今仍指导我做的每一款工具。",
      },
      {
        title: "多阶段团队管理",
        description:
          "在字节、国企、初创等不同约束下带测试团队——流程、人与发布就绪。",
      },
      {
        title: "自动化与性能规模化",
        description:
          "从脚本走向框架：Playwright、Locust 与可复用环境，不再被某一种语言绑住。",
      },
      {
        title: "AI 原生工具",
        description:
          "把重复的质量工作产品化——多模态生成、评审闭环与可导出交付物。",
      },
      {
        title: "OpenClaw 技能与产品系统",
        description:
          "在 ClawHub 打包技能，并推进 GlobalPulse、Docker Hub API Gateway 等可运行系统。",
      },
    ],
    storiesTitle: "关键挑战",
    storiesChallengeLabel: "挑战",
    storiesApproachLabel: "怎么解决",
    storiesResultLabel: "结果",
    stories: [
      {
        title: "高并发下的数据库瓶颈",
        challenge:
          "账号与资金链路在高并发下先打穿数据库——应用层看起来还健康，延迟已经飙升。",
        approach:
          "Locust 压测画像、与研发一起做 SQL / 索引复盘，并用可复现的 Docker 数据库环境对齐诊断。",
        result:
          "在 500+ QPS 压力下稳住关键路径，缩短 QA 与后端之间的反馈闭环。",
      },
      {
        title: "复杂账号 / 资金 / 风控流程",
        challenge:
          "端到端路径跨越账号、资金与风控系统——只靠 UI 点击无法证明发布就绪。",
        approach:
          "分层 Playwright + 接口自动化、共享 fixtures，以及环境对齐，让回归覆盖真实业务链。",
        result:
          "优先链路自动化覆盖率超过 80%，回归周期大约缩短 40%。",
      },
      {
        title: "团队规模下的回归效率",
        challenge:
          "人工回归跟不上字节、国企、初创等不同交付节奏下的发版频率。",
        approach:
          "框架设计、CI/CD 质量门禁，以及可复用套件——而不是绑死单一语言的一次性脚本。",
        result:
          "团队获得更清晰的发布就绪信号，调优路径上响应时间改善约 20–35%。",
      },
    ],
    focusTitle: "当前学习重点",
    focusHeading: "Agent 技能、多模态 QA 与产品系统",
    focusIntro: "正在把「想法 → Agent 技能 / 产品 → 可运行系统」这条链路打磨扎实：",
    focusItems: [
      "发布并迭代 OpenClaw / ClawHub 技能",
      "多模态需求到结构化测试产物",
      "Locust 与自动化手艺支撑 AI 工具",
      "产品系统（Workers / API）",
    ],
    footerDesc: "公开学习——带着质量根基做 AI 工具",
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
    subtitle: "项目",
    title: "开源、AI 工具与基础设施",
    description:
      "质量工程、开发者基础设施与 AI / Agent 项目——团队可安装、可运行的工具。",
    projectsTitle: "项目",
    filterAll: "全部",
    projects: getWorkProjects("zh"),
    approachTitle: "项目怎么交付",
    approach: [
      {
        title: "按真实安装打包",
        description:
          "Docker 镜像、CLI 入口、OpenClaw / ClawHub 技能——让别人能直接跑起来。",
      },
      {
        title: "质量留在闭环里",
        description:
          "评审角色、回归习惯、团队可复用环境——不是一次性脚本。",
      },
      {
        title: "栈保持灵活",
        description:
          "TypeScript、Python、Java 或其他都行——约束是交付质量，不是语言身份。",
      },
    ],
    skillsTitle: "能力与证据",
    skills: [
      {
        title: "AI 工具与 Agent",
        items: [
          "OpenClaw / ClawHub 技能设计",
          "多模态用例生成",
          "LLM 评审与导出流水线",
          "Docker / npm / pip 打包",
        ],
        evidence: [
          { label: "ClawHub", href: "https://clawhub.ai/xuxuclassmate" },
          {
            label: "用例生成器",
            href: "https://github.com/XuXuClassMate/testcase-generator",
          },
        ],
      },
      {
        title: "测试管理",
        items: [
          "覆盖字节、国企、初创等多阶段类型的测试团队管理经验",
          "发布就绪、风险分流与质量门禁",
          "招聘培养与产能规划",
          "与产品、研发协同推进交付",
        ],
      },
      {
        title: "功能测试",
        items: [
          "需求分析与测试用例设计",
          "黑盒测试与白盒测试",
          "接口测试与集成测试",
          "缺陷管理与跟踪",
        ],
      },
      {
        title: "自动化测试",
        items: [
          "Web UI 自动化（Playwright / Selenium）",
          "接口自动化",
          "移动端自动化（Appium）",
          "可复用框架设计",
        ],
        evidence: [
          {
            label: "Java 实践",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
          {
            label: "Python 实践",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject",
          },
        ],
      },
      {
        title: "性能测试",
        items: [
          "Locust 压测与负载测试",
          "接口 / 场景性能脚本",
          "性能监控、分析与调优",
          "并发测试设计",
        ],
        evidence: [
          {
            label: "Locust 示例",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject/tree/main/Performance_Test",
          },
        ],
      },
      {
        title: "测试环境",
        items: [
          "容器化数据库与服务栈",
          "CI/CD 流程优化",
          "国产与开源数据库镜像",
          "测试工具集成与管理",
        ],
        evidence: [
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/u/xuxuclassmate",
          },
        ],
      },
    ],
    caseBackLabel: "全部项目",
    caseProblemTitle: "问题",
    caseProblemLead: "为什么做？",
    caseSolutionTitle: "方案",
    caseSolutionLead: "怎么解决？",
    caseTradeoffsTitle: "取舍",
    caseOutcomesTitle: "交付物",
    caseArtifactsTitle: "可检查的证据",
    caseMetricsTitle: "成果指标",
    caseMetricsLead: "取得什么成果？",
    caseLinksTitle: "链接",
    caseOverviewTitle: "项目概述",
    caseStackTitle: "技术栈",
    caseStackLead: "使用什么技术？",
    caseArchitectureTitle: "架构",
    caseArchitectureLead: "系统架构",
    caseFeaturesTitle: "关键特性",
    caseFeaturesLead: "核心功能",
    caseContributionTitle: "我的贡献",
    caseResultsTitle: "结果",
    caseRoleTitle: "我的角色",
    caseRoleLead: "我具体做了什么？",
    caseDeploymentTitle: "部署",
    caseDeploymentLead: "如何运行？",
    caseGithubTitle: "GitHub",
    caseLiveDemoTitle: "在线体验",
    cases: [
      {
        slug: "testcase-generator",
        title: "AI 测试用例生成器",
        subtitle: "旗舰案例",
        description:
          "AI 驱动的测试用例生成：接入 PDF · Word · TXT · 图片 · 视频，经测试经理 · 开发经理 · 产品经理三角色评审闭环，导出 Excel、Markdown、XMind。支持 Docker、本地源码、npm 全局安装与 OpenClaw 插件。",
        cover: "/images/cover-testcase.jpg",
        coverAlt: "AI 测试用例生成器",
        flagship: true,
        status: "live",
        overview:
          "testcase-generator 把需求文档与多模态输入转为结构化 QA 产物。生成后固定走三角色评审（测试经理 · 开发经理 · 产品经理），按覆盖率 / 逻辑完整性 / 可执行性 / 清晰度 / 安全性打分（满分 100，默认阈值 90，最多 5 轮）。官方文档：https://innonestx.github.io/testcase-generator/",
        problem:
          "真实需求常以 PDF、Word、截图甚至短视频出现。手工整理场景与边界用例成本高；裸 LLM 倾倒缺少覆盖、可执行性与安全视角，难以被 QA 团队直接采用。",
        solution:
          "做成可安装的多模态生成器：解析 PDF / Word / TXT / 图片 / 视频 → AI 生成结构化用例 → 自动分配测试经理 · 开发经理 · 产品经理三角色评审（可配置多模型，不足 3 个评审模型时循环复用）→ 按评分算法迭代，直至达阈值或轮次上限 → 导出 Excel / Markdown / XMind。同一产品支持 Docker、本地源码、npm 全局安装与 OpenClaw 插件四种运行方式。",
        pipeline: {
          inputs: ["PDF", "Word", "TXT", "Image", "Video"],
          stages: [
            "多模态解析",
            "AI 用例生成",
            "三角色评审闭环",
            "Excel / Markdown / XMind 导出",
          ],
        },
        architecture: [
          {
            title: "产品流水线",
            layers: [
              "多模态输入（PDF · Word · TXT · Image · Video）",
              "AI 生成（可配置 generator / reviewer / both）",
              "结构化测试场景与用例",
              "三角色评审：测试经理 · 开发经理 · 产品经理",
              "评分算法（阈值默认 90 · 最多 5 轮）→ 导出",
            ],
          },
          {
            title: "支持的运行方式",
            layers: [
              "Docker / Docker Compose（端口 3456 Web UI）",
              "本地源码运行（npm run build && npm run start）",
              "npm 全局安装（testcase-generator --standalone）",
              "OpenClaw 插件（/testgen 与 generate_test_cases 工具）",
            ],
          },
        ],
        features: [
          "多模态接入：PDF、Word、TXT、图片与视频（视频可选 ffmpeg 抽帧）",
          "三角色评审：测试经理（覆盖/可执行）· 开发经理（可行性/安全）· 产品经理（业务/旅程）",
          "评分维度：覆盖 30 · 逻辑 20 · 可执行 20 · 清晰 15 · 安全 15",
          "多厂商模型槽位：Anthropic、OpenAI、DeepSeek、Qwen、Gemini 等，或自定义 OpenAI 兼容端点",
          "导出 Excel、Markdown、XMind；中英文生成",
          "四种安装面：Docker、本地源码、npm、OpenClaw 插件",
        ],
        contribution: [
          "主导产品方向：可安装的质量工具，而不是一次性演示笔记本。",
          "设计「多模态解析 → AI 生成 → 三角色评分评审 → 导出」流水线。",
          "完成 Docker、npm、本地源码与 OpenClaw 插件四条运行路径。",
          "把评审阈值、轮次上限与 QA 日常导出格式写进默认可运行配置。",
        ],
        techStack: [
          "TypeScript",
          "Express（Standalone Web）",
          "Anthropic / OpenAI-compatible LLMs",
          "Docker",
          "npm",
          "OpenClaw Plugin",
          "Excel / Markdown / XMind 导出",
        ],
        metrics: [
          {
            label: "Docker 拉取",
            value: "899",
            metric: "docker:testcase-generator",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=testcase-generator",
          },
          {
            label: "npm 下载",
            value: "139",
            metric: "npm:testcase-generator",
            href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
          },
          {
            label: "OpenClaw / ClawHub 安装",
            value: "700+",
            metric: "clawhub:ai-testcase-generator",
            href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          },
        ],
        deployment: {
          summary:
            "分发面以 Docker、npm 与 OpenClaw 为主（另支持本地源码运行）。Docker 拉取量由 Docker Hub API Gateway 实时采集。",
          steps: [
            "Docker：docker pull xuxuclassmate/testcase-generator:latest，配置 AI_PROVIDER 与 API Key，映射 3456，打开 http://localhost:3456。",
            "npm：npm install -g @classmatexuxu/testcase-generator，然后 testcase-generator --standalone。",
            "OpenClaw：openclaw plugins install -l /path/to/testcase-generator，在 config.yaml 配置 models[] 后使用 /testgen。",
            "本地源码（无下载计数）：clone 仓库 → npm install → 配置 .env → npm run build && npm run start。",
          ],
          channels: [
            {
              label: "官方文档",
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
          title: "立即体验",
          description:
            "先走交互 Demo（示例 PRD → 结构化用例 → 三角色评审），再用 Docker 按官方文档做真实多模态上传。",
          note:
            "浏览器 Demo 使用精选示例输出——不是实时 LLM。本机上传 PDF / Word / 图片 / 视频请按官方文档用 Docker 或本地源码运行。",
          primary: {
            label: "打开交互 Demo",
            href: "/zh/demo/ai-testcase-generator.html",
          },
          secondary: [
            {
              label: "官方文档",
              href: "https://innonestx.github.io/testcase-generator/",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            },
            {
              label: "GitHub",
              href: "https://github.com/XuXuClassMate/testcase-generator",
            },
          ],
          command:
            "docker pull xuxuclassmate/testcase-generator:latest\n# 配置 .env（AI_PROVIDER + API Key），然后：\ndocker run -d --name testcase-generator -p 3456:3456 \\\n  -e AI_PROVIDER=anthropic -e ANTHROPIC_API_KEY=sk-ant-... \\\n  -e LANGUAGE=zh -e ENABLE_REVIEW=true -e REVIEW_THRESHOLD=90 \\\n  xuxuclassmate/testcase-generator:latest\n# 打开 http://localhost:3456",
        },
        proof: {
          github: "https://github.com/XuXuClassMate/testcase-generator",
          docker: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
          demo: "/zh/demo/ai-testcase-generator.html",
          readme: "https://innonestx.github.io/testcase-generator/",
        },
        tradeoffs: [
          "用三角色 AI 评审 + 评分阈值代替裸 LLM 倾倒——覆盖、可执行性与安全视角写进默认闭环。",
          "Docker + 源码 + npm + OpenClaw 四条路径一起交付，人和 Agent 共用同一产品。",
          "接受多轮评审带来的首答时延，换取 Excel / Markdown / XMind 等 QA 日常可落地产物。",
        ],
        artifacts: [
          {
            title: "官方文档",
            description: "模型配置、三角色评审、评分算法与四种安装方式的权威说明。",
            href: "https://innonestx.github.io/testcase-generator/",
            linkLabel: "打开文档",
          },
          {
            title: "Docker 镜像",
            description: "本地 Web UI：上传 PDF / Word / 图片 / 视频并生成用例。",
            href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            linkLabel: "Docker Hub",
          },
          {
            title: "源码仓库",
            description: "多模态解析、生成器与三角色评审闭环开源可查。",
            href: "https://github.com/XuXuClassMate/testcase-generator",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "本站旗舰可安装 AI 测试产品",
          "官方四种运行方式：Docker · 源码 · npm · OpenClaw",
          "三角色评审 + 评分阈值写入默认可运行配置",
        ],
        links: [
          {
            label: "官方文档",
            href: "https://innonestx.github.io/testcase-generator/",
          },
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/testcase-generator",
          },
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
          },
          {
            label: "npm",
            href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
          },
        ],
        meta: {
          title: "AI 测试用例生成器 — 旗舰案例 | 旭旭同学",
          description:
            "AI 测试用例生成：PDF/Word/TXT/图片/视频 → 三角色评审闭环 → Excel/Markdown/XMind。支持 Docker、源码、npm 与 OpenClaw。",
          keywords: `${sharedKeywords}, AI 测试用例生成器, 多模态测试, 旗舰案例, OpenClaw`,
        },
      },
      {
        slug: "trading-assistant",
        title: "Trading Assistant Core",
        subtitle: "案例详解",
        description: "可安装的 OpenClaw 技能：信号、仓位与风险检查。",
        cover: "/images/cover-trading.jpg",
        coverAlt: "Trading Assistant Core",
        status: "live",
        overview:
          "可安装的 OpenClaw / ClawHub 交易技能：支撑阻力分析、多指标信号、仓位测算与风险提醒——并提供 Docker 与 CLI 路径，供非 Agent 用户使用。",
        problem:
          "交易工作流停留在笔记本和聊天提示词里——Agent 无法安装带风险护栏的稳定技能。",
        solution:
          "将支撑阻力、多指标信号、仓位测算与风险提醒打包为 ClawHub 技能，并提供 Docker 与 pip / CLI 入口。",
        architecture: [
          {
            title: "决策闭环",
            layers: [
              "市场输入",
              "指标 / 支撑阻力引擎",
              "信号合成",
              "仓位测算",
              "风险提醒",
              "Agent / CLI 输出",
            ],
          },
          {
            title: "安装面",
            layers: ["ClawHub 技能", "Docker 镜像", "pip / ta CLI"],
          },
        ],
        features: [
          "支撑与阻力分析",
          "多指标交易信号",
          "仓位测算辅助",
          "风险优先提醒与护栏",
          "ClawHub / OpenClaw 技能安装",
          "Docker 与 CLI 供人工场景运行",
        ],
        contribution: [
          "定义技能契约：没有风险控制的信号不可交付。",
          "实现指标 / 支撑阻力逻辑，并完成 ClawHub、Docker 与 CLI 打包。",
          "发布并维护可安装技能，下载量实时可见。",
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
          summary: "作为 Agent 技能安装，或在没有 Agent 运行时本地运行。",
          steps: [
            "ClawHub：为 OpenClaw Agent 安装 Trading Assistant Core。",
            "Docker：拉取并运行已发布镜像，容器化使用。",
            "CLI：通过 pip 安装，使用 ta 入口进行本地工作流。",
          ],
          channels: [
            {
              label: "ClawHub",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            },
            {
              label: "GitHub",
              href: "https://github.com/XuXuClassMate/trading-assistant",
            },
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/trading-assistant",
            },
          ],
        },
        proof: {
          github: "https://github.com/XuXuClassMate/trading-assistant",
          demo: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          docker: "https://hub.docker.com/r/xuxuclassmate/trading-assistant",
        },
        tradeoffs: [
          "仓位测算与风险提醒优先于花哨信号——只会喊进场的技能不安全。",
          "保留 CLI / Docker，让没有 Agent 运行时的人也能跑同一套逻辑。",
          "发布到 ClawHub，而不是停在笔记本工作流，让 Agent 拿到可安装包。",
        ],
        artifacts: [
          {
            title: "ClawHub 技能",
            description: "可安装的 OpenClaw 技能，下载量实时可见。",
            href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            linkLabel: "打开 ClawHub",
          },
          {
            title: "GitHub + Docker",
            description: "面向人的安装路径与 Agent 技能并行。",
            href: "https://github.com/XuXuClassMate/trading-assistant",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "作为可安装 OpenClaw / ClawHub 技能发布",
          "提供非 Agent 场景的 CLI 与 Docker 路径",
          "以风险优先默认值替代纯信号演示",
        ],
        metrics: [
          {
            label: "ClawHub 安装",
            value: "900+",
            metric: "clawhub:trading-assistant-core",
          },
          { label: "使用面", value: "技能 · Docker · CLI" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/trading-assistant",
          },
          {
            label: "ClawHub",
            href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          },
        ],
        meta: {
          title: "Trading Assistant Core 案例 | 旭旭同学",
          description:
            "旭旭同学如何把 Trading Assistant Core 打包为 OpenClaw / ClawHub 技能，并支持 Docker 与 CLI 安装。",
          keywords: `${sharedKeywords}, 交易助手案例`,
        },
      },
      {
        slug: "globalpulse",
        title: "GlobalPulse",
        subtitle: "案例详解",
        description: "基于 Cloudflare Workers 的定时市场情报简报与多通道推送。",
        cover: "/images/cover-globalpulse.jpg",
        coverAlt: "GlobalPulse",
        status: "live",
        overview:
          "自托管 Cloudflare Workers 市场情报产品——Admin UI、KV 配置、Cron 调度、市场日历，以及飞书 / 微信 / Telegram 推送。",
        problem:
          "团队需要稳定的财经与热点简报，而不是一次性脚本——还要日历、模板和可自控的推送通道。",
        solution:
          "打造自托管 Cloudflare Workers 应用：Admin UI、KV 配置、Cron 调度、市场日历，以及飞书 / 微信 / Telegram 提供商。",
        architecture: [
          {
            title: "运行时链路",
            layers: [
              "Admin UI",
              "KV 配置",
              "Cron 调度器",
              "市场日历 / 模板",
              "通道提供商",
              "飞书 / 微信 / Telegram",
            ],
          },
        ],
        features: [
          "密码保护的 Admin UI",
          "时区感知的市场日历",
          "Cron 驱动的定时简报",
          "多通道推送（飞书 / 微信 / Telegram）",
          "发送前预览",
          "自托管 Workers + KV 控制面",
        ],
        contribution: [
          "从 Admin UI 到多通道提供商，主导产品架构。",
          "实现 Workers 运行时、KV 配置与 Cron 投递流程。",
          "交付并运维 pulse.xuxuclassmate.com 在线实例。",
        ],
        techStack: [
          "Cloudflare Workers",
          "KV",
          "Cron Triggers",
          "TypeScript",
          "Feishu / WeChat / Telegram APIs",
        ],
        deployment: {
          summary:
            "在 Cloudflare Workers 上部署并绑定 KV，然后在 Admin UI 中配置日历与通道。",
          steps: [
            "克隆 InnoNestX 下的 GlobalPulse 仓库。",
            "配置 Workers + KV，使用 Wrangler 部署。",
            "打开 Admin UI，设置调度与提供商，启用 Cron 投递。",
            "参考 pulse.xuxuclassmate.com 在线实例作为部署样例。",
          ],
          channels: [
            { label: "在线体验", href: "https://pulse.xuxuclassmate.com/" },
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
          "自托管 Workers + KV，而不是纯 SaaS 简报——日历与凭据留在团队手里。",
          "带密码的 Admin UI，而不是纯 Cron 脚本——发送前可预览。",
          "飞书 / 微信 / Telegram 多通道，而不是只做邮件。",
        ],
        artifacts: [
          {
            title: "在线产品",
            description: "定时市场情报简报的运行实例。",
            href: "https://pulse.xuxuclassmate.com/",
            linkLabel: "打开 Pulse",
          },
          {
            title: "源码仓库",
            description: "Workers 应用、提供商与 Admin 流程开源可查。",
            href: "https://github.com/InnoNestX/GlobalPulse",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "带密码保护的 Admin UI，可配置调度与推送参数",
          "按时区与市场日历触发的 Cron 投递",
          "发送前可预览多通道消息",
        ],
        metrics: [
          { label: "运行时", value: "Cloudflare Workers" },
          { label: "通道", value: "飞书 · 微信 · Telegram" },
        ],
        links: [
          { label: "GitHub", href: "https://github.com/InnoNestX/GlobalPulse" },
          { label: "在线体验", href: "https://pulse.xuxuclassmate.com/" },
          { label: "InnoNestX", href: "https://github.com/InnoNestX" },
        ],
        meta: {
          title: "GlobalPulse 案例 | 旭旭同学",
          description:
            "旭旭同学如何打造 GlobalPulse — 运行在 Cloudflare Workers 上的定时财经与全球热点简报。",
          keywords: `${sharedKeywords}, GlobalPulse, 财经简报`,
        },
      },
      {
        slug: "docker-hub-api-gateway",
        title: "Docker Hub API Gateway",
        subtitle: "案例详解",
        description: "统一的 Docker Hub REST 网关：统计、卡片与交互文档。",
        cover: "/images/cover-docker-gateway.jpg",
        coverAlt: "Docker Hub API Gateway",
        status: "live",
        overview:
          "统一的 Docker Hub REST API 网关——用户统计、SVG 卡片、仓库/标签查询、OpenAPI 文档，以及中英双语交互测试。",
        problem:
          "Docker Hub 数据分散——拉取总量、仓库详情与徽章需要一个可文档化、可调用的统一 API。",
        solution:
          "用 Hono 交付网关：用户统计、SVG 卡片、仓库/标签 API、OpenAPI 文档、双语界面与在线调试。",
        architecture: [
          {
            title: "API 面",
            layers: [
              "客户端 / README 嵌入",
              "Gateway (Hono)",
              "Docker Hub 上游",
              "Stats · SVG · OpenAPI 响应",
            ],
          },
        ],
        features: [
          "用户与仓库统计 API",
          "可嵌入的 Docker 统计 SVG 卡片",
          "仓库 / 标签查询端点",
          "交互式 OpenAPI 文档",
          "中英双语调试 UI",
          "本站实时指标自用同一网关",
        ],
        contribution: [
          "设计统一的 Hub 数据 REST + SVG 卡片契约。",
          "实现 Hono 网关、OpenAPI 文档与双语调试台。",
          "将生产用法接入本站实时指标流水线。",
        ],
        techStack: ["Hono", "TypeScript", "Vercel", "OpenAPI", "Docker Hub API"],
        deployment: {
          summary: "部署在 Vercel 上，调用公开 REST / SVG 端点。",
          steps: [
            "打开在线网关，使用交互文档与调试功能。",
            "调用 /api/user/stats，或在 README 中嵌入 SVG docker-stats 卡片。",
            "克隆 InnoNestX 仓库以自托管或扩展网关。",
          ],
          channels: [
            {
              label: "在线 API",
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
          "统一 REST + SVG 卡片，而不是爬 Hub 页面——适合 README 嵌入。",
          "OpenAPI + 双语调试台，调用方接生产前可先验证。",
          "自用 /api/stats——本站首页指标也走同一网关。",
        ],
        artifacts: [
          {
            title: "在线 API 与文档",
            description: "用户统计、仓库详情与交互式 OpenAPI。",
            href: "https://docker-hub-pull-counter.vercel.app",
            linkLabel: "打开网关",
          },
          {
            title: "可嵌入统计卡片",
            description: "README 与本站使用的 SVG 卡片。",
            href: "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
            linkLabel: "查看 SVG",
          },
        ],
        outcomes: [
          "公开 REST 接口查询用户与仓库统计",
          "可嵌入 README 的 Docker 统计 SVG 卡片",
          "支持实时调试的 OpenAPI 文档",
        ],
        metrics: [
          { label: "技术栈", value: "Hono · Vercel" },
          { label: "文档", value: "OpenAPI · 中英" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/InnoNestX/docker-hub-pull-counter",
          },
          {
            label: "在线 API",
            href: "https://docker-hub-pull-counter.vercel.app",
          },
        ],
        meta: {
          title: "Docker Hub API Gateway 案例 | 旭旭同学",
          description:
            "旭旭同学如何交付统一的 Docker Hub REST API 网关，含交互文档与 SVG 统计卡片。",
          keywords: `${sharedKeywords}, Docker Hub API 网关`,
        },
      },
      {
        slug: "docker-suite",
        title: "测试库 Docker 套件",
        subtitle: "案例详解",
        description: "让数据库环境几分钟就绪，而不是几天——开发、测试、运维、DBA 都能用。",
        cover: "/images/cover-docker.jpg",
        coverAlt: "测试库 Docker 套件",
        status: "live",
        overview:
          "即用数据库镜像——达梦、瀚高、人大金仓、TiDB 等，统一标签、文档与 Docker Hub 实时拉取证明；开发、测试、运维、DBA 都能直接拉起。",
        problem:
          "国产与开源数据库难拉起——缺少文档化安装会卡住开发联调、测试自动化、运维交付与新人上手。",
        solution:
          "在 Docker Hub 发布达梦、瀚高、人大金仓、TiDB 等即用镜像，统一标签与文档，服务各类技术角色。",
        architecture: [
          {
            title: "环境路径",
            layers: [
              "Docker Hub 镜像",
              "Pull & Run",
              "本地 / CI 环境",
              "开发 / 测试 / 运维工作流",
              "证据（实时拉取）",
            ],
          },
        ],
        features: [
          "达梦、瀚高、人大金仓、TiDB 等即用镜像",
          "可预期标签保障 CI 稳定",
          "一镜像一服务，失败更好定位",
          "面向 pull-and-run 工作流的文档",
          "本站展示实时拉取指标",
        ],
        contribution: [
          "识别国产数据库缺少文档化安装带来的跨角色痛点。",
          "构建、打标签并发布可复用 Docker 镜像套件。",
          "维护文档与实时拉取证据，推动团队采用。",
        ],
        techStack: ["Docker", "Docker Hub", "Dameng", "Highgo", "Kingbase", "TiDB"],
        deployment: {
          summary: "从 Docker Hub 拉取镜像，在本地或 CI 环境中启动。",
          steps: [
            "浏览 xuxuclassmate Docker Hub 命名空间。",
            "拉取所需数据库镜像（如达梦 / 瀚高）。",
            "按文档配置端口与环境变量，供本地或 CI 工作流使用。",
            "可选：通过 Docker Hub API Gateway 验证实时拉取总量。",
          ],
          channels: [
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/u/xuxuclassmate",
            },
            {
              label: "实时统计",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            },
          ],
        },
        proof: {
          demo: "https://hub.docker.com/u/xuxuclassmate",
          docker: "https://hub.docker.com/u/xuxuclassmate",
        },
        tradeoffs: [
          "标签保持无聊可预期——CI 套件要的是稳定，不是花哨。",
          "一镜像一服务，pull-and-run 失败更好定位。",
          "早期发布达梦 / 瀚高——拉取量验证了数据库痛点真实存在。",
        ],
        artifacts: [
          {
            title: "Docker Hub 命名空间",
            description: "QA 向镜像合集，总拉取在首页实时展示。",
            href: "https://hub.docker.com/u/xuxuclassmate",
            linkLabel: "浏览镜像",
          },
          {
            title: "实时用户统计 API",
            description: "经 Docker Hub API Gateway 聚合的拉取量。",
            href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            linkLabel: "JSON 统计",
          },
        ],
        outcomes: [
          "达梦与瀚高镜像被大量技术团队使用",
          "CI 可复用的 pull-and-run 流程",
          "成为 AI 工具演示下的可复用底座",
        ],
        metrics: [
          {
            label: "达梦拉取",
            value: "30k+",
            metric: "docker:dameng",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=dameng",
          },
          {
            label: "瀚高拉取",
            value: "17k+",
            metric: "docker:highgo",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=highgo",
          },
          {
            label: "人大金仓拉取",
            value: "1.6k+",
            metric: "docker:kingbase",
            href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=kingbase",
          },
          {
            label: "TiDB 拉取",
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
          title: "测试库 Docker 套件案例 | 旭旭同学",
          description:
            "旭旭同学如何交付达梦、瀚高等 Docker 数据库镜像，供开发、测试、运维、DBA 复用。",
          keywords: `${sharedKeywords}, Docker 测试库案例`,
        },
      },
      {
        slug: "automation-framework",
        title: "Java 接口自动化框架",
        subtitle: "案例详解",
        description:
          "基于 Java、JUnit 与 RestAssured 的可扩展接口自动化框架。",
        cover: "/images/cover-automation.jpg",
        coverAlt: "Java 接口自动化框架",
        overview:
          "基于 Java、JUnit 与 RestAssured 的可扩展接口自动化框架——面向多环境、鉴权模式与 CI 流水线复用。",
        techStack: ["Java", "JUnit", "RestAssured", "Maven", "Allure"],
        architecture: [
          {
            title: "测试链路",
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
          "API 请求抽象",
          "环境配置",
          "测试数据管理",
          "鉴权处理",
          "断言工具",
          "Allure 报告",
          "CI/CD 集成",
        ],
        contribution: [
          "设计可维护的 API Object / Service 分层抽象。",
          "统一环境配置、鉴权辅助与断言工具。",
          "接入 Allure 报告与适合 CI 的 Maven 执行方式。",
        ],
        results: [
          "可复用的 Java 接口套件结构已公开在 GitHub",
          "模式与 Python / Locust 练习仓并列复用",
          "成为 AI 测试工具下的手艺底座",
        ],
        proof: {
          github: "https://github.com/XuXuClassMate/My_Test_JAProject",
          readme: "https://github.com/XuXuClassMate/My_Test_JAProject#readme",
          demo: "https://github.com/XuXuClassMate/My_Test_JAProject",
        },
        status: "live",
        deployment: {
          summary: "克隆 Java 实践套件，在本地或 CI 中运行基于 Maven 的接口测试。",
          steps: [
            "克隆 https://github.com/XuXuClassMate/My_Test_JAProject",
            "为目标 API 配置环境与鉴权参数。",
            "运行 Maven 测试并查看 Allure 报告。",
            "可选：与 Python / Locust 练习仓对比模式差异。",
          ],
          channels: [
            {
              label: "GitHub",
              href: "https://github.com/XuXuClassMate/My_Test_JAProject",
            },
            {
              label: "Python 练习仓",
              href: "https://github.com/XuXuClassMate/My_Test_PyProject",
            },
          ],
        },
        problem: "一次性脚本经不起团队交接——接口套件需要稳定结构。",
        solution:
          "打造 Java + RestAssured 框架，分层清晰，带报告与 CI 钩子。",
        tradeoffs: [
          "分层 API Object 优于扁平脚本——首条用例更慢，第二年改动更快。",
          "Allure + Maven 优于临时日志——报告经得起交接。",
          "公开练习仓，模式可直接复制，不必依赖私有 Wiki。",
        ],
        artifacts: [
          {
            title: "Java 实践套件",
            description: "可复用的接口自动化模式。",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
            linkLabel: "GitHub",
          },
          {
            title: "Python + Locust 示例",
            description: "性能、接口、Selenium、Appium 实践。",
            href: "https://github.com/XuXuClassMate/My_Test_PyProject",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "可复用的 API 套件结构",
          "Allure 就绪的报告路径",
          "GitHub 上的开放练习项目",
        ],
        metrics: [
          { label: "技术栈", value: "Java · JUnit · RestAssured" },
          { label: "焦点", value: "接口自动化" },
        ],
        links: [
          {
            label: "GitHub 仓库",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
        ],
        meta: {
          title: "Java 接口自动化框架 | 旭旭同学",
          description:
            "基于 Java、JUnit、RestAssured、Maven 与 Allure 的可扩展接口自动化框架。",
          keywords: `${sharedKeywords}, Java 接口自动化, RestAssured, JUnit`,
        },
      },
      {
        slug: "fullstack-e2e",
        title: "全链路 E2E 测试框架",
        subtitle: "旗舰 Showcase",
        description:
          "覆盖前端、API、数据库、Redis 与消息队列校验的全链路自动化框架。",
        cover: "/images/cover-automation.jpg",
        coverAlt: "全链路 E2E 测试框架",
        overview:
          "覆盖前端、API、数据库、Redis 与消息队列校验的全链路自动化框架——超越单纯 Web UI Automation 的 End-to-End Testing。",
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
            title: "系统链路",
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
            title: "测试链路",
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
          "跨层断言（UI + API + 数据）",
          "缓存与消息侧校验",
          "环境夹具与隔离",
          "并行执行与丰富 Trace",
          "容器化运行与 CI 钩子",
        ],
        contribution: [
          "定义从 UI 到 MQ 的全链路架构。",
          "以 Playwright 为主干，串联 API 与数据校验。",
          "准备公开的 TypeScript + Playwright 仓库（即将上线）。",
        ],
        results: [
          "本站已发布案例与架构说明",
          "定位为 Playwright / E2E 核心 Showcase",
          "GitHub 仓库状态：即将上线",
        ],
        status: "upcoming",
        deployment: {
          summary:
            "仓库即将上线——架构与案例先发布；公开仓库就绪后将补充克隆/运行步骤。",
          steps: [
            "在本案例页阅读系统链路与测试链路。",
            "以架构为蓝图，规划 Playwright + API + 数据校验方案。",
            "关注即将发布的 TypeScript + Playwright 公开仓库。",
          ],
          channels: [
            {
              label: "Playwright Lab",
              href: "/zh/playwright.html",
            },
          ],
        },
        problem: "只测 UI 会漏掉 API、缓存与消息路径上的回归。",
        solution:
          "校验全链路：Playwright → API → 后端 → MySQL → Redis → MQ。",
        tradeoffs: [
          "全链路覆盖优于浅层 UI 检查——少一些「假绿」。",
          "以 TypeScript + Playwright 作为主执行脊柱。",
          "案例页先上线，仓库就绪前不放假 GitHub 链接。",
        ],
        outcomes: [
          "面向招聘审阅的清晰全链路 E2E 叙事",
          "架构已就绪，等待开源仓库公开",
        ],
        metrics: [
          { label: "范围", value: "UI · API · DB · Redis · MQ" },
          { label: "状态", value: "即将上线" },
        ],
        links: [],
        meta: {
          title: "全链路 E2E 测试框架 | 旭旭同学",
          description:
            "覆盖前端、API、MySQL、Redis 与消息队列的 Playwright 全链路自动化。",
          keywords: `${sharedKeywords}, 全链路 E2E, Playwright E2E, End-to-End Testing`,
        },
      },
    ],
    footerDesc: "能安装的 AI 工具，信得过的质量",
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
    subtitle: "生活与爱好",
    title: "生活历程",
    description: "分享编程之外的生活点滴和兴趣爱好",
    galleryTitle: "生活瞬间",
    gallery: [
      {
        title: "旅行视频",
        description: "用镜头记录大自然的美",
        href: "https://www.douyin.com/user/MS4wLjABAAAAXN8bo7p6CIUTCXg20Hthe1Jf3p44NRF9Xue4ms2NurE",
        image: "/images/douyin-cover.jpg",
        imageAlt: "旅行视频封面 - 溪流自然风光",
        ctaHref:
          "https://www.douyin.com/user/MS4wLjABAAAAXN8bo7p6CIUTCXg20Hthe1Jf3p44NRF9Xue4ms2NurE",
        ctaLabel: "在抖音观看",
      },
      {
        title: "轻听时光",
        description: "分享温暖治愈的音乐集",
        href: "https://music.163.com/#/playlist?id=368129876",
        image: "/images/music.webp",
        imageAlt: "音乐时光",
      },
      {
        title: "电影时光",
        description: "沉浸在宫崎骏的动画世界",
        href: "https://www.iqiyi.com/playlist1921084202.html?vfrm=psbdl",
        image: "/images/movie.webp",
        imageAlt: "电影时光 - 宫崎骏动画",
      },
    ],
    hobbiesTitle: "我的爱好",
    hobbies: [
      {
        title: "阅读",
        description: "技术书与文学并读，保持对系统与故事的好奇。",
        icon: "读",
        items: ["技术书籍", "科幻小说", "历史"],
      },
      {
        title: "游戏",
        description: "策略与 RPG，保持对系统与节奏的敏感。",
        icon: "玩",
        items: ["策略", "RPG", "独立游戏"],
      },
      {
        title: "音乐",
        description: "民谣、钢琴小提琴曲，以及路上会跟着哼的流行。",
        icon: "乐",
        items: ["民谣", "钢琴和小提琴曲", "流行音乐"],
      },
      {
        title: "运动",
        description: "规律运动，把屏幕外的节奏也练出来。",
        icon: "行",
        items: ["徒步", "爬山", "羽毛球"],
      },
    ],
    blogTitle: "生活博客",
    blog: [
      {
        title: "年度计划",
        description: "新的一年，新的开始，分享我的年度计划和目标",
        image: "/images/plan.webp",
        imageAlt: "年度计划配图",
        href: "https://fgg6gzb6uk.feishu.cn/base/H07ebpIM1aBTuGsYtaacHK9NnBb?table=tblwIKtfaCQWbaKW",
        linkLabel: "阅读全文",
      },
      {
        title: "推进情况",
        description: "记录和追踪年度计划的执行进展，分享成长历程",
        image: "/images/summary.webp",
        imageAlt: "推进情况配图",
        href: "https://fgg6gzb6uk.feishu.cn/base/H07ebpIM1aBTuGsYtaacHK9NnBb?table=blkcP1vbErcMDacd",
        linkLabel: "阅读全文",
      },
    ],
    footerDesc: "记录生活，分享快乐",
    social: [
      {
        href: "https://www.douyin.com/user/MS4wLjABAAAAXN8bo7p6CIUTCXg20Hthe1Jf3p44NRF9Xue4ms2NurE",
        label: "抖音",
        icon: "tiktok",
      },
      {
        href: "https://www.instagram.com/xuxuclassmate",
        label: "Instagram",
        icon: "instagram",
      },
      {
        href: "#",
        label: "微信",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  notes: {
    subtitle: "工程笔记",
    title: "工程笔记",
    description:
      "面向 QA Engineer / SDET 的实战笔记与交付手记——AI Testing、Playwright、接口测试、性能测试、Docker 等独立 SEO 落地页。",
    backLabel: "全部工程笔记",
    tocLabel: "本页目录",
    relatedLabel: "相关链接",
    filterAll: "全部",
    categoriesLabel: "按主题浏览",
    items: getNotes("zh"),
    footerDesc: "QA Engineer · SDET · AI Testing — 写成工程笔记",
    social: [
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
        label: "微信",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  openSource: {
    subtitle: "开源",
    title: "开源",
    description:
      "InnoNestX 是旭旭同学个人品牌下的开源组织——可安装的 AI 工具、QA 工具与基础设施，欢迎 fork 与共建。",
    orgLabel: "组织",
    orgName: "InnoNestX",
    brandTitle: "个人品牌与开源组织的关系",
    brandLead:
      "旭旭同学是个人品牌；InnoNestX 是其下的 GitHub 开源组织，用来交付可安装工具。",
    brandConnector: "下设",
    brandPersonalLabel: "个人品牌",
    brandPersonalItems: ["QA / SDET", "AI Testing", "工程笔记"],
    brandOrgLabel: "开源组织",
    brandOrgItems: ["Open Source", "AI Tools", "QA Tools", "Infrastructure"],
    aboutTitle: "InnoNestX 是什么",
    about: [
      "InnoNestX 承载别人能安装、能跑、能 fork 的开源工具与产品系统——不是本站另一套公司叙事。",
      "标准很简单：没有安装路径的演示，不放进来。",
      "如果你也关注质量工程、Agent、Cloudflare Workers 或 Docker 工具链，欢迎一起学习与贡献。",
    ],
    categoriesTitle: "开源方向",
    categories: getOrgCategories("zh"),
    emptyCategory: "这个方向暂无公开仓库——欢迎提议。",
    joinTitle: "加入与联系",
    joinIntro:
      "更想找愿意边做边学的协作者——提 PR、补文档，或发邮件聊新想法。",
    joinItems: [
      "选一个感兴趣的仓库，提 Issue 或 PR",
      "补文档、改双语体验，或提一个你想做的功能",
      "想一起开新项目，直接发邮件即可",
    ],
    orgCtaLabel: "GitHub 组织主页",
    orgCtaHref: "https://github.com/InnoNestX",
    playgroundCtaLabel: "去体验台试用",
    footerDesc: "InnoNestX —— XuXuClassMate 的开源侧",
    social: [
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
        label: "微信",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  playground: {
    subtitle: "体验台",
    title: "体验台",
    description:
      "在本站试用 XuXuClassMate 品牌下的开源工具——站内演示、在线产品与清晰的安装路径。",
    experiencesTitle: "可以怎么试",
    modesTitle: "体验类型说明",
    modes: [
      {
        id: "interactive",
        label: "站内体验",
        description: "在本站运行——演示或公开 API，无需安装。",
      },
      {
        id: "live",
        label: "在线产品",
        description: "打开已部署的产品，在新标签页直接使用。",
      },
      {
        id: "install",
        label: "本机安装",
        description: "在本机拉取或克隆——不是浏览器内运行时。",
      },
    ],
    githubLabel: "GitHub",
    tryTitle: "试用 Docker Hub API",
    tryIntro:
      "输入 Docker Hub 用户名，通过本站已在用的公开网关查询拉取统计。",
    tryUsernameLabel: "Docker Hub 用户名",
    tryButton: "查询统计",
    tryLoading: "查询中…",
    tryError: "无法加载该用户名的统计，请检查后重试。",
    tryEmpty: "查询后可查看总拉取量与仓库数。",
    tryResultPulls: "总拉取量",
    tryResultRepos: "仓库数",
    tryDefaultUsername: "xuxuclassmate",
    openSourceLabel: "开源页面",
    footerDesc: "体验台——先试用，再 fork",
    social: [
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
        label: "微信",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  now: {
    subtitle: "NOW",
    title: "Now",
    description:
      "作为专注 AI Testing 的 QA Engineer / SDET，我每月更新一次：正在做、正在学、正在探索。",
    updatedLabel: "最近更新",
    updated: NOW_UPDATED.zh,
    updatedIso: NOW_UPDATED.iso,
    cadence: "大约每月更新一次。",
    sections: getNowSections("zh"),
    footerDesc: "我正在做的事——每月更新",
    social: [
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
        label: "微信",
        icon: "wechat",
        wechat: true,
      },
    ],
  },
  notFound: {
    title: "页面走丢了",
    message: "这个地址好像去喝咖啡了。我们带你回主页。",
    homeLabel: "返回首页",
    footerDesc: "用质量思维建造 AI 工具",
    social: [
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
    ],
  },
};
