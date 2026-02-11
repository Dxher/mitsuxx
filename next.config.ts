
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mitsuxx",
  assetPrefix: "/mitsuxx/",
  images: { unoptimized: true },
};

module.exports = nextConfig;


export default nextConfig;
