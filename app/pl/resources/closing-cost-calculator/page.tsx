import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import ClosingCostCalculator from "@/components/ui/ClosingCostCalculator";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Kalkulator kosztów zamknięcia",
  description:
    "Oszacuj swoje koszty zamknięcia przy kupnie lub sprzedaży nieruchomości w Illinois. Bezpłatny interaktywny kalkulator obejmujący podatki transferowe, ubezpieczenie tytułu własności, honoraria adwokackie i więcej. Zadzwoń (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/closing-cost-calculator",
});

export default function ClosingCostCalculatorPagePL() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Kalkulator kosztów zamknięcia
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Oszacuj swoje koszty zamknięcia przy transakcji nieruchomości w
            Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Kalkulator kosztów zamknięcia" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg">
            Skorzystaj z tego kalkulatora, aby uzyskać przybliżone oszacowanie
            kosztów zamknięcia przy kupnie lub sprzedaży nieruchomości w
            aglomeracji chicagowskiej oraz w całym Illinois. Wybierz swoją rolę,
            wprowadź cenę sprzedaży i wskaż hrabstwo, aby zobaczyć szczegółowe
            zestawienie typowych opłat, w tym podatków transferowych,
            ubezpieczenia tytułu własności i kosztów adwokackich. Aby uzyskać
            dokładne oszacowanie dostosowane do Państwa transakcji, skontaktuj
            się z naszym zespołem.
          </p>

          <ClosingCostCalculator />
        </div>
      </section>

      <CTABanner
        heading="Chcesz dokładne oszacowanie dla swojej transakcji?"
        text="Nasi doświadczeni adwokaci ds. nieruchomości mogą przygotować szczegółowe zestawienie kosztów zamknięcia dopasowane do Państwa kupna lub sprzedaży. Zadzwoń (630) 299-7600 lub skontaktuj się online."
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/pl/practice-areas/real-estate"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Prawo nieruchomości
          </a>
          <a
            href="/pl/resources/title-insurance-faq"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Ubezpieczenie tytułu własności — FAQ
          </a>
          <a
            href="/pl/resources/prevent-wire-fraud"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Zapobieganie oszustwom przelewowym
          </a>
        </div>
      </section>
    </>
  );
}
