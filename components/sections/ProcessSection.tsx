import { Phone, FileSearch, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Free Case Review",
    description:
      "Call us 24/7 or fill out our contact form. We listen to what happened, answer your questions, and explain your legal options — no obligation, no cost.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Investigation & Strategy",
    description:
      "We gather evidence, review medical records, consult experts, and build a strong case. You focus on healing while we handle the legal work.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Maximum Compensation",
    description:
      "We negotiate aggressively with insurance companies and are fully prepared to go to trial if needed. You don't pay unless we win.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Getting Started Is Simple
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            We handle the legal burden so you can focus on your recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center px-6 py-8 md:py-0">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-border z-0" />
                )}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
