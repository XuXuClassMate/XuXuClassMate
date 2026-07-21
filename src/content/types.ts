export type Locale = "en" | "zh";

export type PageId = "home" | "life" | "learn" | "work";

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
  | "automation-framework";

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
};

export type Highlight = {
  value: string;
  label: string;
  /** Live metric key refreshed from ClawHub / Docker Hub. */
  metric?: MetricId;
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

export type CaseStudy = {
  slug: CaseSlug;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  /** Optional dark-theme cover; defaults to cover with `-dark` suffix. */
  coverDark?: string;
  coverAlt: string;
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: { label: string; value: string; metric?: MetricId }[];
  links: { label: string; href: string }[];
  meta: PageMeta;
};

export type LocaleCopy = {
  brand: string;
  author: string;
  languageSwitch: string;
  contactLabel: string;
  contactHint: string;
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
    life: string;
    learn: string;
    work: string;
  };
  meta: Record<PageId, PageMeta>;
  home: {
    subtitle: string;
    title: string;
    description: string;
    valuesTitle: string;
    values: Card[];
    highlightsTitle: string;
    highlights: Highlight[];
    featuredTitle: string;
    featuredCta: string;
    featured: Card[];
    principlesTitle: string;
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
    caseSolutionTitle: string;
    caseOutcomesTitle: string;
    caseMetricsTitle: string;
    caseLinksTitle: string;
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
  notFound: {
    title: string;
    message: string;
    homeLabel: string;
    footerDesc: string;
    social: SocialLink[];
  };
};
