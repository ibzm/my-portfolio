<<<<<<< Updated upstream:next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
=======
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
    basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio',

  
  images: { unoptimized: true },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
>>>>>>> Stashed changes:next.config.js
    return config;
  },
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
};

module.exports = nextConfig;
