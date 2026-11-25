"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTx } from "@/components/i18n";
import { Aurora } from "@/components/aurora";

const ease = [0.22, 0.61, 0.36, 1] as const;

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
        <motion.h1 className="display-1 mx-auto mt-3 max-w-[17ch]" {...rise(0.12)}>
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
        <motion.div
          className="mt-7 flex items-center justify-center gap-7"
          {...rise(0.28)}
        >
          <Link href="/#overview" className="link-ap">
            {tx({ en: "See the work", zh: "查看作品", ar: "شاهد الأعمال", fr: "Voir le travail", ru: "Смотреть работы", es: "Ver el trabajo" })}
          </Link>
          <Link href="/products/testcase-generator" className="link-ap">
            {tx({ en: "Try the generator", zh: "试用生成器", ar: "جرّب المولّد", fr: "Essayer le générateur", ru: "Попробовать генератор", es: "Probar el generador" })}
          </Link>
        </motion.div>
      </div>

      {/* Product visual: the generator's real output, as a window */}
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
        <GeneratorWindow />
      </motion.div>
    </section>
  );
}

function GeneratorWindow() {
  const tx = useTx();
  const reduce = useReducedMotion();
  const cases = [
    {
      id: "TC-01",
      p: "P0",
      title: {
        en: "Request OTP with a valid email",
        zh: "使用有效邮箱请求验证码",
        ar: "طلب رمز OTP ببريد صالح",
        fr: "Demander un OTP avec un e-mail valide",
        ru: "Запрос OTP с корректным email",
        es: "Solicitar OTP con un correo válido",
      },
      steps: 3,
      expected: {
        en: "OTP sent, 5-min countdown",
        zh: "验证码已发送,5 分钟倒计时",
        ar: "تم إرسال الرمز، عدّ تنازلي 5 دقائق",
        fr: "OTP envoyé, compte à rebours 5 min",
        ru: "OTP отправлен, отсчёт 5 мин",
        es: "OTP enviado, cuenta atrás 5 min",
      },
    },
    {
      id: "TC-02",
      p: "P1",
      title: {
        en: "Reject an invalid email format",
        zh: "拒绝非法邮箱格式",
        ar: "رفض صيغة بريد غير صالحة",
        fr: "Rejeter un format d'e-mail invalide",
        ru: "Отклонить неверный формат email",
        es: "Rechazar un formato de correo inválido",
      },
      steps: 3,
      expected: {
        en: "Inline error, no OTP",
        zh: "行内报错,不发送验证码",
        ar: "خطأ ضمن الحقل، بدون OTP",
        fr: "Erreur en ligne, pas d'OTP",
        ru: "Ошибка рядом с полем, без OTP",
        es: "Error en línea, sin OTP",
      },
    },
    {
      id: "TC-03",
      p: "P2",
      title: {
        en: "Resend is rate-limited after 3 tries",
        zh: "重发 3 次后被限流",
        ar: "تحديد معدّل إعادة الإرسال بعد 3 محاولات",
        fr: "Renvoi limité après 3 essais",
        ru: "Повторная отправка ограничена после 3 попыток",
        es: "Reenvío limitado tras 3 intentos",
      },
      steps: 4,
      expected: {
        en: "Cooldown shown, send disabled",
        zh: "显示冷却,发送禁用",
        ar: "عرض مهلة، تعطيل الإرسال",
        fr: "Délai affiché, envoi désactivé",
        ru: "Показан таймаут, отправка отключена",
        es: "Enfriamiento mostrado, envío desactivado",
      },
    },
  ];
  const total = cases.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(reduce ? total : 0);
  const [typed, setTyped] = useState(0);

  const current = revealed < total ? cases[revealed] : null;
  const curTitle = current ? tx(current.title) : "";
  const done = reduce || revealed >= total;

  // Start generating once the window scrolls into view.
  useEffect(() => {
    if (reduce) return;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  // Typewriter: type the current case title, then reveal it and advance.
  useEffect(() => {
    if (reduce || !started || !current) return;
    if (typed < curTitle.length) {
      const id = setTimeout(() => setTyped((v) => v + 1), 24);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setRevealed((v) => v + 1);
      setTyped(0);
    }, 360);
    return () => clearTimeout(id);
  }, [started, typed, revealed, curTitle, current, reduce]);

  const meta = (c: (typeof cases)[number]) => (
    <>
      {tx({ en: "Steps", zh: "步骤", ar: "خطوات", fr: "Étapes", ru: "Шаги", es: "Pasos" })} {c.steps} ·{" "}
      {tx({ en: "Expected", zh: "预期", ar: "المتوقع", fr: "Attendu", ru: "Ожидается", es: "Esperado" })}:{" "}
      <span className="text-[#6fd39a]">{tx(c.expected)}</span>
    </>
  );

  return (
    <div
      ref={rootRef}
      className="mx-auto max-w-[920px] overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-panel shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5" dir="ltr">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-3 flex items-center gap-2 font-mono text-[12px] text-panel-muted">
          <span className="relative flex h-1.5 w-1.5">
            {done && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#6fd39a] opacity-70 motion-safe:animate-ping" />
            )}
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${done ? "bg-[#6fd39a]" : "bg-[#f5c451] motion-safe:animate-pulse"}`}
            />
          </span>
          testcase-generator —{" "}
          {done
            ? tx({ en: "reviewed set", zh: "已评审用例集", ar: "مجموعة مُراجَعة", fr: "ensemble relu", ru: "проверенный набор", es: "conjunto revisado" })
            : "generating…"}
        </span>
      </div>
      <div className="grid gap-3 p-5 sm:p-7">
        {cases.map((c, i) => {
          if (done || i < revealed) {
            return (
              <div key={c.id} className="rounded-xl border border-white/10 p-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] text-[#5ac8fa]">{c.id}</span>
                  <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[11px] font-medium text-white">
                    {c.p}
                  </span>
                </div>
                <p className="mt-1.5 text-[15px] text-panel-ink">{tx(c.title)}</p>
                <p className="mt-1 font-mono text-[12px] text-panel-muted">{meta(c)}</p>
              </div>
            );
          }
          if (i === revealed && started) {
            return (
              <div
                key={c.id}
                className="rounded-xl border border-[#5ac8fa]/30 bg-white/[0.02] p-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] text-[#5ac8fa]">{c.id}</span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-panel-muted">
                    {c.p}
                  </span>
                </div>
                <p className="mt-1.5 text-[15px] text-panel-ink">
                  {curTitle.slice(0, typed)}
                  <span aria-hidden="true" className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-[#5ac8fa] align-middle motion-safe:animate-pulse" />
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
