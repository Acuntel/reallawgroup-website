import { Metadata } from "next";

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
  return {
    title,
    description,
    alternates: {
      canonical: url,
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
