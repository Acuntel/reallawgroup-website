import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "For Sale By Owner Legal Services in Illinois",
  description:
    "REAL Law Group provides legal representation for FSBO sellers in Illinois. Contract drafting, title work, closing coordination, and full attorney support without an agent. Call (630) 299-7600 for a free consultation.",
  path: "/resources/for-sale-by-owner",
});

const fsboServices = [
  "Contract drafting and review",
  "Negotiating buyer attorney modifications",
  "Title search and clearing title issues",
  "Coordinating with buyer's lender and title company",
  "Preparing closing documents and settlement statements",
  "Ensuring proper disclosure compliance",
  "Transfer tax stamps and recording",
  "Protecting your interests without agent representation",
];

const processSteps = [
  {
    step: "1",
    title: "List Your Home",
    description:
      "Price your property, prepare it for showings, and market it through online listings, signage, and flat-fee MLS services. You control the process from day one.",
  },
  {
    step: "2",
    title: "Find a Buyer",
    description:
      "Manage inquiries, schedule showings, and identify a serious buyer. Once you agree on price and terms, it is time to put it in writing.",
  },
  {
    step: "3",
    title: "Sign a Contract",
    description:
      "Either you or the buyer drafts the initial purchase agreement. In Illinois, most residential contracts include a standard attorney review period — typically five business days.",
  },
  {
    step: "4",
    title: "Attorney Review",
    description:
      "Your attorney at REAL Law Group reviews the contract, proposes modifications to protect your interests, and negotiates terms with the buyer's attorney. This is where critical protections are added or adjusted.",
  },
  {
    step: "5",
    title: "Inspections & Negotiations",
    description:
      "The buyer conducts inspections. If issues arise, your attorney negotiates repair credits or contract amendments on your behalf so you are not agreeing to unfavorable terms.",
  },
  {
    step: "6",
    title: "Title Work",
    description:
      "A title search is ordered to confirm clear ownership. If any liens, encumbrances, or title defects surface, your attorney works to resolve them before closing.",
  },
  {
    step: "7",
    title: "Closing",
    description:
      "Your attorney prepares the deed, settlement statement, and transfer documents. At closing, all documents are executed, funds are disbursed, and ownership transfers to the buyer.",
  },
];

const faqs = [
  {
    question:
      "Is it legal to sell a house without a real estate agent in Illinois?",
    answer:
      "Yes. Illinois does not require you to use a real estate agent to sell your home. Whether or not you use a realtor, you will likely benefit from hiring a real estate attorney.",
  },
  {
    question: "What does a real estate attorney do?",
    answer:
      "Your attorney drafts or reviews the purchase contract, negotiates modifications with the buyer's attorney, orders and reviews the title search, prepares closing documents including the deed and settlement statement, coordinates with the buyer's lender and title company, and ensures all legal requirements are met through closing.",
  },
  {
    question: "Do I still have to pay the buyer's agent commission?",
    answer:
      "If the buyer is represented by an agent, the buyer's agent may expect compensation. This is a negotiable item in the transaction. Your attorney can help you understand your options and negotiate commission terms as part of the purchase agreement.",
  },
  {
    question: "What are the biggest risks of selling FSBO without an attorney?",
    answer:
      "The biggest risks include signing a contract with unfavorable terms, failing to make required property disclosures under Illinois law, missing title defects that could delay or derail closing, and mishandling earnest money. An experienced real estate attorney eliminates these risks and ensures the transaction closes properly.",
  },
];

export default function ForSaleByOwnerPage() {
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
              { name: "Resources", url: "/resources" },
              { name: "For Sale By Owner Legal Services" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            For Sale By Owner Legal Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Attorney representation for Illinois homeowners selling without an
            agent.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "For Sale By Owner" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">FSBO Representation</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Sell Your Home Without an Agent — Not Without an Attorney
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              In Illinois, you don&apos;t need a real estate agent to sell your
              home — but you do still need a real estate attorney. Every
              residential real estate transaction in Illinois involves attorney
              review, and for FSBO sellers, your attorney becomes your primary
              advocate throughout the entire process.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              FSBO sellers face unique legal challenges. Without an agent
              handling paperwork and negotiations, the responsibility for
              contract terms, disclosures, title issues, and closing
              coordination falls squarely on you. REAL Law Group steps into that
              gap. We provide the legal guidance and transactional support FSBO
              sellers need to close confidently and protect their equity.
            </p>
            <div className="border-l-4 border-secondary bg-light-gold rounded-r-xl p-6">
              <p className="text-text leading-relaxed">
                <span className="font-semibold">
                  Did a cash home buyer make you an offer?
                </span>{" "}
                If Grandview Homes, Kendall Partners, Big Door Home Buyers, or
                any other company that buys houses directly has sent you a
                written offer, have an attorney review it before you sign it.{" "}
                <a
                  href="/resources/cash-offer-review"
                  className="text-secondary font-semibold underline hover:text-primary"
                >
                  Start with our cash offer review guide.
                </a>
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Why FSBO Sellers Need an Attorney
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              When you sell without an agent, your attorney handles the legal
              work that protects you from contract to closing:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fsboServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              How Much Can You Save with FSBO?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              The primary advantage of selling by owner is eliminating the
              realtor commission.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Attorney fees for handling the legal side of the transaction are
              billed on a flat-fee basis. You get full legal representation
              through every stage of the sale — contract review, title work,
              negotiations, and closing.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              The FSBO Process with REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
        heading="Selling your home without an agent?"
        text="REAL Law Group provides full legal representation for FSBO sellers across Chicagoland. Call (630) 299-7600 or schedule a consultation."
        buttonText="Schedule a Consultation"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Real Estate Closings
          </a>
          <a
            href="/resources/closing-cost-calculator"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Closing Cost Calculator
          </a>
        </div>
      </section>
    </>
  );
}
