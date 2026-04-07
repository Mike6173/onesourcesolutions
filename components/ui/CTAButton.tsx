import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: boolean;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 active:scale-95";

  const variants = {
    primary:
      "bg-electric-gradient text-white shadow-lg shadow-electric/20 hover:opacity-90",
    secondary:
      "bg-navy-card border border-navy-border text-gray-900 hover:border-electric/50 hover:bg-navy-light",
    outline:
      "border-2 border-electric text-electric hover:bg-electric hover:text-white",
    ghost:
      "text-electric hover:text-electric-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {arrow && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
