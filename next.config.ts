import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "imgur.com" },
      { hostname: "i.imgur.com" },
      { hostname: "photos.marinetraffic.com" },
    ],
  },
};

module.exports = nextConfig;
