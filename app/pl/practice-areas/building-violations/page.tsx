import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prawnik ds. naruszeń przepisów budowlanych w Chicago",
  description:
    "REAL Law Group reprezentuje właścicieli nieruchomości, wynajmujących i deweloperów w sprawach naruszeń przepisów budowlanych Chicago. Reprezentacja podczas rozpraw administracyjnych, obniżanie kar oraz strategie zgodności. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas/building-violations",
});

const commonViolations = [
  "Budowa lub renowacja bez wymaganych pozwoleń",
  "Wady konstrukcyjne werand i tarasów",
  "Naruszenia przepisów ppoż. i systemów tryskaczowych",
  "Naruszenia przepisów elektrycznych i hydraulicznych",
  "Naruszenia zoningu i sposobu użytkowania",
  "Negatywne wyniki inspekcji budowlanych",
  "Nielegalne przekształcenia (z mieszkalnego na komercyjne lub odwrotnie)",
  "Brak lub wygaśnięcie pozwoleń budowlanych",
  "Naruszenia przepisów dotyczących wind i schodów ruchomych",
  "Naruszenia dotyczące farby ołowiowej i środowiska",
];

const faqs = [
  {
    question:
      "Co się stanie, jeśli zignoruję naruszenie przepisów budowlanych w Chicago?",
    answer:
      "Ignorowanie naruszenia przepisów budowlanych jest nierozsądne. Miasto Chicago może nakładać rosnące kary — często od 500 do 1000 dolarów dziennie za każde naruszenie — ustanawiać zastawy na nieruchomości, a w skrajnych przypadkach dążyć do wydania nakazu rozbiórki. Jeśli nie stawią się Państwo na rozprawie administracyjnej, zostanie wydany wyrok zaoczny, który znacznie utrudni i zwiększy koszty późniejszego rozwiązania sprawy.",
  },
  {
    question:
      "Ile mam czasu na reakcję na zawiadomienie o naruszeniu przepisów budowlanych?",
    answer:
      "Zazwyczaj otrzymują Państwo zawiadomienie o naruszeniu wraz z terminem rozprawy w Departamencie Postępowań Administracyjnych miasta Chicago. Co do zasady od daty zawiadomienia mają Państwo 21 dni na przygotowanie odpowiedzi. Szybka reakcja daje Państwa prawnikowi czas na zebranie dowodów, zlecenie inspekcji i opracowanie strategii przed rozprawą.",
  },
  {
    question:
      "Czy naruszenie przepisów budowlanych może wpłynąć na sprzedaż mojej nieruchomości?",
    answer:
      "Tak. Otwarte naruszenia przepisów budowlanych pojawiają się w rejestrach miasta Chicago i ujawnią się podczas badania tytułu lub analizy due diligence kupującego. Nierozwiązane naruszenia mogą opóźnić lub uniemożliwić sprzedaż, obniżyć wartość nieruchomości oraz skutkować dodatkową odpowiedzialnością. Pomagamy właścicielom sprawnie rozwiązywać naruszenia, tak aby nie zakłócały planowanych transakcji.",
  },
  {
    question:
      "Jaka jest różnica między naruszeniem przepisów budowlanych a naruszeniem zoningu?",
    answer:
      "Naruszenia przepisów budowlanych dotyczą fizycznego stanu i bezpieczeństwa konstrukcji — takich kwestii jak instalacja elektryczna, integralność konstrukcyjna, bezpieczeństwo przeciwpożarowe i instalacja hydrauliczna. Naruszenia zoningu dotyczą sposobu wykorzystania nieruchomości w kontekście jej klasyfikacji strefowej, np. prowadzenia działalności komercyjnej w strefie mieszkaniowej lub przekroczenia dopuszczalnej liczby lokali. Obie kwestie są rozstrzygane w ramach procedury administracyjnej miasta Chicago.",
  },
  {
    question: "Czy potrzebuję prawnika na rozprawę administracyjną w Chicago?",
    answer:
      "Obecność prawnika nie jest formalnie wymagana, jednak postępowanie administracyjne ma charakter sporny — miasto będzie reprezentowane przez prokuratora prowadzącego sprawę przeciwko Państwu. Doświadczony prawnik zna procedurę rozpraw, wie, jak negocjować z prokuratorami miejskimi, i często jest w stanie uzyskać obniżenie kar lub umorzenie sprawy. REAL Law Group od 2016 roku reprezentuje właścicieli nieruchomości na takich rozprawach na terenie całego Chicagoland.",
  },
];

