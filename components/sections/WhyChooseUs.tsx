import {
  Shield,
  MapPin,
  Star,
  Clock,
  Users,
  ThumbsUp,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: <Shield className="w-6 h-6 text-electric" />,
    title: "Fully Insured",
    desc: "We carry full liability insurance on every job so you have complete peace of mind from start to finish.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-electric" />,
    title: "Locally Owned & Operated",
    desc: "We're Long Island locals. We know the neighborhoods, the homes, and what it takes to get results here.",
  },
  {
    icon: <Star className="w-6 h-6 text-electric" />,
    title: "Premium-Grade Equipment",
    desc: "Professional equipment and industry-leading techniques deliver cleaner results that last longer.",
  },
  {
    icon: <Clock className="w-6 h-6 text-electric" />,
    title: "Reliable & On-Time",
    desc: "We respect your time. We show up when we say we will and communicate clearly throughout every job.",
  },
  {
    icon: <Users className="w-6 h-6 text-electric" />,
    title: "Trained Professionals",
    desc: "Our team is trained, experienced, and treats your property with the same care we'd give our own.",
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-electric" />,
    title: "Satisfaction Guaranteed",
    desc: "We stand behind our work. If you're not satisfied, we'll make it right, no questions asked.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-navy-light section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why One Source Solutions"
          title="The Long Island Exterior Cleaning Team You Can Trust"
          subtitle="We combine professional-grade service with genuine local care. Here's why hundreds of Long Island homeowners choose One Source Solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-navy-card border border-navy-border rounded-2xl p-6 hover:border-electric/30 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/15 transition-colors duration-200">
                {reason.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
