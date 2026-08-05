import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repositoryName = "protfolio_v2";

const nextConfig: NextConfig = {
  ...(isProd
    ? {
        output: "export",
        images: {
          unoptimized: true,
        },
        basePath: `/${repositoryName}`,
        trailingSlash: false,
      }
    : {}),
};

export default nextConfig;
