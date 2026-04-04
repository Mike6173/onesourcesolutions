import { BUSINESS } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}) {
  const url = `${BUSINESS.url}${path}`;
  return {
    title: `${title} | One Source Solutions`,
    description,
    metadataBase: new URL(BUSINESS.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | One Source Solutions`,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | One Source Solutions`,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Long Island",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.7891,
      longitude: -73.1350,
    },
    geoRadius: "50000",
  },
  serviceType: [
    "Power Washing",
    "Soft House Washing",
    "Gutter Cleaning",
    "Window Cleaning",
  ],
  priceRange: "$$",
};

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Long Island, New York",
    },
    url,
  };
}
