import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Wrongful Death Lawyer — Compassionate & Aggressive Advocacy",
  description:
    "Lost a loved one due to negligence? The Kryder Law Group pursues justice for wrongful death victims' families in Illinois. Call (312) 223-1700 for a free consultation.",
  path: "/practice-areas/wrongful-death",
});

const services = [
  "Wrongful death from motor vehicle accidents",
  "Fatal workplace and construction accidents",
  "Death caused by medical malpractice",
  "Nursing home neglect and abuse fatalities",
  "Defective product-related deaths",
  "Survival Act claims on behalf of the deceased&apos;s estate",
];

const faqs = [
  {
    question: "Who can file a wrongful death lawsuit in Illinois?",
    answer:
      "Under the Illinois Wrongful Death Act (740 ILCS 180), only the personal representative of the deceased person's estate can file a wrongful death lawsuit. The damages recovered are distributed to the surviving spouse, children, or next of kin. If no estate has been opened, the court can appoint a special administrator to file the lawsuit.",
  },
  {
    question:
      "What is the difference between a wrongful death claim and a survival action?",
    answer:
      "A wrongful death claim compensates the surviving family members for their losses — such as lost financial support, loss of companionship, and grief. A survival action, brought under the Illinois Survival Act, recovers damages that the deceased person could have claimed if they had survived, including medical expenses incurred before death, pain and suffering experienced before death, and lost earnings. Both claims can be filed in the same lawsuit.",
  },
  {
    question:
      "What is the statute of limitations for wrongful death in Illinois?",
    answer:
      "The statute of limitations for wrongful death in Illinois is generally two years from the date of death. However, if the death resulted from violent intentional conduct that is charged as a felony, the deadline is extended to five years. For medical malpractice deaths, special rules may apply. Because evidence can be lost and memories fade, we strongly recommend contacting an attorney as soon as possible.",
  },
  {
    question: "What damages can be recovered in a wrongful death case?",
    answer:
      "Recoverable damages include the loss of the deceased's expected income and financial contributions, loss of companionship, guidance, and consortium, grief and mental suffering of surviving family members, funeral and burial expenses, and medical bills incurred prior to death. Illinois does not cap wrongful death damages, so the full extent of the family's losses can be pursued.",
  },
];

export default function WrongfulDeathPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Wrongful Death" },
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
            Chicago Wrongful Death Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            No amount of money can replace a loved one, but justice and
            financial security for your family matter. We fight for both.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Wrongful Death" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Losing a family member to someone else&apos;s negligence is
            devastating. Beyond the emotional toll, families often face sudden
            financial hardship from lost income, mounting medical bills, and
            funeral costs. The Kryder Law Group approaches every wrongful death
            case with both compassion and determination, holding the responsible
            parties fully accountable under Illinois&apos;s Wrongful Death Act
            and Survival Act.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Wrongful Death Cases We Handle
            </h2>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <span className="text-secondary mt-1">&#9656;</span>
                  <span dangerouslySetInnerHTML={{ __html: s }} />
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
