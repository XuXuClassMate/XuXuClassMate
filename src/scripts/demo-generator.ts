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

type DemoPayload = {
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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
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
  const review = root.querySelector<HTMLElement>("[data-demo-review]");
  const personas = root.querySelectorAll<HTMLElement>("[data-persona]");
  const exportBlock = root.querySelector<HTMLElement>("[data-demo-export]");
  const exportItems = root.querySelectorAll<HTMLElement>("[data-export-item]");
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
    !review ||
    !exportBlock ||
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
  const reviewEl = review;
  const exportBlockEl = exportBlock;

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

  function resetExports(): void {
    for (const node of exportItems) {
      node.classList.remove("is-active", "is-done");
    }
  }

  function setIdleActivity(): void {
    activityDetailEl.textContent = labels.activityIdle;
    activityLogEl.innerHTML = `<li class="is-idle">${labels.activityIdle}</li>`;
  }

  function resetOutput(): void {
    clearStages();
    resetPersonas();
    resetExports();
    resultsBlockEl.classList.add("is-hidden");
    reviewEl.classList.add("is-hidden");
    exportBlockEl.classList.add("is-hidden");
    resultsEl.innerHTML = "";
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
        for (const item of cases) {
          if (token !== runToken) return;
          resultsEl.insertAdjacentHTML("beforeend", renderCase(item, labels));
          const card = resultsEl.lastElementChild;
          if (card instanceof HTMLElement) {
            requestAnimationFrame(() => {
              card.classList.add("is-visible");
            });
          }
          await sleep(320);
        }
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
        for (const item of exportItems) {
          if (token !== runToken) return;
          item.classList.add("is-active");
          await sleep(220);
          item.classList.remove("is-active");
          item.classList.add("is-done");
        }
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
