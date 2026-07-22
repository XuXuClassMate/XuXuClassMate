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
  languageSwitch: "English",
  contactLabel: "联系我：",
  contactHint: "欢迎合作——先选方向，再发邮件。",
  contactOffers: [
    "AI 测试工具 / ClawHub 技能定制",
    "测试团队管理顾问（初创 → 规模化）",
    "数据库 / Docker 测试环境落地",
    "加入 InnoNestX 开源项目——一起学习、一起做",
  ],
  copyEmail: "复制邮箱",
  copiedEmail: "已复制",
  backToTop: "回到顶部",
  themeToggle: "主题",
  themeToLight: "浅色",
  themeToDark: "深色",
  copyright: "© 2020-2026 旭旭同学",
  wechatAlt: "微信二维码",
  closeModal: "关闭",
  menuLabel: "菜单",
  skipToContent: "跳到主要内容",
  nav: {
    about: "关于",
    experience: "经历",
    projects: "项目",
    blog: "工程笔记",
    aiTesting: "AI 测试",
    github: "GitHub",
    life: "生活",
    contact: "联系",
    learn: "经历",
    work: "项目",
    notes: "工程笔记",
    innonestx: "开源",
    openSource: "开源",
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
      title: "工程笔记 | QA Engineer & SDET 技术博客 | 旭旭同学",
      description:
        "Engineering Notes：QA Engineering、AI Testing、Playwright、接口测试、性能测试、Docker、Cloudflare、OpenClaw、DevOps。",
      keywords: `${sharedKeywords}, 工程笔记, 技术博客`,
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
      title: "工程笔记 | QA Engineer & SDET 技术博客 | 旭旭同学",
      description:
        "可检索的工程笔记：QA Engineering、AI Testing、Playwright、接口测试、性能测试、Docker、Cloudflare、OpenClaw、DevOps。",
      keywords: `${sharedKeywords}, 工程笔记, 技术博客, Docker Testing`,
    },
    "open-source": {
      title: "开源 | InnoNestX · AI Tools · QA Tools | 旭旭同学",
      description:
        "XuXuClassMate 个人品牌下的开源：InnoNestX 承载可安装的 AI 工具、QA 工具、开发者工具、基础设施与自动化。",
      keywords: `${sharedKeywords}, 开源, InnoNestX, AI Tools, QA Tools, Test Infrastructure`,
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
    highlightsSubtitle: "公开实时指标 · 自动更新",
    highlightsProof: "能验证，才算展示。",
    highlights: [
      {
        value: "54k+",
        label: "Docker 拉取",
        metric: "docker:total-pulls",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub →",
      },
      {
        value: "1.6k+",
        label: "ClawHub 下载",
        metric: "clawhub:total-downloads",
        href: "https://clawhub.ai/xuxuclassmate",
        linkLabel: "查看 ClawHub →",
      },
      {
        value: "500+",
        label: "API Gateway 请求",
        metric: "api:gateway-calls",
        href: "https://docker-hub-pull-counter.vercel.app",
        linkLabel: "查看 API Gateway →",
      },
      {
        value: "12",
        label: "Docker 镜像",
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
        title: "AI with Human Review",
        description:
          "多模态生成只有在测试 / 开发 / 产品判断仍在环里时才有用。",
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
        description: "面向 QA 团队的可复用数据库与测试环境镜像。",
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
        description: "可被搜索的 QA / SDET 技术文章 — Playwright、AI Testing、Docker 等",
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
          "开源工具：把 PRD、截图等多模态输入变成 Excel / Markdown / XMind，并带三角色评审闭环。",
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
          "旗舰产品：多模态需求进入 → 可评审、可导出的测试用例产出——支持 Docker、npm 与 ClawHub 安装。",
        cover: "/images/cover-testcase.jpg",
        coverAlt: "AI 测试用例生成器",
        flagship: true,
        status: "live",
        overview:
          "旗舰多模态 AI 产品：将 PDF、Word、图片与视频转化为可评审、可导出的测试用例——含人工评审闭环，并支持 Docker、npm 与 ClawHub 安装。",
        problem:
          "QA 团队要把 PDF、Word、截图甚至短视频整理成结构化用例，成本很高。表格复制粘贴太慢；没有评审闭环的 LLM 草稿只会增加噪音。团队需要一条能吃进真实需求产物、并交付人类愿意接受的用例流水线。",
        solution:
          "我做成了可安装的多模态生成器：接入 PDF / Word / 图片 / 视频，经 Multimodal AI 生成结构化场景与用例，再走测试 / 开发 / 产品三角色人工评审，最后导出并对接自动化。同一产品以 Docker Web UI、npm 包与 OpenClaw / ClawHub 技能分发——人和 Agent 共用一条交付路径。",
        pipeline: {
          inputs: ["PDF", "Word", "Image", "Video"],
          stages: [
            "Multimodal AI",
            "Structured Test Cases",
            "Human Review",
            "Automation / Integration",
          ],
        },
        architecture: [
          {
            title: "产品流水线",
            layers: [
              "多模态输入（PDF · Word · Image · Video）",
              "Multimodal AI 生成",
              "结构化测试用例与场景",
              "人工评审（测试 · 开发 · 产品）",
              "导出 + 自动化 / 集成",
            ],
          },
          {
            title: "分发路径",
            layers: [
              "Docker Web UI（本地上传）",
              "npm 包",
              "OpenClaw / ClawHub 技能",
              "CI / 笔记本运行",
            ],
          },
        ],
        features: [
          "多模态接入：PDF、Word、TXT、图片与视频",
          "结构化场景、用例、边界与反向覆盖",
          "三角色评审闭环：测试经理 · 开发经理 · 产品经理",
          "导出 Excel、Markdown、XMind",
          "中英文生成",
          "安装路径：Docker、npm、ClawHub / OpenClaw",
        ],
        contribution: [
          "主导产品方向：可安装的质量工具，而不是一次性演示笔记本。",
          "设计「多模态 → 结构化用例 → 人工评审 → 导出」流水线。",
          "完成 Docker Web UI、npm 与 ClawHub 技能的打包分发。",
          "接入评审阈值与 QA 日常已在用的导出格式。",
        ],
        techStack: [
          "TypeScript",
          "Multimodal LLMs",
          "Docker",
          "npm",
          "OpenClaw",
          "ClawHub",
          "Excel / Markdown / XMind 导出",
        ],
        metrics: [
          {
            label: "ClawHub 安装",
            value: "700+",
            metric: "clawhub:ai-testcase-generator",
          },
          { label: "输入形态", value: "PDF · Word · Image · Video" },
          { label: "分发形态", value: "Docker · npm · 技能" },
          { label: "导出格式", value: "Excel · Markdown · XMind" },
        ],
        deployment: {
          summary: "一个产品，三条安装面——按团队工作方式选择路径。",
          steps: [
            "Docker：拉取 xuxuclassmate/testcase-generator，配置 AI Provider Key，在 3456 端口运行，打开 Web UI 上传需求。",
            "npm：安装 @classmatexuxu/testcase-generator，用于 CLI / 库集成。",
            "ClawHub / OpenClaw：安装 AI Test Case Generator 技能，用于 Agent 工作流。",
            "CI：复用同一 Docker 镜像，让笔记本与流水线保持一致。",
          ],
          channels: [
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
              href: "https://github.com/XuXuClassMate/testcase-generator",
            },
          ],
        },
        tryItNow: {
          title: "立即体验",
          description:
            "先走交互 Demo（示例 PRD → 结构化用例 → 评审角色），再用 Docker 做真实多模态上传。",
          note:
            "浏览器 Demo 使用精选示例输出——不是实时 LLM。本机上传 PDF / Word / 图片 / 视频请用 Docker 镜像。",
          primary: {
            label: "打开交互 Demo",
            href: "/zh/demo/ai-testcase-generator.html",
          },
          secondary: [
            {
              label: "Docker Hub",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            },
            {
              label: "GitHub",
              href: "https://github.com/XuXuClassMate/testcase-generator",
            },
            {
              label: "ClawHub 技能",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
          ],
          command:
            "docker pull xuxuclassmate/testcase-generator:latest\n# 在 .env 中配置 AI Provider Key，然后：\ndocker run -d -p 3456:3456 --env-file .env xuxuclassmate/testcase-generator:latest\n# 打开 http://localhost:3456 — 上传需求并生成用例",
        },
        proof: {
          github: "https://github.com/XuXuClassMate/testcase-generator",
          docker: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
          demo: "/zh/demo/ai-testcase-generator.html",
          readme: "https://github.com/XuXuClassMate/testcase-generator",
        },
        tradeoffs: [
          "用三角色评审代替裸 LLM 倾倒——草稿更安静，QA 负责人更好接受。",
          "Docker + npm + ClawHub 一起交付，让 Agent 与人共用一个产品，而不是三套演示。",
          "接受首答稍慢，换取团队已在用的 Excel / Markdown / XMind 可导出产物。",
        ],
        artifacts: [
          {
            title: "ClawHub 技能页",
            description: "Agent 真实安装路径——下载量在首页实时刷新。",
            href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            linkLabel: "打开 ClawHub",
          },
          {
            title: "Docker 镜像",
            description: "本地 Web UI：上传 PDF / Word / 图片 / 视频并生成用例。",
            href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            linkLabel: "Docker Hub",
          },
          {
            title: "源码仓库",
            description: "多模态输入与评审闭环的实现开源可查。",
            href: "https://github.com/XuXuClassMate/testcase-generator",
            linkLabel: "GitHub",
          },
        ],
        outcomes: [
          "本站旗舰可安装 AI 测试产品",
          "Docker Hub 与 npm 支持本地上传生成",
          "ClawHub 技能带实时安装数据",
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
          {
            label: "ClawHub",
            href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          },
          {
            label: "npm",
            href: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
          },
        ],
        meta: {
          title: "AI 测试用例生成器 — 旗舰案例 | 旭旭同学",
          description:
            "旗舰多模态 AI 用例生成器：PDF/Word/图片/视频 → 结构化用例 → 人工评审 → Docker、npm 与 ClawHub 安装。",
          keywords: `${sharedKeywords}, AI 测试用例生成器, 多模态测试, 旗舰案例, ClawHub`,
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
        description: "让 QA 环境几分钟就绪，而不是几天。",
        cover: "/images/cover-docker.jpg",
        coverAlt: "测试库 Docker 套件",
        status: "live",
        overview:
          "面向 QA 的即用数据库镜像——达梦、瀚高、人大金仓、TiDB 等，统一标签、文档与 Docker Hub 实时拉取证明。",
        problem:
          "国产与开源数据库对 QA 来说难拉起——缺少文档化安装会卡住自动化与新人上手。",
        solution:
          "在 Docker Hub 发布达梦、瀚高、人大金仓、TiDB 等即用镜像，统一标签与文档，服务测试团队。",
        architecture: [
          {
            title: "QA 环境路径",
            layers: [
              "Docker Hub 镜像",
              "Pull & Run",
              "本地 / CI 环境",
              "自动化套件",
              "证据（实时拉取）",
            ],
          },
        ],
        features: [
          "达梦、瀚高、人大金仓、TiDB 等 QA 镜像",
          "可预期标签保障 CI 稳定",
          "一镜像一服务，失败更好定位",
          "面向 pull-and-run 工作流的文档",
          "本站展示实时拉取指标",
        ],
        contribution: [
          "识别国产数据库缺少文档化安装带来的 QA 痛点。",
          "构建、打标签并发布可复用 Docker 镜像套件。",
          "维护文档与实时拉取证据，推动团队采用。",
        ],
        techStack: ["Docker", "Docker Hub", "Dameng", "Highgo", "Kingbase", "TiDB"],
        deployment: {
          summary: "从 Docker Hub 拉取镜像，在本地或 CI 环境中启动。",
          steps: [
            "浏览 xuxuclassmate Docker Hub 命名空间。",
            "拉取所需数据库镜像（如达梦 / 瀚高）。",
            "按文档配置端口与环境变量，供 QA 套件使用。",
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
          "达梦与瀚高镜像被大量 QA 团队使用",
          "CI 可复用的 pull-and-run 流程",
          "成为 AI 工具演示下的可复用底座",
        ],
        metrics: [
          { label: "达梦拉取", value: "30k+", metric: "docker:dameng" },
          { label: "瀚高拉取", value: "17k+", metric: "docker:highgo" },
          { label: "人大金仓拉取", value: "1.6k+", metric: "docker:kingbase" },
          { label: "TiDB 拉取", value: "900+", metric: "docker:tidb" },
        ],
        links: [
          {
            label: "Docker Hub",
            href: "https://hub.docker.com/u/xuxuclassmate",
          },
        ],
        meta: {
          title: "测试库 Docker 套件案例 | 旭旭同学",
          description:
            "旭旭同学如何交付达梦、瀚高等 Docker 数据库镜像，服务可复用 QA 环境。",
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
      "面向 QA Engineer / SDET 的可检索技术文章——AI Testing、Playwright、接口测试、性能测试、Docker 等独立 SEO 落地页。",
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
      "InnoNestX 是 XuXuClassMate 个人品牌下的开源组织——可安装的 AI 工具、QA 工具与基础设施，欢迎 fork 与共建。",
    orgLabel: "组织",
    orgName: "InnoNestX",
    brandTitle: "个人品牌 → 开源组织",
    brandLead:
      "XuXuClassMate 是个人品牌；InnoNestX 是其下的 GitHub 开源组织，用来交付可安装工具。",
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
    joinTitle: "加入 InnoNestX",
    joinIntro:
      "更想找愿意边做边学的协作者——而不是只看演示的人。",
    joinItems: [
      "选一个感兴趣的仓库，提 Issue 或 PR",
      "补文档、改双语体验，或提一个你想做的功能",
      "想一起开新项目，用页底「联系我」即可",
    ],
    orgCtaLabel: "GitHub 组织主页",
    orgCtaHref: "https://github.com/InnoNestX",
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
