/**
 * Minimal line-icon set (monochrome, currentColor, 1.6 stroke). Server-safe.
 * Used for product categories and the self-hosted services.
 */

type IconProps = { className?: string; size?: number };

function Svg({
  size = 20,
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export type IconName =
  | "quality"
  | "infra"
  | "ai"
  | "nas"
  | "mail"
  | "ssh"
  | "watch"
  | "pulse"
  // capabilities
  | "api"
  | "permissions"
  | "performance"
  | "device"
  | "analytics"
  | "sql"
  // ai-workflow roles
  | "dispatch"
  | "generate"
  | "defect"
  | "notify"
  | "docs"
  | "code";

const PATHS: Record<IconName, React.ReactNode> = {
  // Quality engineering — a checklist clipboard
  quality: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M8.5 11l1.5 1.5L13 9M8.5 16.5l1.5 1.5L13 14.5" />
    </>
  ),
  // Developer infrastructure — stacked layers
  infra: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5M3 17l9 4 9-4" />
    </>
  ),
  // AI / agent — a spark
  ai: (
    <>
      <path d="M12 3c.6 3.8 1.6 4.8 5.4 5.4-3.8.6-4.8 1.6-5.4 5.4-.6-3.8-1.6-4.8-5.4-5.4C10.4 7.8 11.4 6.8 12 3Z" />
      <path d="M18.5 14.5c.3 1.6.7 2 2.3 2.3-1.6.3-2 .7-2.3 2.3-.3-1.6-.7-2-2.3-2.3 1.6-.3 2-.7 2.3-2.3Z" />
    </>
  ),
  // NAS — storage drive stack
  nas: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  // Mail — envelope
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  // SSH — terminal
  ssh: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </>
  ),
  // Watch — monitor / activity
  watch: (
    <>
      <path d="M3 12h4l2-6 3 13 2.5-9 1.5 4H21" />
    </>
  ),
  // Pulse / GlobalPulse — globe
  pulse: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
    </>
  ),

  // --- Capabilities ---
  // API & automation — braces
  api: (
    <>
      <path d="M8 4H6.5A2.5 2.5 0 004 6.5V10l-1.5 2L4 14v3.5A2.5 2.5 0 006.5 20H8" />
      <path d="M16 4h1.5A2.5 2.5 0 0120 6.5V10l1.5 2L20 14v3.5a2.5 2.5 0 01-2.5 2.5H16" />
    </>
  ),
  // Permissions & multi-tenant — shield check
  permissions: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  // Front-end performance — gauge
  performance: (
    <>
      <path d="M4.5 18a9 9 0 1115 0" />
      <path d="M12 14l4-4" />
      <circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  // Real-device compatibility — phone
  device: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  // Data analysis — bar chart
  analytics: (
    <>
      <path d="M3 3v18h18" />
      <path d="M8 17v-5M13 17V8M18 17v-8" />
    </>
  ),
  // SQL / database
  sql: (
    <>
      <ellipse cx="12" cy="5" rx="7.5" ry="3" />
      <path d="M4.5 5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5" />
      <path d="M4.5 11v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),

  // --- AI-workflow roles ---
  // Dispatch — routing nodes
  dispatch: (
    <>
      <circle cx="5.5" cy="12" r="2.3" />
      <circle cx="18.5" cy="6" r="2.3" />
      <circle cx="18.5" cy="18" r="2.3" />
      <path d="M7.6 11l8.8-4M7.6 13l8.8 4" />
    </>
  ),
  // Generate & run — play in a document
  generate: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M10 9.5l5 2.5-5 2.5v-5Z" />
    </>
  ),
  // Defect management — bug
  defect: (
    <>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M4 10h4M16 10h4M4 15h4M16 15h4M12 4v4M9.5 5L8 3.5M14.5 5L16 3.5" />
    </>
  ),
  // Notify — bell
  notify: (
    <>
      <path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6Z" />
      <path d="M10 20a2 2 0 004 0" />
    </>
  ),
  // Docs — file with lines
  docs: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  // Code — brackets
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />,
};

export function Icon({ name, size, className }: { name: IconName } & IconProps) {
  return (
    <Svg size={size} className={className}>
      {PATHS[name]}
    </Svg>
  );
}
