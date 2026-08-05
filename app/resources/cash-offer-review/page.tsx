import { CheckCircle, Phone } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Cash Home Buyer Offer Review in Illinois",
  description:
    "Did you get an offer from Grandview Homes, Kendall Partners, or Big Door Home Buyers? Have an Illinois real estate attorney review the contract before you sign it. Call (630) 299-7600.",
  path: "/resources/cash-offer-review",
});

const buyerQuestions = [
  {
    company: "Grandview Homes",
    question: "Did you get an offer from Grandview Homes?",
    note: "If Grandview Homes has sent you a written cash offer for your house, have an attorney read the full purchase agreement before you sign anything.",
  },
  {
    company: "Kendall Partners",
    question: "Did you get an offer from Kendall Partners?",
    note: "If Kendall Partners has made you an offer, the contract behind it was prepared by the buyer. Know exactly what it says before you commit.",
  },
  {
    company: "Big Door Home Buyers",
    question: "Did you get an offer from Big Door Home Buyers?",
    note: "If Big Door Home Buyers has offered to purchase your home, an attorney review tells you what you are agreeing to and what you will actually walk away with.",
  },
];

const reviewPoints = [
  "The purchase price versus your actual net proceeds at closing",
  "Assignment clauses that let the buyer transfer your contract to someone else",
  "Inspection terms and who has the right to cancel, and when",
  "Earnest money: how much is deposited and who holds it",
  "As-is language, repair credits, and post-inspection renegotiation",
  "The closing date, possession terms, and any leaseback provisions",
  "Fees, credits, and deductions taken out at the closing table",
  "Whether the contract includes an attorney review and modification period",
];

const faqs = [
  {
    question: "Is it a bad idea to sell my house to a cash home buyer?",
    answer:
      "Not necessarily. Selling to a cash buyer is a legitimate option, and for some sellers the speed and convenience are worth it. The key is understanding exactly what the contract says, what you will net after every deduction, and whether the terms are fair before you are legally bound by them.",
  },
  {
    question: "What should I look for in a cash offer contract?",
    answer:
      "Pay close attention to the net amount you will receive after all fees and credits, any clause that lets the buyer assign the contract to another party, the earnest money terms, who can cancel and under what conditions, and the closing timeline. These contracts are prepared by the buyer, so the default terms tend to favor the buyer.",
  },
  {
    question: "How much does it cost to have an attorney review a cash offer?",
    answer:
      "We handle residential contract review on a flat-fee basis, and the initial phone call is free. Call (630) 299-7600 and we will explain the process and the cost before you commit to anything.",
  },
  {
    question: "What if I already signed the contract?",
    answer:
      "Call us right away. Many Illinois residential contracts include an attorney review period, typically five business days, during which your attorney can propose modifications or disapprove the contract. Whether you have that window depends on the language in your specific contract, so time matters.",
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
            <div className="space-y-6">
              {buyerQuestions.map((item) => (
                <div
                  key={item.company}
                  className="border border-border rounded-xl p-8 bg-background"
                >
                  <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-3">
                    {item.question}
                  </h2>
                  <p className="text-text-muted leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
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
