"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Products", href: "/products" },
  { label: "Engineering", href: "/notes" },
  { label: "About", href: "/about" },
  { label: "Open Source", href: "/open-source" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href.startsWith("/") && !href.includes("#")
      ? pathname === href || pathname.startsWith(href + "/")
      : false;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[var(--nav-h)] border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] backdrop-blur-xl backdrop-saturate-150">
        <nav className="container-ap flex h-full items-center justify-between">
          <Link
            href="/"
            className="text-[18px] font-semibold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            XuXuClassMate
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-[13px] transition-colors hover:text-ink",
                    isActive(item.href)
                      ? "text-ink underline decoration-[1.5px] underline-offset-[6px]"
                      : "text-ink/80",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#try"
                className="text-[13px] font-medium text-[var(--color-accent)] hover:underline"
              >
                Try the generator
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-full bg-ink transition-all duration-300",
                  open ? "top-[6px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] block h-[1.5px] w-full bg-ink transition-all duration-300",
                  open ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-full bg-ink transition-all duration-300",
                  open ? "top-[6px] -rotate-45" : "top-[12px]",
                )}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile full-screen sheet */}
      <div
        className={cn(
          "fixed inset-0 top-[var(--nav-h)] z-40 bg-[var(--color-bg)] transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="container-ap flex flex-col gap-1 pt-6">
          {[...NAV, { label: "Try the generator", href: "/#try" }].map((item) => (
            <li key={item.href} className="border-b border-[var(--color-line)]">
              <Link
                href={item.href}
                className="block py-4 text-[22px] font-medium tracking-tight text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
