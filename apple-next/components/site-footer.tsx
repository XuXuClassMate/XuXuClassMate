import Link from "next/link";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Products",
    links: [
      { label: "AI Test Case Generator", href: "/products/testcase-generator" },
      { label: "Test DB Docker Suite", href: "/products/docker-suite" },
      { label: "All products", href: "/products" },
    ],
  },
  {
    title: "Engineering",
    links: [
      { label: "Notes", href: "/notes" },
      { label: "Open source", href: "/open-source" },
      { label: "GitHub", href: "https://github.com/InnoNestX" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/#try" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-surface)] text-[13px] text-muted">
      <div className="container-ap py-12">
        <div className="grid grid-cols-2 gap-8 border-b border-[var(--color-line)] pb-10 sm:grid-cols-3">
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-[13px] font-semibold text-ink">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 XuXuClassMate. QA Engineer · SDET · AI Testing.</p>
          <p className="text-muted">Built with Next.js, Tailwind, Motion & GSAP.</p>
        </div>
      </div>
    </footer>
  );
}
