import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { CONTACT } from "@/lib/constants";
import { OFFICES } from "@/lib/locations";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Nasze Biura w Aglomeracji Chicago",
  description:
    "REAL Law Group obsługuje całą aglomerację Chicago z głównego biura w Elmhurst oraz biur satelickich, dostępnych po umówieniu wizyty, w Logan Square (Chicago) i Park Ridge. Zadzwoń: (630) 299-7600.",
  alternates: {
    canonical: "https://reallawgroup.com/pl/locations",
    languages: {
      "en-US": "https://reallawgroup.com/locations",
      "es-US": "https://reallawgroup.com/es/locations",
      "pl-PL": "https://reallawgroup.com/pl/locations",
      "x-default": "https://reallawgroup.com/locations",
    },
  },
  openGraph: {
    title: "Nasze Biura w Aglomeracji Chicago | REAL Law Group",
    description:
      "Biuro główne w Elmhurst oraz biura satelickie dostępne po umówieniu wizyty w Logan Square (Chicago) i Park Ridge.",
    url: "https://reallawgroup.com/pl/locations",
    type: "website",
  },
};

const BADGES_PL: Record<string, string> = {
  main: "Biuro Główne",
  satellite: "Tylko po Umówieniu Wizyty",
};

const NAMES_PL: Record<string, string> = {
  elmhurst: "Elmhurst",
  chicago: "Chicago (Logan Square)",
  "park-ridge": "Park Ridge",
};

export default function LocationsPagePl() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona Główna", url: "/pl" },
              { name: "Biura" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nasze Biura
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group obsługuje całą aglomerację Chicago z głównego biura w
            Elmhurst oraz biur satelickich w Chicago i Park Ridge dostępnych po
            umówieniu wizyty.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Strona Główna", href: "/pl" }, { label: "Biura" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <Link
                key={office.slug}
                href={`/pl/locations/${office.slug}`}
                className="group rounded-xl border border-border p-6 hover:border-secondary/40 hover:shadow-lg transition-all"
              >
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary bg-light-gold rounded-full px-3 py-1 mb-4">
                  {BADGES_PL[office.type]}
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {NAMES_PL[office.slug]}
                </h2>
                <p className="flex items-start gap-2 text-sm text-text-muted mb-1">
                  <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                  {office.fullAddress}
                </p>
                <p className="text-sm text-text-muted mb-4">
                  {office.county === "DuPage County"
                    ? "Powiat DuPage"
                    : "Powiat Cook"}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  Zobacz szczegóły biura
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-light-gold p-8 text-center">
            <p className="text-primary font-medium mb-4">
              Każda konsultacja zaczyna się od rozmowy. Zadzwoń do nas lub umów
              się online, a spotkamy się z Tobą w najdogodniejszej dla Ciebie
              lokalizacji.
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
                href="/pl/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary rounded-lg text-white text-sm font-semibold hover:bg-[#b8994e] transition-colors"
              >
                Umów Się Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
