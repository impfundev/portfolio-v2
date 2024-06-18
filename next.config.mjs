/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    deviceSizes: [320, 720],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dlf8ittab/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
