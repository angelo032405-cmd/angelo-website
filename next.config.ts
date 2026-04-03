import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/projects", destination: "/#experience", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/entrepreneurship", destination: "/#entrepreneurship", permanent: true },
      { source: "/leadership", destination: "/#leadership", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/insights", destination: "/#insights", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
