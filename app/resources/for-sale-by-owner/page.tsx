import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ThirdPartyDisclaimer from "@/components/ui/ThirdPartyDisclaimer";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/schema";
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
      "Either you or the buyer drafts the initial purchase agreement. In Illinois, most residential contracts include a standard attorney review period, typically five business days.",
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
  {
    question: "What disclosures do I have to give the buyer in Illinois?",
    answer:
      "For most residential sales you must provide the Illinois Residential Real Property Disclosure Report under 765 ILCS 77, a radon disclosure and the IEMA pamphlet under the Illinois Radon Awareness Act at 420 ILCS 46, and, for homes built before 1978, the federal lead-based paint disclosure. Selling without an agent does not reduce these obligations, it just means nobody else is tracking them for you. A knowing misstatement on the property disclosure can create real liability after closing.",
  },
  {
    question: "Who holds the earnest money in a FSBO sale?",
    answer:
      "In a brokered sale the listing brokerage usually holds it in escrow. In a FSBO sale there is no brokerage, so the contract has to name an escrowee, and that is commonly the seller's attorney or the title company. Do not hold a buyer's earnest money in your personal account. We set this up correctly as part of the contract.",
  },
  {
    question:
      "The buyer's attorney sent me a list of modifications. What do I do?",
    answer:
      "That is a normal part of an Illinois transaction and not a sign the deal is falling apart. During attorney review each side can propose changes to the contract. What you should not do is accept the list because it looks official, or ignore it until the review period runs out. Send it to us and we will tell you which items are routine, which shift risk onto you, and what to counter.",
  },
  {
    question:
      "A company offered to buy my house directly. Should I still call an attorney?",
    answer:
      "Yes, and ideally before you sign. A purchase agreement drafted by a company that buys homes directly is its own document, and it may not include the attorney review period that most Illinois sellers expect. We review those agreements on a flat-fee basis. Our cash offer review guide walks through what we look for.",
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
            generateArticleSchema({
              title: "For Sale By Owner Legal Services in Illinois",
              description:
                "How a FSBO sale works in Illinois, what disclosures the seller owes, and what a real estate attorney handles when there is no listing agent.",
              path: "/resources/for-sale-by-owner",
              datePublished: "2025-01-01",
            }),
          ),
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
              Sell Your Home Without an Agent, Not Without an Attorney
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              In Illinois, you don&apos;t need a real estate agent to sell your
              home, but you do still need a real estate attorney. Every
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
                If Grandview Homes, Kendall Partners, Direct Property Aid, Big
                Door Home Buyers, or any other company that buys houses directly
                has sent you a written offer, have an attorney review it before
                you sign it.{" "}
                <a
                  href="/resources/cash-offer-review"
                  className="text-secondary font-semibold underline hover:text-primary"
                >
                  Start with our cash offer review guide.
                </a>
              </p>
            </div>
            <div className="mt-6">
              <ThirdPartyDisclaimer />
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
              listing side of the commission. What you save depends on your sale
              price and on what, if anything, you agree to pay a buyer&apos;s
              agent.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              That second part changed recently. Buyer agent compensation is no
              longer advertised through the MLS the way it once was, and it is
              now negotiated directly in the transaction. In practice, a FSBO
              seller decides whether to offer anything to a buyer&apos;s agent,
              and the answer affects both how much traffic the listing gets and
              what the seller nets. If a buyer arrives already represented, the
              compensation question usually surfaces with the offer itself,
              which is a term we negotiate as part of the contract rather than a
              fee you are obligated to accept.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Commission is also not the only line item. Transfer stamps,
              prorated property taxes, title charges, and payoff figures all
              come out of your proceeds.{" "}
              <a
                href="/resources/closing-cost-calculator"
                className="text-secondary font-semibold underline hover:text-primary"
              >
                Run your numbers through our closing cost calculator
              </a>{" "}
              to see the seller side of a Chicagoland closing before you set a
              price.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Attorney fees for handling the legal side of the transaction are
              billed on a flat-fee basis. You get full legal representation
              through every stage of the sale: contract review, title work,
              negotiations, and closing.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              The Disclosures Illinois Requires You to Give
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              This is where unrepresented sellers get into trouble most often.
              Selling without an agent does not reduce your disclosure
              obligations. It just means nobody else is tracking them for you,
              and a disclosure problem tends to surface after closing, when it
              is expensive.
            </p>
            <div className="space-y-4 mb-8">
              <div className="border border-border rounded-xl p-6 bg-background">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Illinois Residential Real Property Disclosure Report
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Required for most residential sales under 765 ILCS 77. You
                  answer a fixed list of questions about the roof, foundation,
                  basement, plumbing, electrical, HVAC, environmental
                  conditions, and known code violations. It is not a warranty of
                  condition, but a knowing misstatement can expose you to
                  liability after the sale closes.
                </p>
              </div>
              <div className="border border-border rounded-xl p-6 bg-background">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Illinois Radon Disclosure
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Under the Illinois Radon Awareness Act, 420 ILCS 46, sellers
                  of most residential property must give the buyer a disclosure
                  form and the state pamphlet before the contract, and must
                  disclose known test results and elevated levels.
                </p>
              </div>
              <div className="border border-border rounded-xl p-6 bg-background">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Federal Lead-Based Paint Disclosure
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Required for homes built before 1978. The buyer also receives
                  a federally mandated pamphlet and a period to conduct a
                  lead-based paint assessment unless they waive it in writing.
                </p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              We prepare and review these with you as part of the engagement,
              and you can{" "}
              <a
                href="/resources/real-estate-contract"
                className="text-secondary font-semibold underline hover:text-primary"
              >
                download the current Chicagoland forms here
              </a>
              .
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
            href="/resources/cash-offer-review"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Cash Offer Review
          </a>
          <a
            href="/resources/real-estate-contract"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Contract &amp; Disclosure Forms
          </a>
          <a
            href="/emd"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Earnest Money FAQs
          </a>
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
