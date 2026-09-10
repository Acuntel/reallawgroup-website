import { Metadata } from "next";

const SITE = "https://reallawgroup.com";

/**
 * Routes that exist in English, Spanish, and Polish under the same slug.
 * Membership drives the hreflang block, so a page only claims translations
 * that actually exist. Add a path here when its /es and /pl mirrors ship,
 * and never before: hreflang pointing at a missing translation is worse
 * than no hreflang at all.
 */
const TRILINGUAL_PATHS = new Set([
  "/",
  "/about",
  "/contact",
  "/emd",
  "/locations",
  "/our-team",
  "/practice-areas",
  "/practice-areas/building-violations",
  "/practice-areas/data-breach",
  "/practice-areas/e-bike-accidents",
  "/practice-areas/estate-planning",
  "/practice-areas/hud-closings",
  "/practice-areas/land-trusts",
  "/practice-areas/personal-injury",
  "/practice-areas/real-estate",
  "/privacy-policy",
  "/real-estate-investors",
  "/resources",
  "/resources/closing-cost-calculator",
  "/resources/data-breach-notification-letter",
  "/resources/data-breach-prevention",
  "/resources/for-sale-by-owner",
  "/resources/illinois-e-bike-law",
  "/resources/inherited-property",
  "/resources/prevent-wire-fraud",
  "/resources/quit-claim-deeds-illinois",
  "/resources/real-estate-contract",
  "/resources/title-insurance-faq",
  "/sendemd",
]);

/** Strips a locale prefix so /es/about and /about resolve to the same key. */
export function toBasePath(path: string): string {
  const stripped = path.replace(/^\/(es|pl)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/**
 * hreflang for a path, or undefined when the page has no translations.
 * Every language version points at the same full set, which is what lets
 * Google consolidate their signals instead of reading them as duplicates.
 */
export function buildLanguageAlternates(
  path: string,
): Record<string, string> | undefined {
  const base = toBasePath(path);
  if (!TRILINGUAL_PATHS.has(base)) return undefined;
  const suffix = base === "/" ? "" : base;
  return {
    "en-US": `${SITE}${suffix || "/"}`,
    "es-US": `${SITE}/es${suffix}`,
    "pl-PL": `${SITE}/pl${suffix}`,
    "x-default": `${SITE}${suffix || "/"}`,
  };
}

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noindex,
}: PageMetadataParams): Metadata {
  const url = `https://reallawgroup.com${path}`;
  const languages = buildLanguageAlternates(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(languages && { languages }),
    },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${title} | REAL Law Group`,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: "REAL Law Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | REAL Law Group`,
      description,
      images: ["/images/og-default.png"],
    },
  };
}
