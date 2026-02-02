/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["via.placeholder.com", "wallpapers.com", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
