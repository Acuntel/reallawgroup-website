import { CheckCircle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Nieruchomość odziedziczona i postępowanie spadkowe",
  description:
    "Wskazówki dotyczące nieruchomości odziedziczonych i postępowania spadkowego w Illinois. Poznaj swoje możliwości zachowania, sprzedaży lub przeniesienia odziedziczonych domów i gruntów. Zadzwoń (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/inherited-property",
});

const sellingServices = [
  "Zgłoszenia i zatwierdzenia w sądzie spadkowym",
  "Wyszukiwanie tytułu i oczyszczanie tytułu odziedziczonej nieruchomości",
  "Obsługa zaległych kredytów hipotecznych, zastawów i długów podatkowych",
  "Koordynacja z agentami nieruchomości lub kupcami gotówkowymi",
  "Kwestie podatków transferowych i zysków kapitałowych",
  "Koordynacja zamknięcia i przygotowanie dokumentów",
];

const faqs = [
  {
    question:
      "Czy muszę przejść postępowanie spadkowe, aby sprzedać odziedziczoną nieruchomość w Illinois?",
    answer:
      "To zależy od tego, jak nieruchomość była utrzymywana. Jeśli zmarły posiadał nieruchomość wyłącznie na swoje nazwisko, bez trustu, współwłasności łącznej ani instrumentu transfer-on-death, postępowanie spadkowe jest zazwyczaj wymagane przed sprzedażą nieruchomości. Nieruchomości posiadane w land trust, living trust lub z aktem TOD często mogą całkowicie ominąć postępowanie spadkowe. Adwokat może przeanalizować akt własności i dokumenty spadkowe, aby ustalić, czy postępowanie spadkowe jest konieczne w Państwa sytuacji.",
  },
  {
    question:
      "Jak długo trwa postępowanie spadkowe w Illinois w przypadku nieruchomości?",
    answer:
      "Typowa sprawa spadkowa w Illinois trwa od 6 do 12 miesięcy, choć skomplikowane spadki ze sporami, niejasnym tytułem lub zaległymi długami mogą trwać dłużej. Jeśli musisz sprzedać nieruchomość w trakcie postępowania spadkowego, sąd musi zatwierdzić sprzedaż, co dodaje dodatkowe kroki do harmonogramu. Współpraca z doświadczonym adwokatem ds. spadków może pomóc sprawnie prowadzić proces.",
  },
  {
    question: "Czy muszę płacić podatki od odziedziczonej nieruchomości?",
    answer:
      "Illinois nie nakłada podatku od spadków, ale istnieją inne kwestie podatkowe. Podatki od nieruchomości pozostają wymagalne niezależnie od zmian własności. Jeśli sprzedasz odziedziczoną nieruchomość, możesz być zobowiązany do zapłaty federalnego podatku od zysków kapitałowych od wzrostu wartości powyżej podwyższonej podstawy (wartość rynkowa nieruchomości na dzień śmierci). Przy zamknięciu mogą również obowiązywać podatki transferowe. Zalecamy konsultację zarówno z adwokatem ds. nieruchomości, jak i z doradcą podatkowym, aby zrozumieć swoje konkretne zobowiązania.",
  },
  {
    question:
      "Co się stanie, jeśli tę samą nieruchomość odziedziczy kilku członków rodziny?",
    answer:
      "Gdy nieruchomość dziedziczy wielu spadkobierców, stają się oni współwłaścicielami (współwłasność w częściach ułamkowych). Wszyscy współwłaściciele muszą uzgodnić decyzje dotyczące nieruchomości — czy zachować ją, sprzedać czy wynająć. Jeśli współwłaściciele nie mogą dojść do porozumienia, każdy z nich może wnieść do sądu pozew o podział w celu wymuszenia sprzedaży. REAL Law Group pomaga rodzinom negocjować porozumienia i, w razie potrzeby, prowadzić postępowanie o podział.",
  },
  {
    question:
      "Czy mogę szybko sprzedać odziedziczony dom bez wystawiania go na rynku?",
    answer:
      "Tak. Wiele rodzin, które dziedziczą nieruchomość, woli szybszą i prostszą sprzedaż niż tradycyjny proces wystawiania na rynku. REAL Law Group współpracuje z siecią zaufanych inwestorów w nieruchomości i kupców gotówkowych, którzy kupują odziedziczone nieruchomości w stanie, w jakim się znajdują, często zamykając transakcje w ciągu kilku tygodni. Zajmujemy się stroną prawną, aby zapewnić prawidłowe przeprowadzenie sprzedaży i ochronę Państwa interesów.",
  },
];

