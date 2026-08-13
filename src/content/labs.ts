import type { Locale, PageMeta } from "./types";

export type LabTrack = {
  id: string;
  title: string;
  status: "live" | "exploring";
  statusLabel: string;
  summary?: string;
  input?: string;
  output?: string[];
  chain: string[];
  href?: string;
  linkLabel?: string;
};

export type LabPage = {
  meta: PageMeta;
  subtitle: string;
  title: string;
  description: string;
  capabilitiesTitle?: string;
  capabilities?: string[];
  tracksTitle?: string;
  tracks?: LabTrack[];
  featuredTitle?: string;
  featured?: {
    title: string;
    description: string;
    status: string;
    href: string;
    linkLabel: string;
  };
  proofTitle?: string;
  proofs?: { title: string; href: string; description: string }[];
  cloudTitle?: string;
  cloudLive?: string[];
  cloudExploring?: string[];
};

export function getPlaywrightLab(locale: Locale): LabPage {
  const isZh = locale === "zh";
  return {
    meta: {
      title: isZh
        ? "Playwright Testing Lab | Playwright QA | XuXuClassMate"
        : "Playwright Testing Lab | Playwright QA Engineer | XuXuClassMate",
      description: isZh
        ? "Playwright + TypeScript 全链路自动化实验室：POM、API、Mock、并行、多浏览器、CI/CD、Docker。"
        : "Playwright + TypeScript automation lab: POM, API testing, mocking, parallel runs, multi-browser, CI/CD, Docker.",
      keywords:
        "Playwright, Playwright TypeScript, Playwright QA Engineer, E2E testing, UI automation",
    },
    subtitle: "PLAYWRIGHT TESTING LAB",
    title: "Playwright Testing Lab",
    description: isZh
      ? "Web 自动化与全链路 E2E 的核心方向 —— 不只是 UI 脚本。"
      : "A core practice area for web automation and full-chain E2E — not just UI scripts.",
    capabilitiesTitle: isZh ? "能力地图" : "Capability map",
    capabilities: [
      "Playwright + TypeScript",
      "Page Object Model",
      "API Testing",
      "UI Testing",
      "Network Mocking",
      "Authentication",
      "Fixtures",
      "Parallel Testing",
      "Multi-browser Testing",
      "Trace Viewer",
      "Screenshot / Video",
      "CI/CD",
      "Docker",
    ],
    featuredTitle: isZh ? "旗舰 Showcase" : "Featured showcase",
    featured: {
      title: isZh
        ? "Full-Stack E2E Testing Framework"
        : "Full-Stack E2E Testing Framework",
      description: isZh
        ? "覆盖前端、API、数据库、Redis 与消息队列校验的全链路自动化框架。仓库即将公开。"
        : "A full-chain automation framework covering frontend, API, database, Redis and message queue validation. Repository coming soon.",
      status: isZh ? "即将上线" : "Coming soon",
      href: isZh
        ? "/zh/work/fullstack-e2e"
        : "/en/work/fullstack-e2e",
      linkLabel: isZh ? "查看案例" : "View case study",
    },
  };
}

export function getInfrastructureLab(locale: Locale): LabPage {
  const isZh = locale === "zh";
  return {
    meta: {
      title: isZh
        ? "Test Infrastructure | Docker · CI/CD · Cloudflare | XuXuClassMate"
        : "Test Infrastructure | Docker, CI/CD, Cloudflare | XuXuClassMate",
      description: isZh
        ? "Docker、Compose、Linux、CI/CD、GitHub Actions、Cloudflare Workers / Tunnel，以及容器化测试环境。"
        : "Docker, Compose, Linux, CI/CD, GitHub Actions, Cloudflare Workers / Tunnel, and containerized testing environments.",
      keywords:
        "Test Infrastructure, Docker, CI/CD, GitHub Actions, Cloudflare Workers, containerized testing, Cloud-native Testing",
    },
    subtitle: "TEST INFRASTRUCTURE",
    title: "Test Infrastructure",
    description: isZh
      ? "可重复的测试与发布基础设施 —— 面向海外招聘的 Cloud-native Testing 叙事。"
      : "Repeatable test and release infrastructure — cloud-native testing that travels well on overseas job boards.",
    capabilitiesTitle: isZh ? "能力地图" : "Capability map",
    capabilities: [
      "Docker",
      "Docker Compose",
      "Linux",
      "CI/CD",
      "GitHub Actions",
      "Cloudflare",
      "Cloudflare Workers",
      "Cloudflare Tunnel",
      "NAS / Self-hosted Environment",
      "Containerized Testing",
    ],
    cloudTitle: isZh ? "Cloud-native Testing" : "Cloud-native Testing",
    cloudLive: isZh
      ? [
          "Cloudflare Pages（本站）",
          "Cloudflare Workers + KV（GlobalPulse）",
          "Docker / Compose 测试库套件",
          "API Gateway / Tunnel 模式",
        ]
      : [
          "Cloudflare Pages (this site)",
          "Cloudflare Workers + KV (GlobalPulse)",
          "Docker / Compose QA image suite",
          "API Gateway / Tunnel patterns",
        ],
    cloudExploring: ["R2", "D1", "Durable Objects"],
    proofTitle: isZh ? "证据" : "Proof",
    proofs: [
      {
        title: isZh ? "Docker 测试库套件" : "Docker Test Suite",
        description: isZh
          ? "可拉取的 QA 数据库与环境镜像。"
          : "Pullable QA database and environment images.",
        href: isZh
          ? "/zh/work/docker-suite"
          : "/en/work/docker-suite",
      },
      {
        title: "Docker Hub API Gateway",
        description: isZh
          ? "README 与工具使用的实时统计网关。"
          : "Live stats gateway used by READMEs and tools.",
        href: isZh
          ? "/zh/work/docker-hub-api-gateway"
          : "/en/work/docker-hub-api-gateway",
      },
      {
        title: "GlobalPulse",
        description: isZh
          ? "Workers + KV 上的自托管情报产品。"
          : "Self-hosted briefings on Workers + KV.",
        href: isZh
          ? "/zh/work/globalpulse"
          : "/en/work/globalpulse",
      },
    ],
  };
}
