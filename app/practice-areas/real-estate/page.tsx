import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Real Estate Closing Attorney — Elmhurst & Chicago",
  description:
    "Expert real estate attorneys handling residential and commercial transactions, closings, contract negotiation, short sales, and more in Chicagoland. Call (630) 299-7600 for a free consultation.",
  path: "/practice-areas/real-estate",
});

const residentialServices = [
  "Closings (Sales & Purchases)",
  "Quit Claim Deeds",
  "Certificate of Zoning",
  "Water Certification (Full Payment Certificate)",
  "Transfer Stamps",
  "Condominium Development & Conversion",
  "Formation & Operation of Condo/HOA",
  "Foreclosure & REO",
  "Short Sales",
  "Contract Negotiation & Review",
];

const commercialServices = [
  "Closings (Sales & Purchases)",
  "Building Registration",
  "Review & Negotiation of Financial & Loan Documents",
  "Transaction Negotiation",
  "Contract Drafting",
  "Leasing",
  "Tax Deferred Exchanges (1031 Exchanges)",
  "Joint Ventures",
];

const closingCategories = [
  {
    id: "buyers",
    title: "Buyers",
    intro:
      "Buying a home or investment property is one of the largest transactions most people ever make. We represent buyers from the signed contract through the closing table, making sure the deal you agreed to is the deal you actually get.",
    points: [
      "Attorney review & contract modifications",
      "Negotiating inspection repairs & credits",
      "Title, survey & lien review",
      "Mortgage & closing document review",
      "Closing coordination with lender, title & agent",
      "Final walk-through issue resolution",
    ],
  },
  {
    id: "sellers",
    title: "Sellers",
    intro:
      "When you sell, our job is to get you to a clean, on-time closing with your proceeds protected. We handle the legal side so you and your agent can focus on the sale itself — and we also support For Sale By Owner sellers who don't have an agent.",
    points: [
      "Contract preparation & attorney review",
      "Responding to inspection & repair demands",
      "Payoff letters & clearing title issues",
      "Transfer stamps & municipal requirements",
      "Deed preparation & closing documents",
      "For Sale By Owner (FSBO) representation",
    ],
  },
  {
    id: "short-sales",
    title: "Short Sales",
    intro:
      "If you owe more than your home is worth, a short sale can be an alternative to foreclosure. We negotiate directly with your lender and manage the approval process from hardship package to closing.",
    points: [
      "Lender negotiation & short sale approval",
      "Hardship package preparation",
      "Negotiating deficiency waiver language",
      "Coordinating multiple lienholders",
      "Realistic timelines & foreclosure defense coordination",
    ],
  },
  {
    id: "assignment-of-contract",
    title: "Assignment of Contract",
    intro:
      "Wholesalers and investors assigning purchase contracts need paperwork that actually holds up. We draft and review assignment agreements, confirm the underlying contract is assignable, and structure the closing so every party's position is protected.",
    points: [
      "Drafting & reviewing assignment agreements",
      "Assignability & contract language review",
      "Assignment fees & earnest money handling",
      "Double closings when assignment isn't an option",
      "Disclosure compliance for assignors & end buyers",
    ],
  },
  {
    id: "seller-financing",
    title: "Seller Financing",
    intro:
      "Seller financing can open a sale to more buyers and generate income for the seller — but only if it's documented correctly. We structure and paper installment sales and seller-held mortgages for both sides of the deal.",
    points: [
      "Articles of agreement for deed (installment contracts)",
      "Promissory notes & seller-held mortgages",
      "Down payments, interest & balloon terms",
      "Recording & escrow of deed",
      "Default remedies & compliance considerations",
    ],
  },
];

const faqs = [
  {
    question:
      "Do I need a real estate attorney for a home purchase in Illinois?",
    answer:
      "While Illinois does not legally require an attorney for real estate transactions, it is strongly recommended. An attorney reviews contracts, negotiates terms, resolves title issues, and ensures your interests are protected from contract through closing. Most transactions in the Chicago area involve attorneys on both sides.",
  },
  {
    question: "What does a real estate attorney do at closing?",
    answer:
      "Your attorney reviews all closing documents including the settlement statement, deed, mortgage documents, and title commitment. They ensure all financial figures are accurate, resolve any last-minute issues, and make sure the transaction is properly recorded with the county.",
  },
  {
    question: "How much does a real estate attorney cost in Illinois?",
    answer:
      "Fees vary depending on the complexity of the transaction. REAL Law Group provides transparent, competitive pricing. Contact us for a quote specific to your transaction — we are happy to discuss fees upfront during a consultation.",
  },
  {
    question: "What is a 1031 exchange and how does it work?",
    answer:
      "A 1031 exchange (tax-deferred exchange) allows you to defer capital gains taxes when selling an investment property by reinvesting the proceeds into a like-kind property. Strict timelines and rules apply — you have 45 days to identify replacement properties and 180 days to close. Our team guides clients through every step.",
  },
  {
    question:
      "What is the difference between a quit claim deed and a warranty deed?",
    answer:
      "A warranty deed guarantees the seller holds clear title and has the right to sell. A quit claim deed transfers whatever interest the seller has — with no guarantees. Quit claim deeds are common for family transfers, divorces, and moving property into trusts, but they carry more risk for buyers.",
  },
];

export default function RealEstatePage() {
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
              { name: "Real Estate Closings" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Real Estate Closings
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Real Estate Closings" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Residential Real Estate
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              We serve the residential real estate needs of clients located in
              Northern Illinois. From contract through the closing, we protect
              our clients&apos; interests while helping them understand the
              business, tax, and legal implications pertaining to their real
              estate transaction. As creative thinkers and problem solvers, we
              seek to secure the prosperity of our client&apos;s real estate
              investment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {residentialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Commercial Real Estate
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              We provide counsel to established businesses and start-up
              ventures. Since we have finance and business backgrounds, we have
              the knowledge to analyze commercial real estate transactions for
              our clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commercialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {closingCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="mb-16 scroll-mt-32"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
                {category.title}
              </h2>
              <div className="w-12 h-1 bg-secondary mb-8" />
              <p className="text-text-muted leading-relaxed mb-8">
                {category.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

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
        heading="Need help with a real estate transaction?"
        text="Our team is ready to guide you from contract to closing."
        buttonText="Contact Us Today"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Related Practice Areas
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Real Estate Investors
            </a>
            <a
              href="/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Land Trusts
            </a>
            <a
              href="/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Estate Planning
            </a>
            <a
              href="/practice-areas/hud-closings"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              HUD Closings
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
              href="/resources/title-insurance-faq"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Title Insurance FAQ
            </a>
            <a
              href="/resources/prevent-wire-fraud"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prevent Wire Fraud
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
