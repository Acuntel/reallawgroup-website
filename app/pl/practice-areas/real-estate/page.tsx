import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prawnik ds. zamknięć nieruchomości — Elmhurst i Chicago",
  description:
    "Doświadczeni prawnicy ds. nieruchomości prowadzący transakcje mieszkaniowe i komercyjne, zamknięcia, negocjacje umów, krótką sprzedaż i inne sprawy na terenie Chicagoland. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas/real-estate",
});

const residentialServices = [
  "Zamknięcia (sprzedaż i zakup)",
  "Akty zrzeczenia się (Quit Claim Deeds)",
  "Certyfikat zagospodarowania przestrzennego (zoning)",
  "Certyfikat opłat za wodę (Full Payment Certificate)",
  "Znaczki transferowe (Transfer Stamps)",
  "Budowa i przekształcanie nieruchomości w kondominium",
  "Tworzenie i obsługa wspólnot mieszkaniowych (Condo/HOA)",
  "Foreclosure i REO",
  "Krótka sprzedaż (Short Sales)",
  "Negocjacje i analiza umów",
];

const commercialServices = [
  "Zamknięcia (sprzedaż i zakup)",
  "Rejestracja budynków",
  "Analiza i negocjacje dokumentów finansowych i kredytowych",
  "Negocjacje transakcji",
  "Sporządzanie umów",
  "Najem",
  "Wymiany z odroczonym podatkiem (1031 Exchanges)",
  "Joint ventures",
];

const faqs = [
  {
    question:
      "Czy przy zakupie domu w Illinois potrzebuję prawnika ds. nieruchomości?",
    answer:
      "Choć prawo stanu Illinois nie wymaga formalnie udziału prawnika w transakcjach nieruchomościowych, jest on zdecydowanie rekomendowany. Prawnik analizuje umowy, negocjuje warunki, rozwiązuje kwestie tytułu własności i zapewnia ochronę Państwa interesów od podpisania umowy aż po zamknięcie. Większość transakcji w rejonie Chicago odbywa się z udziałem prawników po obu stronach.",
  },
  {
    question: "Czym zajmuje się prawnik ds. nieruchomości podczas zamknięcia?",
    answer:
      "Państwa prawnik weryfikuje wszystkie dokumenty zamknięcia, w tym dokument rozliczeniowy, akt własności, dokumenty hipoteczne oraz zobowiązanie tytułowe. Dba o to, by wszystkie kwoty były zgodne, rozwiązuje wszelkie problemy pojawiające się w ostatniej chwili i zapewnia prawidłową rejestrację transakcji w hrabstwie.",
  },
  {
    question: "Ile kosztują usługi prawnika ds. nieruchomości w Illinois?",
    answer:
      "Opłaty zależą od stopnia złożoności transakcji. REAL Law Group stosuje przejrzyste i konkurencyjne ceny. Prosimy o kontakt, aby otrzymać ofertę dopasowaną do Państwa transakcji — chętnie omówimy koszty jeszcze przed podjęciem współpracy.",
  },
  {
    question: "Czym jest wymiana 1031 i jak działa?",
    answer:
      "Wymiana 1031 (tzw. wymiana z odroczonym podatkiem) umożliwia odroczenie podatku od zysków kapitałowych przy sprzedaży nieruchomości inwestycyjnej poprzez reinwestowanie uzyskanych środków w nieruchomość tego samego rodzaju. Obowiązują ścisłe terminy i zasady — mają Państwo 45 dni na wskazanie nieruchomości zastępczych oraz 180 dni na finalizację transakcji. Nasz zespół prowadzi klientów przez każdy etap tego procesu.",
  },
  {
    question:
      "Jaka jest różnica między aktem zrzeczenia się (quit claim deed) a aktem z rękojmią (warranty deed)?",
    answer:
      "Akt z rękojmią gwarantuje, że sprzedający posiada czysty tytuł własności i prawo do sprzedaży. Akt zrzeczenia się przenosi jedynie taki udział, jaki sprzedający faktycznie posiada — bez żadnych gwarancji. Akty zrzeczenia są powszechnie używane przy transferach rodzinnych, rozwodach i przenoszeniu nieruchomości do trustów, jednak wiążą się z większym ryzykiem dla kupujących.",
  },
];

export default function RealEstatePage() {
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
              { name: "Prawo nieruchomości" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prawo nieruchomości
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Prawo nieruchomości" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Nieruchomości mieszkaniowe
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Obsługujemy potrzeby klientów z północnego Illinois w zakresie
              mieszkaniowych transakcji na nieruchomościach. Od podpisania umowy
              aż po zamknięcie chronimy interesy naszych klientów, pomagając im
              zrozumieć biznesowe, podatkowe i prawne aspekty transakcji. Jako
              kreatywni i rozwiązujący problemy doradcy dążymy do zabezpieczenia
              powodzenia inwestycji naszych klientów w nieruchomości.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {residentialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Nieruchomości komercyjne
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Zapewniamy doradztwo prawne zarówno ugruntowanym firmom, jak i
              przedsiębiorstwom rozpoczynającym działalność. Dzięki naszemu
              doświadczeniu finansowemu i biznesowemu posiadamy wiedzę
              pozwalającą analizować komercyjne transakcje nieruchomościowe
              naszych klientów.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commercialServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Najczęściej zadawane pytania
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Potrzebują Państwo pomocy przy transakcji na nieruchomości?"
        text="Nasz zespół jest gotowy poprowadzić Państwa od umowy aż po zamknięcie."
        buttonText="Skontaktuj się z nami"
        buttonHref="/pl/contact"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Powiązane obszary praktyki
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/pl/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Trusty gruntowe
            </a>
            <a
              href="/pl/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Planowanie spadkowe
            </a>
            <a
              href="/pl/practice-areas/hud-closings"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zamknięcia HUD
            </a>
          </div>
          <h3 className="font-heading text-lg text-primary mt-6 mb-3">
            Przydatne materiały
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/pl/resources/closing-cost-calculator"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Kalkulator kosztów zamknięcia
            </a>
            <a
              href="/pl/resources/title-insurance-faq"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              FAQ o ubezpieczeniu tytułu własności
            </a>
            <a
              href="/pl/resources/prevent-wire-fraud"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zapobieganie oszustwom przelewowym
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
