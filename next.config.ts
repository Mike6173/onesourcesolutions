import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enforce trailing slash consistency
  trailingSlash: false,
};

export default nextConfig;
