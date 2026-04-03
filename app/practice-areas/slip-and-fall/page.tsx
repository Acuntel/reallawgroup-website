import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Slip and Fall Lawyers — Chicago Premises Liability Attorneys",
  description:
    "Injured in a slip and fall accident? The Kryder Law Group handles premises liability cases across Illinois. $1.4M slip and fall recovery. Call (312) 223-1700.",
  path: "/practice-areas/slip-and-fall",
});

const services = [
  "Wet or slippery floors in stores and restaurants",
  "Icy or snowy walkways and parking lots",
  "Uneven or broken sidewalks and stairs",
  "Poor lighting in hallways and stairwells",
  "Loose carpeting, torn mats, or cluttered aisles",
  "Missing or defective handrails",
];

const faqs = [
  {
    question: "How do I prove a slip and fall case?",
    answer:
      "To win a premises liability case in Illinois, you must show that the property owner knew or should have known about the dangerous condition, failed to fix it or warn you, and that the condition caused your injury. Evidence like surveillance footage, incident reports, witness statements, and photos of the hazard are critical. We investigate thoroughly to build the strongest case possible.",
  },
  {
    question: "What if I was partially at fault for my fall?",
    answer:
      "Illinois follows a modified comparative negligence rule. You can still recover compensation as long as you are not more than 50% at fault. Your compensation will be reduced by your percentage of fault. For example, if you're found 20% at fault and your damages are $100,000, you would receive $80,000. Insurance companies often try to exaggerate your fault — we fight back.",
  },
  {
    question: "How long do I have to file a slip and fall claim in Illinois?",
    answer:
      "The statute of limitations for slip and fall cases in Illinois is generally 2 years from the date of injury. However, if the property is owned by a government entity (like a city sidewalk), you may need to file notice within as little as 1 year. Contact us as soon as possible to protect your rights.",
  },
  {
    question: "What compensation can I receive for a slip and fall injury?",
    answer:
      "You may be entitled to compensation for medical bills, lost wages, pain and suffering, future medical treatment, and reduced quality of life. In severe cases involving permanent disability, the damages can be substantial. Our firm has recovered $1.4 million in a single slip and fall case.",
  },
];

export default function SlipAndFallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Slip and Fall" },
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
            Slip and Fall Lawyers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Holding property owners accountable when dangerous conditions cause
            serious injuries.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Slip and Fall" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Slip and fall accidents are among the most common causes of
            emergency room visits in the United States. When a property
            owner&apos;s negligence — a wet floor without a warning sign, an icy
            sidewalk that wasn&apos;t salted, a broken staircase that
            wasn&apos;t repaired — causes you to fall and suffer serious
            injuries, they can be held liable. The Kryder Law Group has
            recovered $1.4 million in a single slip and fall case and fights for
            full compensation for every client.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Common Slip and Fall Hazards
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
