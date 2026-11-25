import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, GROUPS } from "@/lib/products";
import { Reveal } from "@/components/reveal";

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
            <p className="eyebrow">Products</p>
            <h1 className="display-1 mx-auto mt-3 max-w-[18ch]">
              Tools that install and run.
            </h1>
            <p className="lead mx-auto mt-5 max-w-[44ch]">
              A small, opinionated toolbox for quality engineering — each one
              shipped to be used, not just shown.
            </p>
          </Reveal>
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = PRODUCTS.filter((p) => p.group === group);
        if (!items.length) return null;
        return (
          <section key={group} className="container-ap py-12">
            <Reveal>
              <h2 className="text-[21px] font-semibold text-muted">{group}</h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {items.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8 transition-transform duration-500 hover:-translate-y-1"
                  >
                    <h3 className="text-[26px] font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[17px] leading-relaxed text-muted">
                      {p.tagline}
                    </p>
                    <span className="link-ap mt-6">Learn more</span>
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
