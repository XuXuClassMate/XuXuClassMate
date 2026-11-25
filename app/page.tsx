import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductPin } from "@/components/product-pin";
import { Metrics } from "@/components/metrics";
import { Services } from "@/components/services";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { T, type Localized } from "@/components/i18n";

const INFRA: Localized = {
  en: "Developer infrastructure",
  zh: "开发者基础设施",
  ar: "بنية تحتية للمطوّرين",
  fr: "Infrastructure développeur",
  ru: "Инфраструктура разработки",
  es: "Infraestructura para desarrolladores",
};
const AGENT: Localized = {
  en: "AI / agent",
  zh: "AI / 智能体",
  ar: "ذكاء اصطناعي / وكيل",
  fr: "IA / agent",
  ru: "ИИ / агент",
  es: "IA / agente",
};

const PRODUCTS: { name: string; href: string; blurb: Localized; tone: Localized }[] = [
  {
    name: "Test DB Docker Suite",
    href: "/products/docker-suite",
    blurb: {
      en: "Dameng · Highgo · Kingbase · TiDB, up in one pull.",
      zh: "达梦 · Highgo · 人大金仓 · TiDB,一键拉起。",
      ar: "Dameng · Highgo · Kingbase · TiDB، بسحبة واحدة.",
      fr: "Dameng · Highgo · Kingbase · TiDB, en une commande.",
      ru: "Dameng · Highgo · Kingbase · TiDB — одной командой.",
      es: "Dameng · Highgo · Kingbase · TiDB, en un pull.",
    },
    tone: INFRA,
  },
  {
    name: "Docker Hub API Gateway",
    href: "/products/docker-hub-api-gateway",
    blurb: {
      en: "REST + SVG stats cards for Docker Hub.",
      zh: "面向 Docker Hub 的 REST 接口与 SVG 统计卡。",
      ar: "واجهات REST وبطاقات إحصاء SVG لـ Docker Hub.",
      fr: "API REST + cartes de stats SVG pour Docker Hub.",
      ru: "REST + SVG-карточки статистики для Docker Hub.",
      es: "REST + tarjetas de estadísticas SVG para Docker Hub.",
    },
    tone: INFRA,
  },
  {
    name: "GlobalPulse",
    href: "/products/globalpulse",
    blurb: {
      en: "Scheduled market-intelligence briefings on Cloudflare.",
      zh: "在 Cloudflare 上定时推送的市场情报简报。",
      ar: "إحاطات معلومات السوق المجدولة على Cloudflare.",
      fr: "Briefings de veille de marché planifiés sur Cloudflare.",
      ru: "Запланированные брифинги рыночной аналитики на Cloudflare.",
      es: "Briefings de inteligencia de mercado programados en Cloudflare.",
    },
    tone: AGENT,
  },
  {
    name: "Trading Assistant Core",
    href: "https://github.com/XuXuClassMate/trading-assistant",
    blurb: {
      en: "An OpenClaw skill, shipped on ClawHub.",
      zh: "一个 OpenClaw 技能,发布在 ClawHub。",
      ar: "مهارة OpenClaw، منشورة على ClawHub.",
      fr: "Une compétence OpenClaw, publiée sur ClawHub.",
      ru: "Навык OpenClaw, опубликован на ClawHub.",
      es: "Una habilidad de OpenClaw, publicada en ClawHub.",
    },
    tone: AGENT,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Flagship: pinned scroll narrative (GSAP) */}
      <ProductPin />

      {/* Docker suite chapter */}
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

      {/* Proof */}
      <Metrics />

      {/* Products grid */}
      <section id="products" className="bg-[var(--color-bg)]">
        <div className="container-ap py-28">
          <Reveal>
            <h2 className="display-2 max-w-[18ch]">
              <T en="A small toolbox that ships to production." zh="一个能交付到生产环境的小工具箱。" ar="صندوق أدوات صغير يصل إلى الإنتاج." fr="Une petite boîte à outils livrée en production." ru="Небольшой набор инструментов, доходящий до продакшена." es="Una pequeña caja de herramientas que llega a producción." />
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((p) => {
              const external = p.href.startsWith("http");
              const cardClass =
                "group flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8 transition-transform duration-500 hover:-translate-y-1";
              const inner = (
                <>
                  <p className="text-[13px] font-medium text-muted">
                    <T {...p.tone} />
                  </p>
                  <h3 className="mt-2 text-[26px] font-semibold tracking-tight" dir="ltr">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-muted">
                    <T {...p.blurb} />
                  </p>
                  <span className="link-ap mt-6">
                    <T en="Learn more" zh="了解更多" ar="اعرف المزيد" fr="En savoir plus" ru="Подробнее" es="Saber más" />
                  </span>
                </>
              );
              return (
                <Reveal key={p.name}>
                  {external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={p.href} className={cardClass}>
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-hosted services quick access */}
      <Services />

      {/* Engineering notes teaser */}
      <section id="engineering" className="bg-[var(--color-bg)]">
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
      <section id="try" className="bg-[var(--color-bg)]">
        <div className="container-ap py-32 text-center">
          <Reveal>
            <h2 className="display-1 mx-auto max-w-[16ch]">
              <T en="See your requirements become test cases." zh="看着你的需求变成测试用例。" ar="شاهد متطلباتك تتحوّل إلى حالات اختبار." fr="Voyez vos exigences devenir des cas de test." ru="Смотрите, как требования становятся тест-кейсами." es="Mira tus requisitos convertirse en casos de prueba." />
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/products/testcase-generator" className={buttonVariants({ size: "lg" })}>
                <T en="Try the generator" zh="试用生成器" ar="جرّب المولّد" fr="Essayer le générateur" ru="Попробовать генератор" es="Probar el generador" />
              </Link>
              <Link href="/products" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                <T en="Explore the work" zh="查看作品" ar="استكشف الأعمال" fr="Explorer le travail" ru="Изучить работы" es="Explorar el trabajo" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
