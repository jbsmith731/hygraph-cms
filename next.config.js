const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  swcMinify: true,
  images: {
    loader: 'default',
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
