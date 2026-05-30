/** @type {import('next').NextConfig} */

// Static export for GitHub Pages (no Node server). The CI workflow injects
// NEXT_PUBLIC_BASE_PATH ("" for a user site, "/<repo>" for a project site).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  // Pages serves /path/ as /path/index.html — trailing slashes keep links resolving.
  trailingSlash: true,
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
