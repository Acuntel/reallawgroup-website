import { Metadata } from 'next';
import { Home, Building, FileText } from 'lucide-react';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import PracticeAreaCard from '@/components/cards/PracticeAreaCard';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'REAL Law Group provides expert legal services in real estate law, business law, and estate planning throughout Chicagoland.',
  openGraph: {
    title: 'Practice Areas | REAL Law Group',
    description: 'Expert legal services in real estate law, business law, and estate planning throughout Chicagoland.',
    url: '/practice-areas',
  },
};

const areas = [
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'We serve the residential and commercial real estate needs of clients located in Northern Illinois. From contract through the closing, we protect our clients\' interests while helping them understand the business, tax, and legal implications pertaining to their real estate transaction.',
    href: '/practice-areas/real-estate',
  },
  {
    icon: Building,
    title: 'Business Law',
    description: 'REAL Law Group advises small to medium-sized businesses operating in a variety of industries. Drawing on our financial and business backgrounds, we assist our clients with challenges faced by business owners and offer proactive solutions.',
    href: '/practice-areas/business-law',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'More than just structuring the transfer of assets, we create unique estate and business plans that preserve assets and minimize taxes during life and for many years beyond. We provide the counsel necessary to advise and plan for you and your family.',
    href: '/practice-areas/estate-planning',
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Practice Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group, P.C. is committed to providing the highest quality legal services.
          </p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Practice Areas' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <PracticeAreaCard key={i} {...area} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
