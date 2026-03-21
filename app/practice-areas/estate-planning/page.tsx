import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Estate Planning',
  description: 'Estate planning services including wills, trusts, powers of attorney, probate administration, and asset protection in Chicagoland.',
  openGraph: {
    title: 'Estate Planning | REAL Law Group',
    description: 'Wills, trusts, powers of attorney, probate administration, and asset protection plans.',
    url: '/practice-areas/estate-planning',
  },
};

const services = [
  'Wills',
  'Living Wills',
  'Living Trusts',
  'Powers of Attorney',
  'Land Trusts',
  'Trust Administration',
  'Probate Administration',
  'Asset Protection Plans',
];

export default function EstatePlanningPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Estate Planning</h1>
        </div>
      </section>

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: 'Estate Planning' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            More than just structuring the transfer of assets, we create unique estate and business plans that preserve assets and minimize taxes during life and for many years beyond. We are extremely familiar with the process of probate and provide the counsel necessary to advise and plan for you and your family.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">Our Estate Planning Services</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to protect your family's future?"
        text="Let us help you create a comprehensive estate plan tailored to your needs."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
