import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Zap, Home, Droplets, Sparkles, Building2, Layers } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";

const serviceIcons: Record<string, React.ReactNode> = {
  "power-washing": <Zap className="w-3.5 h-3.5" />,
  "soft-house-washing": <Home className="w-3.5 h-3.5" />,
  "gutter-cleaning": <Droplets className="w-3.5 h-3.5" />,
  "window-cleaning": <Sparkles className="w-3.5 h-3.5" />,
  "janitorial-services": <Building2 className="w-3.5 h-3.5" />,
  "floor-cleaning": <Layers className="w-3.5 h-3.5" />,
};

export default function Footer() {
  return (
    <footer className="bg-navy-card border-t border-navy-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src={BUSINESS.logo}
                alt="One Source Solutions"
                width={160}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Long Island's trusted exterior cleaning company. Expert power washing, soft washing, gutter cleaning, and window cleaning, delivered with reliability and precision.
            </p>
            <div className="space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors duration-150 text-sm group"
              >
                <Phone className="w-4 h-4 text-electric flex-shrink-0 group-hover:scale-110 transition-transform duration-150" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors duration-150 text-sm group"
              >
                <Mail className="w-4 h-4 text-electric flex-shrink-0 group-hover:scale-110 transition-transform duration-150" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2.5 text-gray-900 text-sm">
                <MapPin className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                Long Island, New York
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-150 text-sm group"
                  >
                    <span className="text-electric group-hover:translate-x-0.5 transition-transform duration-150">
                      {serviceIcons[service.slug]}
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-electric hover:text-electric-light text-sm transition-colors duration-150">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/locations", label: "Service Areas" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-150 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-5">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-150 text-sm"
                  >
                    {loc.name}, NY
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-electric hover:text-electric-light text-sm transition-colors duration-150">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} One Source Solutions. All rights reserved. Serving Long Island, NY.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-xs transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-xs transition-colors duration-150">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
