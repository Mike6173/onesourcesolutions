import type { Metadata } from "next";
import LocationPageLayout from "@/components/sections/LocationPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning in Smithtown, NY | Long Island",
  description:
    "Expert exterior cleaning services in Smithtown, NY — including power washing, soft house washing, gutter cleaning, and window cleaning. One Source Solutions serves all of Smithtown township. Call (516) 508-8865.",
  path: "/locations/smithtown",
});

export default function SmithtownPage() {
  return (
    <LocationPageLayout
      name="Smithtown"
      slug="smithtown"
      county="Suffolk"
      intro="One Source Solutions proudly serves the Town of Smithtown with professional exterior cleaning services designed to protect and restore homes and commercial properties throughout this beautiful North Shore community. Whether your property sits along the Nissequogue River or in one of Smithtown's well-established residential subdivisions, our team delivers results you can see from the street."
      description={[
        "Smithtown is one of Suffolk County's most beloved communities, known for its strong sense of local pride, excellent schools, and a housing market that reflects the care residents put into their properties. Homes in Smithtown range from sprawling Colonials and Tudors on wooded lots to modern Colonials in newer developments throughout Kings Park and Nesconset. Regardless of style or age, every home benefits from regular professional exterior cleaning — and One Source Solutions is the local team Smithtown homeowners trust.",
        "Our power washing services restore outdoor surfaces that have been dulled by years of weathering. Concrete driveways develop tire tracks and organic staining over time, brick walkways accumulate moss and efflorescence, and wood decks gray and become slippery with algae. We use the appropriate equipment and technique for each surface, delivering a thorough clean that refreshes the look of your property while preserving the integrity of the material.",
        "Soft house washing is the safest and most effective way to clean the exterior siding of your Smithtown home. The tall oak and maple trees that make Smithtown streets so picturesque also deposit pollen, sap, and leaf debris onto every surface — and the resulting moisture retention creates ideal conditions for mold and algae to establish themselves. Our low-pressure soft washing process eliminates this growth completely and leaves your siding looking freshly painted without the cost.",
        "Gutter cleaning in Smithtown is particularly important given the town's extraordinary tree coverage. Heavy acorn and leaf fall in autumn can overwhelm gutters quickly, and spring maple seed production adds another round of debris. Our team cleans gutters and downspouts thoroughly every visit and alerts you to any hardware concerns before minor issues become expensive repairs. Add our window cleaning service to any appointment for a complete exterior refresh — call (516) 508-8865 to get started.",
      ]}
      localContext="Smithtown's North Shore location along the Nissequogue River corridor and Long Island Sound gives the area a lush, forested character unlike most of Long Island. While this natural environment is one of Smithtown's defining charms, it creates significant exterior cleaning challenges for property owners. Dense tree cover keeps siding and hardscapes shaded and damp for extended periods, accelerating the growth of green algae, black mold, and lichen on north and east-facing surfaces. Seasonal pollen from oaks, maples, and birches coats siding and window glass each spring, and acorn tannins can leave persistent staining on concrete and pavers. The area's clay-heavy soil also means runoff tends to splash dark staining onto foundation skirting and lower siding courses after heavy rains. Staying ahead of these issues with regular professional cleaning preserves both the beauty and the structural integrity of Smithtown-area homes."
      faqs={[
        {
          q: "What is the difference between power washing and soft washing, and which does my Smithtown home need?",
          a: "Power washing uses high-pressure water to blast dirt and debris off hard surfaces like driveways, sidewalks, and concrete patios. Soft washing uses low-pressure water combined with biodegradable cleaning solutions to safely clean softer or more delicate surfaces like siding, roofs, fences, and painted wood. For most Smithtown homes, the siding and roof areas require soft washing while the hardscapes benefit from power washing — and we often use both in a single visit.",
        },
        {
          q: "My deck has turned gray and has green patches on it. Can you restore it?",
          a: "Yes. Gray discoloration on wood decking is oxidation and UV damage, while green patches are typically algae or moss. Our deck cleaning process uses a wood-safe solution applied at low pressure to kill biological growth and lift staining. After cleaning, the natural wood grain is revealed again, and the surface becomes safe and non-slippery. We can also recommend whether sealing or staining would be appropriate following the clean.",
        },
        {
          q: "How do I prepare my home for a soft house wash appointment?",
          a: "Before our team arrives, we ask that you close all windows and doors, retract any awnings, and move potted plants or outdoor furniture away from the foundation. We'll take care of protecting any sensitive plantings and fixtures ourselves. The process typically takes a few hours, and you can return to your normal routine shortly after — no extended waiting or drying time required.",
        },
        {
          q: "Are your cleaning solutions safe for the landscaping around my Smithtown home?",
          a: "Yes — we use biodegradable, environmentally responsible cleaning solutions and take care to pre-wet and rinse all surrounding plant beds before and after application. Our products are formulated to break down quickly and are safe for grass, shrubs, and established garden beds when applied and rinsed according to our standard procedures.",
        },
      ]}
    />
  );
}
