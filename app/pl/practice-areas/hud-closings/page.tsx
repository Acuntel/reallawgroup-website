import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prawnik ds. zamknięć HUD i nieruchomości rządowych — Chicago",
  description:
    "REAL Law Group prowadzi zamknięcia domów HUD na terenie Chicagoland. Doświadczeni prawnicy prowadzący kupujących przez specyficzne dla HUD terminy, umowy i wymagania zamknięcia. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas/hud-closings",
});

const hudClosingSteps = [
  "Kupujący składa ofertę przez internetowy system licytacji HUD (HUDHomeStore.com)",
  "Po akceptacji kupujący otrzymuje od HUD potwierdzoną umowę",
  "Kupujący zabezpiecza finansowanie — FHA, kredyt konwencjonalny lub gotówkę",
  "Rozpoczyna się okres analizy prawnej i zlecane jest badanie tytułu",
  "Wykonywane są inspekcje, a wszelkie wymagane naprawy zostają obsłużone",
  "Zamknięcie jest koordynowane z firmą zarządzającą aktywami HUD",
  "Ostateczne zamknięcie zostaje sfinalizowane, a tytuł własności przechodzi na kupującego",
];

const hudDifferences = [
  "Rygorystyczne terminy zamknięcia, zwykle 45 do 60 dni od potwierdzenia umowy",
  "Specyficzne dla HUD załączniki, oświadczenia i formularze umów, które różnią się od standardowych transakcji w Illinois",
  "Nieruchomości są sprzedawane ściśle w stanie „jak widać” (as-is), bez napraw i rabatów ze strony sprzedającego",
  "Wpłata zadatku jest wymagana w krótkim okresie po przyjęciu oferty",
  "Wnioski o przedłużenie są dostępne, ale wiążą się z obowiązkowymi opłatami dziennymi",
];

const faqs = [
  {
    question: "Czym jest dom HUD?",
    answer:
      "Dom HUD to nieruchomość, która była wcześniej finansowana hipoteką ubezpieczoną przez FHA. Gdy kredytobiorca przestaje spłacać zobowiązanie, a pożyczkodawca przeprowadza egzekucję, Departament Mieszkalnictwa i Rozwoju Miast (HUD) przejmuje nieruchomość i wystawia ją na sprzedaż w celu odzyskania roszczenia ubezpieczeniowego. Domy te sprzedawane są za pośrednictwem oficjalnej platformy HUD, HUDHomeStore.com.",
  },
  {
    question: "Czy potrzebuję prawnika do zamknięcia HUD w Illinois?",
    answer:
      "Choć nie zawsze jest to prawnie wymagane, zdecydowanie zalecamy skorzystanie z usług prawnika przy zamknięciu HUD. Transakcje HUD przebiegają inaczej niż standardowe zakupy mieszkaniowe, z unikalnymi formularzami umów, ścisłymi terminami i specyficznymi załącznikami. Doświadczony prawnik ds. zamknięć HUD chroni Państwa interesy i dba o płynny przebieg transakcji.",
  },
  {
    question: "Czy mogę negocjować cenę domu HUD?",
    answer:
      "Domy HUD są sprzedawane w ramach internetowego procesu licytacyjnego, a nie tradycyjnych negocjacji. W początkowym okresie listingu oferty mogą składać wyłącznie kupujący zamierzający zamieszkać w nieruchomości oraz wybrane organizacje non-profit. Jeśli nieruchomość się nie sprzeda, trafia do inwestorów. HUD analizuje wszystkie oferty i może je przyjąć, odrzucić lub przedstawić kontrofertę w oparciu o wycenę i warunki rynkowe.",
  },
  {
    question:
      "Co się stanie, jeśli potrzebuję więcej czasu na zamknięcie domu HUD?",
    answer:
      "Jeśli nie są Państwo w stanie zamknąć transakcji w pierwotnym terminie wynikającym z umowy, prawnik może złożyć wniosek o przedłużenie do firmy zarządzającej aktywami HUD. Przedłużenia nie są gwarantowane, a każde zatwierdzone przedłużenie wiąże się z opłatą dzienną, którą pokrywa kupujący. REAL Law Group regularnie obsługuje wnioski o przedłużenie i robi wszystko, aby utrzymać zamknięcie w pierwotnym harmonogramie, gdy jest to możliwe.",
  },
  {
    question: "Czy domy HUD sprzedawane są w stanie „jak widać”?",
    answer:
      "Tak. HUD sprzedaje wszystkie nieruchomości w stanie as-is, co oznacza, że HUD nie wykona napraw ani nie zaoferuje rabatów za wady nieruchomości. Kupujący powinni zawsze zlecić dokładną inspekcję domu przed upływem terminu inspekcji, aby poznać pełen zakres niezbędnych napraw przed ostatecznym zobowiązaniem się do zakupu.",
  },
  {
    question: "Czy mogę kupić dom HUD przy użyciu kredytu FHA?",
    answer:
      "Tak, finansowanie FHA to jeden z najczęstszych sposobów zakupu domu HUD. Akceptowane są również kredyty konwencjonalne oraz zakupy gotówkowe. Pożyczkodawca będzie musiał dotrzymać terminów zamknięcia HUD, dlatego ważne jest, aby mieć zabezpieczone finansowanie jeszcze przed złożeniem oferty. REAL Law Group koordynuje pracę z pożyczkodawcą, aby cała dokumentacja była gotowa na terminowe zamknięcie.",
  },
];

