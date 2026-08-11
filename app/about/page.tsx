import Link from "next/link";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About Our Elmhurst Real Estate Attorneys",
  description:
    "Learn about REAL Law Group, P.C. - founded in 2016 on hard work, integrity, and reliability. Experienced Chicago real estate attorneys. Call (630) 299-7600 for a free consultation.",
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
            Our Story
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Founded in 2016 on the principles of hard work, integrity, and
            reliability.
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
            In 2016, REAL Law Group, P.C. was founded on the principles of
            hard-work, integrity, and reliability. These qualities, instilled in
            us at young ages, are what separates us from our competition. Born
            and raised in Chicago and the surrounding suburbs, we know the
            people and the communities we serve. Our collegiate and legal
            educations were obtained at some of the finest institutions in
            Illinois. Not only are we the first members of our families to
            attend college, we are also the only lawyers within our entire
            extended families. Mindful of our earlier days, when we were
            unfamiliar with and even intimidated by the law, we strive to relate
            to our clients, and educate them as we work closely to assist with
            their legal needs.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Our Philosophy: Hard Work, Integrity, Reliability
            </h3>
            <p className="text-text-muted leading-relaxed">
              We are committed to providing the highest quality, personalized
              legal services to our clients. We view ourselves as a strategic
              partner in your endeavors, both current and future. Through
              communication, availability, and close personal attention, we
              build trust. Trust is the cornerstone of any long lasting
              attorney-client relationship.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-[#b8994e] transition-colors"
            >
              Meet Our Team
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
