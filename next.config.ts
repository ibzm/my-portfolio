import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    return config;
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
