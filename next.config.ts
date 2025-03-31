import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    return config;
  },
  output: "export",
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
  trailingSlash: true,
};

export default nextConfig;
