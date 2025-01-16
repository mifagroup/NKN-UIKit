import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.mifadev.ir",
        port: "",
      },
    ],
  },
};

export default nextConfig;
