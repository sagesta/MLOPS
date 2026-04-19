import type { NextConfig } from "next";

// Local dev: proxy /api to Uvicorn (`npm run dev:api`). On Vercel, unset rewrite so `api/index.py` handles /api.
const nextConfig: NextConfig = {
  async rewrites() {
    if (process.env.VERCEL) {
      return [];
    }
    const apiOrigin = process.env.API_ORIGIN ?? "http://127.0.0.1:8000";
    return [{ source: "/api", destination: `${apiOrigin}/api` }];
  },
};

export default nextConfig;
