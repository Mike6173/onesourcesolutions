import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreaPreview from "@/components/sections/ServiceAreaPreview";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Expert Exterior Cleaning Long Island, NY",
  description:
    "One Source Solutions provides expert power washing, soft house washing, gutter cleaning, and window cleaning across Long Island, NY. Get your free estimate today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <ServiceAreaPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
