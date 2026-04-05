import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { BUSINESS, LOCATIONS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us, Get a Free Estimate",
  description:
    "Contact One Source Solutions for a free exterior cleaning estimate on Long Island. Power washing, soft washing, gutter cleaning, and window cleaning. Serving Nassau & Suffolk County.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Request Your Free Estimate
          </h1>
          <p className="text-silver text-lg leading-relaxed max-w-xl mx-auto">
            Ready to transform your home's exterior? Fill out the form below or give us a call. We respond to all inquiries within one business day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-navy-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-white mb-5">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-0.5">Phone</div>
                      <a href={BUSINESS.phoneHref} className="text-silver hover:text-white transition-colors duration-150 text-sm">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-0.5">Email</div>
                      <a href={BUSINESS.emailHref} className="text-silver hover:text-white transition-colors duration-150 text-sm break-all">
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-0.5">Service Area</div>
                      <p className="text-silver text-sm">Long Island, New York<br />Nassau & Suffolk Counties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-0.5">Hours</div>
                      <p className="text-silver text-sm">Monday – Friday: 8am – 6pm<br />Saturday: 9am – 4pm<br />Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact person */}
              <div className="bg-navy-card border border-navy-border rounded-2xl p-6">
                <div className="text-sm text-silver mb-1">Your direct contact</div>
                <div className="text-white font-semibold text-lg mb-3">{BUSINESS.contact}</div>
                <div className="space-y-2">
                  <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-electric hover:text-electric-light text-sm transition-colors duration-150">
                    <Phone className="w-4 h-4" /> {BUSINESS.phone}
                  </a>
                  <a href={BUSINESS.emailHref} className="flex items-center gap-2 text-electric hover:text-electric-light text-sm transition-colors duration-150 break-all">
                    <Mail className="w-4 h-4" /> {BUSINESS.email}
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div>
                <h3 className="text-white font-bold mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    "We review your request within 1 business day",
                    "We contact you to discuss your project details",
                    "We provide your free, detailed estimate",
                    "You approve and we schedule your service",
                    "We arrive on time and deliver exceptional results",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-electric/20 text-electric text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-silver text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-white font-bold mb-4">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="text-xs text-silver bg-navy-card border border-navy-border rounded-full px-3 py-1.5 hover:text-white hover:border-electric/40 transition-colors duration-150"
                    >
                      {loc.name}
                    </Link>
                  ))}
                  <span className="text-xs text-silver bg-navy-card border border-navy-border rounded-full px-3 py-1.5">
                    + More
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-card border border-navy-border rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-silver text-sm mb-7">All fields marked with * are required.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 bg-navy section-divider">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Fully Insured", sub: "Complete protection on every job" },
              { label: "Free Estimates", sub: "No-obligation quotes always" },
              { label: "Locally Owned", sub: "Long Island based & operated" },
              { label: "Guaranteed Work", sub: "Satisfaction on every service" },
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <CheckCircle className="w-6 h-6 text-electric mb-2" />
                <div className="text-white font-semibold text-sm mb-1">{t.label}</div>
                <div className="text-silver text-xs">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
