import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BUSINESS, SERVICES } from "@/lib/constants";

const SERVICE_IMAGES: Record<string, string> = {
  "power-washing": "/images/power-washing.jpg",
  "soft-house-washing": "/images/soft-house-washing.jpg",
  "gutter-cleaning": "/images/gutter-cleaning.jpg",
  "window-cleaning": "/images/window-cleaning.jpg",
  "janitorial-services": "/images/janitorial-services.jpg",
  "floor-cleaning": "/images/floor-cleaning.jpg",
};

interface ServicePageLayoutProps {
  name: string;
  slug: string;
  headline: string;
  intro: string;
  description: string[];
  benefits: string[];
  signsNeeded: string[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
  icon: React.ReactNode;
  relatedServices?: string[];
}

export default function ServicePageLayout({
  name,
  slug,
  headline,
  intro,
  description,
  benefits,
  signsNeeded,
  whyUs,
  faqs,
  icon,
  relatedServices,
}: ServicePageLayoutProps) {
  const related = SERVICES.filter(
    (s) => s.slug !== slug && (!relatedServices || relatedServices.includes(s.slug))
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        {SERVICE_IMAGES[slug] && (
          <div className="absolute inset-0">
            <Image
              src={SERVICE_IMAGES[slug]}
              alt={`${name} service on Long Island`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/[0.15]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/50" />
          </div>
        )}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-silver">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li className="text-navy-border">/</li>
              <li><Link href="/services" className="hover:text-gray-900 transition-colors">Services</Link></li>
              <li className="text-navy-border">/</li>
              <li className="text-electric">{name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center mb-6 text-electric">
                {icon}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {headline}
              </h1>
              <p className="text-silver text-lg leading-relaxed mb-8">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/contact" variant="primary" size="lg">Get a Free Estimate</CTAButton>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-navy-card border border-navy-border text-gray-900 px-6 py-3 rounded-xl font-semibold hover:border-electric/50 transition-all duration-150"
                >
                  <Phone className="w-4 h-4 text-electric" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <h3 className="text-gray-900 font-bold text-lg mb-4">Why Choose One Source Solutions?</h3>
              <ul className="space-y-3">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-silver text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">About Our {name} Service</h2>
              {SERVICE_IMAGES[slug] && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-navy-border">
                  <Image
                    src={SERVICE_IMAGES[slug]}
                    alt={`Professional ${name.toLowerCase()} service`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-4">
                {description.map((para, i) => (
                  <p key={i} className="text-silver leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-navy-card border border-navy-border rounded-2xl p-6 sticky top-24">
                <h3 className="text-gray-900 font-bold mb-4">Ready to Book?</h3>
                <p className="text-silver text-sm mb-5">Get your free, no-obligation {name.toLowerCase()} estimate today.</p>
                <CTAButton href="/contact" variant="primary" className="w-full justify-center">
                  Get Free Estimate
                </CTAButton>
                <div className="mt-3 text-center">
                  <a href={BUSINESS.phoneHref} className="text-electric text-sm hover:text-electric-light transition-colors">
                    Or call {BUSINESS.phone}
                  </a>
                </div>
                <div className="mt-6 pt-5 border-t border-navy-border space-y-2">
                  <div className="text-silver text-xs flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                    Free estimates
                  </div>
                  <div className="text-silver text-xs flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                    Fully insured
                  </div>
                  <div className="text-silver text-xs flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                    Satisfaction guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
            The Benefits of Professional {name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-navy-card border border-navy-border rounded-xl p-5">
                <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                <span className="text-silver text-sm leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need It */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Signs You Need {name}
          </h2>
          <p className="text-silver text-center mb-10">
            Not sure if it's time to schedule a service? Watch for these common signs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {signsNeeded.map((sign, i) => (
              <div key={i} className="flex items-start gap-3 bg-navy-card border border-navy-border rounded-xl p-5">
                <ArrowRight className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                <span className="text-silver text-sm leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">{name} FAQs</h2>
          <p className="text-silver text-center mb-10">Common questions about our {name.toLowerCase()} service.</p>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-20 bg-navy-light section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block bg-navy-card border border-navy-border rounded-xl p-6 hover:border-electric/40 hover:bg-navy-light transition-all duration-200 group"
                >
                  <div className="text-gray-900 font-semibold mb-2 group-hover:text-electric transition-colors duration-200">{s.name}</div>
                  <div className="text-silver text-sm">{s.shortDesc}</div>
                  <div className="mt-3 text-electric text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all duration-200">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-navy section-divider relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-electric/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready for Professional {name}?
          </h2>
          <p className="text-silver text-lg mb-8">
            Serving Long Island homeowners across Nassau and Suffolk County. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">Get a Free Estimate</CTAButton>
            <CTAButton href="/locations" variant="secondary" size="lg">View Service Areas</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
