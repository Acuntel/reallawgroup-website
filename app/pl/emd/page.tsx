import { CheckCircle, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Zadatek (Earnest Money): najczęstsze pytania",
  description:
    "Najczęstsze pytania dotyczące zadatku (earnest money) w REAL Law Group: jak działa zadatek, kiedy podlega zwrotowi, a kiedy przepada. Zadzwoń (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/emd",
});

const refundReasons = [
  {
    title: "W okresie przeglądu przez adwokata",
    description:
      "Umowy mieszkaniowe zazwyczaj obejmują okres przeglądu przez adwokata. Każda ze stron może odstąpić od umowy w ramach tej klauzuli warunkującej.",
  },
  {
    title: "Podczas inspekcji domu",
    description:
      "Jeśli strony nie mogą uzgodnić odpowiedzi na wyniki inspekcji, kupujący może odstąpić od umowy na podstawie klauzuli inspekcyjnej.",
  },
  {
    title: "Klauzula finansowania (odmowa kredytu)",
    description:
      "Gdy kupujący nie jest w stanie uzyskać pisemnego zobowiązania kredytowego, klauzula finansowania chroni wpłacony zadatek.",
  },
  {
    title: "Wady tytułu własności",
    description:
      "Jeśli tytuł własności nie może zostać oczyszczony zgodnie z wymogami umowy, kupujący może odstąpić od umowy.",
  },
];

const forfeitReasons = [
  {
    title: "Odstąpienie po wygaśnięciu klauzul warunkujących",
    description:
      "Po spełnieniu wszystkich klauzul warunkujących, odstąpienie bez podstawy umownej zazwyczaj uprawnia sprzedającego do zatrzymania zadatku jako odszkodowania zryczałtowanego.",
  },
];

const faqs = [
  {
    question: "Ile zadatku powinienem wpłacić w regionie Chicagoland?",
    answer:
      "W aglomeracji chicagowskiej zadatki zazwyczaj wynoszą od 1% do 3% ceny zakupu. Przy domu za 350 000 USD oznacza to od 3 500 do 10 500 USD. W konkurencyjnych dzielnicach lub przy wielu ofertach kupujący niekiedy oferują więcej, aby wykazać silniejsze zaangażowanie. Państwa adwokat ds. nieruchomości może doradzić odpowiednią kwotę w oparciu o konkretny rynek i nieruchomość.",
  },
  {
    question: "Kto przechowuje zadatek?",
    answer:
      "Zadatek jest zazwyczaj przechowywany w depozycie (escrow) przez agenta nieruchomości sprzedającego lub firmę tytułową. Środki pozostają w depozycie i nie są uwalniane do czasu zamknięcia transakcji lub wspólnej zgody obu stron na ich wypłatę.",
  },
  {
    question: "Kiedy należy wpłacić zadatek?",
    answer:
      "Zadatek należy zazwyczaj wpłacić w ciągu od jednego do trzech dni po zaakceptowaniu umowy. Termin jest zwykle określony w umowie kupna-sprzedaży.",
  },
  {
    question: "Czy zadatek jest tym samym co wkład własny?",
    answer:
      "Nie, ale są ze sobą powiązane. Zadatek to wpłata w dobrej wierze dokonywana przy podpisaniu umowy. Przy zamknięciu jest zazwyczaj zaliczany na poczet wkładu własnego i kosztów zamknięcia kupującego. Jeśli transakcja nie dojdzie do skutku, zadatek jest rozliczany zgodnie z warunkami umowy.",
  },
  {
    question: "Co się stanie, jeśli powstanie spór dotyczący zadatku?",
    answer:
      "Spory o zadatek nie są rzadkością w transakcjach nieruchomości. Jeśli kupujący i sprzedający nie zgadzają się co do tego, komu należy się zadatek, podmiot przechowujący depozyt nie może uwolnić środków, dopóki obie strony nie osiągną porozumienia lub sąd nie wyda nakazu wypłaty. W wielu przypadkach adwokaci obu stron negocjują rozwiązanie. Jeśli nie uda się osiągnąć porozumienia, sprawa może wymagać mediacji lub postępowania sądowego.",
  },
];

