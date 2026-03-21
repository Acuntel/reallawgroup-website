import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Real Estate Law',
  description: 'Expert real estate attorneys handling residential and commercial transactions, closings, contract negotiation, short sales, and more in Chicagoland.',
  openGraph: {
    title: 'Real Estate Law | REAL Law Group',
    description: 'Expert real estate attorneys handling residential and commercial transactions throughout Chicagoland.',
    url: '/practice-areas/real-estate',
  },
};

const residentialServices = [
  'Closings (Sales & Purchases)',
  'Quit Claim Deeds',
  'Certificate of Zoning',
  'Water Certification (Full Payment Certificate)',
  'Transfer Stamps',
  'Condominium Development & Conversion',
  'Formation & Operation of Condo/HOA',
  'Foreclosure & REO',
  'Short Sales',
  'Contract Negotiation & Review',
];

const commercialServices = [
  'Closings (Sales & Purchases)',
  'Building Registration',
  'Review & Negotiation of Financial & Loan Documents',
  'Transaction Negotiation',
  'Contract Drafting',
  'Leasing',
  'Tax Deferred Exchanges (1031 Exchanges)',
  'Joint Ventures',
];

export default function RealEstatePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Real Estate Law</h1>
        </div>
      </section>

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: 'Real Estate Law' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Residential */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">Residential Real Estate</h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              We serve the residential real estate needs of clients located in Northern Illinois. From contract through the closing, we protect our clients&apos; interests while helping them understand the business, tax, and legal implications pertaining to their real estate transaction. As creative thinkers and problem solvers, we seek to secure the prosperity of our client&apos;s real estate investment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {residentialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">Commercial Real Estate</h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              We provide counsel to established businesses and start-up ventures. Since we have finance and business backgrounds, we have the knowledge to analyze commercial real estate transactions for our clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commercialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need help with a real estate transaction?"
        text="Our team is ready to guide you from contract to closing."
        buttonText="Contact Us Today"
      />
    </>
  );
}
