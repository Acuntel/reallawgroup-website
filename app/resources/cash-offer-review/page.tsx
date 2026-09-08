import { CheckCircle, Phone, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ThirdPartyDisclaimer, {
  NAMED_HOME_BUYERS,
} from "@/components/ui/ThirdPartyDisclaimer";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Cash Home Buyer Offer Review in Illinois",
  description:
    "Did you get a written cash offer for your house from a company that buys homes directly? Have an Illinois real estate attorney review the purchase agreement before you sign it. Call (630) 299-7600.",
  path: "/resources/cash-offer-review",
});

// Named companies appear ONLY in interrogative or conditional sentences, never
// as the subject of a declarative statement of fact. Generic observations about
// buyer-drafted contracts live in their own sections, outside these blocks.
// See components/ui/ThirdPartyDisclaimer.tsx for why.
const buyerQuestions = [
  {
    company: "Grandview Homes",
    question: "Did you get an offer from Grandview Homes?",
    note: "If Grandview Homes has sent you a written cash offer for your house, have an attorney read the full purchase agreement before you sign anything.",
  },
  {
    company: "Kendall Partners",
    question: "Did you get an offer from Kendall Partners?",
    note: "If Kendall Partners has made you an offer, ask us to walk you through the agreement line by line so you know exactly what you are agreeing to.",
  },
  {
    company: "Direct Property Aid",
    question: "Did you get an offer from Direct Property Aid?",
    note: "If Direct Property Aid has offered to purchase your home, an attorney review tells you what the contract permits and what you would actually walk away with.",
  },
  {
    company: "Big Door Home Buyers",
    question: "Did you get an offer from Big Door Home Buyers?",
    note: "If Big Door Home Buyers has offered to purchase your home, we will read the agreement with you before your signature goes on the page.",
  },
];

const reviewPoints = [
  "The purchase price versus your actual net proceeds at closing",
  "Assignment clauses that let the buyer transfer your contract to someone else",
  "Marketing and resale rights the contract may grant the buyer",
  "Inspection terms and who has the right to cancel, and when",
  "Earnest money: how much is deposited and who holds it",
  "As-is language, repair credits, and post-inspection renegotiation",
  "How property taxes are prorated, including your exemptions",
  "The closing date, possession terms, and any leaseback provisions",
  "Fees, credits, and deductions taken out at the closing table",
  "Whether the contract includes an attorney review and modification period",
];

const netProceedsItems = [
  "The mortgage payoff, including any second mortgage or home equity line",
  "Property tax prorations, and whether your homeowner exemptions are counted",
  "Recorded liens, judgments, and unpaid utility or municipal balances",
  "Transfer stamps owed to the state, county, and your municipality",
  "Any credits or deductions the contract allows the buyer to take at closing",
  "Title and settlement charges assigned to the seller by the agreement",
];

