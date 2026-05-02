import { FileText, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

const CONTRACT_PDF_URL =
  "https://chicagorealtor.com/wp-content/uploads/wp-private-media/2025/01/8.0-Multi-Board-Residential-Contract.pdf";

const ARTICLE_META = {
  title: "Multi-Board Residential Real Estate Contract (Illinois)",
  description:
    "Overview of the Multi-Board Residential Real Estate Contract used across Chicagoland transactions, including how REAL Law Group helps clients review, negotiate, and close under this contract.",
  path: "/resources/real-estate-contract",
};

export const metadata = generatePageMetadata({
  title: "Multi-Board Residential Real Estate Contract",
  description:
    "Access the current Multi-Board Residential Real Estate Contract used across Chicagoland real estate transactions. REAL Law Group can help you review, negotiate, and close using this contract.",
  path: "/resources/real-estate-contract",
});

export default function RealEstateContractPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(ARTICLE_META)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: "Real Estate Contract" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Real Estate Contract
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            The Multi-Board Residential Real Estate Contract used in Chicagoland
            transactions.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Real Estate Contract" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-10">
            <p className="text-text-muted leading-relaxed mb-6">
              The Multi-Board Residential Real Estate Contract is the standard
              contract used for most residential real estate transactions in the
              Chicago area. It is jointly approved by several Chicagoland
              REALTOR® boards and bar associations.
            </p>
            <p className="text-text-muted leading-relaxed">
              Download the most recent version directly from the Chicago
              Association of REALTORS® below.
            </p>
          </div>

          <div className="bg-light-gold rounded-xl p-8 border border-secondary/30 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-heading font-semibold text-primary mb-2">
                  Multi-Board Residential Real Estate Contract 8.0
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  PDF, hosted by Chicago Association of REALTORS®.
                </p>
              </div>
            </div>

            <a
              href={CONTRACT_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Open Contract PDF
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Need help with the contract?
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Illinois law provides for attorney review of residential real
              estate contracts. REAL Law Group represents buyers and sellers
              across Chicagoland — from contract review through closing. Contact
              us for a free consultation.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Questions about your real estate contract?"
        text="Our experienced real estate attorneys can review and negotiate the contract on your behalf. Call (630) 299-7600."
      />
    </>
  );
}
