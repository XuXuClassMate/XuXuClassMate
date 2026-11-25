import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, GROUPS, GROUP_LABEL } from "@/lib/products";
import { Reveal } from "@/components/reveal";
import { T } from "@/components/i18n";

export const metadata: Metadata = {
  title: "Products — XuXuClassMate",
  description:
    "AI testing tools and developer infrastructure, built to install and run: the test-case generator, test-database images, and more.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-[calc(var(--nav-h)+72px)]">
        <div className="container-ap pb-14 text-center">
          <Reveal>
            <p className="eyebrow">
              <T en="Products" zh="产品" ar="المنتجات" fr="Produits" ru="Продукты" es="Productos" />
            </p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              <T en="Tools that install and run." zh="装上就能跑的工具。" ar="أدوات تُثبَّت وتعمل." fr="Des outils qui s'installent et tournent." ru="Инструменты, которые ставятся и работают." es="Herramientas que se instalan y funcionan." />
            </h1>
            <p className="lead mx-auto mt-5 max-w-[44ch]">
              <T
                en="A small, opinionated toolbox for quality engineering — each one shipped to be used, not just shown."
                zh="一个有主见的小型质量工程工具箱——每一件都为被使用而交付,而不只是展示。"
                ar="صندوق أدوات صغير وذو رأي لهندسة الجودة — كل أداة صُنعت لتُستخدَم لا لتُعرَض فقط."
                fr="Une petite boîte à outils affirmée pour l'ingénierie qualité — chacune livrée pour être utilisée, pas seulement montrée."
                ru="Небольшой продуманный набор инструментов для инженерии качества — каждый сделан, чтобы им пользовались, а не только показывали."
                es="Una pequeña caja de herramientas con criterio para la ingeniería de calidad — cada una hecha para usarse, no solo para mostrarse."
              />
            </p>
          </Reveal>
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = PRODUCTS.filter((p) => p.group === group);
        if (!items.length) return null;
        const single = items.length === 1;
        return (
          <section key={group} className="container-ap py-12">
            <Reveal>
              <h2 className="text-[21px] font-semibold text-muted">
                <T {...GROUP_LABEL[group]} />
              </h2>
            </Reveal>
            <div
              className={
                single ? "mt-6" : "mt-6 grid gap-6 sm:grid-cols-2"
              }
            >
              {items.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className={
                      single
                        ? "group flex flex-col gap-4 rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8 transition-transform duration-500 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between sm:p-10"
                        : "group flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8 transition-transform duration-500 hover:-translate-y-1"
                    }
                  >
                    <div className={single ? "max-w-[46ch]" : ""}>
                      <h3 className="text-[26px] font-semibold tracking-tight">
                        <T {...p.name} />
                      </h3>
                      <p className="mt-2 text-[17px] leading-relaxed text-muted">
                        <T {...p.tagline} />
                      </p>
                    </div>
                    <span className="link-ap mt-6 sm:mt-0 sm:shrink-0">
                      <T en="Learn more" zh="了解更多" ar="اعرف المزيد" fr="En savoir plus" ru="Подробнее" es="Saber más" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <div className="h-24" />
    </>
  );
}
