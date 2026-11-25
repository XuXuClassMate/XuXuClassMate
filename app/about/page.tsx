import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { LiveStat } from "@/components/live-stat";
import { T, type Localized } from "@/components/i18n";
import { Icon } from "@/components/icons";
import { HUES } from "@/lib/hues";
import { CAPABILITIES, AI_ROLES, AI_HUMAN_NOTE, OUTPUTS } from "@/lib/about-content";

export const metadata: Metadata = {
  title: "About — XuXuClassMate",
  description:
    "QA Engineer and SDET focused on test automation, AI testing, and shipping quality tools that run in production.",
};

const CONTACT_CHANNELS: {
  name: string;
  handle: string;
  href: string;
  icon: "code" | "box" | "download";
}[] = [
  { name: "GitHub", handle: "InnoNestX", href: "https://github.com/InnoNestX", icon: "code" },
  { name: "Docker Hub", handle: "xuxuclassmate", href: "https://hub.docker.com/u/xuxuclassmate", icon: "box" },
  { name: "ClawHub", handle: "xuxuclassmate", href: "https://clawhub.ai/xuxuclassmate", icon: "download" },
];

const PRINCIPLES: { title: Localized; body: Localized }[] = [
  {
    title: {
      en: "Quality that runs",
      zh: "能跑起来的质量",
      ar: "جودة تعمل فعلاً",
      fr: "Une qualité qui tourne",
      ru: "Качество, которое работает",
      es: "Calidad que funciona",
    },
    body: {
      en: "A test strategy only counts when it runs in a real environment. Tools ship as something you can install and pull, not a slide.",
      zh: "测试策略只有在真实环境中跑起来才算数。工具以可安装、可拉取的形式交付,而不是一页 PPT。",
      ar: "لا تُحتسب استراتيجية الاختبار إلا حين تعمل في بيئة حقيقية. تُسلَّم الأدوات كشيء يمكن تثبيته وسحبه، لا كشريحة عرض.",
      fr: "Une stratégie de test ne compte que si elle tourne dans un vrai environnement. Les outils se livrent à installer et à récupérer, pas en diapositive.",
      ru: "Стратегия тестирования имеет смысл, только когда работает в реальной среде. Инструменты поставляются как то, что можно установить и загрузить, а не как слайд.",
      es: "Una estrategia de pruebas solo cuenta cuando corre en un entorno real. Las herramientas se entregan para instalarse y descargarse, no como una diapositiva.",
    },
  },
  {
    title: {
      en: "AI drafts, people decide",
      zh: "AI 起草,人来决定",
      ar: "الذكاء يصيغ، والبشر يقرّرون",
      fr: "L'IA rédige, les humains décident",
      ru: "ИИ составляет, люди решают",
      es: "La IA redacta, las personas deciden",
    },
    body: {
      en: "AI is good at the first draft of a test suite. Coverage, logic, and risk are still a human call — the workflow keeps both.",
      zh: "AI 擅长写测试集的初稿。覆盖度、逻辑与风险仍由人判断——工作流把两者都保留。",
      ar: "الذكاء الاصطناعي بارع في المسودة الأولى لمجموعة الاختبارات. أما التغطية والمنطق والمخاطر فتبقى قراراً بشرياً — ويحتفظ سير العمل بالاثنين.",
      fr: "L'IA excelle au premier jet d'une suite de tests. Couverture, logique et risque restent une décision humaine — le flux garde les deux.",
      ru: "ИИ хорош в первом черновике набора тестов. Покрытие, логика и риск остаются за человеком — процесс сохраняет и то, и другое.",
      es: "La IA es buena en el primer borrador de una suite de pruebas. Cobertura, lógica y riesgo siguen siendo decisión humana — el flujo mantiene ambos.",
    },
  },
  {
    title: {
      en: "Infrastructure is part of testing",
      zh: "基础设施也是测试的一部分",
      ar: "البنية التحتية جزء من الاختبار",
      fr: "L'infrastructure fait partie des tests",
      ru: "Инфраструктура — часть тестирования",
      es: "La infraestructura es parte de las pruebas",
    },
    body: {
      en: "Flaky databases and slow environments are test problems. Disposable, pullable infra removes them.",
      zh: "不稳定的数据库和缓慢的环境本身就是测试问题。用完即弃、可拉取的基础设施能消除它们。",
      ar: "قواعد البيانات المتقلّبة والبيئات البطيئة هي مشكلات اختبار. البنية القابلة للتخلّص والسحب تزيلها.",
      fr: "Les bases instables et les environnements lents sont des problèmes de test. Une infra jetable et récupérable les élimine.",
      ru: "Нестабильные базы и медленные среды — это проблемы тестирования. Одноразовая, загружаемая инфраструктура их устраняет.",
      es: "Las bases inestables y los entornos lentos son problemas de prueba. Una infraestructura desechable y descargable los elimina.",
    },
  },
  {
    title: {
      en: "Write it down",
      zh: "把它写下来",
      ar: "دوّنها",
      fr: "Écrivez-le",
      ru: "Записывайте",
      es: "Escríbelo",
    },
    body: {
      en: "Field notes on Playwright, Docker testing, and AI in QA — from real work, so the next person moves faster.",
      zh: "关于 Playwright、Docker 测试与 QA 中 AI 的一线笔记——写自真实工作,好让下一个人走得更快。",
      ar: "ملاحظات ميدانية عن Playwright واختبار Docker والذكاء الاصطناعي في ضمان الجودة — من عمل حقيقي ليتقدّم من يليك أسرع.",
      fr: "Des notes de terrain sur Playwright, les tests Docker et l'IA en QA — issues de travail réel, pour que le suivant aille plus vite.",
      ru: "Полевые заметки о Playwright, тестировании с Docker и ИИ в QA — из реальной работы, чтобы следующий двигался быстрее.",
      es: "Notas de campo sobre Playwright, pruebas con Docker e IA en QA — del trabajo real, para que el siguiente avance más rápido.",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[calc(var(--nav-h)+80px)]">
        <Aurora />
        <div className="container-ap pb-20 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="About" zh="关于" ar="نبذة" fr="À propos" ru="О нас" es="Acerca de" />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[16ch]">
              <T en="Quality engineering, shipped." zh="把质量工程,真正交付出去。" ar="هندسة جودة، مُسلَّمة." fr="L'ingénierie qualité, livrée." ru="Инженерия качества, поставленная." es="Ingeniería de calidad, entregada." />
            </h1>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              <T
                en="I'm a QA Engineer and SDET building AI testing tools and the infrastructure to run them — test automation, API and performance testing, Docker test environments, and AI test generation."
                zh="我是一名 QA 工程师与 SDET,构建 AI 测试工具及其运行所需的基础设施——测试自动化、接口与性能测试、Docker 测试环境,以及 AI 测试生成。"
                ar="أنا مهندس جودة و SDET أبني أدوات اختبار بالذكاء الاصطناعي والبنية التي تشغّلها — أتمتة الاختبار، واختبار الواجهات والأداء، وبيئات اختبار Docker، وتوليد الاختبارات بالذكاء الاصطناعي."
                fr="Je suis ingénieur QA et SDET : je construis des outils de test IA et l'infrastructure pour les faire tourner — automatisation des tests, tests d'API et de performance, environnements de test Docker et génération de tests par IA."
                ru="Я QA-инженер и SDET, создаю ИИ-инструменты тестирования и инфраструктуру для их запуска — автоматизация тестов, тестирование API и производительности, тестовые среды Docker и генерация тестов ИИ."
                es="Soy ingeniero QA y SDET: construyo herramientas de prueba con IA y la infraestructura para ejecutarlas — automatización de pruebas, pruebas de API y rendimiento, entornos de prueba Docker y generación de pruebas con IA."
              />
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LiveStat
                kind="docker-pulls"
                fallback={85285}
                label={{ en: "Docker pulls", zh: "Docker 拉取次数", ar: "عمليات سحب Docker", fr: "Pulls Docker", ru: "Docker-загрузок", es: "Pulls de Docker" }}
              />
              <LiveStat
                kind="claw-total"
                fallback={10868}
                label={{ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="mx-auto max-w-[24ch] text-center text-[clamp(28px,3.6vw,44px)] font-semibold leading-tight tracking-tight">
              <T
                en="From test automation into installable AI testing tools — the through-line is work that runs."
                zh="从测试自动化,到可安装的 AI 测试工具——贯穿始终的,是能跑起来的工作。"
                ar="من أتمتة الاختبار إلى أدوات اختبار قابلة للتثبيت بالذكاء الاصطناعي — الخيط الناظم هو عمل يعمل فعلاً."
                fr="De l'automatisation des tests aux outils de test IA installables — le fil conducteur, c'est le travail qui tourne."
                ru="От автоматизации тестов к устанавливаемым ИИ-инструментам тестирования — сквозная линия это работа, которая работает."
                es="De la automatización de pruebas a herramientas de prueba con IA instalables — el hilo conductor es el trabajo que funciona."
              />
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-ap py-24">
        <Reveal>
          <h2 className="display-2 max-w-[16ch]">
            <T en="How I work." zh="我的工作方式。" ar="طريقتي في العمل." fr="Ma façon de travailler." ru="Как я работаю." es="Cómo trabajo." />
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <Reveal key={p.title.en}>
              <article className="card-ap h-full rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8">
                <h3 className="text-[22px] font-semibold tracking-tight">
                  <T {...p.title} />
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">
                  <T {...p.body} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="eyebrow">
              <T en="Capabilities" zh="核心能力" ar="القدرات" fr="Compétences" ru="Компетенции" es="Capacidades" />
            </p>
            <h2 className="display-2 mt-3 max-w-[18ch]">
              <T en="What I test, and how." zh="我测什么,怎么测。" ar="ماذا أختبر، وكيف." fr="Ce que je teste, et comment." ru="Что я тестирую и как." es="Qué pruebo, y cómo." />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title.en} delay={(i % 3) * 0.06}>
                <article className="card-ap h-full rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-7">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${HUES[i % HUES.length]} 15%, transparent)`, color: HUES[i % HUES.length] }}
                  >
                    <Icon name={c.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-[20px] font-semibold tracking-tight">
                    <T {...c.title} />
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
                    <T {...c.body} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI collaboration workflow */}
      <section id="ai-workflow" className="bg-[var(--color-bg)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="eyebrow">
              <T en="AI collaboration" zh="AI 协作" ar="التعاون مع الذكاء الاصطناعي" fr="Collaboration IA" ru="Работа с ИИ" es="Colaboración con IA" />
            </p>
            <h2 className="display-2 mt-3 max-w-[20ch]">
              <T en="A team of AI assistants, split by role." zh="一支按角色分工的 AI 助手团队。" ar="فريق من مساعدي الذكاء الاصطناعي، موزّع بالأدوار." fr="Une équipe d'assistants IA, répartis par rôle." ru="Команда ИИ-ассистентов, разделённая по ролям." es="Un equipo de asistentes de IA, repartidos por rol." />
            </h2>
            <p className="lead mt-5 max-w-[52ch]">
              <T {...AI_HUMAN_NOTE} />
            </p>
            <div className="mt-6">
              <Link href="/ai-workflow" className="link-ap">
                <T en="See the full workflow" zh="查看完整流程" ar="شاهد سير العمل الكامل" fr="Voir le workflow complet" ru="Весь процесс целиком" es="Ver el flujo completo" />
              </Link>
            </div>
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

      {/* Outputs */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="eyebrow">
              <T en="What I deliver" zh="主要产出" ar="ما أُسلّمه" fr="Ce que je livre" ru="Что я поставляю" es="Lo que entrego" />
            </p>
            <h2 className="display-2 mt-3 max-w-[18ch]">
              <T en="Evidence, not just opinions." zh="交付证据,而不只是结论。" ar="أدلّة، لا مجرّد آراء." fr="Des preuves, pas juste des avis." ru="Доказательства, а не только мнения." es="Evidencia, no solo opiniones." />
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {OUTPUTS.map((o, i) => (
              <Reveal key={o.title.en} delay={(i % 2) * 0.06}>
                <article className="card-ap h-full rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-7">
                  <h3 className="text-[20px] font-semibold tracking-tight">
                    <T {...o.title} />
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
                    <T {...o.body} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)]">
        <div className="container-ap py-24 text-center">
          <Reveal>
            <h2 className="display-2 mx-auto max-w-[18ch]">
              <T en="Currently." zh="近况。" ar="حالياً." fr="En ce moment." ru="Сейчас." es="Actualmente." />
            </h2>
            <p className="lead mx-auto mt-5 max-w-[44ch]">
              <T
                en="Shipping the AI test-case generator as an installable product, keeping the test-database images pullable, and learning Web3 testing and Kubernetes."
                zh="把 AI 测试用例生成器做成可安装的产品,持续维护可拉取的测试数据库镜像,并在学习 Web3 测试与 Kubernetes。"
                ar="أطلق مولّد حالات الاختبار كمنتج قابل للتثبيت، وأبقي صور قواعد بيانات الاختبار قابلة للسحب، وأتعلّم اختبار Web3 وKubernetes."
                fr="Je livre le générateur de cas de test IA comme produit installable, je garde les images de bases de test récupérables, et j'apprends le test Web3 et Kubernetes."
                ru="Выпускаю ИИ-генератор тест-кейсов как устанавливаемый продукт, поддерживаю загружаемые образы тестовых баз и изучаю тестирование Web3 и Kubernetes."
                es="Publico el generador de casos de prueba con IA como producto instalable, mantengo descargables las imágenes de bases de prueba y aprendo pruebas Web3 y Kubernetes."
              />
            </p>
            <div className="mt-7 flex justify-center gap-7">
              <Link href="/products" className="link-ap">
                <T en="See the products" zh="查看产品" ar="شاهد المنتجات" fr="Voir les produits" ru="Смотреть продукты" es="Ver los productos" />
              </Link>
              <Link href="#contact" className="link-ap">
                <T en="Get in touch" zh="取得联系" ar="تواصل معي" fr="Me contacter" ru="Связаться" es="Contactar" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-[var(--nav-h)] bg-[var(--color-surface)]"
      >
        <div className="container-ap py-24 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="Contact" zh="联系" ar="تواصل" fr="Contact" ru="Контакты" es="Contacto" />
            </p>
            <h2 className="display-2 mx-auto mt-3 max-w-[16ch]">
              <T en="Let's talk." zh="聊一聊。" ar="لنتحدّث." fr="Discutons." ru="Давайте поговорим." es="Hablemos." />
            </h2>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              <T
                en="The fastest way to reach me is in the open — where I ship and measure everything. Find me on any of these."
                zh="找我最快的方式就在公开处——我在那里交付并实时度量一切。通过下面任意一个渠道都能联系到我。"
                ar="أسرع طريقة للوصول إليّ هي في العلن — حيث أطلق وأقيس كل شيء. تجدني عبر أيٍّ من هذه القنوات."
                fr="Le plus rapide pour me joindre, c'est au grand jour — là où je livre et mesure tout. Retrouvez-moi sur l'un de ces canaux."
                ru="Быстрее всего связаться со мной — в открытую, там, где я всё выпускаю и измеряю. Найдите меня в любом из этих мест."
                es="La forma más rápida de contactarme es en abierto — donde publico y mido todo. Encuéntrame en cualquiera de estos canales."
              />
            </p>
            <div className="mx-auto mt-10 grid max-w-[720px] gap-4 sm:grid-cols-3">
              {CONTACT_CHANNELS.map((c, i) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-ap flex flex-col items-center gap-3 rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-7"
                  style={{ borderTop: `2px solid ${HUES[i % HUES.length]}` }}
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${HUES[i % HUES.length]} 15%, transparent)`, color: HUES[i % HUES.length] }}
                  >
                    <Icon name={c.icon} size={22} />
                  </span>
                  <span className="text-[17px] font-semibold tracking-tight text-ink">
                    {c.name}
                  </span>
                  <span className="font-mono text-[13px] text-muted">@{c.handle}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
