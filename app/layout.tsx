import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

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
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
