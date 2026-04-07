import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";

const steps = [
  {
    step: "01",
    title: "Request Your Free Estimate",
    desc: "Fill out our quick online form or give us a call at (516) 508-8865. We'll review your needs and get back to you with a transparent, no-obligation quote within one business day.",
  },
  {
    step: "02",
    title: "We Come to You",
    desc: "Our professional crew arrives on schedule, fully equipped, and ready to work. We take care of everything, you don't need to do a thing. Just let us in and leave the rest to us.",
  },
  {
    step: "03",
    title: "Enjoy the Results",
    desc: "We leave your property looking clean, fresh, and renewed. No mess, no damage, no hassle. Just the spotless results you expected from a team you can trust.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-navy section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Process"
          title="Simple, Fast, and Stress-Free"
          subtitle="Getting your home's exterior professionally cleaned shouldn't be complicated. Here's how easy it is to work with One Source Solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Step number */}
              <div className="relative inline-flex mb-6">
                <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/30 flex items-center justify-center group-hover:bg-electric/15 group-hover:border-electric/50 transition-all duration-200">
                  <span className="text-electric font-bold text-xl">{step.step}</span>
                </div>
              </div>

              <h3 className="text-gray-900 font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <CTAButton href="/contact" variant="primary" size="lg">
            Get My Free Estimate
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
