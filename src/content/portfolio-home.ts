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

export function getPortfolioHome(_locale: Locale): PortfolioHome {
  return {
    greeting: "Engineering Quality. Accelerated by AI.",
    heroKicker: "AI-powered Quality Engineering",
    roles: ["QA Engineer", "SDET", "AI Testing"],
    tagline: "Installable Quality Engineering",
    description:
      "Building practical AI testing tools, automation systems, and reusable engineering infrastructure.",
    ctaWork: "Explore Products",
    ctaDemo: "Try AI Test Case Generator",
    ctaDemoHref: "/en/demo/ai-testcase-generator",
    ctaGithub: "View GitHub",
    whatIDoTitle: "What I Do",
    whatIDo: [
      {
        title: "Test Automation",
        href: "/en/playwright",
      },
      {
        title: "API Testing",
        href: "/en/work/automation-framework",
      },
      {
        title: "Performance Testing",
        href: "/en/blog/locust-api-performance-testing",
      },
      {
        title: "AI Testing",
        href: "/en/ai-testing",
      },
      {
        title: "E2E Testing",
        href: "/en/work/fullstack-e2e",
      },
      {
        title: "Test Infrastructure",
        href: "/en/infrastructure",
      },
    ],
    achievementsTitle: "Key Achievements",
    achievements: [
      {
        value: "80%+",
        label: "Test Automation Coverage",
      },
      {
        value: "500+",
        label: "Performance Testing QPS",
      },
      {
        value: "40%",
        label: "Regression Time Reduction",
      },
      {
        value: "20–35%",
        label: "Response Time Improvement",
      },
    ],
    featuredTitle: "Featured Projects",
    featuredCta: "View all projects",
    featuredMore: "Learn more",
    featured: featuredEn,
    servicesTitle: "Services",
    servicesLead: "These sites are running under this name.",
    services: [
      {
        id: "www",
        title: "www",
        host: "www.xuxuclassmate.com",
        href: "https://www.xuxuclassmate.com/",
        action: "Open",
        detail: "Portfolio and product index.",
      },
      {
        id: "nas",
        title: "NAS",
        host: "nas.xuxuclassmate.com",
        href: "https://nas.xuxuclassmate.com",
        action: "Open",
        detail: "Self-hosted storage.",
      },
      {
        id: "pulse",
        title: "GlobalPulse",
        host: "pulse.xuxuclassmate.com",
        href: "https://pulse.xuxuclassmate.com/",
        action: "Open",
        detail: "Briefings and the console, on the homepage.",
      },
      {
        id: "mail",
        title: "Mail",
        host: "mail.xuxuclassmate.com",
        href: "https://mail.xuxuclassmate.com",
        action: "Open",
        detail: "Compose, attachments, and history.",
      },
      {
        id: "watch",
        title: "Watch",
        host: "watch.xuxuclassmate.com",
        href: "https://watch.xuxuclassmate.com/",
        action: "Open",
        detail: "Traffic and security monitor.",
      },
      {
        id: "ssh",
        title: "SSH",
        host: "ssh.xuxuclassmate.com",
        href: "https://ssh.xuxuclassmate.com/",
        action: "Open",
        detail: "Secure shell for the server.",
      },
    ],
    capabilitiesTitle: "Capabilities",
    capabilities: [
      {
        title: "Automation Engineering",
        detail: "Playwright · Java · Python",
        href: "/en/playwright",
      },
      {
        title: "AI-powered Testing",
        detail: "LLM · Multimodal · AI Agents",
        href: "/en/ai-testing",
      },
      {
        title: "Performance & Reliability",
        detail: "Locust · Go · Load Testing",
        href: "/en/blog/locust-api-performance-testing",
      },
      {
        title: "Developer Infrastructure",
        detail: "Docker · CI/CD · Databases",
        href: "/en/infrastructure",
      },
    ],
    stackTitle: "Technical Stack",
    stackLead:
      "Capabilities are the lane; the stack is how delivery happens — testing domains, data, and infrastructure.",
    stack: [
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
    articlesTitle: "Latest Engineering Notes",
    articlesCta: "View all",
    ossTitle: "GitHub / Open Source",
    ossDescription:
      "InnoNestX under the XuXuClassMate personal brand — open AI tools, QA tools, and infrastructure.",
    ossGithubLabel: "Open GitHub",
    ossOrgLabel: "Open Source page",
    ossPlaygroundLabel: "Playground",
    connectGithub: GITHUB,
  };
}

export function getLatestArticles(_locale: Locale) {
  return getNotes("en").slice(0, 3).map((note) => ({
    title: note.title,
    description: note.description,
    href: `/en/blog/${note.slug}`,
    tags: note.tags,
  }));
}
