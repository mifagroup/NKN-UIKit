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
        protocol: "https",
        hostname: "api.nikan.hospital",
        pathname: "/**",
      },
    ],
  },

  redirects,
};

export default nextConfig;