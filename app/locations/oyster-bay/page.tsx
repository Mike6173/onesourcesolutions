import type { Metadata } from "next";
import LocationPageLayout from "@/components/sections/LocationPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning in Oyster Bay, NY | Long Island",
  description:
    "Professional exterior cleaning in Oyster Bay, NY, power washing, soft house washing, gutter cleaning, and window cleaning for Nassau County's North Shore. One Source Solutions, call (516) 508-8865.",
  path: "/locations/oyster-bay",
});

export default function OysterBayPage() {
  return (
    <LocationPageLayout
      name="Oyster Bay"
      slug="oyster-bay"
      county="Nassau"
      intro="One Source Solutions is the premier exterior cleaning company serving the Town of Oyster Bay, Nassau County's North Shore gem known for its historic estates, upscale neighborhoods, and stunning waterfront properties. From Cold Spring Harbor to Massapequa and everywhere in between, we deliver meticulous, detail-oriented cleaning services that match the high standards Oyster Bay residents expect."
      description={[
        "The Town of Oyster Bay spans Nassau County's entire width from Long Island Sound in the north to South Oyster Bay in the south, creating an unusually diverse range of microclimates and property types. North Shore communities like Oyster Bay Hamlet, Cold Spring Harbor, and Syosset feature large-lot properties with mature landscaping and premium architectural finishes. South Shore areas including Massapequa and Seaford offer dense residential neighborhoods with active, high-turnover real estate markets. One Source Solutions serves both ends of the township with equally high-quality results.",
        "Power washing in the Oyster Bay area addresses everything from bluestone and natural stone patios on estate properties to standard concrete driveways in suburban neighborhoods. Our team is particularly experienced working on premium hardscape materials, travertine, granite cobble, pavers, and brick, where the wrong technique or pressure setting can cause irreversible damage. We always start with a thorough assessment of the surface material before selecting our equipment and approach.",
        "Soft house washing is in high demand among Oyster Bay's North Shore homeowners, where homes with intricate architectural details, custom paint colors, and natural wood elements require a gentler touch. Our low-pressure soft washing system safely removes mold, algae, pollen, and environmental grime from all siding types without risk to trim details, shutters, painted wood, or delicate masonry finishes. The results are dramatic, often making a home look as though it has received a fresh coat of paint.",
        "Our gutter cleaning and window cleaning services are the ideal complement to a full exterior wash. Clean gutters protect the ornate landscaping and finished basements that are common in Oyster Bay's higher-end properties, while spotless windows showcase the water views and well-appointed interiors that define life on Nassau County's North Shore. Call One Source Solutions at (516) 508-8865 to schedule your Oyster Bay exterior cleaning appointment.",
      ]}
      localContext="Oyster Bay's position on Nassau County's North Shore means properties contend with salt air from Long Island Sound, particularly in harborside communities like Centre Island, Bayville, and Oyster Bay Hamlet itself. These waterfront and near-water homes see heavy salt film accumulation on siding, windows, and railings, and the rich moisture environment promotes rapid mold and algae growth during the warmer months. The township's exceptional tree coverage, including many historic specimen trees on large-lot properties, means gutters fill heavily in fall and pollen blankets every exterior surface in spring. The prevalence of high-value homes with premium finishes, natural stone features, and sophisticated landscaping also means exterior cleaning requires a higher degree of care and product selection than a standard residential environment. One Source Solutions brings that level of precision to every job in Oyster Bay."
      faqs={[
        {
          q: "Can you clean natural stone surfaces like bluestone or travertine around my Oyster Bay pool?",
          a: "Yes, natural stone is one of our specialties. Bluestone and travertine are porous materials that require careful pressure calibration and pH-appropriate cleaning solutions to avoid etching or discoloration. We use cold or warm water at controlled low-to-medium pressure along with stone-safe cleaning agents to remove algae, calcium deposits, and organic staining while preserving the stone's natural finish and texture.",
        },
        {
          q: "I have a large historic home in Oyster Bay Hamlet with wood shingle siding. Can you soft wash it safely?",
          a: "Absolutely, wood shingle siding is one of the surfaces soft washing was specifically designed to protect. We apply our biodegradable cleaning solution at very low pressure, allow it sufficient dwell time to break down biological growth, and rinse gently. The result is a thorough clean that doesn't split or lift the shingles, doesn't force water behind the siding, and leaves the wood looking healthy and restored rather than blasted.",
        },
        {
          q: "How do you handle window cleaning on a large Oyster Bay estate with multiple stories and many windows?",
          a: "For multi-story properties, we use a combination of water-fed pole systems with purified water and traditional hand-cleaning techniques depending on the window type, height, and accessibility. Purified water systems leave no mineral deposits or residue as they dry, which is ideal for large-format windows and skylights. We assess every property individually and bring the right tools to ensure every window is cleaned thoroughly and safely.",
        },
        {
          q: "Do you service condominium and HOA communities in areas like Massapequa?",
          a: "Yes, we work with HOA boards, property management companies, and condominium associations throughout the Town of Oyster Bay, including Massapequa, Plainview, and Hicksville. We can develop recurring maintenance schedules for common areas, building exteriors, and amenity spaces, and we provide documentation of completed work for HOA records. Reach out at (516) 508-8865 to discuss a maintenance program for your community.",
        },
      ]}
    />
  );
}