const faqs = [
  {
    question: "Is it a bad idea to sell my house to a cash home buyer?",
    answer:
      "Not necessarily. Selling to a cash buyer is a legitimate option, and for some sellers the speed and convenience are worth accepting less than a listed sale might bring. The key is understanding exactly what the contract says, what you will net after every deduction, and whether the terms are fair before you are legally bound by them.",
  },
  {
    question: "Does my cash offer contract have an attorney review period?",
    answer:
      "It may not. The five business day attorney review period that most Illinois sellers have heard of comes from the standard residential contract forms used in brokered transactions. A purchase agreement drafted by a company that buys houses directly is its own document, and it contains only the protections written into it. Do not assume a review period exists because it usually does. Send us the agreement and we will tell you what it actually gives you.",
  },
  {
    question: "What should I look for in a cash offer contract?",
    answer:
      "Pay close attention to the net amount you will receive after all fees, prorations, and credits, any clause that lets the buyer assign the contract or market the property to another party, the earnest money terms, who can cancel and under what conditions, and the closing timeline. These contracts are prepared by the buyer, so the default terms tend to favor the buyer.",
  },
  {
    question: "Can the company sell my contract to someone else?",
    answer:
      "Many buyer-drafted agreements permit it. An assignment clause lets the company transfer its rights under your contract to a different buyer, often for a fee, and some agreements go further and allow the buyer to market the property before closing. That is legal when the contract allows it. Whether it is what you intended when you signed is a different question, which is why the assignment language is one of the first things we read.",
  },
  {
    question: "How much does it cost to have an attorney review a cash offer?",
    answer:
      "We handle residential contract review on a flat-fee basis, and the initial phone call is free. Call (630) 299-7600 and we will explain the process and the cost before you commit to anything.",
  },
  {
    question: "What if I already signed the contract?",
    answer:
      "Call us right away. Some Illinois residential contracts include an attorney review period, typically five business days, during which your attorney can propose modifications or disapprove the contract. Whether you have that window depends on the language in your specific contract, so time matters.",
  },
  {
    question: "The buyer wants an answer today. Do I have to decide now?",
    answer:
      "A written offer is a proposal, and you decide when to accept it. If a deadline is real, it will be stated in the document, and we can read it with you quickly. Before you sign under time pressure, it is worth the phone call to understand what you are signing.",
  },
  {
    question: "Do people who buy houses this way need a license in Illinois?",
    answer:
      "It depends on what they do and how often. The Real Estate License Act of 2000, as amended by Public Act 101-0357 in 2019, treats a person or entity that deals in contracts, including assignable contracts for the purchase or sale of real estate, as a broker when they engage in a pattern of business. The statute defines that pattern as two or more such occasions in any 12-month period, and it counts occasions across affiliated individuals and entities with common owners. Whether any particular buyer needs a license is a fact question we can look at with you.",
  },
];

