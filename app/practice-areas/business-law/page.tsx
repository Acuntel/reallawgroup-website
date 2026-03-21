import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import CTABanner from '@/components/sections/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Business Law',
  description: 'Business law services including entity formation, operating agreements, corporate governance, and succession planning for Chicagoland businesses.',
  openGraph: {
    title: 'Business Law | REAL Law Group',
    description: 'Business law services including entity formation, operating agreements, and corporate governance.',
    url: '/practice-areas/business-law',
  },
};

const services = [
  'Choice & Formation of Legal Entities',
  'Operating Agreements',
  'Bylaws',
  'Employee Identification Number (EIN)',
  'Corporate Governance',
  'Purchase/Sale/Leasing/Licensing Transactions',
  'Ownership & Management',
  'Succession Planning',
  'Shareholder Agreements',
  'Employer Agreements',
  'Consulting Agreements',
  'Non-Compete Agreements',
  'Non-Disclosure Agreements',
];

const faqs = [
  {
    question: 'Should I form an LLC or a corporation for my business?',
    answer: 'It depends on your goals. An LLC offers flexible management and pass-through taxation, making it popular for small businesses. A corporation may be better if you plan to seek outside investors or go public. Our team analyzes your specific situation — business type, number of owners, tax implications — and recommends the best structure.',
  },
  {
    question: 'How long does it take to form a business entity in Illinois?',
    answer: 'Filing with the Illinois Secretary of State typically takes 5-10 business days for standard processing. Expedited options are available for an additional fee. REAL Law Group handles the full process including articles of organization, EIN applications, and operating agreements.',
  },
  {
    question: 'Do I need an operating agreement for my LLC?',
    answer: 'While Illinois does not legally require an operating agreement, operating without one is risky. An operating agreement defines ownership percentages, management structure, profit distribution, and what happens if a member leaves. Without one, Illinois default rules apply — which may not align with your intentions.',
  },
  {
    question: 'What is a non-compete agreement and are they enforceable in Illinois?',
    answer: 'A non-compete restricts an employee from working for competitors or starting a competing business for a set period after leaving. Illinois enforces reasonable non-competes — they must be limited in time, geography, and scope, and the employee must receive adequate consideration. Our team drafts agreements that protect your business while remaining enforceable.',
  },
];

export default function BusinessLawPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Practice Areas', url: '/practice-areas' },
            { name: 'Business Law' },
          ])),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Business Law</h1>
        </div>
      </section>

      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: 'Business Law' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            REAL Law Group advises small to medium-sized businesses operating in a variety of industries. Drawing on our financial and business backgrounds, we assist our clients with challenges faced by business owners. We offer proactive solutions to business and legal issues that arise. We assist our clients in the process of selecting and organizing new business entities. We prepare and file the appropriate organizational documents to create Corporations and limited liability companies (LLC&apos;s). We work with the State of Illinois to get our clients licensed.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">Our Business Law Services</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Need help with your business?"
        text="From formation to governance, our team provides practical, cost-effective business law solutions."
        buttonText="Get Started"
      />
    </>
  );
}
