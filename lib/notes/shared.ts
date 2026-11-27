import type { Localized } from "@/components/i18n";

export type { Localized };

/** 代码/命令/配置示例块。label与lang语言中立(文件名或命令类型),正文说明走 paragraphs。 */
export type CodeBlock = {
  lang?: string;
  label?: string;
  code: string;
};

export type NoteSection = {
  heading: Localized;
  paragraphs: Localized[];
  /** 可扫读的要点:步骤、预算、缺陷模板等 */
  bullets?: Localized[];
  /** 对应的代码/命令/配置示例 */
  code?: CodeBlock[];
};

export type Note = {
  slug: string;
  title: Localized;
  date: string;
  readingTime: Localized;
  category: Localized;
  excerpt: Localized;
  body: NoteSection[];
};

/** 六语字段一次写齐,避免笔记正文漏语言。 */
export function loc(
  en: string,
  zh: string,
  ar: string,
  fr: string,
  ru: string,
  es: string,
): Localized {
  return { en, zh, ar, fr, ru, es };
}

export const MIN = (n: number): Localized =>
  loc(`${n} min`, `${n} 分钟`, `${n} دقائق`, `${n} min`, `${n} мин`, `${n} min`);

export const CAT = {
  automation: loc("Automation", "自动化", "الأتمتة", "Automatisation", "Автоматизация", "Automatización"),
  infra: loc("Infrastructure", "基础设施", "البنية التحتية", "Infrastructure", "Инфраструктура", "Infraestructura"),
  ai: loc("AI testing", "AI 测试", "اختبار الذكاء الاصطناعي", "Test IA", "AI-тестирование", "Pruebas con IA"),
  performance: loc("Performance", "性能", "الأداء", "Performance", "Производительность", "Rendimiento"),
  security: loc("Quality", "质量", "الجودة", "Qualité", "Качество", "Calidad"),
} satisfies Record<string, Localized>;
