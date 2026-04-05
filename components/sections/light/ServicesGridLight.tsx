import { Zap, Home, Droplets, Sparkles } from "lucide-react";
import ServiceCardLight from "@/components/ui/light/ServiceCardLight";
import SectionHeaderLight from "@/components/ui/light/SectionHeaderLight";
import CTAButtonLight from "@/components/ui/light/CTAButtonLight";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "power-washing": <Zap className="w-6 h-6" />,
  "soft-house-washing": <Home className="w-6 h-6" />,
  "gutter-cleaning": <Droplets className="w-6 h-6" />,
  "window-cleaning": <Sparkles className="w-6 h-6" />,
};

export default function ServicesGridLight() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeaderLight
          eyebrow="What We Do"
          title="Professional Exterior Cleaning Services"
          subtitle="From driveways and siding to gutters and windows, we handle every aspect of your home's exterior with precision and care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCardLight
              key={service.slug}
              slug={service.slug}
              name={service.name}
              shortDesc={service.shortDesc}
              icon={iconMap[service.slug]}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButtonLight href="/services" variant="secondary" size="md" arrow>
            Explore All Services
          </CTAButtonLight>
        </div>
      </div>
    </section>
  );
}
