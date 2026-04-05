import clsx from "clsx";

interface SectionHeaderLightProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClass?: string;
}

export default function SectionHeaderLight({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleClass,
}: SectionHeaderLightProps) {
  return (
    <div className={clsx("mb-12", align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <span className="inline-block text-blue-800 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
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
            "mt-4 text-gray-600 leading-relaxed text-lg",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
