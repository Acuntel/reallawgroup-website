import { Metadata } from "next";

const SITE_URL = "https://reallawgroup.com";
const DEFAULT_OG = "/images/logo-banner.png";

type Locale = "en" | "pl" | "es";

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
}

function detectLocale(path: string): Locale {
  if (path.startsWith("/pl")) return "pl";
  if (path.startsWith("/es")) return "es";
  return "en";
}

function stripLocale(path: string): string {
  if (path.startsWith("/pl/")) return path.slice(3);
  if (path === "/pl") return "/";
  if (path.startsWith("/es/")) return path.slice(3);
  if (path === "/es") return "/";
  return path;
}

function localePath(locale: Locale, basePath: string): string {
  const clean = basePath === "/" ? "" : basePath;
  if (locale === "en") return clean || "/";
  return `/${locale}${clean}`;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noindex,
  ogImage,
}: PageMetadataParams): Metadata {
  const locale = detectLocale(path);
  const base = stripLocale(path);
  const url = `${SITE_URL}${path}`;

  const ogLocale =
    locale === "pl" ? "pl_PL" : locale === "es" ? "es_US" : "en_US";

  const languages: Record<string, string> = {
    "en-US": `${SITE_URL}${localePath("en", base)}`,
    "pl-PL": `${SITE_URL}${localePath("pl", base)}`,
    "es-US": `${SITE_URL}${localePath("es", base)}`,
    "x-default": `${SITE_URL}${localePath("en", base)}`,
  };

  const image = ogImage || DEFAULT_OG;
  const fullTitle = title.includes("REAL Law Group")
    ? title
    : `${title} | REAL Law Group`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      locale: ogLocale,
      siteName: "REAL Law Group",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export const SEO_SITE_URL = SITE_URL;
export { detectLocale, stripLocale, localePath };
