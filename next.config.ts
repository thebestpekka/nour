import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // if you use images from next/image:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;