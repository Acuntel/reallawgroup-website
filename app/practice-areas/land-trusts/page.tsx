import { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Illinois Land Trusts",
  description:
    "Protect your property with an Illinois land trust. REAL Law Group helps property owners establish land trusts for privacy, asset protection, and simplified estate planning in Chicagoland.",
  openGraph: {
    title: "Illinois Land Trusts | REAL Law Group",
    description:
      "Protect your property with an Illinois land trust. Privacy, asset protection, and simplified estate planning for Chicagoland property owners.",
    url: "/practice-areas/land-trusts",
  },
};

const benefits = [
  {
    title: "Privacy",
    description:
      "Your name stays off public records — the trustee holds title, keeping your ownership confidential from anyone searching county records.",
  },
  {
    title: "Probate Avoidance",
    description:
      "Beneficiary interests in a land trust are considered personal property under Illinois law, allowing them to transfer outside of probate court.",
  },
  {
    title: "Easier Transfers",
    description:
      "Transferring property is as simple as changing the beneficiary designation — no need to record a new deed, pay transfer taxes, or notify lenders.",
  },
  {
    title: "Asset Protection",
    description:
      "Because ownership is not publicly recorded, it is significantly harder for creditors and litigants to identify and attach your real estate holdings.",
  },
  {
    title: "Liability Protection",
    description:
      "Separating your personal name from property ownership adds a layer of distance between you and any claims arising from the property.",
  },
  {
    title: "Multiple Property Management",
    description:
      "Investors holding several properties can organize each into its own trust, creating cleaner portfolio management and isolating liability between holdings.",
  },
  {
    title: "Partition Protection",
    description:
      "When multiple parties hold beneficial interests, the trust structure prevents any single co-owner from forcing a partition sale of the property.",
  },
];

const candidates = [
  "Real estate investors managing multiple properties across Chicagoland",
  "Landlords who want to keep their identity private from tenants and the public",
  "Property owners who face heightened lawsuit exposure due to their profession or business",
  "Families engaged in estate planning who want to avoid probate on real property",
  "Business owners looking to separate personal real estate from business assets and liabilities",
];

const faqs = [
  {
    question: "What is the cost of setting up a land trust in Illinois?",
    answer:
      "Costs depend on the complexity of the arrangement, the number of properties involved, and the trustee selected. REAL Law Group provides transparent pricing and will discuss fees upfront during your initial consultation. Contact us at (630) 299-7600 for a quote.",
  },
  {
    question: "Does a land trust protect my property from lawsuits?",
    answer:
      "A land trust provides privacy — it removes your name from public records, making it harder for potential plaintiffs to discover what property you own. However, a land trust alone does not make property judgment-proof. For stronger protection, many clients pair a land trust with an LLC or living trust structure.",
  },
  {
    question: "Can I be my own trustee on an Illinois land trust?",
    answer:
      "Technically yes, but doing so defeats the primary purpose of the trust — privacy. If you serve as your own trustee, your name still appears on public records. Most clients use a corporate trustee, a trusted individual, or their attorney as trustee to maintain confidentiality.",
  },
  {
    question: "Will a land trust affect my mortgage or property taxes?",
    answer:
      "Transferring property into a land trust generally does not trigger a due-on-sale clause under the Garn-St. Germain Act, provided you remain the beneficiary and continue to occupy or manage the property as before. Property taxes are also unaffected — the property retains the same PIN and tax assessment.",
  },
  {
    question:
      "What is the difference between a land trust and an LLC for holding property?",
    answer:
      "A land trust provides privacy and ease of transfer but does not offer the same liability shield as a properly maintained LLC. An LLC provides a formal legal barrier between property liabilities and your personal assets. Many investors use both — holding the property in a land trust with an LLC as the beneficiary — to gain the advantages of each structure.",
  },
  {
    question: "How long does it take to set up a land trust?",
    answer:
      "Once we have all the necessary information, the trust agreement and deed can typically be prepared within one to two weeks. Recording the deed with the county adds a few additional business days. The overall process from consultation to completion usually takes two to three weeks.",
  },
];

