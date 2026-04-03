import { Users, DollarSign, Scale, Clock } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    icon: DollarSign,
    title: "No Fee Unless We Win",
    description:
      "We work on a contingency fee basis. You pay nothing upfront — we only get paid when you get compensated. We advance all case costs.",
  },
  {
    icon: Scale,
    title: "$100M+ Recovered",
    description:
      "With over $100 million recovered across thousands of cases, our track record speaks for itself. We fight for maximum compensation.",
  },
  {
    icon: Users,
    title: "Experienced Trial Team",
    description:
      "Our attorneys have 20+ years of litigation experience, are admitted in 10+ state and federal courts, and have argued before the Illinois Appellate Court.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Accidents don't wait for business hours. Our team is available around the clock to take your call and start building your case immediately.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">Our Difference</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose The Kryder Law Group?
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="group card-hover-border text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-light-gold mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
