import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, MapPin, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function HeroLight() {
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
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Company Name */}
          <p className="text-blue-800 text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            One Source Solutions
          </p>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-blue-800" />
            <span className="text-blue-800 text-xs font-semibold uppercase tracking-widest">
              Serving Long Island, New York
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Expert Exterior Cleaning for{" "}
            <span className="text-blue-800">Long Island Homes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            Power washing, soft washing, gutter cleaning, and window cleaning delivered with reliability and precision. Get a spotless property without lifting a finger.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact-light"
              className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-900 active:scale-95 transition-all duration-150 shadow-xl shadow-blue-800/25"
            >
              Get a Free Estimate
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-xl text-base font-semibold hover:border-blue-400 hover:bg-gray-50 active:scale-95 transition-all duration-150 shadow-sm"
            >
              <Phone className="w-5 h-5 text-blue-800" />
              Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-800" />
              <span className="text-gray-600 text-sm font-medium">Fully Insured</span>
            </div>
            <div className="w-px h-4 bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-800" />
              <span className="text-gray-600 text-sm font-medium">Locally Owned & Operated</span>
            </div>
            <div className="w-px h-4 bg-gray-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
