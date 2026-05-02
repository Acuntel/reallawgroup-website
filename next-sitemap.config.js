/** @type {import('next-sitemap').IConfig} */
const SITE = "https://reallawgroup.com";

function basePathOf(path) {
  if (path.startsWith("/pl/")) return path.slice(3);
  if (path === "/pl") return "/";
  if (path.startsWith("/es/")) return path.slice(3);
  if (path === "/es") return "/";
  return path;
}

function localePath(locale, base) {
  const clean = base === "/" ? "" : base;
  if (locale === "en") return clean || "/";
  return `/${locale}${clean}`;
}

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    const base = basePathOf(path);

    let priority = config.priority;
    if (path === "/") priority = 1.0;
    else if (path === "/contact") priority = 0.95;
    else if (path.startsWith("/practice-areas")) priority = 0.9;
    else if (path === "/about" || path === "/our-team") priority = 0.85;
    else if (path.startsWith("/resources")) priority = 0.75;
    else if (path === "/privacy-policy") priority = 0.3;
    else if (path.startsWith("/pl") || path.startsWith("/es")) priority = 0.7;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${SITE}${localePath("en", base)}`,
          hreflang: "en-US",
          hrefIsAbsolute: true,
        },
        {
          href: `${SITE}${localePath("pl", base)}`,
          hreflang: "pl-PL",
          hrefIsAbsolute: true,
        },
        {
          href: `${SITE}${localePath("es", base)}`,
          hreflang: "es-US",
          hrefIsAbsolute: true,
        },
        {
          href: `${SITE}${localePath("en", base)}`,
          hreflang: "x-default",
          hrefIsAbsolute: true,
        },
      ],
    };
  },
};
