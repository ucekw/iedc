/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  basePath: 'iedc.uck.ac.in',
  assetPrefix: 'iedc.uck.ac.in',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
      },
    ],
    domains: ["localhost", "*.googleusercontent.com", "drive.google.com", "lh3.googleusercontent.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
