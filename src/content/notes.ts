import type { Note, NoteCategory, NoteSection, PageMeta } from "./types";
import {
  ENGINEERING_ARTICLES,
  NOTE_CATEGORIES,
  toNote
} from "./engineering-articles";

export { NOTE_CATEGORIES };

type NoteDef = {
  slug: Note["slug"];
  category: NoteCategory;
  tags: { en: string[]; };
  proof: { en: string; };
  embed?: Note["embed"];
  related: {
    en: Note["related"];

  };
  ctas: {
    en: Note["ctas"];

  };
  en: {
    title: string;
    description: string;
    sections: NoteSection[];
    meta: PageMeta;
  };

};

const NOTES: NoteDef[] = [
  {
    slug: "enterprise-db-docker-qa",
    category: "Docker",
    tags: {
      en: ["Docker", "Docker Testing", "Test Infrastructure", "Dameng", "Highgo"]

    },
    proof: {
      en: "Live proof: 54k+ Docker pulls · 12 QA images · Dameng 29k+ / Highgo 16k+"

    },
    embed: {
      src: "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
      alt: "xuxuclassmate Docker Hub live stats",
      href: "https://hub.docker.com/u/xuxuclassmate"
    },
    related: {
      en: [
        { label: "Case study: Docker Suite", href: "/en/work/docker-suite" },
        {
          label: "Case study: Docker Hub API Gateway",
          href: "/en/work/docker-hub-api-gateway"
        },
        {
          label: "Live user stats JSON",
          href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate"
        }
      ]

    },
    ctas: {
      en: [
        {
          label: "Browse Docker Hub",
          href: "https://hub.docker.com/u/xuxuclassmate",
          primary: true,
          external: true
        },
        {
          label: "Open Docker Suite case",
          href: "/en/work/docker-suite"
        }
      ]

    },
    en: {
      title: "Building a Dockerized Test Environment: Dameng / Highgo for QA",
      description:
        "Stand up Dameng, Highgo, Kingbase, and TiDB in minutes — with live pull numbers, CI pin rules, and the failure modes that waste sprint days.",
      sections: [
        {
          id: "why",
          heading: "The real problem is not “can we install Dameng?”",
          paragraphs: [
            "In regulated and enterprise stacks, Dameng / Highgo / Kingbase show up as hard requirements. QA rarely fails because the database is mysterious — teams fail because the path to a working instance is tribal knowledge: bare-metal installers, missing packages, one-off VM snapshots, and “ask the DBA when he is free.”",
            "That tax shows up before a single assertion runs. New hires burn a day on environment. CI flakes on DB boot. Automation authors hard-code credentials into scripts because nobody documented a reusable contract. If Postgres can be pull → run → connect, these databases should feel the same for testers.",
            "This note is not a DBA handbook. It is the QA contract I optimized for: predictable tags, one service per container when possible, env-based credentials, and smoke connectivity before the full regression."
          ],
          callout: {
            title: "North star",
            body: "If a tester cannot boot the DB the same way they boot Postgres in CI, the “AI testing demo” on top of it is still a slide."
          }
        },
        {
          id: "numbers",
          heading: "What the numbers say (live on this site)",
          paragraphs: [
            "Under the xuxuclassmate Docker Hub namespace I keep a QA-oriented suite. Homepage metrics refresh from the Docker Hub API Gateway — the same gateway dogfooded by README embeds — so these are not brochure numbers.",
            "Dameng and Highgo dominate pull volume. That is the signal: teams reuse the painful databases first. Kingbase and TiDB matter for coverage, not vanity."
          ],
          stats: [
            {
              label: "Total pulls (namespace)",
              value: "54k+",
              metric: "docker:total-pulls",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate"
            },
            {
              label: "Published QA images",
              value: "12",
              metric: "docker:repo-count"
            },
            {
              label: "Dameng pulls",
              value: "29k+",
              metric: "docker:dameng",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=dameng"
            },
            {
              label: "Highgo pulls",
              value: "16k+",
              metric: "docker:highgo",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=highgo"
            },
            {
              label: "Kingbase pulls",
              value: "1.6k+",
              metric: "docker:kingbase",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=kingbase"
            },
            {
              label: "TiDB pulls",
              value: "900+",
              metric: "docker:tidb",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=tidb"
            }
          ],
          links: [
            {
              label: "Namespace on Docker Hub",
              href: "https://hub.docker.com/u/xuxuclassmate"
            },
            {
              label: "Gateway /api/user/stats",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate"
            }
          ]
        },
        {
          id: "design",
          heading: "Design choices that kept pulls climbing",
          paragraphs: [
            "I treat image names and tags as a public API. Clever tag schemes break CI the week a suite graduates from a laptop to a pipeline. Boring wins."
          ],
          bullets: [
            "One primary service per image when possible — failed boots stay diagnosable",
            "Predictable tags over “latest-everything”; pin in CI, float only locally",
            "Docs travel with the image so newcomers do not hunt internal wikis",
            "Same mental model across Dameng / Highgo / Kingbase / TiDB: pull → run → connect",
            "Publish early enough that pull volume can invalidate the idea — or prove it"
          ],
          callout: {
            title: "Tradeoff I accepted",
            body: "Less “platform magic,” more repeatable pull-and-run. Teams already know Docker; they do not need another abstraction layer to get a JDBC URL."
          }
        },
        {
          id: "workflow",
          heading: "Minimal workflow that survives CI",
          paragraphs: [
            "Pick the database your suite actually asserts against. Expose the port your clients already expect. Put credentials in env files — never in committed test code. Smoke-connect before the full Playwright / API regression so DB boot failures fail in seconds, not after twenty minutes of UI noise."
          ],
          code: {
            label: "Example shape (adapt ports / env to your image docs)",
            content: `# Pin a tag in CI — do not float on experiments
docker pull xuxuclassmate/dameng:<pinned-tag>
docker run -d --name qa-dameng \\
  -p 5236:5236 \\
  -e DM_PASSWORD=ChangeMe \\
  xuxuclassmate/dameng:<pinned-tag>

# Fail fast: connectivity smoke before the full suite
# (JDBC / SQL client / health endpoint — whatever your image documents)
`
          },
          bullets: [
            "Local: compose file shared with the team, same ports as CI",
            "CI: pinned digest or immutable tag; cache pulls when your runner allows",
            "Secrets: CI variables / sealed secrets — never screenshot passwords into chat",
            "Ordering: DB healthy → migrate/seed if needed → API smoke → UI regression"
          ]
        },
        {
          id: "failures",
          heading: "Failure modes I keep seeing",
          paragraphs: [
            "Most “flaky database CI” stories are environment contracts, not assertion bugs. Fix the contract once and whole suites calm down."
          ],
          bullets: [
            "Floating tags: Friday green, Monday red because upstream rebuilt latest",
            "Shared containers: two jobs fight for the same port on a self-hosted runner",
            "Hidden hostnames: tests use localhost locally and a docker network name in CI without abstraction",
            "Giant all-in-one images: when boot fails you cannot tell which process died",
            "No smoke step: full UI suite becomes the database health check"
          ]
        },
        {
          id: "stack",
          heading: "How this feeds AI tools and agent skills",
          paragraphs: [
            "AI Test Case Generator and ClawHub skills look impressive in demos. They are worthless if the environment underneath cannot boot for the team that owns the product. Reusable DB images are the boring layer that makes multimodal generators and review loops honest.",
            "The Docker Hub API Gateway exists for the same reason: README badges and this site’s homepage should read live pulls, not stale screenshots. Dogfooding the gateway keeps the proof honest."
          ],
          links: [
            {
              label: "Docker Suite case study",
              href: "/en/work/docker-suite"
            },
            {
              label: "Docker Hub API Gateway case study",
              href: "/en/work/docker-hub-api-gateway"
            }
          ]
        },
        {
          id: "checklist",
          heading: "Ship checklist before you call an image “ready for QA”",
          bullets: [
            "A stranger can pull and run from the Docker Hub page without a private wiki",
            "Tag policy is written: what is pinned in CI vs experimental",
            "Credentials are env-driven; defaults are documented and non-production",
            "There is a one-command smoke connect path",
            "Pull counts are visible — if nobody pulls, you do not know if the pain was real"
          ]
        }
      ],
      meta: {
        title:
          "Building a Dockerized Test Environment: Dameng / Highgo for QA | XuXuClassMate",
        description:
          "QA Engineer field guide to Docker Testing with Dameng and Highgo — pull-and-run images, CI stability, and live Docker Hub proof.",
        keywords:
          "Docker Testing, Test Infrastructure, Dameng Docker, Highgo Docker, QA Engineer, XuXuClassMate"
      }
    }

  },
  {
    slug: "clawhub-skill-shipping",
    category: "OpenClaw",
    tags: {
      en: ["OpenClaw", "ClawHub", "AI Testing", "DevOps"]

    },
    proof: {
      en: "Live proof: 7.3k+ ClawHub downloads across all skills · Test Case Generator 800+ · Trading Assistant 1k+"

    },
    related: {
      en: [
        {
          label: "Case study: AI Test Case Generator",
          href: "/en/work/testcase-generator"
        },
        {
          label: "Case study: Trading Assistant Core",
          href: "/en/work/trading-assistant"
        },
        {
          label: "ClawHub profile",
          href: "https://clawhub.ai/xuxuclassmate"
        }
      ]

    },
    ctas: {
      en: [
        {
          label: "Open ClawHub profile",
          href: "https://clawhub.ai/xuxuclassmate",
          primary: true,
          external: true
        },
        {
          label: "Test Case Generator skill",
          href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          external: true
        },
        {
          label: "Trading Assistant skill",
          href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          external: true
        }
      ]

    },
    en: {
      title: "Shipping ClawHub skills that agents (and humans) actually install",
      description:
        "How AI Test Case Generator and Trading Assistant Core crossed the demo→install line — with live download counts, packaging matrix, review-loop tradeoffs, and a release gate I refuse to skip.",
      sections: [
        {
          id: "bar",
          heading: "The bar: installable beats impressive",
          paragraphs: [
            "A prompt pasted into a chat window is not a product. An OpenClaw skill that agents can install from ClawHub — with a version, a failure mode, and a non-agent escape hatch — is closer to shipping.",
            "I use a blunt gate before I call something done: Can a stranger install it from ClawHub in one flow? Can a human without an agent runtime still run it via Docker / CLI? Are downloads visible so I cannot lie to myself with GitHub stars?",
            "AI Test Case Generator and Trading Assistant Core both cleared that gate. The rest of this note is the concrete packaging and product decisions behind the download curve."
          ],
          callout: {
            title: "Definition of shipped",
            body: "Named skill + install path + human fallback + measurable installs. Missing any one → still a demo."
          }
        },
        {
          id: "numbers",
          heading: "Download proof (refreshed on the homepage)",
          paragraphs: [
            "ClawHub downloads are the metric I trust more than repository stars. Stars are optional social proof. Installs mean an agent runtime or a curious human pulled the package.",
            "Trading Assistant Core and the AI Test Case Generator remain flagship installs, but the homepage total now sums every skill under the profile — currently 7.3k+ downloads, refreshed live via /api/metrics."
          ],
          stats: [
            {
              label: "ClawHub total downloads",
              value: "7.3k+",
              metric: "clawhub:total-downloads",
              href: "https://clawhub.ai/xuxuclassmate"
            },
            {
              label: "AI Test Case Generator",
              value: "800+",
              metric: "clawhub:ai-testcase-generator",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator"
            },
            {
              label: "Trading Assistant Core",
              value: "1k+",
              metric: "clawhub:trading-assistant-core",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core"
            }
          ],
          links: [
            {
              label: "ClawHub: ai-testcase-generator",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator"
            },
            {
              label: "ClawHub: trading-assistant-core",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core"
            }
          ]
        },
        {
          id: "testcase",
          heading: "Case A — AI Test Case Generator",
          paragraphs: [
            "QA teams drown in PDFs, screenshots, and half-written notes. Raw LLM dumps create more review debt than coverage. The product bet was multimodal intake plus a Test / Dev / Product review loop, then packaging that loop for agents and humans.",
            "Distribution is intentionally redundant: ClawHub for agents, Docker Hub for laptop / CI runs, npm for JS-native workflows. One pipeline, three install surfaces — not three demos."
          ],
          bullets: [
            "Inputs: PDF / Word / images / video — not text-only prompts",
            "Review personas reduce noisy drafts before export",
            "Exports teams already use: Excel / Markdown / XMind",
            "Tradeoff: slower first answers in exchange for reviewable artifacts"
          ],
          links: [
            {
              label: "GitHub repository",
              href: "https://github.com/InnoNestX/testcase-generator"
            },
            {
              label: "Docker image",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator"
            },
            {
              label: "Case study",
              href: "/en/work/testcase-generator"
            }
          ]
        },
        {
          id: "trading",
          heading: "Case B — Trading Assistant Core",
          paragraphs: [
            "Trading workflows were stuck in notebooks and chat prompts. Agents could not install a durable skill with clear risk guardrails. Shipping a “signal fireworks” skill would have been irresponsible.",
            "The skill packages support/resistance, multi-indicator signals, position sizing, and risk alerts — with risk-first defaults. CLI and Docker remain for people who are not inside an agent runtime."
          ],
          bullets: [
            "Risk sizing and alerts outrank flashy entry calls",
            "ClawHub install for agents; CLI / Docker for humans",
            "Same logic across surfaces — avoid “agent-only truth”",
            "Downloads ~900+ — stronger signal than a polished landing page alone"
          ],
          links: [
            {
              label: "GitHub repository",
              href: "https://github.com/InnoNestX/trading-assistant"
            },
            {
              label: "Case study",
              href: "/en/work/trading-assistant"
            }
          ]
        },
        {
          id: "matrix",
          heading: "Packaging matrix I refuse to shrink",
          paragraphs: [
            "Every serious skill gets at least two paths: agent install and human install. Shrinking to ClawHub-only feels modern until a teammate without the runtime needs to reproduce a bug."
          ],
          code: {
            label: "Release matrix (conceptual)",
            content: `Surface          Test Case Generator     Trading Assistant
---------------  ----------------------  --------------------
ClawHub skill    required                required
Docker image     required                required
CLI / pip/npm    npm path                pip / CLI path
Docs + failures  required                required
Live metric      ClawHub downloads       ClawHub downloads
`
          },
          callout: {
            title: "Anti-pattern",
            body: "“It works in my agent chat” is not a release. If installs are not measurable, you will optimize for demos forever."
          }
        },
        {
          id: "loop",
          heading: "Review loops beat hotter models",
          paragraphs: [
            "For testcase generation, the quality jump did not come from chasing the newest model name. It came from forcing Test / Dev / Product perspectives before export. Drafts got quieter; QA leads accepted more of them.",
            "For trading, the quality jump was saying no to signal-only packaging. An installable skill that only shouts entries is a liability. Defaults that emphasize sizing and risk are slower to market — and safer to put on ClawHub."
          ]
        },
        {
          id: "gate",
          heading: "Release gate (copy this)",
          paragraphs: [
            "Before each publish I answer four questions out loud. Any “no” blocks the release — even if the demo video looks great."
          ],
          bullets: [
            "ClawHub: can a stranger install in one documented flow?",
            "Human path: Docker or CLI works without the agent runtime?",
            "Failure mode: is the first error message actionable?",
            "Metric: will downloads show up somewhere I check weekly?"
          ],
          callout: {
            title: "Weekly habit",
            body: "I read ClawHub download deltas the same way I read Docker pulls — as a product health check, not a vanity dashboard."
          }
        },
        {
          id: "next",
          heading: "What I optimize next",
          paragraphs: [
            "More skills are useless if the install bar drops. The next investments are clearer failure docs, tighter versioning notes on ClawHub, and keeping Docker / CLI paths in lockstep with skill releases so agents and humans never diverge.",
            "If you are packaging your own OpenClaw skill: publish the install path first, then the clever prompt. The download curve will tell you whether you shipped a product or a performance."
          ]
        }
      ],
      meta: {
        title: "Shipping OpenClaw / ClawHub Skills | XuXuClassMate",
        description:
          "How XuXuClassMate ships installable ClawHub skills with live download proof, Docker/CLI fallbacks, and a hard release gate — not slideware demos.",
        keywords:
          "ClawHub, OpenClaw skill, AI test case generator, trading assistant, skill packaging, XuXuClassMate"
      }
    }

  }
];

export function getNotes(_locale: "en"): Note[] {
  const fieldGuides = NOTES.map((note) => {
    const copy = note.en;
    return {
      slug: note.slug,
      title: copy.title,
      description: copy.description,
      category: note.category,
      proof: note.proof.en,
      tags: note.tags.en,
      sections: copy.sections,
      related: note.related.en,
      ctas: note.ctas.en,
      embed: note.embed,
      meta: copy.meta
    } satisfies Note;
  });

  const landings = ENGINEERING_ARTICLES.map((article) => toNote(article));
  return [...landings, ...fieldGuides];
}

export function getNote(_locale: "en", slug: string): Note | undefined {
  return getNotes("en").find((note) => note.slug === slug);
}

export const NOTE_SLUGS = [
  ...ENGINEERING_ARTICLES.map((article) => article.slug),
  ...NOTES.map((note) => note.slug)
];
