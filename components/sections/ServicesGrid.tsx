import { Zap, Home, Droplets, Sparkles, Building2, Layers } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "power-washing": <Zap className="w-6 h-6" />,
  "soft-house-washing": <Home className="w-6 h-6" />,
  "gutter-cleaning": <Droplets className="w-6 h-6" />,
  "window-cleaning": <Sparkles className="w-6 h-6" />,
  "janitorial-services": <Building2 className="w-6 h-6" />,
  "floor-cleaning": <Layers className="w-6 h-6" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-navy section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Professional Exterior Cleaning Services"
          subtitle="From driveways and siding to gutters and windows, we handle every aspect of your home's exterior with precision and care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              name={service.name}
              shortDesc={service.shortDesc}
              icon={iconMap[service.slug]}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/services" variant="secondary" size="md" arrow>
            Explore All Services
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
