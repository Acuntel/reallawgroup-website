import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prawnik ds. trustów gruntowych w Illinois — tworzenie i obsługa",
  description:
    "Chroń swoją nieruchomość za pomocą trustu gruntowego w Illinois. REAL Law Group pomaga właścicielom nieruchomości tworzyć trusty gruntowe zapewniające prywatność, ochronę aktywów oraz uproszczone planowanie spadkowe na terenie Chicagoland. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas/land-trusts",
});

const benefits = [
  {
    title: "Prywatność",
    description:
      "Państwa nazwisko nie pojawia się w rejestrach publicznych — tytuł własności posiada powiernik, co zachowuje poufność własności przed każdym, kto przeszukuje rejestry hrabstwa.",
  },
  {
    title: "Unikanie postępowania spadkowego",
    description:
      "Udziały beneficjenta w truście gruntowym są zgodnie z prawem Illinois traktowane jako mienie osobiste, co umożliwia ich przekazywanie poza postępowaniem spadkowym.",
  },
  {
    title: "Łatwiejsze transfery",
    description:
      "Przeniesienie nieruchomości sprowadza się do zmiany wskazania beneficjenta — nie trzeba rejestrować nowego aktu własności, płacić podatków transferowych ani powiadamiać pożyczkodawców.",
  },
  {
    title: "Ochrona aktywów",
    description:
      "Ponieważ własność nie jest publicznie ujawniana, wierzycielom i stronom procesowym znacznie trudniej zidentyfikować Państwa nieruchomości i ustanowić na nich zabezpieczenia.",
  },
  {
    title: "Ochrona przed odpowiedzialnością",
    description:
      "Oddzielenie Państwa nazwiska od własności nieruchomości dodaje dodatkową warstwę dystansu między Państwem a ewentualnymi roszczeniami wynikającymi z nieruchomości.",
  },
  {
    title: "Zarządzanie wieloma nieruchomościami",
    description:
      "Inwestorzy posiadający kilka nieruchomości mogą umieścić każdą z nich w osobnym truście, co ułatwia zarządzanie portfelem i oddziela odpowiedzialność pomiędzy poszczególnymi nieruchomościami.",
  },
  {
    title: "Ochrona przed podziałem",
    description:
      "Gdy kilka stron posiada udziały beneficjalne, struktura trustu zapobiega temu, by pojedynczy współwłaściciel wymusił sprzedaż nieruchomości w drodze podziału.",
  },
];

const candidates = [
  "Inwestorzy nieruchomościowi zarządzający wieloma nieruchomościami w Chicagoland",
  "Wynajmujący, którzy chcą zachować swoją tożsamość w tajemnicy przed najemcami i opinią publiczną",
  "Właściciele nieruchomości zawodowo lub biznesowo narażeni na większe ryzyko pozwów",
  "Rodziny prowadzące planowanie spadkowe, które chcą uniknąć postępowania spadkowego w odniesieniu do nieruchomości",
  "Właściciele firm, którzy chcą oddzielić prywatne nieruchomości od aktywów i zobowiązań biznesowych",
];

