import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/projects", destination: "/experience", permanent: true }];
  },
};

export default nextConfig;
