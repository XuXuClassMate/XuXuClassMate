"use client";

import { useTx, type Localized } from "@/components/i18n";

type Service = {
  title: string;
  host: string;
  href: string;
  detail: Localized;
};

const SERVICES: Service[] = [
  {
    title: "NAS",
    host: "nas.xuxuclassmate.com",
    href: "https://nas.xuxuclassmate.com",
    detail: {
      en: "Self-hosted storage.",
      zh: "自托管存储。",
      ar: "تخزين ذاتي الاستضافة.",
      fr: "Stockage auto-hébergé.",
      ru: "Собственное хранилище.",
      es: "Almacenamiento autoalojado.",
    },
  },
  {
    title: "Mail",
    host: "mail.xuxuclassmate.com",
    href: "https://mail.xuxuclassmate.com",
    detail: {
      en: "Compose, attachments, and history.",
      zh: "撰写、附件、发送记录。",
      ar: "الإنشاء والمرفقات والسجلّ.",
      fr: "Rédaction, pièces jointes et historique.",
      ru: "Письма, вложения и история.",
      es: "Redacción, adjuntos e historial.",
    },
  },
  {
    title: "SSH",
    host: "ssh.xuxuclassmate.com",
    href: "https://ssh.xuxuclassmate.com/",
    detail: {
      en: "Secure shell for the server.",
      zh: "服务器安全终端。",
      ar: "صدفة آمنة للخادم.",
      fr: "Shell sécurisé pour le serveur.",
      ru: "Защищённый доступ к серверу.",
      es: "Shell seguro para el servidor.",
    },
  },
  {
    title: "Watch",
    host: "watch.xuxuclassmate.com",
    href: "https://watch.xuxuclassmate.com/",
    detail: {
      en: "Traffic and security monitor.",
      zh: "站点流量与安全监控。",
      ar: "مراقبة حركة المرور والأمان.",
      fr: "Surveillance du trafic et de la sécurité.",
      ru: "Мониторинг трафика и безопасности.",
      es: "Monitor de tráfico y seguridad.",
    },
  },
  {
    title: "GlobalPulse",
    host: "pulse.xuxuclassmate.com",
    href: "https://pulse.xuxuclassmate.com/",
    detail: {
      en: "Scheduled market briefings and console.",
      zh: "定时市场简报与控制台。",
      ar: "إحاطات سوق مجدولة ولوحة تحكم.",
      fr: "Briefings de marché planifiés et console.",
      ru: "Запланированные брифинги и консоль.",
      es: "Briefings de mercado programados y consola.",
    },
  },
];

const TITLE: Localized = {
  en: "Services",
  zh: "在线服务",
  ar: "الخدمات",
  fr: "Services",
  ru: "Сервисы",
  es: "Servicios",
};
const LEAD: Localized = {
  en: "These sites all run under this name.",
  zh: "这些站点都在这个名字下面运行。",
  ar: "كل هذه المواقع تعمل تحت هذا الاسم.",
  fr: "Tous ces sites tournent sous ce nom.",
  ru: "Все эти сайты работают под этим именем.",
  es: "Todos estos sitios funcionan bajo este nombre.",
};
const OPEN: Localized = {
  en: "Open",
  zh: "打开",
  ar: "افتح",
  fr: "Ouvrir",
  ru: "Открыть",
  es: "Abrir",
};

export function Services() {
  const tx = useTx();
  return (
    <section id="services" className="bg-[var(--color-surface)]">
      <div className="container-ap py-28">
        <h2 className="display-2 max-w-[18ch]">{tx(TITLE)}</h2>
        <p className="lead mt-4 max-w-[46ch]">{tx(LEAD)}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-semibold tracking-tight" dir="ltr">
                  {s.title}
                </h3>
                <span className="link-ap text-[15px]">{tx(OPEN)}</span>
              </div>
              <p className="mt-1 font-mono text-[12px] text-muted" dir="ltr">
                {s.host}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {tx(s.detail)}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
