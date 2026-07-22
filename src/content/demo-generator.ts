import type { Locale } from "./types";

export type DemoCase = {
  id: string;
  title: string;
  steps: string[];
  expected: string;
  priority: string;
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
  resultsLabel: string;
  reviewLabel: string;
  personas: string[];
  realProductTitle: string;
  realProductBody: string;
  dockerLabel: string;
  caseStudyLabel: string;
  playgroundLabel: string;
  backLabel: string;
  emptyHint: string;
  fileReady: string;
  stages: string[];
  samplePrd: string;
  cases: DemoCase[];
};

export type GeneratorDemoPayload = {
  samplePrd: string;
  cases: DemoCase[];
  labels: {
    generating: string;
    generate: string;
    fileReady: string;
    uploadHint: string;
    steps: string;
    expected: string;
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
  generatingLabel: "Generating…",
  resetLabel: "Reset",
  pipelineLabel: "Pipeline",
  resultsLabel: "Structured test cases",
  reviewLabel: "Human review personas",
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
    "Multimodal AI",
    "Structured Test Cases",
    "Human Review",
    "Automation / Integration",
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
  generatingLabel: "生成中…",
  resetLabel: "重置",
  pipelineLabel: "流水线",
  resultsLabel: "结构化测试用例",
  reviewLabel: "人工评审角色",
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
    "Multimodal AI",
    "Structured Test Cases",
    "Human Review",
    "Automation / Integration",
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
    labels: {
      generating: demo.generatingLabel,
      generate: demo.generateLabel,
      fileReady: demo.fileReady,
      uploadHint: demo.uploadHint,
      steps: locale === "zh" ? "步骤" : "Steps",
      expected: locale === "zh" ? "预期结果" : "Expected",
    },
  };
}
