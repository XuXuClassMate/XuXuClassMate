import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme";
import { I18nProvider } from "@/components/i18n";

// Sets the theme class before first paint so there is no light-mode flash.
const NO_FLASH = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

const DESCRIPTION =
  "Turn requirements into structured, reviewable test cases, and run them on pullable test databases. QA Engineer · SDET · AI testing.";

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
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <I18nProvider>
            <a href="#main-content" className="skip-link">
              Skip to content
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
