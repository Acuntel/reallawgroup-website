/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    // 120/240/480 match the logo's exact render widths (footer 1x, header 1x/2x)
    // so those screens get a pixel-perfect rendition with no browser resampling.
    imageSizes: [16, 32, 48, 64, 96, 120, 128, 240, 256, 384, 480],
  },
  async redirects() {
    return [
      {
        source: "/review",
        destination: "https://g.page/reallawgroup/review",
        permanent: false,
      },
      { source: "/team", destination: "/our-team", permanent: true },
      { source: "/attorneys", destination: "/our-team", permanent: true },
      {
        source: "/resources/transfer-stamps",
        destination: "https://www.atgf.com/tax-ordinance/all",
        permanent: false,
      },
      // Business Law was retired in favor of Real Estate Investors (July 2026).
      {
        source: "/practice-areas/business-law",
        destination: "/real-estate-investors",
        permanent: true,
      },
      {
        source: "/es/practice-areas/business-law",
        destination: "/es/real-estate-investors",
        permanent: true,
      },
      {
        source: "/pl/practice-areas/business-law",
        destination: "/pl/real-estate-investors",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.google.com https://maps.google.com;",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
