import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repositoryName = "protfolio_v2";

const nextConfig: NextConfig = {

  output: "export",

  images: {
    unoptimized: true,
  },

};

export default nextConfig;