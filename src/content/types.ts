export type Locale = "en" | "zh";

export type PageId = "home" | "life" | "learn" | "work";

export type SocialLink = {
  href: string;
  label: string;
  icon: string;
  wechat?: boolean;
};

export type Card = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  tags?: string[];
  items?: string[];
  icon?: string;
  image?: string;
  imageAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  category?: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type SkillMeter = {
  title: string;
  progress: number;
  items: string[];
};

export type PageMeta = {
  title: string;
  description: string;
  keywords: string;
  /** Optional Open Graph title override */
  ogTitle?: string;
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
    skills: SkillMeter[];
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
