import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About — XuXuClassMate",
  description:
    "QA Engineer and SDET focused on test automation, AI testing, and shipping quality tools that run in production.",
};

const PRINCIPLES = [
  {
    title: "Quality that runs",
    body: "A test strategy only counts when it runs in a real environment. Tools ship as something you can install and pull, not a slide.",
  },
  {
    title: "AI drafts, people decide",
    body: "AI is good at the first draft of a test suite. Coverage, logic, and risk are still a human call — the workflow keeps both.",
  },
  {
    title: "Infrastructure is part of testing",
    body: "Flaky databases and slow environments are test problems. Disposable, pullable infra removes them.",
  },
  {
    title: "Write it down",
    body: "Field notes on Playwright, Docker testing, and AI in QA — from real work, so the next person moves faster.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-h)+80px)]">
        <div className="container-ap pb-20 text-center">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="display-1 mx-auto mt-3 max-w-[16ch]">
              Quality engineering, shipped.
            </h1>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              I&rsquo;m a QA Engineer and SDET building AI testing tools and the
              infrastructure to run them — test automation, API and performance
              testing, Docker test environments, and AI test generation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="mx-auto max-w-[24ch] text-center text-[clamp(28px,3.6vw,44px)] font-semibold leading-tight tracking-tight">
              From test automation into installable AI testing tools — the
              through-line is work that runs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-ap py-24">
        <Reveal>
          <h2 className="display-2 max-w-[16ch]">How I work.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article className="h-full rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8">
                <h3 className="text-[22px] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24 text-center">
          <Reveal>
            <h2 className="display-2 mx-auto max-w-[18ch]">Currently.</h2>
            <p className="lead mx-auto mt-5 max-w-[44ch]">
              Shipping the AI test-case generator as an installable product,
              keeping the test-database images pullable, and learning Web3
              testing and Kubernetes.
            </p>
            <div className="mt-7 flex justify-center gap-7">
              <Link href="/products" className="link-ap">
                See the products
              </Link>
              <Link href="/#try" className="link-ap">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