const faqs = [
  {
    question: "Ile kosztuje utworzenie trustu gruntowego w Illinois?",
    answer:
      "Koszty zależą od złożoności struktury, liczby nieruchomości oraz wybranego powiernika. REAL Law Group oferuje przejrzyste ceny i omawia opłaty z góry podczas pierwszej konsultacji. Prosimy o kontakt pod numerem (630) 299-7600, aby otrzymać wycenę.",
  },
  {
    question: "Czy trust gruntowy chroni moją nieruchomość przed pozwami?",
    answer:
      "Trust gruntowy zapewnia prywatność — usuwa Państwa nazwisko z rejestrów publicznych, utrudniając potencjalnym powodom ustalenie, jakie nieruchomości Państwo posiadają. Sam trust gruntowy nie sprawia jednak, że nieruchomość jest odporna na wyroki. Dla silniejszej ochrony wielu klientów łączy trust gruntowy z LLC lub trustem za życia.",
  },
  {
    question: "Czy mogę być własnym powiernikiem trustu gruntowego w Illinois?",
    answer:
      "Technicznie tak, jednak takie rozwiązanie niweczy główny cel trustu — prywatność. Jeśli sami pełnią Państwo funkcję powiernika, Państwa nazwisko nadal widnieje w rejestrach publicznych. Większość klientów korzysta z usług powiernika korporacyjnego, zaufanej osoby lub własnego prawnika, aby zachować poufność.",
  },
  {
    question:
      "Czy trust gruntowy wpłynie na moją hipotekę lub podatki od nieruchomości?",
    answer:
      "Przeniesienie nieruchomości do trustu gruntowego zasadniczo nie wyzwala klauzuli due-on-sale na mocy ustawy Garn-St. Germain, pod warunkiem że pozostają Państwo beneficjentem oraz nadal zajmują lub zarządzają nieruchomością tak jak wcześniej. Podatki od nieruchomości również nie ulegają zmianie — nieruchomość zachowuje ten sam PIN i dotychczasową ocenę podatkową.",
  },
  {
    question:
      "Jaka jest różnica między trustem gruntowym a spółką LLC w posiadaniu nieruchomości?",
    answer:
      "Trust gruntowy zapewnia prywatność i łatwość transferu, ale nie oferuje takiej samej tarczy ochronnej przed odpowiedzialnością, jaką daje właściwie prowadzona spółka LLC. LLC stanowi formalną prawną barierę oddzielającą zobowiązania związane z nieruchomością od Państwa majątku osobistego. Wielu inwestorów stosuje oba rozwiązania — umieszcza nieruchomość w truście gruntowym, a LLC wyznacza jako beneficjenta — aby uzyskać zalety obu struktur.",
  },
  {
    question: "Jak długo trwa utworzenie trustu gruntowego?",
    answer:
      "Po uzyskaniu wszystkich niezbędnych informacji umowa trustu oraz akt własności mogą zostać przygotowane zwykle w ciągu jednego do dwóch tygodni. Rejestracja aktu w hrabstwie dodaje kilka dodatkowych dni roboczych. Cały proces od konsultacji do zakończenia zajmuje zazwyczaj od dwóch do trzech tygodni.",
  },
];

