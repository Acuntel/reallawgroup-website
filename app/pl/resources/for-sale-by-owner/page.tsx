import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Usługi prawne przy sprzedaży bez pośrednika (FSBO) w Illinois",
  description:
    "REAL Law Group zapewnia reprezentację prawną dla sprzedających bez pośrednika (FSBO) w Illinois. Sporządzanie umów, sprawy tytułowe, koordynacja zamknięcia i pełne wsparcie adwokackie bez agenta. Zadzwoń (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/for-sale-by-owner",
});

const fsboServices = [
  "Sporządzanie i przegląd umów",
  "Negocjowanie modyfikacji adwokata kupującego",
  "Wyszukiwanie tytułu własności i rozwiązywanie jego problemów",
  "Koordynacja z kredytodawcą i firmą tytułową kupującego",
  "Przygotowanie dokumentów zamknięcia i rozliczeń",
  "Zapewnienie zgodności z wymogami ujawnień",
  "Znaczki transferowe i rejestracja",
  "Ochrona Państwa interesów bez pomocy agenta",
];

const processSteps = [
  {
    step: "1",
    title: "Wystawienie domu",
    description:
      "Ustal cenę, przygotuj nieruchomość do pokazów i promuj ją poprzez ogłoszenia online, tablice oraz usługi MLS z opłatą ryczałtową. Kontrolujesz proces od pierwszego dnia.",
  },
  {
    step: "2",
    title: "Znalezienie kupującego",
    description:
      "Obsługuj zapytania, planuj pokazy i znajdź poważnego kupującego. Gdy uzgodnicie cenę i warunki, czas to spisać.",
  },
  {
    step: "3",
    title: "Podpisanie umowy",
    description:
      "Początkową umowę kupna-sprzedaży sporządza albo sprzedający, albo kupujący. W Illinois większość umów mieszkaniowych zawiera standardowy okres przeglądu przez adwokata — zazwyczaj pięć dni roboczych.",
  },
  {
    step: "4",
    title: "Przegląd przez adwokata",
    description:
      "Twój adwokat z REAL Law Group przegląda umowę, proponuje modyfikacje chroniące Twoje interesy i negocjuje warunki z adwokatem kupującego. To moment, w którym dodaje się lub dostosowuje kluczowe zabezpieczenia.",
  },
  {
    step: "5",
    title: "Inspekcje i negocjacje",
    description:
      "Kupujący przeprowadza inspekcje. Jeśli pojawią się problemy, Twój adwokat negocjuje upusty za naprawy lub aneksy do umowy w Twoim imieniu, tak abyś nie godził się na niekorzystne warunki.",
  },
  {
    step: "6",
    title: "Sprawy tytułowe",
    description:
      "Zamawiane jest wyszukiwanie tytułu w celu potwierdzenia niezakłóconej własności. Jeśli ujawnią się jakiekolwiek zastawy, obciążenia lub wady tytułu, Twój adwokat pracuje nad ich rozwiązaniem przed zamknięciem.",
  },
  {
    step: "7",
    title: "Zamknięcie",
    description:
      "Twój adwokat przygotowuje akt własności, rozliczenie oraz dokumenty przeniesienia. Przy zamknięciu wszystkie dokumenty są podpisywane, środki są wypłacane, a własność przechodzi na kupującego.",
  },
];

