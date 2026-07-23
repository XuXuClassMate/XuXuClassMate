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
  exportItems: string[];
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
  exportItems: string[];
  labels: {
    generating: string;
    generate: string;
    fileReady: string;
    uploadHint: string;
    steps: string;
    expected: string;
    activityIdle: string;
    reviewNote: string;
  };
};

const EN: GeneratorDemoCopy = {
  subtitle: "INTERACTIVE DEMO",
  title: "AI Test Case Generator",
  description:
    "A browser demo of the flagship loop: requirement in → structured cases out → human review. Sample output only — not a live LLM.",
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
  reviewLabel: "Human review",
  reviewNote: "Test / Dev / Product each check coverage, feasibility, and wording before export.",
  exportLabel: "Automation / integration handoff",
  exportItems: ["Excel", "Markdown", "XMind", "Automation suite"],
  personas: ["Test", "Dev", "Product"],
  realProductTitle: "Want the real multimodal upload?",
  realProductBody:
    "Run the Docker image locally for PDF / Word / image / video → generate → export. This page is the demoable first step.",
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
        "Flagged risk points: expiry · lockout · redirect",
      ],
    },
    {
      title: "Structured Test Cases",
      detail: "Draft reviewable cases with steps, expected results, and priority.",
      logs: [
        "Mapping criteria → candidate scenarios…",
        "Drafting TC-01 … TC-04",
        "Normalizing priority tags (P0 / P1)",
        "Structured case set ready for review",
      ],
    },
    {
      title: "Human Review",
      detail: "Route cases through Test / Dev / Product review personas.",
      logs: [
        "Test: coverage check on lockout & expiry paths",
        "Dev: feasibility check on OTP + redirect flow",
        "Product: wording / acceptance alignment",
        "Review loop complete — ready to export",
      ],
    },
    {
      title: "Automation / Integration",
      detail: "Prepare export formats for humans and downstream automation.",
      logs: [
        "Packaging Excel / Markdown / XMind exports…",
        "Attaching handoff notes for automation suites",
        "Pipeline complete",
      ],
    },
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
        "Click Request OTP",
      ],
      expected: "OTP email is sent; UI shows a 5-minute countdown.",
      priority: "P0",
    },
    {
      id: "TC-02",
      title: "Reject invalid email format",
      steps: [
        "Open the login page",
        "Enter an invalid email string",
        "Click Request OTP",
      ],
      expected: "Inline validation error; OTP is not sent.",
      priority: "P1",
    },
    {
      id: "TC-03",
      title: "Lock account after 3 failed OTP attempts",
      steps: [
        "Request a valid OTP",
        "Submit an incorrect OTP three times",
      ],
      expected: "Account locked for 15 minutes; clear lock message shown.",
      priority: "P0",
    },
    {
      id: "TC-04",
      title: "Successful OTP login redirects to dashboard",
      steps: [
        "Request OTP",
        "Enter the correct code within 5 minutes",
        "Submit",
      ],
      expected: "User lands on the dashboard authenticated session.",
      priority: "P0",
    },
  ],
};