export default function LandTrustsPage() {
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
              { name: "Trusty gruntowe w Illinois" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Trusty gruntowe w Illinois
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Trusty gruntowe w Illinois" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-text-muted leading-relaxed mb-6">
              Illinois jest jednym z niewielu stanów, które uznają trusty
              gruntowe — potężne narzędzie prawne dla właścicieli nieruchomości
              poszukujących prywatności, ochrony aktywów i uproszczonego
              planowania spadkowego. Niezależnie od tego, czy posiadają Państwo
              pojedynczą nieruchomość na wynajem, czy cały portfel inwestycyjny,
              trust gruntowy może zapewnić istotne korzyści, których nie dają
              inne struktury własności.
            </p>
            <p className="text-text-muted leading-relaxed">
              REAL Law Group pomaga klientom z rejonu Chicago w tworzeniu,
              zarządzaniu i doradztwie w zakresie trustów gruntowych w Illinois.
              Nasi prawnicy znają niuanse prawa trustowego Illinois i ściśle
              współpracują z każdym klientem, aby struktura własności była
              dopasowana do jego celów.
            </p>
          </div>

          {/* What Is a Land Trust */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Czym jest trust gruntowy?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Trust gruntowy to konstrukcja prawna, w której tytuł własności
              nieruchomości posiada powiernik — zwykle bank, firma trustowa lub
              wskazana osoba — na rzecz jednego lub kilku beneficjentów.
              Beneficjentem zazwyczaj jest sam właściciel nieruchomości, który
              zachowuje pełną kontrolę, w tym prawo do zarządzania, wynajmu,
              obciążenia hipoteką i sprzedaży nieruchomości.
            </p>
            <p className="text-text-muted leading-relaxed">
              Kluczowa różnica polega na tym, że to nazwisko powiernika, a nie
              beneficjenta, widnieje w rejestrach publicznych. Tworzy to warstwę
              prywatności, która jest unikalna dla struktury trustu gruntowego i
              stanowi jeden z głównych powodów, dla których właściciele
              nieruchomości w Illinois wybierają to rozwiązanie.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Korzyści trustu gruntowego w Illinois
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text">
                      {benefit.title}:{" "}
                    </span>
                    <span className="text-text-muted">
                      {benefit.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Consider */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Kto powinien rozważyć trust gruntowy?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Trusty gruntowe nie są zarezerwowane wyłącznie dla dużych
              inwestorów. Każdy właściciel nieruchomości w Illinois może
              skorzystać z prywatności i elastyczności, jakie daje trust
              gruntowy. Klienci, którzy zyskują najwięcej dzięki tej strukturze,
              to:
            </p>
            <div className="space-y-3">
              {candidates.map((candidate, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-text-muted">{candidate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Land Trust vs Living Trust */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Trust gruntowy a trust za życia
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Klienci często pytają, czym trust gruntowy różni się od trustu za
              życia. Oba są użytecznymi narzędziami planowania spadkowego, lecz
              służą różnym celom:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="section-label mb-3">Trust gruntowy</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>Obejmuje wyłącznie nieruchomości</li>
                  <li>Głównym celem jest prywatność</li>
                  <li>Charakterystyczny dla Illinois i kilku innych stanów</li>
                  <li>
                    Beneficjent zachowuje pełną kontrolę nad nieruchomością
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="section-label mb-3">Trust za życia</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>
                    Obejmuje dowolny rodzaj aktywów — nieruchomości, rachunki,
                    inwestycje
                  </li>
                  <li>Głównym celem jest uniknięcie postępowania spadkowego</li>
                  <li>Dostępny we wszystkich 50 stanach</li>
                  <li>Zapewnia kompleksową strukturę planowania spadkowego</li>
                </ul>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              Wielu naszych klientów łączy oba rozwiązania — umieszczają
              nieruchomość w truście gruntowym, a następnie jako beneficjenta
              wskazują trust za życia. To połączenie zapewnia prywatność podczas
              trwania własności oraz płynny transfer po śmierci bez konieczności
              postępowania spadkowego, dając Państwu najsilniejszą ochronę
              dostępną na mocy prawa Illinois.
            </p>
          </div>

          {/* Setting Up */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Tworzenie trustu gruntowego z REAL Law Group
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Utworzenie trustu gruntowego pod okiem doświadczonego prawnika
              jest prostym procesem. Tak pracujemy z klientami:
            </p>
            <ol className="space-y-4 text-text-muted leading-relaxed list-decimal list-inside">
              <li>
                <span className="font-semibold text-text">Konsultacja</span> —
                omawiamy Państwa cele, posiadane nieruchomości oraz całokształt
                planu spadkowego, aby ustalić, czy trust gruntowy jest
                odpowiednim rozwiązaniem.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Sporządzenie umowy trustu
                </span>{" "}
                — przygotowujemy spersonalizowaną umowę trustu określającą
                obowiązki powiernika, prawa beneficjenta i warunki trustu.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Wybór powiernika
                </span>{" "}
                — pomagamy wybrać odpowiedniego powiernika, niezależnie od tego,
                czy będzie to powiernik korporacyjny, osoba fizyczna czy inny
                podmiot.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Rejestracja aktu własności
                </span>{" "}
                — rejestrowany jest nowy akt własności przenoszący nieruchomość
                z Państwa nazwiska do trustu, co finalizuje zmianę w rejestrach
                publicznych.
              </li>
              <li>
                <span className="font-semibold text-text">
                  Zarządzanie wskazaniami beneficjentów
                </span>{" "}
                — pomagamy przy pierwszym wskazaniu beneficjentów oraz wszelkich
                przyszłych zmianach, dbając o to, by Państwa interesy zawsze
                były właściwie udokumentowane.
              </li>
            </ol>
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
        heading="Chcą Państwo chronić swoją nieruchomość za pomocą trustu gruntowego?"
        text="Prosimy o kontakt z REAL Law Group, aby omówić, w jaki sposób trust gruntowy w Illinois wpisuje się w Państwa ogólną strategię nieruchomościową i spadkową."
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
              href="/pl/practice-areas/estate-planning"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Planowanie spadkowe
            </a>
            <a
              href="/pl/practice-areas/building-violations"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Naruszenia przepisów budowlanych
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
