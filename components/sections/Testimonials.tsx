import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reviews = [
  {
    name: "Michael R.",
    location: "Huntington, NY",
    rating: 5,
    text: "One Source Solutions did an incredible job on our driveway and home siding. The difference was night and day. Professional, on-time, and the results exceeded our expectations. Will absolutely use them again.",
  },
  {
    name: "Jennifer T.",
    location: "Babylon, NY",
    rating: 5,
    text: "I had them come out for gutter cleaning and soft washing. Brianna was incredibly responsive, the crew was polite and thorough, and they left the property looking amazing. Highly recommend to anyone on Long Island.",
  },
  {
    name: "Dave & Sarah K.",
    location: "Smithtown, NY",
    rating: 5,
    text: "Best exterior cleaning company we've found on Long Island. Fair pricing, no hidden fees, and the quality of work is top-notch. Our windows and siding look brand new. Don't hesitate — book them.",
  },
  {
    name: "Patricia L.",
    location: "Hempstead, NY",
    rating: 5,
    text: "Extremely professional from start to finish. They were careful around my garden beds and landscaping, which I really appreciated. My home hasn't looked this clean in years. 5 stars easily.",
  },
  {
    name: "Tony M.",
    location: "Islip, NY",
    rating: 5,
    text: "Had my deck, driveway, and front walkway power washed. The crew was fast, efficient, and the results were fantastic. I've used other companies before and none of them compare to One Source Solutions.",
  },
  {
    name: "Karen B.",
    location: "Oyster Bay, NY",
    rating: 5,
    text: "Quick to respond, on time, and did a flawless job on our windows and gutters. This is exactly what a local service business should look like. We've already scheduled our next appointment.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-navy-light section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What Customers Say"
          title="Trusted by Long Island Homeowners"
          subtitle="Don't take our word for it. Here's what our customers across Long Island have to say about working with One Source Solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-navy-card border border-navy-border rounded-2xl p-6 flex flex-col hover:border-electric/20 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-electric/30" />
              </div>
              <p className="text-silver text-sm leading-relaxed flex-1 mb-5">
                "{review.text}"
              </p>
              <div className="border-t border-navy-border pt-4">
                <div className="font-semibold text-white text-sm">{review.name}</div>
                <div className="text-silver text-xs mt-0.5">{review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
