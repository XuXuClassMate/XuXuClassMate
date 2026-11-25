export type Note = {
  slug: string;
  title: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const NOTES: Note[] = [
  {
    slug: "playwright-at-scale",
    title: "Keeping Playwright fast when the suite grows",
    date: "2026-09-18",
    readingTime: "6 min",
    category: "Automation",
    excerpt:
      "A large end-to-end suite stays useful only if it stays fast and honest. Here is how I keep Playwright from becoming the thing teams skip.",
    body: [
      {
        heading: "Flake is a design problem",
        paragraphs: [
          "Most flake is not random. It is a race the test did not wait for, or state left behind by the run before it. Fixing flake starts with making every test set up and tear down its own data, so order never matters.",
          "Web-first assertions and explicit waits on state — not timeouts — remove the second class of flake. A test should wait for the thing it cares about, and nothing else.",
        ],
      },
      {
        heading: "Shard, don't trim",
        paragraphs: [
          "When a suite gets slow the temptation is to delete coverage. Shard across workers and machines first; you keep the coverage and get the speed back.",
        ],
      },
    ],
  },
  {
    slug: "disposable-test-databases",
    title: "Disposable test databases with Docker",
    date: "2026-08-02",
    readingTime: "5 min",
    category: "Infrastructure",
    excerpt:
      "The fastest way to kill a test environment is a shared database. Pullable, seeded, disposable images fix it.",
    body: [
      {
        heading: "One pull, one clean state",
        paragraphs: [
          "A test database that is seeded on start and wiped on stop removes a whole category of cross-test contamination. Each run starts from the same known state.",
          "Packaging the harder databases — Dameng, Highgo, Kingbase, TiDB — as ready images means a new contributor runs the suite in minutes, not a day.",
        ],
      },
      {
        heading: "Deterministic for CI",
        paragraphs: [
          "Fixed ports and a known startup time make the images drop-in for pipelines. The test environment stops being the reason a build is red.",
        ],
      },
    ],
  },
  {
    slug: "ai-in-qa",
    title: "Where AI actually helps in QA",
    date: "2026-06-21",
    readingTime: "7 min",
    category: "AI testing",
    excerpt:
      "AI is good at the first draft of a test suite and bad at deciding what matters. The workflow should reflect that.",
    body: [
      {
        heading: "Draft, then review",
        paragraphs: [
          "Reading a requirement and drafting structured cases is work AI does well. Deciding coverage, risk, and priority is a judgment call that stays with people.",
          "A scored review — coverage, logic, executability, clarity, security — keeps the human in the loop and makes the AI output auditable instead of trusted blindly.",
        ],
      },
    ],
  },
];

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
