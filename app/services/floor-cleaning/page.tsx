import type { Metadata } from "next";
import { Layers } from "lucide-react";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Floor Cleaning Services Long Island, NY",
  description:
    "Professional floor care on Long Island: strip and refinish, tile and grout, carpet maintenance, and routine programs for commercial and residential clients. Free estimates.",
  path: "/services/floor-cleaning",
});

const schema = buildServiceSchema({
  name: "Floor Cleaning Services",
  description:
    "Expert floor cleaning and maintenance including VCT, tile and grout, and carpet care for Long Island, NY properties.",
  url: `${BUSINESS.url}/services/floor-cleaning`,
});

export default function FloorCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageLayout
        name="Floor Cleaning Services"
        slug="floor-cleaning"
        headline="Professional Floor Cleaning on Long Island"
        intro="Protect your investment underfoot with floor care that matches your surface type and traffic level. From strip-and-refinish for VCT to grout restoration and carpet maintenance, we deliver durable, professional results."
        description={[
          "Different floors need different methods. We assess vinyl composite tile, ceramic and porcelain tile, natural stone where applicable, and carpeted areas to choose the right products and equipment, avoiding one-size-fits-all approaches that can damage finishes.",
          "Strip-and-wax or scrub-and-recoat programs restore shine and protect VCT in offices and commercial corridors. For tile, deep cleaning and grout care improve appearance and hygiene in restrooms, entries, and kitchens.",
          "Carpeted spaces benefit from scheduled extraction and spot treatment to extend fiber life and maintain a fresh environment. We can combine floor work with your broader janitorial program or provide project-based deep cleaning when you need it.",
        ]}
        benefits={[
          "Safer, more attractive walking surfaces",
          "Extended life of finishes and flooring materials",
          "Tile and grout that look cleaner and more uniform",
          "Carpet programs tailored to traffic and use",
          "Project or recurring maintenance options",
          "Commercial-grade equipment and chemistry",
          "Clear scope and upfront estimates",
          "Locally based team serving Nassau and Suffolk",
        ]}
        signsNeeded={[
          "VCT looks dull, scuffed, or yellowed despite regular mopping",
          "Grout lines are dark or stained compared to tile",
          "Carpet shows persistent traffic lanes or odors",
          "You are preparing for inspection, sale, or a tenant move-in",
          "High-traffic entries no longer respond to in-house cleaning",
        ]}
        whyUs={[
          "Surface-appropriate methods and products",
          "Experienced crews for commercial and residential jobs",
          "Transparent pricing and free estimates",
          "Can coordinate with janitorial or standalone projects",
          "Fully insured",
          "Satisfaction guaranteed",
        ]}
        faqs={[
          {
            q: "Do you strip and wax VCT?",
            a: "Yes. We can perform full strip-and-finish cycles or scrub-and-recoat maintenance depending on the condition of your floors and your schedule.",
          },
          {
            q: "Can you clean tile and grout in restrooms?",
            a: "Yes. We deep clean tile and treat grout lines to improve appearance and sanitation. Scope varies by size and soil level, which we review during your estimate.",
          },
          {
            q: "How often should commercial floors be maintained?",
            a: "It depends on traffic and finish type. Many VCT floors benefit from periodic burnishing or recoat cycles in addition to daily care. We recommend a plan after we see your space.",
          },
          {
            q: "Do you work in homes as well as businesses?",
            a: "Yes. Contact us with your floor type and goals, whether for a residence or a commercial property, and we will propose the right service.",
          },
        ]}
        icon={<Layers className="w-7 h-7" />}
        relatedServices={["janitorial-services", "window-cleaning", "power-washing"]}
      />
    </>
  );
}
