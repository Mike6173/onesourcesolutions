"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Zap,
  Home,
  Droplets,
  Sparkles,
  Phone,
} from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";
import clsx from "clsx";

const serviceIcons: Record<string, React.ReactNode> = {
  "power-washing": <Zap className="w-4 h-4 text-electric" />,
  "soft-house-washing": <Home className="w-4 h-4 text-electric" />,
  "gutter-cleaning": <Droplets className="w-4 h-4 text-electric" />,
  "window-cleaning": <Sparkles className="w-4 h-4 text-electric" />,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-navy-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="One Source Solutions Home">
              <Image
                src={BUSINESS.logo}
                alt="One Source Solutions Logo"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-silver hover:text-white transition-colors duration-150 text-sm font-medium link-underline">
                Home
              </Link>
              <Link href="/about" className="text-silver hover:text-white transition-colors duration-150 text-sm font-medium link-underline">
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1 text-silver hover:text-white transition-colors duration-150 text-sm font-medium"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className={clsx("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                </button>

                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-navy-card border border-navy-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                  >
                    <div className="p-2">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-navy-light transition-colors duration-150 group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy-light group-hover:bg-navy-border flex items-center justify-center transition-colors duration-150">
                            {serviceIcons[service.slug]}
                          </span>
                          <div>
                            <div className="text-white text-sm font-medium">{service.name}</div>
                            <div className="text-silver text-xs leading-snug mt-0.5 line-clamp-1">{service.shortDesc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-navy-border p-3">
                      <Link
                        href="/services"
                        className="block text-center text-electric text-sm font-medium hover:text-electric-light transition-colors duration-150"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/locations" className="text-silver hover:text-white transition-colors duration-150 text-sm font-medium link-underline">
                Locations
              </Link>
              <Link href="/faq" className="text-silver hover:text-white transition-colors duration-150 text-sm font-medium link-underline">
                FAQ
              </Link>
              <Link href="/contact" className="text-silver hover:text-white transition-colors duration-150 text-sm font-medium link-underline">
                Contact Us
              </Link>

              {/* Light theme previews */}
              <div className="w-px h-4 bg-navy-border" />
              <Link href="/home-light" className="text-electric hover:text-electric-light transition-colors duration-150 text-sm font-medium">
                Home (Light)
              </Link>
              <Link href="/contact-light" className="text-electric hover:text-electric-light transition-colors duration-150 text-sm font-medium">
                Contact (Light)
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-silver hover:text-white transition-colors duration-150 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-electric" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="bg-electric-gradient text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg shadow-electric/20"
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-silver hover:text-white transition-colors p-2 -mr-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-navy-card border-l border-navy-border flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-navy-border">
              <Image src={BUSINESS.logo} alt="One Source Solutions" width={140} height={38} className="h-10 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="text-silver hover:text-white p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-silver hover:text-white hover:bg-navy-light rounded-lg transition-colors duration-150 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-silver hover:text-white hover:bg-navy-light rounded-lg transition-colors duration-150 font-medium"
                >
                  Services
                  <ChevronDown className={clsx("w-4 h-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-navy-border pl-4">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 px-3 py-2.5 text-silver hover:text-white hover:bg-navy-light rounded-lg transition-colors duration-150 text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {serviceIcons[service.slug]}
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-3 py-2.5 text-electric text-sm font-medium hover:text-electric-light"
                      onClick={() => setMobileOpen(false)}
                    >
                      All Services →
                    </Link>
                  </div>
                )}
              </div>

              {[
                { href: "/locations", label: "Locations" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-silver hover:text-white hover:bg-navy-light rounded-lg transition-colors duration-150 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Light theme previews */}
              <div className="h-px bg-navy-border my-3 mx-4" />
              <div className="px-4 mb-1">
                <span className="text-electric text-xs font-semibold uppercase tracking-wider">Light Theme</span>
              </div>
              {[
                { href: "/home-light", label: "Home (Light)" },
                { href: "/contact-light", label: "Contact (Light)" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-electric hover:text-electric-light hover:bg-navy-light rounded-lg transition-colors duration-150 font-medium text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 py-6 border-t border-navy-border space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 border border-navy-border rounded-lg text-white font-medium hover:border-electric/50 transition-colors duration-150"
              >
                <Phone className="w-4 h-4 text-electric" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-electric-gradient text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-150 w-full"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
