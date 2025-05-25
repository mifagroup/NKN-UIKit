import type { NextConfig } from "next";
import type { Redirect } from "next/dist/lib/load-custom-routes";

const redirects = async (): Promise<Redirect[]> => [
  {
    source: "/fa",
    destination: "/",
    permanent: true,
  },
  {
    source: "/fa/",
    destination: "/",
    permanent: true,
  },
  {
    source: "/en",
    destination: "/",
    permanent: true,
  },
  {
    source: "/en/",
    destination: "/",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.mifadev.ir",
        port: "",
      },
    ],
  },

  redirects,
};

export default nextConfig;