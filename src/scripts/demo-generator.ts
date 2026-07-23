type DemoCase = {
  id: string;
  title: string;
  steps: string[];
  expected: string;
  priority: string;
};

type DemoStage = {
  title: string;
  detail: string;
  logs: string[];
};

type DemoExportItem = {
  id: string;
  label: string;
};

type DemoPayload = {
  samplePrd: string;
  cases: DemoCase[];
  stages: DemoStage[];
  exportItems: DemoExportItem[];
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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function escapeCsv(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function downloadBlob(filename: string, content: string, mime: string): void {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function buildMarkdown(cases: DemoCase[], labels: DemoPayload["labels"]): string {
  const lines = ["# Demo test cases", ""];
  for (const item of cases) {
    lines.push(`## ${item.id} · ${item.title}`);
    lines.push("");
    lines.push(`- Priority: ${item.priority}`);
    lines.push(`- ${labels.steps}:`);
    for (const step of item.steps) {
      lines.push(`  1. ${step}`);
    }
    lines.push(`- ${labels.expected}: ${item.expected}`);
    lines.push("");
  }
  return lines.join("\n");
}

function buildCsv(cases: DemoCase[], labels: DemoPayload["labels"]): string {
  const header = ["ID", "Title", "Priority", labels.steps, labels.expected];
  const rows = cases.map((item) =>
    [
      item.id,
      item.title,
      item.priority,
      item.steps.join(" | "),
      item.expected,
    ]
      .map(escapeCsv)
      .join(","),
  );
  return [header.join(","), ...rows].join("\n");
}

function buildXmindOutline(cases: DemoCase[]): string {
  const lines = ["AI Test Case Generator Demo", "  Structured Cases"];
  for (const item of cases) {
    lines.push(`    ${item.id} ${item.title} [${item.priority}]`);
    for (const step of item.steps) {
      lines.push(`      ${step}`);
    }
    lines.push(`      Expected: ${item.expected}`);
  }
  return `${lines.join("\n")}\n`;
}

function buildAutomationJson(cases: DemoCase[]): string {
  return `${JSON.stringify(
    {
      source: "xuxuclassmate-demo",
      format: "automation-suite",
      cases: cases.map((item) => ({
        id: item.id,
        title: item.title,
        priority: item.priority,
        steps: item.steps,
        expected: item.expected,
      })),
    },
    null,
    2,
  )}\n`;
}

function renderCase(
  item: DemoCase,
  labels: DemoPayload["labels"],
): string {
  return `
    <article class="demo-case is-entering">
      <div class="demo-case-head">
        <span class="demo-case-id">${item.id}</span>
        <span class="demo-case-priority">${item.priority}</span>
      </div>
      <h4>${item.title}</h4>
      <p class="demo-case-label">${labels.steps}</p>
      <ol>
        ${item.steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
      <p class="demo-case-label">${labels.expected}</p>
      <p class="demo-case-expected">${item.expected}</p>
    </article>`;
}

export function initGeneratorDemo(root: HTMLElement): void {
  const input = root.querySelector<HTMLTextAreaElement>("[data-demo-input]");
  const sampleBtn = root.querySelector<HTMLButtonElement>("[data-demo-sample]");
  const fileInput = root.querySelector<HTMLInputElement>("[data-demo-file]");
  const fileLabel = root.querySelector<HTMLElement>("[data-demo-file-label]");
  const generateBtn = root.querySelector<HTMLButtonElement>("[data-demo-generate]");
  const resetBtn = root.querySelector<HTMLButtonElement>("[data-demo-reset]");
  const pipeline = root.querySelector<HTMLElement>("[data-demo-pipeline]");
  const activityDetail = root.querySelector<HTMLElement>(
    "[data-demo-activity-detail]",
  );
  const activityLog = root.querySelector<HTMLElement>("[data-demo-activity-log]");
  const resultsBlock = root.querySelector<HTMLElement>(
    "[data-demo-results-block]",
  );
  const results = root.querySelector<HTMLElement>("[data-demo-results]");
  const resultsCount = root.querySelector<HTMLElement>(
    "[data-demo-results-count]",
  );
  const review = root.querySelector<HTMLElement>("[data-demo-review]");
  const personas = root.querySelectorAll<HTMLElement>("[data-persona]");
  const exportBlock = root.querySelector<HTMLElement>("[data-demo-export]");
  const exportButtons = root.querySelectorAll<HTMLButtonElement>(
    "[data-export-item]",
  );
  const exportStatus = root.querySelector<HTMLElement>(
    "[data-demo-export-status]",
  );
  const dataNode = document.getElementById("demo-generator-data");

  if (
    !input ||
    !sampleBtn ||
    !fileInput ||
    !fileLabel ||
    !generateBtn ||
    !resetBtn ||
    !pipeline ||
    !activityDetail ||
    !activityLog ||
    !resultsBlock ||
    !results ||
    !resultsCount ||
    !review ||
    !exportBlock ||
    !exportStatus ||
    !dataNode
  ) {
    return;
  }

  const inputEl = input;
  const sampleBtnEl = sampleBtn;
  const fileInputEl = fileInput;
  const fileLabelEl = fileLabel;
  const generateBtnEl = generateBtn;
  const resetBtnEl = resetBtn;
  const pipelineEl = pipeline;
  const activityDetailEl = activityDetail;
  const activityLogEl = activityLog;
  const resultsBlockEl = resultsBlock;
  const resultsEl = results;
  const resultsCountEl = resultsCount;
  const reviewEl = review;
  const exportBlockEl = exportBlock;
  const exportStatusEl = exportStatus;

  let payload: DemoPayload | null = null;
  try {
    payload = JSON.parse(dataNode.textContent || "null") as DemoPayload;
  } catch {
    payload = null;
  }
  if (!payload) return;

  const { samplePrd, cases, stages, labels } = payload;
  const stageNodes = [
    ...pipelineEl.querySelectorAll<HTMLElement>("[data-stage]"),
  ];
  let runToken = 0;
  let casesReady = false;

  function clearStages(): void {
    for (const node of stageNodes) {
      node.classList.remove("is-active", "is-done");
    }
  }

  function resetPersonas(): void {
    for (const node of personas) {
      node.classList.remove("is-active", "is-done");
    }
  }

  function setExportEnabled(enabled: boolean): void {
    for (const button of exportButtons) {
      button.disabled = !enabled;
      button.classList.toggle("is-done", enabled);
      button.classList.remove("is-active");
    }
  }

  function setIdleActivity(): void {
    activityDetailEl.textContent = labels.activityIdle;
    activityLogEl.innerHTML = `<li class="is-idle">${labels.activityIdle}</li>`;
  }

  function resetOutput(): void {
    clearStages();
    resetPersonas();
    setExportEnabled(false);
    casesReady = false;
    resultsBlockEl.classList.add("is-hidden");
    reviewEl.classList.add("is-hidden");
    exportBlockEl.classList.add("is-hidden");
    resultsEl.innerHTML = "";
    resultsCountEl.textContent = "";
    exportStatusEl.hidden = true;
    exportStatusEl.textContent = "";
    setIdleActivity();
  }

  function appendLog(message: string, tone: "active" | "done" = "active"): void {
    const idle = activityLogEl.querySelector(".is-idle");
    idle?.remove();
    const item = document.createElement("li");
    item.className = tone === "done" ? "is-done" : "is-active";
    item.textContent = message;
    activityLogEl.appendChild(item);
    activityLogEl.scrollTop = activityLogEl.scrollHeight;
  }

  function downloadExport(id: string, label: string): void {
    if (!casesReady) return;

    if (id === "excel") {
      downloadBlob(
        "demo-test-cases.csv",
        buildCsv(cases, labels),
        "text/csv;charset=utf-8",
      );
    } else if (id === "markdown") {
      downloadBlob(
        "demo-test-cases.md",
        buildMarkdown(cases, labels),
        "text/markdown;charset=utf-8",
      );
    } else if (id === "xmind") {
      downloadBlob(
        "demo-test-cases-outline.txt",
        buildXmindOutline(cases),
        "text/plain;charset=utf-8",
      );
    } else {
      downloadBlob(
        "demo-automation-suite.json",
        buildAutomationJson(cases),
        "application/json;charset=utf-8",
      );
    }

    exportStatusEl.hidden = false;
    exportStatusEl.textContent = labels.exportDownloaded.replace(
      "{format}",
      label,
    );
  }

  sampleBtnEl.addEventListener("click", () => {
    inputEl.value = samplePrd;
    fileLabelEl.textContent = labels.uploadHint;
    fileInputEl.value = "";
  });

  fileInputEl.addEventListener("change", () => {
    const file = fileInputEl.files?.[0];
    if (!file) return;
    fileLabelEl.textContent = `${labels.fileReady} ${file.name}`;
    if (!inputEl.value.trim()) {
      inputEl.value = samplePrd;
    }
  });

  resetBtnEl.addEventListener("click", () => {
    runToken += 1;
    inputEl.value = "";
    fileInputEl.value = "";
    fileLabelEl.textContent = labels.uploadHint;
    generateBtnEl.disabled = false;
    generateBtnEl.textContent = labels.generate;
    root.classList.remove("is-running");
    resetOutput();
  });

  for (const button of exportButtons) {
    button.addEventListener("click", () => {
      const id = button.dataset.exportId || "markdown";
      const label = button.dataset.exportLabel || id;
      button.classList.add("is-active");
      downloadExport(id, label);
      window.setTimeout(() => {
        button.classList.remove("is-active");
      }, 250);
    });
  }

  generateBtnEl.addEventListener("click", async () => {
    if (!inputEl.value.trim() && !fileInputEl.files?.length) {
      inputEl.focus();
      return;
    }
    if (!inputEl.value.trim()) {
      inputEl.value = samplePrd;
    }

    const token = ++runToken;
    generateBtnEl.disabled = true;
    generateBtnEl.textContent = labels.generating;
    root.classList.add("is-running");
    resetOutput();
    activityLogEl.innerHTML = "";

    for (let index = 0; index < stages.length; index += 1) {
      if (token !== runToken) return;

      const stage = stages[index];
      const stageNode = stageNodes[index];
      if (!stage || !stageNode) continue;

      stageNode.classList.add("is-active");
      activityDetailEl.textContent = stage.detail;
      appendLog(`${String(index + 1).padStart(2, "0")} · ${stage.title}`);

      for (const line of stage.logs) {
        if (token !== runToken) return;
        await sleep(380);
        appendLog(line);
      }

      if (index === 1) {
        resultsBlockEl.classList.remove("is-hidden");
        resultsCountEl.textContent = labels.resultsCountLabel.replace(
          "{n}",
          String(cases.length),
        );
        resultsEl.innerHTML = "";
        for (const item of cases) {
          if (token !== runToken) return;
          resultsEl.insertAdjacentHTML("beforeend", renderCase(item, labels));
          const card = resultsEl.lastElementChild;
          if (card instanceof HTMLElement) {
            requestAnimationFrame(() => {
              card.classList.add("is-visible");
            });
          }
          await sleep(280);
        }
        casesReady = true;
        resultsBlockEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      if (index === 2) {
        reviewEl.classList.remove("is-hidden");
        for (const persona of personas) {
          if (token !== runToken) return;
          persona.classList.add("is-active");
          await sleep(280);
          persona.classList.remove("is-active");
          persona.classList.add("is-done");
        }
      }

      if (index === 3) {
        exportBlockEl.classList.remove("is-hidden");
        for (const button of exportButtons) {
          if (token !== runToken) return;
          button.classList.add("is-active");
          await sleep(180);
          button.classList.remove("is-active");
        }
        setExportEnabled(true);
      }

      await sleep(220);
      if (token !== runToken) return;
      stageNode.classList.remove("is-active");
      stageNode.classList.add("is-done");
      appendLog(`✓ ${stage.title}`, "done");
    }

    if (token !== runToken) return;
    root.classList.remove("is-running");
    generateBtnEl.disabled = false;
    generateBtnEl.textContent = labels.generate;
  });
}
