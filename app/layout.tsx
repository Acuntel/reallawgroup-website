import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ChatWidget from '@/components/ui/ChatWidget';
import PageLoader from '@/components/ui/PageLoader';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { generateLocalBusinessSchema, generateAttorneySchema } from '@/lib/schema';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'REAL Law Group | Elmhurst Real Estate Attorney',
    template: '%s | REAL Law Group | Elmhurst Real Estate Attorney',
  },
  description: 'Chicago real estate attorneys providing personalized legal guidance for real estate transactions, business law, and estate planning. Serving Chicagoland since 2016.',
  metadataBase: new URL('https://reallawgroup.com'),
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'REAL Law Group',
    images: [{ url: '/images/logo-banner.png', width: 1200, height: 630, alt: 'REAL Law Group' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAttorneySchema()) }}
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        <PageLoader />
        <GrainOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <ChatWidget />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
      </body>
    </html>
  );
}