export default function LandTrustsPage() {
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
              { name: "Illinois Land Trusts" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Illinois Land Trusts
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: "Illinois Land Trusts" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-text-muted leading-relaxed mb-6">
              Illinois is one of only a handful of states that recognizes land
              trusts — a powerful legal tool for property owners seeking
              privacy, asset protection, and simplified estate planning. Whether
              you own a single rental property or a portfolio of investment real
              estate, a land trust can provide meaningful advantages that other
              ownership structures cannot.
            </p>
            <p className="text-text-muted leading-relaxed">
              REAL Law Group helps clients throughout the Chicago area
              establish, manage, and advise on Illinois land trusts. Our
              attorneys understand the nuances of Illinois trust law and work
              closely with each client to structure holdings that align with
              their goals.
            </p>
          </div>

          {/* What Is a Land Trust */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              What Is a Land Trust?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              A land trust is a legal arrangement in which the title to real
              property is held by a trustee — typically a bank, trust company,
              or designated individual — for the benefit of one or more
              beneficiaries. The beneficiary is usually the property owner
              themselves, who retains full control over the property including
              the right to manage, lease, mortgage, and sell it.
            </p>
            <p className="text-text-muted leading-relaxed">
              The key distinction is that the trustee&apos;s name, not the
              beneficiary&apos;s, appears on public records. This creates a
              layer of privacy that is unique to the land trust structure and is
              one of the primary reasons Illinois property owners choose this
              arrangement.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Benefits of an Illinois Land Trust
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">
                      {benefit.title}:{" "}
                    </span>
                    <span className="text-text-muted">
                      {benefit.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Consider */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Who Should Consider a Land Trust?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Land trusts are not limited to large-scale investors. Any property
              owner in Illinois can benefit from the privacy and flexibility
              that a land trust provides. Clients who gain the most from this
              structure include:
            </p>
            <div className="space-y-3">
              {candidates.map((candidate, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-muted">{candidate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Land Trust vs Living Trust */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Land Trust vs. Living Trust
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Clients often ask how a land trust compares to a living trust.
              While both are useful estate planning tools, they serve different
              purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="section-label mb-3">Land Trust</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>Holds real property only</li>
                  <li>Primary benefit is privacy</li>
                  <li>Specific to Illinois and a few other states</li>
                  <li>Beneficiary retains full control of the property</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="section-label mb-3">Living Trust</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>
                    Holds any type of asset — real estate, accounts, investments
                  </li>
                  <li>Primary benefit is probate avoidance</li>
                  <li>Available in all 50 states</li>
                  <li>Provides comprehensive estate planning structure</li>
                </ul>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              Many of our clients use both structures together — placing
              property into a land trust and then naming a living trust as the
              beneficiary. This combination provides privacy during ownership
              and seamless transfer upon death without probate, giving you the
              strongest protection available under Illinois law.
            </p>
          </div>

          {/* Setting Up */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Setting Up a Land Trust with REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Establishing a land trust is a straightforward process when guided
              by experienced counsel. Here is how we work with clients:
            </p>
            <ol className="space-y-4 text-text-muted leading-relaxed list-decimal list-inside">
              <li>
                <span className="font-semibold text-text">Consultation</span> —
                We discuss your goals, property holdings, and overall estate
                plan to determine if a land trust is the right fit.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Draft the Trust Agreement
                </span>{" "}
                — We prepare a customized trust agreement that defines the
                trustee&apos;s duties, beneficiary rights, and terms of the
                trust.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Select a Trustee
                </span>{" "}
                — We help you choose an appropriate trustee, whether a corporate
                trustee, an individual, or another entity.
              </li>
              <li>
                <span className="font-semibold text-text">Record the Deed</span>{" "}
                — A new deed is recorded transferring the property from your
                name into the trust, completing the public record change.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Manage Beneficiary Designations
                </span>{" "}
                — We assist with initial beneficiary designations and any future
                changes, ensuring your interests are always properly documented.
              </li>
            </ol>
          </div>

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
        heading="Interested in protecting your property with a land trust?"
        text="Contact REAL Law Group to discuss how an Illinois land trust fits into your overall real estate and estate planning strategy."
        buttonText="Contact Us Today"
      />
    </>
  );
}