const faqs = [
  {
    question:
      "Czy sprzedaż domu bez agenta nieruchomości w Illinois jest legalna?",
    answer:
      "Tak. Illinois nie wymaga korzystania z agenta nieruchomości przy sprzedaży domu. Niezależnie od tego, czy korzystasz z realtora, czy nie, prawdopodobnie skorzystasz na zatrudnieniu adwokata ds. nieruchomości.",
  },
  {
    question: "Co robi adwokat ds. nieruchomości?",
    answer:
      "Twój adwokat sporządza lub przegląda umowę kupna-sprzedaży, negocjuje modyfikacje z adwokatem kupującego, zamawia i analizuje wyszukiwanie tytułu, przygotowuje dokumenty zamknięcia, w tym akt własności i rozliczenie, koordynuje pracę z kredytodawcą i firmą tytułową kupującego oraz zapewnia spełnienie wszystkich wymogów prawnych aż do zamknięcia.",
  },
  {
    question: "Czy nadal muszę płacić prowizję agenta kupującego?",
    answer:
      "Jeśli kupujący jest reprezentowany przez agenta, agent kupującego może oczekiwać wynagrodzenia. Jest to kwestia negocjowalna w transakcji. Twój adwokat może pomóc Ci zrozumieć możliwości i wynegocjować warunki prowizji jako część umowy kupna-sprzedaży.",
  },
  {
    question: "Jakie są największe ryzyka sprzedaży FSBO bez adwokata?",
    answer:
      "Największe ryzyka obejmują podpisanie umowy z niekorzystnymi warunkami, niedopełnienie wymaganych ujawnień nieruchomości zgodnie z prawem Illinois, przeoczenie wad tytułu, które mogą opóźnić lub udaremnić zamknięcie, oraz niewłaściwe obchodzenie się z zadatkiem. Doświadczony adwokat ds. nieruchomości eliminuje te ryzyka i zapewnia prawidłowe przeprowadzenie transakcji.",
  },
];

export default function ForSaleByOwnerPagePL() {
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
              { name: "Materiały", url: "/pl/resources" },
              { name: "Usługi prawne przy sprzedaży bez pośrednika" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Usługi prawne przy sprzedaży bez pośrednika (FSBO)
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Reprezentacja adwokacka dla właścicieli domów w Illinois
            sprzedających bez agenta.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Sprzedaż bez pośrednika" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Reprezentacja FSBO</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Sprzedawaj dom bez agenta — ale nie bez adwokata
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              W Illinois nie potrzebujesz agenta nieruchomości, aby sprzedać
              swój dom — ale wciąż potrzebujesz adwokata ds. nieruchomości.
              Każda mieszkaniowa transakcja nieruchomości w Illinois obejmuje
              przegląd prawny, a dla sprzedających FSBO adwokat staje się
              głównym obrońcą Państwa interesów przez cały proces.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Sprzedający FSBO stają przed wyjątkowymi wyzwaniami prawnymi. Bez
              agenta zajmującego się dokumentacją i negocjacjami
              odpowiedzialność za warunki umowy, ujawnienia, kwestie tytułu
              własności i koordynację zamknięcia spoczywa w pełni na Państwu.
              REAL Law Group wkracza w tę lukę. Zapewniamy wskazówki prawne i
              wsparcie transakcyjne, których sprzedający FSBO potrzebują, aby
              pewnie zamknąć transakcję i chronić swój kapitał.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Dlaczego sprzedający FSBO potrzebują adwokata
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Kiedy sprzedajesz bez agenta, Twój adwokat zajmuje się pracą
              prawną, która chroni Cię od umowy po zamknięcie:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fsboServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Ile można zaoszczędzić dzięki FSBO?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Główną zaletą sprzedaży bez pośrednika jest wyeliminowanie
              prowizji realtora.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Honoraria adwokackie za obsługę prawnej strony transakcji są
              rozliczane w formie ryczałtu. Otrzymują Państwo pełną
              reprezentację prawną na każdym etapie sprzedaży — przegląd umowy,
              sprawy tytułowe, negocjacje i zamknięcie.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Proces FSBO z REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Najczęstsze pytania
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Sprzedajesz dom bez agenta?"
        text="REAL Law Group zapewnia pełną reprezentację prawną dla sprzedających FSBO w całym Chicagoland. Zadzwoń (630) 299-7600 lub umów konsultację."
        buttonText="Umów konsultację"
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
            href="/pl/resources/closing-cost-calculator"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Kalkulator kosztów zamknięcia
          </a>
        </div>
      </section>
    </>
  );
}
