export type Locale = "en" | "zh";

export type PageId =
  | "home"
  | "life"
  | "learn"
  | "work"
  | "notes"
  | "blog"
  | "innonestx"
  | "open-source"
  | "now"
  | "about"
  | "ai-testing"
  | "playwright"
  | "infrastructure";

export type MetricId =
  | "clawhub:ai-testcase-generator"
  | "clawhub:trading-assistant-core"
  | "clawhub:total-downloads"
  | "docker:dameng"
  | "docker:highgo"
  | "docker:kingbase"
  | "docker:tidb"
  | "docker:total-pulls"
  | "docker:repo-count"
  | "api:gateway-calls";

export type IconName =
  | "github"
  | "docker"
  | "wechat"
  | "blog"
  | "robot"
  | "medium"
  | "blogger"
  | "tiktok"
  | "instagram"
  | "moon"
  | "sun"
  | "ghost"
  | "arrow-left"
  | "external";

export type CaseSlug =
  | "testcase-generator"
  | "trading-assistant"
  | "globalpulse"
  | "docker-hub-api-gateway"
  | "docker-suite"
  | "automation-framework"
  | "fullstack-e2e";

export type SocialLink = {
  href: string;
  label: string;
  icon: IconName;
  wechat?: boolean;
};

export type Card = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags?: string[];
  items?: string[];
  icon?: IconName | string;
  image?: string;
  /** Optional dark-theme cover; defaults to image with `-dark` suffix. */
  imageDark?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  category?: string;
  caseHref?: string;
  caseLabel?: string;
  slug?: CaseSlug;
  /** Optional status chip (e.g. Live / Open source). */
  status?: string;
};

export type Highlight = {
  value: string;
  /** Short metric name shown under the value (e.g. Docker Pulls). */
  label: string;
  /** Live metric key refreshed from ClawHub / Docker Hub. */
  metric?: MetricId;
  /** Public source so visitors can verify the number. */
  href?: string;
  linkLabel?: string;
};

export type SkillEvidence = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
  evidence?: SkillEvidence[];
};

export type PageMeta = {
  title: string;
  description: string;
  keywords: string;
  /** Optional Open Graph title override */
  ogTitle?: string;
};

export type CaseArtifact = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export type CaseChain = {
  title: string;
  layers: string[];
};

export type ProjectProof = {
  github?: string;
  readme?: string;
  demo?: string;
  docker?: string;
  ci?: string;
  testReport?: string;
};

export type CasePipeline = {
  inputs: string[];
  stages: string[];
};

export type CaseTryItNow = {
  title: string;
  description: string;
  note?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string }[];
  command?: string;
};

export type CaseDeployment = {
  summary: string;
  steps: string[];
  channels: { label: string; href: string }[];
};

export type CaseStudy = {
  slug: CaseSlug;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  /** Optional dark-theme cover; defaults to cover with `-dark` suffix. */
  coverDark?: string;
  coverAlt: string;
  /** Flagship case study — numbered 01–10 layout with pipeline + Try it now. */
  flagship?: boolean;
  /** Engineering case overview (preferred over problem/solution when set). */
  overview?: string;
  techStack?: string[];
  architecture?: CaseChain[];
  /** Multimodal / system pipeline for flagship storytelling. */
  pipeline?: CasePipeline;
  features?: string[];
  contribution?: string[];
  results?: string[];
  proof?: ProjectProof;
  status?: "live" | "upcoming";
  problem: string;
  solution: string;
  /** Explicit product/engineering tradeoffs — why this path, not another. */
  tradeoffs?: string[];
  outcomes: string[];
  /** Concrete, inspectable proof (repos, live demos, exports). */
  artifacts?: CaseArtifact[];
  metrics: { label: string; value: string; metric?: MetricId }[];
  deployment?: CaseDeployment;
  tryItNow?: CaseTryItNow;
  links: { label: string; href: string }[];
  meta: PageMeta;
};

export type NoteSlug =
  | "domestic-db-docker-qa"
  | "clawhub-skill-shipping"
  | "ai-testcase-generator-multimodal"
  | "playwright-e2e-framework"
  | "locust-api-performance-testing"
  | "dockerized-test-environment"
  | "ai-assisted-test-case-generation"
  | "ai-agent-software-testing";

export type NoteCategory =
  | "QA Engineering"
  | "AI Testing"
  | "Playwright"
  | "API Testing"
  | "Performance Testing"
  | "Docker"
  | "Cloudflare"
  | "OpenClaw"
  | "DevOps";

export type NoteStat = {
  label: string;
  value: string;
  metric?: MetricId;
  href?: string;
};

export type NoteSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Optional fenced code sample shown under the section. */
  code?: { label?: string; content: string };
  /** Optional live or static proof numbers. */
  stats?: NoteStat[];
  /** Optional callout / takeaway box. */
  callout?: { title?: string; body: string };
  /** Optional inline resource links. */
  links?: { label: string; href: string }[];
};

