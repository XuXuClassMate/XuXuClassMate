import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductPin } from "@/components/product-pin";
import { LiveStats } from "@/components/live-stats";
import { Services } from "@/components/services";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { T, type Localized } from "@/components/i18n";
import { Icon, type IconName } from "@/components/icons";
import { Aurora } from "@/components/aurora";
import { AI_ROLES, AI_HUMAN_NOTE } from "@/lib/about-content";

const FAMILIES: {
  icon: IconName;
  href: string;
  title: Localized;
  desc: Localized;
}[] = [
  {
    icon: "quality",
    href: "/products/testcase-generator",
    title: { en: "Quality Engineering", zh: "质量工程", ar: "هندسة الجودة", fr: "Ingénierie qualité", ru: "Инженерия качества", es: "Ingeniería de calidad" },
    desc: {
      en: "AI test-case generation with a scored human review before anything ships.",
      zh: "AI 生成测试用例,交付前经过量化的人工评审。",
      ar: "توليد حالات اختبار بالذكاء الاصطناعي مع مراجعة بشرية مُقيَّمة قبل أي تسليم.",
      fr: "Génération de cas de test par IA avec une revue humaine notée avant toute livraison.",
      ru: "ИИ-генерация тест-кейсов с оценочной проверкой человеком до любой поставки.",
      es: "Generación de casos de prueba con IA y una revisión humana puntuada antes de entregar.",
    },
  },
  {
    icon: "infra",
    href: "/products",
    title: { en: "Developer Infrastructure", zh: "开发者基础设施", ar: "البنية التحتية للمطوّرين", fr: "Infrastructure développeur", ru: "Инфраструктура разработки", es: "Infraestructura para desarrolladores" },
    desc: {
      en: "Pullable, seeded test databases and a Docker Hub API gateway.",
      zh: "可拉取、带种子数据的测试库,以及 Docker Hub API 网关。",
      ar: "قواعد بيانات اختبار قابلة للسحب ومزوّدة بالبيانات، وبوابة API لـ Docker Hub.",
      fr: "Des bases de test récupérables et initialisées, et une passerelle API Docker Hub.",
      ru: "Загружаемые тестовые базы с данными и API-шлюз Docker Hub.",
      es: "Bases de prueba descargables y con datos, y una pasarela API de Docker Hub.",
    },
  },
  {
    icon: "ai",
    href: "/products/globalpulse",
    title: { en: "AI / Agent", zh: "AI / 智能体", ar: "ذكاء اصطناعي / وكيل", fr: "IA / agent", ru: "ИИ / агент", es: "IA / agente" },
    desc: {
      en: "Scheduled market briefings and a trading toolkit, on the edge.",
      zh: "定时市场简报与交易工具,运行在边缘。",
      ar: "إحاطات سوق مجدولة وأدوات تداول، على الحافة.",
      fr: "Briefings de marché planifiés et une boîte à outils de trading, sur le edge.",
      ru: "Запланированные рыночные брифинги и набор для трейдинга — на краю сети.",
      es: "Briefings de mercado programados y un kit de trading, en el edge.",
    },
  },
  {
    icon: "generate",
    href: "/ai-workflow",
    title: { en: "Agent skills", zh: "智能体技能", ar: "مهارات الوكلاء", fr: "Compétences d'agent", ru: "Навыки агентов", es: "Habilidades de agente" },
    desc: {
      en: "10 skills shipped on ClawHub — testing, stock, transcription, and more.",
      zh: "在 ClawHub 发布的 10 个技能——测试、股票、语音转写等。",
      ar: "10 مهارات منشورة على ClawHub — اختبار، أسهم، تفريغ صوتي، والمزيد.",
      fr: "10 compétences publiées sur ClawHub — tests, bourse, transcription, et plus.",
      ru: "10 навыков на ClawHub — тестирование, биржа, транскрипция и другое.",
      es: "10 habilidades publicadas en ClawHub — pruebas, bolsa, transcripción y más.",
    },
  },
  {
    icon: "nas",
    href: "/#services",
    title: { en: "Self-hosted services", zh: "自托管服务", ar: "خدمات ذاتية الاستضافة", fr: "Services auto-hébergés", ru: "Собственные сервисы", es: "Servicios autoalojados" },
    desc: {
      en: "NAS, Mail, SSH, Watch, and Pulse — all under one name.",
      zh: "NAS、Mail、SSH、Watch、Pulse——都在同一个名字下。",
      ar: "NAS وMail وSSH وWatch وPulse — كلها تحت اسم واحد.",
      fr: "NAS, Mail, SSH, Watch et Pulse — tous sous un même nom.",
      ru: "NAS, Mail, SSH, Watch и Pulse — всё под одним именем.",
      es: "NAS, Mail, SSH, Watch y Pulse — todo bajo un mismo nombre.",
    },
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Data overview — live numbers */}
      <LiveStats />

      {/* Overview: everything, grouped */}
      <section id="overview" className="ambient bg-[var(--color-bg)]">
        <div className="container-ap py-28">
          <Reveal>
            <p className="eyebrow">
              <T en="Overview" zh="总览" ar="نظرة عامة" fr="Aperçu" ru="Обзор" es="Resumen" />
            </p>
            <h2 className="display-2 mt-3 max-w-[20ch]">
              <T en="Everything I build, in one place." zh="我做的一切,汇于一处。" ar="كل ما أبنيه، في مكان واحد." fr="Tout ce que je construis, au même endroit." ru="Всё, что я создаю — в одном месте." es="Todo lo que construyo, en un solo lugar." />
            </h2>
            <p className="lead mt-5 max-w-[60ch]">
              <T
                en="A QA Engineer & SDET's toolbox — AI testing tools, developer infrastructure, agent skills, and the services that run them. Built in the open, measured live."
                zh="一位 QA 工程师 / SDET 的工具箱——AI 测试工具、开发者基础设施、智能体技能,以及支撑它们运行的服务。开放构建,实时度量。"
                ar="صندوق أدوات مهندس جودة و SDET — أدوات اختبار بالذكاء الاصطناعي، وبنية تحتية للمطوّرين، ومهارات وكلاء، والخدمات التي تشغّلها. بُني علناً، ويُقاس مباشرةً."
                fr="La boîte à outils d'un ingénieur QA & SDET — outils de test IA, infrastructure développeur, compétences d'agent, et les services qui les font tourner. Construit au grand jour, mesuré en direct."
                ru="Набор инструментов QA-инженера и SDET — ИИ-инструменты тестирования, инфраструктура разработки, навыки агентов и сервисы, которые их запускают. Создано открыто, измеряется вживую."
                es="La caja de herramientas de un ingeniero QA y SDET — herramientas de prueba con IA, infraestructura para desarrolladores, habilidades de agente y los servicios que las ejecutan. Construido en abierto, medido en vivo."
              />
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FAMILIES.map((f) => (
              <Reveal key={f.title.en}>
                <Link
                  href={f.href}
                  className="card-ap group flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] text-[var(--color-accent)]">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-[22px] font-semibold tracking-tight">
                    <T {...f.title} />
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">
                    <T {...f.desc} />
                  </p>
                  <span className="link-ap mt-6">
                    <T en="Explore" zh="查看" ar="استكشف" fr="Explorer" ru="Открыть" es="Explorar" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal>
              <Link
                href="/products"
                className="card-ap group flex h-full flex-col justify-center rounded-[var(--radius-ap)] border border-dashed border-[var(--color-line)] bg-transparent p-8 text-center"
              >
                <span className="text-[22px] font-semibold tracking-tight text-[var(--color-accent)]">
                  <T en="All products →" zh="全部产品 →" ar="كل المنتجات →" fr="Tous les produits →" ru="Все продукты →" es="Todos los productos →" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Flagship deep-dive: the AI test-case generator (GSAP pinned narrative) */}
      <ProductPin />

      {/* Developer infrastructure chapter */}
      <section id="docker" className="bg-[var(--color-bg)]">
        <div className="container-ap grid items-center gap-12 py-28 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">
              <T en="Test DB Docker Suite" zh="测试数据库 Docker 套件" ar="حزمة Docker لقواعد بيانات الاختبار" fr="Suite Docker de bases de test" ru="Docker-набор тестовых БД" es="Suite Docker de bases de prueba" />
            </p>
            <h2 className="display-2 mt-3">
              <T en="Test databases, one command away." zh="测试数据库,一条命令即达。" ar="قواعد بيانات اختبار على بُعد أمر واحد." fr="Des bases de test à une commande." ru="Тестовые базы данных в одну команду." es="Bases de datos de prueba a un comando." />
            </h2>
            <p className="lead mt-5 max-w-[40ch]">
              <T
                en="Ready-to-run images for the databases teams actually test against — pulled, seeded, and disposable."
                zh="为团队真正会用来测试的数据库准备的开箱即用镜像——可拉取、带种子数据、用完即弃。"
                ar="صور جاهزة للتشغيل لقواعد البيانات التي تختبرها الفرق فعلاً — قابلة للسحب، مزوّدة ببيانات أولية، وقابلة للتخلّص."
                fr="Des images prêtes à l'emploi pour les bases que les équipes testent vraiment — récupérables, initialisées et jetables."
                ru="Готовые к запуску образы баз, против которых команды действительно тестируют — загружаемые, с данными и одноразовые."
                es="Imágenes listas para ejecutar de las bases que los equipos realmente prueban — descargables, con datos y desechables."
              />
            </p>
            <div className="mt-7">
              <a href="https://hub.docker.com/u/xuxuclassmate" target="_blank" rel="noopener noreferrer" className="link-ap">
                <T en="Pull from Docker Hub" zh="从 Docker Hub 拉取" ar="اسحب من Docker Hub" fr="Récupérer depuis Docker Hub" ru="Загрузить из Docker Hub" es="Descargar de Docker Hub" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-panel p-6 font-mono text-[13px] leading-relaxed text-panel-ink shadow-[0_24px_60px_-24px_rgba(0,0,0,0.3)]" dir="ltr">
              <p className="text-panel-muted"># one pull, one run</p>
              <p className="mt-2">
                <span className="text-[#6fd39a]">$</span> docker pull{" "}
                <span className="text-[#5ac8fa]">xuxuclassmate/testdb-kingbase</span>
              </p>
              <p>
                <span className="text-[#6fd39a]">$</span> docker run -p 54321:54321 testdb-kingbase
              </p>
              <p className="mt-2 text-panel-muted">
                → ready in ~6s · seeded · wiped on stop
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI collaboration workflow highlight (dark band) */}
      <section id="ai-workflow" className="bg-panel text-panel-ink">
        <div className="container-ap py-28">
          <Reveal>
            <p className="eyebrow" style={{ color: "#5ac8fa" }}>
              <T en="AI collaboration" zh="AI 协作" ar="التعاون مع الذكاء الاصطناعي" fr="Collaboration IA" ru="Работа с ИИ" es="Colaboración con IA" />
            </p>
            <h2 className="display-2 mt-3 max-w-[20ch] text-panel-ink">
              <T en="A one-person test team, run with AI." zh="用 AI 带起来的一人测试团队。" ar="فريق اختبار من شخص واحد، يُدار بالذكاء الاصطناعي." fr="Une équipe de test d'une personne, menée avec l'IA." ru="Команда тестирования из одного человека — на базе ИИ." es="Un equipo de pruebas de una persona, gestionado con IA." />
            </h2>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-panel-muted">
              <T {...AI_HUMAN_NOTE} />
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {AI_ROLES.map((r) => (
              <span
                key={r.title.en}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[14px] text-panel-ink"
              >
                <span className="text-[#5ac8fa]">
                  <Icon name={r.icon} size={16} />
                </span>
                <T {...r.title} />
              </span>
            ))}
          </div>
          <div className="mt-9">
            <Link href="/ai-workflow" className="link-ap" style={{ color: "#5ac8fa" }}>
              <T en="See how it works" zh="了解工作方式" ar="شاهد كيف يعمل" fr="Voir comment ça marche" ru="Как это работает" es="Ver cómo funciona" />
            </Link>
          </div>
        </div>
      </section>

      {/* Self-hosted services quick access */}
      <Services />

      {/* Engineering notes teaser */}
      <section id="engineering" className="ambient bg-[var(--color-bg)]">
        <div className="container-ap py-28 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="Engineering" zh="工程" ar="الهندسة" fr="Ingénierie" ru="Инженерия" es="Ingeniería" />
            </p>
            <h2 className="display-2 mx-auto mt-3 max-w-[20ch]">
              <T en="Field notes from shipping quality." zh="来自交付质量一线的笔记。" ar="ملاحظات ميدانية من تسليم الجودة." fr="Notes de terrain sur la livraison de la qualité." ru="Полевые заметки о поставке качества." es="Notas de campo sobre entregar calidad." />
            </h2>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              <T
                en="Playwright at scale, Docker test infrastructure, and AI agents in QA — written from real work, not theory."
                zh="大规模 Playwright、Docker 测试基础设施,以及 QA 中的 AI 智能体——写自真实工作,而非空谈。"
                ar="Playwright على نطاق واسع، وبنية اختبار Docker، ووكلاء الذكاء الاصطناعي في ضمان الجودة — مكتوبة من عمل حقيقي لا من نظريات."
                fr="Playwright à grande échelle, l'infrastructure de test Docker et les agents IA en QA — écrit à partir de travail réel, pas de théorie."
                ru="Playwright в масштабе, тестовая инфраструктура на Docker и ИИ-агенты в QA — из реальной работы, а не теории."
                es="Playwright a escala, infraestructura de pruebas con Docker y agentes de IA en QA — escrito desde el trabajo real, no la teoría."
              />
            </p>
            <div className="mt-7 flex justify-center">
              <Link href="/notes" className="link-ap">
                <T en="Read the notes" zh="阅读笔记" ar="اقرأ الملاحظات" fr="Lire les notes" ru="Читать заметки" es="Leer las notas" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="try" className="relative overflow-hidden bg-[var(--color-bg)]">
        <Aurora />
        <div className="container-ap py-32 text-center">
          <Reveal>
            <h2 className="display-1 mx-auto max-w-[18ch]">
              <T en="Explore the toolbox." zh="逛逛这个工具箱。" ar="استكشف صندوق الأدوات." fr="Explorez la boîte à outils." ru="Загляните в набор инструментов." es="Explora la caja de herramientas." />
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/products" className={buttonVariants({ size: "lg" })}>
                <T en="See the products" zh="查看产品" ar="شاهد المنتجات" fr="Voir les produits" ru="Смотреть продукты" es="Ver los productos" />
              </Link>
              <Link href="/products/testcase-generator" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                <T en="Try the generator" zh="试用生成器" ar="جرّب المولّد" fr="Essayer le générateur" ru="Попробовать генератор" es="Probar el generador" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
