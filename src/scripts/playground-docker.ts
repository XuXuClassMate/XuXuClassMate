import { dockerUserStatsUrl } from "../lib/docker-gateway";

type DockerI18n = {
  loading: string;
  error: string;
  button: string;
};

type UserStats = {
  totalPulls?: unknown;
  repositoryCount?: unknown;
};

function readI18n(): DockerI18n {
  const node = document.getElementById("playground-docker-i18n");
  if (!(node instanceof HTMLScriptElement) || !node.textContent) {
    return {
      loading: "Loading…",
      error: "Request failed.",
      button: "Fetch",
    };
  }
  try {
    return JSON.parse(node.textContent) as DockerI18n;
  } catch {
    return {
      loading: "Loading…",
      error: "Request failed.",
      button: "Fetch",
    };
  }
}

function formatCount(value: number): string {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(
    value,
  );
}

export function initPlaygroundDocker(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>(
    "[data-playground-docker-form]",
  );
  const input = root.querySelector<HTMLInputElement>(
    "[data-playground-docker-user]",
  );
  const submit = root.querySelector<HTMLButtonElement>(
    "[data-playground-docker-submit]",
  );
  const status = root.querySelector<HTMLElement>(
    "[data-playground-docker-status]",
  );
  const result = root.querySelector<HTMLElement>(
    "[data-playground-docker-result]",
  );
  const empty = root.querySelector<HTMLElement>(
    "[data-playground-docker-empty]",
  );
  const pulls = root.querySelector<HTMLElement>(
    "[data-playground-docker-pulls]",
  );
  const repos = root.querySelector<HTMLElement>(
    "[data-playground-docker-repos]",
  );

  if (
    !form ||
    !input ||
    !submit ||
    !status ||
    !result ||
    !empty ||
    !pulls ||
    !repos
  ) {
    return;
  }

  const i18n = readI18n();

  const setBusy = (busy: boolean) => {
    submit.disabled = busy;
    input.disabled = busy;
    submit.textContent = busy ? i18n.loading : i18n.button;
  };

  const showError = (message: string) => {
    status.hidden = false;
    status.textContent = message;
    status.dataset.state = "error";
    result.hidden = true;
    empty.hidden = true;
  };

  const showResult = (totalPulls: number, repositoryCount: number | null) => {
    status.hidden = true;
    status.textContent = "";
    status.dataset.state = "";
    empty.hidden = true;
    result.hidden = false;
    pulls.textContent = formatCount(totalPulls);
    repos.textContent =
      repositoryCount == null ? "—" : formatCount(repositoryCount);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = input.value.trim();
    if (!username) {
      showError(i18n.error);
      return;
    }

    setBusy(true);
    status.hidden = false;
    status.dataset.state = "loading";
    status.textContent = i18n.loading;
    result.hidden = true;
    empty.hidden = true;

    try {
      const response = await fetch(dockerUserStatsUrl(username));
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const json = (await response.json()) as UserStats;
      if (
        typeof json.totalPulls !== "number" ||
        !Number.isFinite(json.totalPulls)
      ) {
        throw new Error("missing totalPulls");
      }
      const repositoryCount =
        typeof json.repositoryCount === "number" &&
        Number.isFinite(json.repositoryCount)
          ? json.repositoryCount
          : null;
      showResult(json.totalPulls, repositoryCount);
    } catch {
      showError(i18n.error);
    } finally {
      setBusy(false);
    }
  });
}
