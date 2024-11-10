/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "book.getfoundry.sh",
      },
    ],
  },
};

export default nextConfig;
