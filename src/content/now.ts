import type { Locale } from "./types";

/** Edit this file monthly — Now page content lives here. */
export const NOW_UPDATED = {
  /** ISO month used for sorting / meta (YYYY-MM). */
  iso: "2026-07",
  en: "July 2026"

} as const;

export type NowSectionId = "building" | "learning" | "exploring";

export type NowItem = {
  title: string;
  note?: string;
  href?: string;
};

export type NowSection = {
  id: NowSectionId;
  title: string;
  description: string;
  items: NowItem[];
};

type LocalizedItem = {
  en: { title: string; note?: string };

  href?: string;
};

type SectionDef = {
  id: NowSectionId;
  title: { en: string; };
  description: { en: string; };
  items: LocalizedItem[];
};

const SECTIONS: SectionDef[] = [
  {
    id: "building",
    title: { en: "Building" },
    description: {
      en: "Products and tooling shipping right now."

    },
    items: [
      {
        en: {
          title: "AI Test Case Generator",
          note: "Shift testing left with multi-modal AI — PRD / image / video in, reviewable cases out."
        },

        href: "/work/testcase-generator"
      },
      {
        en: {
          title: "OpenClaw QA Skills",
          note: "Installable ClawHub skills for QA and agent workflows."
        },

        href: "https://clawhub.ai/xuxuclassmate"
      },
      {
        en: {
          title: "Test DB Docker Suite",
          note: "Ready-to-run Dameng / Highgo / Kingbase / TiDB images for developers, QA, ops, and DBAs."
        },

        href: "/work/docker-suite"
      }
    ]
  },
  {
    id: "learning",
    title: { en: "Learning" },
    description: {
      en: "Skills and stacks I am actively leveling up."

    },
    items: [
      {
        en: {
          title: "AI Agent Testing",
          note: "How to test agents, tools, and multi-step workflows."
        }

      },
      {
        en: {
          title: "MCP",
          note: "Model Context Protocol for toolable agent systems."
        }

      },
      {
        en: {
          title: "Playwright",
          note: "Deeper fixtures, parallel runs, and CI patterns."
        },

        href: "/playwright"
      },
      {
        en: {
          title: "LLM Evaluation",
          note: "Eval harnesses, scoring, and regression for LLM outputs."
        }

      }
    ]
  },
  {
    id: "exploring",
    title: { en: "Exploring" },
    description: {
      en: "Longer-horizon bets — research before commit."

    },
    items: [
      {
        en: {
          title: "Autonomous Testing",
          note: "Where agents can own exploration without losing signal."
        }

      },
      {
        en: {
          title: "AI Test Agents",
          note: "Specialized agents for case design, triage, and repair."
        }

      },
      {
        en: {
          title: "Cloud-native Test Infrastructure",
          note: "Ephemeral environments and portable QA stacks."
        },

        href: "/infrastructure"
      }
    ]
  }
];

function localizeHref(href?: string): string | undefined {
  if (!href) return undefined;
  if (href.startsWith("http")) return href;
  return `/en${href.startsWith("/") ? href : `/${href}`}`;
}

export function getNowSections(_locale: Locale): NowSection[] {
  return SECTIONS.map((section) => ({
    id: section.id,
    title: section.title.en,
    description: section.description.en,
    items: section.items.map((item) => ({
      title: item.en.title,
      note: item.en.note,
      href: localizeHref(item.href),
    })),
  }));
}
