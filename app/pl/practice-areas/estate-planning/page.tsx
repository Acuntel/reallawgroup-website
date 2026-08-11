import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prawnik ds. planowania spadkowego: testamenty i trusty w Illinois",
  description:
    "Usługi planowania spadkowego obejmujące testamenty, trusty, pełnomocnictwa, postępowanie spadkowe oraz ochronę aktywów na terenie Chicagoland. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas/estate-planning",
});

const services = [
  "Testamenty",
  "Testamenty życia (Living Wills)",
  "Trusty za życia (Living Trusts)",
  "Pełnomocnictwa",
  "Trusty gruntowe (Land Trusts)",
  "Obsługa trustów",
  "Postępowanie spadkowe (probate)",
  "Plany ochrony aktywów",
];

const faqs = [
  {
    question: "Jaka jest różnica między testamentem a trustem za życia?",
    answer:
      "Testament wchodzi w życie po śmierci i musi przejść przez probate — nadzorowane przez sąd postępowanie, które może trwać miesiącami i staje się dokumentem publicznym. Trust za życia działa natychmiast, całkowicie omija postępowanie spadkowe i zachowuje prywatność Państwa majątku. Dla wielu rodzin trust oznacza szybszą dystrybucję i niższe koszty dla spadkobierców.",
  },
  {
    question:
      "Czy potrzebuję planu spadkowego, jeśli nie posiadam znaczącego majątku?",
    answer:
      "Tak. Planowanie spadkowe to nie tylko dystrybucja majątku. Obejmuje również wyznaczenie osoby, która będzie podejmować decyzje medyczne i finansowe w przypadku Państwa niezdolności (poprzez pełnomocnictwa), wskazanie opiekunów małoletnich dzieci oraz zapewnienie realizacji Państwa woli. Bez planu decyduje za Państwa prawo stanu Illinois.",
  },
  {
    question: "Czym jest pełnomocnictwo i dlaczego go potrzebuję?",
    answer:
      "Pełnomocnictwo to dokument prawny upoważniający zaufaną osobę do działania w Państwa imieniu w sprawach finansowych lub zdrowotnych, jeśli sami nie będą Państwo w stanie. Bez niego rodzina może być zmuszona przejść kosztowny proces sądowy, aby uzyskać uprawnienia do zarządzania Państwa sprawami. Illinois uznaje zarówno finansowe, jak i zdrowotne pełnomocnictwa.",
  },
  {
    question: "Jak często powinienem aktualizować plan spadkowy?",
    answer:
      "Plan spadkowy należy przeglądać co 3–5 lat lub po ważnych wydarzeniach życiowych: ślubie, rozwodzie, narodzinach dziecka, znaczących zmianach majątkowych lub przeprowadzce do innego stanu. Prawo stanu Illinois również może się zmieniać w sposób wpływający na Państwa plan. Nasz zespół zapewnia stałe doradztwo, aby plan pozostawał aktualny.",
  },
  {
    question: "Czym jest postępowanie spadkowe (probate) i jak go uniknąć?",
    answer:
      "Probate to sądowy proces potwierdzania testamentu, spłaty zobowiązań i rozdziału majątku. W Illinois trwa zwykle 6–12 miesięcy i wiąże się z opłatami sądowymi oraz kosztami prawnymi. Można go uniknąć, stosując trusty za życia, współwłasność, oznaczenie beneficjentów oraz instrumenty transfer-on-death. Nasz zespół tworzy plany minimalizujące lub całkowicie eliminujące postępowanie spadkowe.",
  },
];

export default function EstatePlanningPage() {
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
              { name: "Planowanie spadkowe" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Planowanie spadkowe
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Planowanie spadkowe" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            Wykraczamy poza samo uporządkowanie transferu majątku — tworzymy
            indywidualne plany spadkowe i biznesowe, które chronią aktywa i
            minimalizują podatki zarówno za życia, jak i przez wiele lat po nim.
            Dobrze znamy przebieg postępowania spadkowego i zapewniamy doradztwo
            niezbędne do właściwego zaplanowania przyszłości dla Państwa oraz
            Państwa rodziny.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Nasze usługi z zakresu planowania spadkowego
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
        heading="Gotowi, aby zabezpieczyć przyszłość swojej rodziny?"
        text="Pomożemy Państwu stworzyć kompleksowy plan spadkowy dopasowany do Państwa potrzeb."
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
              href="/pl/real-estate-investors"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Inwestorzy nieruchomości
            </a>
          </div>
          <h3 className="font-heading text-lg text-primary mt-6 mb-3">
            Przydatne materiały
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/pl/resources/inherited-property"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Przewodnik po nieruchomości odziedziczonej
            </a>
            <a
              href="/pl/resources/quit-claim-deeds-illinois"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Akty zrzeczenia się w Illinois
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
