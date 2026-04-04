import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-navy section-divider relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-electric/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-electric text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-electric/10 rounded-full border border-electric/20">
          Ready to Get Started?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Transform Your Home's Exterior Today
        </h2>
        <p className="text-silver text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Request your free, no-obligation estimate and discover why Long Island homeowners trust One Source Solutions for all their exterior cleaning needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-electric-gradient text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 shadow-xl shadow-electric/25 glow-blue"
          >
            Get a Free Estimate <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 bg-navy-card border border-navy-border text-white px-8 py-4 rounded-xl text-base font-semibold hover:border-electric/50 hover:bg-navy-light active:scale-95 transition-all duration-150"
          >
            <Phone className="w-5 h-5 text-electric" />
            {BUSINESS.phone}
          </a>
        </div>

        <p className="mt-8 text-silver/70 text-sm">
          Serving Nassau and Suffolk Counties · Locally Owned & Operated · Fully Insured
        </p>
      </div>
    </section>
  );
}
