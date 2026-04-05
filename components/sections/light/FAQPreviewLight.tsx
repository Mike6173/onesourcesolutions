import Link from "next/link";
import SectionHeaderLight from "@/components/ui/light/SectionHeaderLight";
import FAQAccordionLight from "@/components/ui/light/FAQAccordionLight";
import { FAQS_GENERAL } from "@/lib/constants";

export default function FAQPreviewLight() {
  const preview = FAQS_GENERAL.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeaderLight
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Have questions before booking? Here are the answers Long Island homeowners ask us most often."
        />

        <FAQAccordionLight items={preview} />

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 font-medium transition-colors duration-150"
          >
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
