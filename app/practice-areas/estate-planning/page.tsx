import { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import CTABanner from '@/components/sections/CTABanner';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

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

const faqs = [
  {
    question: 'What is the difference between a will and a living trust?',
    answer: 'A will takes effect after death and must go through probate — a court-supervised process that can take months and become public record. A living trust takes effect immediately, avoids probate entirely, and keeps your estate private. For many families, a trust offers faster distribution and lower costs for heirs.',
  },
  {
    question: 'Do I need an estate plan if I do not have significant assets?',
    answer: 'Yes. Estate planning is not just about distributing wealth. It includes designating who makes medical and financial decisions if you become incapacitated (via powers of attorney), naming guardians for minor children, and ensuring your wishes are carried out. Without a plan, Illinois law decides for you.',
  },
  {
    question: 'What is a power of attorney and why do I need one?',
    answer: 'A power of attorney is a legal document authorizing someone you trust to act on your behalf for financial or healthcare decisions if you cannot. Without one, your family may need a costly court process to gain authority to manage your affairs. Illinois recognizes both financial and healthcare powers of attorney.',
  },
  {
    question: 'How often should I update my estate plan?',
    answer: 'Review your estate plan every 3-5 years or after major life events: marriage, divorce, birth of a child, significant asset changes, or moving to a new state. Illinois law may also change in ways that affect your plan. Our team provides ongoing counsel to keep your plan current.',
  },
  {
    question: 'What is probate and how can I avoid it?',
    answer: 'Probate is the court process of validating a will, paying debts, and distributing assets. In Illinois it typically takes 6-12 months and involves court fees and attorney costs. You can avoid probate by using living trusts, joint tenancy, beneficiary designations, and transfer-on-death instruments. Our team structures plans to minimize or eliminate probate.',
  },
];

export default function EstatePlanningPage() {
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
            { name: 'Estate Planning' },
          ])),
        }}
      />

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
        heading="Ready to protect your family's future?"
        text="Let us help you create a comprehensive estate plan tailored to your needs."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
