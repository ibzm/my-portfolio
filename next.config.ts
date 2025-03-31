import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    return config;
  },
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '', 
};

export default nextConfig;
