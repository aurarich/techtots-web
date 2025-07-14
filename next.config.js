/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // new URL("https://images.unsplash.com"),
      // new URL("https://plus.unsplash.com"),
      // new URL("https://www.pexels.com"),
      // new URL("https://images.pexels.com"),
      {
        hostname: "images.pexels.com"
      },
      {
        hostname: "www.pexels.com"
      },
      {
        hostname: "plus.unsplash.com"
      },
      {
        hostname: "images.unsplash.com"
      },
    ],
  },
};

module.exports = nextConfig;
