import type { Metadata } from "next";
import { Droplets } from "lucide-react";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Gutter Cleaning Long Island, NY",
  description:
    "Professional gutter cleaning services on Long Island, NY. Prevent water damage, protect your foundation, and keep gutters flowing freely. Serving Nassau & Suffolk County.",
  path: "/services/gutter-cleaning",
});

const schema = buildServiceSchema({
  name: "Gutter Cleaning",
  description: "Professional gutter cleaning services that remove leaves, debris, and blockages to protect Long Island homes from water damage and foundation issues.",
  url: `${BUSINESS.url}/services/gutter-cleaning`,
});

export default function GutterCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageLayout
        name="Gutter Cleaning"
        slug="gutter-cleaning"
        headline="Professional Gutter Cleaning on Long Island, NY"
        intro="Protect your home from costly water damage with thorough, professional gutter cleaning from One Source Solutions. We clear leaves, debris, and blockages — keeping your gutters flowing freely and your home protected year-round."
        description={[
          "Your gutters are your home's first line of defense against water damage. When leaves, twigs, and debris build up, water can no longer flow freely. The result? Overflow, pooling, foundation damage, and even structural deterioration over time.",
          "At One Source Solutions, our professional gutter cleaning service removes all debris from your gutters and downspouts, ensuring water can move away from your home efficiently. We perform a full inspection during every visit and alert you to any potential issues before they become expensive problems.",
          "Long Island's tree-heavy neighborhoods mean gutters fill up fast — especially in the fall. Experts recommend cleaning gutters at least twice a year, and homes surrounded by trees may need cleaning 3–4 times annually. Don't wait for overflow damage — stay ahead of it with regular professional cleaning.",
          "Beyond just removing debris, we flush your downspouts to ensure they're completely clear, and we can identify early signs of gutter damage, sagging, or improper pitch that could lead to future water problems.",
        ]}
        benefits={[
          "Prevents water overflow that can damage siding, fascia, and foundations",
          "Protects your landscaping from erosion caused by uncontrolled water runoff",
          "Eliminates standing water that attracts mosquitoes and other pests",
          "Extends the life of your gutters and prevents premature sagging",
          "Prevents ice dams from forming during Long Island winters",
          "Early identification of gutter damage before it requires costly repairs",
          "Keeps your home's exterior looking clean and well-maintained",
          "Reduces the risk of basement flooding and foundation damage",
        ]}
        signsNeeded={[
          "Water is overflowing from your gutters during rainstorms",
          "You can see plants or weeds growing in your gutters",
          "Your gutters are visibly sagging or pulling away from the fascia",
          "You notice staining or mildew on your siding below the gutters",
          "Birds or pests are nesting in your gutters",
          "It's been more than 6 months since your last gutter cleaning",
          "Downspouts appear to be clogged or draining slowly",
          "There is pooling water around your foundation after rain",
        ]}
        whyUs={[
          "Thorough removal of all leaves, debris, and blockages",
          "Downspout flushing included on every service",
          "Inspection for damage, sagging, and drainage issues",
          "Safe, professional access — no risks to you or your property",
          "Serving all of Long Island, Nassau and Suffolk County",
          "Fully insured, transparent pricing, and guaranteed work",
        ]}
        faqs={[
          {
            q: "How often should I have my gutters cleaned on Long Island?",
            a: "We recommend cleaning gutters at least twice a year — once in late spring and once in late fall after leaves have dropped. Homes with nearby deciduous trees may need more frequent cleaning, up to 3–4 times per year.",
          },
          {
            q: "What's included in your gutter cleaning service?",
            a: "Our service includes removing all debris from gutters, flushing downspouts to ensure they're clear, a visual inspection for damage or improper drainage, and cleanup of any debris we remove. We'll alert you to any concerns we notice during the process.",
          },
          {
            q: "Can clogged gutters really damage my home?",
            a: "Absolutely. Clogged gutters cause water to overflow and pool against your siding, fascia, and foundation. Over time, this leads to rot, mold, foundation cracks, and basement flooding — all very expensive to repair. Regular gutter cleaning is one of the best investments you can make in your home's health.",
          },
          {
            q: "Do you clean gutters on two-story homes?",
            a: "Yes. We have the equipment and training to safely clean gutters on one-story and two-story homes. Safety is our priority, and we never cut corners when working at height.",
          },
          {
            q: "Can you clean gutters that have gutter guards installed?",
            a: "Yes, we can work with gutter guards. The process may take a bit longer, but we can clean both the guards themselves and the gutters beneath them to ensure proper water flow.",
          },
          {
            q: "What happens if my downspouts are clogged?",
            a: "We flush all downspouts as part of our standard gutter cleaning service. If there's a particularly stubborn blockage, we'll use appropriate tools to clear it. If there's structural damage causing the blockage, we'll let you know.",
          },
        ]}
        icon={<Droplets className="w-7 h-7" />}
        relatedServices={["soft-house-washing", "power-washing", "window-cleaning"]}
      />
    </>
  );
}
