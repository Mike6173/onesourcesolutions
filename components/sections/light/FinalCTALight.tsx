import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FinalCTALight() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-blue-100/60 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-blue-800 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
          Ready to Get Started?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
          Transform Your Home&apos;s Exterior Today
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Request your free, no-obligation estimate and discover why Long Island homeowners trust One Source Solutions for all their exterior cleaning needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-light"
            className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-900 active:scale-95 transition-all duration-150 shadow-xl shadow-blue-800/25"
          >
            Get a Free Estimate <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl text-base font-semibold hover:border-blue-400 hover:bg-gray-50 active:scale-95 transition-all duration-150 shadow-sm"
          >
            <Phone className="w-5 h-5 text-blue-800" />
            {BUSINESS.phone}
          </a>
        </div>

        <p className="mt-8 text-gray-400 text-sm">
          Serving Nassau and Suffolk Counties · Locally Owned & Operated · Fully Insured
        </p>
      </div>
    </section>
  );
}
