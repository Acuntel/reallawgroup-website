import { Metadata } from 'next';
import BreadcrumbNav from '@/components/layout/BreadcrumbNav';
import ResourceCard from '@/components/cards/ResourceCard';
import CTABanner from '@/components/sections/CTABanner';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Resources & Guides',
  description: 'Legal resources and guides from REAL Law Group covering wire fraud prevention, quit claim deeds, data breach prevention, and title insurance.',
  openGraph: {
    title: 'Resources & Guides | REAL Law Group',
    description: 'Legal resources and guides covering wire fraud prevention, quit claim deeds, and more.',
    url: '/resources',
  },
};

const resources = [
  {
    title: 'Prevent Wire Fraud',
    excerpt: 'Learn how to protect yourself from wire fraud during real estate transactions with these essential tips.',
    href: '/resources/prevent-wire-fraud',
  },
  {
    title: 'Illinois Quit Claim Deeds',
    excerpt: 'Everything you need to know about quit claim deeds in Illinois, including when and how they are used.',
    href: '/resources/quit-claim-deeds-illinois',
  },
  {
    title: 'Data Breach Prevention',
    excerpt: 'Essential strategies to protect your personal and business data from increasingly sophisticated cyber threats.',
    href: '/resources/data-breach-prevention',
  },
  {
    title: 'Title Insurance FAQ',
    excerpt: 'Common questions about title insurance answered, including what it covers and why it matters.',
    href: '/resources/title-insurance-faq',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Resources' },
          ])),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Resources &amp; Guides</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Helpful information and guides from our legal team.
          </p>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <ResourceCard key={i} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
