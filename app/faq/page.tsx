import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTAButton from "@/components/ui/CTAButton";
import { buildMetadata, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about exterior cleaning services on Long Island. Power washing, soft washing, gutter cleaning, and window cleaning FAQs from One Source Solutions.",
  path: "/faq",
});

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        q: "What areas do you serve on Long Island?",
        a: "We serve all of Long Island, covering Nassau and Suffolk Counties. Our primary service areas include Huntington, Babylon, Islip, Smithtown, Hempstead, Oyster Bay, Brookhaven, and dozens of surrounding communities. If you're on Long Island, we can help, contact us to confirm your location.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. One Source Solutions is fully insured. We carry liability insurance on every job to protect you, your property, and our team. You can hire us with complete confidence.",
      },
      {
        q: "Is One Source Solutions locally owned?",
        a: "Yes, we're a locally owned and operated business based right here on Long Island. We care deeply about the communities we serve and take pride in delivering the kind of service that builds long-term relationships with homeowners.",
      },
      {
        q: "Who is my point of contact?",
        a: "Brianna Fitzgerald is your primary contact at One Source Solutions. You can reach her at (516) 508-8865 or brianna@one-source-solutions.com. We pride ourselves on being responsive and communicative throughout every project.",
      },
    ],
  },
  {
    category: "Service Questions",
    faqs: [
      {
        q: "What exterior cleaning services do you offer?",
        a: "We offer four core services: power washing (for driveways, patios, decks, and hard surfaces), soft house washing (for home siding and exteriors), gutter cleaning (full cleaning and downspout flushing), and window cleaning (interior and exterior, including screens). We can handle all your exterior cleaning needs in one place.",
      },
      {
        q: "What is the difference between power washing and soft washing?",
        a: "Power washing uses high-pressure water to clean hard surfaces like concrete, brick, and stone. Soft washing uses low pressure combined with professional cleaning solutions, it's the correct and safe method for cleaning your home's siding, roof, and other delicate surfaces. Using high pressure on siding can force water behind panels and cause damage. We use the right method for every surface.",
      },
      {
        q: "Do you offer one-time services or recurring maintenance plans?",
        a: "We offer both. Many homeowners prefer a one-time seasonal clean, while others benefit from a regular maintenance schedule. We can discuss the best option for your property during your free estimate.",
      },
      {
        q: "Do you clean commercial properties?",
        a: "Our primary focus is residential exterior cleaning for Long Island homeowners. For commercial inquiries, please contact us and we'll discuss your specific needs.",
      },
    ],
  },
  {
    category: "Scheduling",
    faqs: [
      {
        q: "How quickly can you schedule a service?",
        a: "We typically schedule services within 1–5 business days of your estimate approval, depending on the time of year. Spring and fall are our busiest seasons, so we recommend booking early to get your preferred date.",
      },
      {
        q: "Do I need to be home when you perform the service?",
        a: "Not necessarily. For most exterior services, we just need access to the area being cleaned and a water source. We'll communicate with you before arriving and let you know when the job is complete. If you do need to be home for specific services (like interior window cleaning), we'll let you know in advance.",
      },
      {
        q: "What happens if it rains on my scheduled service day?",
        a: "Some services like power washing and gutter cleaning can still be performed in light rain. For soft house washing and window cleaning, we prefer dry conditions for the best results. If we need to reschedule due to weather, we'll contact you as early as possible to find a new date that works for you.",
      },
      {
        q: "Can I request a specific date or time for my service?",
        a: "Absolutely. When scheduling, let us know your preferred days and time windows and we'll do our best to accommodate. We provide a specific arrival window and communicate clearly on the day of service.",
      },
    ],
  },
  {
    category: "Pricing & Estimates",
    faqs: [
      {
        q: "How do I get a price quote?",
        a: "Simply fill out our contact form or call us at (516) 508-8865. We'll review your project details and provide a free, no-obligation estimate. For most services, we can provide a quote over the phone or via email after you describe your property.",
      },
      {
        q: "Are there any hidden fees?",
        a: "Never. We believe in transparent, upfront pricing. Your estimate will clearly outline exactly what is included. There are no surprise fees, you'll know exactly what you're paying before we begin.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, check, and all major credit cards. Payment is collected upon completion of service after you've had a chance to review the results.",
      },
      {
        q: "Why should I pay for professional cleaning instead of doing it myself?",
        a: "Professional exterior cleaning delivers significantly better and longer-lasting results than DIY methods. We use commercial-grade equipment, proper techniques, and the right products for each surface. Improper DIY cleaning can also cause damage, using too much pressure on siding, for example, can void warranties and lead to costly repairs. Our rates are competitive, and the quality speaks for itself.",
      },
    ],
  },
  {
    category: "Property Care & Safety",
    faqs: [
      {
        q: "Will power washing or soft washing damage my property?",
        a: "When done correctly by a trained professional, exterior cleaning will not damage your property. We use the appropriate pressure and technique for every surface. We also take care to protect your landscaping, windows, and surrounding surfaces during every job.",
      },
      {
        q: "Are your cleaning products safe for my family, pets, and garden?",
        a: "Yes. We use biodegradable, eco-friendly cleaning solutions where appropriate, and we take precautions to protect your plants and garden beds. All products are safe once dry. We'll let you know if any specific precautions are needed for your service.",
      },
      {
        q: "Will gutter cleaning cause any damage to my roof or gutters?",
        a: "Our team is trained to clean gutters safely without causing damage to your roof, fascia, or gutters themselves. We use appropriate tools and work carefully around all surfaces. We'll notify you of any existing damage we spot during the cleaning.",
      },
      {
        q: "What precautions do you take when working on my property?",
        a: "We treat every property with the same care we'd give our own. That includes protecting landscaping during washing, using proper ladder safety, cleaning up all debris, and leaving your property in better condition than we found it.",
      },
    ],
  },
  {
    category: "Service Area Questions",
    faqs: [
      {
        q: "Do you serve both Nassau and Suffolk Counties?",
        a: "Yes. We serve all of Long Island, covering both Nassau and Suffolk Counties. Our team travels throughout the island to serve homeowners in every community.",
      },
      {
        q: "I live in a smaller town on Long Island, do you service my area?",
        a: "Likely yes. While our primary service areas include Huntington, Babylon, Islip, Smithtown, Hempstead, Oyster Bay, and Brookhaven, we serve many smaller communities throughout Long Island as well. Contact us with your location and we'll confirm availability.",
      },
      {
        q: "Do you charge extra for travel to certain areas?",
        a: "For most areas across Long Island, there are no additional travel fees. We'll be transparent about any location-related considerations when we provide your estimate.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.faqs);
const schema = buildFAQSchema(allFaqs);

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-silver text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our exterior cleaning services, scheduling, pricing, and more. Can't find your answer? Give us a call.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-navy-light section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-electric/10 border border-electric/30 flex items-center justify-center text-electric text-xs font-bold">
                  {cat.category.charAt(0)}
                </span>
                {cat.category}
              </h2>
              <FAQAccordion items={cat.faqs} />
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 bg-navy section-divider relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[300px] bg-electric/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Still Have Questions?</h2>
          <p className="text-silver mb-8">
            We're happy to answer anything not covered here. Call us or send a message and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">Contact Us</CTAButton>
            <CTAButton href="tel:+15165088865" variant="secondary" size="lg" external>
              Call (516) 508-8865
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
