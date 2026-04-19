import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "HUD & Government Property Closing Attorney — Chicago",
  description:
    "REAL Law Group handles HUD home closings throughout Chicagoland. Experienced attorneys guiding buyers through HUD-specific timelines, contracts, and closing requirements. Call (630) 299-7600 for a free consultation.",
  path: "/practice-areas/hud-closings",
});

const hudClosingSteps = [
  "Buyer submits an offer through HUD\u2019s online bidding system (HUDHomeStore.com)",
  "If accepted, the buyer receives a ratified contract from HUD",
  "Buyer secures financing \u2014 FHA, conventional, or cash",
  "Attorney review period begins and title search is ordered",
  "Inspections are completed and any required repairs are addressed",
  "Closing is coordinated with HUD\u2019s asset management company",
  "Final closing takes place and title is transferred to the buyer",
];

const hudDifferences = [
  "Strict closing timelines, typically 45 to 60 days from contract ratification",
  "HUD-specific addenda, disclosures, and contract forms that differ from standard Illinois transactions",
  "Properties are sold strictly \u201cas-is\u201d with no seller repairs or credits",
  "Earnest money deposit is required within a short window after bid acceptance",
  "Extension requests are available but carry mandatory per-diem fees",
];

const faqs = [
  {
    question: "What is a HUD home?",
    answer:
      "A HUD home is a property that was previously financed with an FHA-insured mortgage. When the borrower defaults and the lender forecloses, the Department of Housing and Urban Development acquires the property and lists it for sale to recover the insurance claim. These homes are sold through HUD\u2019s official listing site, HUDHomeStore.com.",
  },
  {
    question: "Do I need an attorney for a HUD closing in Illinois?",
    answer:
      "While not legally required in every situation, having an attorney for a HUD closing is strongly recommended. HUD transactions follow a different process than standard residential purchases, with unique contract forms, strict deadlines, and specific addenda. An experienced HUD closing attorney protects your interests and keeps the transaction on track.",
  },
  {
    question: "Can I negotiate the price on a HUD home?",
    answer:
      "HUD homes are sold through an online bidding process rather than traditional negotiation. During the initial listing period, only owner-occupant buyers and certain nonprofits can bid. If the property does not sell, it opens to investors. HUD reviews all bids and may accept, reject, or counter an offer based on the appraised value and market conditions.",
  },
  {
    question: "What happens if I need more time to close on a HUD home?",
    answer:
      "If you cannot close within the original contract timeline, your attorney can submit an extension request to HUD\u2019s asset management company. Extensions are not guaranteed, and each approved extension carries a per-diem fee that the buyer must pay. REAL Law Group handles extension requests regularly and works to keep your closing on schedule whenever possible.",
  },
  {
    question: "Are HUD homes sold as-is?",
    answer:
      "Yes. HUD sells all properties in as-is condition, meaning HUD will not make repairs or offer credits for property defects. Buyers should always schedule a thorough home inspection before the inspection deadline so they understand the full scope of any needed repairs before committing to the purchase.",
  },
  {
    question: "Can I use an FHA loan to buy a HUD home?",
    answer:
      "Yes, FHA financing is one of the most common ways to purchase a HUD home. Conventional loans and cash purchases are also accepted. Your lender will need to meet HUD\u2019s closing timeline, so it is important to have financing lined up before submitting a bid. REAL Law Group coordinates with your lender to ensure all documentation is ready for a timely closing.",
  },
];

export default function HUDClosingsPage() {
  return (
    <>
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
              { name: "HUD Closings" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            HUD Closings
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "HUD Closings" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              REAL Law Group serves as a HUD closing attorney for buyers
              purchasing government-owned properties throughout the Chicago
              area. HUD homes are residential properties acquired by the U.S.
              Department of Housing and Urban Development, typically after a
              borrower defaults on an FHA-insured mortgage and the lender
              completes a foreclosure. Once HUD takes ownership, these homes are
              listed for sale to new buyers at market-driven prices.
            </p>
            <p className="text-text-muted leading-relaxed">
              Purchasing a HUD home can be an excellent opportunity for
              first-time buyers and investors alike, but the process differs
              significantly from a standard real estate transaction. Our
              attorneys guide buyers through every stage of the HUD closing
              process, from contract review to final transfer of title.
            </p>
          </div>

          {/* The HUD Closing Process */}
          <div className="mb-16">
            <span className="section-label">Step by Step</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              The HUD Closing Process
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              HUD closings follow a structured sequence that moves on a firm
              timeline. Understanding each step helps buyers stay ahead of
              deadlines and avoid costly delays.
            </p>
            <ol className="space-y-4">
              {hudClosingSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-text-muted pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What Makes HUD Closings Different */}
          <div className="mb-16">
            <span className="section-label">Key Differences</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What Makes HUD Closings Different
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              HUD transactions operate under rules that do not apply to typical
              residential purchases in Illinois. Buyers who approach a HUD
              closing like a standard deal often run into problems. Here are the
              key distinctions our attorneys help clients navigate.
            </p>
            <div className="space-y-3">
              {hudDifferences.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD Closing Extension Requests */}
          <div className="mb-16">
            <span className="section-label">Extensions</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              HUD Closing Extension Requests
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              When financing delays, title issues, or other complications arise,
              buyers may need additional time beyond the original closing
              deadline. HUD allows extension requests, but they come at a cost.
              Each approved extension carries a per-diem fee that accrues for
              every day past the original closing date.
            </p>
            <p className="text-text-muted leading-relaxed">
              REAL Law Group handles extension requests on behalf of our
              clients, communicating directly with HUD&apos;s asset management
              company to secure additional time when necessary. We work to
              minimize extension fees by identifying potential delays early and
              keeping all parties aligned on a realistic closing schedule. When
              an extension is unavoidable, we ensure the request is submitted
              correctly and within the required timeframe to protect your
              contract.
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
        heading="Buying a HUD home in Illinois?"
        text="Our attorneys handle every step of the HUD closing process so you can focus on your new home."
        buttonText="Contact Us Today"
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
              href="/practice-areas/building-violations"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Building Violations
            </a>
          </div>
          <h3 className="font-heading text-lg text-primary mt-6 mb-3">
            Helpful Resources
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resources/closing-cost-calculator"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Closing Cost Calculator
            </a>
            <a
              href="/emd"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Earnest Money Deposits
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
