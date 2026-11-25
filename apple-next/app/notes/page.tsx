import Link from "next/link";
import type { Metadata } from "next";
import { NOTES, formatDate } from "@/lib/notes";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Engineering Notes — XuXuClassMate",
  description:
    "Field notes on Playwright, Docker test infrastructure, and AI in QA — written from real work.",
};

export default function NotesPage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-h)+80px)]">
        <div className="container-ap pb-14 text-center">
          <Reveal>
            <p className="eyebrow">Engineering</p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              Field notes from shipping quality.
            </h1>
            <p className="lead mx-auto mt-5 max-w-[44ch]">
              Playwright, Docker test infrastructure, and AI in QA — written
              from real work, not theory.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-ap pb-28">
        <ul className="mx-auto max-w-[760px]">
          {NOTES.map((n) => (
            <Reveal as="li" key={n.slug}>
              <Link
                href={`/notes/${n.slug}`}
                className="group block border-t border-[var(--color-line)] py-9"
              >
                <div className="flex items-center gap-3 text-[13px] text-muted">
                  <span>{n.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{formatDate(n.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{n.readingTime}</span>
                </div>
                <h2 className="mt-2 text-[clamp(24px,3vw,32px)] font-semibold tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
                  {n.title}
                </h2>
                <p className="mt-2 max-w-[60ch] text-[17px] leading-relaxed text-muted">
                  {n.excerpt}
                </p>
                <span className="link-ap mt-4">Read</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
