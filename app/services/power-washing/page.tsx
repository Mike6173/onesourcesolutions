import type { Metadata } from "next";
import { Zap } from "lucide-react";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Power Washing Long Island, NY",
  description:
    "Professional power washing services across Long Island, NY. Expert pressure washing for driveways, patios, decks, sidewalks, and more. Get your free estimate today.",
  path: "/services/power-washing",
});

const schema = buildServiceSchema({
  name: "Power Washing",
  description: "Professional power washing and pressure washing services for driveways, patios, decks, and exterior surfaces on Long Island, NY.",
  url: `${BUSINESS.url}/services/power-washing`,
});

export default function PowerWashingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageLayout
        name="Power Washing"
        slug="power-washing"
        headline="Professional Power Washing on Long Island, NY"
        intro="Restore the beauty of your home's exterior surfaces with precision power washing from One Source Solutions. We remove years of dirt, grime, algae, and stains, leaving your property looking clean, fresh, and renewed."
        description={[
          "Power washing, also known as pressure washing, uses high-pressure water to blast away built-up dirt, mold, mildew, algae, oil stains, and debris from hard surfaces. It's one of the most effective ways to restore the appearance of your home's exterior.",
          "At One Source Solutions, our power washing service covers everything from concrete driveways and asphalt to wooden decks, brick patios, stone walkways, and more. We use professional-grade equipment and calibrate the pressure to suit each specific surface, ensuring a thorough clean without causing damage.",
          "Long Island's climate means homes are constantly exposed to moisture, humidity, and seasonal debris that accumulate over time. Regular power washing doesn't just improve curb appeal, it also protects your surfaces from the premature wear that comes with neglecting built-up grime.",
          "Whether you're preparing your home for sale, hosting an event, or simply maintaining your property's value, our power washing service delivers results you can see immediately.",
        ]}
        benefits={[
          "Dramatically improves your home's curb appeal and first impressions",
          "Removes harmful mold, mildew, and algae that can degrade surfaces over time",
          "Protects your property investment by extending the life of surfaces",
          "Prepares surfaces properly for staining, sealing, or painting projects",
          "Eliminates oil, grease, and rust stains from driveways and garage floors",
          "Safe for the environment, no harsh chemicals required for most surfaces",
          "Fast results, most jobs are completed in a matter of hours",
          "Increases property value and makes a great impression on neighbors and visitors",
        ]}
        signsNeeded={[
          "Your driveway or walkway has visible dirt, oil stains, or discoloration",
          "Green or black algae growth is visible on concrete or stone surfaces",
          "Your deck or patio looks grey and weathered instead of clean and bright",
          "You're planning to stain, seal, or paint a surface and need proper preparation",
          "Your fencing has visible dirt, mildew, or discoloration",
          "Your property just looks dull and dirty, not as sharp as the neighbors",
          "You're getting ready to list your home for sale",
          "It's been more than a year since any exterior surface was cleaned",
        ]}
        whyUs={[
          "Properly calibrated pressure settings for each surface type",
          "Professional-grade equipment for superior, lasting results",
          "Experienced crew that protects surrounding landscaping and property",
          "Serving all of Long Island, Nassau and Suffolk County",
          "Fully insured with transparent, upfront pricing",
          "Satisfaction guaranteed on every job",
        ]}
        faqs={[
          {
            q: "What surfaces can you power wash?",
            a: "We power wash driveways, patios, decks, walkways, fencing, retaining walls, garage floors, pool surrounds, and more. We'll assess the surface and use the appropriate pressure settings to achieve the best results safely.",
          },
          {
            q: "How often should I have my driveway power washed?",
            a: "We recommend power washing your driveway and exterior surfaces at least once per year, ideally in spring or early summer. High-traffic areas or homes surrounded by trees may benefit from more frequent cleaning.",
          },
          {
            q: "Will power washing damage my surfaces?",
            a: "When done correctly by a professional, power washing will not damage your surfaces. We carefully adjust pressure settings based on the material being cleaned. Softer surfaces like wood are treated with reduced pressure to prevent any damage.",
          },
          {
            q: "Do I need to be home for the power washing service?",
            a: "You don't need to be present as long as we have access to the areas being cleaned and a water source. We'll communicate with you before and after the service to ensure everything goes smoothly.",
          },
          {
            q: "How long does a power washing job take?",
            a: "A typical driveway or patio takes 1–2 hours. Larger projects covering multiple surfaces may take a full day. We'll give you a clear time estimate during your free consultation.",
          },
          {
            q: "How much does power washing cost on Long Island?",
            a: "Pricing depends on the size and scope of the job. We provide free, transparent estimates so you know exactly what to expect before we start. Contact us for your personalized quote.",
          },
        ]}
        icon={<Zap className="w-7 h-7" />}
        relatedServices={["soft-house-washing", "gutter-cleaning", "window-cleaning"]}
      />
    </>
  );
}
