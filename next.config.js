/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: { unoptimized: true },
  assetPrefix: isProd ? "/website/" : "",
  images: {
    loader: "imgix",
    path: isProd ? "https://github.com/Legacy-IEDC/website" : "",
  },
};


module.exports = nextConfig;
