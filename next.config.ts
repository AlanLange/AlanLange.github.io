import type { NextConfig } from "next";

// Sitio estático: GitHub Pages sirve el contenido de `out/`.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
