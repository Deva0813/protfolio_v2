import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repositoryName = "portfolio_v2";

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

// serve - mkdir serve_root , cp -r out serve_root/portfolio_v2, npx serve serve_root -l 3000 

export default nextConfig;
