const LOCALE: Record<string, string> = {
  en: "en",
  zh: "zh-CN",
  ar: "ar",
  fr: "fr",
  ru: "ru",
  es: "es",
};

function localeOf(lang: string): string {
  return LOCALE[lang] ?? "en";
}

/** 完整分组数字,例如 86,206 / 86 206,悬停或 title 里用。 */
export function formatCount(n: number, lang = "en"): string {
  if (!Number.isFinite(n)) return "0";
  return new Intl.NumberFormat(localeOf(lang), { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

/**
 * 数字变长时改用紧凑写法,避免胶囊/卡片被撑宽。
 * 中文满 1 万起用 万/亿,西文满 1 万起用 K/M/B。
 */
export function formatCompactCount(
  n: number,
  lang = "en",
  compactFrom = 10_000,
): string {
  if (!Number.isFinite(n)) return "0";
  const rounded = Math.round(n);
  if (Math.abs(rounded) < compactFrom) return formatCount(rounded, lang);
  return new Intl.NumberFormat(localeOf(lang), {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(rounded);
}
