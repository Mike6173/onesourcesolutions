import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "One Source Solutions | Expert Exterior Cleaning Long Island, NY",
    template: "%s | One Source Solutions",
  },
  description:
    "One Source Solutions is Long Island's trusted exterior cleaning company. Expert power washing, soft house washing, gutter cleaning, and window cleaning for Nassau & Suffolk County homes.",
  keywords: [
    "exterior cleaning Long Island",
    "power washing Long Island",
    "soft house washing Long Island",
    "gutter cleaning Long Island",
    "window cleaning Long Island",
    "pressure washing Long Island NY",
  ],
  openGraph: {
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body className="bg-white text-gray-600 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-electric focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
