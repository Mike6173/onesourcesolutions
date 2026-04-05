import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for One Source Solutions, Long Island exterior cleaning company.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 bg-navy-light min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-silver text-sm mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="prose-custom space-y-8">
          {[
            {
              title: "Information We Collect",
              content: "When you use our contact form or request an estimate, we collect your name, email address, phone number, and the details of your service inquiry. This information is used solely to respond to your request and schedule your service.",
            },
            {
              title: "How We Use Your Information",
              content: "We use the information you provide to respond to your inquiry, provide you with an estimate, schedule and deliver our services, and communicate with you about your appointment or service. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
            },
            {
              title: "Data Security",
              content: "We take reasonable measures to protect the information you provide to us. However, no method of transmission over the internet is 100% secure. We cannot guarantee the absolute security of any information transmitted to us.",
            },
            {
              title: "Cookies",
              content: "Our website may use basic cookies to improve your browsing experience. These cookies do not contain personal information and are not used for tracking or advertising purposes.",
            },
            {
              title: "Third-Party Links",
              content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.",
            },
            {
              title: "Contact Us",
              content: `If you have any questions about this Privacy Policy, please contact us at ${BUSINESS.email} or call ${BUSINESS.phone}.`,
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
