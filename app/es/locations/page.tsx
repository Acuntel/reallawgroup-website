import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { CONTACT } from "@/lib/constants";
import { OFFICES } from "@/lib/locations";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Nuestras Oficinas en el Área de Chicago",
  description:
    "REAL Law Group atiende a toda el área de Chicago desde nuestra oficina principal en Elmhurst y oficinas satélite, disponibles con cita previa, en Logan Square (Chicago) y Park Ridge. Llame al (630) 299-7600.",
  alternates: {
    canonical: "https://reallawgroup.com/es/locations",
    languages: {
      "en-US": "https://reallawgroup.com/locations",
      "es-US": "https://reallawgroup.com/es/locations",
      "pl-PL": "https://reallawgroup.com/pl/locations",
      "x-default": "https://reallawgroup.com/locations",
    },
  },
  openGraph: {
    title: "Nuestras Oficinas en el Área de Chicago | REAL Law Group",
    description:
      "Oficina principal en Elmhurst y oficinas satélite con cita previa en Logan Square (Chicago) y Park Ridge.",
    url: "https://reallawgroup.com/es/locations",
    type: "website",
  },
};

const BADGES_ES: Record<string, string> = {
  main: "Oficina Principal",
  satellite: "Solo con Cita Previa",
};

const NAMES_ES: Record<string, string> = {
  elmhurst: "Elmhurst",
  chicago: "Chicago (Logan Square)",
  "park-ridge": "Park Ridge",
};

export default function LocationsPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Inicio", url: "/es" },
              { name: "Oficinas" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nuestras Oficinas
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group atiende a toda el área de Chicago desde nuestra
            oficina principal en Elmhurst y oficinas satélite en Chicago y Park
            Ridge disponibles con cita previa.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Inicio", href: "/es" }, { label: "Oficinas" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <Link
                key={office.slug}
                href={`/es/locations/${office.slug}`}
                className="group rounded-xl border border-border p-6 hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary bg-light-gold rounded-full px-3 py-1 mb-4">
                  {BADGES_ES[office.type]}
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {NAMES_ES[office.slug]}
                </h2>
                <p className="flex items-start gap-2 text-sm text-text-muted mb-1">
                  <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                  {office.fullAddress}
                </p>
                <p className="text-sm text-text-muted mb-4">
                  {office.county === "DuPage County"
                    ? "Condado de DuPage"
                    : "Condado de Cook"}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  Ver detalles de la oficina
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-light-gold p-8 text-center">
            <p className="text-primary font-medium mb-4">
              Cada consulta comienza con una conversación. Llámenos o programe
              en línea y nos reuniremos con usted en la ubicación que le resulte
              más conveniente.
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
                href="/es/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
              >
                Programar en Línea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
