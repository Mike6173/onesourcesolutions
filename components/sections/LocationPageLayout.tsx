import Link from "next/link";
import Image from "next/image";
import { MapPin, CheckCircle, Phone, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";

interface LocationPageLayoutProps {
  name: string;
  slug: string;
  county: string;
  intro: string;
  description: string[];
  localContext: string;
  faqs: { q: string; a: string }[];
}

export default function LocationPageLayout({
  name,
  slug,
  county,
  intro,
  description,
  localContext,
  faqs,
}: LocationPageLayoutProps) {
  const nearby = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-exterior.jpg"
            alt={`Exterior cleaning services in ${name}, Long Island`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/50" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-silver flex-wrap">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li className="text-navy-border">/</li>
              <li><Link href="/locations" className="hover:text-gray-900 transition-colors">Locations</Link></li>
              <li className="text-navy-border">/</li>
              <li className="text-electric">{name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-electric/10 border border-electric/20 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-electric" />
                <span className="text-electric text-xs font-semibold uppercase tracking-wider">
                  {county} County, Long Island
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Exterior Cleaning Services in {name}, NY
              </h1>
              <p className="text-silver text-lg leading-relaxed mb-8">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/contact" variant="primary" size="lg">Get a Free Estimate</CTAButton>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-navy-card border border-navy-border text-gray-900 px-6 py-3 rounded-xl font-semibold hover:border-electric/50 transition-all duration-150"
                >
                  <Phone className="w-4 h-4 text-electric" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Services offered */}
            <div className="bg-navy-card border border-navy-border rounded-2xl p-7">
              <h2 className="text-gray-900 font-bold text-lg mb-5">Services We Offer in {name}</h2>
              <div className="space-y-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between p-4 bg-navy-light rounded-xl hover:bg-navy-border transition-colors duration-150 group"
                  >
                    <div>
                      <div className="text-gray-900 font-medium text-sm">{s.name}</div>
                      <div className="text-silver text-xs mt-0.5">{s.shortDesc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-electric group-hover:translate-x-1 transition-transform duration-150 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About serving this area */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Serving {name} with Professional Exterior Cleaning
              </h2>
              <div className="space-y-4">
                {description.map((para, i) => (
                  <p key={i} className="text-silver leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-navy-card border border-navy-border rounded-2xl p-6">
                <h3 className="text-gray-900 font-bold mb-4">Why Local Homeowners Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "Serving all of Long Island, including " + name,
                    "Fully insured with transparent pricing",
                    "Professional equipment and techniques",
                    "Satisfaction guaranteed on every job",
                    "Responsive communication and reliable scheduling",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-silver text-sm">
                      <CheckCircle className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-electric/10 border border-electric/30 rounded-2xl p-6">
                <div className="text-gray-900 font-bold mb-1">Ready to book?</div>
                <p className="text-silver text-sm mb-4">Contact us for a free estimate for your {name} home.</p>
                <CTAButton href="/contact" variant="primary" className="w-full justify-center">
                  Get Free Estimate
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 text-center">
            Exterior Cleaning in {name}: What You Should Know
          </h2>
          <p className="text-silver leading-relaxed text-center">{localContext}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Exterior Cleaning FAQs for {name} Homeowners
          </h2>
          <p className="text-silver text-center mb-10">Common questions from {name} residents about our services.</p>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">We Also Serve Nearby Areas</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {nearby.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center gap-1.5 bg-navy-card border border-navy-border rounded-lg px-4 py-2.5 text-silver hover:text-gray-900 hover:border-electric/40 transition-all duration-150 text-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-electric" />
                {loc.name}, NY
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locations" className="text-electric hover:text-electric-light text-sm font-medium transition-colors duration-150">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-light section-divider relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-electric/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Schedule in {name}?
          </h2>
          <p className="text-silver text-lg mb-8">
            Join hundreds of Long Island homeowners who trust One Source Solutions for expert exterior cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">Get a Free Estimate</CTAButton>
            <CTAButton href="/services" variant="secondary" size="lg">View All Services</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
