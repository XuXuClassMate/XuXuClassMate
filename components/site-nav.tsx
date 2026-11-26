"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTx, type Localized } from "@/components/i18n";
import { ThemeToggle, LangMenu } from "@/components/site-controls";

const NAV: { label: Localized; href: string }[] = [
  {
    label: { en: "Products", zh: "产品", ar: "المنتجات", fr: "Produits", ru: "Продукты", es: "Productos" },
    href: "/products",
  },
  {
    label: { en: "Engineering", zh: "工程笔记", ar: "الهندسة", fr: "Ingénierie", ru: "Инженерия", es: "Ingeniería" },
    href: "/notes",
  },
  {
    label: { en: "About", zh: "关于", ar: "نبذة", fr: "À propos", ru: "О нас", es: "Acerca de" },
    href: "/about",
  },
  {
    label: { en: "Open Source", zh: "开源", ar: "مفتوح المصدر", fr: "Open Source", ru: "Открытый код", es: "Código abierto" },
    href: "/open-source",
  },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const tx = useTx();
  const isActive = (href: string) =>
    href.startsWith("/") && !href.includes("#")
      ? pathname === href || pathname.startsWith(href + "/")
      : false;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "nav-bar h-[var(--nav-h)] border-b border-[var(--color-line)] bg-[var(--color-bg)]/80 backdrop-blur-xl backdrop-saturate-150",
          scrolled && "scrolled",
        )}
      >
        <nav className="container-ap flex h-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[18px] font-semibold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" width={24} height={24} className="block" />
            <span>XuXuClassMate</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
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
                    {tx(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1">
              <LangMenu />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LangMenu />
            <ThemeToggle />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center"
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
          </div>
        </nav>
      </div>

      {/* 关闭时必须 display:none。opacity:0 的 fixed 全屏层在 iOS Chrome 上
          经常合成失败,会变成一块和背景同色的遮罩,看起来像整页空白。 */}
      <div
        hidden={!open}
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 top-[var(--nav-h)] z-40 bg-[var(--color-bg)]",
          open ? "block md:hidden" : "hidden",
        )}
      >
        <ul className="container-ap flex flex-col gap-1 pt-6">
          {NAV.map((item) => (
            <li key={item.href} className="border-b border-[var(--color-line)]">
              <Link
                href={item.href}
                className="block py-4 text-[22px] font-medium tracking-tight text-ink"
                onClick={() => setOpen(false)}
              >
                {tx(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
