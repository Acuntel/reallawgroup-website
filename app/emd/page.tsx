import { Metadata } from "next";
import { CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Earnest Money Deposits",
  description:
    "Learn how earnest money deposits work in Illinois real estate transactions. REAL Law Group explains EMD amounts, refund conditions, and how to protect your deposit.",
  openGraph: {
    title: "Earnest Money Deposits in Illinois | REAL Law Group",
    description:
      "Understand earnest money deposits in Illinois — typical amounts, when you get it back, and how to protect your good faith deposit.",
    url: "/emd",
  },
};

const refundReasons = [
  {
    title: "During the attorney review period",
    description:
      "Illinois residential contracts include a five-business-day attorney review period. Either party can cancel the contract during this window, and the buyer receives a full refund of their earnest money.",
  },
  {
    title: "Failed home inspection contingency",
    description:
      "If the home inspection reveals material defects and the buyer and seller cannot agree on repairs or credits, the buyer can terminate the contract and recover their deposit under the inspection contingency.",
  },
  {
    title: "Financing contingency (mortgage denial)",
    description:
      "When a buyer is unable to secure mortgage financing despite a good faith effort, the financing contingency protects the deposit. The buyer must provide documentation of the denial to receive a refund.",
  },
  {
    title: "Title defects discovered during title search",
    description:
      "If the title search reveals liens, encumbrances, or ownership disputes that the seller cannot resolve, the buyer can cancel the contract and reclaim their earnest money.",
  },
  {
    title: "Seller fails to meet contractual obligations",
    description:
      "If the seller breaches the contract — for example, by failing to make agreed-upon repairs, missing deadlines, or being unable to deliver clear title — the buyer is entitled to a refund of the earnest money deposit.",
  },
];

const forfeitReasons = [
  {
    title: "Backing out after contingencies expire",
    description:
      "Once all contingency periods have passed and the contract is fully binding, walking away from the deal without a contractual basis means the seller is typically entitled to keep the earnest money as liquidated damages.",
  },
  {
    title: "Missing contractual deadlines",
    description:
      "Failing to meet deadlines outlined in the contract — such as providing mortgage commitment letters or completing inspections within the specified timeframe — can put your deposit at risk.",
  },
  {
    title: "Failing to secure financing after waiving contingency",
    description:
      "If a buyer waives the financing contingency to make their offer more competitive and then cannot obtain a mortgage, the seller may have grounds to retain the earnest money deposit.",
  },
];

const faqs = [
  {
    question: "How much earnest money should I put down in Chicagoland?",
    answer:
      "In the Chicago metropolitan area, earnest money deposits typically range from 1% to 3% of the purchase price. On a $350,000 home, that means $3,500 to $10,500. In highly competitive neighborhoods or multiple-offer situations, buyers sometimes offer more to demonstrate stronger commitment. Your real estate attorney can advise on an appropriate amount based on the specific market and property.",
  },
  {
    question: "Who holds the earnest money deposit in Illinois?",
    answer:
      "In Illinois, the earnest money is typically held in escrow by the seller's attorney or a title company. The funds are deposited into a dedicated escrow account and are not released to either party until closing or until both parties agree to a disbursement. This arrangement protects both the buyer and seller during the transaction.",
  },
  {
    question: "When is the earnest money deposit due?",
    answer:
      "The earnest money deposit is usually due within a few days of the seller accepting the buyer's offer — the exact timeline is specified in the purchase contract. In most Chicagoland transactions, the deposit is delivered within one to three business days of contract acceptance, often before the attorney review period begins.",
  },
  {
    question: "Is earnest money the same as a down payment?",
    answer:
      "No, but they are related. The earnest money deposit is a good faith payment made when the contract is signed to show the buyer is serious. At closing, the earnest money is typically credited toward the buyer's down payment and closing costs. If the deal falls through, the earnest money is handled according to the contract terms — it may be refunded or forfeited depending on the circumstances.",
  },
  {
    question:
      "What happens if there is a dispute over the earnest money deposit?",
    answer:
      "Earnest money disputes are not uncommon in Illinois real estate transactions. If the buyer and seller disagree on who is entitled to the deposit, the escrow holder cannot release the funds until both parties agree or a court orders the disbursement. In many cases, the attorneys for each side negotiate a resolution. If no agreement is reached, the matter may require mediation or litigation to resolve.",
  },
];

