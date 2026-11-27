import type { Note } from "./shared";
import { frontEndPerformance } from "./front-end-performance";
import { playwrightAtScale } from "./playwright-at-scale";
import { disposableTestDatabases } from "./disposable-test-databases";
import { permissionsMultiTenant } from "./permissions-multi-tenant";
import { aiInQa } from "./ai-in-qa";

export type { Note, NoteSection, CodeBlock } from "./shared";

export const NOTES: Note[] = [
  frontEndPerformance,
  playwrightAtScale,
  disposableTestDatabases,
  permissionsMultiTenant,
  aiInQa,
];

export function getNote(slug: string) {
  return NOTES.find((n) => n.slug === slug);
}
