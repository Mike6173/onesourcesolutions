import type { Metadata } from "next";
import LocationPageLayout from "@/components/sections/LocationPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning in Islip, NY | Long Island",
  description:
    "One Source Solutions offers expert power washing, soft house washing, gutter cleaning, and window cleaning throughout the Town of Islip, NY. Serving all of central Suffolk County — call (516) 508-8865.",
  path: "/locations/islip",
});

export default function IslipPage() {
  return (
    <LocationPageLayout
      name="Islip"
      slug="islip"
      county="Suffolk"
      intro="One Source Solutions is the trusted exterior cleaning partner for homeowners and property managers throughout the Town of Islip — one of Long Island's most densely populated and diverse townships. From the bay communities of East Islip and Bay Shore to the wooded neighborhoods of Brentwood and Central Islip, we bring reliable, high-quality service to every corner of this expansive township."
      description={[
        "The Town of Islip encompasses nearly 110 square miles of Long Island real estate and is home to hundreds of thousands of residents spread across communities with very different environmental exposures. Coastal areas near the Great South Bay deal with salt air and marine humidity, while inland neighborhoods contend with shade-driven mold, heavy pollen seasons, and debris from a dense urban tree canopy. One Source Solutions has experience cleaning properties in all of these conditions and adjusts our methods to match.",
        "Power washing is one of our most-requested services in Islip township, particularly for driveways, pool decks, concrete walkways, and rear patios that collect algae and organic stains over the warmer months. We use commercial-grade equipment and the appropriate PSI for each surface type — higher pressure for stamped concrete and pavers, controlled lower pressure for wood decking and composite surfaces — so every surface is cleaned effectively and safely.",
        "Our soft house washing service has transformed the appearance of hundreds of Islip-area homes by eliminating the green and black streaking that builds up on vinyl, aluminum, and stucco siding. Unlike pressure washing, which can damage siding seams and paint, soft washing uses detergent-based solutions applied at low pressure to kill biological growth at its source. The results last longer, and your siding stays cleaner between treatments.",
        "Gutter cleaning and window cleaning are the finishing touches that complete a full exterior refresh. Clear gutters protect your roof, foundation, and landscaping from water damage, while clean windows dramatically improve the appearance and brightness of any home. One Source Solutions offers all four services individually or as part of a comprehensive exterior cleaning package. Call (516) 508-8865 to get a free estimate for your Islip-area property.",
      ]}
      localContext="The Town of Islip sits squarely in the center of Long Island's South Shore, with its southern edge touching the Great South Bay and Fire Island Inlet. This geography creates a humid, marine-influenced climate that's ideal for mold and algae growth on virtually any exterior surface that doesn't receive direct sunlight throughout the day. The Long Island MacArthur Airport corridor and nearby commercial areas also contribute to particulate accumulation on rooftops and siding in communities like Ronkonkoma and Bohemia. Older housing stock in areas like Bay Shore and Central Islip often features painted wood siding and masonry that requires gentle but thorough cleaning methods to maintain without causing damage. Staying on top of exterior maintenance in Islip is key to preventing costly repairs and maintaining strong property values in a competitive housing market."
      faqs={[
        {
          q: "Do you service all of the communities within the Town of Islip?",
          a: "Yes — we serve the entire Town of Islip, including Bay Shore, East Islip, West Islip, Islip Terrace, Central Islip, Brentwood, Ronkonkoma, Bohemia, Holbrook, Oakdale, and surrounding hamlets. If you're unsure whether we cover your specific area, just give us a call at (516) 508-8865 and we'll confirm.",
        },
        {
          q: "My stucco exterior has black streaks near the roofline. What causes that and can you remove it?",
          a: "Those dark streaks are almost always caused by Gloeocapsa magma, a type of algae that feeds on the limestone in roofing materials and travels down exterior walls with rainwater. It's very common on Islip-area homes. Our soft washing process is the correct treatment — we apply an algae-killing solution to the stucco at low pressure, allow it to dwell, and then rinse thoroughly, removing the streaks without damaging the stucco texture.",
        },
        {
          q: "How long does a full exterior house wash take for a typical Islip home?",
          a: "Most single-family homes in the Islip area take between two and four hours for a complete soft house wash, depending on the size of the home, the number of stories, and the degree of buildup. We'll give you a specific time estimate when we assess your property, and we always work efficiently to minimize disruption to your day.",
        },
        {
          q: "Can gutter cleaning prevent water from getting into my basement?",
          a: "It's one of the most important steps you can take. When gutters overflow due to clogs, water saturates the soil directly against your foundation — and over time, that hydrostatic pressure can cause cracks and water intrusion. Keeping your gutters clean and your downspouts directed away from the foundation significantly reduces this risk. We recommend at least two gutter cleanings per year for homes in Islip township.",
        },
      ]}
    />
  );
}
