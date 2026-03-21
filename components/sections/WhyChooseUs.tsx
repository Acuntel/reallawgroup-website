import { Users, Phone, Monitor, TrendingUp } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const reasons = [
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'We prioritize strong, lasting relationships with every client. As proud Chicago natives, we understand the unique needs of Chicagoland residents.',
  },
  {
    icon: Phone,
    title: 'Direct Attorney Access',
    description: 'Direct access to managing partner Vincent Incopero and his dedicated legal team. No runaround, no gatekeepers.',
  },
  {
    icon: Monitor,
    title: 'Cutting-Edge Technology',
    description: 'Legal technology that simplifies and streamlines your real estate transaction, from contract to closing.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Efficient, results-driven workflows designed to resolve legal issues quickly and effectively.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose REAL Law Group?
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:border-secondary/30 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{reason.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
