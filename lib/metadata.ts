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
  const url = `https://kryderlaw.com${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${title} | The Kryder Law Group`,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/images/logo-banner.png",
          width: 1200,
          height: 630,
          alt: "The Kryder Law Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | The Kryder Law Group`,
      description,
      images: ["/images/logo-banner.png"],
    },
  };
}
