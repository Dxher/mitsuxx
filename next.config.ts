import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mitsuxx",
  assetPrefix: "/mitsuxx/",
  images: { unoptimized: true },
};

export default nextConfig;
