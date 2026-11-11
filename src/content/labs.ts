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

export function getPlaywrightLab(_locale: Locale): LabPage {
  return {
    meta: {
      title: "Playwright Testing Lab | Playwright QA Engineer | XuXuClassMate",
      description:
        "Playwright + TypeScript automation lab: POM, API testing, mocking, parallel runs, multi-browser, CI/CD, Docker.",
      keywords:
        "Playwright, Playwright TypeScript, Playwright QA Engineer, E2E testing, UI automation",
    },
    subtitle: "PLAYWRIGHT TESTING LAB",
    title: "Playwright Testing Lab",
    description:
      "A core practice area for web automation and full-chain E2E — not just UI scripts.",
    capabilitiesTitle: "Capability map",
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
    featuredTitle: "Featured showcase",
    featured: {
      title: "Full-Stack E2E Testing Framework",
      description:
        "A full-chain automation framework covering frontend, API, database, Redis and message queue validation. Repository coming soon.",
      status: "Coming soon",
      href: "/en/work/fullstack-e2e",
      linkLabel: "View case study",
    },
  };
}

export function getInfrastructureLab(_locale: Locale): LabPage {
  return {
    meta: {
      title: "Test Infrastructure | Docker, CI/CD, Cloudflare | XuXuClassMate",
      description:
        "Docker, Compose, Linux, CI/CD, GitHub Actions, Cloudflare Workers / Tunnel, and containerized testing environments.",
      keywords:
        "Test Infrastructure, Docker, CI/CD, GitHub Actions, Cloudflare Workers, containerized testing, Cloud-native Testing",
    },
    subtitle: "TEST INFRASTRUCTURE",
    title: "Test Infrastructure",
    description:
      "Repeatable test and release infrastructure — cloud-native testing that travels well on overseas job boards.",
    capabilitiesTitle: "Capability map",
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
    cloudTitle: "Cloud-native Testing",
    cloudLive: [
      "Cloudflare Pages (this site)",
      "Docker / Compose QA image suite",
      "API Gateway / Tunnel patterns",
    ],
    cloudExploring: ["R2", "D1", "Durable Objects"],
    proofTitle: "Proof",
    proofs: [
      {
        title: "Docker Test Suite",
        description: "Pullable QA database and environment images.",
        href: "/en/work/docker-suite",
      },
      {
        title: "Docker Hub API Gateway",
        description: "Live stats gateway used by READMEs and tools.",
        href: "/en/work/docker-hub-api-gateway",
      },
      {
        title: "GlobalPulse",
        description: "Self-hosted briefings on Workers + KV.",
        href: "/en/work/globalpulse",
      },
    ],
  };
}
