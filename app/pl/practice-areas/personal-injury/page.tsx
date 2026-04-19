import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Polecenia prawników ds. szkód osobowych — Chicago i okolice",
  description:
    "Odnieśli Państwo obrażenia w wypadku samochodowym? REAL Law Group łączy Państwa z doświadczonymi prawnikami ds. szkód osobowych, którzy walczą o należne odszkodowanie. Bezpłatna konsultacja. Zadzwoń pod (630) 299-7600.",
  path: "/pl/practice-areas/personal-injury",
});

const caseTypes = [
  "Wypadki samochodowe i z udziałem ciężarówek",
  "Wypadki motocyklowe",
  "Wypadki pieszych i rowerzystów",
  "Wypadki z udziałem przewoźników (Uber/Lyft)",
  "Upadki i poślizgnięcia",
  "Wypadki przy pracy",
];

const postAccidentSteps = [
  {
    step: "1",
    title: "Natychmiast szukaj pomocy medycznej",
    description:
      "Państwa zdrowie jest najważniejsze. Nawet jeśli obrażenia wydają się niewielkie, prosimy o kontrolę u lekarza. Opóźnione objawy są w wypadkach samochodowych powszechne, a udokumentowana dokumentacja medyczna ma kluczowe znaczenie dla roszczenia.",
  },
  {
    step: "2",
    title: "Udokumentuj miejsce zdarzenia",
    description:
      "Jeśli to możliwe, zrób zdjęcia pojazdów, warunków drogowych, znaków drogowych oraz widocznych obrażeń. Zapisz nazwiska i dane kontaktowe świadków. Ten materiał dowodowy może później zadecydować o wyniku sprawy.",
  },
  {
    step: "3",
    title: "Zgłoś sprawę policji",
    description:
      "Wezwij organy ścigania i złóż oficjalny raport z wypadku. Raport policyjny stanowi niezależny zapis zdarzenia, w tym obserwacje funkcjonariusza oraz ewentualne wystawione mandaty.",
  },
  {
    step: "4",
    title: "Nie udzielaj nagrywanych oświadczeń",
    description:
      "Likwidatorzy ubezpieczeniowi często szybko się kontaktują i proszą o nagrywane oświadczenie. Nie mają Państwo obowiązku go udzielać. Wszystko, co Państwo powiedzą, może zostać wykorzystane do zmniejszenia lub odrzucenia roszczenia.",
  },
  {
    step: "5",
    title: "Przed przyjęciem jakiejkolwiek ugody skontaktuj się z prawnikiem",
    description:
      "Firmy ubezpieczeniowe często składają wczesne propozycje ugody znacznie poniżej rzeczywistej wartości roszczenia. Doświadczony prawnik ocenia pełny zakres szkód — w tym przyszłe koszty leczenia i utratę zdolności zarobkowej — zanim rozważy się jakąkolwiek ugodę.",
  },
];

const faqs = [
  {
    question: "Ile kosztuje zatrudnienie prawnika ds. szkód osobowych?",
    answer:
      "W ramach sieci REAL Law Group sprawy szkód osobowych prowadzone są na zasadzie wynagrodzenia warunkowego (contingency fee). Oznacza to, że nie ma żadnych opłat z góry ani wynagrodzenia bez uzyskania odszkodowania. Wynagrodzenie prawnika stanowi procent uzyskanej ugody lub wyroku, więc nigdy nie płacą Państwo z własnej kieszeni.",
  },
  {
    question:
      "Ile czasu mam na złożenie roszczenia z tytułu szkody osobowej w Illinois?",
    answer:
      "W Illinois termin przedawnienia dla większości roszczeń z tytułu szkód osobowych wynosi dwa lata od daty wypadku. Istnieją jednak wyjątki, które mogą skracać lub wydłużać ten termin w zależności od okoliczności. Ważne jest, aby skonsultować się z prawnikiem możliwie szybko, w celu ochrony swoich praw.",
  },
  {
    question: "Jakie odszkodowanie mogę uzyskać po wypadku samochodowym?",
    answer:
      "W zależności od faktów Państwa sprawy mogą Państwu przysługiwać odszkodowania za koszty leczenia (przeszłe i przyszłe), utracone zarobki oraz zdolność zarobkową, ból i cierpienie, szkody majątkowe, a w niektórych przypadkach również odszkodowania karne. Prawnik oceni pełen zakres szkód, aby dążyć do maksymalnego odszkodowania.",
  },
  {
    question: "Co jeśli drugi kierowca nie posiada ubezpieczenia?",
    answer:
      "Illinois wymaga od kierowców posiadania ubezpieczenia OC, lecz nie wszyscy kierowcy przestrzegają tego obowiązku. Jeśli uderzy w Państwa kierowca bez ubezpieczenia lub z niewystarczającym ubezpieczeniem, własna polisa samochodowa może zapewnić ochronę dzięki zapisom o kierowcach nieubezpieczonych/niedoubezpieczonych. Prawnik przeanalizuje Państwa polisę i zidentyfikuje wszystkie dostępne źródła odszkodowania.",
  },
];

