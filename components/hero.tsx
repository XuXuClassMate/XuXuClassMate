"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useTx, type Localized } from "@/components/i18n";
import { Aurora } from "@/components/aurora";

const ease = [0.22, 0.61, 0.36, 1] as const;

const MotionLink = motion.create(Link);

export function Hero() {
  const reduce = useReducedMotion();
  const tx = useTx();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-h)+64px)]">
      <Aurora />
      <div className="container-ap pb-20 text-center">
        <motion.p className="eyebrow" {...rise(0.05)}>
          {tx({
            en: "AI-powered Quality Engineering",
            zh: "AI 驱动的质量工程",
            ar: "هندسة جودة مدعومة بالذكاء الاصطناعي",
            fr: "Ingénierie qualité propulsée par l'IA",
            ru: "Инженерия качества на базе ИИ",
            es: "Ingeniería de calidad potenciada por IA",
          })}
        </motion.p>
        <motion.h1 className="display-1 text-gradient mx-auto mt-3 max-w-[17ch] pb-1" {...rise(0.12)}>
          {tx({
            en: "AI testing tools, built to run.",
            zh: "AI 测试工具,为运行而生。",
            ar: "أدوات اختبار بالذكاء الاصطناعي، صُنعت لتعمل.",
            fr: "Des outils de test IA, faits pour tourner.",
            ru: "ИИ-инструменты тестирования, созданные, чтобы работать.",
            es: "Herramientas de prueba con IA, hechas para funcionar.",
          })}
        </motion.h1>
        <motion.p className="lead mx-auto mt-5 max-w-[46ch]" {...rise(0.2)}>
          {tx({
            en: "From an AI test-case generator to pullable test databases, a Docker Hub gateway, scheduled agents, and ClawHub skills — a small toolbox shipped to production and measured in the open.",
            zh: "从 AI 测试用例生成器,到可拉取的测试数据库、Docker Hub 网关、定时智能体与 ClawHub 技能——一个交付到生产、并在公开处实时度量的小工具箱。",
            ar: "من مولّد حالات اختبار بالذكاء الاصطناعي إلى قواعد بيانات اختبار قابلة للسحب، وبوابة Docker Hub، ووكلاء مجدولين، ومهارات ClawHub — صندوق أدوات صغير سُلّم إلى الإنتاج ويُقاس علناً.",
            fr: "D'un générateur de cas de test IA aux bases de test récupérables, une passerelle Docker Hub, des agents planifiés et des compétences ClawHub — une petite boîte à outils livrée en production et mesurée au grand jour.",
            ru: "От ИИ-генератора тест-кейсов до загружаемых тестовых баз, шлюза Docker Hub, запланированных агентов и навыков ClawHub — небольшой набор инструментов, поставленный в продакшен и измеряемый открыто.",
            es: "De un generador de casos de prueba con IA a bases de prueba descargables, una pasarela de Docker Hub, agentes programados y habilidades de ClawHub — una pequeña caja de herramientas llevada a producción y medida en abierto.",
          })}
        </motion.p>
        <motion.div className="mt-7 flex items-center justify-center gap-7" {...rise(0.28)}>
          <Link href="/#overview" className="link-ap">
            {tx({ en: "See the work", zh: "查看作品", ar: "شاهد الأعمال", fr: "Voir le travail", ru: "Смотреть работы", es: "Ver el trabajo" })}
          </Link>
          <Link href="/products" className="link-ap">
            {tx({ en: "Browse the toolbox", zh: "浏览工具箱", ar: "تصفّح الصندوق", fr: "Parcourir la boîte", ru: "Открыть набор", es: "Ver la caja" })}
          </Link>
        </motion.div>
      </div>

      {/* Hero visual: the whole toolbox at a glance (distinct from the testcase-generator deep-dive below) */}
      <motion.div
        className="container-ap pb-24"
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 48, scale: 0.98 },
              animate: { opacity: 1, y: 0, scale: 1 },
              transition: { duration: 0.9, delay: 0.36, ease },
            })}
      >
        <ToolboxWindow />
      </motion.div>
    </section>
  );
}

type Tool = { name: string; kind: Localized; tag: string; accent: string };

