import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Motorcycle Accident Lawyer — Ride Protected",
  description:
    "Injured in a motorcycle crash in Illinois? The Kryder Law Group fights for riders' rights and maximum compensation. Call (312) 223-1700 for a free consultation.",
  path: "/practice-areas/motorcycle-accidents",
});

const services = [
  "Lane-change and left-turn motorcycle collisions",
  "Dooring accidents in urban areas",
  "Road hazard and defective road design claims",
  "Motorcycle defect and product liability cases",
  "Uninsured/underinsured motorist motorcycle claims",
  "Wrongful death from fatal motorcycle crashes",
];

const faqs = [
  {
    question: "Does Illinois require motorcycle riders to wear helmets?",
    answer:
      "Illinois is one of the few states with no universal helmet law for adults. Riders 18 and older are not required to wear a helmet, though eye protection is mandatory. Importantly, not wearing a helmet cannot be used against you to reduce your compensation in a personal injury claim under Illinois law.",
  },
  {
    question: "What are the most common causes of motorcycle accidents?",
    answer:
      "The most common causes include drivers failing to see motorcyclists, left-turn collisions where a vehicle turns in front of a rider, unsafe lane changes, rear-end collisions at stop lights, distracted driving, and road hazards like potholes or debris that are more dangerous to motorcycles than cars.",
  },
  {
    question: "Can I still recover damages if I was lane splitting?",
    answer:
      "Lane splitting is not explicitly legal in Illinois. However, even if you were lane splitting, you may still be able to recover damages under Illinois comparative negligence rules. Your compensation would be reduced by your percentage of fault, and you can recover as long as you are less than 50% responsible for the accident.",
  },
];

export default function MotorcycleAccidentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Motorcycle Accidents" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Chicago Motorcycle Accident Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Motorcyclists face unique dangers on the road. When a negligent
            driver causes a crash, we fight to protect your rights and secure
            maximum compensation.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Motorcycle Accidents" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Motorcycle accidents often result in severe injuries because riders
            lack the protection of an enclosed vehicle. Road rash, broken bones,
            traumatic brain injuries, and spinal cord damage are all too common.
            Insurance companies frequently try to blame the rider, but The
            Kryder Law Group knows how to counter these tactics and build strong
            cases that hold negligent drivers accountable.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Motorcycle Accident Claims We Handle
            </h2>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <span className="text-secondary mt-1">&#9656;</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
