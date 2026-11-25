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
  | "pulse";

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
};

export function Icon({ name, size, className }: { name: IconName } & IconProps) {
  return (
    <Svg size={size} className={className}>
      {PATHS[name]}
    </Svg>
  );
}
