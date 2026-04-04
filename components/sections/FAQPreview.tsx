import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { FAQS_GENERAL } from "@/lib/constants";

export default function FAQPreview() {
  const preview = FAQS_GENERAL.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-navy-light section-divider">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Have questions before booking? Here are the answers Long Island homeowners ask us most often."
        />

        <FAQAccordion items={preview} />

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-electric hover:text-electric-light font-medium transition-colors duration-150"
          >
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
