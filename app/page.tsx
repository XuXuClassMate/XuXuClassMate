import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductPin } from "@/components/product-pin";
import { Metrics } from "@/components/metrics";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    name: "Test DB Docker Suite",
    blurb: "Dameng · Highgo · Kingbase · TiDB, up in one pull.",
    tone: "Developer infrastructure",
  },
  {
    name: "Docker Hub API Gateway",
    blurb: "REST + SVG stats cards for Docker Hub.",
    tone: "Developer infrastructure",
  },
  {
    name: "GlobalPulse",
    blurb: "Scheduled market-intelligence briefings on Cloudflare.",
    tone: "AI / agent",
  },
  {
    name: "Trading Assistant Core",
    blurb: "An OpenClaw skill, shipped on ClawHub.",
    tone: "AI / agent",
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
            <p className="eyebrow">Test DB Docker Suite</p>
            <h2 className="display-2 mt-3">Test databases, one command away.</h2>
            <p className="lead mt-5 max-w-[40ch]">
              Ready-to-run images for the databases teams actually test against —
              pulled, seeded, and disposable.
            </p>
            <div className="mt-7">
              <Link href="/#try" className="link-ap">
                Pull from Docker Hub
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-ink p-6 font-mono text-[13px] leading-relaxed text-ink-invert shadow-[0_24px_60px_-24px_rgba(0,0,0,0.3)]">
              <p className="text-muted-invert"># one pull, one run</p>
              <p className="mt-2">
                <span className="text-[#6fd39a]">$</span> docker pull{" "}
                <span className="text-[#5ac8fa]">xuxuclassmate/testdb-kingbase</span>
              </p>
              <p>
                <span className="text-[#6fd39a]">$</span> docker run -p 54321:54321 testdb-kingbase
              </p>
              <p className="mt-2 text-muted-invert">
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
              A small toolbox that ships to production.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.08}>
                <article className="group flex h-full flex-col rounded-[var(--radius-ap)] bg-[var(--color-surface)] p-8 transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-[13px] font-medium text-muted">{p.tone}</p>
                  <h3 className="mt-2 text-[26px] font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[17px] leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <span className="link-ap mt-6">Learn more</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering notes teaser */}
      <section id="engineering" className="bg-[var(--color-surface)]">
        <div className="container-ap py-28 text-center">
          <Reveal>
            <p className="eyebrow">Engineering</p>
            <h2 className="display-2 mx-auto mt-3 max-w-[20ch]">
              Field notes from shipping quality.
            </h2>
            <p className="lead mx-auto mt-5 max-w-[46ch]">
              Playwright at scale, Docker test infrastructure, and AI agents in
              QA — written from real work, not theory.
            </p>
            <div className="mt-7 flex justify-center">
              <Link href="/notes" className="link-ap">
                Read the notes
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
              See your requirements become test cases.
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">Try the generator</Button>
              <Button size="lg" variant="secondary">
                Explore the work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