export default function CashOfferReviewPage() {
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
              title: "Cash Home Buyer Offer Review in Illinois",
              description:
                "What an Illinois real estate attorney checks in a cash offer purchase agreement before you sign it, including assignment clauses, net proceeds, and attorney review periods.",
              path: "/resources/cash-offer-review",
              datePublished: "2025-08-05",
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
              { name: "Cash Home Buyer Offer Review" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Did You Get a Cash Offer for Your Home?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Call us to review it before you sign it. An Illinois real estate
            attorney will read the contract and tell you exactly where you
            stand.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Cash Offer Review" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Before You Sign</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Cash Home Buyers Are Active Across Chicagoland
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Companies that buy houses directly from homeowners are making
              offers throughout the Chicago area every day. Selling to one of
              them can be a perfectly reasonable choice: the sale is fast, the
              home sells as-is, and there is no listing process.
            </p>
            <p className="text-text-muted leading-relaxed">
              But the purchase agreement you are asked to sign was written by
              the buyer, for the buyer. Once you sign it, you are bound by every
              term it contains, including the ones you did not notice. A
              contract review before you sign is the cheapest protection you
              will ever buy in a real estate transaction.
            </p>
          </div>

          <div className="mb-16">
            <div className="rounded-xl border-l-4 border-secondary bg-light-gold p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-4">
                    Your Contract May Have No Attorney Review Period At All
                  </h2>
                  <p className="text-text leading-relaxed mb-4">
                    Most Illinois sellers have heard that they get five business
                    days to have a lawyer look things over. That window comes
                    from the standard contract forms used when a real estate
                    broker is involved. It is not a rule that attaches to every
                    sale.
                  </p>
                  <p className="text-text leading-relaxed">
                    A company that buys houses directly usually presents its own
                    purchase agreement. That document contains the protections
                    written into it and no others. If it does not grant you an
                    attorney review period, you do not have one, and your
                    signature is the end of the negotiation rather than the
                    beginning. This is the single most important reason to call
                    before you sign instead of after.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Send Us the Offer You Received
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {buyerQuestions.map((item) => (
                <div
                  key={item.company}
                  className="border border-border rounded-xl p-8 bg-background"
                >
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-3">
                    {item.question}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-muted leading-relaxed mt-6">
              Received an offer from a company not listed here? We review
              purchase agreements from any direct home buyer. Call{" "}
              {CONTACT.phone} and we will read it with you.
            </p>
            <div className="mt-8 rounded-xl bg-primary p-8 text-center">
              <p className="text-white text-xl md:text-2xl font-heading font-semibold mb-4">
                Call us to review it before you sign it.
              </p>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                {CONTACT.phone}
              </a>
            </div>
            <div className="mt-8">
              <ThirdPartyDisclaimer companies={NAMED_HOME_BUYERS} />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What We Check Before You Sign
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              When you bring us a cash offer, we review the entire agreement and
              walk you through it in plain English. In particular, we look at:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reviewPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              The Offer Price Is Not What You Walk Away With
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              The number on the first page is the purchase price. Your net
              proceeds are what is left after everything the contract and the
              closing statement take out. Those are different numbers, and the
              gap between them is where sellers are most often surprised.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Before you decide whether an offer is worth taking, you should
              know how each of these lands in your specific transaction:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {netProceedsItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted leading-relaxed mb-6">
              Watch the property tax language in particular. Illinois homeowner
              exemptions, including the general homestead and senior exemptions,
              reduce your tax bill. A proration clause written against the
              non-exempt amount can shift real money back to you at closing even
              when the marketing promised that the buyer covers all costs. It is
              not hidden. It is in the contract, and it is the kind of term a
              review catches.
            </p>
            <p className="text-text-muted leading-relaxed">
              You can estimate the seller side of a closing yourself with our{" "}
              <a
                href="/resources/closing-cost-calculator"
                className="text-secondary font-semibold underline hover:text-primary"
              >
                closing cost calculator
              </a>
              , then call us and we will check it against the actual agreement.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Assignment: Your Contract Can Be Sold to Somebody Else
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              When you sign a purchase agreement, you create something with
              value: the right to buy your house at the agreed price. An
              assignment clause lets the buyer sell that right to a third party,
              usually for a fee, and then step out of the deal. The person who
              actually shows up at closing may not be the company whose name is
              on the contract you signed.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Some agreements go further and grant the buyer the right to market
              the property before closing, including on the Multiple Listing
              Service. That can sit alongside marketing materials telling you
              the company does not list houses. Both can be true at once,
              because the contract controls, and the contract is the document
              that binds you.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              None of that is automatically improper, and assignment is a normal
              part of real estate. REAL Law Group represents investors and
              wholesalers on the other side of these transactions every week,
              which is exactly why we know what the paperwork does. What matters
              is that you know before you sign whether your contract can be
              assigned, whether your house can be marketed, and what happens to
              your earnest money and your closing date if it is.
            </p>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Illinois has a licensing rule about this
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Under the Real Estate License Act of 2000, amended by Public Act
                101-0357 in 2019, a person or entity that deals in contracts,
                including assignable contracts for the purchase or sale of real
                estate, meets the definition of a broker once it engages in a
                pattern of business. The statute defines that pattern as two or
                more such occasions in any 12-month period, and it counts
                occasions across affiliated individuals and entities with common
                owners rather than entity by entity. Whether that applies to a
                particular buyer depends on facts we would need to look at. It
                is a fair question to ask, and the answer can matter to you.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              You May Only Get One Chance to Fix the Contract
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Many standard Illinois residential contracts include an attorney
              review period, typically five business days, during which your
              attorney can propose changes or disapprove the deal. A cash
              buyer&apos;s own purchase agreement only contains the protections
              that are actually written into it. Do not assume a protection
              exists because it usually does.
            </p>
            <p className="text-text-muted leading-relaxed">
              The safest time to involve an attorney is before your signature
              goes on the page. If you have already signed, call us immediately:
              if your contract includes a review window, we may still be able to
              modify the terms, but that window closes fast.
            </p>
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
        heading="Is there a cash offer sitting on your kitchen table?"
        text="Call (630) 299-7600 before you sign it. We will review the contract, explain exactly what it says, and tell you what you would actually walk away with."
        buttonText="Schedule a Consultation"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/resources/for-sale-by-owner"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            For Sale By Owner Guide
          </a>
          <a
            href="/resources/inherited-property"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Inherited Property
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
