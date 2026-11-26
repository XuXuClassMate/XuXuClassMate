import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme";
import { I18nProvider, T } from "@/components/i18n";
import { Analytics } from "@/components/analytics";

const DESCRIPTION =
  "Turn requirements into structured, reviewable test cases, and run them on pullable test databases. QA Engineer · SDET · AI testing.";

// Sets the theme class before first paint so there is no light-mode flash.
const NO_FLASH = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

// Structured data: the site + its author, for search engines and rich results.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.xuxuclassmate.com/#website",
      url: "https://www.xuxuclassmate.com",
      name: "XuXuClassMate",
      description: DESCRIPTION,
      inLanguage: ["en", "zh", "ar", "fr", "ru", "es"],
    },
    {
      "@type": "Person",
      "@id": "https://www.xuxuclassmate.com/#person",
      name: "XuXuClassMate",
      jobTitle: "QA Engineer · SDET",
      url: "https://www.xuxuclassmate.com",
      sameAs: [
        "https://github.com/XuXuClassMate",
        "https://hub.docker.com/u/xuxuclassmate",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xuxuclassmate.com"),
  title: "XuXuClassMate — AI testing tools for QA teams",
  description: DESCRIPTION,
  openGraph: {
    title: "XuXuClassMate — AI testing tools for QA teams",
    description: DESCRIPTION,
    type: "website",
    siteName: "XuXuClassMate",
  },
  twitter: {
    card: "summary_large_image",
    title: "XuXuClassMate — AI testing tools for QA teams",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <I18nProvider>
            <Analytics />
            <a href="#main-content" className="skip-link">
              <T en="Skip to content" zh="跳到主要内容" ar="تخطَّ إلى المحتوى" fr="Aller au contenu" ru="Перейти к содержимому" es="Saltar al contenido" />
            </a>
            <SiteNav />
            <main id="main-content">{children}</main>
            <SiteFooter />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
