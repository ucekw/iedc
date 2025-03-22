import type { NextConfig } from "next";
const nextConfig:NextConfig = {
};

module.exports = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
      },
    ],
    domains: ["localhost", "*.googleusercontent.com", "drive.google.com", "lh3.googleusercontent.com"],
};


export default nextConfig;
