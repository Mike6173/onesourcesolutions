import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { LOCATIONS, ALL_LOCATIONS } from "@/lib/constants";

export default function ServiceAreaPreview() {
  return (
    <section className="py-20 lg:py-28 bg-navy section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service Area"
          title="Proudly Serving All of Long Island"
          subtitle="One Source Solutions serves Nassau and Suffolk counties. If you're on Long Island, we're ready to come to you."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
          {ALL_LOCATIONS.map((town) => {
            const loc = LOCATIONS.find((l) => l.name === town);
            return loc ? (
              <Link
                key={town}
                href={`/locations/${loc.slug}`}
                className="flex items-center gap-2 bg-navy-card border border-navy-border rounded-lg px-4 py-3 text-silver hover:text-white hover:border-electric/40 transition-all duration-150 text-sm group"
              >
                <MapPin className="w-3.5 h-3.5 text-electric flex-shrink-0 group-hover:scale-110 transition-transform duration-150" />
                {town}
              </Link>
            ) : (
              <div
                key={town}
                className="flex items-center gap-2 bg-navy-card border border-navy-border rounded-lg px-4 py-3 text-silver text-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-electric/50 flex-shrink-0" />
                {town}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-electric hover:text-electric-light font-medium transition-colors duration-150"
          >
            View All Service Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
