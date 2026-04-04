import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDesc: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ slug, name, shortDesc, icon }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-navy-card border border-navy-border rounded-2xl p-6 hover:border-electric/40 hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-electric/5"
    >
      <div className="w-12 h-12 rounded-xl bg-navy-light border border-navy-border flex items-center justify-center mb-5 group-hover:border-electric/40 group-hover:bg-electric/10 transition-all duration-200">
        <span className="text-electric">{icon}</span>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-electric transition-colors duration-200">
        {name}
      </h3>
      <p className="text-silver text-sm leading-relaxed mb-4">{shortDesc}</p>
      <span className="inline-flex items-center gap-1 text-electric text-sm font-medium group-hover:gap-2 transition-all duration-200">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
