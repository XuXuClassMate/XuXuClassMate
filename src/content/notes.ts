import type { Note, NoteCategory, NoteSection, PageMeta } from "./types";
import {
  ENGINEERING_ARTICLES,
  NOTE_CATEGORIES,
  toNote,
} from "./engineering-articles";

export { NOTE_CATEGORIES };

type NoteDef = {
  slug: Note["slug"];
  category: NoteCategory;
  tags: { en: string[]; zh: string[] };
  proof: { en: string; zh: string };
  embed?: Note["embed"];
  related: {
    en: Note["related"];
    zh: Note["related"];
  };
  ctas: {
    en: Note["ctas"];
    zh: Note["ctas"];
  };
  en: {
    title: string;
    description: string;
    sections: NoteSection[];
    meta: PageMeta;
  };
  zh: {
    title: string;
    description: string;
    sections: NoteSection[];
    meta: PageMeta;
  };
};

const NOTES: NoteDef[] = [
  {
    slug: "domestic-db-docker-qa",
    category: "Docker",
    tags: {
      en: ["Docker", "Docker Testing", "Test Infrastructure", "Dameng", "Highgo"],
      zh: ["Docker", "Docker Testing", "Test Infrastructure", "达梦", "瀚高"],
    },
    proof: {
      en: "Live proof: 54k+ Docker pulls · 12 QA images · Dameng 29k+ / Highgo 16k+",
      zh: "实时证据：Docker 总拉取 54k+ · 12 个 QA 镜像 · 达梦 29k+ / 瀚高 16k+",
    },
    embed: {
      src: "https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate",
      alt: "xuxuclassmate Docker Hub live stats",
      href: "https://hub.docker.com/u/xuxuclassmate",
    },
    related: {
      en: [
        { label: "Case study: Docker Suite", href: "/en/work/docker-suite" },
        {
          label: "Case study: Docker Hub API Gateway",
          href: "/en/work/docker-hub-api-gateway",
        },
        {
          label: "Live user stats JSON",
          href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
        },
      ],
      zh: [
        { label: "案例：Docker 测试库套件", href: "/zh/work/docker-suite" },
        {
          label: "案例：Docker Hub API Gateway",
          href: "/zh/work/docker-hub-api-gateway",
        },
        {
          label: "实时用户统计 JSON",
          href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
        },
      ],
    },
    ctas: {
      en: [
        {
          label: "Browse Docker Hub",
          href: "https://hub.docker.com/u/xuxuclassmate",
          primary: true,
          external: true,
        },
        {
          label: "Open Docker Suite case",
          href: "/en/work/docker-suite",
        },
      ],
      zh: [
        {
          label: "打开 Docker Hub",
          href: "https://hub.docker.com/u/xuxuclassmate",
          primary: true,
          external: true,
        },
        {
          label: "查看 Docker 套件案例",
          href: "/zh/work/docker-suite",
        },
      ],
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
            "This note is not a DBA handbook. It is the QA contract I optimized for: predictable tags, one service per container when possible, env-based credentials, and smoke connectivity before the full regression.",
          ],
          callout: {
            title: "North star",
            body: "If a tester cannot boot the DB the same way they boot Postgres in CI, the “AI testing demo” on top of it is still a slide.",
          },
        },
        {
          id: "numbers",
          heading: "What the numbers say (live on this site)",
          paragraphs: [
            "Under the xuxuclassmate Docker Hub namespace I keep a QA-oriented suite. Homepage metrics refresh from the Docker Hub API Gateway — the same gateway dogfooded by README embeds — so these are not brochure numbers.",
            "Dameng and Highgo dominate pull volume. That is the signal: teams reuse the painful databases first. Kingbase and TiDB matter for coverage, not vanity.",
          ],
          stats: [
            {
              label: "Total pulls (namespace)",
              value: "54k+",
              metric: "docker:total-pulls",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            },
            {
              label: "Published QA images",
              value: "12",
              metric: "docker:repo-count",
            },
            {
              label: "Dameng pulls",
              value: "29k+",
              metric: "docker:dameng",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=dameng",
            },
            {
              label: "Highgo pulls",
              value: "16k+",
              metric: "docker:highgo",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=highgo",
            },
            {
              label: "Kingbase pulls",
              value: "1.6k+",
              metric: "docker:kingbase",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=kingbase",
            },
            {
              label: "TiDB pulls",
              value: "900+",
              metric: "docker:tidb",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=tidb",
            },
          ],
          links: [
            {
              label: "Namespace on Docker Hub",
              href: "https://hub.docker.com/u/xuxuclassmate",
            },
            {
              label: "Gateway /api/user/stats",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            },
          ],
        },
        {
          id: "design",
          heading: "Design choices that kept pulls climbing",
          paragraphs: [
            "I treat image names and tags as a public API. Clever tag schemes break CI the week a suite graduates from a laptop to a pipeline. Boring wins.",
          ],
          bullets: [
            "One primary service per image when possible — failed boots stay diagnosable",
            "Predictable tags over “latest-everything”; pin in CI, float only locally",
            "Docs travel with the image so newcomers do not hunt internal wikis",
            "Same mental model across Dameng / Highgo / Kingbase / TiDB: pull → run → connect",
            "Publish early enough that pull volume can invalidate the idea — or prove it",
          ],
          callout: {
            title: "Tradeoff I accepted",
            body: "Less “platform magic,” more repeatable pull-and-run. Teams already know Docker; they do not need another abstraction layer to get a JDBC URL.",
          },
        },
        {
          id: "workflow",
          heading: "Minimal workflow that survives CI",
          paragraphs: [
            "Pick the database your suite actually asserts against. Expose the port your clients already expect. Put credentials in env files — never in committed test code. Smoke-connect before the full Playwright / API regression so DB boot failures fail in seconds, not after twenty minutes of UI noise.",
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
`,
          },
          bullets: [
            "Local: compose file shared with the team, same ports as CI",
            "CI: pinned digest or immutable tag; cache pulls when your runner allows",
            "Secrets: CI variables / sealed secrets — never screenshot passwords into chat",
            "Ordering: DB healthy → migrate/seed if needed → API smoke → UI regression",
          ],
        },
        {
          id: "failures",
          heading: "Failure modes I keep seeing",
          paragraphs: [
            "Most “flaky database CI” stories are environment contracts, not assertion bugs. Fix the contract once and whole suites calm down.",
          ],
          bullets: [
            "Floating tags: Friday green, Monday red because upstream rebuilt latest",
            "Shared containers: two jobs fight for the same port on a self-hosted runner",
            "Hidden hostnames: tests use localhost locally and a docker network name in CI without abstraction",
            "Giant all-in-one images: when boot fails you cannot tell which process died",
            "No smoke step: full UI suite becomes the database health check",
          ],
        },
        {
          id: "stack",
          heading: "How this feeds AI tools and agent skills",
          paragraphs: [
            "AI Test Case Generator and ClawHub skills look impressive in demos. They are worthless if the environment underneath cannot boot for the team that owns the product. Reusable DB images are the boring layer that makes multimodal generators and review loops honest.",
            "The Docker Hub API Gateway exists for the same reason: README badges and this site’s homepage should read live pulls, not stale screenshots. Dogfooding the gateway keeps the proof honest.",
          ],
          links: [
            {
              label: "Docker Suite case study",
              href: "/en/work/docker-suite",
            },
            {
              label: "Docker Hub API Gateway case study",
              href: "/en/work/docker-hub-api-gateway",
            },
          ],
        },
        {
          id: "checklist",
          heading: "Ship checklist before you call an image “ready for QA”",
          bullets: [
            "A stranger can pull and run from the Docker Hub page without a private wiki",
            "Tag policy is written: what is pinned in CI vs experimental",
            "Credentials are env-driven; defaults are documented and non-production",
            "There is a one-command smoke connect path",
            "Pull counts are visible — if nobody pulls, you do not know if the pain was real",
          ],
        },
      ],
      meta: {
        title:
          "Building a Dockerized Test Environment: Dameng / Highgo for QA | XuXuClassMate",
        description:
          "QA Engineer field guide to Docker Testing with Dameng and Highgo — pull-and-run images, CI stability, and live Docker Hub proof.",
        keywords:
          "Docker Testing, Test Infrastructure, Dameng Docker, Highgo Docker, QA Engineer, XuXuClassMate",
      },
    },
    zh: {
      title: "数据库 Docker 给 QA：达梦 / 瀚高少交安装税",
      description:
        "几分钟拉起达梦、瀚高、人大金仓、TiDB——附实时拉取量、CI 钉标签规则，以及那些烧掉冲刺天数的失败模式。",
      sections: [
        {
          id: "why",
          heading: "真正的问题不是「达梦能不能装」",
          paragraphs: [
            "在政企与合规栈里，达梦 / 瀚高 / 人大金仓经常是硬性要求。QA 很少死在「库很神秘」上——死在通往可用实例的路径全靠口口相传：裸机安装包、缺依赖、一次性虚拟机快照，以及「等 DBA 有空」。",
            "这税在第一条断言跑起来之前就已经交了。新人环境要一天；CI 在数据库启动阶段就抖；自动化作者把账号密码写进脚本，因为没人留下可复用的约定。如果 Postgres 能 pull → run → connect，这些数据库对测试也应该是同一套体感。",
            "这篇不是 DBA 手册。我优化的是 QA 契约：可预期的标签、尽量一容器一服务、凭据走环境变量、全量回归前先做连通性冒烟。",
          ],
          callout: {
            title: "北极星",
            body: "如果测试同学不能像起 Postgres 一样在 CI 里起数据库，上面的「AI 测试演示」就还是幻灯片。",
          },
        },
        {
          id: "numbers",
          heading: "数字怎么说（本站实时刷新）",
          paragraphs: [
            "在 Docker Hub 的 xuxuclassmate 命名空间下，我维护一套面向 QA 的镜像。首页指标经 Docker Hub API Gateway 刷新——README 徽章也走同一网关——所以不是宣传册数字。",
            "达梦与瀚高贡献主要拉取量。这是信号：团队会先复用最痛的库。人大金仓与 TiDB 负责覆盖面，不是面子工程。",
          ],
          stats: [
            {
              label: "命名空间总拉取",
              value: "54k+",
              metric: "docker:total-pulls",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            },
            {
              label: "已发布 QA 镜像",
              value: "12",
              metric: "docker:repo-count",
            },
            {
              label: "达梦拉取",
              value: "29k+",
              metric: "docker:dameng",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=dameng",
            },
            {
              label: "瀚高拉取",
              value: "16k+",
              metric: "docker:highgo",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=highgo",
            },
            {
              label: "人大金仓拉取",
              value: "1.6k+",
              metric: "docker:kingbase",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=kingbase",
            },
            {
              label: "TiDB 拉取",
              value: "900+",
              metric: "docker:tidb",
              href: "https://docker-hub-pull-counter.vercel.app/api/repo/details?namespace=xuxuclassmate&repo=tidb",
            },
          ],
          links: [
            {
              label: "Docker Hub 命名空间",
              href: "https://hub.docker.com/u/xuxuclassmate",
            },
            {
              label: "网关 /api/user/stats",
              href: "https://docker-hub-pull-counter.vercel.app/api/user/stats?username=xuxuclassmate",
            },
          ],
        },
        {
          id: "design",
          heading: "让拉取量持续上涨的设计取舍",
          paragraphs: [
            "我把镜像名和标签当成公开 API。花哨的标签方案会在套件从笔记本毕业到流水线的那周炸掉。无聊反而赢。",
          ],
          bullets: [
            "尽量一镜像一主服务——启动失败更好定位",
            "可预期标签优先于「什么都 latest」；CI 钉死，本地实验再浮动",
            "文档跟镜像走，避免新人满世界找内部 Wiki",
            "达梦 / 瀚高 / 金仓 / TiDB 统一心智：拉取 → 启动 → 连接",
            "尽早发布，让拉取量证伪或证实痛点——不要只活在演示里",
          ],
          callout: {
            title: "我接受的取舍",
            body: "少一点「平台魔法」，多一点可重复的 pull-and-run。团队已经会 Docker；他们不需要再学一层抽象才能拿到 JDBC URL。",
          },
        },
        {
          id: "workflow",
          heading: "能活过 CI 的最小工作流",
          paragraphs: [
            "选你真正断言的那套库。暴露客户端已期望的端口。凭据放环境变量——永远不要写进提交的测试代码。全量 Playwright / 接口回归前先做连通性冒烟，让数据库启动问题在几秒内失败，而不是二十分钟 UI 噪音之后。",
          ],
          code: {
            label: "示例骨架（端口 / 环境变量按镜像文档调整）",
            content: `# CI 钉标签——不要在实验标签上漂
docker pull xuxuclassmate/dameng:<pinned-tag>
docker run -d --name qa-dameng \\
  -p 5236:5236 \\
  -e DM_PASSWORD=ChangeMe \\
  xuxuclassmate/dameng:<pinned-tag>

# 快速失败：全量套件前先做连通性冒烟
#（JDBC / SQL 客户端 / 健康检查——以镜像文档为准）
`,
          },
          bullets: [
            "本地：团队共享 compose，端口与 CI 一致",
            "CI：钉死 digest 或不可变标签；runner 允许则缓存拉取",
            "密钥：CI 变量 / 密封密钥——不要把密码截图丢进群聊",
            "顺序：库健康 → 如需则迁移/造数 → 接口冒烟 → UI 回归",
          ],
        },
        {
          id: "failures",
          heading: "我反复看到的失败模式",
          paragraphs: [
            "大多数「数据库 CI 不稳定」故事，本质是环境契约问题，不是断言写错。契约修一次，整组套件都会安静下来。",
          ],
          bullets: [
            "浮动标签：周五绿、周一红，因为上游重建了 latest",
            "共享容器：自托管 runner 上两个任务抢同一端口",
            "隐藏主机名：本地用 localhost、CI 用 docker 网络名，却没有抽象层",
            "巨型全家桶镜像：启动失败时分不清是哪个进程挂了",
            "没有冒烟步骤：整份 UI 套件变成了数据库健康检查",
          ],
        },
        {
          id: "stack",
          heading: "如何支撑 AI 工具与 Agent 技能",
          paragraphs: [
            "用例生成器和 ClawHub 技能在演示里很亮眼。如果底下的环境团队起不来，它们就没有价值。可复用数据库镜像是让多模态生成和评审闭环「诚实」的那层无聊底座。",
            "Docker Hub API Gateway 也是同一理由：README 徽章和本站首页应该读实时拉取，而不是过期截图。自用网关，证据才站得住。",
          ],
          links: [
            {
              label: "Docker 套件案例",
              href: "/zh/work/docker-suite",
            },
            {
              label: "Docker Hub API Gateway 案例",
              href: "/zh/work/docker-hub-api-gateway",
            },
          ],
        },
        {
          id: "checklist",
          heading: "镜像「算给 QA 准备好了」之前的清单",
          bullets: [
            "陌生人只看 Docker Hub 页就能拉取启动，不依赖私有 Wiki",
            "标签策略写清楚：CI 钉什么、实验漂什么",
            "凭据走环境变量；默认值有文档且非生产",
            "有一条命令级连通性冒烟路径",
            "拉取量可见——没人拉，你就不知道痛点是否真实",
          ],
        },
      ],
      meta: {
        title: "达梦 / 瀚高 Docker 测试环境 | 旭旭同学",
        description:
          "面向 QA 与 CI 的达梦、瀚高、人大金仓、TiDB 可复用 Docker 实践——含实时拉取指标与失败模式清单。",
        keywords: "达梦 Docker, 瀚高 Docker, 人大金仓, 测试环境, 数据库 Docker, 旭旭同学",
      },
    },
  },
  {
    slug: "clawhub-skill-shipping",
    category: "OpenClaw",
    tags: {
      en: ["OpenClaw", "ClawHub", "AI Testing", "DevOps"],
      zh: ["OpenClaw", "ClawHub", "AI Testing", "DevOps"],
    },
    proof: {
      en: "Live proof: 1.6k+ ClawHub downloads · Test Case Generator 700+ · Trading Assistant 900+",
      zh: "实时证据：ClawHub 总下载 1.6k+ · 用例生成器 700+ · Trading Assistant 900+",
    },
    related: {
      en: [
        {
          label: "Case study: AI Test Case Generator",
          href: "/en/work/testcase-generator",
        },
        {
          label: "Case study: Trading Assistant Core",
          href: "/en/work/trading-assistant",
        },
        {
          label: "ClawHub profile",
          href: "https://clawhub.ai/xuxuclassmate",
        },
      ],
      zh: [
        {
          label: "案例：AI 用例生成器",
          href: "/zh/work/testcase-generator",
        },
        {
          label: "案例：Trading Assistant Core",
          href: "/zh/work/trading-assistant",
        },
        {
          label: "ClawHub 主页",
          href: "https://clawhub.ai/xuxuclassmate",
        },
      ],
    },
    ctas: {
      en: [
        {
          label: "Open ClawHub profile",
          href: "https://clawhub.ai/xuxuclassmate",
          primary: true,
          external: true,
        },
        {
          label: "Test Case Generator skill",
          href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          external: true,
        },
        {
          label: "Trading Assistant skill",
          href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          external: true,
        },
      ],
      zh: [
        {
          label: "打开 ClawHub 主页",
          href: "https://clawhub.ai/xuxuclassmate",
          primary: true,
          external: true,
        },
        {
          label: "用例生成器技能",
          href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
          external: true,
        },
        {
          label: "Trading Assistant 技能",
          href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
          external: true,
        },
      ],
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
            "AI Test Case Generator and Trading Assistant Core both cleared that gate. The rest of this note is the concrete packaging and product decisions behind the download curve.",
          ],
          callout: {
            title: "Definition of shipped",
            body: "Named skill + install path + human fallback + measurable installs. Missing any one → still a demo.",
          },
        },
        {
          id: "numbers",
          heading: "Download proof (refreshed on the homepage)",
          paragraphs: [
            "ClawHub downloads are the metric I trust more than repository stars. Stars are optional social proof. Installs mean an agent runtime or a curious human pulled the package.",
            "Trading Assistant Core currently leads on installs; Test Case Generator follows close behind. Together they clear 1.6k+ downloads on the profile — numbers this site refreshes live via /api/metrics.",
          ],
          stats: [
            {
              label: "ClawHub total downloads",
              value: "1.6k+",
              metric: "clawhub:total-downloads",
              href: "https://clawhub.ai/xuxuclassmate",
            },
            {
              label: "AI Test Case Generator",
              value: "700+",
              metric: "clawhub:ai-testcase-generator",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
            {
              label: "Trading Assistant Core",
              value: "900+",
              metric: "clawhub:trading-assistant-core",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            },
          ],
          links: [
            {
              label: "ClawHub: ai-testcase-generator",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
            {
              label: "ClawHub: trading-assistant-core",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            },
          ],
        },
        {
          id: "testcase",
          heading: "Case A — AI Test Case Generator",
          paragraphs: [
            "QA teams drown in PDFs, screenshots, and half-written notes. Raw LLM dumps create more review debt than coverage. The product bet was multimodal intake plus a Test / Dev / Product review loop, then packaging that loop for agents and humans.",
            "Distribution is intentionally redundant: ClawHub for agents, Docker Hub for laptop / CI runs, npm for JS-native workflows. One pipeline, three install surfaces — not three demos.",
          ],
          bullets: [
            "Inputs: PDF / Word / images / video — not text-only prompts",
            "Review personas reduce noisy drafts before export",
            "Exports teams already use: Excel / Markdown / XMind",
            "Tradeoff: slower first answers in exchange for reviewable artifacts",
          ],
          links: [
            {
              label: "GitHub repository",
              href: "https://github.com/InnoNestX/testcase-generator",
            },
            {
              label: "Docker image",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            },
            {
              label: "Case study",
              href: "/en/work/testcase-generator",
            },
          ],
        },
        {
          id: "trading",
          heading: "Case B — Trading Assistant Core",
          paragraphs: [
            "Trading workflows were stuck in notebooks and chat prompts. Agents could not install a durable skill with clear risk guardrails. Shipping a “signal fireworks” skill would have been irresponsible.",
            "The skill packages support/resistance, multi-indicator signals, position sizing, and risk alerts — with risk-first defaults. CLI and Docker remain for people who are not inside an agent runtime.",
          ],
          bullets: [
            "Risk sizing and alerts outrank flashy entry calls",
            "ClawHub install for agents; CLI / Docker for humans",
            "Same logic across surfaces — avoid “agent-only truth”",
            "Downloads ~900+ — stronger signal than a polished landing page alone",
          ],
          links: [
            {
              label: "GitHub repository",
              href: "https://github.com/InnoNestX/trading-assistant",
            },
            {
              label: "Case study",
              href: "/en/work/trading-assistant",
            },
          ],
        },
        {
          id: "matrix",
          heading: "Packaging matrix I refuse to shrink",
          paragraphs: [
            "Every serious skill gets at least two paths: agent install and human install. Shrinking to ClawHub-only feels modern until a teammate without the runtime needs to reproduce a bug.",
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
`,
          },
          callout: {
            title: "Anti-pattern",
            body: "“It works in my agent chat” is not a release. If installs are not measurable, you will optimize for demos forever.",
          },
        },
        {
          id: "loop",
          heading: "Review loops beat hotter models",
          paragraphs: [
            "For testcase generation, the quality jump did not come from chasing the newest model name. It came from forcing Test / Dev / Product perspectives before export. Drafts got quieter; QA leads accepted more of them.",
            "For trading, the quality jump was saying no to signal-only packaging. An installable skill that only shouts entries is a liability. Defaults that emphasize sizing and risk are slower to market — and safer to put on ClawHub.",
          ],
        },
        {
          id: "gate",
          heading: "Release gate (copy this)",
          paragraphs: [
            "Before each publish I answer four questions out loud. Any “no” blocks the release — even if the demo video looks great.",
          ],
          bullets: [
            "ClawHub: can a stranger install in one documented flow?",
            "Human path: Docker or CLI works without the agent runtime?",
            "Failure mode: is the first error message actionable?",
            "Metric: will downloads show up somewhere I check weekly?",
          ],
          callout: {
            title: "Weekly habit",
            body: "I read ClawHub download deltas the same way I read Docker pulls — as a product health check, not a vanity dashboard.",
          },
        },
        {
          id: "next",
          heading: "What I optimize next",
          paragraphs: [
            "More skills are useless if the install bar drops. The next investments are clearer failure docs, tighter versioning notes on ClawHub, and keeping Docker / CLI paths in lockstep with skill releases so agents and humans never diverge.",
            "If you are packaging your own OpenClaw skill: publish the install path first, then the clever prompt. The download curve will tell you whether you shipped a product or a performance.",
          ],
        },
      ],
      meta: {
        title: "Shipping OpenClaw / ClawHub Skills | XuXuClassMate",
        description:
          "How XuXuClassMate ships installable ClawHub skills with live download proof, Docker/CLI fallbacks, and a hard release gate — not slideware demos.",
        keywords:
          "ClawHub, OpenClaw skill, AI test case generator, trading assistant, skill packaging, XuXuClassMate",
      },
    },
    zh: {
      title: "把 ClawHub 技能做到 Agent（和人）真会安装",
      description:
        "AI 用例生成器与 Trading Assistant Core 如何跨过「演示→可安装」：含实时下载量、打包矩阵、评审闭环取舍，以及我拒绝跳过的发布门禁。",
      sections: [
        {
          id: "bar",
          heading: "标准：可安装，大于好看",
          paragraphs: [
            "聊天窗口里粘贴的一段提示词不是产品。Agent 能从 ClawHub 安装的 OpenClaw 技能——有版本、有失败模式、还有非 Agent 逃生通道——才更接近交付。",
            "我用一套很钝的门禁判断算不算做完：陌生人能否在 ClawHub 一条路径装上？没有 Agent 运行时的人，能否用 Docker / CLI 跑起来？下载量是否可见，好让我没法用 GitHub star 骗自己？",
            "用例生成器与 Trading Assistant Core 都过了这道门。下面写的是下载曲线背后的打包与产品决策。",
          ],
          callout: {
            title: "「已交付」的定义",
            body: "有名字的技能 + 安装路径 + 人可用的回退路径 + 可度量的安装。缺一项 → 仍是演示。",
          },
        },
        {
          id: "numbers",
          heading: "下载证据（首页实时刷新）",
          paragraphs: [
            "ClawHub 下载量比仓库 star 更可信。Star 是可选的社交证明；下载意味着 Agent 运行时或好奇的人真的拉了包。",
            "目前 Trading Assistant Core 安装领先，用例生成器紧随其后。两者合计超过 1.6k+ 下载——本站经 /api/metrics 实时刷新。",
          ],
          stats: [
            {
              label: "ClawHub 总下载",
              value: "1.6k+",
              metric: "clawhub:total-downloads",
              href: "https://clawhub.ai/xuxuclassmate",
            },
            {
              label: "AI 用例生成器",
              value: "700+",
              metric: "clawhub:ai-testcase-generator",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
            {
              label: "Trading Assistant Core",
              value: "900+",
              metric: "clawhub:trading-assistant-core",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            },
          ],
          links: [
            {
              label: "ClawHub: ai-testcase-generator",
              href: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
            },
            {
              label: "ClawHub: trading-assistant-core",
              href: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
            },
          ],
        },
        {
          id: "testcase",
          heading: "案例 A — AI 用例生成器",
          paragraphs: [
            "QA 淹没在 PDF、截图和半成品说明里。裸 LLM 倾倒只会制造更多评审债务，而不是覆盖率。产品赌注是：多模态输入 + 测试/开发/产品三角色评审，再把闭环打包给 Agent 与人。",
            "分发故意冗余：ClawHub 给 Agent，Docker Hub 给笔记本 / CI，npm 给 JS 原生工作流。一条流水线，三个安装面——不是三套演示。",
          ],
          bullets: [
            "输入：PDF / Word / 图片 / 视频——不是纯文本提示词",
            "评审角色在导出前压低噪音草稿",
            "导出团队已在用的 Excel / Markdown / XMind",
            "取舍：接受首答稍慢，换可评审的产物",
          ],
          links: [
            {
              label: "GitHub 仓库",
              href: "https://github.com/InnoNestX/testcase-generator",
            },
            {
              label: "Docker 镜像",
              href: "https://hub.docker.com/r/xuxuclassmate/testcase-generator",
            },
            {
              label: "案例页",
              href: "/zh/work/testcase-generator",
            },
          ],
        },
        {
          id: "trading",
          heading: "案例 B — Trading Assistant Core",
          paragraphs: [
            "交易工作流卡在笔记本和聊天提示词里。Agent 装不到带风险护栏的耐久技能。如果只发「信号烟花」技能，那是不负责任。",
            "技能打包了支撑/阻力、多指标信号、仓位与风险提醒——默认值风险优先。CLI 与 Docker 留给不在 Agent 运行时里的人。",
          ],
          bullets: [
            "仓位与风险提醒优先于花哨进场喊单",
            "ClawHub 给 Agent；CLI / Docker 给人",
            "多表面同一套逻辑——避免「只有 Agent 知道真相」",
            "下载约 900+——比单独漂亮落地页更强的信号",
          ],
          links: [
            {
              label: "GitHub 仓库",
              href: "https://github.com/InnoNestX/trading-assistant",
            },
            {
              label: "案例页",
              href: "/zh/work/trading-assistant",
            },
          ],
        },
        {
          id: "matrix",
          heading: "我拒绝缩水的打包矩阵",
          paragraphs: [
            "每个认真的技能至少两条路径：Agent 安装 + 人安装。缩成「只上 ClawHub」看起来很新潮，直到没有运行时的同事要复现一个 bug。",
          ],
          code: {
            label: "发布矩阵（示意）",
            content: `表面              用例生成器              Trading Assistant
---------------  ----------------------  --------------------
ClawHub 技能      必须                    必须
Docker 镜像       必须                    必须
CLI / pip/npm     npm 路径                pip / CLI 路径
文档 + 失败模式   必须                    必须
实时指标          ClawHub 下载            ClawHub 下载
`,
          },
          callout: {
            title: "反模式",
            body: "「在我的 Agent 聊天里能跑」不是发布。如果安装不可度量，你会永远优化演示。",
          },
        },
        {
          id: "loop",
          heading: "评审闭环，大于追更新的模型名",
          paragraphs: [
            "用例生成的质量跃迁，不是来自追最新模型名，而是导出前强制测试/开发/产品视角。草稿更安静，QA 负责人接受得更多。",
            "交易侧的质量跃迁，是拒绝只打包信号。只会喊进场的可安装技能是负债。强调仓位与风险的默认值上市更慢——也更适合放到 ClawHub。",
          ],
        },
        {
          id: "gate",
          heading: "发布门禁（可直接抄）",
          paragraphs: [
            "每次发布前我大声回答四个问题。任意一个「否」就挡住——哪怕演示视频再好看。",
          ],
          bullets: [
            "ClawHub：陌生人能否按文档一条路径装上？",
            "人路径：没有 Agent 运行时，Docker 或 CLI 是否可用？",
            "失败模式：第一条报错是否可行动？",
            "指标：下载量是否会出现在我每周会看的地方？",
          ],
          callout: {
            title: "每周习惯",
            body: "我看 ClawHub 下载增量的方式，和看 Docker 拉取一样——当产品健康检查，不当虚荣仪表盘。",
          },
        },
        {
          id: "next",
          heading: "下一步优化什么",
          paragraphs: [
            "技能数量变多但安装标准下降，没有意义。下一步是更清楚的失败文档、ClawHub 上更紧的版本说明，以及让 Docker / CLI 与技能发布锁步，避免 Agent 与人分叉。",
            "如果你也在打包 OpenClaw 技能：先发布安装路径，再发布聪明提示词。下载曲线会告诉你，交付的是产品还是表演。",
          ],
        },
      ],
      meta: {
        title: "发布 OpenClaw / ClawHub 技能 | 旭旭同学",
        description:
          "旭旭同学如何以实时下载证据、Docker/CLI 回退路径和硬发布门禁交付可安装 ClawHub 技能——而不是幻灯片演示。",
        keywords: "ClawHub, OpenClaw 技能, 用例生成器, 交易助手, 技能打包, 旭旭同学",
      },
    },
  },
];

export function getNotes(locale: "en" | "zh"): Note[] {
  const fieldGuides = NOTES.map((note) => {
    const copy = note[locale];
    return {
      slug: note.slug,
      title: copy.title,
      description: copy.description,
      category: note.category,
      proof: note.proof[locale],
      tags: note.tags[locale],
      sections: copy.sections,
      related: note.related[locale],
      ctas: note.ctas[locale],
      embed: note.embed,
      meta: copy.meta,
    } satisfies Note;
  });

  const landings = ENGINEERING_ARTICLES.map((article) => toNote(locale, article));
  return [...landings, ...fieldGuides];
}

export function getNote(locale: "en" | "zh", slug: string): Note | undefined {
  return getNotes(locale).find((note) => note.slug === slug);
}

export const NOTE_SLUGS = [
  ...ENGINEERING_ARTICLES.map((article) => article.slug),
  ...NOTES.map((note) => note.slug),
];
