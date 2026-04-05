import type { Metadata } from "next";
import LocationPageLayout from "@/components/sections/LocationPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning in Brookhaven, NY | Long Island",
  description:
    "One Source Solutions offers professional power washing, soft house washing, gutter cleaning, and window cleaning throughout the Town of Brookhaven, NY. Suffolk County's largest town, call (516) 508-8865.",
  path: "/locations/brookhaven",
});

export default function BrookhavenPage() {
  return (
    <LocationPageLayout
      name="Brookhaven"
      slug="brookhaven"
      county="Suffolk"
      intro="One Source Solutions serves the Town of Brookhaven, the largest town by area in New York State, with comprehensive exterior cleaning services for homeowners and businesses across this expansive stretch of central Suffolk County. From the North Shore beaches of Port Jefferson and Mount Sinai to the South Shore bays of Patchogue and Bellport, our team covers the full breadth of Brookhaven with expertise and professionalism."
      description={[
        "The Town of Brookhaven is extraordinarily diverse in both geography and community character. It encompasses dense suburban neighborhoods in areas like Coram, Medford, and Middle Island; upscale waterfront communities in Port Jefferson, Setauket, and Bellport; and rural residential pockets in Ridge and Manorville. This diversity means One Source Solutions encounters a wide variety of exterior surfaces, environmental conditions, and property types on a daily basis, and we've built our processes to deliver excellent results in all of them.",
        "Power washing is one of the most in-demand services across Brookhaven's residential communities. Miles of concrete driveways and walkways throughout the township's newer subdivisions stain quickly from vehicle traffic, organic growth, and seasonal runoff. Older neighborhoods in Patchogue, Port Jefferson Station, and Mastic have an aging housing stock where outdoor surfaces are long overdue for professional cleaning. We bring commercial-grade pressure washing equipment to every job and match the pressure and technique to the surface at hand.",
        "Soft house washing has become increasingly popular among Brookhaven homeowners who have seen green algae and black streaks slowly overtake their siding. Many homes in the central Brookhaven area were built in the 1970s through 1990s and have original vinyl or aluminum siding that has never been professionally cleaned. A single soft house wash can dramatically transform the appearance of these homes, removing decades of oxidation, mold growth, and environmental staining in a matter of hours, safely and without high pressure.",
        "Gutter cleaning is essential in Brookhaven given the town's enormous tree canopy, which spans everything from suburban street trees to dense pine barrens in the township's eastern reaches. Pine needles are particularly problematic for gutters, they pack tightly and resist water flow in a way that oak leaves do not. Our team is experienced with pine needle removal and ensures your downspouts are completely clear after every service. Window cleaning completes the package, and we serve all of Brookhaven from a single call, (516) 508-8865.",
      ]}
      localContext="Brookhaven is unique on Long Island because it spans both the North and South Shores, giving it exposure to environmental conditions from Long Island Sound, the Atlantic Ocean, and the Great South Bay simultaneously. This means properties in different parts of the township face different cleaning challenges: North Shore communities like Port Jefferson and Stony Brook deal with salt air from the Sound and dense woodland debris from surrounding parks and preserves, while South Shore communities in Mastic Beach and Shirley face ocean-driven humidity, storm surge residue, and sand-driven abrasion on exterior surfaces. The Pine Barrens region in eastern Brookhaven adds another layer of challenge, pine sap and needle debris are sticky and highly acidic, accelerating staining on driveways, decks, and siding. One Source Solutions understands Brookhaven's geographic complexity and brings location-specific knowledge to every exterior cleaning job in the town."
      faqs={[
        {
          q: "I live in a Pine Barrens area of Brookhaven, is pine sap on my siding and deck something you can remove?",
          a: "Yes, pine sap is one of the more stubborn exterior stains we encounter in eastern Brookhaven. We use specific solvent-compatible cleaning solutions that break down the sap's resinous compounds before low-pressure rinsing. On decking, we take care to use wood-safe products that won't raise the grain or strip protective finishes. It typically takes one thorough treatment to remove heavy sap staining.",
        },
        {
          q: "Can you clean the vinyl siding on my home in Coram or Medford?",
          a: "Absolutely, vinyl siding homes in the central Brookhaven communities are some of our most frequent service calls. The combination of moderate tree shade and Long Island's humid summers creates ideal mold and algae growing conditions on siding in these areas. Our soft washing process removes all biological growth and restores the original color of the vinyl safely, without voiding any manufacturer warranties or causing surface damage.",
        },
        {
          q: "My Patchogue home is near the water and the windows are always hazy. What causes that?",
          a: "Hazy or cloudy windows near water are almost always caused by a combination of salt film and hard water deposits from irrigation systems or rain. Salt from the bay and ocean air creates a thin, sticky coating that attracts additional airborne particles, and when water dries on the glass, it leaves behind mineral deposits that build up over time. Our window cleaning service removes both types of residue completely, using purified water for a spot-free finish.",
        },
        {
          q: "Do you offer one-time cleanings or do I need to sign up for a recurring service plan?",
          a: "We offer both. Many Brookhaven customers choose one-time cleanings for a specific need, getting a home ready for sale, cleaning up after storm damage, or just refreshing a property that hasn't been cleaned in years. Others prefer to set up recurring seasonal visits to keep their property consistently well-maintained. There's no obligation either way, call us at (516) 508-8865 and we'll recommend the right service frequency for your specific property and situation.",
        },
      ]}
    />
  );
}
