import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NOTES, getNote } from "@/lib/notes";
import { Reveal } from "@/components/reveal";
import { T, LocalDate } from "@/components/i18n";

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
  return { title: `${n.title.en} — XuXuClassMate`, description: n.excerpt.en };
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
              <T en="← Engineering notes" zh="← 工程笔记" ar="→ الملاحظات الهندسية" fr="← Notes d'ingénierie" ru="← Инженерные заметки" es="← Notas de ingeniería" />
            </Link>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-muted">
              <span><T {...n.category} /></span>
              <span aria-hidden="true">·</span>
              <span><LocalDate iso={n.date} /></span>
              <span aria-hidden="true">·</span>
              <span><T {...n.readingTime} /></span>
            </div>
            <h1 className="mt-3 text-[clamp(32px,5vw,56px)] font-semibold leading-[1.07] tracking-tight">
              <T {...n.title} />
            </h1>
            <p className="mt-5 text-[21px] leading-relaxed text-muted">
              <T {...n.excerpt} />
            </p>
          </Reveal>

          <div className="mt-14 space-y-12 pb-28">
            {n.body.map((section) => (
              <Reveal key={section.heading.en} as="section">
                <h2 className="text-[26px] font-semibold tracking-tight">
                  <T {...section.heading} />
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-[18px] leading-[1.6] text-ink/90"
                  >
                    <T {...p} />
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
