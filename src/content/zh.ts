import type { LocaleCopy } from "./types";

const sharedMeta = {
  description:
    "旭旭同学（xuxuclassmate）专注 AI 质量工具与 OpenClaw Agent 技能：多模态用例生成、交易助手，以及可复用的 Docker 测试环境。",
  keywords:
    "旭旭同学, xuxuclassmate, AI测试, OpenClaw, ClawHub, Agent技能, 用例生成, 交易助手, 软件测试, Docker, 自动化测试",
};

export const zh: LocaleCopy = {
  brand: "旭旭同学",
  author: "旭旭同学",
  languageSwitch: "English",
  contactLabel: "联系我：",
  contactHint: "欢迎就 AI 工具、Agent 技能与质量工程交流合作。",
  copyEmail: "复制邮箱",
  copiedEmail: "已复制",
  backToTop: "回到顶部",
  themeToggle: "主题",
  themeToLight: "浅色",
  themeToDark: "深色",
  copyright: "© 2020-2026 旭旭同学",
  wechatAlt: "微信二维码",
  nav: {
    life: "生活",
    learn: "学习",
    work: "工作",
  },
  meta: {
    home: { title: "旭旭同学", ...sharedMeta },
    life: { title: "旭旭同学 - 生活点滴", ...sharedMeta },
    learn: { title: "旭旭同学 - 学习历程", ...sharedMeta },
    work: { title: "旭旭同学 - 工作项目", ...sharedMeta },
  },
  home: {
    subtitle: "AI × 质量 // 系统",
    title: "用 AI 建造工具，用质量守住交付",
    description:
      "我做 OpenClaw Agent 技能、AI 测试工具和可复用环境——让智能提速，也让交付经得起检验。",
    valuesTitle: "我的做事方式",
    values: [
      {
        title: "AI 原生工具",
        description:
          "把重复的质量工作产品化：多模态输入、评审闭环、可导出的交付物。",
      },
      {
        title: "Agent 技能",
        description:
          "在 ClawHub / OpenClaw 上发布可安装、可运行的技能，而不只是演示文稿。",
      },
      {
        title: "质量体系",
        description:
          "用自动化、容器与环境把 AI 的速度接住，让团队真正用得上。",
      },
    ],
    highlightsTitle: "数据一览",
    highlights: [
      { value: "700+", label: "ClawHub AI 用例生成器安装量" },
      { value: "900+", label: "ClawHub Trading Assistant Core 安装量" },
      { value: "30k+", label: "达梦 Docker 拉取量" },
      { value: "17k+", label: "瀚高 Docker 拉取量" },
    ],
    featuredTitle: "精选作品",
    featuredCta: "查看全部项目",
    featured: [
      {
        title: "AI 测试用例生成器",
        description:
          "多模态 QA 输入（PDF、Word、图片、视频）→ 结构化用例，含测试/开发/产品三角色评审。支持 Docker、npm、OpenClaw 插件，并在 ClawHub 发布为 AI Test Case Generator。",
        tags: ["TypeScript", "多模态 AI", "ClawHub"],
        href: "https://github.com/XuXuClassMate/testcase-generator",
        linkLabel: "查看 GitHub",
        ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
        ctaLabel: "Docker Hub",
        category: "AI",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw Agent 技能：支撑阻力、多指标信号、仓位与风险提醒。可通过 ClawHub、Docker 或 pip / `ta` CLI 安装。",
        tags: ["Agent 技能", "ClawHub", "CLI"],
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "查看 GitHub",
        ctaHref: "https://clawhub.ai",
        ctaLabel: "ClawHub",
        category: "AI",
      },
      {
        title: "测试库 Docker 套件",
        description:
          "面向 QA 环境的即用数据库镜像——达梦（约 3 万次拉取）、瀚高（约 1.7 万）、人大金仓、TiDB 等，见 Docker Hub。",
        tags: ["Docker", "Dameng", "Highgo"],
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub",
        category: "Infra",
      },
    ],
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
        icon: "fab fa-github",
      },
      {
        title: "Docker Hub",
        description: "面向 QA 团队的可复用数据库与测试环境镜像。",
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub",
        icon: "fab fa-docker",
      },
      {
        title: "ClawHub",
        description:
          "可安装的 OpenClaw Agent 技能——用例生成器与交易助手。",
        href: "https://clawhub.ai",
        linkLabel: "访问 ClawHub",
        icon: "fas fa-robot",
      },
    ],
    links: [
      {
        title: "学习路径",
        description: "Agent、多模态 QA，以及工具背后的技术栈",
        href: "/zh/learn.html",
      },
      {
        title: "项目展示",
        description: "用例生成器、交易助手、Docker 测试库套件",
        href: "/zh/work.html",
      },
      {
        title: "生活历程",
        description: "旅行、音乐，以及代码之外的故事",
        href: "/zh/life.html",
      },
    ],
    footerDesc: "用质量思维建造 AI 工具",
    social: [
      {
        href: "https://github.com/XuXuClassMate",
        label: "GitHub",
        icon: "fab fa-github",
      },
      {
        href: "https://fgg6gzb6uk.feishu.cn/docx/LkwDdpLjnoIdGwxOH6zcRwEWnhd?from=from_copylink",
        label: "博客",
        icon: "fas fa-blog",
      },
      {
        href: "#",
        label: "微信",
        icon: "fab fa-weixin",
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
        title: "自动化测试",
        description: "",
        items: [
          "Playwright 与跨浏览器 UI",
          "接口自动化（不绑死语言）",
          "框架设计与可复用套件",
          "面向 CI 的环境",
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
        title: "Ministry of Testing",
        description: "现代测试实践、AI 辅助 QA 与质量手艺的社区学习资源。",
        href: "https://www.ministryoftesting.com/learn",
        linkLabel: "探索测试洞见",
      },
      {
        title: "ClawHub",
        description:
          "发现并安装 OpenClaw Agent 技能——包括我发布的 QA 与交易相关工具。",
        href: "https://clawhub.ai",
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
        title: "规模化自动化",
        description:
          "从脚本走向框架：Playwright 与可复用环境，不再被某一种语言绑住。",
      },
      {
        title: "AI 原生工具",
        description:
          "把重复的质量工作产品化——多模态生成、评审闭环与可导出交付物。",
      },
      {
        title: "OpenClaw Agent 技能",
        description:
          "在 ClawHub 上打包技能，让 Agent 能安装并跑通真实工作流，而不只是演示。",
      },
    ],
    focusTitle: "当前学习重点",
    focusHeading: "Agent 技能与多模态 QA",
    focusIntro: "正在把「想法 → Agent 技能 → 可安装工具」这条链路打磨扎实：",
    focusItems: [
      "发布并迭代 OpenClaw / ClawHub 技能",
      "多模态需求到结构化测试产物",
      "用评审角色提升生成质量",
      "Docker / CLI 打包，让 AI 工具真正可安装",
    ],
    footerDesc: "公开学习——带着质量根基做 AI 工具",
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
    subtitle: "作品集",
    title: "工具、技能与环境",
    description: "GitHub / Docker / ClawHub 上的 AI 作品，以及背后的质量基础",
    projectsTitle: "精选项目",
    filterAll: "全部",
    projects: [
      {
        title: "AI 测试用例生成器",
        description:
          "多模态 QA 输入（PDF、Word、图片、视频）→ 结构化用例，含测试/开发/产品三角色评审。支持 Docker、npm、OpenClaw 插件，并在 ClawHub 发布为 AI Test Case Generator。",
        tags: ["TypeScript", "多模态 AI", "ClawHub"],
        href: "https://github.com/XuXuClassMate/testcase-generator",
        linkLabel: "查看 GitHub",
        ctaHref: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
        ctaLabel: "Docker Hub",
        category: "AI",
      },
      {
        title: "Trading Assistant Core",
        description:
          "OpenClaw Agent 技能：支撑阻力、多指标信号、仓位与风险提醒。可通过 ClawHub、Docker 或 pip / `ta` CLI 安装。",
        tags: ["Agent 技能", "ClawHub", "CLI"],
        href: "https://github.com/XuXuClassMate/trading-assistant",
        linkLabel: "查看 GitHub",
        ctaHref: "https://clawhub.ai",
        ctaLabel: "ClawHub",
        category: "AI",
      },
      {
        title: "测试库 Docker 套件",
        description:
          "面向 QA 环境的即用数据库镜像——达梦（约 3 万次拉取）、瀚高（约 1.7 万）、人大金仓、TiDB 等，见 Docker Hub。",
        tags: ["Docker", "Dameng", "Highgo"],
        href: "https://hub.docker.com/u/xuxuclassmate",
        linkLabel: "查看 Docker Hub",
        category: "Infra",
      },
      {
        title: "自动化框架手艺",
        description:
          "可复用的接口 / UI 自动化模式与练习项目——AI 工具底下的手艺底座，不绑死某一种语言。",
        tags: ["Framework", "API", "Playwright"],
        href: "https://github.com/XuXuClassMate/My_Test_JAProject",
        linkLabel: "查看 GitHub",
        category: "Automation",
      },
    ],
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
    skillsTitle: "技术能力",
    skills: [
      {
        title: "AI 工具与 Agent",
        progress: 90,
        items: [
          "OpenClaw / ClawHub 技能设计",
          "多模态用例生成",
          "LLM 评审与导出流水线",
          "Docker / npm / pip 打包",
        ],
      },
      {
        title: "功能测试",
        progress: 95,
        items: [
          "需求分析与测试用例设计",
          "黑盒测试与白盒测试",
          "接口测试与集成测试",
          "缺陷管理与跟踪",
        ],
      },
      {
        title: "自动化测试",
        progress: 95,
        items: [
          "Web UI 自动化",
          "接口自动化",
          "移动端自动化",
          "自动化框架设计与开发",
        ],
      },
      {
        title: "性能测试",
        progress: 90,
        items: [
          "压力测试与负载测试",
          "性能监控与分析",
          "性能调优建议",
          "并发测试设计",
        ],
      },
      {
        title: "测试环境",
        progress: 90,
        items: [
          "容器化数据库与服务栈",
          "CI/CD 流程优化",
          "国产与开源数据库镜像",
          "测试工具集成与管理",
        ],
      },
    ],
    footerDesc: "能安装的 AI 工具，信得过的质量",
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
        image: "/images/music.jpg",
        imageAlt: "音乐时光",
      },
      {
        title: "电影时光",
        description: "沉浸在宫崎骏的动画世界",
        href: "https://www.iqiyi.com/playlist1921084202.html?vfrm=psbdl",
        image: "/images/movie.jpg",
        imageAlt: "电影时光 - 宫崎骏动画",
      },
    ],
    hobbiesTitle: "我的爱好",
    hobbies: [
      {
        title: "阅读",
        description: "喜欢阅读技术书籍和文学作品，探索不同的知识领域",
        icon: "📚",
        items: ["技术书籍", "科幻小说", "历史档案"],
      },
      {
        title: "游戏",
        description: "享受游戏带来的乐趣，同时学习游戏开发技术",
        icon: "🎮",
        items: ["角色扮演", "策略游戏", "独立游戏"],
      },
      {
        title: "运动",
        description: "保持规律运动，享受运动带来的快乐",
        icon: "🏃",
        items: ["徒步", "爬山", "羽毛球"],
      },
    ],
    blogTitle: "生活博客",
    blog: [
      {
        title: "年度计划",
        description: "新的一年，新的开始，分享我的年度计划和目标",
        image: "/images/plan.jpg",
        imageAlt: "年度计划配图",
        href: "https://fgg6gzb6uk.feishu.cn/base/H07ebpIM1aBTuGsYtaacHK9NnBb?table=tblwIKtfaCQWbaKW",
        linkLabel: "阅读全文",
      },
      {
        title: "推进情况",
        description: "记录和追踪年度计划的执行进展，分享成长历程",
        image: "/images/summary.jpg",
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
        icon: "fab fa-tiktok",
      },
      {
        href: "https://www.instagram.com/xuxuclassmate",
        label: "Instagram",
        icon: "fab fa-instagram",
      },
      {
        href: "#",
        label: "微信",
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
    footerDesc: "用质量思维建造 AI 工具",
    social: [
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
    ],
  },
};
