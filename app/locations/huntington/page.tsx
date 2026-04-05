import type { Metadata } from "next";
import LocationPageLayout from "@/components/sections/LocationPageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Exterior Cleaning in Huntington, NY | Long Island",
  description:
    "One Source Solutions provides professional power washing, soft house washing, gutter cleaning, and window cleaning in Huntington, NY. Trusted by Suffolk County homeowners, call (516) 508-8865.",
  path: "/locations/huntington",
});

export default function HuntingtonPage() {
  return (
    <LocationPageLayout
      name="Huntington"
      slug="huntington"
      county="Suffolk"
      intro="One Source Solutions is proud to serve homeowners and businesses throughout Huntington, NY with professional exterior cleaning services built for Long Island's demanding coastal environment. From historic Main Street to the waterfront neighborhoods along Huntington Harbor, we keep properties looking their best year-round."
      description={[
        "Huntington is one of Suffolk County's most sought-after communities, known for its vibrant village center, tree-lined residential streets, and stunning harbor views. Properties here reflect a wide range of architectural styles, from Colonial and Victorian homes to modern waterfront residences, and each one benefits from routine exterior maintenance. One Source Solutions brings the expertise and equipment needed to safely clean any surface, from weathered wood siding to painted stucco and vinyl.",
        "Our power washing services restore driveways, patios, walkways, and fencing that have accumulated seasons of algae, mold, and ground-in dirt. For more delicate surfaces like cedar shake, soffit panels, and painted trim, our soft washing process delivers a deep clean using low-pressure water and biodegradable detergents that won't strip paint or damage wood grain. The result is a thorough clean that protects your investment rather than eroding it.",
        "Gutter cleaning is one of the most overlooked, and most important, maintenance tasks for Huntington homeowners. With mature oak and maple trees lining many streets throughout the township, gutters fill with leaves and debris every fall and spring. Our team clears downspouts and troughs completely, checks for sagging or improper pitch, and leaves your drainage system ready for whatever the season brings.",
        "Window cleaning rounds out our full suite of services, removing salt film, hard water deposits, and general grime that accumulates on both interior-facing and exterior glass. Whether you have standard double-hung windows, large picture windows overlooking the harbor, or skylights that are difficult to reach safely, One Source Solutions has the tools and training to leave every pane spotless. Call us at (516) 508-8865 to schedule service in Huntington today.",
      ]}
      localContext="Huntington sits along the North Shore of Long Island, exposing properties to salt air blowing in from Huntington Bay and Long Island Sound. This maritime environment accelerates the growth of green algae and black mold on siding, roof edges, and hardscapes, particularly on north-facing and shaded surfaces. The township's abundant tree canopy, while beautiful, means gutters fill rapidly in autumn and pollen coats every exterior surface each spring. Regular exterior cleaning isn't just about curb appeal in Huntington; it's a practical measure to prevent premature deterioration of siding, masonry, and roofing materials that are constantly exposed to moisture, salt, and organic debris."
      faqs={[
        {
          q: "How often should I have my house washed in Huntington?",
          a: "Most Huntington homes benefit from a professional soft house wash once a year, typically in late spring after pollen season or in early fall before winter sets in. Homes closer to the harbor or under heavy tree cover may need cleaning twice a year due to increased salt exposure and organic buildup.",
        },
        {
          q: "Is soft washing safe for the cedar shake siding common in Huntington?",
          a: "Yes, soft washing is actually the recommended method for cedar shake and any natural wood siding. We use low-pressure application with specially formulated, biodegradable cleaning solutions that kill mold and algae at the root without splitting the wood or forcing water behind the shingles the way high-pressure washing can.",
        },
        {
          q: "When is the best time to schedule gutter cleaning in Huntington?",
          a: "We recommend scheduling gutter cleaning in late November after the bulk of the leaves have fallen, and again in early spring to clear out any debris that accumulated over winter. If you have oak trees on your property, a mid-summer cleaning can also help since oaks drop catkins and small debris throughout the growing season.",
        },
        {
          q: "Do you serve commercial properties in Huntington Village?",
          a: "Absolutely. We service storefronts, restaurants, office buildings, and mixed-use properties throughout Huntington Village and the broader township. Commercial power washing and window cleaning can be scheduled during early morning hours to minimize disruption to your business and foot traffic.",
        },
      ]}
    />
  );
}
