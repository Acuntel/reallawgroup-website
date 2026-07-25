/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
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
