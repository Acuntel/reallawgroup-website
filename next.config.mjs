/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    // Next's defaults plus 144/192/288: the logo's exact CSS render widths
    // (header 144@1x / 288@2x, footer 96@1x / 192@2x). Matching them exactly
    // means the browser never resamples the logo, which is what made it blurry.
    imageSizes: [16, 32, 48, 64, 96, 128, 144, 192, 256, 288, 384],
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
      // Transfer stamps are handed off to ATG's tax-ordinance lookup rather
      // than duplicated on this site. The Spanish and Polish resource indexes
      // link locale-prefixed versions of this path, so those need the same
      // redirect or they 404: only the English source existed before.
      {
        source: "/resources/transfer-stamps",
        destination: "https://www.atgf.com/tax-ordinance/all",
        permanent: false,
      },
      {
        source: "/es/resources/transfer-stamps",
        destination: "https://www.atgf.com/tax-ordinance/all",
        permanent: false,
      },
      {
        source: "/pl/resources/transfer-stamps",
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
