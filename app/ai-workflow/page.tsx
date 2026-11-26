import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { LiveStat } from "@/components/live-stat";
import { HUES } from "@/lib/hues";
import { T } from "@/components/i18n";
import { Icon } from "@/components/icons";
import { AI_ROLES } from "@/lib/about-content";
import { cn } from "@/lib/utils";
import {
  WF_SUMMARY,
  WF_HEADINGS,
  PRINCIPLES,
  FLOW,
  HUMAN_LOOP,
  SAFETY,
  TOOLS,
  TOOLS_LABEL,
  TOOLS_NOTE,
  SKILL_GROUPS,
  EXAMPLE_INTRO,
  EXAMPLE_STEPS,
} from "@/lib/ai-workflow-content";

export const metadata: Metadata = {
  title: "AI collaboration workflow — XuXuClassMate",
  description:
    "A one-person test team run with AI: a lead dispatches to role-split assistants (test execution, defects, notifications, code, docs) across a 23-skill library, tied together by handoff rules, memory, and safety redlines. The skills are plain Markdown and run on any agent runtime — OpenClaw, Cursor, ChatGPT, Claude, GrokBot.",
};

export default function AiWorkflowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--nav-h)+80px)]">
        <Aurora />
        <div className="container-ap pb-24 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="AI collaboration" zh="AI 协作" ar="التعاون مع الذكاء الاصطناعي" fr="Collaboration IA" ru="Работа с ИИ" es="Colaboración con IA" />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              <T en="A one-person test team, run with AI." zh="用 AI 带起来的一人测试团队。" ar="فريق اختبار من شخص واحد، يُدار بالذكاء الاصطناعي." fr="Une équipe de test d'une personne, menée avec l'IA." ru="Команда тестирования из одного человека — на базе ИИ." es="Un equipo de pruebas de una persona, gestionado con IA." />
            </h1>
            {/* 标题居中时导语也居中,避免左对齐段落把首屏撑歪 */}
            <p className="lead mx-auto mt-6 max-w-[60ch]">
              <T {...WF_SUMMARY} />
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LiveStat
                kind="claw-total"
                fallback={10868}
                label={{ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }}
              />
              <span className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-[14px]">
                <strong className="shrink-0 font-semibold tabular-nums text-ink">23</strong>
                <span className="min-w-0 truncate text-muted">
                  <T en="skills in the pack" zh="个技能收录在包里" ar="مهارة في الحزمة" fr="compétences dans le pack" ru="навыков в наборе" es="habilidades en el pack" />
                </span>
              </span>
            </div>

            {/* Runtime compatibility tags */}
            <div className="mt-10">
              <p className="text-[13px] font-medium text-muted">
                <T {...TOOLS_LABEL} />
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                {TOOLS.map((t, i) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-[14px] font-medium text-ink"
                  >
                    <span style={{ color: HUES[i % HUES.length] }}>
                      <Icon name={t.icon} size={16} />
                    </span>
                    {t.name}
                  </span>
                ))}
              </div>
              <p className="mx-auto mt-4 max-w-[52ch] text-[14px] leading-relaxed text-muted">
                <T {...TOOLS_NOTE} />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three principles */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 max-w-[18ch]">
              <T {...WF_HEADINGS.principles} />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title.en} delay={(i % 3) * 0.06} className="h-full">
                <article className="card-ap flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-7">
                  <span className="font-mono text-[13px] text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[20px] font-semibold leading-snug tracking-tight text-balance">
                    <T {...p.title} />
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted text-pretty">
                    <T {...p.body} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Six roles */}
      <section className="bg-[var(--color-bg)]">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 max-w-[18ch]">
              <T {...WF_HEADINGS.roles} />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AI_ROLES.map((r, i) => (
              <Reveal key={r.title.en} delay={(i % 3) * 0.06} className="h-full">
                <article className="card-ap flex h-full items-start gap-4 rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-6">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${HUES[i % HUES.length]} 15%, transparent)`, color: HUES[i % HUES.length] }}
                  >
                    <Icon name={r.icon} size={20} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-semibold leading-snug tracking-tight text-pretty">
                      <T {...r.title} />
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted text-pretty">
                      <T {...r.body} />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skill library */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 max-w-[20ch]">
              <T {...WF_HEADINGS.skills} />
            </h2>
          </Reveal>
          <div className="mt-12 space-y-10">
            {SKILL_GROUPS.map((g, gi) => (
              <Reveal key={g.group.en} delay={(gi % 3) * 0.05}>
                <div className="flex items-center gap-4">
                  <h3 className="text-[14px] font-semibold uppercase tracking-wide" style={{ color: HUES[gi % HUES.length] }}>
                    <T {...g.group} />
                  </h3>
                  <span className="h-px flex-1 bg-[var(--color-line)]" />
                  <span className="font-mono text-[12px] text-muted">
                    {String(g.skills.length).padStart(2, "0")}
                  </span>
                </div>
                {/* 1/2/4 张时不用三列,避免末行孤张把分组撑歪 */}
                <div
                  className={cn(
                    "mt-5 grid gap-4",
                    g.skills.length === 1
                      ? "max-w-xl"
                      : g.skills.length === 2 || g.skills.length === 4
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-2 lg:grid-cols-3",
                  )}
                >
                  {g.skills.map((s) => (
                    <article
                      key={s.name.en}
                      className="card-ap flex h-full flex-col rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-5"
                    >
                      <span
                        className="mb-3 h-0.5 w-8 rounded-full"
                        style={{ background: HUES[gi % HUES.length] }}
                        aria-hidden="true"
                      />
                      <h4 className="text-[16px] font-semibold leading-snug tracking-tight text-pretty">
                        <T {...s.name} />
                      </h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted text-pretty">
                        <T {...s.desc} />
                      </p>
                    </article>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end flow */}
      <section className="bg-[var(--color-bg)]">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 max-w-[18ch]">
              <T {...WF_HEADINGS.flow} />
            </h2>
          </Reveal>
          <ol className="mx-auto mt-12 max-w-[760px] space-y-5">
            {FLOW.map((s) => (
              <Reveal as="li" key={s.n}>
                <div className="card-ap flex items-start gap-5 rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-6">
                  <span className="mt-0.5 font-mono text-[22px] font-semibold leading-none text-[var(--color-accent)]">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[19px] font-semibold leading-snug tracking-tight text-pretty">
                      <T {...s.title} />
                    </h3>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-muted text-pretty">
                      <T {...s.body} />
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Worked example */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 max-w-[18ch]">
              <T {...WF_HEADINGS.example} />
            </h2>
            <p className="lead mt-5 max-w-[52ch] text-pretty">
              <T {...EXAMPLE_INTRO} />
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {EXAMPLE_STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={(i % 2) * 0.06} className="h-full">
                <div className="card-ap flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-6">
                  <div className="flex items-start gap-3">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-[13px] font-semibold"
                      style={{ backgroundColor: `color-mix(in srgb, ${HUES[i % HUES.length]} 15%, transparent)`, color: HUES[i % HUES.length] }}
                    >
                      {s.n}
                    </span>
                    <h3 className="min-w-0 text-[18px] font-semibold leading-snug tracking-tight text-pretty">
                      <T {...s.title} />
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">
                    <T {...s.body} />
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Human-in-the-loop + safety */}
      <section className="bg-[var(--color-bg)]">
        <div className="container-ap grid gap-12 py-24 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(26px,3vw,36px)] font-semibold tracking-tight">
              <T {...WF_HEADINGS.human} />
            </h2>
            <ul className="mt-6 space-y-3">
              {HUMAN_LOOP.map((item) => (
                <li key={item.en} className="flex items-start gap-3 text-[16px] leading-relaxed">
                  <span className="mt-0.5 text-[var(--color-accent)]">
                    <Icon name="permissions" size={18} />
                  </span>
                  <T {...item} />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-[clamp(26px,3vw,36px)] font-semibold tracking-tight">
              <T {...WF_HEADINGS.safety} />
            </h2>
            <ul className="mt-6 space-y-3">
              {SAFETY.map((item) => (
                <li key={item.en} className="flex items-start gap-3 text-[16px] leading-relaxed text-muted">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <T {...item} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24 text-center">
          <Reveal>
            <p className="lead mx-auto max-w-[44ch]">
              <T
                en="The AI carries the repetitive execution and reporting; the strategy and the judgment stay with me."
                zh="AI 承担重复的执行与报告整理,策略与判断留在我手里。"
                ar="يتحمّل الذكاء الاصطناعي التنفيذ المتكرر وإعداد التقارير؛ وتبقى الاستراتيجية والحكم معي."
                fr="L'IA porte l'exécution répétitive et le reporting ; la stratégie et le jugement me reviennent."
                ru="ИИ берёт рутинное выполнение и отчётность; стратегия и решения остаются за мной."
                es="La IA se encarga de la ejecución repetitiva y los informes; la estrategia y el criterio siguen siendo míos."
              />
            </p>
            <div className="mt-7 flex justify-center gap-7">
              <Link href="/about" className="link-ap">
                <T en="About me" zh="关于我" ar="نبذة عني" fr="À propos de moi" ru="Обо мне" es="Sobre mí" />
              </Link>
              <Link href="/products" className="link-ap">
                <T en="See the products" zh="查看产品" ar="شاهد المنتجات" fr="Voir les produits" ru="Смотреть продукты" es="Ver los productos" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
