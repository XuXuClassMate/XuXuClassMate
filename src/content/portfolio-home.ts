import type { Locale } from "./types";
import { getNotes } from "./notes";

export type HomeLink = { title: string; href: string; external?: boolean };

export type PortfolioHome = {
  greeting: string;
  roles: string[];
  tagline: string;
  description: string;
  ctaWork: string;
  ctaDemo: string;
  ctaDemoHref: string;
  ctaGithub: string;
  whatIDoTitle: string;
  whatIDo: HomeLink[];
  achievementsTitle: string;
  achievements: { value: string; label: string }[];
  featuredTitle: string;
  featuredCta: string;
  featuredMore: string;
  servicesTitle: string;
  servicesLead: string;
  services: {
    id: "www" | "nas" | "pulse" | "mail" | "watch" | "ssh";
    title: string;
    detail: string;
    host: string;
    href: string;
    action: string;
  }[];
  featured: {
    title: string;
    pitch?: string;
    description: string;
    href: string;
    tags: string[];
    flow?: string[];
  }[];
  heroKicker: string;
  capabilitiesTitle: string;
  capabilities: { title: string; detail: string; href: string }[];
  stackTitle: string;
  stackLead: string;
  stack: { title: string; items: string[] }[];
  articlesTitle: string;
  articlesCta: string;
  ossTitle: string;
  ossDescription: string;
  ossGithubLabel: string;
  ossOrgLabel: string;
  ossPlaygroundLabel: string;
  connectGithub: string;
};

const GITHUB = "https://github.com/XuXuClassMate";

const featuredEn = [
  {
    title: "AI Test Case Generator",
    pitch: "From requirements to reviewable test cases.",
    description:
      "PDF / Word / TXT / Image / Video → AI → Test Cases → Human Review → Excel / Markdown / XMind. Runs via Docker, local source, npm, or OpenClaw plugin.",
    href: "/en/work/testcase-generator",
    tags: ["Flagship", "AI Testing", "Live Demo"],
    flow: [
      "Requirements in",
      "AI drafts the cases",
      "Human review",
      "Excel · Markdown · XMind",
    ],
  },
  {
    title: "Test DB Docker Suite",
    description:
      "Docker database images for developers, QA, ops, and DBAs — Dameng, Highgo, Kingbase, TiDB and more.",
    href: "/en/work/docker-suite",
    tags: ["Docker Testing", "Test Infrastructure", "DevOps"],
  },
];

const featuredZh = [
  {
    title: "AI 测试用例生成器",
    pitch: "从需求到可评审的测试用例。",
    description:
      "PDF / Word / TXT / 图片 / 视频 → AI → 用例 → 人工评审 → Excel / Markdown / XMind。支持 Docker、本地源码、npm 与 OpenClaw 插件。",
    href: "/zh/work/testcase-generator",
    tags: ["旗舰", "AI Testing", "在线 Demo"],
    flow: ["需求进入", "AI 起草用例", "人工评审", "Excel · Markdown · XMind"],
  },
  {
    title: "测试库 Docker 套件",
    description:
      "即用数据库镜像——达梦、瀚高、人大金仓、TiDB 等，开发 / 测试 / 运维 / DBA 都能用。",
    href: "/zh/work/docker-suite",
    tags: ["Docker Testing", "Test Infrastructure", "DevOps"],
  },
];

