import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Title Insurance FAQ",
  description:
    "Common questions about title insurance answered by REAL Law Group. Learn what title insurance covers and why it matters. Call (630) 299-7600 for a free consultation.",
  path: "/resources/title-insurance-faq",
});

const faqs = [
  {
    question: "What is title insurance?",
    answer:
      "Title insurance is a form of indemnity insurance that protects the holder from financial loss related to defects in the title to a property. Unlike traditional insurance that protects against future events, title insurance protects against past events that could affect your ownership rights. A title insurance policy is typically issued after a thorough title search, which examines public records to verify the property's legal ownership history.",
  },
  {
    question: "Why do I need title insurance?",
    answer:
      "Even after a thorough title search, there are hidden risks that cannot always be discovered through public records alone. Title insurance protects you against problems such as forged documents, undisclosed heirs, errors in public records, undiscovered liens, boundary disputes, and other issues that could threaten your ownership. Without title insurance, you could be personally responsible for defending your title and covering any losses.",
  },
  {
    question:
      "What is the difference between an owner's policy and a lender's policy?",
    answer:
      "A lender's title insurance policy (also called a loan policy) protects the mortgage lender's interest in the property and is typically required by the lender as a condition of the loan. An owner's policy protects the buyer's equity in the property. While a lender's policy only protects the lender, an owner's policy protects you, the homeowner, for as long as you or your heirs own the property.",
  },
  {
    question: "How much does title insurance cost in Illinois?",
    answer:
      "Title insurance rates in Illinois are regulated and based on the purchase price or loan amount of the property. The cost is a one-time premium paid at closing and provides coverage for as long as you own the property. While rates are standardized, the overall cost can vary based on the property value and the specific coverage options selected. Your real estate attorney can provide you with an accurate estimate based on your transaction.",
  },
  {
    question: "What does title insurance cover?",
    answer:
      "Title insurance covers a wide range of title defects and issues, including: errors or omissions in recorded legal documents, forged deeds, mortgages, or releases, undisclosed or missing heirs who claim ownership, liens for unpaid taxes, assessments, or other debts, easements or encumbrances not shown in public records, and defective recording of legal documents. Each policy may have specific exclusions, so it is important to review your policy carefully.",
  },
  {
    question: "When do I need to purchase title insurance?",
    answer:
      "Title insurance is typically purchased during the closing process of a real estate transaction. Most mortgage lenders require a lender's policy before they will fund a loan. An owner's policy, while optional, is strongly recommended and is usually purchased at the same time. The premium is a one-time cost paid at closing — there are no recurring premiums or renewals required.",
  },
  {
    question: "What is a title search and why is it important?",
    answer:
      "A title search is an examination of public records related to a specific property. It traces the ownership history, identifies any existing liens or encumbrances, and confirms that the seller has the legal right to sell the property. The title search is a critical step in any real estate transaction because it reveals potential issues that could affect your ownership rights. Title insurance is then issued based on the results of this search.",
  },
  {
    question: "Can I choose my own title insurance company?",
    answer:
      "Yes. Under federal law (RESPA), you have the right to choose your title insurance company. While your lender, real estate agent, or attorney may recommend a title company, the choice is ultimately yours. Shopping around and comparing services can be beneficial, but it is important to work with a reputable company that provides thorough title searches and comprehensive coverage.",
  },
];

export default function TitleInsuranceFaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Title Insurance FAQ
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Common questions about title insurance answered.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Title Insurance FAQ" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg">
            Title insurance is a critical component of any real estate
            transaction, yet many buyers and sellers have questions about what
            it is, why it is needed, and how it works. Below are answers to the
            most frequently asked questions about title insurance in Illinois.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-border pb-8 last:border-0"
              >
                <h2 className="text-lg md:text-xl font-heading font-semibold mb-4 flex items-start gap-3">
                  <span className="text-secondary font-body text-sm font-bold mt-1">
                    Q{i + 1}.
                  </span>
                  {faq.question}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gold rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold mb-3">
              Still Have Questions?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Title insurance can be complex, and every real estate transaction
              is unique. If you have specific questions about title insurance
              for your purchase or sale, our experienced real estate attorneys
              are here to help guide you through the process.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Need help with your real estate closing?"
        text="Our team will ensure your property title is clear and your interests are protected."
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
