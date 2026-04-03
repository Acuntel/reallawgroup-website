import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Workers' Compensation Lawyer — Workplace Injury Claims",
  description:
    "Injured on the job in Illinois? The Kryder Law Group helps workers get the benefits they deserve. Call (312) 223-1700 for a free consultation.",
  path: "/practice-areas/workers-compensation",
});

const services = [
  "Filing and appealing workers' compensation claims",
  "Workplace fall and machinery injury claims",
  "Repetitive stress and overexertion injuries",
  "Occupational illness and toxic exposure claims",
  "Third-party liability claims against non-employers",
  "Disputed and denied claim appeals before the IWCC",
];

const faqs = [
  {
    question:
      "Do I need to prove my employer was at fault to get workers' comp?",
    answer:
      "No. Illinois workers' compensation is a no-fault system. You do not need to prove your employer was negligent — only that your injury or illness arose out of and in the course of your employment. This means you are entitled to benefits regardless of who caused the accident, with very limited exceptions such as self-inflicted injuries or injuries caused by intoxication.",
  },
  {
    question:
      "What benefits am I entitled to under Illinois workers' compensation?",
    answer:
      "Illinois workers' compensation benefits include payment of all reasonable and necessary medical expenses, temporary total disability (TTD) benefits equal to two-thirds of your average weekly wage while you are unable to work, permanent partial disability (PPD) or permanent total disability (PTD) benefits if you suffer lasting impairment, and vocational rehabilitation if you cannot return to your previous job.",
  },
  {
    question: "Can my employer fire me for filing a workers' comp claim?",
    answer:
      "No. Illinois law prohibits employers from retaliating against employees who file workers' compensation claims. If you are fired, demoted, or otherwise punished for exercising your right to file a claim, you may have a separate cause of action for retaliatory discharge, which can result in additional damages beyond your workers' comp benefits.",
  },
  {
    question: "How long do I have to report a workplace injury in Illinois?",
    answer:
      "You must notify your employer of a workplace injury within 45 days of the accident. For repetitive trauma or occupational diseases, the 45-day period begins when you knew or should have known the condition was work-related. The statute of limitations to file a workers' compensation claim with the Illinois Workers' Compensation Commission is three years from the date of injury or two years from the last payment of compensation, whichever is later.",
  },
];

export default function WorkersCompensationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Workers' Compensation" },
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
            Chicago Workers&apos; Compensation Lawyer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Injured on the job? You have the right to medical care, wage
            replacement, and disability benefits. We make sure you get them.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Workers' Compensation" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            Every year, thousands of Illinois workers are injured on the job —
            from construction falls and factory machinery accidents to
            repetitive stress injuries in office settings. The Illinois
            Workers&apos; Compensation Act provides benefits for injured
            workers, but insurance companies routinely deny or undervalue
            legitimate claims. The Kryder Law Group fights to ensure you receive
            every dollar of compensation you are entitled to under the law.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-10">
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Workers&apos; Compensation Services
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