export default function PersonalInjuryPage() {
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
              { name: "Wypadki samochodowe i szkody osobowe" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Wypadki samochodowe i szkody osobowe
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Doświadczona reprezentacja prawna dla ofiar wypadków na terenie
            całego Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Szkody osobowe" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Szkody osobowe</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Walczymy o ofiary wypadków na terenie Chicagoland
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Jeśli Państwo lub ktoś bliski odnieśli obrażenia w wypadku
              samochodowym, zasługują Państwo na reprezentację prawną, która
              stawia na pierwszym miejscu Państwa powrót do zdrowia oraz Państwa
              prawa. REAL Law Group pomaga ofiarom wypadków uzyskać należne
              odszkodowanie poprzez sieć zaufanych prawników ds. szkód osobowych
              z udokumentowanymi sukcesami w sądach Illinois.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Od pierwszej konsultacji aż po ugodę lub proces naszą rolą jest
              skojarzenie Państwa z odpowiednim prawnikiem dla Państwa sprawy
              oraz zapewnienie indywidualnego podejścia na każdym etapie.
              Państwo skupiają się na powrocie do zdrowia — my zajmujemy się
              walką prawną.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Rodzaje spraw, którymi się zajmujemy
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseTypes.map((caseType, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{caseType}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Co robić po wypadku samochodowym
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Kroki, które podejmą Państwo bezpośrednio po wypadku, mogą
              znacząco wpłynąć na wynik sprawy. Prosimy stosować się do
              poniższych wskazówek, aby chronić siebie i swoje roszczenie:
            </p>
            <div className="space-y-6">
              {postAccidentSteps.map((item) => (
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

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Dlaczego warto wybrać REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Od 2016 roku REAL Law Group buduje reputację kancelarii, która
              stawia klientów na pierwszym miejscu. Kontaktując się z nami w
              sprawie szkody osobowej, otrzymują Państwo bezpłatną konsultację w
              celu oceny sprawy — bez zobowiązań i bez presji. Dzięki naszej
              sieci prawników ds. szkód osobowych Państwa sprawa prowadzona jest
              na zasadzie wynagrodzenia warunkowego, co oznacza, że nie płacą
              Państwo żadnych opłat, dopóki sprawa nie zakończy się sukcesem.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Każda sprawa traktowana jest indywidualnie. Nie działamy na masową
              skalę — skupiamy się na dopasowaniu Państwa do prawnika mającego
              konkretne doświadczenie w Państwa rodzaju obrażeń oraz zasoby
              umożliwiające uzyskanie maksymalnego odszkodowania.
            </p>
          </div>

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
        heading="Odnieśli Państwo obrażenia w wypadku? Zamów bezpłatną konsultację."
        text="Zadzwoń do REAL Law Group pod (630) 299-7600 lub umów konsultację, aby omówić swoją sprawę z doświadczonym prawnikiem ds. szkód osobowych."
        buttonText="Bezpłatna konsultacja"
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
              href="/pl/practice-areas/business-law"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prawo gospodarcze
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