export type Note = {
  slug: NoteSlug;
  title: string;
  description: string;
  category: NoteCategory;
  /** Short proof line shown on the index card (e.g. live pulls / downloads). */
  proof?: string;
  tags: string[];
  sections: NoteSection[];
  related?: { label: string; href: string }[];
  ctas?: { label: string; href: string; primary?: boolean; external?: boolean }[];
  /** Optional embed (e.g. Docker stats SVG). */
  embed?: { src: string; alt: string; href: string };
  meta: PageMeta;
};


export type LocaleCopy = {
  brand: string;
  author: string;
  languageSwitch: string;
  contactLabel: string;
  contactHint: string;
  /** Concrete collaboration types shown under contact. */
  contactOffers: string[];
  copyEmail: string;
  copiedEmail: string;
  backToTop: string;
  themeToggle: string;
  themeToLight: string;
  themeToDark: string;
  copyright: string;
  wechatAlt: string;
  closeModal: string;
  menuLabel: string;
  skipToContent: string;
  nav: {
    about: string;
    experience: string;
    projects: string;
    blog: string;
    aiTesting: string;
    github: string;
    life: string;
    contact: string;
    /** @deprecated kept for older links */
    learn?: string;
    work?: string;
    notes?: string;
    innonestx?: string;
    openSource?: string;
    now?: string;
  };
  meta: Record<PageId, PageMeta>;
  home: {
    subtitle: string;
    title: string;
    description: string;
    /** One-line brand / product-system relationship. */
    positioning: string;
    highlightsTitle: string;
    highlightsSubtitle: string;
    highlightsProof: string;
    highlights: Highlight[];
    featuredTitle: string;
    featuredCta: string;
    featured: Card[];
    principlesTitle: string;
    /** Core brand line under Engineering Principles. */
    principlesLead: string;
    principles: Card[];
    channelsTitle: string;
    channels: Card[];
    links: Card[];
    footerDesc: string;
    social: SocialLink[];
  };
  learn: {
    subtitle: string;
    title: string;
    description: string;
    stackTitle: string;
    stack: Card[];
    resourcesTitle: string;
    resources: Card[];
    timelineTitle: string;
    timeline: Card[];
    focusTitle: string;
    focusHeading: string;
    focusIntro: string;
    focusItems: string[];
    footerDesc: string;
    social: SocialLink[];
  };
  work: {
    subtitle: string;
    title: string;
    description: string;
    projectsTitle: string;
    filterAll: string;
    projects: Card[];
    approachTitle: string;
    approach: Card[];
    skillsTitle: string;
    skills: SkillGroup[];
    caseBackLabel: string;
    caseProblemTitle: string;
    caseProblemLead: string;
    caseSolutionTitle: string;
    caseSolutionLead: string;
    caseTradeoffsTitle: string;
    caseOutcomesTitle: string;
    caseArtifactsTitle: string;
    caseMetricsTitle: string;
    caseMetricsLead: string;
    caseLinksTitle: string;
    caseOverviewTitle: string;
    caseStackTitle: string;
    caseStackLead: string;
    caseArchitectureTitle: string;
    caseArchitectureLead: string;
    caseFeaturesTitle: string;
    caseFeaturesLead: string;
    caseContributionTitle: string;
    caseResultsTitle: string;
    caseRoleTitle: string;
    caseRoleLead: string;
    caseDeploymentTitle: string;
    caseDeploymentLead: string;
    caseGithubTitle: string;
    caseLiveDemoTitle: string;
    cases: CaseStudy[];
    footerDesc: string;
    social: SocialLink[];
  };
  life: {
    subtitle: string;
    title: string;
    description: string;
    galleryTitle: string;
    gallery: Card[];
    hobbiesTitle: string;
    hobbies: Card[];
    blogTitle?: string;
    blog?: Card[];
    footerDesc: string;
    social: SocialLink[];
  };
  notes: {
    subtitle: string;
    title: string;
    description: string;
    backLabel: string;
    tocLabel: string;
    relatedLabel: string;
    filterAll: string;
    categoriesLabel: string;
    items: Note[];
    footerDesc: string;
    social: SocialLink[];
  };
  openSource: {
    subtitle: string;
    title: string;
    description: string;
    orgLabel: string;
    orgName: string;
    brandTitle: string;
    brandLead: string;
    brandPersonalLabel: string;
    brandPersonalItems: string[];
    brandOrgLabel: string;
    brandOrgItems: string[];
    aboutTitle: string;
    about: string[];
    categoriesTitle: string;
    categories: Array<{
      id: string;
      title: string;
      description: string;
      projects: Array<Card & { status?: string; org?: string }>;
    }>;
    emptyCategory: string;
    joinTitle: string;
    joinIntro: string;
    joinItems: string[];
    orgCtaLabel: string;
    orgCtaHref: string;
    footerDesc: string;
    social: SocialLink[];
  };
  now: {
    subtitle: string;
    title: string;
    description: string;
    updatedLabel: string;
    updated: string;
    updatedIso: string;
    cadence: string;
    sections: Array<{
      id: string;
      title: string;
      description: string;
      items: Array<{ title: string; note?: string; href?: string }>;
    }>;
    footerDesc: string;
    social: SocialLink[];
  };
  notFound: {
    title: string;
    message: string;
    homeLabel: string;
    footerDesc: string;
    social: SocialLink[];
  };
};
