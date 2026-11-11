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

export function getAiTestingLab(_locale: Locale): AiLabCopy {
  return {
    meta: {
      title: "AI Testing Lab | AI Testing Engineer | XuXuClassMate",
      description:
        "Apply LLMs to quality engineering: test generation, API testing, bug analysis, and testing agents — installable, reviewable, shippable.",
      keywords:
        "AI Testing, AI Testing Engineer, LLM test generation, AI Testing Agent, SDET, test case generator",
    },
    subtitle: "AI TESTING LAB",
    title: "AI Testing Lab",
    description:
      "Positioning: QA / SDET + AI Testing Engineer. Put LLMs into reusable test workflows — not demos.",
    positioning:
      "Principle: AI accelerates drafts; a review loop decides what ships. Every direction must connect to real artifacts (cases, automation, reports).",
    liveTitle: "Shipped product",
    live: {
      title: "AI Test Case Generator",
      status: "Live",
      problem:
        "When requirements arrive as PDFs, screenshots, or rough notes, turning them into scenarios and boundary cases is slow and hard to reuse.",
      approach:
        "Multimodal input → AI generation → scored Test / Dev / Product Manager review loop → export Excel / Markdown / XMind; runs via Docker / local source / npm / OpenClaw.",
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
      href: "/en/work/testcase-generator",
      linkLabel: "View engineering case study",
      proof: [
        "Open-source on GitHub",
        "Docker image",
        "Installable ClawHub skill",
        "Case study with live install metrics",
      ],
    },
    methodsTitle: "Research directions",
    methodsIntro:
      "These are not casual buzzwords. They are the next methods on the same AI Testing map — exploring / roadmap only; no fake repositories.",
    methods: [
      {
        title: "AI API Testing",
        status: "Exploring",
        premise:
          "Start from OpenAPI / contracts, let the LLM draft executable cases, then feed an existing API automation framework.",
        pipeline: ["OpenAPI", "LLM", "Test Cases", "API Automation"],
        outcome:
          "Target artifact: reviewable API suite drafts that harden into stable regression cases.",
      },
      {
        title: "AI Bug Analysis",
        status: "Exploring",
        premise:
          "Feed bug reports, logs, and stack traces to an LLM to produce checkable root-cause hypotheses and repro hints.",
        pipeline: [
          "Bug Report",
          "Logs + Stack Trace",
          "LLM",
          "Root Cause Analysis",
        ],
        outcome:
          "Target artifact: structured RCA drafts that shorten triage — not replace engineer judgment.",
      },
      {
        title: "AI Testing Agent",
        status: "Roadmap",
        premise:
          "An agent that closes the loop from plan → cases → execution → defect detection → report on an observable pipeline.",
        pipeline: [
          "Requirement",
          "AI Agent",
          "Test Plan",
          "Test Cases",
          "Execution",
          "Bug Detection",
          "Test Report",
        ],
        outcome:
          "Target artifact: auditable agent traces and reports — not a black-box “fully automatic” button.",
      },
    ],
    principlesTitle: "Lab constraints",
    principles: [
      {
        title: "Installable first",
        body: "If it cannot run via Docker, CLI, or ClawHub, it is not shipped.",
      },
      {
        title: "Review stays in the loop",
        body: "LLMs draft faster; Test / Dev / Product judgment decides what merges.",
      },
      {
        title: "Evidence over claims",
        body: "Live requires a repo, image, or case study; Exploring only states method and target artifacts.",
      },
    ],
  };
}
