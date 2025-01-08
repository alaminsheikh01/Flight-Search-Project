import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options */
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        permanent: true,
        destination: "https://flight-search-project-001.vercel.app/:path*",
      },
    ];
  },
};

export const metadata = {
  title: "Flight Search App",
  description: "Search and book your best escape with ease!",
};

export default nextConfig;
