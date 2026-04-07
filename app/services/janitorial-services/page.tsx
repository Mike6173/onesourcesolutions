import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Janitorial Services Long Island, NY",
  description:
    "Commercial and industrial janitorial services on Long Island, NY. Offices, retail, restrooms, and flexible schedules. One Source Solutions, fully insured. Free estimates.",
  path: "/services/janitorial-services",
});

const schema = buildServiceSchema({
  name: "Janitorial Services",
  description:
    "Professional janitorial and commercial cleaning for offices, retail, and facilities across Long Island, NY.",
  url: `${BUSINESS.url}/services/janitorial-services`,
});

export default function JanitorialServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageLayout
        name="Janitorial Services"
        slug="janitorial-services"
        headline="Janitorial Services for Long Island Businesses"
        intro="Keep your workplace clean, healthy, and professional with janitorial programs tailored to your building, hours, and standards. One Source Solutions delivers reliable commercial cleaning across Nassau and Suffolk Counties."
        description={[
          "A well-maintained facility reflects your brand and supports employee and customer confidence. Our janitorial services cover daily and periodic tasks such as vacuuming, dusting, restroom sanitization, trash removal, and touch-point disinfecting, all scheduled around your operations.",
          "We work with offices, retail spaces, medical and professional suites, and light industrial settings. Crews use commercial-grade products and equipment appropriate for each area, with attention to high-traffic zones and compliance with your site rules.",
          "Consistency matters: the same scope, the same quality, visit after visit. We communicate clearly, adjust plans as your needs change, and stand behind our work with the same satisfaction focus we bring to every Long Island property we serve.",
        ]}
        benefits={[
          "Consistent, professional appearance for staff and visitors",
          "Restrooms and common areas sanitized to your standards",
          "Flexible scheduling, including after-hours and weekends",
          "Trash, recycling, and supply restocking as agreed",
          "Touch-point and high-traffic area focus where it matters most",
          "Locally operated team with clear communication",
          "Fully insured for your peace of mind",
          "Programs scaled from weekly to daily service",
        ]}
        signsNeeded={[
          "Staff are spending time on cleaning instead of their roles",
          "Restrooms or break rooms are frequently below your standard",
          "Dust, debris, or odors are noticeable in common areas",
          "You are opening a new location or expanding footprint",
          "Tenants or customers have commented on facility cleanliness",
          "You need a dependable partner for recurring maintenance",
        ]}
        whyUs={[
          "Custom scopes built around your facility and hours",
          "Trained crews and commercial-grade supplies",
          "Responsive scheduling and clear point of contact",
          "Serving businesses across Nassau and Suffolk County",
          "Fully insured with transparent pricing",
          "Satisfaction guaranteed",
        ]}
        faqs={[
          {
            q: "What types of businesses do you serve?",
            a: "We serve offices, retail stores, professional suites, and similar commercial spaces on Long Island. Tell us about your facility and hours, and we will recommend a scope and schedule.",
          },
          {
            q: "Can you clean after business hours?",
            a: "Yes. Many clients prefer evening or early-morning service. We align visits with the times that work best for your operations.",
          },
          {
            q: "How do you price janitorial service?",
            a: "Pricing depends on square footage, frequency, and the tasks included. We provide a free, detailed estimate so you know exactly what is covered before we start.",
          },
          {
            q: "Are you insured?",
            a: "Yes. One Source Solutions carries liability coverage. We are happy to provide certificate details for your records.",
          },
        ]}
        icon={<Building2 className="w-7 h-7" />}
        relatedServices={["floor-cleaning", "window-cleaning", "power-washing"]}
      />
    </>
  );
}
