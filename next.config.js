const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  // basePath: '/my-portfolio',
  // assetPrefix: '/my-portfolio',
  images: { unoptimized: true },
  
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), 
    };
    return config;
  },
};

module.exports = nextConfig;
