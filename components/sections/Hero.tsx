import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, MapPin, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden pt-20 pb-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-exterior.jpg"
          alt="Beautiful Long Island neighborhood with pristine homes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/50 bg-gradient-to-r from-white/75 via-white/55 to-white/30" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(90,157,183,1) 1px, transparent 1px), linear-gradient(90deg, rgba(90,157,183,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Electric blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Company Name */}
          <p className="text-electric text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            One Source Solutions
          </p>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-electric/10 border border-electric/20 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-electric" />
            <span className="text-electric text-xs font-semibold uppercase tracking-widest">
              Serving Long Island, New York
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Expert Exterior Cleaning for{" "}
            <span className="text-electric">Long Island Homes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-silver text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            Power washing, soft washing, gutter cleaning, and window cleaning delivered with reliability and precision. Get a spotless property without lifting a finger.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-electric-gradient text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 shadow-xl shadow-electric/25 glow-blue"
            >
              Get a Free Estimate
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 bg-navy-card border border-navy-border text-gray-900 px-8 py-4 rounded-xl text-base font-semibold hover:border-electric/50 hover:bg-navy-light active:scale-95 transition-all duration-150"
            >
              <Phone className="w-5 h-5 text-electric" />
              Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-electric" />
              <span className="text-gray-900 text-sm font-medium">Fully Insured</span>
            </div>
            <div className="w-px h-4 bg-navy-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-electric" />
              <span className="text-gray-900 text-sm font-medium">Locally Owned & Operated</span>
            </div>
            <div className="w-px h-4 bg-navy-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-900 text-sm font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
