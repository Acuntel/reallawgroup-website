import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Construction Accident Lawyers — Chicago & Illinois",
  description:
    "Injured on a construction site? The Kryder Law Group handles falls, electrocutions, equipment injuries, and more. Free case review. Call (312) 223-1700.",
  path: "/practice-areas/construction-accidents",
});

const services = [
  "Falls from heights (scaffolding, ladders, roofs)",
  "Electrocution and electrical burns",
  "Struck by falling objects or equipment",
  "Caught-in or caught-between accidents",
  "Heavy machinery and crane accidents",
  "Chemical exposure and toxic substance injuries",
  "Trench collapses and excavation accidents",
];

const faqs = [
  {
    question: "Can I sue my employer for a construction injury?",
    answer:
      "In Illinois, workers' compensation generally prevents you from suing your employer directly. However, you may have a third-party claim against other parties such as general contractors, subcontractors, equipment manufacturers, or property owners. Our attorneys evaluate every possible source of compensation.",
  },
  {
    question: "What is OSHA's role in construction accident cases?",
    answer:
      "OSHA (Occupational Safety and Health Administration) sets safety standards for construction sites. OSHA violations — such as missing fall protection, improper scaffolding, or inadequate training — can be powerful evidence of negligence in your injury claim. We investigate OSHA records as part of building your case.",
  },
  {
    question: "What compensation can I receive for a construction site injury?",
    answer:
      "Through workers' compensation, you can receive coverage for medical bills, lost wages (typically two-thirds of your average weekly wage), and disability benefits. Through a third-party lawsuit, you may also recover full lost wages, pain and suffering, and future earning capacity. Our firm has recovered $7.5 million for a single construction worker case.",
  },
  {
    question: "How long do I have to file a construction accident claim?",
    answer:
      "For workers' compensation in Illinois, you generally have 3 years from the accident date or 2 years from the last payment of compensation. For third-party personal injury claims, the statute of limitations is typically 2 years. Contact us as soon as possible to preserve evidence.",
  },
];

export default function ConstructionAccidentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Construction Accidents" },
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
            Construction Accident Lawyers
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Aggressive representation for workers injured on construction sites
            across Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Construction Accidents" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Construction is one of the most dangerous industries in America.
            Workers face risks from heights, heavy machinery, electrical
            hazards, and unstable structures every day. When safety protocols
            fail, the injuries can be devastating — broken bones, spinal cord
            damage, traumatic brain injuries, and worse. The Kryder Law Group
            has recovered millions for construction workers, including a $7.5
            million recovery in a single case. We pursue both workers&apos;
            compensation and third-party claims to maximize your total recovery.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Types of Construction Accidents We Handle
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
