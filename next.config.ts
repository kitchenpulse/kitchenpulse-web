import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/MainSection",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
