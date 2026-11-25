import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NOTES, getNote, formatDate } from "@/lib/notes";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return { title: "Note — XuXuClassMate" };
  return { title: `${n.title} — XuXuClassMate`, description: n.excerpt };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) notFound();

  return (
    <article className="pt-[calc(var(--nav-h)+72px)]">
      <div className="container-ap">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <Link href="/notes" className="text-[15px] text-muted hover:text-ink">
              ← Engineering notes
            </Link>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-muted">
              <span>{n.category}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(n.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{n.readingTime}</span>
            </div>
            <h1 className="mt-3 text-[clamp(32px,5vw,56px)] font-semibold leading-[1.07] tracking-tight">
              {n.title}
            </h1>
            <p className="mt-5 text-[21px] leading-relaxed text-muted">
              {n.excerpt}
            </p>
          </Reveal>

          <div className="mt-14 space-y-12 pb-28">
            {n.body.map((section) => (
              <Reveal key={section.heading} as="section">
                <h2 className="text-[26px] font-semibold tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-[18px] leading-[1.6] text-ink/90"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