export default function HUDClosingsPage() {
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
              { name: "Zamknięcia HUD" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Zamknięcia HUD
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Zamknięcia HUD" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              REAL Law Group pełni funkcję prawnika ds. zamknięć HUD dla
              kupujących nabywających nieruchomości będące w posiadaniu rządu na
              terenie Chicago. Domy HUD to nieruchomości mieszkaniowe przejęte
              przez Departament Mieszkalnictwa i Rozwoju Miast Stanów
              Zjednoczonych, zazwyczaj po tym, jak kredytobiorca przestaje
              spłacać hipotekę ubezpieczoną przez FHA, a pożyczkodawca zakończy
              postępowanie egzekucyjne. Po przejęciu własności przez HUD domy te
              są wystawiane na sprzedaż nowym kupującym po cenach rynkowych.
            </p>
            <p className="text-text-muted leading-relaxed">
              Zakup domu HUD może być doskonałą okazją zarówno dla kupujących po
              raz pierwszy, jak i dla inwestorów, jednak proces ten znacząco
              różni się od standardowej transakcji nieruchomościowej. Nasi
              prawnicy prowadzą kupujących przez wszystkie etapy zamknięcia HUD
              — od analizy umowy po ostateczny transfer tytułu własności.
            </p>
          </div>

          {/* The HUD Closing Process */}
          <div className="mb-16">
            <span className="section-label">Krok po kroku</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Proces zamknięcia HUD
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Zamknięcia HUD przebiegają według ustrukturyzowanej sekwencji i
              sztywnego harmonogramu. Znajomość każdego etapu pomaga kupującym
              wyprzedzać terminy i unikać kosztownych opóźnień.
            </p>
            <ol className="space-y-4">
              {hudClosingSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-text-muted pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* What Makes HUD Closings Different */}
          <div className="mb-16">
            <span className="section-label">Kluczowe różnice</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Co wyróżnia zamknięcia HUD
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Transakcje HUD podlegają zasadom, które nie obowiązują przy
              typowych zakupach mieszkaniowych w Illinois. Kupujący, którzy
              podchodzą do zamknięcia HUD jak do standardowej transakcji, często
              napotykają problemy. Oto kluczowe różnice, przez które nasi
              prawnicy prowadzą klientów.
            </p>
            <div className="space-y-3">
              {hudDifferences.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD Closing Extension Requests */}
          <div className="mb-16">
            <span className="section-label">Przedłużenia</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Wnioski o przedłużenie zamknięcia HUD
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Gdy pojawiają się opóźnienia w finansowaniu, problemy z tytułem
              lub inne komplikacje, kupujący mogą potrzebować dodatkowego czasu
              poza pierwotnym terminem zamknięcia. HUD dopuszcza wnioski o
              przedłużenie, lecz wiążą się one z kosztami. Każde zatwierdzone
              przedłużenie skutkuje opłatą dzienną naliczaną za każdy dzień
              przekraczający pierwotny termin zamknięcia.
            </p>
            <p className="text-text-muted leading-relaxed">
              REAL Law Group obsługuje wnioski o przedłużenie w imieniu
              klientów, komunikując się bezpośrednio z firmą zarządzającą
              aktywami HUD, aby uzyskać dodatkowy czas, gdy to konieczne.
              Staramy się minimalizować opłaty za przedłużenie, wcześnie
              identyfikując potencjalne opóźnienia i dbając o to, by wszystkie
              strony były zgrane co do realistycznego harmonogramu zamknięcia.
              Gdy przedłużenie jest nieuniknione, dbamy o to, aby wniosek został
              złożony prawidłowo i w wymaganym terminie, chroniąc Państwa umowę.
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
        heading="Kupują Państwo dom HUD w Illinois?"
        text="Nasi prawnicy prowadzą każdy etap zamknięcia HUD, abyście mogli Państwo skupić się na nowym domu."
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
              href="/pl/practice-areas/real-estate"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prawo nieruchomości
            </a>
            <a
              href="/pl/practice-areas/building-violations"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Naruszenia przepisów budowlanych
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
              href="/pl/emd"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zadatki (Earnest Money Deposits)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
