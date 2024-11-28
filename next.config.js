/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: 'iedc.uck.ac.in',
  assetPrefix: 'iedc.uck.ac.in',
  images: {
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
