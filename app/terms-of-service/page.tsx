import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of Service for One Source Solutions, Long Island exterior cleaning company.",
  path: "/terms-of-service",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-navy-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-silver text-sm mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8">
          {[
            {
              title: "Services",
              content: "One Source Solutions agrees to provide exterior cleaning services as outlined in your agreed-upon estimate. Services include power washing, soft house washing, gutter cleaning, and window cleaning as specified per job. Service scope and pricing are confirmed at the time of estimate acceptance.",
            },
            {
              title: "Estimates and Pricing",
              content: "All estimates are provided free of charge and are valid for 30 days from the date of issuance. Final pricing may be adjusted if the scope of work changes materially from the original estimate. We will notify you of any changes before proceeding.",
            },
            {
              title: "Property Access",
              content: "You agree to provide One Source Solutions with access to the areas of your property necessary to complete the agreed services. You are responsible for ensuring that any gates, pets, or obstructions are addressed before our arrival.",
            },
            {
              title: "Property Liability",
              content: "One Source Solutions carries liability insurance and takes every precaution to protect your property. We are not responsible for pre-existing damage or conditions that were present before service began. We will notify you of any pre-existing concerns we observe.",
            },
            {
              title: "Payment",
              content: "Payment is due upon completion of service. We accept cash, check, and major credit cards. Invoices not paid within 30 days may be subject to a late fee.",
            },
            {
              title: "Cancellations",
              content: "We ask for at least 24 hours notice if you need to cancel or reschedule your appointment. Last-minute cancellations may affect future scheduling priority.",
            },
            {
              title: "Satisfaction Guarantee",
              content: "We stand behind our work. If you are not satisfied with the results, please contact us within 48 hours of service completion and we will address your concerns promptly.",
            },
            {
              title: "Contact",
              content: `For questions about these terms, contact us at ${BUSINESS.email} or ${BUSINESS.phone}.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-silver leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
