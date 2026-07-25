import { Building2, Handshake, ShieldCheck, Landmark } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Real Estate Investors — REAL Law Group",
  description:
    "Legal services for real estate investors in Chicagoland — acquisitions, dispositions, entity formation, land trusts, 1031 exchanges, and closings. Call (630) 299-7600.",
  path: "/real-estate-investors",
});

const services = [
  {
    icon: Building2,
    title: "Acquisitions & Dispositions",
    description:
      "Contract drafting, review, and negotiation for single-family rentals, multi-unit buildings, flips, and commercial property.",
  },
  {
    icon: Landmark,
    title: "Entity Formation & Structuring",
    description:
      "LLC formation, operating agreements, and series LLC structures designed to hold investment real estate with proper liability separation.",
  },
  {
    icon: ShieldCheck,
    title: "Land Trusts & Asset Protection",
    description:
      "Illinois land trusts for privacy and estate planning, combined with entity structures for layered asset protection.",
  },
  {
    icon: Handshake,
    title: "Closings & Title Work",
    description:
      "Efficient closings with attention to title review, survey, and transfer tax matters — tailored to investors who close frequently.",
  },
];

export default function RealEstateInvestorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Real Estate Investors" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Real Estate Investors
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Legal support for buying, holding, and selling Chicagoland
            investment property.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Real Estate Investors" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-14 max-w-3xl">
            <p className="section-label">For Investors</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Practical representation built around investor workflows
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Real estate investors close faster and more often than traditional
              buyers and sellers. We represent investors — from first-time
              landlords to multi-property operators — across the Chicago metro
              area. Our team handles everything from contract review on a single
              acquisition to ongoing portfolio work.
            </p>
            <p className="text-text-muted leading-relaxed">
              We focus on moving deals efficiently while protecting the
              investor&apos;s interests at every stage — contract, title, entity
              structure, closing, and post-closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <Icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div id="partners" className="mb-16 scroll-mt-32">
            <p className="section-label">Real Estate Partners</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Partner with REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8 max-w-3xl">
              Strong deals are built on strong relationships. We work alongside
              the people investors already rely on — and we paper the
              partnerships investors form with each other.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Investment Partners
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Joint venture agreements, partnership and operating agreements
                  between co-investors, tenancy-in-common structures, and
                  private capital documentation — so every partner knows exactly
                  where they stand before the deal closes.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Industry Partners
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Agents, brokers, wholesalers, lenders, title companies, and
                  property managers: we&apos;re the closing attorney your
                  clients can count on. If you&apos;d like a reliable legal
                  partner for your transactions, let&apos;s connect.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-light-gold rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-primary mb-3">
              Closing frequently? Let&apos;s talk about a working arrangement.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Active investors benefit from a consistent legal partner who knows
              their investment criteria, preferred entity structures, and
              closing tempo. We work with investors on flat-fee engagements for
              recurring transaction work.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <div id="testimonials" className="scroll-mt-32">
        <TestimonialCarousel />
      </div>

      <CTABanner
        heading="Working on your next acquisition?"
        text="REAL Law Group represents real estate investors across Chicagoland. Call (630) 299-7600 to discuss your transaction or portfolio."
      />
    </>
  );
}
