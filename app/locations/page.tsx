import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FinalCTA from "@/components/sections/FinalCTA";
import { LOCATIONS, ALL_LOCATIONS, SERVICES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas, Long Island, NY",
  description:
    "One Source Solutions serves Nassau and Suffolk Counties across Long Island, NY. Expert power washing, soft washing, gutter cleaning, and window cleaning near you.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
            Service Areas
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Exterior Cleaning Services Across Long Island
          </h1>
          <p className="text-silver text-lg leading-relaxed max-w-2xl mx-auto">
            One Source Solutions serves Nassau and Suffolk Counties. Expert power washing, soft house washing, gutter cleaning, and window cleaning, wherever you are on Long Island.
          </p>
        </div>
      </section>

      {/* Featured Location Pages */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Service Areas"
            title="Local Exterior Cleaning Near You"
            subtitle="Click your town to learn more about our services in your area."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-navy-card border border-navy-border rounded-2xl p-6 hover:border-electric/40 hover:bg-navy-light transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/15 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">{loc.name}</div>
                    <div className="text-silver text-xs">{loc.county} County, NY</div>
                  </div>
                </div>
                <div className="space-y-1.5 mb-5">
                  {SERVICES.slice(0, 3).map((s) => (
                    <div key={s.slug} className="flex items-center gap-2 text-silver text-xs">
                      <CheckCircle className="w-3 h-3 text-electric flex-shrink-0" />
                      {s.name}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-silver text-xs">
                    <CheckCircle className="w-3 h-3 text-electric flex-shrink-0" />
                    + More Services
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-electric text-xs font-medium group-hover:gap-2 transition-all duration-200">
                  View Services <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Towns Grid */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Service Areas"
            title="We Serve These Long Island Communities"
            subtitle="Our service area covers Nassau and Suffolk Counties. Don't see your town? Contact us, we likely serve your area."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ALL_LOCATIONS.map((town) => {
              const loc = LOCATIONS.find((l) => l.name === town);
              return loc ? (
                <Link
                  key={town}
                  href={`/locations/${loc.slug}`}
                  className="flex items-center gap-1.5 bg-navy-card border border-navy-border rounded-lg px-3 py-2.5 text-silver hover:text-gray-900 hover:border-electric/40 transition-all duration-150 text-sm"
                >
                  <MapPin className="w-3 h-3 text-electric flex-shrink-0" />
                  {town}
                </Link>
              ) : (
                <div
                  key={town}
                  className="flex items-center gap-1.5 bg-navy-card border border-navy-border rounded-lg px-3 py-2.5 text-silver text-sm"
                >
                  <MapPin className="w-3 h-3 text-electric/40 flex-shrink-0" />
                  {town}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-3">Why Local Matters</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">The Value of Hiring a Local Long Island Company</h2>
              <div className="space-y-4 text-silver leading-relaxed">
                <p>When you hire One Source Solutions, you're working with a team that lives and operates right here on Long Island. We understand the local climate, the types of homes in your neighborhood, and the specific challenges that Long Island homeowners face.</p>
                <p>Coastal moisture, heavy pollen seasons, and the kind of tree coverage common in Nassau and Suffolk Counties all contribute to faster buildup of mold, algae, and grime. We know how to address these conditions because we deal with them every day.</p>
                <p>Hiring local also means faster scheduling, better accountability, and a team that genuinely cares about your community's reputation and your home's appearance.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Local Expertise", desc: "We understand Long Island's climate and what your home needs to stay clean." },
                { title: "Faster Scheduling", desc: "No waiting weeks, we can typically schedule within a few business days." },
                { title: "Community Accountability", desc: "As a local business, our reputation is everything. We always do right by our customers." },
                { title: "Supporting Local", desc: "Your investment stays in the Long Island community when you hire local." },
              ].map((item, i) => (
                <div key={i} className="bg-navy-card border border-navy-border rounded-xl p-5">
                  <h3 className="text-gray-900 font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-silver text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
