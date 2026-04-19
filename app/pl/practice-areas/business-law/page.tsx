import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Zakładanie firm i prawo korporacyjne w Illinois",
  description:
    "Usługi z zakresu prawa gospodarczego, w tym rejestracja podmiotów, umowy operacyjne, ład korporacyjny i planowanie sukcesji dla firm z Chicagoland. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas/business-law",
});

const services = [
  "Wybór i tworzenie podmiotów prawnych",
  "Umowy operacyjne (Operating Agreements)",
  "Regulaminy spółek (Bylaws)",
  "Numer identyfikacji pracodawcy (EIN)",
  "Ład korporacyjny",
  "Transakcje kupna, sprzedaży, najmu i licencjonowania",
  "Własność i zarządzanie",
  "Planowanie sukcesji",
  "Umowy wspólników (Shareholder Agreements)",
  "Umowy z pracodawcą",
  "Umowy konsultingowe",
  "Umowy o zakazie konkurencji",
  "Umowy o zachowaniu poufności (NDA)",
];

const faqs = [
  {
    question:
      "Czy powinienem założyć spółkę LLC czy korporację dla mojej firmy?",
    answer:
      "To zależy od Państwa celów. LLC oferuje elastyczne zarządzanie i opodatkowanie transparentne (pass-through), co czyni ją popularną formą dla małych firm. Korporacja może być lepsza, jeśli planują Państwo pozyskać zewnętrznych inwestorów lub wejść na giełdę. Nasz zespół analizuje konkretną sytuację — rodzaj działalności, liczbę właścicieli, konsekwencje podatkowe — i rekomenduje najkorzystniejszą strukturę.",
  },
  {
    question: "Jak długo trwa rejestracja podmiotu gospodarczego w Illinois?",
    answer:
      "Zgłoszenie do Sekretarza Stanu Illinois trwa zwykle 5–10 dni roboczych w trybie standardowym. Dostępne są również opcje przyspieszone za dodatkową opłatą. REAL Law Group zajmuje się całym procesem, w tym przygotowaniem aktu założycielskiego, wnioskiem o EIN oraz umową operacyjną.",
  },
  {
    question: "Czy moja spółka LLC potrzebuje umowy operacyjnej?",
    answer:
      "Prawo stanu Illinois nie wymaga formalnie umowy operacyjnej, jednak prowadzenie działalności bez niej jest ryzykowne. Umowa operacyjna definiuje udziały własnościowe, strukturę zarządzania, podział zysków oraz zasady postępowania w przypadku odejścia wspólnika. Bez niej obowiązują domyślne przepisy stanu Illinois, które mogą nie odpowiadać Państwa intencjom.",
  },
  {
    question:
      "Czym jest umowa o zakazie konkurencji i czy jest egzekwowalna w Illinois?",
    answer:
      "Umowa o zakazie konkurencji ogranicza pracownikowi możliwość pracy dla konkurencji lub założenia konkurencyjnej firmy przez określony czas po odejściu. Illinois uznaje rozsądne klauzule zakazu konkurencji — muszą być ograniczone pod względem czasu, terytorium i zakresu, a pracownik musi otrzymać odpowiednie świadczenie wzajemne. Nasz zespół sporządza umowy, które chronią Państwa firmę, pozostając jednocześnie egzekwowalnymi.",
  },
];

export default function BusinessLawPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Obszary praktyki", url: "/pl/practice-areas" },
              { name: "Prawo gospodarcze" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prawo gospodarcze
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Prawo gospodarcze" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            REAL Law Group doradza małym i średnim firmom działającym w różnych
            branżach. Wykorzystując nasze doświadczenie finansowe i biznesowe,
            wspieramy klientów w wyzwaniach, z którymi mierzą się właściciele
            firm. Oferujemy proaktywne rozwiązania bieżących problemów
            biznesowych i prawnych. Pomagamy klientom w procesie wyboru i
            organizacji nowych podmiotów gospodarczych. Przygotowujemy i
            składamy odpowiednie dokumenty założycielskie potrzebne do
            utworzenia korporacji oraz spółek z ograniczoną odpowiedzialnością
            (LLC). Współpracujemy ze stanem Illinois, aby uzyskać dla naszych
            klientów wymagane licencje.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Nasze usługi w zakresie prawa gospodarczego
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Najczęściej zadawane pytania
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Potrzebują Państwo wsparcia dla swojej firmy?"
        text="Od założenia po bieżące zarządzanie — nasz zespół dostarcza praktyczne i ekonomiczne rozwiązania z zakresu prawa gospodarczego."
        buttonText="Rozpocznij współpracę"
        buttonHref="/pl/contact"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Powiązane obszary praktyki
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/pl/practice-areas/real-estate"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prawo nieruchomości
            </a>
            <a
              href="/pl/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Planowanie spadkowe
            </a>
            <a
              href="/pl/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Trusty gruntowe
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
