"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionLightProps {
  items: FAQItem[];
}

export default function FAQAccordionLight({ items }: FAQAccordionLightProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={clsx(
            "border rounded-xl overflow-hidden transition-colors duration-200",
            openIndex === i
              ? "border-blue-400 bg-blue-50/50"
              : "border-gray-200 bg-white hover:border-gray-300"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
            aria-expanded={openIndex === i}
          >
            <span
              className={clsx(
                "font-medium text-sm sm:text-base transition-colors duration-200",
                openIndex === i ? "text-gray-900" : "text-gray-700"
              )}
            >
              {item.q}
            </span>
            <ChevronDown
              className={clsx(
                "w-5 h-5 flex-shrink-0 text-blue-800 transition-transform duration-200",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
