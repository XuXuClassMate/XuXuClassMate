import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProduct, GROUP_LABEL } from "@/lib/products";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { buttonVariants } from "@/components/ui/button";
import { FeatureVisual } from "@/components/feature-visual";
import { LiveStat } from "@/components/live-stat";
import { T, type Localized } from "@/components/i18n";

type StatCfg = {
  kind: "docker-pulls" | "api-calls" | "claw-skill";
  slug?: string;
  fallback: number;
  label: Localized;
};

const PRODUCT_STAT: Record<string, StatCfg> = {
  "testcase-generator": {
    kind: "claw-skill",
    slug: "ai-testcase-generator",
    fallback: 1350,
    label: { en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" },
  },
  "docker-suite": {
    kind: "docker-pulls",
    fallback: 85285,
    label: { en: "Docker pulls", zh: "Docker 拉取次数", ar: "عمليات سحب Docker", fr: "Pulls Docker", ru: "Docker-загрузок", es: "Pulls de Docker" },
  },
  "docker-hub-api-gateway": {
    kind: "api-calls",
    fallback: 4811,
    label: { en: "API calls served", zh: "API 调用量", ar: "طلبات API مُخدّمة", fr: "Appels API servis", ru: "Обработано API-запросов", es: "Llamadas API servidas" },
  },
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product — XuXuClassMate" };
  return { title: `${p.name.en} — XuXuClassMate`, description: p.summary.en };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name.en,
    description: p.summary.en,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    url: `https://www.xuxuclassmate.com/products/${p.slug}`,
    author: { "@type": "Person", name: "XuXuClassMate" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--nav-h)+80px)]">
        <Aurora />
        <div className="container-ap pb-20 text-center">
          <Reveal>
            <p className="eyebrow">
              <T {...GROUP_LABEL[p.group]} />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[16ch]">
              <T {...p.name} />
            </h1>
            <p className="lead mx-auto mt-5 max-w-[42ch]">
              <T {...p.tagline} />
            </p>
            <div className="mt-7 flex justify-center">
              <Link href="/#try" className="link-ap">
                <T {...p.cta.label} />
              </Link>
            </div>
            {PRODUCT_STAT[p.slug] && (
              <div className="mt-8 flex justify-center">
                <LiveStat {...PRODUCT_STAT[p.slug]} />
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Summary band */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="mx-auto max-w-[24ch] text-center text-[clamp(28px,3.4vw,40px)] font-semibold leading-tight tracking-tight">
              <T {...p.summary} />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature chapters, alternating */}
      {p.features.map((f, i) => (
        <section
          key={f.title.en}
          className={i % 2 === 1 ? "bg-[var(--color-surface)]" : "bg-[var(--color-bg)]"}
        >
          <div className="container-ap grid items-center gap-10 py-24 md:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="font-mono text-[13px] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="display-2 mt-3">
                <T {...f.title} />
              </h2>
              <p className="lead mt-4 max-w-[40ch]">
                <T {...f.body} />
              </p>
            </Reveal>
            <Reveal className={i % 2 === 1 ? "md:order-1" : ""}>
              <FeatureVisual index={i} label={`${p.slug} · 0${i + 1}`} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Specs */}
      <section className="bg-panel text-panel-ink">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 text-panel-ink">
              <T en="Specs" zh="规格" ar="المواصفات" fr="Spécifications" ru="Характеристики" es="Especificaciones" />
            </h2>
          </Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {p.specs.map((s) => (
              <Reveal
                key={s.label.en}
                as="div"
                className="flex justify-between border-b border-white/10 pb-5"
              >
                <dt className="text-[17px] text-panel-muted">
                  <T {...s.label} />
                </dt>
                <dd className="text-right text-[17px] font-medium text-panel-ink">
                  <T {...s.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-bg)]">
        <div className="container-ap py-28 text-center">
          <Reveal>
            <h2 className="display-2 mx-auto max-w-[18ch]">
              <T {...p.cta.label} />
            </h2>
            <p className="lead mx-auto mt-4 max-w-[40ch]">
              <T {...p.cta.note} />
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={p.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                <T {...p.cta.label} />
              </a>
              <Link href="/products" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                <T en="All products" zh="全部产品" ar="كل المنتجات" fr="Tous les produits" ru="Все продукты" es="Todos los productos" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
