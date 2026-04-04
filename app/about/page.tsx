import type { Metadata } from "next";
import Link from "next/link";
import { Shield, MapPin, Star, Clock, Users, ThumbsUp, CheckCircle, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { BUSINESS, LOCATIONS, SERVICES, FAQS_GENERAL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about One Source Solutions, Long Island's trusted exterior cleaning company. Locally owned, fully insured, and dedicated to delivering results with reliability and precision.",
  path: "/about",
});

const values = [
  { icon: <Shield className="w-5 h-5 text-electric" />, title: "Integrity", desc: "We operate with full transparency — honest pricing, honest timelines, and honest results." },
  { icon: <Star className="w-5 h-5 text-electric" />, title: "Quality", desc: "We never cut corners. Every job is completed to the highest standard, no exceptions." },
  { icon: <Users className="w-5 h-5 text-electric" />, title: "Community", desc: "We're Long Island locals. Giving back to the communities we serve is important to us." },
  { icon: <Clock className="w-5 h-5 text-electric" />, title: "Reliability", desc: "We show up on time, communicate clearly, and deliver exactly what we promise." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
            About One Source Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Long Island's Exterior Cleaning Experts
          </h1>
          <p className="text-silver text-lg leading-relaxed max-w-2xl mx-auto">
            We're a locally owned and operated exterior cleaning company built on the belief that your home deserves the same care and attention you give it every day.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-3">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Built on Long Island. Built for Long Island.
              </h2>
              <div className="space-y-4 text-silver leading-relaxed">
                <p>
                  One Source Solutions was founded right here on Long Island with a simple mission: to give homeowners access to truly professional exterior cleaning that they could rely on, time and time again.
                </p>
                <p>
                  We saw a gap in the market — too many services that showed up unprepared, used the wrong techniques, or simply didn't care about the results. We set out to do things differently.
                </p>
                <p>
                  Today, we serve homeowners across Nassau and Suffolk Counties with the same commitment to quality and professionalism that we started with. Every driveway, every siding panel, every gutter, and every window gets our full attention.
                </p>
                <p>
                  We take pride in what we do — and it shows in every job we complete.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Homes Cleaned" },
                { number: "5★", label: "Average Rating" },
                { number: "Nassau &\nSuffolk", label: "Counties Served" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, i) => (
                <div key={i} className="bg-navy-card border border-navy-border rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1 whitespace-pre-line leading-tight">{stat.number}</div>
                  <div className="text-silver text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Mission"
            title="What We Stand For"
            subtitle="Our values aren't just words — they're the way we operate on every single job, with every single customer."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-navy-card border border-navy-border rounded-2xl p-6 hover:border-electric/30 transition-colors duration-200">
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-3">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                The One Source Difference
              </h2>
              <p className="text-silver leading-relaxed mb-8">
                There are a lot of exterior cleaning companies on Long Island. Here's what makes One Source Solutions the right choice for your home.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully licensed and insured for your complete protection",
                  "Professional-grade equipment for superior results",
                  "Proper techniques that protect your property from damage",
                  "Transparent, upfront pricing — no surprises",
                  "Reliable scheduling with clear communication",
                  "Locally owned — we care about our community",
                  "Satisfaction guaranteed on every service",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-silver text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-2">Our Services</h3>
              <p className="text-silver text-sm mb-6">Everything your home's exterior needs, from one trusted source.</p>
              <div className="space-y-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between p-4 bg-navy-light rounded-xl hover:bg-navy-border transition-colors duration-150 group"
                  >
                    <div>
                      <div className="text-white font-medium text-sm">{s.name}</div>
                      <div className="text-silver text-xs mt-0.5">{s.shortDesc}</div>
                    </div>
                    <span className="text-electric text-sm group-hover:translate-x-1 transition-transform duration-150">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-20 bg-navy section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Service Area"
            title="Locations We Serve"
            subtitle="We proudly serve communities across Long Island, NY. If you're in Nassau or Suffolk County, we can help."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center justify-center gap-1.5 bg-navy-card border border-navy-border rounded-lg px-3 py-3 text-silver hover:text-white hover:border-electric/40 transition-all duration-150 text-sm text-center"
              >
                <MapPin className="w-3 h-3 text-electric flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/locations" variant="secondary" arrow>View All Service Areas</CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-light section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Frequently Asked Questions" />
          <FAQAccordion items={FAQS_GENERAL} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy section-divider relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] bg-electric/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-silver text-lg mb-8">
            Get your free, no-obligation estimate today. Call us or fill out our quick online form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">Get a Free Estimate</CTAButton>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-navy-card border border-navy-border text-white px-8 py-4 rounded-xl font-semibold hover:border-electric/50 transition-all duration-150"
            >
              <Phone className="w-5 h-5 text-electric" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
