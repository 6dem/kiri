import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@icons": path.resolve(__dirname, "apps/web/public/icons"),
      "@components": path.resolve(__dirname, "apps/web/app/(public)/components"),
      "@styles": path.resolve(__dirname, "apps/web/app/styles"),
      "@assets": path.resolve(__dirname, "apps/web/assets"),
      "@data": path.resolve(__dirname, "apps/web/app/data"),
    }

    return config
  },
}

export default nextConfig