export default function BuildingViolationsPage() {
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
              { name: "Naruszenia przepisów budowlanych Chicago" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Naruszenia przepisów budowlanych Chicago
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Naruszenia przepisów budowlanych" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Obrona w sprawach budowlanych</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Ochrona właścicieli nieruchomości przed naruszeniami przepisów
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Właściciele nieruchomości w Chicago działają pod jednym z
              najbardziej skomplikowanych kodeksów budowlanych w kraju. Miejski
              Departament Budynków aktywnie kontroluje i wystawia wezwania za
              wiele różnych naruszeń — od braku pozwoleń i wad konstrukcyjnych
              po kwestie bezpieczeństwa pożarowego i nielegalne zmiany sposobu
              użytkowania. Pojedyncze naruszenie może skutkować znaczącymi
              karami dziennymi, wstrzymaniem prac na aktywnych projektach oraz
              obowiązkowym stawiennictwem na rozprawach administracyjnych.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              REAL Law Group reprezentuje właścicieli nieruchomości,
              wynajmujących, inwestorów oraz deweloperów zmagających się z
              działaniami egzekucyjnymi dotyczącymi przepisów budowlanych w
              Chicago i okolicznych miejscowościach. Niezależnie od tego, czy
              otrzymali Państwo zawiadomienie o naruszeniu po inspekcji, kupili
              nieruchomość z istniejącymi naruszeniami, czy też mierzą się ze
              skargą sąsiada lub najemcy, nasz zespół działa, aby rozwiązać
              sprawę sprawnie i zminimalizować Państwa ekspozycję finansową.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Najczęstsze naruszenia przepisów budowlanych
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Kodeks budowlany Chicago obejmuje praktycznie każdy aspekt budowy,
              utrzymania i użytkowania nieruchomości. Oto jedne z najczęstszych
              naruszeń, którymi zajmujemy się dla naszych klientów:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commonViolations.map((violation, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{violation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Proces rozprawy administracyjnej
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Chicago egzekwuje naruszenia przepisów budowlanych poprzez
              Departament Postępowań Administracyjnych (DOAH) — system
              administracyjnego orzekania oddzielony od tradycyjnych sądów. Gdy
              Departament Budynków wystawi wezwanie, właściciel nieruchomości
              otrzymuje zawiadomienie z wyznaczoną datą rozprawy. Na rozprawie
              prokurator miejski przedstawia dowody naruszenia przed sędzią
              administracyjnym.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Właściciele nieruchomości mają prawo przedstawiać dowody,
              powoływać świadków i argumentować swoją sprawę. Postępowanie
              przebiega jednak szybko, a procedury różnią się od typowych
              procesów sądowych. Kary mogą wahać się od kilkuset dolarów za
              drobne wykroczenia do tysięcy dolarów dziennie za poważne lub
              trwające naruszenia. W niektórych przypadkach miasto może dążyć do
              nakazów rozbiórki lub wszczęcia postępowania w sądzie budowlanym
              wobec nieruchomości uznanych za niebezpieczne lub porzucone.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Posiadanie prawnika znającego procedurę DOAH ma kluczowe
              znaczenie. Wiele naruszeń można rozwiązać w drodze negocjacji z
              prokuratorem miejskim jeszcze przed formalną rozprawą — często
              skutkuje to obniżeniem kar, wydłużeniem terminów dostosowania się
              do przepisów lub całkowitym umorzeniem sprawy, gdy dowody za tym
              przemawiają.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Jak możemy pomóc
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              W REAL Law Group podchodzimy do naruszeń przepisów budowlanych w
              sposób praktyczny. Zaczynamy od analizy wezwania, przeglądu
              właściwych rejestrów nieruchomości oraz zrozumienia zakresu
              zarzucanych naruszeń. Następnie opracowujemy strategię —
              negocjujemy z miastem obniżenie kar, przedstawiamy plan zgodności
              w celu wykazania dobrej wiary lub kwestionujemy naruszenie na
              rozprawie, gdy fakty są po Państwa stronie.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Nasi prawnicy prowadzili setki spraw w ramach rozpraw
              administracyjnych na terenie całego Chicagoland. Wiemy, jak
              miejscy inspektorzy dokumentują naruszenia, jakie dowody sędziowie
              administracyjni uznają za przekonujące i jak doprowadzać sprawy do
              zakończenia bez zbędnych opóźnień i kosztów. Jeśli otrzymali
              Państwo zawiadomienie o naruszeniu przepisów budowlanych, prosimy
              o kontakt przed terminem rozprawy — szybkie działanie daje nam
              najwięcej możliwości ochrony Państwa interesów.
            </p>
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
        heading="Mierzą się Państwo z naruszeniem przepisów budowlanych?"
        text="Prosimy o kontakt z naszym zespołem, aby omówić sprawę i rozważyć dostępne opcje."
        buttonText="Umów konsultację"
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
              href="/pl/practice-areas/land-trusts"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Trusty gruntowe
            </a>
            <a
              href="/pl/practice-areas/hud-closings"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zamknięcia HUD
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
