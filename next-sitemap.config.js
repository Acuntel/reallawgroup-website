/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://reallawgroup.com",
  generateRobotsTxt: true,
  autoLastmod: false,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI / answer-engine crawlers so REAL Law Group
      // can be cited in Claude, ChatGPT, Perplexity, and Google AI Overviews.
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
  },
  // Google ignores changefreq and priority, and an inaccurate build-time
  // lastmod gets lastmod discarded domain-wide — so emit bare URLs only.
  transform: async (config, path) => ({ loc: path }),
};
