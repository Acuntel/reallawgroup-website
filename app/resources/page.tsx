import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ResourceCard from "@/components/cards/ResourceCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Resources & Guides",
  description:
    "Legal resources and guides from REAL Law Group covering wire fraud prevention, quit claim deeds, data breach prevention, and title insurance. Call (630) 299-7600 for a free consultation.",
  path: "/resources",
});

const resources = [
  {
    title: "Choosing the Best Real Estate Attorney",
    excerpt:
      "The six criteria that separate the best Illinois real estate lawyers from the rest, the questions to ask before hiring, and the red flags to avoid.",
    href: "/resources/best-real-estate-attorney-illinois",
  },
  {
    title: "How Much Does a Real Estate Attorney Cost in Illinois?",
    excerpt:
      "What Illinois closing attorneys charge, what the flat fee covers, what is billed separately by the title company and the county, and what pushes a quote higher.",
    href: "/resources/real-estate-attorney-cost-illinois",
  },
  {
    title: "Closing Cost Calculator",
    excerpt:
      "Estimate your buyer or seller closing costs for Chicagoland real estate transactions with our interactive calculator.",
    href: "/resources/closing-cost-calculator",
  },
  {
    title: "For Sale By Owner",
    excerpt:
      "Selling your home without an agent? Learn why FSBO sellers in Illinois still need a real estate attorney.",
    href: "/resources/for-sale-by-owner",
  },
  {
    title: "Cash Offer Review",
    excerpt:
      "Did you get an offer from Grandview Homes, Kendall Partners, Direct Property Aid, or another company that buys homes directly? Have an attorney review it before you sign it.",
    href: "/resources/cash-offer-review",
  },
  {
    title: "Inherited Property Guide",
    excerpt:
      "Lost a loved one and inherited property? Understand your options for probate, selling, or keeping an inherited home in Illinois.",
    href: "/resources/inherited-property",
  },
  {
    title: "Earnest Money FAQs",
    excerpt:
      "What is earnest money, how much should you put down, and when can you get it back? Everything Illinois buyers need to know.",
    href: "/emd",
  },
  {
    title: "Transfer Stamps",
    excerpt:
      "View transfer stamp tax ordinances and rates for municipalities across the Chicago area.",
    href: "/resources/transfer-stamps",
  },
  {
    title: "Real Estate Contract & Disclosures",
    excerpt:
      "Download the standard Chicagoland forms — Multi-Board Contract 8.0, Illinois Property Disclosure, Radon Disclosure, and Lead-Based Paint Disclosure.",
    href: "/resources/real-estate-contract",
  },
  {
    title: "Prevent Wire Fraud",
    excerpt:
      "Learn how to protect yourself from wire fraud during real estate transactions with these essential tips.",
    href: "/resources/prevent-wire-fraud",
  },
  {
    title: "Quit Claim Deeds",
    excerpt:
      "Everything you need to know about quit claim deeds, including when and how they are used.",
    href: "/resources/quit-claim-deeds-illinois",
  },
  {
    title: "Real Estate Investors",
    excerpt:
      "Legal support for investors buying, selling, and holding Chicagoland real estate — acquisitions, entity formation, title, and closings.",
    href: "/real-estate-investors",
  },
  {
    title: "Data Breach Letter Guide",
    excerpt:
      "Received a data breach notification letter? The seven steps Illinois residents should take now — and the legal rights Illinois law gives you.",
    href: "/resources/data-breach-notification-letter",
  },
  {
    title: "Data Breach Prevention",
    excerpt:
      "Essential strategies to protect your personal and business data from increasingly sophisticated cyber threats.",
    href: "/resources/data-breach-prevention",
  },
  {
    title: "Title Insurance FAQ",
    excerpt:
      "Common questions about title insurance answered, including what it covers and why it matters.",
    href: "/resources/title-insurance-faq",
  },
  {
    title: "Illinois E-Bike Law: What Changes January 1, 2027",
    excerpt:
      "Public Act 104-0854 sets new minimum riding ages of 15 and 16, keeps e-bikes and scooters off sidewalks, and requires a license, title, and insurance for machines over 750 watts. What the enacted law actually says, and why the bill in the news never passed.",
    href: "/resources/illinois-e-bike-law",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Resources &amp; Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Helpful information and guides from our legal team.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <ResourceCard key={i} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
