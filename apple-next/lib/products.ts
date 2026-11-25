export type ProductGroup = "Quality Engineering" | "Developer Infrastructure" | "AI / Agent";

export type Product = {
  slug: string;
  name: string;
  group: ProductGroup;
  tagline: string;
  summary: string;
  features: { title: string; body: string }[];
  specs: { label: string; value: string }[];
  cta: { label: string; note: string };
};

export const PRODUCTS: Product[] = [
  {
    slug: "testcase-generator",
    name: "AI Test Case Generator",
    group: "Quality Engineering",
    tagline: "Requirements in. Reviewable test cases out.",
    summary:
      "Turn a PDF, screenshot, or plain spec into structured test cases with steps, expected results, and priority — then put them through a real review before they ship.",
    features: [
      {
        title: "Multimodal input",
        body: "Read a requirement from a document, an image, or a short spec. Acceptance criteria are drawn out before a single case is written.",
      },
      {
        title: "Structured drafts",
        body: "Every case carries steps, expected results, and a priority — grounded in the requirement, never invented.",
      },
      {
        title: "Human review, scored",
        body: "QA, dev, and product score coverage, logic, and clarity. The default bar is 90 out of 100; only a set that clears it ships.",
      },
      {
        title: "Three exports, one set",
        body: "Ship the reviewed set as Excel, Markdown, and XMind — the same scenarios on the surfaces teams already use.",
      },
    ],
    specs: [
      { label: "Input", value: "PDF · image · spec" },
      { label: "Output", value: "Excel · Markdown · XMind" },
      { label: "Review", value: "QA · Dev · Product, 90/100" },
      { label: "Runs as", value: "Installable tool" },
    ],
    cta: { label: "Try the generator", note: "Runs locally; your requirements stay yours." },
  },
  {
    slug: "docker-suite",
    name: "Test DB Docker Suite",
    group: "Developer Infrastructure",
    tagline: "Test databases, one pull away.",
    summary:
      "Ready-to-run images for the databases teams actually test against — Dameng, Highgo, Kingbase, and TiDB — pulled, seeded, and disposable.",
    features: [
      {
        title: "One command up",
        body: "Pull and run. Each image is seeded and ready in seconds, then wiped on stop so every run starts clean.",
      },
      {
        title: "The databases that are hard to get",
        body: "Dameng, Highgo, Kingbase, TiDB — the ones that usually block a test environment, packaged to just run.",
      },
      {
        title: "Built for CI",
        body: "Deterministic startup and fixed ports make the images drop-in for pipelines and local runs alike.",
      },
    ],
    specs: [
      { label: "Databases", value: "Dameng · Highgo · Kingbase · TiDB" },
      { label: "Startup", value: "~6s, seeded" },
      { label: "Lifecycle", value: "Disposable, wiped on stop" },
      { label: "Registry", value: "Docker Hub" },
    ],
    cta: { label: "Pull from Docker Hub", note: "Public images, versioned tags." },
  },
  {
    slug: "docker-hub-api-gateway",
    name: "Docker Hub API Gateway",
    group: "Developer Infrastructure",
    tagline: "Docker Hub stats, as an API and a card.",
    summary:
      "A REST gateway over Docker Hub with ready-made SVG stat cards — the live pull counts behind the suite, available to anyone.",
    features: [
      {
        title: "REST over Docker Hub",
        body: "A clean API for pulls, tags, and repository details, cached close to the edge.",
      },
      {
        title: "Drop-in SVG cards",
        body: "Embeddable stat cards that render live pull counts in a README or a site, no build step.",
      },
    ],
    specs: [
      { label: "Surface", value: "REST + SVG" },
      { label: "Runtime", value: "Cloudflare Workers" },
      { label: "Spec", value: "OpenAPI" },
    ],
    cta: { label: "Read the API", note: "Open endpoints, no key for public stats." },
  },
  {
    slug: "globalpulse",
    name: "GlobalPulse",
    group: "AI / Agent",
    tagline: "Scheduled market briefings, on the edge.",
    summary:
      "A self-hosted agent that gathers market signals and sends scheduled briefings, running on Cloudflare with KV config and cron.",
    features: [
      {
        title: "Scheduled by cron",
        body: "Briefings land on a schedule you set, assembled from market signals and calendars.",
      },
      {
        title: "Self-hosted, edge-native",
        body: "Runs on Cloudflare Workers with KV for config — no server to keep alive.",
      },
    ],
    specs: [
      { label: "Runtime", value: "Cloudflare Workers" },
      { label: "Config", value: "KV" },
      { label: "Cadence", value: "Cron" },
    ],
    cta: { label: "See the project", note: "Self-hosted; bring your own keys." },
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const GROUPS: ProductGroup[] = [
  "Quality Engineering",
  "Developer Infrastructure",
  "AI / Agent",
];