function ToolboxWindow() {
  const tx = useTx();
  const reduce = useReducedMotion();
  const tools: Tool[] = [
    {
      name: "testcase-generator",
      kind: { en: "Requirements → reviewed test cases", zh: "需求 → 评审后的测试用例", ar: "المتطلبات → حالات اختبار مُراجَعة", fr: "Exigences → cas de test relus", ru: "Требования → проверенные тест-кейсы", es: "Requisitos → casos de prueba revisados" },
      tag: "Docker · MCP",
      accent: "#5ac8fa",
    },
    {
      name: "test-db-suite",
      kind: { en: "Pullable, seeded test databases", zh: "可拉取、带种子数据的测试库", ar: "قواعد بيانات اختبار قابلة للسحب ومُهيّأة", fr: "Bases de test récupérables et amorcées", ru: "Загружаемые тестовые БД с данными", es: "Bases de prueba descargables con datos" },
      tag: "Docker",
      accent: "#2dd4bf",
    },
    {
      name: "docker-hub-api-gateway",
      kind: { en: "Docker Hub stats, one API", zh: "Docker Hub 数据,一个 API", ar: "إحصاءات Docker Hub عبر API واحد", fr: "Stats Docker Hub, une API", ru: "Статистика Docker Hub, один API", es: "Estadísticas de Docker Hub, una API" },
      tag: "Workers",
      accent: "#a78bfa",
    },
    {
      name: "relay",
      kind: { en: "Multi-agent dev+test workflow", zh: "多智能体开发+测试工作流", ar: "سير عمل تطوير واختبار متعدد الوكلاء", fr: "Workflow dev+test multi-agents", ru: "Мультиагентный процесс dev+test", es: "Flujo dev+test multiagente" },
      tag: "ClawHub · Docker",
      accent: "#f5b556",
    },
    {
      name: "scheduled-agents",
      kind: { en: "Routines that watch and report", zh: "定时巡检并汇报的智能体", ar: "روتينات تراقب وتُبلّغ", fr: "Routines qui surveillent et rapportent", ru: "Routines, что следят и отчитываются", es: "Rutinas que vigilan e informan" },
      tag: "Agents",
      accent: "#f06da0",
    },
  ];

  return (
    <div className="mx-auto max-w-[920px] overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-panel shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5" dir="ltr">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-3 flex items-center gap-2 font-mono text-[12px] text-panel-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#6fd39a] opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6fd39a]" />
          </span>
          {tx({ en: "the toolbox — shipped & measured in the open", zh: "工具箱 — 已交付并公开度量", ar: "صندوق الأدوات — مُسلّم ويُقاس علناً", fr: "la boîte à outils — livrée et mesurée au grand jour", ru: "набор — выпущен и измеряется открыто", es: "la caja — enviada y medida en abierto" })}
        </span>
      </div>
      <div className="grid gap-3 p-5 sm:p-7">
        {tools.map((t, i) => (
          <MotionLink
            href="/products"
            key={t.name}
            style={{ ["--acc" as string]: t.accent } as React.CSSProperties}
            className="group flex items-center gap-4 rounded-xl border border-white/10 p-4 text-left transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--acc)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--acc)_8%,transparent)] hover:shadow-[0_14px_36px_-16px_var(--acc)]"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-40px" },
                  transition: { duration: 0.5, delay: i * 0.08, ease },
                  whileHover: { y: -3 },
                  whileTap: { scale: 0.99 },
                })}
          >
            <span
              className="hidden h-9 w-9 shrink-0 place-items-center rounded-lg font-mono text-[13px] transition-transform duration-300 group-hover:scale-110 sm:grid"
              style={{ backgroundColor: `color-mix(in srgb, ${t.accent} 16%, transparent)`, color: t.accent }}
              aria-hidden="true"
            >
              {t.name.slice(0, 2)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-[13px]" style={{ color: t.accent }}>{t.name}</p>
              <p className="mt-0.5 text-[14px] text-panel-ink">{tx(t.kind)}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-panel-muted transition-colors duration-300 group-hover:border-[color-mix(in_srgb,var(--acc)_45%,transparent)] group-hover:text-panel-ink">
              {t.tag}
            </span>
            <span
              aria-hidden="true"
              className="-ml-1 shrink-0 translate-x-[-6px] font-mono text-[15px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              style={{ color: t.accent }}
            >
              →
            </span>
          </MotionLink>
        ))}
      </div>
    </div>
  );
}
