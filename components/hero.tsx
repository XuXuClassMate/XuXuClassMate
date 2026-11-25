"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useTx } from "@/components/i18n";

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
    <section className="ambient relative overflow-hidden pt-[calc(var(--nav-h)+64px)]">
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
        <motion.h1 className="display-1 mx-auto mt-3 max-w-[16ch]" {...rise(0.12)}>
          {tx({
            en: "Test cases your team can actually review.",
            zh: "团队真正能评审的测试用例。",
            ar: "حالات اختبار يمكن لفريقك مراجعتها فعلاً.",
            fr: "Des cas de test que votre équipe peut vraiment relire.",
            ru: "Тест-кейсы, которые команда действительно может проверить.",
            es: "Casos de prueba que tu equipo puede revisar de verdad.",
          })}
        </motion.h1>
        <motion.p className="lead mx-auto mt-5 max-w-[42ch]" {...rise(0.2)}>
          {tx({
            en: "Turn a requirement — PDF, image, or spec — into structured, reviewable test cases, and run them on pullable test databases.",
            zh: "把一份需求——PDF、截图或文档——变成结构化、可评审的测试用例,并在可一键拉取的测试数据库上运行。",
            ar: "حوّل متطلباً — ملف PDF أو صورة أو مواصفات — إلى حالات اختبار منظّمة وقابلة للمراجعة، وشغّلها على قواعد بيانات اختبار قابلة للسحب.",
            fr: "Transformez une exigence — PDF, image ou spécification — en cas de test structurés et relisables, puis exécutez-les sur des bases de test prêtes à l'emploi.",
            ru: "Превратите требование — PDF, изображение или спецификацию — в структурированные, проверяемые тест-кейсы и запускайте их на готовых тестовых базах данных.",
            es: "Convierte un requisito — PDF, imagen o especificación — en casos de prueba estructurados y revisables, y ejecútalos en bases de datos de prueba listas para usar.",
          })}
        </motion.p>
        <motion.div
          className="mt-7 flex items-center justify-center gap-7"
          {...rise(0.28)}
        >
          <Link href="/#try" className="link-ap">
            {tx({ en: "Try the generator", zh: "试用生成器", ar: "جرّب المولّد", fr: "Essayer le générateur", ru: "Попробовать генератор", es: "Probar el generador" })}
          </Link>
          <Link href="/#products" className="link-ap">
            {tx({ en: "See the work", zh: "查看作品", ar: "شاهد الأعمال", fr: "Voir le travail", ru: "Смотреть работы", es: "Ver el trabajo" })}
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
          testcase-generator — {tx({ en: "reviewed set", zh: "已评审用例集", ar: "مجموعة مُراجَعة", fr: "ensemble relu", ru: "проверенный набор", es: "conjunto revisado" })}
        </span>
      </div>
      <motion.div
        className="grid gap-3 p-5 sm:p-7"
        {...(reduce
          ? {}
          : {
              initial: "hidden",
              animate: "show",
              variants: {
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.55 } },
              },
            })}
      >
        {cases.map((c) => (
          <motion.div
            key={c.id}
            variants={
              reduce
                ? undefined
                : {
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }
            }
            className="rounded-xl border border-white/10 p-4 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[13px] text-[#5ac8fa]">{c.id}</span>
              <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[11px] font-medium text-white">
                {c.p}
              </span>
            </div>
            <p className="mt-1.5 text-[15px] text-panel-ink">{tx(c.title)}</p>
            <p className="mt-1 font-mono text-[12px] text-panel-muted">
              {tx({ en: "Steps", zh: "步骤", ar: "خطوات", fr: "Étapes", ru: "Шаги", es: "Pasos" })} {c.steps} ·{" "}
              {tx({ en: "Expected", zh: "预期", ar: "المتوقع", fr: "Attendu", ru: "Ожидается", es: "Esperado" })}:{" "}
              <span className="text-[#6fd39a]">{tx(c.expected)}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