const ZH: GeneratorDemoCopy = {
  subtitle: "交互演示",
  title: "AI 测试用例生成器",
  description:
    "旗舰产品闭环的浏览器 Demo：需求进入 → 结构化用例 → 人工评审。输出为示例用例，不是实时 LLM。",
  badge: "Demo",
  badgeNote:
    "文件不会离开浏览器。生成为模拟过程，用精选示例用例，让你在几秒内感受产品流程。",
  inputLabel: "需求输入",
  sampleLabel: "载入示例 PRD",
  uploadLabel: "选择文件",
  uploadHint: "本 Demo 仅记录 PDF / Word / 图片 / 视频的文件名。",
  generateLabel: "生成用例",
  generatingLabel: "流水线运行中…",
  resetLabel: "重置",
  pipelineLabel: "流水线",
  activityLabel: "阶段实时输出",
  activityIdle: "先载入示例 PRD，再点击生成，观看每个阶段如何推进。",
  resultsLabel: "结构化测试用例",
  reviewLabel: "人工评审",
  reviewNote: "测试 / 开发 / 产品分别检查覆盖、可落地性与表述，再进入导出。",
  exportLabel: "自动化 / 集成交接",
  exportItems: ["Excel", "Markdown", "XMind", "自动化套件"],
  personas: ["测试", "开发", "产品"],
  realProductTitle: "需要真实的多模态上传？",
  realProductBody:
    "本机运行 Docker 镜像即可：PDF / Word / 图片 / 视频 → 生成 → 导出。本页是「先可演示」的一步。",
  dockerLabel: "打开 Docker Hub",
  caseStudyLabel: "阅读案例",
  playgroundLabel: "返回体验台",
  backLabel: "返回案例页",
  emptyHint: "先载入示例 PRD 或附加文件名，再点击生成。",
  fileReady: "已附加（Demo）：",
  stages: [
    {
      title: "多模态 AI 解析",
      detail: "解析需求文本，抽取验收标准与风险点。",
      logs: [
        "正在读取需求文本…",
        "识别功能：邮箱 OTP 登录",
        "抽取验收标准 5 条",
        "标记风险点：过期 · 锁定 · 跳转",
      ],
    },
    {
      title: "结构化测试用例",
      detail: "生成可评审用例：步骤、预期结果与优先级。",
      logs: [
        "将验收标准映射为候选场景…",
        "起草 TC-01 … TC-04",
        "统一优先级标签（P0 / P1）",
        "结构化用例集已就绪，进入评审",
      ],
    },
    {
      title: "人工评审",
      detail: "按测试 / 开发 / 产品角色走评审闭环。",
      logs: [
        "测试：检查锁定与过期路径覆盖",
        "开发：核对 OTP 与跳转流程可落地性",
        "产品：对齐表述与验收标准",
        "评审完成 — 可进入导出",
      ],
    },
    {
      title: "自动化 / 集成",
      detail: "准备导出格式，交接给人与下游自动化。",
      logs: [
        "打包 Excel / Markdown / XMind 导出…",
        "附加自动化套件交接说明",
        "流水线完成",
      ],
    },
  ],
  samplePrd: `功能：邮箱 OTP 登录

作为注册用户，我可以通过邮箱获取一次性验证码，并在 5 分钟内完成登录。

验收标准：
1. 用户输入有效邮箱并请求 OTP。
2. OTP 在 5 分钟后过期。
3. 连续失败 3 次后，账号锁定 15 分钟。
4. 登录成功跳转仪表盘。
5. 邮箱格式非法时展示行内校验错误。`,
  cases: [
    {
      id: "TC-01",
      title: "使用有效邮箱请求 OTP",
      steps: ["打开登录页", "输入已注册邮箱", "点击请求 OTP"],
      expected: "发送 OTP 邮件；界面显示 5 分钟倒计时。",
      priority: "P0",
    },
    {
      id: "TC-02",
      title: "拒绝非法邮箱格式",
      steps: ["打开登录页", "输入非法邮箱字符串", "点击请求 OTP"],
      expected: "行内校验错误；不发送 OTP。",
      priority: "P1",
    },
    {
      id: "TC-03",
      title: "OTP 失败 3 次后锁定账号",
      steps: ["请求有效 OTP", "连续提交错误 OTP 三次"],
      expected: "账号锁定 15 分钟，并展示清晰锁定提示。",
      priority: "P0",
    },
    {
      id: "TC-04",
      title: "OTP 登录成功跳转仪表盘",
      steps: ["请求 OTP", "在 5 分钟内输入正确验证码", "提交"],
      expected: "用户进入已登录的仪表盘会话。",
      priority: "P0",
    },
  ],
};

export function getGeneratorDemo(locale: Locale): GeneratorDemoCopy {
  return locale === "zh" ? ZH : EN;
}

export function getGeneratorDemoPayload(locale: Locale): GeneratorDemoPayload {
  const demo = getGeneratorDemo(locale);
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
      steps: locale === "zh" ? "步骤" : "Steps",
      expected: locale === "zh" ? "预期结果" : "Expected",
      activityIdle: demo.activityIdle,
      reviewNote: demo.reviewNote,
    },
  };
}
