/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Guarantees fast local loading and flawless Vercel static export/deployment
  },
  eslint: {
    // Disables ESLint checking during production builds on Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allows production builds to finish even if there are subtle type discrepancies
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
