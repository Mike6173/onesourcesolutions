import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface CTAButtonLightProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  arrow?: boolean;
  external?: boolean;
}

export default function CTAButtonLight({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  external = false,
}: CTAButtonLightProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 active:scale-95";

  const variants = {
    primary:
      "bg-blue-800 text-white shadow-lg shadow-blue-800/20 hover:bg-blue-900",
    secondary:
      "bg-white border border-gray-200 text-gray-900 hover:border-blue-300 hover:bg-gray-50 shadow-sm",
    outline:
      "border-2 border-blue-600 text-blue-800 hover:bg-blue-800 hover:text-white",
    ghost:
      "text-blue-800 hover:text-blue-900",
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
