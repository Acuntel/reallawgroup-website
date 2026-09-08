import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import ClosingCostCalculator from "@/components/ui/ClosingCostCalculator";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Closing Cost Calculator",
  description:
    "Estimate your closing costs for buying or selling property in Illinois. Free interactive calculator covering transfer taxes, title insurance, attorney fees, and more. Call (630) 299-7600 for a free consultation.",
  path: "/resources/closing-cost-calculator",
});

export default function ClosingCostCalculatorPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Closing Cost Calculator
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Estimate your closing costs for an Illinois real estate transaction.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Closing Cost Calculator" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg">
            Use this calculator to get a rough estimate of closing costs for
            buying or selling property in the Chicagoland area. Select your role
            and enter the sale price to see an estimate of the typical fees
            associated with a transaction. For an exact estimate tailored to
            your transaction, contact our team.
          </p>

          <ClosingCostCalculator />
        </div>
      </section>

      <CTABanner
        heading="Want an exact estimate for your transaction?"
        text="Our experienced real estate attorneys can provide a detailed closing cost breakdown specific to your purchase or sale. Call us at (630) 299-7600 or reach out online."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Real Estate Closings
          </a>
          <a
            href="/resources/for-sale-by-owner"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            For Sale By Owner
          </a>
          <a
            href="/resources/cash-offer-review"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Cash Offer Review
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
      </section>
    </>
  );
}
