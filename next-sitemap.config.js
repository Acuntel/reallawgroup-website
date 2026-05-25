/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://reallawgroup.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://reallawgroup.com/sitemap.xml"],
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
  transform: async (config, path) => {
    // Set higher priority for key pages
    let priority = config.priority;
    if (path === "/") priority = 1.0;
    else if (path === "/contact") priority = 0.9;
    else if (path.startsWith("/practice-areas")) priority = 0.8;
    else if (path === "/about") priority = 0.8;
    else if (path === "/privacy-policy") priority = 0.3;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
