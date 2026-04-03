import Link from "next/link";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About The Kryder Law Group — Chicago Personal Injury Lawyers",
  description:
    "Learn about The Kryder Law Group, LLC — founded in 2002, over $100 million recovered for injured clients across Illinois and the Midwest. Call (312) 223-1700.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About" },
            ]),
          ),
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Our Firm
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Over two decades of fighting for the injured. Over $100 million
            recovered.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Founding Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            The Kryder Law Group, LLC was founded in 2002 by Andrew S. Kryder
            with a simple mission: make the legal process painless for people
            who are already hurting. For over 22 years, we have represented
            thousands of accident and injury victims across Illinois, Indiana,
            Iowa, Kentucky, Michigan, Missouri, Ohio, and Wisconsin — recovering
            over $100 million in compensation along the way.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Our Philosophy: Injuries Hurt. We Make It Right.
            </h3>
            <p className="text-text-muted leading-relaxed mb-4">
              We believe every injured person deserves aggressive, compassionate
              legal representation — regardless of their ability to pay upfront.
              That&apos;s why we work on a contingency fee basis: you pay
              nothing unless we win your case. We advance all costs and fight
              for maximum compensation, whether through negotiation or trial.
            </p>
            <p className="text-text-muted leading-relaxed">
              With 17 office locations across 8 states, we bring big-firm
              resources and multi-state expertise with the personal attention of
              a boutique practice. Our attorneys are admitted to practice in
              over 10 state and federal courts, including the U.S. Supreme
              Court.
            </p>
          </div>

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <h3 className="text-xl font-heading font-semibold mb-4">
              No Fee Guarantee
            </h3>
            <p className="text-text-muted leading-relaxed">
              We work on a contingency fee basis of 30-40% depending on case
              complexity. There are no hourly rates, no retainers, and no
              upfront costs. Our firm advances all case expenses. If we
              don&apos;t win your case, you owe us nothing.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-[#c99b2e] transition-colors"
            >
              Meet Our Attorneys
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
