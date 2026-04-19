import { Phone, FileSearch, Shield } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Free Consultation',
    description: 'Call us or fill out our contact form. We listen to your situation, answer your questions, and outline how we can help — no obligation, no pressure.',
  },
  {
    num: '02',
    icon: FileSearch,
    title: 'Strategy & Review',
    description: 'We analyze your contracts, documents, and legal position. You get a clear plan with transparent pricing before we move forward.',
  },
  {
    num: '03',
    icon: Shield,
    title: 'We Handle Everything',
    description: 'From negotiation through closing or resolution, our team manages every detail. You stay informed at every step with direct attorney access.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Working With Us Is Simple
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            We make the legal process straightforward so you can focus on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center px-6 py-8 md:py-0">
                {/* Connecting line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-border z-0" />
                )}

                {/* Number + icon */}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
