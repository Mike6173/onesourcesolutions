import type { Metadata } from "next";
import { Home } from "lucide-react";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Soft House Washing Long Island, NY",
  description:
    "Professional soft house washing services on Long Island, NY. Safe, low-pressure house washing that removes mold, algae, and dirt without damaging your siding. Free estimates.",
  path: "/services/soft-house-washing",
});

const schema = buildServiceSchema({
  name: "Soft House Washing",
  description: "Professional soft house washing using low-pressure techniques to safely clean vinyl, wood, stucco, and painted siding on Long Island homes.",
  url: `${BUSINESS.url}/services/soft-house-washing`,
});

export default function SoftHouseWashingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageLayout
        name="Soft House Washing"
        slug="soft-house-washing"
        headline="Soft House Washing for Long Island Homes"
        intro="Give your home's exterior the gentle, deep clean it deserves. Our professional soft house washing service safely removes mold, mildew, algae, and grime from your siding without the risk of damage that high-pressure washing can cause."
        description={[
          "Soft house washing is the industry-preferred method for cleaning your home's exterior siding. Unlike traditional power washing, soft washing uses low-pressure water combined with biodegradable cleaning solutions to safely and thoroughly clean vinyl, wood, stucco, brick, and painted surfaces.",
          "The cleaning solutions we use are specifically formulated to kill mold, mildew, algae, bacteria, and other biological growth at the source — not just spray it away. This means your home stays cleaner for longer compared to high-pressure methods alone.",
          "Long Island homeowners deal with unique environmental challenges — the coastal humidity, seasonal moisture, and abundant tree cover create ideal conditions for mold and algae growth on home exteriors. Without regular soft washing, this biological growth can stain and deteriorate your siding over time.",
          "Our soft house washing service is safe for all common siding types, your landscaping, windows, and surrounding surfaces. We take every precaution to protect your property while delivering a thorough, professional clean.",
        ]}
        benefits={[
          "Safe for all siding types — vinyl, wood, stucco, brick, Hardie board, and more",
          "Removes mold, mildew, and algae that can cause long-term siding damage",
          "Biodegradable solutions that are safe for your family, pets, and landscaping",
          "Results last longer than high-pressure washing alone",
          "Dramatically improves curb appeal and home appearance",
          "Protects your siding investment and extends its lifespan",
          "No risk of water intrusion from excessive pressure",
          "Kills biological growth at the root rather than just surface-level cleaning",
        ]}
        signsNeeded={[
          "Dark streaks, green patches, or black spots visible on your siding",
          "Your home looks dull, grey, or dingy instead of bright and fresh",
          "You notice a musty or mildew smell near your home's exterior",
          "Algae or moss is growing on your siding or trim",
          "Your neighbors' homes look noticeably cleaner than yours",
          "It has been more than a year since your home's exterior was cleaned",
          "You're preparing to sell your home or have guests visiting",
          "Your HOA has noted your home's exterior needs attention",
        ]}
        whyUs={[
          "Low-pressure technique that never risks damage to your siding",
          "Biodegradable, eco-friendly cleaning solutions",
          "Complete exterior coverage including trim, soffits, and gutters",
          "Safe for all common Long Island home siding types",
          "Fully insured with clear, upfront pricing",
          "Results that last — keeping your home looking clean for longer",
        ]}
        faqs={[
          {
            q: "What's the difference between soft washing and power washing?",
            a: "Power washing uses high-pressure water to clean hard surfaces like concrete. Soft washing uses low pressure combined with specialized cleaning solutions. Soft washing is the correct method for your home's siding because high pressure can force water behind panels, damage paint, or crack fragile materials.",
          },
          {
            q: "Is soft washing safe for all types of siding?",
            a: "Yes. Soft washing is safe for vinyl, wood, fiber cement (Hardie board), stucco, brick, and painted surfaces. The low-pressure approach ensures your siding is thoroughly cleaned without any risk of damage.",
          },
          {
            q: "Are the cleaning solutions safe for my family and plants?",
            a: "We use biodegradable, eco-friendly cleaning solutions. We take precautions to protect your landscaping and rinse surrounding plants before and after application. The products we use are safe once dry.",
          },
          {
            q: "How long will the results last?",
            a: "Soft washing results typically last 1–3 years depending on your home's environment and surroundings. Homes with heavy shade, coastal moisture, or nearby trees may need more frequent cleaning. Most Long Island homeowners schedule soft washing every 1–2 years.",
          },
          {
            q: "Do you clean the entire exterior or just the siding panels?",
            a: "We clean the full exterior of your home — siding, trim, soffits, fascia, and other visible surfaces. We want your entire home to look consistently clean.",
          },
          {
            q: "How much does soft house washing cost on Long Island?",
            a: "Cost depends on the size of your home and the scope of work. We provide free, detailed estimates so you know exactly what you'll pay before we begin. Contact us for your personalized quote.",
          },
        ]}
        icon={<Home className="w-7 h-7" />}
        relatedServices={["power-washing", "gutter-cleaning", "window-cleaning"]}
      />
    </>
  );
}
