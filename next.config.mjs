/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    outputFileTracingExcludes: {
      "*": ["./public/projects/**/*"],
    },
  },
};

export default nextConfig;
