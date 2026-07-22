import type { LocaleCopy } from "./types";
import { getFeaturedProjects, getWorkProjects } from "./projects";
import { getNotes } from "./notes";

const sharedKeywords =
  "旭旭同学, xuxuclassmate, XuXuClassMate, 软件测试, 自动化测试, AI测试, 质量工程, 测试工程师, 用例生成, Playwright, 接口测试, Docker测试环境, OpenClaw, ClawHub";

export const zh: LocaleCopy = {
  brand: "旭旭同学",
  author: "旭旭同学",
  languageSwitch: "English",
  contactLabel: "联系我：",
  contactHint: "欢迎合作——先选方向，再发邮件。",
  contactOffers: [
    "AI 测试工具 / ClawHub 技能定制",
    "测试团队管理顾问（初创 → 规模化）",
    "国产库 / Docker 测试环境落地",
    "InnoNestX 开源与产品协作",
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
    life: "生活",
    learn: "学习",
    work: "工作",
    notes: "笔记",
  },
  meta: {
    home: {
      title: "旭旭同学 | 可安装的质量工程",
      description:
        "旭旭同学把质量工程做成可安装的产品——AI 测试工具、OpenClaw / ClawHub 技能，以及可复用的 Docker 环境。产品系统在 InnoNestX 交付。",
      keywords: sharedKeywords,
      ogTitle: "旭旭同学 — 可安装的质量工程",
    },
    life: {
      title: "生活点滴 | 旭旭同学",
      description:
        "旅行、音乐与键盘之外的日常 — 质量工程师、AI 测试工具作者旭旭同学的生活侧写。",
      keywords: `${sharedKeywords}, 旅行, 爱好`,
    },
    learn: {
      title: "学习路径：从测试到手 AI 测试 | 旭旭同学",
      description:
        "从测试手艺与多阶段测试管理，到 Locust 性能、Playwright 自动化、OpenClaw / ClawHub 技能，以及 InnoNestX 产品系统。",
      keywords: `${sharedKeywords}, 学习路径, 测试管理, Locust, 质量体系`,
    },
    work: {
      title: "测试项目与 AI 工具作品集 | 旭旭同学",
      description:
        "可安装的质量产品：AI 用例生成器、ClawHub 技能、Docker 测试库镜像，以及 InnoNestX 的 GlobalPulse 与 Docker Hub API Gateway。",
      keywords: `${sharedKeywords}, 测试作品集, GlobalPulse, 达梦 Docker, 瀚高 Docker, ClawHub`,
    },
    notes: {
      title: "笔记 | 旭旭同学",
      description:
        "关于国产库 Docker 测试环境、ClawHub 技能发布与可安装质量工程的实操笔记。",
      keywords: `${sharedKeywords}, 笔记, 达梦 Docker, ClawHub`,
    },
  },
  home: {
    subtitle: "可安装的质量工程",
    title: "把质量工作做成团队真能跑起来的产品",
    description:
      "我交付 AI 测试工具、OpenClaw / ClawHub 技能与可复用环境，并用 Docker、ClawHub、API 的实时数据证明它们在被使用。",
    positioning:
      "旭旭同学是个人手艺品牌；InnoNestX 承载 GlobalPulse、Docker Hub API Gateway 等产品系统。",
    valuesTitle: "我的做事方式",
    values: [
      {
        title: "能安装，才算完成",
        description:
          "跑不起来 Docker / CLI / ClawHub，就不算交付——幻灯片不算数。",
      },
      {
        title: "AI 必须带评审闭环",
        description:
          "多模态生成只有在测试/开发/产品判断仍在环里时才有用。",
      },
      {
        title: "环境要能复用",
        description:
          "容器、国产库镜像与网关，让团队在 CI 和笔记本上启动同一套栈。",
      },
    ],
    highlightsTitle: "数据一览",
    highlights: [
      {
        value: "54k+",
        label: "Docker 拉取——团队在复用的测试环境",
        metric: "docker:total-pulls",
      },
      {
        value: "1.6k+",
        label: "ClawHub 下载——Agent 真在安装的技能",
        metric: "clawhub:total-downloads",
      },
      {
        value: "500+",
        label: "API Gateway 请求——README 与工具在打实时统计",
        metric: "api:gateway-calls",
      },
      {
        value: "12",
        label: "已发布的 QA 向 Docker 镜像",
        metric: "docker:repo-count",
      },
    ],
    featuredTitle: "精选作品",
    featuredCta: "查看全部项目",
    featured: getFeaturedProjects("zh"),
    principlesTitle: "我在优化什么",
    principles: [
      {
        title: "能安装，才算完成",
        description: "跑不起来 Docker / CLI / ClawHub，就不算交付。",
      },
      {
        title: "语言只是工具",
        description:
          "选能最快交付质量的栈——框架与环境比绑定某一种语言更重要。",
      },
      {
        title: "判断力仍是主线",
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
        description: "InnoNestX 在线产品——定时市场情报简报。",
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
        title: "笔记",
        description: "国产库 Docker 与 ClawHub 技能发布实操",
        href: "/zh/notes.html",
      },
    ],
    footerDesc: "可安装的质量工程——旭旭同学 × InnoNestX",
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
    subtitle: "学习之路",
    title: "从测试手艺到 AI 工具",
    description: "研究 Agent、多模态生成，以及在生产中站得住的质量系统",
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
        title: "GlobalPulse（InnoNestX）",
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
          "在 ClawHub 打包技能，并在 InnoNestX 推进 GlobalPulse、Docker Hub API Gateway 等可运行系统。",
      },
    ],
    focusTitle: "当前学习重点",
    focusHeading: "Agent 技能、多模态 QA 与产品系统",
    focusIntro: "正在把「想法 → Agent 技能 / 产品 → 可运行系统」这条链路打磨扎实：",
    focusItems: [
      "发布并迭代 OpenClaw / ClawHub 技能",
      "多模态需求到结构化测试产物",
      "Locust 与自动化手艺支撑 AI 工具",
      "InnoNestX 产品系统（Workers / API）",
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
    subtitle: "作品集",
    title: "工具、技能与环境",
    description: "GitHub / Docker / ClawHub 上的 AI 作品，以及背后的质量基础",
    projectsTitle: "精选项目",
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
    caseSolutionTitle: "方案",
    caseTradeoffsTitle: "取舍",
    caseOutcomesTitle: "交付物",
    caseArtifactsTitle: "可检查的证据",
    caseMetricsTitle: "数据证据",
    caseLinksTitle: "链接",
    cases: [
      {
        slug: "testcase-generator",
        title: "AI 测试用例生成器",
        subtitle: "案例详解",
        description: "把多模态需求变成可评审、可导出的测试产物。",
        cover: "/images/cover-testcase.jpg",
        coverAlt: "AI 测试用例生成器",
        problem:
          "QA 团队要把 PDF、截图和零散说明整理成结构化用例，成本很高；没有评审闭环的 AI 草稿只会增加噪音。",
        solution:
          "搭建多模态流水线（PDF、Word、图片、视频），加入测试/开发/产品三角色评审，并打包为 Docker、npm 与 OpenClaw / ClawHub 技能。",
        tradeoffs: [
          "用三角色评审代替裸 LLM 倾倒——草稿更安静，QA 负责人更好接受。",
          "Docker + npm + ClawHub 一起交付，让 Agent 与人共用一个产品，而不是三套演示。",
          "接受首答稍慢，换取团队已在用的 Excel / Markdown / XMind 可导出产物。"
        ],
        artifacts: [
          {
            "title": "ClawHub 技能页",
            "description": "Agent 真实安装路径——下载量在首页实时刷新。",
            "href": "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            "linkLabel": "打开 ClawHub"
          },
          {
            "title": "Docker 镜像",
            "description": "非 Agent 场景的本地 / CI 运行路径。",
            "href": "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            "linkLabel": "Docker Hub"
          },
          {
            "title": "源码仓库",
            "description": "多模态输入与评审闭环的实现开源可查。",
            "href": "https://github.com/XuXuClassMate/testcase-generator",
            "linkLabel": "GitHub"
          }
        ],
        outcomes: [
          "在 ClawHub 以 AI Test Case Generator 发布",
          "提供 Docker Hub 与 npm 本地运行路径",
          "支持导出 Excel / Markdown / XMind",
        ],
        metrics: [
          { label: "ClawHub 安装", value: "700+", metric: "clawhub:ai-testcase-generator" },
          { label: "分发形态", value: "Docker · npm · 技能" },
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
          title: "AI 测试用例生成器案例 | 旭旭同学",
          description:
            "旭旭同学如何交付带评审闭环、Docker/npm 打包与 ClawHub 分发的多模态 AI 用例生成器。",
          keywords: `${sharedKeywords}, 用例生成器案例`,
        },
      },
      {
        slug: "trading-assistant",
        title: "Trading Assistant Core",
        subtitle: "案例详解",
        description: "可安装的 OpenClaw 技能：信号、仓位与风险检查。",
        cover: "/images/cover-trading.jpg",
        coverAlt: "Trading Assistant Core",
        problem:
          "交易工作流停留在笔记本和聊天提示词里——Agent 无法安装带风险护栏的稳定技能。",
        solution:
          "将支撑阻力、多指标信号、仓位与风险提醒打包为 ClawHub 技能，并提供 Docker 与 pip / CLI 入口。",
        tradeoffs: [
          "仓位与风险提醒优先于花哨信号——只会喊进场的技能不安全。",
          "保留 CLI / Docker，让没有 Agent 运行时的人也能跑同一套逻辑。",
          "发到 ClawHub，而不是停在笔记本工作流，让 Agent 拿到可安装包。"
        ],
        artifacts: [
          {
            "title": "ClawHub 技能",
            "description": "可安装的 OpenClaw 技能，下载量实时可见。",
            "href": "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            "linkLabel": "打开 ClawHub"
          },
          {
            "title": "GitHub + Docker",
            "description": "面向人的安装路径与 Agent 技能并行。",
            "href": "https://github.com/XuXuClassMate/trading-assistant",
            "linkLabel": "GitHub"
          }
        ],
        outcomes: [
          "作为可安装 OpenClaw / ClawHub 技能发布",
          "提供非 Agent 场景的 CLI 与 Docker 路径",
          "以风险优先默认值替代纯信号演示",
        ],
        metrics: [
          { label: "ClawHub 安装", value: "900+", metric: "clawhub:trading-assistant-core" },
          { label: "使用面", value: "技能 · Docker · CLI" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/trading-assistant",
          },
          { label: "ClawHub", href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core" },
        ],
        meta: {
          title: "Trading Assistant 案例 | 旭旭同学",
          description:
            "旭旭同学如何把 Trading Assistant Core 打包为 OpenClaw / ClawHub 技能，并支持 Docker 与 CLI。",
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
        problem:
          "团队需要稳定的财经与热点简报，而不是一次性脚本——还要日历、模板和可自控的推送通道。",
        solution:
          "打造自托管 Cloudflare Workers 应用：Admin UI、KV 配置、Cron 调度、市场日历，以及飞书 / 微信 / Telegram 提供商。",
        tradeoffs: [
          "自托管 Workers + KV，而不是纯 SaaS 简报——日历与凭据留在团队手里。",
          "带密码的 Admin UI，而不是纯 Cron 脚本——发送前可预览。",
          "飞书 / 微信 / Telegram 多通道，而不是只做邮件。"
        ],
        artifacts: [
          {
            "title": "在线产品",
            "description": "定时市场情报简报的运行实例。",
            "href": "https://pulse.xuxuclassmate.com/",
            "linkLabel": "打开 Pulse"
          },
          {
            "title": "InnoNestX 源码",
            "description": "Workers 应用、提供商与 Admin 流程开源可查。",
            "href": "https://github.com/InnoNestX/GlobalPulse",
            "linkLabel": "GitHub"
          }
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
        problem:
          "Docker Hub 数据分散——拉取总量、仓库详情与徽章需要一个可文档化、可调用的统一 API。",
        solution:
          "用 Hono 交付网关：用户统计、SVG 卡片、仓库/标签 API、OpenAPI 文档、双语界面与在线调试。",
        tradeoffs: [
          "统一 REST + SVG 卡片，而不是爬 Hub 页面——适合 README 嵌入。",
          "OpenAPI + 双语调试台，调用方接生产前可先验证。",
          "自用 /api/stats——本站首页指标也走同一网关。"
        ],
        artifacts: [
          {
            "title": "在线 API 与文档",
            "description": "用户统计、仓库详情与交互式 OpenAPI。",
            "href": "https://docker-hub-pull-counter.vercel.app",
            "linkLabel": "打开网关"
          },
          {
            "title": "可嵌入统计卡片",
            "description": "README 与本站使用的 SVG 卡片。",
            "href": "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
            "linkLabel": "查看 SVG"
          }
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
        problem:
          "国产与开源数据库对 QA 来说难拉起——缺少文档化安装会卡住自动化与新人上手。",
        solution:
          "在 Docker Hub 发布达梦、瀚高、人大金仓、TiDB 等即用镜像，统一标签与文档。",
        tradeoffs: [
          "标签保持无聊可预期——CI 套件要的是稳定，不是花哨。",
          "尽量一镜像一服务，pull-and-run 失败更好定位。",
          "早期发布达梦 / 瀚高——拉取量验证了国产库痛点真实存在。"
        ],
        artifacts: [
          {
            "title": "Docker Hub 命名空间",
            "description": "QA 向镜像合集，总拉取在首页实时展示。",
            "href": "https://hub.docker.com/u/xuxuclassmate",
            "linkLabel": "浏览镜像"
          },
          {
            "title": "实时用户统计 API",
            "description": "经 Docker Hub API Gateway 聚合的拉取量。",
            "href": "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            "linkLabel": "JSON 统计"
          }
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
        title: "自动化框架手艺",
        subtitle: "案例详解",
        description: "AI 工具底下可复用的自动化模式。",
        cover: "/images/cover-automation.jpg",
        coverAlt: "自动化框架手艺",
        problem:
          "一次性脚本经不起团队交接——AI 工具需要底下的稳定自动化手艺。",
        solution:
          "沉淀接口与 UI 自动化（含 Playwright）的练习框架，强调复用、清晰与语言灵活。",
        tradeoffs: [
          "框架保持语言灵活，而不是绑定单一语言身份——约束是交付质量。",
          "练习仓库公开，模式可直接复制，不必等一门课。",
          "Locust + Playwright 与接口套件并列——性能不是事后补丁。"
        ],
        artifacts: [
          {
            "title": "Java 实践套件",
            "description": "可复用的接口 / UI 自动化模式。",
            "href": "https://github.com/XuXuClassMate/My_Test_JAProject",
            "linkLabel": "GitHub"
          },
          {
            "title": "Python + Locust 示例",
            "description": "性能、接口、Selenium、Appium 实践集中一仓。",
            "href": "https://github.com/XuXuClassMate/My_Test_PyProject",
            "linkLabel": "GitHub"
          }
        ],
        outcomes: [
          "可复用的 API / UI 套件结构",
          "反哺 AI 工具打包方式的模式",
          "GitHub 上的开放练习项目",
        ],
        metrics: [
          { label: "焦点", value: "API · UI · Playwright" },
          { label: "约束", value: "交付质量" },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/XuXuClassMate/My_Test_JAProject",
          },
        ],
        meta: {
          title: "自动化框架案例 | 旭旭同学",
          description: "支撑旭旭同学 AI 测试工具的可复用 API / UI 自动化手艺。",
          keywords: `${sharedKeywords}, 自动化框架案例`,
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
        description: "深度工作与远离键盘周末的歌单。",
        icon: "乐",
        items: ["电子", "古典钢琴", "爵士"],
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
    subtitle: "笔记",
    title: "实操笔记",
    description: "关于国产库 Docker 与 ClawHub 技能发布的可检索长文。",
    backLabel: "全部笔记",
    readingLabel: "分钟阅读",
    publishedLabel: "发布于",
    items: getNotes("zh"),
    footerDesc: "可安装的质量工程——写下来",
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
