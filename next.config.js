/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  distDir: "techtots.edu.gh",
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'www.pexels.com', 'images.pexels.com'],
  },
}

module.exports = nextConfig 