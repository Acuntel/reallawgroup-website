import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  MapPin,
  ArrowRight,
  Landmark,
  CheckCircle2,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT } from "@/lib/constants";
import { COUNTIES, getCounty } from "@/lib/counties";
import { getOffice } from "@/lib/locations";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import { COUNTY_CONTENT } from "./content";

const SERVICES = [
  { label: "Real Estate Closings", href: "/practice-areas/real-estate" },
  { label: "Real Estate Investor Services", href: "/real-estate-investors" },
  { label: "Estate Planning", href: "/practice-areas/estate-planning" },
  { label: "HUD Closings", href: "/practice-areas/hud-closings" },
  { label: "Land Trusts", href: "/practice-areas/land-trusts" },
  { label: "Data Breach & Privacy", href: "/practice-areas/data-breach" },
];

export function generateStaticParams() {
  return COUNTIES.map((county) => ({ slug: county.slug }));
}

// Every slug for this route is enumerated above. Without this, Next renders
// unknown slugs on demand and answers 200 with the not-found shell, which gives
// crawlers an infinite soft-404 URL space. false makes unknown slugs a real 404.
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const county = getCounty(params.slug);
  const content = COUNTY_CONTENT[params.slug];
  if (!county || !content) return {};
  return generatePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/service-areas/${county.slug}`,
  });
}

function generateCountyServiceSchema(slug: string) {
  const county = getCounty(slug);
  const content = COUNTY_CONTENT[slug];
  if (!county || !content) return {};
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://reallawgroup.com/service-areas/${county.slug}#service`,
    serviceType: "Real estate legal services",
    name: `Real Estate Legal Services in ${county.name}`,
    description: content.metaDescription,
    url: `https://reallawgroup.com/service-areas/${county.slug}`,
    provider: {
      "@type": "LegalService",
      "@id": "https://reallawgroup.com",
      name: "REAL Law Group, P.C.",
      telephone: "+16302997600",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: county.name },
      ...county.cities.map((name) => ({ "@type": "City", name })),
    ],
  };
}

export default function CountyPage({ params }: { params: { slug: string } }) {
  const county = getCounty(params.slug);
  const content = COUNTY_CONTENT[params.slug];
  if (!county || !content) notFound();

  const office = getOffice(county.nearestOfficeSlug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCountyServiceSchema(county.slug)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(content.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Service Areas", url: "/service-areas" },
              { name: county.name },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-secondary bg-white/10 rounded-full px-4 py-1.5 mb-4">
            Service Area
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {content.heroTitle}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: county.name },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                How We Work in {county.name}
              </h2>
              {content.introParas.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-text-muted leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}

              <h2 className="text-2xl font-heading font-semibold mt-10 mb-4">
                What We Handle in {county.name}
              </h2>
              <ul className="space-y-2.5 mb-10">
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-heading font-semibold mb-4">
                {county.name} Communities We Serve
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {county.cities.map((city) => (
                  <span
                    key={city}
                    className="text-sm text-primary bg-light-gold rounded-full px-4 py-1.5"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-border p-6 mb-6">
                <h2 className="flex items-center gap-2 text-lg font-heading font-semibold mb-5">
                  <Landmark className="w-5 h-5 text-secondary" />
                  {county.name} Closing Facts
                </h2>
                <ul className="space-y-3.5">
                  {content.localFacts.map((fact) => (
                    <li
                      key={fact.slice(0, 40)}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-1 text-secondary shrink-0" />
                      <span className="text-sm text-text-muted leading-relaxed">
                        {fact}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {county.remote ? (
                <div className="rounded-xl border border-border p-6 mb-6">
                  <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-3">
                    Closings Handled Remotely
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    We represent {county.name} clients without anyone driving
                    across the state. Attorney review and title work happen
                    electronically, signing is by e-sign or mail-away package,
                    and the closing funds through a title company office near
                    you.
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Firm headquarters:{" "}
                    <Link
                      href="/locations/elmhurst"
                      className="text-secondary font-medium hover:underline"
                    >
                      381 N York St Suite 1, Elmhurst, IL 60126
                    </Link>
                  </p>
                </div>
              ) : office ? (
                <div className="rounded-xl border border-border p-6 mb-6">
                  <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-3">
                    Nearest Meeting Location
                  </p>
                  <Link
                    href={`/locations/${office.slug}`}
                    className="text-primary font-heading font-semibold hover:text-secondary transition-colors"
                  >
                    {office.shortName}
                    {office.type === "satellite" ? " (by appointment)" : ""}
                  </Link>
                  <p className="flex items-start gap-2 text-sm text-text-muted mt-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                    {office.fullAddress}
                  </p>
                  <Link
                    href={`/locations/${office.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline mt-3"
                  >
                    Office details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : null}

              <div className="rounded-xl bg-light-gold p-6 text-center">
                <p className="text-primary font-medium mb-4">
                  Free consultation for {county.name} buyers, sellers, and
                  investors.
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
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
            {county.name} Frequently Asked Questions
          </h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>
    </>
  );
}
