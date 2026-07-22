import type { Note, PageMeta } from "./types";

type NoteDef = {
  slug: Note["slug"];
  publishedAt: string;
  readingMinutes: number;
  tags: { en: string[]; zh: string[] };
  en: {
    title: string;
    description: string;
    sections: Note["sections"];
    cta?: Note["cta"];
    meta: PageMeta;
  };
  zh: {
    title: string;
    description: string;
    sections: Note["sections"];
    cta?: Note["cta"];
    meta: PageMeta;
  };
};

const NOTES: NoteDef[] = [
  {
    slug: "domestic-db-docker-qa",
    publishedAt: "2026-07-21",
    readingMinutes: 8,
    tags: {
      en: ["Docker", "Dameng", "Highgo", "QA environments"],
      zh: ["Docker", "达梦", "瀚高", "测试环境"],
    },
    en: {
      title: "Stand up Dameng / Highgo for QA in minutes with Docker",
      description:
        "A practical guide to reusable domestic-database images for test teams — pull, run, and wire into CI without undocumented installs.",
      sections: [
        {
          heading: "Why this hurts QA teams",
          paragraphs: [
            "Domestic databases are common in regulated and enterprise stacks, but QA often inherits bare-metal install docs, missing packages, and one-off VM images. That blocks onboarding and makes CI flaky before a single assertion runs.",
            "The goal is not to replace DBA work — it is to give testers a pull-and-run path that matches how they already use Postgres or MySQL in containers.",
          ],
        },
        {
          heading: "What I published",
          paragraphs: [
            "Under xuxuclassmate on Docker Hub I keep ready-to-run images for Dameng, Highgo, Kingbase, TiDB, and related services. Tags stay boring on purpose: predictable names beat clever ones when a suite has to boot in CI.",
          ],
          bullets: [
            "Dameng and Highgo carry the majority of pull volume — proof that teams reuse them",
            "Same mental model: pull → run → connect from API / UI automation",
            "Docs live next to the image so newcomers do not hunt internal wikis",
          ],
        },
        {
          heading: "A minimal workflow",
          paragraphs: [
            "Start with the database you need, expose the port your suite expects, and keep credentials in env files — not hard-coded in tests. Once the container is healthy, point Playwright or API clients at the same host you use locally.",
          ],
          bullets: [
            "Prefer one service per container for clearer failures",
            "Pin tags in CI; float only on local experiments",
            "Smoke-connect before the full regression so DB boot issues fail fast",
          ],
        },
        {
          heading: "How this feeds the rest of the stack",
          paragraphs: [
            "Reusable DB images are the foundation under AI tooling demos and agent skills. If the environment cannot boot, multimodal generators and review loops are just slides. Installable quality starts with environments teams can actually run.",
          ],
        },
      ],
      cta: {
        label: "Browse Docker Hub images",
        href: "https://hub.docker.com/u/xuxuclassmate",
      },
      meta: {
        title: "Dameng / Highgo Docker for QA | XuXuClassMate",
        description:
          "How to stand up Dameng and Highgo test databases in minutes with reusable Docker images for QA and CI.",
        keywords:
          "Dameng Docker, Highgo Docker, QA test environment, domestic database, XuXuClassMate",
      },
    },
    zh: {
      title: "用 Docker 几分钟拉起达梦 / 瀚高测试库",
      description:
        "面向测试团队的国产库即用镜像实践：拉取、启动、接入 CI，少踩无文档安装的坑。",
      sections: [
        {
          heading: "为什么卡住 QA",
          paragraphs: [
            "国产库在政企与合规场景很常见，但测试侧经常只能拿到裸机安装文档、缺包说明和一次性虚拟机镜像。新人上手慢，CI 也还没跑断言就先不稳定。",
            "目标不是替代 DBA，而是给测试一条和 Postgres / MySQL 容器一样的 pull-and-run 路径。",
          ],
        },
        {
          heading: "我发布了什么",
          paragraphs: [
            "在 Docker Hub 的 xuxuclassmate 下，维护达梦、瀚高、人大金仓、TiDB 等即用镜像。标签刻意保持无聊：套件要在 CI 里稳定启动时，可预期的名字比花哨更重要。",
          ],
          bullets: [
            "达梦与瀚高贡献了主要拉取量——说明团队在复用",
            "统一心智模型：拉取 → 启动 → 从接口 / UI 自动化连接",
            "文档跟镜像走，避免新人满世界找内部 Wiki",
          ],
        },
        {
          heading: "最小工作流",
          paragraphs: [
            "先选需要的库，暴露套件期望的端口，把凭据放进环境变量——不要写死在用例里。容器健康后，让 Playwright 或接口客户端指向与本地一致的地址。",
          ],
          bullets: [
            "尽量一容器一服务，失败原因更清晰",
            "CI 钉死标签；本地实验再考虑浮动标签",
            "全量回归前先做连通性冒烟，让数据库启动问题尽早失败",
          ],
        },
        {
          heading: "如何支撑后面的工具链",
          paragraphs: [
            "可复用数据库镜像是 AI 工具演示与 Agent 技能底下的底座。环境都起不来，多模态生成和评审闭环就只是幻灯片。能安装的质量，从团队真能跑起来的环境开始。",
          ],
        },
      ],
      cta: {
        label: "查看 Docker Hub 镜像",
        href: "https://hub.docker.com/u/xuxuclassmate",
      },
      meta: {
        title: "达梦 / 瀚高 Docker 测试环境 | 旭旭同学",
        description:
          "如何用可复用 Docker 镜像，在几分钟内为 QA 与 CI 拉起达梦、瀚高等测试数据库。",
        keywords: "达梦 Docker, 瀚高 Docker, 测试环境, 国产数据库, 旭旭同学",
      },
    },
  },
  {
    slug: "clawhub-skill-shipping",
    publishedAt: "2026-07-21",
    readingMinutes: 7,
    tags: {
      en: ["ClawHub", "OpenClaw", "Agent skills", "Packaging"],
      zh: ["ClawHub", "OpenClaw", "Agent 技能", "打包"],
    },
    en: {
      title: "Ship an OpenClaw skill people can actually install",
      description:
        "Lessons from publishing AI Test Case Generator and Trading Assistant Core on ClawHub — packaging, review loops, and install paths beyond demos.",
      sections: [
        {
          heading: "Demos are not skills",
          paragraphs: [
            "A prompt in a chat window is not a product. Agents need a named skill, versioned artifacts, and a clear install path. That is the bar I use before calling something shipped.",
          ],
        },
        {
          heading: "What worked on ClawHub",
          paragraphs: [
            "For AI Test Case Generator, multimodal inputs plus Test / Dev / Product review personas keep drafts from becoming noise. For Trading Assistant Core, risk-first defaults matter more than flashy signals.",
          ],
          bullets: [
            "Publish on ClawHub so agents can install, not just watch a video",
            "Keep Docker / CLI entrypoints for humans who are not in an agent runtime",
            "Measure downloads — vanity stars on GitHub are optional; installs are not",
          ],
        },
        {
          heading: "Packaging checklist",
          paragraphs: [
            "Before each release I ask: Can someone install it from ClawHub in one flow? Can they run a non-agent path? Is the failure mode obvious? If any answer is no, it is still a demo.",
          ],
        },
      ],
      cta: {
        label: "Open ClawHub profile",
        href: "https://clawhub.ai/xuxuclassmate",
      },
      meta: {
        title: "Shipping OpenClaw / ClawHub Skills | XuXuClassMate",
        description:
          "How XuXuClassMate packages installable OpenClaw skills on ClawHub with Docker and CLI paths — not slideware demos.",
        keywords:
          "ClawHub, OpenClaw skill, AI test case generator, trading assistant, XuXuClassMate",
      },
    },
    zh: {
      title: "把 OpenClaw 技能做到别人真能安装",
      description:
        "在 ClawHub 发布 AI 用例生成器与 Trading Assistant Core 的经验：打包、评审闭环，以及演示之外的安装路径。",
      sections: [
        {
          heading: "演示不等于技能",
          paragraphs: [
            "聊天窗口里的一段提示词不是产品。Agent 需要有名字的技能、可版本化的产物，以及清晰的安装路径。这是我判断「算不算交付」的标准。",
          ],
        },
        {
          heading: "在 ClawHub 上什么有效",
          paragraphs: [
            "用例生成器靠多模态输入和测试/开发/产品三角色评审，避免草稿变噪音。Trading Assistant Core 则把风险优先默认值放在花哨信号之前。",
          ],
          bullets: [
            "发布到 ClawHub，让 Agent 能安装，而不是只能看视频",
            "保留 Docker / CLI，照顾不在 Agent 运行时里的人",
            "看下载量——GitHub star 可选，安装不可省",
          ],
        },
        {
          heading: "打包检查清单",
          paragraphs: [
            "每次发布前自问：别人能否在 ClawHub 一条路径装上？有没有非 Agent 用法？失败时是否好排查？有一个答「否」，就还是演示。",
          ],
        },
      ],
      cta: {
        label: "打开 ClawHub 主页",
        href: "https://clawhub.ai/xuxuclassmate",
      },
      meta: {
        title: "发布 OpenClaw / ClawHub 技能 | 旭旭同学",
        description:
          "旭旭同学如何在 ClawHub 打包可安装的 OpenClaw 技能，并提供 Docker 与 CLI 路径——而不只是演示。",
        keywords: "ClawHub, OpenClaw 技能, 用例生成器, 交易助手, 旭旭同学",
      },
    },
  },
];

export function getNotes(locale: "en" | "zh"): Note[] {
  return NOTES.map((note) => {
    const copy = note[locale];
    return {
      slug: note.slug,
      publishedAt: note.publishedAt,
      readingMinutes: note.readingMinutes,
      tags: note.tags[locale],
      title: copy.title,
      description: copy.description,
      sections: copy.sections,
      cta: copy.cta,
      meta: copy.meta,
    };
  });
}

export function getNote(locale: "en" | "zh", slug: string): Note | undefined {
  return getNotes(locale).find((note) => note.slug === slug);
}

export const NOTE_SLUGS = NOTES.map((note) => note.slug);
