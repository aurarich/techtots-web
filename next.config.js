/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // distDir: 'techtots.edu.gh',
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com', 'www.pexels.com', 'images.pexels.com'],
  },
}

module.exports = nextConfig 