export function getPortfolioHome(locale: Locale): PortfolioHome {
  const isZh = locale === "zh";

  return {
    greeting: isZh
      ? "工程品质。由 AI 加速。"
      : "Engineering Quality. Accelerated by AI.",
    heroKicker: isZh ? "AI 驱动的质量工程" : "AI-powered Quality Engineering",
    roles: ["QA Engineer", "SDET", "AI Testing"],
    tagline: isZh ? "可安装的质量工程" : "Installable Quality Engineering",
    description: isZh
      ? "构建可落地的 AI 测试工具、自动化系统和可复用的工程基础设施。"
      : "Building practical AI testing tools, automation systems, and reusable engineering infrastructure.",
    ctaWork: isZh ? "探索产品" : "Explore Products",
    ctaDemo: isZh ? "试用 AI 用例生成器" : "Try AI Test Case Generator",
    ctaDemoHref: isZh
      ? "/zh/demo/ai-testcase-generator"
      : "/en/demo/ai-testcase-generator",
    ctaGithub: isZh ? "查看 GitHub" : "View GitHub",
    whatIDoTitle: isZh ? "能力方向" : "What I Do",
    whatIDo: [
      {
        title: "Test Automation",
        href: isZh ? "/zh/playwright" : "/en/playwright",
      },
      {
        title: "API Testing",
        href: isZh
          ? "/zh/work/automation-framework"
          : "/en/work/automation-framework",
      },
      {
        title: "Performance Testing",
        href: isZh
          ? "/zh/blog/locust-api-performance-testing"
          : "/en/blog/locust-api-performance-testing",
      },
      {
        title: "AI Testing",
        href: isZh ? "/zh/ai-testing" : "/en/ai-testing",
      },
      {
        title: "E2E Testing",
        href: isZh
          ? "/zh/work/fullstack-e2e"
          : "/en/work/fullstack-e2e",
      },
      {
        title: "Test Infrastructure",
        href: isZh ? "/zh/infrastructure" : "/en/infrastructure",
      },
    ],
    achievementsTitle: isZh ? "关键成果" : "Key Achievements",
    achievements: [
      {
        value: "80%+",
        label: isZh ? "测试自动化覆盖率" : "Test Automation Coverage",
      },
      {
        value: "500+",
        label: isZh ? "性能测试 QPS" : "Performance Testing QPS",
      },
      {
        value: "40%",
        label: isZh ? "回归时间缩短" : "Regression Time Reduction",
      },
      {
        value: "20–35%",
        label: isZh ? "响应时间改善" : "Response Time Improvement",
      },
    ],
    featuredTitle: isZh ? "精选项目" : "Featured Projects",
    featuredCta: isZh ? "查看全部项目" : "View all projects",
    featuredMore: isZh ? "进一步了解" : "Learn more",
    featured: isZh ? featuredZh : featuredEn,
    servicesTitle: isZh ? "在线服务" : "Services",
    servicesLead: isZh
      ? "这些站点都在这个名字下面运行。"
      : "These sites are running under this name.",
    services: [
      {
        id: "www",
        title: "www",
        host: "www.xuxuclassmate.com",
        href: "https://www.xuxuclassmate.com/",
        action: isZh ? "打开" : "Open",
        detail: isZh ? "作品与产品目录。" : "Portfolio and product index.",
      },
      {
        id: "nas",
        title: "NAS",
        host: "nas.xuxuclassmate.com",
        href: "https://nas.xuxuclassmate.com",
        action: isZh ? "打开" : "Open",
        detail: isZh ? "自托管存储。" : "Self-hosted storage.",
      },
      {
        id: "pulse",
        title: "GlobalPulse",
        host: "pulse.xuxuclassmate.com",
        href: "https://pulse.xuxuclassmate.com/",
        action: isZh ? "打开" : "Open",
        detail: isZh ? "简报与控制台，就在首页。" : "Briefings and the console, on the homepage.",
      },
      {
        id: "mail",
        title: "Mail",
        host: "mail.xuxuclassmate.com",
        href: "https://mail.xuxuclassmate.com",
        action: isZh ? "打开" : "Open",
        detail: isZh ? "撰写、附件、发送记录。" : "Compose, attachments, and history.",
      },
      {
        id: "watch",
        title: "Watch",
        host: "watch.xuxuclassmate.com",
        href: "https://watch.xuxuclassmate.com/",
        action: isZh ? "打开" : "Open",
        detail: isZh ? "站点流量与安全监控。" : "Traffic and security monitor.",
      },
      {
        id: "ssh",
        title: "SSH",
        host: "ssh.xuxuclassmate.com",
        href: "https://ssh.xuxuclassmate.com/",
        action: isZh ? "打开" : "Open",
        detail: isZh ? "服务器安全终端。" : "Secure shell for the server.",
      },
    ],
    capabilitiesTitle: isZh ? "能力领域" : "Capabilities",
    capabilities: [
      {
        title: isZh ? "自动化工程" : "Automation Engineering",
        detail: "Playwright · Java · Python",
        href: isZh ? "/zh/playwright" : "/en/playwright",
      },
      {
        title: isZh ? "AI 测试" : "AI-powered Testing",
        detail: isZh ? "LLM · 多模态 · AI Agents" : "LLM · Multimodal · AI Agents",
        href: isZh ? "/zh/ai-testing" : "/en/ai-testing",
      },
      {
        title: isZh ? "性能与可靠性" : "Performance & Reliability",
        detail: isZh ? "Locust · Go · 压测" : "Locust · Go · Load Testing",
        href: isZh
          ? "/zh/blog/locust-api-performance-testing"
          : "/en/blog/locust-api-performance-testing",
      },
      {
        title: isZh ? "开发者基础设施" : "Developer Infrastructure",
        detail: isZh ? "Docker · CI/CD · 数据库" : "Docker · CI/CD · Databases",
        href: isZh ? "/zh/infrastructure" : "/en/infrastructure",
      },
    ],
    stackTitle: isZh ? "技术栈" : "Technical Stack",
    stackLead: isZh
      ? "能力是方向，技术栈是实现方式——按测试域、数据与基础设施分组。"
      : "Capabilities are the lane; the stack is how delivery happens — testing domains, data, and infrastructure.",
    stack: isZh
      ? [
          {
            title: "UI 自动化",
            items: ["Playwright", "TypeScript"],
          },
          {
            title: "接口测试",
            items: ["Java", "JUnit", "RestAssured", "Python", "Pytest"],
          },
          {
            title: "性能测试",
            items: ["Locust", "Go 压测框架", "Locust WebUI"],
          },
          {
            title: "AI Testing",
            items: [
              "AI Test Case Generation",
              "OpenClaw / ClawHub",
              "Claude Code",
            ],
          },
          {
            title: "数据与消息",
            items: ["MySQL", "Oracle", "Redis", "MQ"],
          },
          {
            title: "基础设施",
            items: ["Docker", "CI/CD"],
          },
        ]
      : [
          {
            title: "UI Automation",
            items: ["Playwright", "TypeScript"],
          },
          {
            title: "API Testing",
            items: ["Java", "JUnit", "RestAssured", "Python", "Pytest"],
          },
          {
            title: "Performance Testing",
            items: ["Locust", "Go Framework", "Locust WebUI"],
          },
          {
            title: "AI Testing",
            items: [
              "AI Test Case Generation",
              "OpenClaw / ClawHub",
              "Claude Code",
            ],
          },
          {
            title: "Data & Messaging",
            items: ["MySQL", "Oracle", "Redis", "MQ"],
          },
          {
            title: "Infrastructure",
            items: ["Docker", "CI/CD"],
          },
        ],
    articlesTitle: isZh ? "最新工程笔记" : "Latest Engineering Notes",
    articlesCta: isZh ? "查看全部" : "View all",
    ossTitle: isZh ? "GitHub / 开源" : "GitHub / Open Source",
    ossDescription: isZh
      ? "XuXuClassMate 个人品牌下的 InnoNestX：AI 工具、QA 工具与基础设施开源。"
      : "InnoNestX under the XuXuClassMate personal brand — open AI tools, QA tools, and infrastructure.",
    ossGithubLabel: isZh ? "打开 GitHub" : "Open GitHub",
    ossOrgLabel: isZh ? "开源页面" : "Open Source page",
    ossPlaygroundLabel: isZh ? "体验台" : "Playground",
    connectGithub: GITHUB,
  };
}

export function getLatestArticles(locale: Locale) {
  return getNotes(locale).slice(0, 3).map((note) => ({
    title: note.title,
    description: note.description,
    href:
      locale === "zh"
        ? `/zh/blog/${note.slug}`
        : `/en/blog/${note.slug}`,
    tags: note.tags,
  }));
}
