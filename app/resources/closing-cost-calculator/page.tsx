import { Metadata } from "next";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import ClosingCostCalculator from "@/components/ui/ClosingCostCalculator";

export const metadata: Metadata = {
  title: "Closing Cost Calculator",
  description:
    "Estimate your closing costs for buying or selling property in Illinois. Free interactive calculator covering transfer taxes, title insurance, attorney fees, and more.",
  openGraph: {
    title: "Illinois Closing Cost Calculator | REAL Law Group",
    description:
      "Estimate buyer or seller closing costs for Illinois real estate transactions. Covers transfer taxes, title insurance, commissions, and more.",
    url: "/resources/closing-cost-calculator",
  },
};

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
            buying or selling property in the Chicago area and across Illinois.
            Select your role, enter the sale price, and choose your county to
            see an itemized breakdown of typical fees including transfer taxes,
            title insurance, and attorney costs. For an exact estimate tailored
            to your transaction, contact our team.
          </p>

          <ClosingCostCalculator />
        </div>
      </section>

      <CTABanner
        heading="Want an exact estimate for your transaction?"
        text="Our experienced real estate attorneys can provide a detailed closing cost breakdown specific to your purchase or sale. Call us at (630) 299-7600 or reach out online."
      />
    </>
  );
}
