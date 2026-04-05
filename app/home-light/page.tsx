import type { Metadata } from "next";
import HeroLight from "@/components/sections/light/HeroLight";
import ServicesGridLight from "@/components/sections/light/ServicesGridLight";
import WhyChooseUsLight from "@/components/sections/light/WhyChooseUsLight";
import HowItWorksLight from "@/components/sections/light/HowItWorksLight";
import TestimonialsLight from "@/components/sections/light/TestimonialsLight";
import ServiceAreaPreviewLight from "@/components/sections/light/ServiceAreaPreviewLight";
import FAQPreviewLight from "@/components/sections/light/FAQPreviewLight";
import FinalCTALight from "@/components/sections/light/FinalCTALight";

export const metadata: Metadata = {
  title: "Home (Light Theme) | One Source Solutions",
  description:
    "One Source Solutions provides expert power washing, soft house washing, gutter cleaning, and window cleaning across Long Island, NY. Get your free estimate today.",
};

export default function HomeLightPage() {
  return (
    <div className="bg-white">
      <HeroLight />
      <ServicesGridLight />
      <WhyChooseUsLight />
      <HowItWorksLight />
      <TestimonialsLight />
      <ServiceAreaPreviewLight />
      <FAQPreviewLight />
      <FinalCTALight />
    </div>
  );
}
