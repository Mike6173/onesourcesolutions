import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Window Cleaning Long Island, NY",
  description:
    "Professional window cleaning services on Long Island, NY. Crystal-clear results inside and out for homes and businesses. Serving Nassau & Suffolk County. Free estimates.",
  path: "/services/window-cleaning",
});

const schema = buildServiceSchema({
  name: "Window Cleaning",
  description: "Professional interior and exterior window cleaning for residential homes on Long Island, NY, delivering streak-free, crystal-clear results.",
  url: `${BUSINESS.url}/services/window-cleaning`,
});

export default function WindowCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageLayout
        name="Window Cleaning"
        slug="window-cleaning"
        headline="Professional Window Cleaning on Long Island, NY"
        intro="Let the light back in. Our professional window cleaning service removes dirt, water spots, and grime to deliver crystal-clear, streak-free results, making your home look polished, bright, and beautifully maintained."
        description={[
          "Clean windows do more than improve your view, they transform the way your entire home looks and feels. Professional window cleaning removes the layers of pollen, road dust, water mineral deposits, and environmental grime that ordinary cleaning tools simply can't address.",
          "At One Source Solutions, we use professional-grade squeegees, pure water systems, and streak-free cleaning solutions to deliver results that are noticeably cleaner and longer-lasting than DIY methods. We clean every pane, frame, sill, and screen for a truly complete result.",
          "Long Island's unique environment, coastal salt air, pollen, humidity, and seasonal dust, creates stubborn window buildup that dulls your home's appearance over time. Regular professional window cleaning not only keeps your home looking sharp but also protects your glass from mineral buildup and long-term etching.",
          "We service both interior and exterior windows for residential homes across Long Island. Our team works carefully and thoroughly, using tools and techniques that are safe for your glass, frames, and surrounding surfaces.",
        ]}
        benefits={[
          "Crystal-clear, streak-free results that professional-grade tools deliver",
          "Improved natural light inside your home, brighter, more inviting spaces",
          "Protects glass from long-term mineral etching and hard water damage",
          "Enhances curb appeal and overall property appearance",
          "Extends the life of window seals and frames by removing corrosive buildup",
          "Safe and efficient access to hard-to-reach upper-story windows",
          "Screens cleaned and inspected as part of the service",
          "Makes a great first impression for guests, buyers, or real estate photos",
        ]}
        signsNeeded={[
          "Windows look cloudy, hazy, or have visible water spots or mineral deposits",
          "You notice streaks, smears, or a film that won't come off with regular cleaning",
          "There's visible pollen, dust, or grime buildup on the frames and sills",
          "You're preparing to sell your home and want to maximize appeal",
          "Spring cleaning season has arrived and windows are looking dull",
          "Your screens have visible dirt, holes, or debris buildup",
          "It's been 6+ months since your windows were professionally cleaned",
          "You've had construction or landscaping work done near your home",
        ]}
        whyUs={[
          "Professional-grade pure water and squeegee techniques for streak-free results",
          "Interior and exterior window cleaning available",
          "Careful, respectful service, we protect your interior and landscaping",
          "Screen cleaning and inspection included",
          "Safe access to second-story and elevated windows",
          "Fully insured with transparent pricing and guaranteed results",
        ]}
        faqs={[
          {
            q: "Do you clean both interior and exterior windows?",
            a: "Yes. We offer both exterior-only and full interior/exterior window cleaning packages. During your estimate, we'll discuss your needs and provide the option that works best for you.",
          },
          {
            q: "How often should I have my windows professionally cleaned?",
            a: "We recommend professional window cleaning at least twice a year, typically in spring and fall. Homes near the coast, heavily wooded areas, or busy roads may benefit from more frequent cleaning due to salt air, pollen, and dust exposure.",
          },
          {
            q: "Will you clean my window screens too?",
            a: "Yes, screen cleaning is included as part of our window cleaning service. We remove, clean, and reinstall screens carefully, and we'll note any damage we find.",
          },
          {
            q: "What do you use to clean windows, is it safe for my home?",
            a: "We use professional-grade window cleaning solutions and pure water systems that are safe for glass, frames, and sills. We take precautions to protect interior surfaces, carpets, and furnishings when cleaning inside.",
          },
          {
            q: "Can you clean windows on a two-story home?",
            a: "Absolutely. We have the proper ladders and equipment to safely and thoroughly clean windows on two-story homes. Safety is always our top priority when working at height.",
          },
          {
            q: "What if it rains right after my windows are cleaned?",
            a: "Rain water itself is relatively pure and typically won't leave spots on freshly cleaned windows. It's the dirt and minerals in the environment that cause buildup, a light rain after cleaning won't undo our work.",
          },
        ]}
        icon={<Sparkles className="w-7 h-7" />}
        relatedServices={["soft-house-washing", "power-washing", "gutter-cleaning"]}
      />
    </>
  );
}
