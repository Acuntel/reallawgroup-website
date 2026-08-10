import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { CONTACT } from "@/lib/constants";
import { OFFICES } from "@/lib/locations";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

const base = generatePageMetadata({
  title: "Our Office Locations in the Chicago Area",
  description:
    "REAL Law Group serves all of Chicagoland from our main office in Elmhurst and satellite offices, available by appointment, in Chicago's Logan Square and Park Ridge. Call (630) 299-7600.",
  path: "/locations",
});

export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: {
      "en-US": "https://reallawgroup.com/locations",
      "es-US": "https://reallawgroup.com/es/locations",
      "pl-PL": "https://reallawgroup.com/pl/locations",
      "x-default": "https://reallawgroup.com/locations",
    },
  },
};

const BADGES: Record<string, string> = {
  main: "Main Office",
  satellite: "By Appointment Only",
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Locations" },
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
            name: "REAL Law Group Office Locations",
            itemListElement: OFFICES.map((office, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://reallawgroup.com/locations/${office.slug}`,
            })),
          }),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Office Locations
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group serves all of Chicagoland from our main office in
            Elmhurst and satellite offices in Chicago and Park Ridge that are
            available by appointment.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <Link
                key={office.slug}
                href={`/locations/${office.slug}`}
                className="group rounded-xl border border-border p-6 hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary bg-light-gold rounded-full px-3 py-1 mb-4">
                  {BADGES[office.type]}
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {office.shortName}
                </h2>
                <p className="flex items-start gap-2 text-sm text-text-muted mb-1">
                  <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                  {office.fullAddress}
                </p>
                <p className="text-sm text-text-muted mb-4">{office.county}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  View office details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-light-gold p-8 text-center">
            <p className="text-primary font-medium mb-4">
              Every consultation starts with a conversation. Call us or schedule
              online and we will meet you at the location that is most
              convenient for you.
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
