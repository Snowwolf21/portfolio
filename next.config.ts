import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // ADD THIS BLOCK TO BYPASS THE GOOGLE FONT DOWNLOAD HANGS
  images: {
    unoptimized: true
  },
  experimental: {
    // This tells Turbopack to stop compiling fonts locally
    optimizeCss: false, 
  }
};

export default nextConfig;
