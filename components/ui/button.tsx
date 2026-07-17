import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<Variant, string> = {
  primary: "bg-silver-light text-background-primary hover:bg-silver-primary",
  secondary:
    "border border-border-subtle bg-transparent text-text-primary hover:bg-surface-secondary",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary",
  link: "h-auto rounded-none bg-transparent p-0 text-silver-light underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
