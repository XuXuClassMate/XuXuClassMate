import Link from "next/link";
import { T, type Localized } from "@/components/i18n";

const COLS: {
  title: Localized;
  links: { label: Localized; href: string }[];
}[] = [
  {
    title: { en: "Products", zh: "产品", ar: "المنتجات", fr: "Produits", ru: "Продукты", es: "Productos" },
    links: [
      {
        label: { en: "AI Test Case Generator", zh: "AI 测试用例生成器", ar: "مولّد حالات الاختبار بالذكاء الاصطناعي", fr: "Générateur de cas de test IA", ru: "ИИ-генератор тест-кейсов", es: "Generador de casos de prueba con IA" },
        href: "/products/testcase-generator",
      },
      {
        label: { en: "Test DB Docker Suite", zh: "测试数据库 Docker 套件", ar: "حزمة Docker لقواعد بيانات الاختبار", fr: "Suite Docker de bases de test", ru: "Docker-набор тестовых БД", es: "Suite Docker de bases de prueba" },
        href: "/products/docker-suite",
      },
      {
        label: { en: "All products", zh: "全部产品", ar: "كل المنتجات", fr: "Tous les produits", ru: "Все продукты", es: "Todos los productos" },
        href: "/products",
      },
    ],
  },
  {
    title: { en: "Engineering", zh: "工程", ar: "الهندسة", fr: "Ingénierie", ru: "Инженерия", es: "Ingeniería" },
    links: [
      {
        label: { en: "AI workflow", zh: "AI 协作流程", ar: "سير عمل الذكاء الاصطناعي", fr: "Workflow IA", ru: "AI-процесс", es: "Flujo con IA" },
        href: "/ai-workflow",
      },
      {
        label: { en: "Notes", zh: "笔记", ar: "ملاحظات", fr: "Notes", ru: "Заметки", es: "Notas" },
        href: "/notes",
      },
      {
        label: { en: "Open source", zh: "开源", ar: "مفتوح المصدر", fr: "Open source", ru: "Открытый код", es: "Código abierto" },
        href: "/open-source",
      },
      {
        label: { en: "GitHub", zh: "GitHub", ar: "GitHub", fr: "GitHub", ru: "GitHub", es: "GitHub" },
        href: "https://github.com/InnoNestX",
      },
    ],
  },
  {
    title: { en: "About", zh: "关于", ar: "نبذة", fr: "À propos", ru: "О нас", es: "Acerca de" },
    links: [
      {
        label: { en: "About", zh: "关于", ar: "نبذة", fr: "À propos", ru: "О нас", es: "Acerca de" },
        href: "/about",
      },
      {
        label: { en: "Products", zh: "产品", ar: "المنتجات", fr: "Produits", ru: "Продукты", es: "Productos" },
        href: "/products",
      },
      {
        label: { en: "Contact", zh: "联系", ar: "تواصل", fr: "Contact", ru: "Контакты", es: "Contacto" },
        href: "/#try",
      },
    ],
  },
];

const TAGLINE: Localized = {
  en: "QA Engineer · SDET · AI Testing.",
  zh: "QA 工程师 · SDET · AI 测试",
  ar: "مهندس جودة · SDET · اختبار بالذكاء الاصطناعي",
  fr: "Ingénieur QA · SDET · Tests IA",
  ru: "QA-инженер · SDET · AI-тестирование",
  es: "Ingeniero QA · SDET · Pruebas con IA",
};

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-surface)] text-[13px] text-muted">
      <div className="container-ap py-12">
        <div className="grid grid-cols-2 gap-8 border-b border-[var(--color-line)] pb-10 sm:grid-cols-3">
          {COLS.map((col, ci) => (
            <div key={ci}>
              <h3 className="mb-3 text-[13px] font-semibold text-ink">
                <T {...col.title} />
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label.en}>
                    <Link href={l.href} className="transition-colors hover:text-ink">
                      <T {...l.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" width={18} height={18} className="block opacity-80" />
            <span>
              © 2026 XuXuClassMate. <T {...TAGLINE} />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
