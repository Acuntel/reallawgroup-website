import { CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Earnest Money Deposit FAQs for Illinois Buyers",
  description:
    "Earnest money FAQs from REAL Law Group: how earnest money works, when it is refundable, and when it is forfeited. Call (630) 299-7600 for a free consultation.",
  path: "/emd",
});

const refundReasons = [
  {
    title: "During the attorney review period",
    description:
      "Residential contracts generally include an attorney review period. Either party can cancel during this contingency.",
  },
  {
    title: "During home inspection",
    description:
      "If the parties cannot agree on the inspection response, the buyer can terminate under the inspection contingency.",
  },
  {
    title: "Financing contingency (mortgage denial)",
    description:
      "When a buyer is unable to secure a written mortgage commitment, the financing contingency protects the deposit.",
  },
  {
    title: "Title defects",
    description:
      "If the title cannot be cleared as required under the contract, the buyer can cancel the contract.",
  },
];

const forfeitReasons = [
  {
    title: "Canceling after contingencies have expired",
    description:
      "Once all contingencies have been satisfied, cancellation without a contractual basis generally entitles the seller to keep the earnest money as liquidated damages.",
  },
];

const faqs = [
  {
    question: "How much earnest money should I put down in Chicagoland?",
    answer:
      "In the Chicago metropolitan area, earnest money deposits typically range from 1% to 3% of the purchase price. On a $350,000 home, that means $3,500 to $10,500. In competitive neighborhoods or multiple-offer situations, buyers sometimes offer more to demonstrate stronger commitment. Your real estate attorney can advise on an appropriate amount based on the specific market and property.",
  },
  {
    question: "Who holds the earnest money deposit?",
    answer:
      "Earnest money is typically held in escrow by the listing agent or the title company. The funds remain in escrow and are not released until closing or until both parties agree to a disbursement.",
  },
  {
    question: "When is the earnest money deposit due?",
    answer:
      "The earnest money deposit is typically due within one to three days after the contract is accepted. The deadline is generally written into the purchase contract.",
  },
  {
    question: "Is earnest money the same as a down payment?",
    answer:
      "No, but they are related. The earnest money deposit is a good-faith payment made when the contract is signed. At closing, it is typically credited toward the buyer's down payment and closing costs. If the deal falls through, the earnest money is handled according to the contract terms.",
  },
  {
    question:
      "What happens if there is a dispute over the earnest money deposit?",
    answer:
      "Earnest money disputes are not uncommon in real estate transactions. If the buyer and seller disagree on who is entitled to the deposit, the escrow holder cannot release the funds until both parties agree or a court orders the disbursement. In many cases, the attorneys for each side negotiate a resolution. If no agreement is reached, the matter may require mediation or litigation to resolve.",
  },
];

export default function EarnestMoneyFAQsPage() {
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
              { name: "Earnest Money FAQs" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Earnest Money FAQs
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            How good-faith deposits work in real estate transactions.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Earnest Money FAQs" }]}
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
              An earnest money deposit — commonly referred to as EMD — is a
              good-faith payment made by a buyer when they enter into a contract
              to purchase real property. The deposit signals to the seller that
              the buyer is serious about completing the transaction.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Earnest money deposits are a standard part of residential real
              estate transactions. The typical deposit ranges from 1% to 3% of
              the purchase price, though the amount is negotiable. On a $400,000
              home, that translates to a deposit of $4,000 to $12,000.
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
              How Earnest Money Works
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="bg-light-gold rounded-xl p-8">
              <div className="space-y-6">
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    When It&apos;s Paid
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    The earnest money deposit is typically due 1-3 days after
                    the contract is accepted. The deadline is generally written
                    into the purchase contract. The deposit is usually made by
                    wire transfer.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Who Holds It
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Earnest money is held in escrow by the listing agent or the
                    title company. The funds are not accessible to either party
                    until the transaction closes or both sides agree to a
                    release.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    At Closing
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    When the transaction closes successfully, the earnest money
                    is applied as a credit toward the buyer&apos;s total amount
                    due at closing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When Refundable */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              When Your Earnest Money Is Refundable
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Purchase contracts typically include contingencies that protect
              the buyer&apos;s earnest money.
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

          {/* When Forfeited */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              When You Might Lose Your Earnest Money
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
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
              The right amount depends on the local market, the property, and
              how competitive you want your offer to be. In Chicagoland, the
              standard range is 1% to 3% of the purchase price.
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
              A larger earnest money deposit can make your offer stand out in a
              competitive situation, but it also means more money is at risk if
              the deal falls apart outside of a contingency. Your attorney at
              REAL Law Group can help you determine an amount that strengthens
              your offer while keeping your risk manageable.
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
        text="REAL Law Group represents buyers and sellers throughout Chicagoland real estate transactions. Call (630) 299-7600 or schedule a consultation."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
