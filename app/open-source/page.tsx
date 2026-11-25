import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PRODUCTS, GROUP_LABEL } from "@/lib/products";
import { T } from "@/components/i18n";

export const metadata: Metadata = {
  title: "Open Source — XuXuClassMate",
  description:
    "Open-source QA and developer-infrastructure projects: test-case generation, test-database images, Docker Hub tooling, and agent skills.",
};

const LINKS = [
  { label: "GitHub · InnoNestX", href: "https://github.com/InnoNestX" },
  { label: "Docker Hub", href: "https://hub.docker.com/u/xuxuclassmate" },
  { label: "ClawHub skills", href: "https://clawhub.ai/xuxuclassmate" },
];

export default function OpenSourcePage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-h)+80px)]">
        <div className="container-ap pb-16 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="Open Source" zh="开源" ar="مفتوح المصدر" fr="Open Source" ru="Открытый код" es="Código abierto" />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              <T en="Built in the open, shipped to run." zh="开放构建,交付即可运行。" ar="يُبنى علناً، ويُسلَّم ليعمل." fr="Construit au grand jour, livré pour tourner." ru="Создано открыто, поставлено для работы." es="Construido en abierto, entregado para funcionar." />
            </h1>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              <T
                en="The tools behind the work are public — install them, read the code, or open an issue."
                zh="这些工作背后的工具都是公开的——安装它们、阅读源码,或提个 issue。"
                ar="الأدوات وراء هذا العمل علنية — ثبّتها، واقرأ الكود، أو افتح issue."
                fr="Les outils derrière ce travail sont publics — installez-les, lisez le code ou ouvrez une issue."
                ru="Инструменты за этой работой открыты — установите их, читайте код или откройте issue."
                es="Las herramientas detrás del trabajo son públicas — instálalas, lee el código o abre un issue."
              />
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-ap"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-ap py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-8 transition-transform duration-500 hover:-translate-y-1"
              >
                <p className="text-[13px] font-medium text-muted">
                  <T {...GROUP_LABEL[p.group]} />
                </p>
                <h2 className="mt-2 text-[24px] font-semibold tracking-tight">
                  <T {...p.name} />
                </h2>
                <p className="mt-2 text-[17px] leading-relaxed text-muted">
                  <T {...p.summary} />
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
                  {p.specs.slice(0, 2).map((s) => (
                    <span key={s.label.en} className="text-muted">
                      <T {...s.label} />: <span className="text-ink"><T {...s.value} /></span>
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}
