import Link from "next/link";
import { Phone, Receipt, AlertTriangle, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT } from "@/lib/constants";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "How Much Does a Real Estate Attorney Cost in Illinois?",
  description:
    "Most Illinois residential closings are handled on a flat fee, commonly a few hundred to roughly a thousand dollars. What the fee covers, what is billed separately, what drives it up, and how attorney fees differ from closing costs.",
  path: "/resources/real-estate-attorney-cost-illinois",
});

const INCLUDED = [
  "Reviewing the purchase contract and proposing modifications during the attorney review period.",
  "Negotiating inspection issues and credits with the other side's attorney.",
  "Reviewing the title commitment and clearing exceptions before closing.",
  "Preparing or reviewing the deed, transfer declarations, and closing statement.",
  "Coordinating with the lender, title company, and realtors through the closing date.",
  "Attending or facilitating the closing and confirming the deed is recorded.",
];

const SEPARATE = [
  {
    label: "Title insurance and settlement fees",
    body: "Paid to the title company, not the attorney. In Illinois the seller customarily pays for the owner's title policy on residential deals.",
  },
  {
    label: "State, county, and municipal transfer stamps",
    body: "Illinois charges a state and county transfer tax, and many municipalities add their own stamp with its own inspection or zoning requirement. Chicago's is among the higher ones in the state.",
  },
  {
    label: "Recording fees",
    body: "Charged by the county recorder to put the deed and mortgage on record. These vary by county.",
  },
  {
    label: "Survey, inspection, and lender charges",
    body: "Ordered from third parties. A lender's origination and appraisal charges appear on your loan estimate, not in the attorney's fee.",
  },
];

const DRIVERS = [
  {
    title: "Transaction type",
    body: "A straightforward single-family purchase sits at the low end. Investor work such as an assignment of contract, a double closing, seller financing, or a 1031 exchange takes more drafting and coordination and is priced by scope.",
  },
  {
    title: "Title problems",
    body: "A clean title commitment moves fast. Liens, judgments, a deceased owner in the chain, an old unreleased mortgage, or a boundary issue all add work that a routine flat fee does not contemplate.",
  },
  {
    title: "Distressed transactions",
    body: "Short sales require lender approval and months of follow-up, so they are quoted differently than a standard sale. Probate and inherited property closings often need an estate opened first.",
  },
  {
    title: "Entity and structuring work",
    body: "If the property is taking title in an LLC, a land trust, or a series LLC, forming and papering that entity is separate work from the closing itself.",
  },
  {
    title: "Municipal requirements",
    body: "Some Illinois municipalities require a pre-sale inspection, a zoning certificate, or an outstanding-violation search before they will issue a transfer stamp. Chicago building code violations in particular have to be resolved before a property can transfer.",
  },
];

const FAQS = [
  {
    question: "How much does a real estate attorney cost in Illinois?",
    answer:
      "Most Illinois residential closings are handled on a flat fee rather than hourly, commonly ranging from a few hundred dollars to roughly a thousand depending on the county and the complexity of the deal. Commercial transactions and investor work such as assignments, double closings, and 1031 exchanges are quoted by scope. Attorney fees are a small fraction of total closing costs, which are dominated by title insurance, transfer stamps, lender charges, and prorated taxes.",
  },
  {
    question: "Is the attorney fee the same as closing costs?",
    answer:
      "No. The attorney fee is one line item within your closing costs. Closing costs also include title insurance and settlement charges, state, county, and municipal transfer stamps, recording fees, lender origination and appraisal charges, prorated property taxes, and any survey or inspection you ordered. On a typical Illinois residential purchase the attorney fee is one of the smaller entries on the statement.",
  },
  {
    question: "Do buyers and sellers both pay an attorney in Illinois?",
    answer:
      "Yes, each side retains its own attorney. Buyer-side and seller-side fees are usually in the same general range, though the work differs. The buyer's attorney focuses on contract review, title, and loan documents, while the seller's attorney prepares the deed and transfer declarations and clears title requirements.",
  },
  {
    question: "Do I legally need a real estate attorney in Illinois?",
    answer:
      "Illinois does not require one by statute, but in the Chicago area attorney representation is the near-universal norm, and the standard Multi-Board contract is built around an attorney review period of about five business days. Sellers practically need one regardless, because a deed and transfer declarations have to be prepared correctly for the county to record the transfer.",
  },
  {
    question: "When do I pay the attorney fee?",
    answer:
      "In a typical Illinois residential closing the attorney fee is paid at closing out of the settlement statement rather than up front, so it comes out of proceeds for a seller or is brought to the table with the buyer's other closing funds.",
  },
  {
    question: "Is a cheaper flat fee a red flag?",
    answer:
      "Not by itself, but price is a poor way to choose. What matters more is closing volume in your county, how fast the firm responds during the five-day attorney review window, and whether the attorney you hire is the one who will actually handle your file. A very low quote that excludes title clearance or municipal transfer stamp work can cost more in the end than a slightly higher all-in fee.",
  },
];

export default function RealEstateAttorneyCostIllinois() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: "How Much Does a Real Estate Attorney Cost in Illinois?",
              description:
                "What Illinois real estate attorneys charge for residential and investor closings, what the flat fee covers, what is billed separately, and how attorney fees differ from closing costs.",
              path: "/resources/real-estate-attorney-cost-illinois",
              datePublished: "2026-08-10",
              dateModified: "2026-08-10",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: "Real Estate Attorney Cost in Illinois" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How Much Does a Real Estate Attorney Cost in Illinois?
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Most Illinois residential closings are handled on a flat fee rather
            than hourly, commonly a few hundred dollars to roughly a thousand
            depending on county and complexity. Investor and commercial work is
            quoted by scope. The attorney fee is one of the smaller line items
            in your closing costs, well behind title insurance, transfer stamps,
            and lender charges.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Real Estate Attorney Cost in Illinois" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            What a Residential Flat Fee Normally Covers
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            The reason most Illinois closing attorneys quote a flat fee is that
            a standard residential transaction follows a predictable path. A
            typical engagement covers the work from contract through recorded
            deed.
          </p>
          <ul className="space-y-3 mb-14">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Receipt className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            What Is Not in the Attorney Fee
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            This is where most confusion about cost comes from. These charges
            appear on your closing statement but are paid to third parties, not
            to your lawyer.
          </p>
          <div className="space-y-5 mb-14">
            {SEPARATE.map((item) => (
              <div key={item.label}>
                <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                  {item.label}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            What Moves the Price Up
          </h2>
          <div className="space-y-5 mb-14">
            {DRIVERS.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-secondary bg-light-gold p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                Ask any firm what is excluded before you engage them. A quote
                that covers only contract review, leaving title clearance and
                municipal transfer stamp work to be billed later, is not
                comparable to an all-in fee even when the headline number looks
                lower.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Estimate Your Total Closing Costs
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Because the attorney fee is only one entry on the statement, the
            more useful number is your total cash to close. Our calculator
            estimates Illinois closing costs including transfer stamps and title
            charges.
          </p>
          <Link
            href="/resources/closing-cost-calculator"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline mb-14"
          >
            Open the Illinois closing cost calculator
            <ArrowRight className="w-4 h-4" />
          </Link>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-14 bg-light-gold rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-3">
              Get a quote for your transaction
            </h2>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Tell us the property and the type of deal and we will quote the
              fee before you engage us. Consultations are free, in English,
              Spanish, or Polish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT.phoneHref}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
              <Link
                href="/contact"
                className="btn-navy inline-flex items-center justify-center"
              >
                Contact the Firm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
