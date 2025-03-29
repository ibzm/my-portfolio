/** @type {import('next').NextConfig} */
import { NextConfig } from 'next';

const config: NextConfig = {
  webpack: (config, { isServer }) => {

    return config;
  },
  output: 'export', 
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
};

export default config;