export default function EarnestMoneyDepositPage() {
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
              { name: "Earnest Money Deposits" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Earnest Money Deposits
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            How good faith deposits work in Illinois real estate transactions.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Earnest Money Deposits" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What Is an Earnest Money Deposit?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              An earnest money deposit — commonly referred to as EMD — is a good
              faith payment made by a buyer when they enter into a contract to
              purchase real property. The deposit signals to the seller that the
              buyer is serious about completing the transaction and is willing
              to put money on the line to prove it.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              In Illinois, earnest money deposits are a standard part of
              residential real estate transactions. The typical deposit ranges
              from 1% to 3% of the purchase price, though the amount is
              negotiable between the parties. On a $400,000 home in Chicagoland,
              that translates to a deposit of $4,000 to $12,000.
            </p>
            <p className="text-text-muted leading-relaxed">
              The earnest money is held in escrow throughout the transaction and
              is credited toward the buyer&apos;s down payment and closing costs
              at closing. If the deal falls through, whether the buyer gets the
              money back depends on the contract terms and the reason the
              transaction did not close.
            </p>
          </div>

          {/* How EMD Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              How Earnest Money Works in Illinois
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="bg-light-gold rounded-xl p-8">
              <div className="space-y-6">
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    When It&apos;s Paid
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    The earnest money deposit is typically due within one to
                    three business days after the seller accepts the
                    buyer&apos;s offer. The exact deadline is written into the
                    purchase contract. The deposit is usually made by personal
                    check or certified funds.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Who Holds It
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    In Illinois, the earnest money is held in escrow by the
                    seller&apos;s attorney or a title company. The funds sit in
                    a dedicated trust account and are not accessible to either
                    party until the transaction closes or both sides agree to a
                    release. This protects the buyer from a seller spending the
                    deposit prematurely and protects the seller by ensuring the
                    funds are secured.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    At Closing
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    When the transaction closes successfully, the earnest money
                    is applied as a credit toward the buyer&apos;s total amount
                    due at closing. It reduces the cash the buyer needs to bring
                    to the closing table.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When You Can Get EMD Back */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              When You Can Get Your Earnest Money Back
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Illinois purchase contracts include several contingencies that
              protect a buyer&apos;s earnest money deposit. If any of these
              contingencies are properly invoked, the buyer is entitled to a
              full refund:
            </p>
            <div className="space-y-4">
              {refundReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When You Might Lose EMD */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              When You Might Lose Your Earnest Money
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              There are circumstances where a buyer&apos;s earnest money deposit
              is at risk. Understanding these situations helps you avoid costly
              mistakes:
            </p>
            <div className="space-y-4">
              {forfeitReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Much */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              How Much Earnest Money Should You Put Down?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              The right amount of earnest money depends on the local market, the
              property, and how competitive you want your offer to be. In
              Chicagoland, the standard range is 1% to 3% of the purchase price.
              Here is a general guideline:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  1%
                </p>
                <p className="text-sm text-text-muted">
                  Lower end — common for slower markets or when there is less
                  competition
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  1-3%
                </p>
                <p className="text-sm text-text-muted">
                  Standard range — typical for most transactions in the Chicago
                  suburbs
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  3%+
                </p>
                <p className="text-sm text-text-muted">
                  Competitive markets — multiple offers, hot neighborhoods, or
                  desirable properties
                </p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              Putting down a larger earnest money deposit can make your offer
              stand out in a competitive situation, but it also means more money
              is at risk if the deal falls apart outside of a contingency. Your
              attorney at REAL Law Group can help you determine an amount that
              strengthens your offer while keeping your risk manageable.
            </p>
          </div>

          {/* FAQs */}
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
        heading="Questions about earnest money? Contact us."
        text="REAL Law Group protects buyers and sellers throughout Chicagoland real estate transactions. Call (630) 299-7600 or schedule a consultation."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
