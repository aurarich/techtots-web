/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // trailingSlash: true,
  // output: isProd ? 'export' : undefined,
  // distDir: isProd ? 'techtots.edu.gh' : '.next',
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
