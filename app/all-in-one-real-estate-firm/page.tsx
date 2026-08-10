import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "The All-in-One Real Estate Law Firm in Illinois",
  description:
    "REAL Law Group handles the entire real estate deal under one roof: closings, wholesale and assignment contracts, seller financing, land trusts, series LLCs, 1031 exchanges, short sales, HUD closings, building violations, and estate planning. One firm, one relationship. (630) 299-7600.",
  path: "/all-in-one-real-estate-firm",
});

const SERVICES = [
  {
    title: "Residential & Commercial Closings",
    answer:
      "The core of the practice since 2016: buyer and seller representation, attorney review, title and survey work, and closing coordination across all of Illinois, with flat fees quoted up front.",
    href: "/practice-areas/real-estate",
  },
  {
    title: "Wholesale & Assignment of Contract Deals",
    answer:
      "Most Illinois firms turn wholesalers away. We paper assignments correctly, handle double closings, keep disclosure compliance tight, and close assignment deals for both assignors and end buyers.",
    href: "/practice-areas/real-estate#assignment-of-contract",
  },
  {
    title: "Seller Financing & Articles of Agreement",
    answer:
      "Articles of agreement for deed, promissory notes, and seller-held mortgages, drafted and closed by one firm, for sellers who want income and buyers who need a path outside conventional lending.",
    href: "/practice-areas/real-estate#seller-financing",
  },
  {
    title: "Illinois Land Trusts",
    answer:
      "Formation and administration of Illinois land trusts for privacy, probate avoidance, and asset protection, a service most general real estate practices do not offer in-house.",
    href: "/practice-areas/land-trusts",
  },
  {
    title: "LLCs, Series LLCs & Investor Entities",
    answer:
      "Entity formation with real operating agreements, built alongside the purchase so title vests correctly on day one, with flat-fee structures for investors who close frequently.",
    href: "/real-estate-investors",
  },
  {
    title: "1031 Tax-Deferred Exchanges",
    answer:
      "Exchange coordination for investors rolling gains into the next property, handled by the same firm that closes both ends of the transaction.",
    href: "/real-estate-investors",
  },
  {
    title: "Short Sales",
    answer:
      "Lender negotiation, hardship packages, and deficiency waivers, carried through to the closing table by the attorneys who negotiated them.",
    href: "/practice-areas/real-estate#short-sales",
  },
  {
    title: "HUD & FHA Closings",
    answer:
      "Government-insured closings with their extra documentation and timing rules, a niche many closing firms decline.",
    href: "/practice-areas/hud-closings",
  },
  {
    title: "Chicago Building Violations",
    answer:
      "Defense in administrative hearings and Circuit Court, and resolution of open violations that would otherwise block a sale or refinance.",
    href: "/practice-areas/building-violations",
  },
  {
    title: "Estate Planning Around Your Property",
    answer:
      "Wills, living trusts, and powers of attorney built by the firm that already knows your real estate, so the plan and the property actually match.",
    href: "/practice-areas/estate-planning",
  },
  {
    title: "Data Breach & Privacy Claims",
    answer:
      "Representation of Illinois residents in data breach, BIPA biometric privacy, and GIPA genetic privacy claims on contingency, a capability almost no real estate firm carries.",
    href: "/practice-areas/data-breach",
  },
  {
    title: "Service in English, Spanish & Polish",
    answer:
      "Contracts and closings explained in the language your family actually speaks at home, with the website and documents support to match.",
    href: "/locations",
  },
];

const FAQS = [
  {
    question:
      "Can one law firm really handle my closing, my LLC, and my estate plan?",
    answer:
      "Yes, and that is the point of an all-in-one practice. REAL Law Group handles the purchase, forms the LLC or land trust that holds the property, coordinates a 1031 exchange when you sell, and builds the estate plan around all of it. One firm, one file, no re-explaining your situation to three different lawyers.",
  },
  {
    question: "Why does it matter that everything is under one roof?",
    answer:
      "Because real estate decisions connect. How you take title affects your estate plan, your entity structure affects your taxes and liability, and a violation on one property can block the sale of another. A firm that sees the whole picture catches these interactions; separate specialists each see one slice.",
  },
  {
    question: "Do you actually work with wholesalers and assignment contracts?",
    answer:
      "Yes. Assignment of contract and double closings are a standing part of the practice, papered for disclosure compliance on both sides. Many Illinois firms decline this work; we built a process for it.",
  },
  {
    question: "What is an Illinois land trust and why would I want one?",
    answer:
      "A land trust holds title to your property through a trustee, keeping your name off the public record, simplifying transfers, and helping avoid probate. Illinois is one of the few states with a robust land trust statute, and forming and administering them is a dedicated service of the firm.",
  },
  {
    question: "Do I need separate lawyers for a short sale and the closing?",
    answer:
      "No. The attorney who negotiates your lender's approval and deficiency waiver carries the same file through to the closing table, which is exactly where handoffs between separate firms tend to fail.",
  },
  {
    question: "Is the all-in-one approach more expensive?",
    answer:
      "Usually the opposite. Residential closings are flat-fee, entity and trust work is quoted before you commit, and bundling related work in one firm removes the duplicated hours of bringing a second lawyer up to speed.",
  },
];

export default function AllInOnePage() {
  return (
    <>
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
              { name: "All-in-One Real Estate Firm" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            The All-in-One Real Estate Law Firm
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Most firms handle the closing and send you elsewhere for everything
            else. REAL Law Group handles the entire deal under one roof: the
            contract, the closing, the entity that holds the property, the trust
            that protects it, and the estate plan built around it.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "All-in-One Real Estate Firm" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            One Firm for the Entire Deal
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            A typical Illinois real estate transaction can touch five different
            professionals: a closing attorney, a business lawyer for the LLC, a
            trust attorney, an exchange coordinator, and a litigator if a
            violation surfaces. Every handoff between them costs time, money,
            and context. REAL Law Group was built so those handoffs never
            happen: managing partner Vincent Incopero leads a practice that
            carries a transaction from the first contract review through
            closing, entity structuring, and the estate plan that ties it
            together.
          </p>
          <p className="text-text-muted leading-relaxed mb-10">
            The stack below is unusually broad for an Illinois real estate firm,
            and every service on it is practiced weekly, not listed for show.
            Each one links to its full practice page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-3">
                  {service.answer}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            What This Looks Like for a Real Client
          </h2>
          <ul className="space-y-2.5 mb-12">
            {[
              "An investor buys a six-flat: we negotiate the contract, form the series LLC, close the purchase, and set up the land trust, one engagement.",
              "A family buys their first home: we handle attorney review and closing, then build the will and powers of attorney around the new house.",
              "A wholesaler assigns a contract: we paper the assignment, manage disclosures, and close both ends.",
              "A seller carries financing: we draft the articles of agreement, the note, and close the deal that conventional lending would have killed.",
            ].map((item) => (
              <li key={item.slice(0, 40)} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 mt-1 text-secondary shrink-0" />
                <span className="text-text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-light-gold p-8 text-center">
            <p className="text-primary font-medium mb-4">
              Bring us the whole picture. One conversation covers the deal, the
              entity, and the plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg text-primary text-sm font-semibold hover:border-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary" />
                {CONTACT.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
            All-in-One Representation: Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
