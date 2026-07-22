type DemoCase = {
  id: string;
  title: string;
  steps: string[];
  expected: string;
  priority: string;
};

type DemoPayload = {
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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function renderCases(
  container: HTMLElement,
  cases: DemoCase[],
  labels: DemoPayload["labels"],
): void {
  container.innerHTML = cases
    .map(
      (item) => `
      <article class="demo-case">
        <div class="demo-case-head">
          <span class="demo-case-id">${item.id}</span>
          <span class="demo-case-priority">${item.priority}</span>
        </div>
        <h3>${item.title}</h3>
        <p class="demo-case-label">${labels.steps}</p>
        <ol>
          ${item.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        <p class="demo-case-label">${labels.expected}</p>
        <p class="demo-case-expected">${item.expected}</p>
      </article>`,
    )
    .join("");
}

export function initGeneratorDemo(root: HTMLElement): void {
  const input = root.querySelector<HTMLTextAreaElement>("[data-demo-input]");
  const sampleBtn = root.querySelector<HTMLButtonElement>("[data-demo-sample]");
  const fileInput = root.querySelector<HTMLInputElement>("[data-demo-file]");
  const fileLabel = root.querySelector<HTMLElement>("[data-demo-file-label]");
  const generateBtn = root.querySelector<HTMLButtonElement>("[data-demo-generate]");
  const resetBtn = root.querySelector<HTMLButtonElement>("[data-demo-reset]");
  const pipeline = root.querySelector<HTMLElement>("[data-demo-pipeline]");
  const results = root.querySelector<HTMLElement>("[data-demo-results]");
  const empty = root.querySelector<HTMLElement>("[data-demo-empty]");
  const review = root.querySelector<HTMLElement>("[data-demo-review]");
  const dataNode = document.getElementById("demo-generator-data");

  if (
    !input ||
    !sampleBtn ||
    !fileInput ||
    !fileLabel ||
    !generateBtn ||
    !resetBtn ||
    !pipeline ||
    !results ||
    !empty ||
    !review ||
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
  const resultsEl = results;
  const emptyEl = empty;
  const reviewEl = review;

  let payload: DemoPayload | null = null;
  try {
    payload = JSON.parse(dataNode.textContent || "null") as DemoPayload;
  } catch {
    payload = null;
  }
  if (!payload) return;

  const { samplePrd, cases, labels } = payload;
  const stageNodes = [
    ...pipelineEl.querySelectorAll<HTMLElement>("[data-stage]"),
  ];

  function clearStages(): void {
    for (const node of stageNodes) {
      node.classList.remove("is-active", "is-done");
    }
  }

  function resetOutput(): void {
    clearStages();
    resultsEl.classList.add("is-hidden");
    reviewEl.classList.add("is-hidden");
    emptyEl.classList.remove("is-hidden");
    resultsEl.innerHTML = "";
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
    inputEl.value = "";
    fileInputEl.value = "";
    fileLabelEl.textContent = labels.uploadHint;
    generateBtnEl.disabled = false;
    generateBtnEl.textContent = labels.generate;
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

    generateBtnEl.disabled = true;
    generateBtnEl.textContent = labels.generating;
    resetOutput();
    emptyEl.classList.add("is-hidden");

    for (let index = 0; index < stageNodes.length; index += 1) {
      const current = stageNodes[index];
      if (!current) continue;
      current.classList.add("is-active");
      await sleep(420);
      current.classList.remove("is-active");
      current.classList.add("is-done");
    }

    renderCases(resultsEl, cases, labels);
    resultsEl.classList.remove("is-hidden");
    reviewEl.classList.remove("is-hidden");
    generateBtnEl.disabled = false;
    generateBtnEl.textContent = labels.generate;
  });
}
