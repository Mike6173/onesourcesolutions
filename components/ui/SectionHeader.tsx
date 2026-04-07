import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClass?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleClass,
}: SectionHeaderProps) {
  return (
    <div className={clsx("mb-12", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl font-bold text-gray-900 leading-tight",
          align === "center" && "max-w-2xl mx-auto",
          titleClass
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-silver leading-relaxed text-lg",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
