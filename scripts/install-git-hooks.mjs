#!/usr/bin/env node
import { chmodSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hook = path.join(root, ".githooks", "prepare-commit-msg");

if (!existsSync(hook)) {
  process.exit(0);
}

chmodSync(hook, 0o755);

try {
  const current = execSync("git config --get core.hooksPath", {
    cwd: root,
    encoding: "utf8",
  }).trim();
  if (current === ".githooks") {
    process.exit(0);
  }
} catch {
  // not set
}

execSync("git config core.hooksPath .githooks", { cwd: root, stdio: "inherit" });
