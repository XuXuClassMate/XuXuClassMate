import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { LiveStat } from "@/components/live-stat";
import { HUES } from "@/lib/hues";
import { T } from "@/components/i18n";
import { Icon } from "@/components/icons";
import { AI_ROLES } from "@/lib/about-content";
import {
  WF_SUMMARY,
  WF_HEADINGS,
  PRINCIPLES,
  FLOW,
  HUMAN_LOOP,
  SAFETY,
} from "@/lib/ai-workflow-content";

export const metadata: Metadata = {
  title: "AI collaboration workflow — XuXuClassMate",
  description:
    "A one-person test team run with AI: a lead dispatches to role-split assistants (test execution, defects, notifications, code, docs), tied together by handoff rules, memory, and safety redlines — with the human on the key decisions.",
};

export default function AiWorkflowPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--nav-h)+80px)]">
        <Aurora />
        <div className="container-ap pb-16 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="AI collaboration" zh="AI 协作" ar="التعاون مع الذكاء الاصطناعي" fr="Collaboration IA" ru="Работа с ИИ" es="Colaboración con IA" />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              <T en="A one-person test team, run with AI." zh="用 AI 带起来的一人测试团队。" ar="فريق اختبار من شخص واحد، يُدار بالذكاء الاصطناعي." fr="Une équipe de test d'une personne, menée avec l'IA." ru="Команда тестирования из одного человека — на базе ИИ." es="Un equipo de pruebas de una persona, gestionado con IA." />
            </h1>
            <p className="lead mx-auto mt-6 max-w-[62ch] text-start">
              <T {...WF_SUMMARY} />
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LiveStat
                kind="claw-total"
                fallback={10868}
                label={{ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-[14px]">
                <strong className="font-semibold text-ink">10</strong>
                <span className="text-muted">
                  <T en="skills shipped" zh="个已发布技能" ar="مهارات منشورة" fr="compétences publiées" ru="опубликованных навыков" es="habilidades publicadas" />
                </span>
              </span>
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
              <Reveal key={p.title.en} delay={(i % 3) * 0.06}>
                <article className="card-ap h-full rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-7">
                  <span className="font-mono text-[13px] text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[20px] font-semibold tracking-tight">
                    <T {...p.title} />
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
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
              <Reveal key={r.title.en} delay={(i % 3) * 0.06}>
                <article className="card-ap flex h-full items-start gap-4 rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-6">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${HUES[i % HUES.length]} 15%, transparent)`, color: HUES[i % HUES.length] }}
                  >
                    <Icon name={r.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-tight">
                      <T {...r.title} />
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      <T {...r.body} />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end flow */}
      <section className="bg-[var(--color-surface)]">
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
                  <span className="font-mono text-[22px] font-semibold leading-none text-[var(--color-accent)]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold tracking-tight">
                      <T {...s.title} />
                    </h3>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-muted">
                      <T {...s.body} />
                    </p>
                  </div>
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
