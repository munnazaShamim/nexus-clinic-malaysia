import type { NextConfig } from "next";
import { redirectsList, blogStandaloneRedirects } from "./redirects";
const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
{
  key: "Content-Security-Policy",
  value: `
    default-src 'self';
    base-uri 'self';
    form-action 'self';

    script-src 'self' 'unsafe-inline' 'unsafe-eval'
      https://www.googletagmanager.com
      https://www.google-analytics.com
      https://analytics.google.com
      https://www.google.com
      https://www.googleapis.com
      https://www.gstatic.com
      https://googleads.g.doubleclick.net
      https://maps.googleapis.com
      https://static.cloudflareinsights.com
      https://www.googleadservices.com
      https://api.leadconnectorhq.com
      https://app.leadconnectorhq.com
      https://api.whatsapp.com
      https://wa.me;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' https: data: blob:;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self'
      https://blog.nexus-clinic.com
      https://api.leadconnectorhq.com
      https://maps.googleapis.com
      https://places.googleapis.com
      https://www.googleapis.com
      https://www.google.com
      https://analytics.google.com
      https://www.googleadservices.com
      https://www.googletagmanager.com
      https://www.google-analytics.com
      https://wa.me
      https://api.whatsapp.com;
    frame-src 'self'
      https://www.googletagmanager.com
      https://app.leadconnectorhq.com
      https://api.leadconnectorhq.com;
    upgrade-insecure-requests;
  `.replace(/\s+/g, ' ').trim(),
}
];


const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  trailingSlash: true,
  devIndicators: false,

  // NOTE: experimental.optimizeCss (critters) is intentionally disabled.
  // With Next 15.5 + a pure app-router project (no /pages dir), critters'
  // post-build step throws `ENOENT .next/server/pages-manifest.json` and
  // fails the build. Re-enable only after upgrading past the fix or moving
  // to Next's built-in `optimizeCss` successor.
  // experimental: {
  //   optimizeCss: true,
  // },

  experimental: {
    // Tree-shake framer-motion and lucide-react to only bundle used exports,
    // significantly reducing the JS sent to mobile clients.
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },

  images: {
    // Serve AVIF first (≈50% smaller than WebP), fall back to WebP.
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 1 year.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.nexus-clinic.com",
      },
    ],
  },

  // async headers() {
  //   return [
  //     { source: "/(.*)", headers: securityHeaders },
  //     {
  //       source: '/images/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ];
  // },
    async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          {
            key: "Cache-Control",
            value: "public, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      ...blogStandaloneRedirects.map(([src, dest]) => ({ source: src, destination: dest, permanent: true })),
      ...redirectsList.map(([src, dest]) => ({ source: src, destination: dest, permanent: true })),

      { source: '/sitemap.xml', destination: '/sitemap_index.xml', permanent: true },
      {  source: '/:path((?!sitemap_index\\.xml$).*\\.xml$)', destination: '/404', permanent: false },
    ];
  },
};
export default nextConfig;