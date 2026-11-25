import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Apple-style pill button. shadcn/ui pattern (CVA + asChild-free slot),
 * retizethemed to our tokens — not the shadcn default theme.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-normal transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]",
        secondary:
          "bg-[color-mix(in_srgb,var(--color-ink)_8%,transparent)] text-ink hover:bg-[color-mix(in_srgb,var(--color-ink)_12%,transparent)]",
        ghost: "bg-transparent text-ink hover:bg-[var(--color-surface)]",
      },
      size: {
        md: "h-11 px-5 text-[17px]",
        lg: "h-[52px] px-7 text-[19px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
