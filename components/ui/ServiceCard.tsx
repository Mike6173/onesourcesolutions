import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const serviceImages: Record<string, string> = {
  "power-washing": "/images/power-washing.jpg",
  "soft-house-washing": "/images/soft-house-washing.jpg",
  "gutter-cleaning": "/images/gutter-cleaning.jpg",
  "window-cleaning": "/images/window-cleaning.jpg",
};

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
      className="group block bg-navy-card border border-navy-border rounded-2xl overflow-hidden hover:border-electric/40 hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-electric/5"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={serviceImages[slug]}
          alt={`${name} service`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-card/80 to-transparent" />
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-navy/80 backdrop-blur-sm border border-navy-border flex items-center justify-center">
          <span className="text-electric">{icon}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-electric transition-colors duration-200">
          {name}
        </h3>
        <p className="text-silver text-sm leading-relaxed mb-4">{shortDesc}</p>
        <span className="inline-flex items-center gap-1 text-electric text-sm font-medium group-hover:gap-2 transition-all duration-200">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
