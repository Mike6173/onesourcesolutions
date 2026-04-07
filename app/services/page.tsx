import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Zap, Home, Droplets, Sparkles, Building2, Layers, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FinalCTA from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

const serviceImages: Record<string, string> = {
  "power-washing": "/images/power-washing.jpg",
  "soft-house-washing": "/images/soft-house-washing.jpg",
  "gutter-cleaning": "/images/gutter-cleaning.jpg",
  "window-cleaning": "/images/window-cleaning.jpg",
  "janitorial-services": "/images/janitorial-services.jpg",
  "floor-cleaning": "/images/floor-cleaning.jpg",
};

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning Services Long Island, NY",
  description:
    "One Source Solutions offers power washing, soft house washing, gutter cleaning, window cleaning, janitorial services, and floor cleaning across Long Island. Professional results, free estimates.",
  path: "/services",
});

const serviceDetails = [
  {
    slug: "power-washing",
    icon: <Zap className="w-8 h-8 text-electric" />,
    benefits: ["Driveways & patios", "Decks & walkways", "Fencing & retaining walls", "Pool surrounds"],
  },
  {
    slug: "soft-house-washing",
    icon: <Home className="w-8 h-8 text-electric" />,
    benefits: ["All siding types", "Trim & soffits", "Fascia & gutters", "Safe for landscaping"],
  },
  {
    slug: "gutter-cleaning",
    icon: <Droplets className="w-8 h-8 text-electric" />,
    benefits: ["Full debris removal", "Downspout flushing", "Damage inspection", "Year-round protection"],
  },
  {
    slug: "window-cleaning",
    icon: <Sparkles className="w-8 h-8 text-electric" />,
    benefits: ["Interior & exterior", "Screen cleaning", "Frame & sill cleaning", "Streak-free results"],
  },
  {
    slug: "janitorial-services",
    icon: <Building2 className="w-8 h-8 text-electric" />,
    benefits: ["Offices & retail", "Restrooms & common areas", "Trash & touch-point sanitizing", "Flexible schedules"],
  },
  {
    slug: "floor-cleaning",
    icon: <Layers className="w-8 h-8 text-electric" />,
    benefits: ["Strip & refinish", "Tile & grout", "Carpet care", "Routine maintenance"],
  },
];

export default function ServicesPage() {
  const combined = SERVICES.map((s) => ({
    ...s,
    ...serviceDetails.find((d) => d.slug === s.slug)!,
  }));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Professional Exterior Cleaning Services on Long Island
          </h1>
          <p className="text-silver text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Everything your home's exterior needs, from one trusted, locally owned source. Expert results, transparent pricing, and satisfaction guaranteed.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">Get a Free Estimate</CTAButton>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {combined.map((service, i) => (
              <div
                key={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
                  <p className="text-silver leading-relaxed mb-6">{service.shortDesc} Our team delivers thorough, professional results that protect and enhance your property.</p>
                  <ul className="grid grid-cols-2 gap-3 mb-7">
                    {service.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-silver text-sm">
                        <CheckCircle className="w-4 h-4 text-electric flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-electric hover:text-electric-light font-semibold transition-colors duration-150 group"
                  >
                    Learn About {service.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </Link>
                </div>
                <div className={`bg-navy-card border border-navy-border rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={serviceImages[service.slug]}
                      alt={`${service.name} service on Long Island`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <span className="text-gray-900 font-bold text-xl">{service.name}</span>
                    </div>
                    <p className="text-silver text-sm leading-relaxed mb-6">
                      {service.slug === "power-washing" && "Remove years of built-up dirt, stains, algae, and grime from concrete, brick, wood, and stone surfaces. Our power washing service restores your property's hardscaping to like-new condition."}
                      {service.slug === "soft-house-washing" && "Protect your investment with our low-pressure house washing that safely removes mold, mildew, and algae from your siding, without the risk of damage from excessive pressure."}
                      {service.slug === "gutter-cleaning" && "Don't wait for water damage to tell you your gutters are clogged. Our professional gutter cleaning keeps your drainage system working properly, protecting your home year-round."}
                      {service.slug === "window-cleaning" && "Let natural light back into your home with our streak-free window cleaning service. We clean every pane, frame, sill, and screen for a complete, polished result."}
                      {service.slug === "janitorial-services" && "Keep your workplace spotless and professional with janitorial programs built around your hours and standards. From daily cleaning to deep sanitization, we help Long Island businesses maintain a healthy, welcoming environment for staff and customers."}
                      {service.slug === "floor-cleaning" && "Protect and revitalize every floor type with expert care. Whether you need strip-and-wax for VCT, grout restoration for tile, carpet extraction, or scheduled maintenance for high-traffic areas, we deliver durable, professional results."}
                    </p>
                    <CTAButton href={`/services/${service.slug}`} variant="outline" className="w-full justify-center" arrow>
                      View Full Details
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
