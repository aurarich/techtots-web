/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Disable Google Fonts optimization to prevent server build failures
  experimental: {
    optimizeFonts: false,
  },

  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "www.pexels.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
