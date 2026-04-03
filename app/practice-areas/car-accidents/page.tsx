import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Car Accident Lawyer — Free Consultation",
  description:
    "Injured in a car accident in Chicago or Illinois? The Kryder Law Group has recovered over $100 million for injury victims. Call (312) 223-1700 for a free consultation.",
  path: "/practice-areas/car-accidents",
});

const services = [
  "Rear-end collision claims",
  "Head-on & side-impact crash injuries",
  "Hit-and-run accident investigations",
  "Uninsured and underinsured motorist claims",
  "Rideshare (Uber/Lyft) accident representation",
  "Multi-vehicle pileup litigation",
];

const faqs = [
  {
    question: "How long do I have to file a car accident lawsuit in Illinois?",
    answer:
      "Under the Illinois statute of limitations, you generally have two years from the date of the accident to file a personal injury lawsuit. If you are filing a claim against a government entity, shorter notice deadlines may apply. It is important to consult with an attorney as soon as possible to preserve evidence and protect your rights.",
  },
  {
    question: "What compensation can I recover after a car accident?",
    answer:
      "Depending on the facts of your case, you may be entitled to compensation for medical bills, lost wages, pain and suffering, property damage, and future medical care. In cases involving egregious conduct, punitive damages may also be available. Illinois follows a modified comparative negligence rule, meaning you can recover damages as long as you are less than 50% at fault.",
  },
  {
    question: "Should I talk to the other driver's insurance company?",
    answer:
      "No. Insurance adjusters work to minimize payouts, and anything you say can be used to reduce your claim. Let an experienced car accident attorney handle all communication with the insurance company so your rights are fully protected.",
  },
  {
    question: "What if I was partially at fault for the accident?",
    answer:
      "Illinois uses modified comparative negligence. You can still recover damages if you are less than 50% at fault, but your award will be reduced by your percentage of fault. For example, if you are found 20% at fault and your damages total $100,000, you would receive $80,000.",
  },
];

export default function CarAccidentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Car Accidents" },
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
            Chicago Car Accident Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Aggressive representation for car accident victims across Illinois.
            We handle the insurance companies so you can focus on recovery.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Car Accidents" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Car accidents are the leading cause of personal injury claims in
            Illinois. Whether you were rear-ended on the Dan Ryan, T-boned at a
            Chicago intersection, or involved in a highway pileup, the aftermath
            can be devastating — mounting medical bills, lost income, and
            long-term pain. The Kryder Law Group fights to hold negligent
            drivers and insurance companies accountable so you receive the full
            compensation you deserve.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Car Accident Claims We Handle
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
