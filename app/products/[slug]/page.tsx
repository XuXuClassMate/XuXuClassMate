import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProduct } from "@/lib/products";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { FeatureVisual } from "@/components/feature-visual";

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
  return { title: `${p.name} — XuXuClassMate`, description: p.summary };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-[calc(var(--nav-h)+80px)]">
        <div className="container-ap pb-20 text-center">
          <Reveal>
            <p className="eyebrow">{p.group}</p>
            <h1 className="display-1 mx-auto mt-3 max-w-[16ch]">{p.name}</h1>
            <p className="lead mx-auto mt-5 max-w-[42ch]">{p.tagline}</p>
            <div className="mt-7 flex justify-center">
              <Link href="/#try" className="link-ap">
                {p.cta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Summary band */}
      <section className="bg-[var(--color-surface)]">
        <div className="container-ap py-24">
          <Reveal>
            <p className="mx-auto max-w-[24ch] text-center text-[clamp(28px,3.4vw,40px)] font-semibold leading-tight tracking-tight">
              {p.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature chapters, alternating */}
      {p.features.map((f, i) => (
        <section
          key={f.title}
          className={i % 2 === 1 ? "bg-[var(--color-surface)]" : "bg-[var(--color-bg)]"}
        >
          <div className="container-ap grid items-center gap-10 py-24 md:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="font-mono text-[13px] text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="display-2 mt-3">{f.title}</h2>
              <p className="lead mt-4 max-w-[40ch]">{f.body}</p>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? "md:order-1" : ""}>
              <FeatureVisual index={i} label={`${p.slug} · 0${i + 1}`} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Specs */}
      <section className="bg-ink text-ink-invert">
        <div className="container-ap py-24">
          <Reveal>
            <h2 className="display-2 text-ink-invert">Specs</h2>
          </Reveal>
          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {p.specs.map((s) => (
              <Reveal
                key={s.label}
                as="div"
                className="flex justify-between border-b border-white/10 pb-5"
              >
                <dt className="text-[17px] text-muted-invert">{s.label}</dt>
                <dd className="text-right text-[17px] font-medium text-ink-invert">
                  {s.value}
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
            <h2 className="display-2 mx-auto max-w-[18ch]">{p.cta.label}.</h2>
            <p className="lead mx-auto mt-4 max-w-[40ch]">{p.cta.note}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">{p.cta.label}</Button>
              <Link href="/products">
                <Button size="lg" variant="secondary">
                  All products
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
