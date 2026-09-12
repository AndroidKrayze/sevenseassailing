import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  basePath: githubPages ? "/sevenseassailing" : undefined,
  assetPrefix: githubPages ? "/sevenseassailing" : undefined,
  images: githubPages
    ? {
        loader: "custom",
        loaderFile: "./image-loader.ts",
      }
    : {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [70, 75, 85],
      },
};

export default nextConfig;
