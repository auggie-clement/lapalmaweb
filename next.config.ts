import type { NextConfig } from "next";

// next.config.mjs (or .js)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep any other configurations you might have...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'good-nature-blog-uploads.s3.amazonaws.com',
        port: '', // Usually empty string for standard ports
        pathname: '/uploads/**', // Allows any image within the /uploads/ path. Adjust if needed.
      },
      // You can add more objects here for other domains if necessary
    ],
  },
  // Keep any other configurations you might have...
};

export default nextConfig; // Or module.exports = nextConfig; if using CommonJS (.js file)
