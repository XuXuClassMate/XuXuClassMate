import Link from "next/link";
import type { Metadata } from "next";
import { NOTES } from "@/lib/notes";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { T, LocalDate } from "@/components/i18n";

export const metadata: Metadata = {
  title: "Engineering Notes — XuXuClassMate",
  description:
    "Field notes on Playwright, Docker test infrastructure, and AI in QA — written from real work.",
};

export default function NotesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[calc(var(--nav-h)+80px)]">
        <Aurora />
        <div className="container-ap pb-14 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="Engineering" zh="工程" ar="الهندسة" fr="Ingénierie" ru="Инженерия" es="Ingeniería" />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              <T en="Field notes from shipping quality." zh="来自交付质量一线的笔记。" ar="ملاحظات ميدانية من تسليم الجودة." fr="Notes de terrain sur la livraison de la qualité." ru="Полевые заметки о поставке качества." es="Notas de campo sobre entregar calidad." />
            </h1>
            <p className="lead mx-auto mt-5 max-w-[44ch]">
              <T
                en="Playwright, Docker test infrastructure, and AI in QA — written from real work, not theory."
                zh="Playwright、Docker 测试基础设施,以及 QA 中的 AI——写自真实工作,而非空谈。"
                ar="Playwright، وبنية اختبار Docker، والذكاء الاصطناعي في ضمان الجودة — مكتوبة من عمل حقيقي لا من نظريات."
                fr="Playwright, l'infrastructure de test Docker et l'IA en QA — écrit à partir de travail réel, pas de théorie."
                ru="Playwright, тестовая инфраструктура на Docker и ИИ в QA — из реальной работы, а не теории."
                es="Playwright, infraestructura de pruebas con Docker e IA en QA — escrito desde el trabajo real, no la teoría."
              />
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
                  <span><T {...n.category} /></span>
                  <span aria-hidden="true">·</span>
                  <span><LocalDate iso={n.date} /></span>
                  <span aria-hidden="true">·</span>
                  <span><T {...n.readingTime} /></span>
                </div>
                <h2 className="mt-2 text-[clamp(24px,3vw,32px)] font-semibold tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
                  <T {...n.title} />
                </h2>
                <p className="mt-2 max-w-[60ch] text-[17px] leading-relaxed text-muted">
                  <T {...n.excerpt} />
                </p>
                <span className="link-ap mt-4">
                  <T en="Read" zh="阅读" ar="اقرأ" fr="Lire" ru="Читать" es="Leer" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
