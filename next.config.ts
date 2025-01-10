import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  /* config options here */
};


const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.NODE_ENV === 'production',
});

export default bundleAnalyzer(nextConfig);

