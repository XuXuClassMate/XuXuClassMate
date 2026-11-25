import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Open Source — XuXuClassMate",
  description:
    "Open-source QA and developer-infrastructure projects: test-case generation, test-database images, Docker Hub tooling, and agent skills.",
};

const LINKS = [
  { label: "GitHub · InnoNestX", href: "https://github.com/InnoNestX" },
  { label: "Docker Hub", href: "https://hub.docker.com/u/xuxuclassmate" },
  { label: "ClawHub skills", href: "https://clawhub.ai/xuxuclassmate" },
];

export default function OpenSourcePage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-h)+80px)]">
        <div className="container-ap pb-16 text-center">
          <Reveal>
            <p className="eyebrow">Open Source</p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              Built in the open, shipped to run.
            </h1>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              The tools behind the work are public — install them, read the
              code, or open an issue.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ap"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-ap py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <article className="flex h-full flex-col rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-8">
                <p className="text-[13px] font-medium text-muted">{p.group}</p>
                <h2 className="mt-2 text-[24px] font-semibold tracking-tight">
                  {p.name}
                </h2>
                <p className="mt-2 text-[17px] leading-relaxed text-muted">
                  {p.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
                  {p.specs.slice(0, 2).map((s) => (
                    <span key={s.label} className="text-muted">
                      {s.label}: <span className="text-ink">{s.value}</span>
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}
