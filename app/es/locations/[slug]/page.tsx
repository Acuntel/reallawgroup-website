import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CalendarCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import GoogleMapsEmbed from "@/components/ui/GoogleMapsEmbed";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { CONTACT } from "@/lib/constants";
import { OFFICES, getOffice } from "@/lib/locations";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocationSchema,
} from "@/lib/schema";
import { LOCATION_CONTENT_ES } from "./content";

export function generateStaticParams() {
  return OFFICES.map((office) => ({ slug: office.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const office = getOffice(params.slug);
  const content = LOCATION_CONTENT_ES[params.slug];
  if (!office || !content) return {};
  const path = `/locations/${office.slug}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://reallawgroup.com/es${path}`,
      languages: {
        "en-US": `https://reallawgroup.com${path}`,
        "es-US": `https://reallawgroup.com/es${path}`,
        "pl-PL": `https://reallawgroup.com/pl${path}`,
        "x-default": `https://reallawgroup.com${path}`,
      },
    },
    openGraph: {
      title: `${content.metaTitle} | REAL Law Group`,
      description: content.metaDescription,
      url: `https://reallawgroup.com/es${path}`,
      type: "website",
    },
  };
}

export default function LocationPageEs({
  params,
}: {
  params: { slug: string };
}) {
  const office = getOffice(params.slug);
  const content = LOCATION_CONTENT_ES[params.slug];
  if (!office || !content) notFound();

  const isSatellite = office.type === "satellite";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationSchema(office)),
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
              { name: "Inicio", url: "/es" },
              { name: "Oficinas", url: "/es/locations" },
              { name: content.heroTitle },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-secondary bg-white/10 rounded-full px-4 py-1.5 mb-4">
            {content.badge}
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
          { label: "Inicio", href: "/es" },
          { label: "Oficinas", href: "/es/locations" },
          { label: content.heroTitle },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                {content.aboutHeading}
              </h2>
              {content.aboutParas.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="text-text-muted leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}

              {content.appointmentNotice && (
                <div className="flex items-start gap-4 bg-light-gold rounded-xl p-6 my-6">
                  <CalendarCheck className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <p className="text-sm text-text leading-relaxed">
                    {content.appointmentNotice}
                  </p>
                </div>
              )}

              <h2 className="text-2xl font-heading font-semibold mt-10 mb-4">
                {content.servicesHeading}
              </h2>
              <ul className="space-y-2.5 mb-10">
                {content.services.map((service) => (
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
                {content.areasHeading}
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                {content.areasIntro}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {office.areaServed.map((area) => (
                  <span
                    key={area}
                    className="text-sm text-primary bg-light-gold rounded-full px-4 py-1.5"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-border p-6 mb-6">
                <h2 className="text-lg font-heading font-semibold mb-5">
                  Información de la Oficina
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                    <div>
                      <p className="text-primary font-medium">
                        {office.fullAddress}
                      </p>
                      <a
                        href={office.mapsLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mt-1"
                      >
                        Cómo llegar
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      href={CONTACT.phoneHref}
                      className="flex items-center gap-3 text-primary font-medium hover:text-secondary transition-colors"
                    >
                      <Phone className="w-5 h-5 text-secondary shrink-0" />
                      {CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 text-primary font-medium hover:text-secondary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-secondary shrink-0" />
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                    <span className="text-primary font-medium">
                      {isSatellite
                        ? "Solo con cita previa"
                        : "Lun-Vie: 8AM-7PM | Sáb: 8AM-3PM"}
                    </span>
                  </li>
                </ul>
                <Link
                  href="/es/contact"
                  className="mt-6 inline-flex w-full items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
                >
                  Programar una Cita
                </Link>
              </div>

              <div className="rounded-xl overflow-hidden border border-border">
                <GoogleMapsEmbed
                  src={office.mapsEmbedUrl}
                  title={`REAL Law Group ${content.heroTitle}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>
    </>
  );
}
