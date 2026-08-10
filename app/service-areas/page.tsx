import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { CONTACT } from "@/lib/constants";
import { COUNTIES } from "@/lib/counties";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Illinois Counties We Serve | Chicagoland Real Estate Attorneys",
  description:
    "REAL Law Group handles real estate closings, attorney review, and estate planning across Cook, DuPage, Will, Kane, Lake, and McHenry counties. Free consultation: (630) 299-7600.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Service Areas" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "REAL Law Group Service Areas",
            itemListElement: COUNTIES.map((county, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://reallawgroup.com/service-areas/${county.slug}`,
            })),
          }),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Illinois Counties We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From our Elmhurst main office and satellite locations in Chicago and
            Park Ridge, REAL Law Group represents buyers, sellers, and investors
            across six Chicagoland counties.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTIES.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.slug}`}
                className="group rounded-xl border border-border p-6 hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {county.name}
                </h2>
                <p className="flex items-start gap-2 text-sm text-text-muted mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                  {county.cities.slice(0, 5).join(", ")}, and more
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  {county.name} details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-light-gold p-8 text-center">
            <p className="text-primary font-medium mb-4">
              Not sure which county your property is in? Call us and we will
              sort it out in one conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-lg text-primary text-sm font-semibold hover:border-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary" />
                {CONTACT.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
