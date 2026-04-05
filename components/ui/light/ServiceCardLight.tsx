import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const serviceImages: Record<string, string> = {
  "power-washing": "/images/power-washing.jpg",
  "soft-house-washing": "/images/soft-house-washing.jpg",
  "gutter-cleaning": "/images/gutter-cleaning.jpg",
  "window-cleaning": "/images/window-cleaning.jpg",
};

interface ServiceCardLightProps {
  slug: string;
  name: string;
  shortDesc: string;
  icon: React.ReactNode;
}

export default function ServiceCardLight({ slug, name, shortDesc, icon }: ServiceCardLightProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-800/5 transition-all duration-200"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={serviceImages[slug]}
          alt={`${name} service`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center">
          <span className="text-blue-800">{icon}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-blue-800 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{shortDesc}</p>
        <span className="inline-flex items-center gap-1 text-blue-800 text-sm font-medium group-hover:gap-2 transition-all duration-200">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
