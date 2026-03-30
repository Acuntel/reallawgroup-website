import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Inherited Property & Probate Real Estate",
  description:
    "Guidance on inherited property and probate real estate in Illinois. Learn your options for keeping, selling, or transferring inherited homes and land. Call (630) 299-7600 for a free consultation.",
  path: "/resources/inherited-property",
});

const sellingServices = [
  "Probate court filings and approval",
  "Title search and clearing inherited property title",
  "Handling outstanding mortgages, liens, or tax debts",
  "Coordinating with real estate agents or cash buyers",
  "Transfer tax and capital gains considerations",
  "Closing coordination and document preparation",
];

const faqs = [
  {
    question:
      "Do I have to go through probate to sell an inherited property in Illinois?",
    answer:
      "It depends on how the property was held. If the deceased owned the property solely in their name without a trust, joint tenancy, or transfer-on-death instrument, probate is generally required before the property can be sold. Properties held in a land trust, living trust, or with a TOD deed can often bypass probate entirely. An attorney can review the deed and estate documents to determine whether probate is necessary for your situation.",
  },
  {
    question:
      "How long does the Illinois probate process take for real estate?",
    answer:
      "A typical Illinois probate case takes between 6 and 12 months, though complex estates with disputes, unclear title, or outstanding debts can take longer. If you need to sell the property during probate, the court must approve the sale, which adds additional steps to the timeline. Working with an experienced probate attorney can help move the process along efficiently.",
  },
  {
    question: "Do I have to pay taxes on an inherited property?",
    answer:
      "Illinois does not impose an inheritance tax, but there are other tax considerations. Property taxes remain due regardless of ownership changes. If you sell the inherited property, you may owe federal capital gains tax on any appreciation above the stepped-up basis (the property\u2019s fair market value at the date of death). There may also be transfer taxes at closing. We recommend consulting with both a real estate attorney and a tax professional to understand your specific obligations.",
  },
  {
    question:
      "What happens if multiple family members inherit the same property?",
    answer:
      "When multiple heirs inherit a property, they become co-owners (tenants in common). All co-owners must agree on decisions regarding the property \u2014 whether to keep it, sell it, or rent it out. If the co-owners cannot agree, any owner can file a partition action in court to force a sale. REAL Law Group helps families negotiate agreements and, when necessary, navigate the partition process.",
  },
  {
    question:
      "Can I sell an inherited house quickly without listing it on the market?",
    answer:
      "Yes. Many families who inherit property prefer a faster, simpler sale rather than going through the traditional listing process. REAL Law Group works with a network of trusted real estate investors and cash buyers who purchase inherited properties as-is, often closing in a matter of weeks. We handle the legal side to ensure the sale is properly executed and your interests are protected.",
  },
];

export default function InheritedPropertyPage() {
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
              { name: "Resources", url: "/resources" },
              { name: "Inherited Property & Probate Real Estate" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Inherited Property &amp; Probate Real Estate
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Compassionate legal guidance for families navigating inherited real
            estate in Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Inherited Property & Probate Real Estate" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            Losing a loved one is difficult enough without the added stress of
            figuring out what to do with their property. Whether you&apos;ve
            inherited a family home, rental property, or vacant land, REAL Law
            Group guides you through your options with compassion and clarity.
            We handle the legal details so you can focus on what matters most.
          </p>

          {/* Options for Inherited Property */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Your Options for Inherited Property
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 mb-16">
            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Keep the Property
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                You may choose to move into the inherited home or hold it as a
                rental property. Either way, you will need to transfer the title
                into your name, update the property tax records, and address any
                outstanding obligations on the property such as a mortgage or
                unpaid taxes.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Sell the Property
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Many heirs decide to sell, whether through a traditional listing
                with a real estate agent or a quicker sale to an investor or
                cash buyer. Selling an inherited property in Illinois often
                involves additional legal steps, including probate court
                approval if the estate has not yet been settled.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Transfer to Another Family Member
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                If another family member wants the property, it can be
                transferred through a deed. Depending on the circumstances, this
                may involve a quit claim deed, a warranty deed, or a
                distribution through the probate estate. Tax implications vary
                based on the method of transfer.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Place in a Trust
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                For families thinking long-term, placing inherited property into
                a trust can provide ongoing asset protection, simplify future
                transfers, and help avoid probate for the next generation. This
                is especially common with multi-generational family homes and
                investment properties.
              </p>
            </div>
          </div>

          {/* Illinois Probate Process */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            The Illinois Probate Process for Real Estate
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <p className="text-text-muted leading-relaxed mb-6">
            When someone passes away owning real estate solely in their name,
            that property typically must pass through probate before it can be
            legally transferred or sold. Probate is the court-supervised process
            of validating the will (if one exists), settling debts, and
            distributing assets to the rightful heirs.
          </p>

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <h3 className="text-lg font-heading font-semibold mb-4">
              When Probate May Not Be Required
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Not every inherited property needs to go through probate. Illinois
              law provides several mechanisms that allow real estate to pass
              outside of probate, including:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  Property held in a{" "}
                  <strong className="text-primary">land trust</strong> or{" "}
                  <strong className="text-primary">living trust</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  Property held in{" "}
                  <strong className="text-primary">joint tenancy</strong> with
                  right of survivorship
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  <strong className="text-primary">
                    Transfer-on-death (TOD) instruments
                  </strong>{" "}
                  recorded on the deed
                </span>
              </li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed mb-16">
            When probate is required, the process in Illinois typically takes 6
            to 12 months. The timeline depends on the complexity of the estate,
            whether any debts or disputes exist, and how quickly the court
            processes filings. Our team works to move probate matters forward
            efficiently while keeping you informed at every step.
          </p>

          {/* Selling an Inherited Home */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Selling an Inherited Home
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <p className="text-text-muted leading-relaxed mb-8">
            Selling inherited property involves more moving parts than a
            standard real estate transaction. From clearing title to navigating
            probate requirements, REAL Law Group handles every legal aspect of
            the sale so you can move forward with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {sellingServices.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>

          {/* Connect with Trusted Buyers */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Connect with Trusted Buyers
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="bg-light-gold rounded-xl p-8 mb-16">
            <p className="text-text-muted leading-relaxed">
              For families who need to sell an inherited property quickly, REAL
              Law Group works with a network of trusted real estate investors
              and cash buyers throughout Chicagoland. These are vetted
              professionals who purchase properties as-is, often closing within
              weeks rather than months. There is no obligation &mdash; we simply
              make the introduction and handle the legal side of the transaction
              to ensure everything is done properly.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Inherited a property? We can help."
        text="Our experienced real estate attorneys guide families through every step of the inherited property process."
        buttonText="Schedule a Consultation"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/practice-areas/estate-planning"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Estate Planning
          </a>
          <a
            href="/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Real Estate Law
          </a>
          <a
            href="/practice-areas/land-trusts"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Land Trusts
          </a>
        </div>
      </section>
    </>
  );
}
