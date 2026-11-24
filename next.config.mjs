/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Guarantees fast local loading and flawless Vercel static export/deployment
  },
};

export default nextConfig;

