import { Home, Building, FileText } from 'lucide-react';
import PracticeAreaCard from '../cards/PracticeAreaCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const areas = [
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Residential and commercial transactions, closings, contract negotiation, short sales, and more.',
    href: '/practice-areas/real-estate',
  },
  {
    icon: Building,
    title: 'Business Law',
    description: 'Entity formation, operating agreements, corporate governance, succession planning, and business transactions.',
    href: '/practice-areas/business-law',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'Wills, trusts, powers of attorney, probate administration, and asset protection plans.',
    href: '/practice-areas/estate-planning',
  },
];

export default function PracticeAreasSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Practice Areas</h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <PracticeAreaCard {...area} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
