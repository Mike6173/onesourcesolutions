import type { Metadata } from "next";
import LocationPageLayout from "@/components/sections/LocationPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning in Babylon, NY | Long Island",
  description:
    "Professional power washing, soft house washing, gutter cleaning, and window cleaning in Babylon, NY. One Source Solutions serves all of the Babylon township, call (516) 508-8865.",
  path: "/locations/babylon",
});

export default function BabylonPage() {
  return (
    <LocationPageLayout
      name="Babylon"
      slug="babylon"
      county="Suffolk"
      intro="One Source Solutions delivers top-tier exterior cleaning services throughout the Town of Babylon, helping homeowners and business owners maintain clean, healthy, and well-preserved properties along Long Island's South Shore. From Amityville to Lindenhurst and the barrier island communities of Babylon Village, we have the tools and local knowledge to handle every job."
      description={[
        "The Town of Babylon stretches from the Great South Bay to the heart of southwestern Suffolk County, encompassing diverse neighborhoods with an equally diverse range of housing stock. Ranch homes, split-levels, colonials, and waterfront cottages all share one thing in common: they're exposed to a demanding coastal climate that promotes algae, mildew, and salt deposit buildup on virtually every exterior surface. One Source Solutions understands these conditions and tailors every cleaning approach accordingly.",
        "Our pressure washing services tackle the toughest buildup on concrete driveways, brick patios, pool decks, and vinyl fencing. We use professional-grade hot and cold water equipment calibrated to the surface type, ensuring an effective clean without causing pitting, erosion, or surface damage. For siding, stucco, and rooflines, our soft washing method applies low-pressure cleaning solutions that neutralize biological growth and rinse clean without blasting away protective coatings.",
        "Gutters along the South Shore fill quickly thanks to bay breezes that carry debris, plus the area's significant tree cover in older neighborhoods. A clogged gutter system directs water toward your foundation, fascia boards, and soffits, all of which are costly to repair. Our gutter cleaning service clears every inch of debris, flushes downspouts, and gives you a complete assessment of your drainage system's condition before we leave.",
        "For window cleaning, we use purified water-fed pole systems and traditional hand detailing to leave every pane streak-free and clear. Salt air residue and hard water staining from sprinkler systems are among the most common issues we address for Babylon homeowners. Contact One Source Solutions at (516) 508-8865 to schedule service throughout the Town of Babylon.",
      ]}
      localContext="Babylon's position along the Great South Bay means properties constantly deal with airborne salt and moisture carried inland by prevailing southerly winds. This salt film coats siding, windows, and metal fixtures, creating a sticky surface that traps additional dirt and accelerates oxidation and corrosion. The town's many waterfront and near-water communities, including West Islip, Bay Shore, and Copiague, see the highest rates of exterior discoloration. Inland neighborhoods aren't immune either; heavy summer humidity and shaded lots create ideal conditions for green and black algae growth on north-facing siding and concrete surfaces. Routine exterior cleaning is essential for Babylon homeowners who want to protect their property values in one of Long Island's most active real estate markets."
      faqs={[
        {
          q: "Can you clean vinyl siding on my ranch home in Babylon without damaging it?",
          a: "Yes, vinyl siding is one of the surfaces we clean most frequently on Long Island. We use our soft washing process, which applies cleaning solutions at low pressure to break down and rinse away algae, mildew, and dirt without warping, cracking, or forcing water behind the panels. It's safe, effective, and leaves your siding looking like new.",
        },
        {
          q: "My driveway has green algae stains near the curb, can power washing fix that?",
          a: "Absolutely. Green algae typically grows in areas that stay damp, near the curb, under tree shade, or along the edges of walkways. Our power washing service uses appropriate pressure and a pre-treatment solution to kill the algae and lift the staining from concrete, asphalt, or paver surfaces. We also apply a post-treatment rinse to help slow regrowth.",
        },
        {
          q: "How do I know if my gutters are clogged if I can't see inside them?",
          a: "A few telltale signs include water overflowing over the front lip of the gutter during rain, water staining or streaks on your fascia boards, sagging gutter sections, and plants or moss growing out of the trough. If you notice any of these, it's time for a cleaning. We recommend scheduling service every fall and spring in the Babylon area.",
        },
        {
          q: "Do you offer exterior cleaning packages that bundle multiple services?",
          a: "Yes, many of our Babylon customers choose to combine house washing, gutter cleaning, and window cleaning in a single visit, which saves time and often qualifies for a bundled discount. Call us at (516) 508-8865 to discuss what combination of services best fits your property's needs and your schedule.",
        },
      ]}
    />
  );
}
