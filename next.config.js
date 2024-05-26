/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