export default function EarnestMoneyFAQsPagePL() {
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
              { name: "Zadatek — najczęstsze pytania" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Zadatek — najczęstsze pytania
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Jak działają wpłaty w dobrej wierze w transakcjach nieruchomości.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Zadatek — najczęstsze pytania" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Czym jest zadatek (Earnest Money Deposit)?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Zadatek — powszechnie nazywany EMD (Earnest Money Deposit) — to
              wpłata w dobrej wierze dokonywana przez kupującego w momencie
              zawarcia umowy na zakup nieruchomości. Wpłata sygnalizuje
              sprzedającemu, że kupujący poważnie traktuje sfinalizowanie
              transakcji.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Zadatki są standardową częścią mieszkaniowych transakcji
              nieruchomości. Typowa wpłata wynosi od 1% do 3% ceny zakupu, choć
              kwota jest negocjowalna. Przy domu za 400 000 USD oznacza to
              zadatek w wysokości od 4 000 do 12 000 USD.
            </p>
            <p className="text-text-muted leading-relaxed">
              Zadatek jest przechowywany w depozycie (escrow) przez cały czas
              trwania transakcji i zostaje zaliczony na poczet wkładu własnego
              oraz kosztów zamknięcia kupującego przy zamknięciu transakcji.
              Jeżeli transakcja nie dojdzie do skutku, to, czy kupujący odzyska
              pieniądze, zależy od warunków umowy i powodu niezamknięcia
              transakcji.
            </p>
          </div>

          {/* How EMD Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Jak działa zadatek
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="bg-light-gold rounded-xl p-8">
              <div className="space-y-6">
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Kiedy jest wpłacany
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Zadatek należy zazwyczaj wpłacić w ciągu 1-3 dni po
                    zaakceptowaniu umowy. Termin jest określony w umowie
                    kupna-sprzedaży. Wpłata zwykle odbywa się przelewem
                    bankowym.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Kto go przechowuje
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Zadatek jest przechowywany w depozycie przez agenta
                    nieruchomości sprzedającego lub firmę tytułową. Środki nie
                    są dostępne dla żadnej ze stron do momentu zamknięcia
                    transakcji lub wspólnej zgody obu stron na ich wypłatę.
                  </p>
                </div>
                <div className="gold-border-left pl-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Przy zamknięciu
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Gdy transakcja zostaje pomyślnie zamknięta, zadatek jest
                    zaliczany na poczet całkowitej kwoty należnej od kupującego
                    przy zamknięciu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When Refundable */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Kiedy zadatek podlega zwrotowi
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Umowy kupna-sprzedaży zazwyczaj zawierają klauzule warunkujące,
              które chronią zadatek kupującego.
            </p>
            <div className="space-y-4">
              {refundReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When Forfeited */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Kiedy można stracić zadatek
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-4">
              {forfeitReasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-200"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-primary mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Much */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Ile zadatku należy wpłacić?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Odpowiednia kwota zależy od lokalnego rynku, nieruchomości oraz
              tego, jak konkurencyjna ma być Państwa oferta. W regionie
              Chicagoland standardowy przedział to 1% do 3% ceny zakupu.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  1%
                </p>
                <p className="text-sm text-text-muted">
                  Dolna granica — częste na wolniejszych rynkach lub przy
                  mniejszej konkurencji
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  1-3%
                </p>
                <p className="text-sm text-text-muted">
                  Standardowy przedział — typowy dla większości transakcji na
                  przedmieściach Chicago
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border text-center">
                <p className="text-2xl font-heading font-bold text-secondary mb-1">
                  3%+
                </p>
                <p className="text-sm text-text-muted">
                  Konkurencyjne rynki — wiele ofert, popularne dzielnice lub
                  pożądane nieruchomości
                </p>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed">
              Wyższy zadatek może wyróżnić Państwa ofertę w konkurencyjnej
              sytuacji, ale oznacza też, że ryzykują Państwo większą kwotą,
              jeśli transakcja upadnie poza ramami klauzul warunkujących.
              Adwokat z REAL Law Group pomoże Państwu określić kwotę, która
              wzmocni Państwa ofertę, zachowując ryzyko na akceptowalnym
              poziomie.
            </p>
          </div>

          {/* FAQs */}
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
        heading="Pytania o zadatek? Skontaktuj się z nami."
        text="REAL Law Group reprezentuje kupujących i sprzedających w transakcjach nieruchomości w całym Chicagoland. Zadzwoń (630) 299-7600 lub umów konsultację."
        buttonText="Umów konsultację"
      />
    </>
  );
}
