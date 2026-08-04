import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ...(process.env.NODE_ENV == "production" ? {
    output: 'export',
    basePath: '/portfolio',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  } : {})
};

export default nextConfig;
