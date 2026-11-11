import type { Locale } from "./types";

export type DemoCase = {
  id: string;
  title: string;
  steps: string[];
  expected: string;
  priority: string;
};

export type DemoStage = {
  title: string;
  detail: string;
  logs: string[];
};

export type GeneratorDemoCopy = {
  subtitle: string;
  title: string;
  description: string;
  badge: string;
  badgeNote: string;
  inputLabel: string;
  sampleLabel: string;
  uploadLabel: string;
  uploadHint: string;
  generateLabel: string;
  generatingLabel: string;
  resetLabel: string;
  pipelineLabel: string;
  activityLabel: string;
  activityIdle: string;
  resultsLabel: string;
  reviewLabel: string;
  reviewNote: string;
  exportLabel: string;
  exportHint: string;
  exportDownloaded: string;
  exportItems: Array<{ id: string; label: string }>;
  resultsCountLabel: string;
  personas: string[];
  realProductTitle: string;
  realProductBody: string;
  dockerLabel: string;
  caseStudyLabel: string;
  playgroundLabel: string;
  backLabel: string;
  emptyHint: string;
  fileReady: string;
  stages: DemoStage[];
  samplePrd: string;
  cases: DemoCase[];
};

export type GeneratorDemoPayload = {
  samplePrd: string;
  cases: DemoCase[];
  stages: DemoStage[];
  exportItems: Array<{ id: string; label: string }>;
  labels: {
    generating: string;
    generate: string;
    fileReady: string;
    uploadHint: string;
    steps: string;
    expected: string;
    activityIdle: string;
    reviewNote: string;
    resultsCountLabel: string;
    exportDownloaded: string;
  };
};

const EN: GeneratorDemoCopy = {
  subtitle: "INTERACTIVE DEMO",
  title: "AI Test Case Generator",
  description:
    "Shift testing left with multi-modal AI — a browser demo of the product loop. Sample output only; not a live LLM. Deploy the real product via Docker, npm, or ClawHub.",
  badge: "Demo",
  badgeNote:
    "No files leave your browser. Generation is simulated with curated sample cases so you can feel the product flow in seconds.",
  inputLabel: "Requirement input",
  sampleLabel: "Load sample PRD",
  uploadLabel: "Choose a file",
  uploadHint: "PDF / Word / image / video accepted as filename only in this demo.",
  generateLabel: "Generate cases",
  generatingLabel: "Running pipeline…",
  resetLabel: "Reset",
  pipelineLabel: "Pipeline",
  activityLabel: "Live stage output",
  activityIdle: "Load a sample PRD, then generate to watch each pipeline stage run.",
  resultsLabel: "Structured test cases",
  resultsCountLabel: "Sample cases in this demo: {n}",
  reviewLabel: "Multi-role / multi-model review",
  reviewNote:
    "QA / Dev / Product role agents and multiple models cross-check coverage, feasibility, and wording before export.",
  exportLabel: "Automation / integration handoff",
  exportHint: "Click a format to download a demo sample from the generated cases.",
  exportDownloaded: "Downloaded {format} (demo sample)",
  exportItems: [
    { id: "excel", label: "Excel" },
    { id: "markdown", label: "Markdown" },
    { id: "xmind", label: "XMind" },
    { id: "automation", label: "Automation suite" }
  ],
  personas: ["QA Agent", "Dev Agent", "Product Agent", "Model ensemble"],
  realProductTitle: "Want the real multimodal upload?",
  realProductBody:
    "Shift testing left for real: run the Docker image locally for PDF / Word / image / video → generate → export. This page is the demoable first step.",
  dockerLabel: "Open Docker Hub",
  caseStudyLabel: "Read case study",
  playgroundLabel: "Back to Playground",
  backLabel: "Back to case study",
  emptyHint: "Load the sample PRD or attach a file name, then generate.",
  fileReady: "Attached (demo):",
  stages: [
    {
      title: "Multimodal AI",
      detail: "Parse the requirement and extract acceptance criteria.",
      logs: [
        "Reading requirement text…",
        "Detected feature: Email OTP Login",
        "Extracted 5 acceptance criteria",
        "Flagged risk points: expiry · lockout · redirect"
      ]
    },
    {
      title: "Structured Test Cases",
      detail: "Draft reviewable cases with steps, expected results, and priority.",
      logs: [
        "Mapping criteria → candidate scenarios…",
        "Drafting TC-01 … TC-04",
        "Normalizing priority tags (P0 / P1)",
        "Structured case set ready for review"
      ]
    },
    {
      title: "Multi-role / multi-model review",
      detail:
        "Run QA / Dev / Product role agents plus a multi-model cross-check.",
      logs: [
        "QA role agent: coverage on lockout & expiry paths",
        "Dev role agent: feasibility of OTP + redirect flow",
        "Product role agent: acceptance wording alignment",
        "Multi-model ensemble cross-check complete — ready to export"
      ]
    },
    {
      title: "Automation / Integration",
      detail: "Prepare export formats for downstream automation and tooling.",
      logs: [
        "Packaging Excel / Markdown / XMind exports…",
        "Attaching handoff notes for automation suites",
        "Pipeline complete"
      ]
    }
  ],
  samplePrd: `Feature: Email OTP Login

As a registered user, I can request a one-time password by email and sign in within 5 minutes.

Acceptance criteria:
1. User enters a valid email and requests OTP.
2. OTP expires after 5 minutes.
3. After 3 failed attempts, the account is locked for 15 minutes.
4. Successful login redirects to the dashboard.
5. Invalid email format shows an inline validation error.`,
  cases: [
    {
      id: "TC-01",
      title: "Request OTP with a valid email",
      steps: [
        "Open the login page",
        "Enter a registered email address",
        "Click Request OTP"
      ],
      expected: "OTP email is sent; UI shows a 5-minute countdown.",
      priority: "P0"
    },
    {
      id: "TC-02",
      title: "Reject invalid email format",
      steps: [
        "Open the login page",
        "Enter an invalid email string",
        "Click Request OTP"
      ],
      expected: "Inline validation error; OTP is not sent.",
      priority: "P1"
    },
    {
      id: "TC-03",
      title: "Lock account after 3 failed OTP attempts",
      steps: [
        "Request a valid OTP",
        "Submit an incorrect OTP three times"
      ],
      expected: "Account locked for 15 minutes; clear lock message shown.",
      priority: "P0"
    },
    {
      id: "TC-04",
      title: "Successful OTP login redirects to dashboard",
      steps: [
        "Request OTP",
        "Enter the correct code within 5 minutes",
        "Submit"
      ],
      expected: "User lands on the dashboard authenticated session.",
      priority: "P0"
    }
  ]
};

export function getGeneratorDemo(_locale: Locale): GeneratorDemoCopy {
  return EN;
}

export function getGeneratorDemoPayload(_locale: Locale): GeneratorDemoPayload {
  const demo = EN;
  return {
    samplePrd: demo.samplePrd,
    cases: demo.cases,
    stages: demo.stages,
    exportItems: demo.exportItems,
    labels: {
      generating: demo.generatingLabel,
      generate: demo.generateLabel,
      fileReady: demo.fileReady,
      uploadHint: demo.uploadHint,
      steps: "Steps",
      expected: "Expected",
      activityIdle: demo.activityIdle,
      reviewNote: demo.reviewNote,
      resultsCountLabel: demo.resultsCountLabel,
      exportDownloaded: demo.exportDownloaded,
    },
  };
}