export default function InheritedPropertyPagePL() {
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
              { name: "Nieruchomość odziedziczona i postępowanie spadkowe" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nieruchomość odziedziczona i postępowanie spadkowe
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Wsparcie prawne pełne zrozumienia dla rodzin mierzących się z
            odziedziczonymi nieruchomościami w Illinois.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Nieruchomość odziedziczona i postępowanie spadkowe" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-8 text-lg">
            Utrata bliskiej osoby jest wystarczająco trudna bez dodatkowego
            stresu związanego z decyzjami dotyczącymi jej majątku. Niezależnie
            od tego, czy odziedziczyli Państwo rodzinny dom, nieruchomość na
            wynajem czy niezabudowaną działkę, REAL Law Group prowadzi Państwa
            przez dostępne opcje z empatią i jasnością. Zajmujemy się prawnymi
            szczegółami, abyście Państwo mogli skupić się na tym, co
            najważniejsze.
          </p>

          {/* Options for Inherited Property */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Możliwości dotyczące odziedziczonej nieruchomości
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 mb-16">
            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Zachowanie nieruchomości
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Mogą Państwo zdecydować się na zamieszkanie w odziedziczonym
                domu lub utrzymanie go jako nieruchomości na wynajem. Tak czy
                inaczej, konieczne będzie przeniesienie tytułu na Państwa
                nazwisko, aktualizacja dokumentów podatku od nieruchomości oraz
                uregulowanie wszelkich zaległych zobowiązań na nieruchomości,
                takich jak kredyt hipoteczny lub niezapłacone podatki.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Sprzedaż nieruchomości
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Wielu spadkobierców decyduje się na sprzedaż, czy to poprzez
                tradycyjne wystawienie z agentem nieruchomości, czy szybszą
                sprzedaż inwestorowi lub kupcowi gotówkowemu. Sprzedaż
                odziedziczonej nieruchomości w Illinois często wymaga
                dodatkowych kroków prawnych, w tym zatwierdzenia przez sąd
                spadkowy, jeśli spadek nie został jeszcze rozliczony.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Przeniesienie na innego członka rodziny
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Jeśli inny członek rodziny chce otrzymać nieruchomość, można ją
                przenieść aktem. W zależności od okoliczności może to wymagać
                aktu zrzeczenia (quit claim deed), aktu z rękojmią (warranty
                deed) lub podziału za pośrednictwem postępowania spadkowego.
                Skutki podatkowe różnią się w zależności od sposobu
                przeniesienia.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Umieszczenie w truście
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Dla rodzin myślących długoterminowo umieszczenie odziedziczonej
                nieruchomości w truście może zapewnić stałą ochronę majątku,
                uprościć przyszłe przeniesienia i pomóc uniknąć postępowania
                spadkowego dla kolejnego pokolenia. Jest to szczególnie częste w
                przypadku wielopokoleniowych domów rodzinnych i nieruchomości
                inwestycyjnych.
              </p>
            </div>
          </div>

          {/* Illinois Probate Process */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Postępowanie spadkowe w Illinois dotyczące nieruchomości
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <p className="text-text-muted leading-relaxed mb-6">
            Gdy ktoś umiera, posiadając nieruchomość wyłącznie na swoje
            nazwisko, nieruchomość ta zazwyczaj musi przejść przez postępowanie
            spadkowe, zanim będzie mogła zostać legalnie przeniesiona lub
            sprzedana. Postępowanie spadkowe to nadzorowany przez sąd proces
            walidacji testamentu (jeśli istnieje), uregulowania długów i
            podziału majątku wśród prawowitych spadkobierców.
          </p>

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <h3 className="text-lg font-heading font-semibold mb-4">
              Kiedy postępowanie spadkowe może nie być wymagane
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Nie każda odziedziczona nieruchomość musi przechodzić przez
              postępowanie spadkowe. Prawo Illinois przewiduje kilka mechanizmów
              pozwalających nieruchomościom przejść poza postępowaniem
              spadkowym, w tym:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  Nieruchomość umieszczona w{" "}
                  <strong className="text-primary">land trust</strong> lub{" "}
                  <strong className="text-primary">living trust</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  Nieruchomość w{" "}
                  <strong className="text-primary">
                    współwłasności łącznej (joint tenancy)
                  </strong>{" "}
                  z prawem przeżycia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted text-sm">
                  <strong className="text-primary">
                    Instrumenty transfer-on-death (TOD)
                  </strong>{" "}
                  ujęte w akcie własności
                </span>
              </li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed mb-16">
            Gdy postępowanie spadkowe jest wymagane, proces w Illinois trwa
            zazwyczaj od 6 do 12 miesięcy. Harmonogram zależy od złożoności
            spadku, istnienia ewentualnych długów lub sporów oraz tempa, w jakim
            sąd rozpatruje zgłoszenia. Nasz zespół pracuje nad sprawnym
            prowadzeniem spraw spadkowych, informując Państwa na każdym etapie.
          </p>

          {/* Selling an Inherited Home */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Sprzedaż odziedziczonego domu
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <p className="text-text-muted leading-relaxed mb-8">
            Sprzedaż odziedziczonej nieruchomości obejmuje więcej elementów niż
            standardowa transakcja nieruchomości. Od oczyszczenia tytułu po
            spełnienie wymogów postępowania spadkowego, REAL Law Group obsługuje
            każdy aspekt prawny sprzedaży, dzięki czemu mogą Państwo iść dalej z
            pewnością siebie.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {sellingServices.map((service, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-text">{service}</span>
              </div>
            ))}
          </div>

          {/* Connect with Trusted Buyers */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Kontakt z zaufanymi kupującymi
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="bg-light-gold rounded-xl p-8 mb-16">
            <p className="text-text-muted leading-relaxed">
              Dla rodzin, które muszą szybko sprzedać odziedziczoną
              nieruchomość, REAL Law Group współpracuje z siecią zaufanych
              inwestorów w nieruchomości i kupców gotówkowych w całym
              Chicagoland. Są to zweryfikowani profesjonaliści, którzy kupują
              nieruchomości w stanie, w jakim się znajdują, często zamykając
              transakcje w ciągu tygodni, a nie miesięcy. Nie ma żadnego
              zobowiązania &mdash; po prostu dokonujemy przedstawienia i
              zajmujemy się prawną stroną transakcji, aby wszystko zostało
              prawidłowo przeprowadzone.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Najczęstsze pytania
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        heading="Odziedziczyłeś nieruchomość? Możemy pomóc."
        text="Nasi doświadczeni adwokaci ds. nieruchomości prowadzą rodziny przez każdy etap procesu odziedziczonej nieruchomości."
        buttonText="Umów konsultację"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/pl/practice-areas/estate-planning"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Planowanie spadkowe
          </a>
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
        </div>
      </section>
    </>
  );
}
