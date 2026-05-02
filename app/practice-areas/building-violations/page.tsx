import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Chicago Building Code Violation Defense Attorney",
  description:
    "REAL Law Group defends property owners, landlords, and developers facing Chicago building code violations. Representation at administrative hearings, fine reduction, and compliance strategies. Call (630) 299-7600 for a free consultation.",
  path: "/practice-areas/building-violations",
});

const commonViolations = [
  "Unpermitted construction or renovation work",
  "Porch and deck structural deficiencies",
  "Fire safety and sprinkler system violations",
  "Electrical and plumbing code violations",
  "Zoning and occupancy violations",
  "Failed building inspections",
  "Illegal conversions (residential to commercial or vice versa)",
  "Missing or expired building permits",
  "Elevator and escalator code violations",
  "Lead paint and environmental violations",
];

const faqs = [
  {
    question: "What happens if I ignore a building code violation in Chicago?",
    answer:
      "Ignoring a building code violation is never advisable. The City of Chicago can impose escalating fines — often $500 to $1,000 per day per violation — place liens on your property, and in severe cases pursue demolition orders. If you fail to appear at an administrative hearing, a default judgment is entered against you, which makes it significantly harder and more expensive to resolve later.",
  },
  {
    question:
      "How long do I have to respond to a building code violation notice?",
    answer:
      "Typically, you will receive a notice of violation with a hearing date at the City of Chicago Department of Administrative Hearings. You generally have 21 days from the date of the notice to prepare your response. Acting quickly gives your attorney time to gather evidence, request inspections, and develop a strategy before the hearing.",
  },
  {
    question: "Can a building code violation affect the sale of my property?",
    answer:
      "Yes. Open building code violations appear in the City of Chicago records and will surface during a title search or buyer due diligence. Unresolved violations can delay or kill a sale, reduce your property value, and create liability issues. We help property owners resolve violations efficiently so they do not interfere with planned transactions.",
  },
  {
    question:
      "What is the difference between a building code violation and a zoning violation?",
    answer:
      "Building code violations relate to the physical condition and safety of a structure — things like electrical wiring, structural integrity, fire safety, and plumbing. Zoning violations involve how a property is used relative to its zoning classification, such as operating a commercial business in a residential zone or exceeding the permitted number of dwelling units. Both are adjudicated through the City of Chicago administrative hearing process.",
  },
  {
    question: "Do I need an attorney for a Chicago administrative hearing?",
    answer:
      "While you are not required to have an attorney, the administrative hearing process is adversarial — the City will have a prosecutor presenting the case against you. An experienced attorney understands the hearing procedures, knows how to negotiate with City prosecutors, and can often secure reduced fines or dismissals. Since 2016, REAL Law Group has represented property owners at these hearings throughout Chicagoland.",
  },
];

export default function BuildingViolationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: "Chicago Building Code Violation Defense",
              description:
                "Defense for property owners, landlords, and developers facing City of Chicago building code violations: representation at administrative hearings, fine reduction, and compliance strategies.",
              path: "/practice-areas/building-violations",
              serviceType: "Building Code Violation Defense",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Practice Areas", url: "/practice-areas" },
              { name: "Chicago Building Code Violations" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Chicago Building Code Violations
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Building Code Violations" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Building Code Defense</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Protecting Property Owners Against Code Violations
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Property owners in Chicago operate under one of the most complex
              municipal building codes in the country. The City&apos;s
              Department of Buildings actively inspects and cites properties for
              a wide range of violations — from missing permits and structural
              deficiencies to fire safety issues and illegal use conversions. A
              single violation can trigger substantial daily fines, stop work
              orders on active projects, and mandatory appearances at
              administrative hearings.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              REAL Law Group represents property owners, landlords, investors,
              and developers facing building code enforcement actions throughout
              Chicago and the surrounding suburbs. Whether you received a
              violation notice after an inspection, purchased a property with
              existing violations, or are dealing with a complaint from a
              neighbor or tenant, our team works to resolve the matter
              efficiently and minimize your financial exposure.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Common Building Code Violations
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Chicago&apos;s building code covers virtually every aspect of
              property construction, maintenance, and use. These are among the
              most frequent violations we handle for our clients:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commonViolations.map((violation, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{violation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              The Administrative Hearing Process
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Chicago enforces building code violations through its Department
              of Administrative Hearings (DOAH), an administrative adjudication
              system separate from the traditional court system. When the
              Department of Buildings issues a citation, the property owner
              receives a notice with a scheduled hearing date. At the hearing, a
              City prosecutor presents evidence of the violation before an
              administrative law judge.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Property owners have the right to present evidence, call
              witnesses, and argue their case. However, the process moves
              quickly and the rules of procedure differ from standard
              courtrooms. Fines can range from a few hundred dollars for minor
              infractions to thousands of dollars per day for serious or ongoing
              violations. In some cases, the City may seek demolition orders or
              building court proceedings for properties deemed dangerous or
              abandoned.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Having an attorney who understands the DOAH process is critical.
              Many violations can be resolved through negotiation with the City
              prosecutor before ever reaching a formal hearing — often resulting
              in reduced fines, extended compliance timelines, or outright
              dismissals when the evidence supports it.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              How We Can Help
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              At REAL Law Group, we take a practical approach to building code
              violations. We start by reviewing the citation, inspecting the
              relevant property records, and understanding the scope of the
              alleged violations. From there, we develop a strategy — whether
              that means negotiating with the City for reduced penalties,
              presenting a compliance plan to demonstrate good faith, or
              contesting the violation at hearing when the facts are on your
              side.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Our attorneys have handled hundreds of administrative hearing
              matters across Chicagoland. We understand how City inspectors
              document violations, what evidence administrative law judges
              consider persuasive, and how to move cases toward resolution
              without unnecessary delay or expense. If you have received a
              building code violation notice, contact us before your hearing
              date — early action gives us the most options to protect your
              interests.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Facing a building code violation?"
        text="Contact our team today to discuss your case and explore your options."
        buttonText="Schedule a Consultation"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Related Practice Areas
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/practice-areas/real-estate"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Real Estate Law
            </a>
            <a
              href="/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Land Trusts
            </a>
            <a
              href="/practice-areas/hud-closings"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              HUD Closings
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
