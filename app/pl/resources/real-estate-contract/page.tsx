import { FileText, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

const CONTRACT_PDF_URL =
  "https://chicagorealtor.com/wp-content/uploads/wp-private-media/2025/01/8.0-Multi-Board-Residential-Contract.pdf";

export const metadata = generatePageMetadata({
  title: "Umowa sprzedaży nieruchomości mieszkaniowej Multi-Board",
  description:
    "Dostęp do aktualnej wersji umowy sprzedaży nieruchomości mieszkaniowej Multi-Board Residential Real Estate Contract, stosowanej w transakcjach nieruchomościowych w rejonie Chicagoland. REAL Law Group pomoże Państwu przeanalizować, wynegocjować i sfinalizować transakcję na podstawie tej umowy.",
  path: "/pl/resources/real-estate-contract",
});

export default function RealEstateContractPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Umowa sprzedaży nieruchomości
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Multi-Board Residential Real Estate Contract stosowana w
            transakcjach w rejonie Chicagoland.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Umowa sprzedaży nieruchomości" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-10">
            <p className="text-text-muted leading-relaxed mb-6">
              Multi-Board Residential Real Estate Contract to standardowa umowa
              stosowana w większości mieszkaniowych transakcji
              nieruchomościowych w rejonie Chicago. Jest wspólnie zatwierdzona
              przez kilka stowarzyszeń REALTOR® oraz stowarzyszeń prawniczych z
              Chicagoland.
            </p>
            <p className="text-text-muted leading-relaxed">
              Najnowszą wersję umowy mogą Państwo pobrać bezpośrednio ze strony
              Chicago Association of REALTORS® poniżej.
            </p>
          </div>

          <div className="bg-light-gold rounded-xl p-8 border border-secondary/30 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-heading font-semibold text-primary mb-2">
                  Multi-Board Residential Real Estate Contract 8.0
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  PDF udostępniony przez Chicago Association of REALTORS®.
                </p>
              </div>
            </div>

            <a
              href={CONTRACT_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Otwórz umowę w PDF
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Potrzebują Państwo pomocy z umową?
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Prawo stanu Illinois przewiduje prawo do analizy prawnej umów
              sprzedaży nieruchomości mieszkaniowych. REAL Law Group
              reprezentuje kupujących i sprzedających na terenie całego
              Chicagoland — od analizy umowy aż po zamknięcie transakcji.
              Prosimy o kontakt w celu umówienia bezpłatnej konsultacji.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Mają Państwo pytania dotyczące umowy sprzedaży nieruchomości?"
        text="Nasi doświadczeni prawnicy ds. nieruchomości przeanalizują i wynegocjują umowę w Państwa imieniu. Zadzwoń pod (630) 299-7600."
        buttonHref="/pl/contact"
      />
    </>
  );
}
