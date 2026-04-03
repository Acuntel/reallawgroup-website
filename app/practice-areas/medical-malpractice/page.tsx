import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Medical Malpractice Lawyer — Hospital & Doctor Negligence",
  description:
    "Harmed by a medical professional's negligence? The Kryder Law Group handles medical malpractice cases across Illinois. Call (312) 223-1700 for a free consultation.",
  path: "/practice-areas/medical-malpractice",
});

const services = [
  "Surgical errors and wrong-site surgery",
  "Misdiagnosis and delayed diagnosis",
  "Medication and prescription errors",
  "Birth injuries and obstetric malpractice",
  "Anesthesia errors",
  "Emergency room negligence",
];

const faqs = [
  {
    question: "What qualifies as medical malpractice in Illinois?",
    answer:
      "Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care, and that deviation directly causes injury to the patient. Under Illinois law, you must prove that a doctor-patient relationship existed, the provider was negligent, the negligence caused your injury, and you suffered actual damages such as medical bills, lost income, or pain and suffering.",
  },
  {
    question: "Is there a cap on medical malpractice damages in Illinois?",
    answer:
      "No. The Illinois Supreme Court struck down caps on medical malpractice damages in Lebron v. Gottlieb Memorial Hospital (2010), ruling them unconstitutional. This means there is no limit on the amount of compensatory damages — including pain and suffering — that a jury can award in an Illinois medical malpractice case.",
  },
  {
    question:
      "How long do I have to file a medical malpractice lawsuit in Illinois?",
    answer:
      "The statute of limitations for medical malpractice in Illinois is generally two years from the date you knew or should have known about the injury, but no more than four years from the date of the negligent act. For minors, the deadline is extended to eight years from the date of the act but must be filed before the child turns 22. These deadlines are strict, so consult an attorney promptly.",
  },
  {
    question: "Do I need an expert witness for a medical malpractice case?",
    answer:
      "Yes. Illinois law requires the plaintiff to attach an affidavit of merit from a qualified medical professional when filing a medical malpractice lawsuit. This expert must certify that there is a reasonable and meritorious cause for filing. At trial, expert testimony is almost always necessary to establish the standard of care and how it was breached.",
  },
];

export default function MedicalMalpracticePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Medical Malpractice" },
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
            Chicago Medical Malpractice Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            When healthcare providers fail in their duty of care, the
            consequences can be life-altering. We hold hospitals and doctors
            accountable.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Medical Malpractice" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Medical malpractice cases are among the most complex personal injury
            claims. They require deep knowledge of both medicine and law, access
            to qualified expert witnesses, and the resources to go up against
            hospitals and their insurance carriers. The Kryder Law Group has the
            experience and resources to investigate what went wrong, establish
            the standard of care, and pursue the maximum compensation for
            patients who have been harmed by medical negligence.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Medical Malpractice Cases We Handle
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
