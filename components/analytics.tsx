"use client";

/* First-party analytics beacon -> open.xuxuclassmate.com /api/track.
   The owner silences their own browser by visiting any page with ?me=1
   (clear with ?me=0). Nothing identifying is sent — only path, language,
   device class, theme, referrer host and dwell time. */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/i18n";

const GW = "https://open.xuxuclassmate.com";
const SITE = "www";

function isMuted(): boolean {
  try {
    const u = new URL(window.location.href);
    if (u.searchParams.get("me") === "1") localStorage.setItem("xxcm_notrack", "1");
    if (u.searchParams.get("me") === "0") localStorage.removeItem("xxcm_notrack");
    return localStorage.getItem("xxcm_notrack") === "1";
  } catch {
    return false;
  }
}

function deviceClass(): string {
  const w = window.innerWidth;
  return w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop";
}

export function Analytics() {
  const pathname = usePathname();
  const { lang } = useLang();
  const langRef = useRef(lang);
  langRef.current = lang;
  const enter = useRef(0);
  const current = useRef("");

  // page view on every route change
  useEffect(() => {
    if (isMuted()) return;
    const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const body = JSON.stringify({
      event: "view",
      site: SITE,
      path: pathname,
      lang: langRef.current,
      ref: document.referrer || "",
      device: deviceClass(),
      theme,
    });
    enter.current = Date.now();
    current.current = pathname;
    try {
      fetch(`${GW}/api/track`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body,
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* ignore */
    }
  }, [pathname]);

  // dwell time on leaving the page (route change / tab hidden / unload)
  useEffect(() => {
    const sendLeave = () => {
      if (!enter.current || isMuted()) return;
      const dur = Date.now() - enter.current;
      enter.current = 0;
      const body = JSON.stringify({ event: "leave", site: SITE, path: current.current, dur });
      try {
        navigator.sendBeacon(`${GW}/api/track`, new Blob([body], { type: "text/plain" }));
      } catch {
        /* ignore */
      }
    };
    const onVis = () => {
      if (document.visibilityState === "hidden") sendLeave();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", sendLeave);
    return () => {
      sendLeave();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", sendLeave);
    };
  }, [pathname]);

  return null;
}
