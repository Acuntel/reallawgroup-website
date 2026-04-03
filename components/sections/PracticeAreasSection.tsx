import { Car, Truck, Stethoscope } from "lucide-react";
import PracticeAreaCard from "../cards/PracticeAreaCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const areas = [
  {
    icon: Car,
    title: "Car Accidents",
    description:
      "Head-on collisions, rear-end impacts, hit-and-run, rideshare accidents, and more. We fight for full compensation.",
    href: "/practice-areas/car-accidents",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    description:
      "Commercial vehicle collisions involving rear-end, rollover, jackknife, and underride accidents. Multi-party liability expertise.",
    href: "/practice-areas/truck-accidents",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description:
      "Diagnostic errors, surgical complications, medication errors, and failure to obtain informed consent.",
    href: "/practice-areas/medical-malpractice",
  },
];

export default function PracticeAreasSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Practice Areas
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <PracticeAreaCard {...area} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            Injured and not sure where to start?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold"
          >
            Get a Free Case Review
          </a>
        </div>
      </div>
    </section>
  );
}
