import Link from "next/link";
import type { Metadata } from "next";
import { NOTES } from "@/lib/notes";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { T, LocalDate } from "@/components/i18n";

export const metadata: Metadata = {
  title: "Engineering Notes — XuXuClassMate",
  description:
    "Field notes on performance budgets, Playwright flake, disposable test databases, permissions, and AI in QA — written from real work.",
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
                en="How I actually test: performance budgets, Playwright flake, disposable databases, permissions, and AI review — field notes, not outlines."
                zh="我实际怎么测:性能预算、Playwright 不稳定、用完即弃的库、权限,以及 AI 评审——现场笔记,不是提纲。"
                ar="كيف أختبر فعلاً: ميزانيات أداء، وتذبذب Playwright، وقواعد قابلة للتخلّص، وصلاحيات، ومراجعة الذكاء الاصطناعي — ملاحظات ميدان لا مخططات."
                fr="Comment je teste vraiment : budgets de perf, instabilité Playwright, bases jetables, permissions, revue IA — notes de terrain, pas des plans."
                ru="Как я реально тестирую: бюджеты производительности, флак Playwright, одноразовые базы, права, ревью ИИ — полевые заметки, не конспекты."
                es="Cómo testeo de verdad: presupuestos de rendimiento, flake de Playwright, bases desechables, permisos y revisión con IA — notas de campo, no esquemas."
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
