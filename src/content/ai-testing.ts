import type { Locale, PageMeta } from "./types";

export type AiLabCopy = {
  meta: PageMeta;
  subtitle: string;
  title: string;
  description: string;
  positioning: string;
  liveTitle: string;
  live: {
    title: string;
    status: string;
    problem: string;
    approach: string;
    input: string;
    outputs: string[];
    pipeline: string[];
    href: string;
    linkLabel: string;
    proof: string[];
  };
  methodsTitle: string;
  methodsIntro: string;
  methods: {
    title: string;
    status: string;
    premise: string;
    pipeline: string[];
    outcome: string;
  }[];
  principlesTitle: string;
  principles: { title: string; body: string }[];
};

export function getAiTestingLab(locale: Locale): AiLabCopy {
  const isZh = locale === "zh";
  return {
    meta: {
      title: isZh
        ? "AI Testing Lab | AI Testing Engineer | 旭旭同学"
        : "AI Testing Lab | AI Testing Engineer | XuXuClassMate",
      description: isZh
        ? "把 LLM 接入测试工程：用例生成、接口测试、缺陷分析与测试 Agent——可安装、可评审、可落地。"
        : "Apply LLMs to quality engineering: test generation, API testing, bug analysis, and testing agents — installable, reviewable, shippable.",
      keywords:
        "AI Testing, AI Testing Engineer, LLM test generation, AI Testing Agent, SDET, test case generator",
    },
    subtitle: "AI TESTING LAB",
    title: "AI Testing Lab",
    description: isZh
      ? "定位：QA / SDET + AI Testing Engineer。把大模型放进可复用的测试工作流，而不是停留在 Demo。"
      : "Positioning: QA / SDET + AI Testing Engineer. Put LLMs into reusable test workflows — not demos.",
    positioning: isZh
      ? "原则：AI 负责加速草稿，评审闭环决定能否交付。每个方向都要能接到真实产物（用例、自动化、报告）。"
      : "Principle: AI accelerates drafts; a review loop decides what ships. Every direction must connect to real artifacts (cases, automation, reports).",
    liveTitle: isZh ? "已上线产品" : "Shipped product",
    live: {
      title: "AI Test Case Generator",
      status: "Live",
      problem: isZh
        ? "需求来自 PDF / 截图 / 草稿时，手工整理场景与边界用例成本高，且难以复用。"
        : "When requirements arrive as PDFs, screenshots, or rough notes, turning them into scenarios and boundary cases is slow and hard to reuse.",
      approach: isZh
        ? "多模态输入 → AI 生成 → 测试经理 / 开发经理 / 产品经理三角色评分评审 → 导出 Excel / Markdown / XMind；支持 Docker / 本地源码 / npm / OpenClaw。"
        : "Multimodal input → AI generation → scored Test / Dev / Product Manager review loop → export Excel / Markdown / XMind; runs via Docker / local source / npm / OpenClaw.",
      input: "Requirement",
      outputs: [
        "Test Scenarios",
        "Test Cases",
        "Boundary Cases",
        "Negative Cases",
      ],
      pipeline: [
        "Requirement",
        "Multimodal parse",
        "LLM generation",
        "Review loop",
        "Export / install",
      ],
      href: isZh
        ? "/zh/work/testcase-generator"
        : "/en/work/testcase-generator",
      linkLabel: isZh ? "查看工程案例" : "View engineering case study",
      proof: isZh
        ? ["GitHub 开源", "Docker 镜像", "ClawHub 可安装技能", "案例页含实时安装量"]
        : [
            "Open-source on GitHub",
            "Docker image",
            "Installable ClawHub skill",
            "Case study with live install metrics",
          ],
    },
    methodsTitle: isZh ? "研究方法线" : "Research directions",
    methodsIntro: isZh
      ? "以下三条不是随便列的概念标签，而是同一套 AI Testing 能力地图里的下一阶段方法——当前为探索 / 路线图，不伪造仓库。"
      : "These are not casual buzzwords. They are the next methods on the same AI Testing map — exploring / roadmap only; no fake repositories.",
    methods: [
      {
        title: "AI API Testing",
        status: isZh ? "探索中" : "Exploring",
        premise: isZh
          ? "从 OpenAPI / 契约出发，用 LLM 生成可执行用例，再接入现有 API 自动化框架。"
          : "Start from OpenAPI / contracts, let the LLM draft executable cases, then feed an existing API automation framework.",
        pipeline: ["OpenAPI", "LLM", "Test Cases", "API Automation"],
        outcome: isZh
          ? "目标产物：可回归的接口套件草稿 + 经评审后的稳定用例。"
          : "Target artifact: reviewable API suite drafts that harden into stable regression cases.",
      },
      {
        title: "AI Bug Analysis",
        status: isZh ? "探索中" : "Exploring",
        premise: isZh
          ? "把缺陷报告、日志与堆栈一并交给 LLM，产出可核对的根因假设与复现建议。"
          : "Feed bug reports, logs, and stack traces to an LLM to produce checkable root-cause hypotheses and repro hints.",
        pipeline: [
          "Bug Report",
          "Logs + Stack Trace",
          "LLM",
          "Root Cause Analysis",
        ],
        outcome: isZh
          ? "目标产物：结构化 RCA 草稿，缩短定位时间，而不是替代工程师判断。"
          : "Target artifact: structured RCA drafts that shorten triage — not replace engineer judgment.",
      },
      {
        title: "AI Testing Agent",
        status: isZh ? "路线图" : "Roadmap",
        premise: isZh
          ? "用 Agent 串联「计划 → 用例 → 执行 → 发现缺陷 → 报告」的闭环，落在可观测的测试流水线上。"
          : "An agent that closes the loop from plan → cases → execution → defect detection → report on an observable pipeline.",
        pipeline: [
          "Requirement",
          "AI Agent",
          "Test Plan",
          "Test Cases",
          "Execution",
          "Bug Detection",
          "Test Report",
        ],
        outcome: isZh
          ? "目标产物：可审计的 Agent 运行轨迹 + 报告，而不是黑盒一键「全自动」。"
          : "Target artifact: auditable agent traces and reports — not a black-box “fully automatic” button.",
      },
    ],
    principlesTitle: isZh ? "实验室约束" : "Lab constraints",
    principles: [
      {
        title: isZh ? "可安装优先" : "Installable first",
        body: isZh
          ? "能进 Docker / CLI / ClawHub 的才算交付；幻灯片不算。"
          : "If it cannot run via Docker, CLI, or ClawHub, it is not shipped.",
      },
      {
        title: isZh ? "评审闭环" : "Review stays in the loop",
        body: isZh
          ? "LLM 加速草稿；测试 / 开发 / 产品判断决定能否合入。"
          : "LLMs draft faster; Test / Dev / Product judgment decides what merges.",
      },
      {
        title: isZh ? "证据公开" : "Evidence over claims",
        body: isZh
          ? "Live 必须有仓库、镜像或案例页；Exploring 只写方法与目标产物。"
          : "Live requires a repo, image, or case study; Exploring only states method and target artifacts.",
      },
    ],
  };
}
