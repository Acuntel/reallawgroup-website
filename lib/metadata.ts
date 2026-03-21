import { Metadata } from 'next';

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
}

export function generatePageMetadata({ title, description, path }: PageMetadataParams): Metadata {
  const url = `https://reallawgroup.com${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | REAL Law Group`,
      description,
      url,
      type: 'website',
      images: [
        {
          url: '/images/logo-banner.png',
          width: 1200,
          height: 630,
          alt: 'REAL Law Group',
        },
      ],
    },
  };
}
