import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Catastrophic Injury Lawyer — TBI, Spinal Cord & Amputation",
  description:
    "Suffered a catastrophic injury due to negligence? The Kryder Law Group pursues maximum compensation for TBI, spinal cord injuries, and amputations. Call (312) 223-1700.",
  path: "/practice-areas/catastrophic-injury",
});

const services = [
  "Traumatic brain injury (TBI) claims",
  "Spinal cord injuries and paralysis",
  "Amputation and limb loss cases",
  "Severe burn injury litigation",
  "Internal organ damage claims",
  "Multiple fracture and crush injury cases",
];

const faqs = [
  {
    question: "What is considered a catastrophic injury?",
    answer:
      "A catastrophic injury is one that permanently prevents the victim from performing gainful work or substantially limits their ability to live independently. Common examples include traumatic brain injuries, spinal cord injuries resulting in paralysis, amputations, severe burns over a large percentage of the body, and blindness or deafness caused by trauma.",
  },
  {
    question: "Why are catastrophic injury cases worth more than other claims?",
    answer:
      "Catastrophic injuries require lifelong medical care, adaptive equipment, home modifications, and ongoing therapy. Victims often cannot return to work, resulting in decades of lost earning capacity. Pain and suffering damages are also significantly higher because of the permanent impact on quality of life. Our team works with life care planners, economists, and medical experts to calculate the full lifetime cost of these injuries.",
  },
  {
    question: "How long does a catastrophic injury case take to resolve?",
    answer:
      "These cases typically take longer than standard injury claims because of the complexity involved — often 18 months to several years. It is critical not to settle too quickly, as the full extent of a catastrophic injury may not be known for months or even years. Premature settlements can leave victims without the resources they need for lifetime care.",
  },
  {
    question:
      "Can I file a lawsuit if my loved one suffered a catastrophic injury?",
    answer:
      "If your loved one is incapacitated, a legal guardian or family member may file a claim on their behalf. Additionally, family members may have their own claims for loss of consortium — the loss of companionship, affection, and support caused by the injury. Contact us to discuss the options available to your family.",
  },
];

export default function CatastrophicInjuryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Catastrophic Injury" },
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
            Chicago Catastrophic Injury Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Life-changing injuries demand life-changing compensation. We fight
            for victims of traumatic brain injuries, spinal cord damage,
            amputations, and other devastating harm.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Catastrophic Injury" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Catastrophic injuries transform lives in an instant. Victims and
            their families face not only immense physical and emotional
            suffering but also staggering financial burdens — often millions of
            dollars in lifetime medical costs. The Kryder Law Group has the
            resources, expert network, and litigation experience to pursue the
            maximum compensation needed to provide for a lifetime of care, lost
            income, and diminished quality of life.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Catastrophic Injury Cases We Handle
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
