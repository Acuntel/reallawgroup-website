import Link from "next/link";
import { AlertTriangle, FileText, Gavel, Users } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ConsultationCTA,
  LegalDisclaimer,
} from "@/components/ebike/PageFooterBlocks";
import {
  AGE_RULES,
  BEFORE_JANUARY,
  CATEGORIES,
  LAW,
  MOTOR_DRIVEN_DUTIES,
  NOT_IN_THE_LAW,
  WHERE_RULES,
} from "./content";
import { FAQS } from "./faqs";
import {
  ActionList,
  AgeRules,
  CategoryCards,
  DutyList,
  MythList,
  SummaryCard,
  WhereRules,
} from "@/components/ebike/GuideSections";

const TITLE = "Prawo Illinois o Rowerach Elektrycznych 2027: Co Się Zmienia";
const DESCRIPTION =
  "Nowe prawo Illinois dotyczące rowerów elektrycznych i skuterów wchodzi w życie 1 stycznia 2027 r. Minimalny wiek 15 i 16 lat, zakaz jazdy po chodnikach, prawo jazdy i ubezpieczenie dla maszyn powyżej 750 watów oraz uchylenie przepisów lokalnych.";

export const metadata = generatePageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/pl/resources/illinois-e-bike-law",
});

export default function PrawoRoweryElektryczneIllinoisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: TITLE,
              description: DESCRIPTION,
              path: "/pl/resources/illinois-e-bike-law",
              datePublished: "2026-09-09",
              dateModified: "2026-09-09",
              inLanguage: "pl-PL",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Materiały", url: "/pl/resources" },
              { name: "Prawo o rowerach elektrycznych w Illinois" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prawo Illinois o Rowerach Elektrycznych: Co Zmienia Się 1 Stycznia
            2027 r.
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Illinois ma już stanowe ramy prawne dla rowerów elektrycznych,
            skuterów i mocniejszych maszyn sprzedawanych jako e-moto. Ustalają
            minimalny wiek 15 i 16 lat, utrzymują wszystkie te urządzenia poza
            chodnikami, wymagają prawa jazdy, tytułu własności, rejestracji i
            ubezpieczenia dla wszystkiego, co ma silnik powyżej 750 watów, oraz
            odbierają samorządom możliwość ustanawiania własnych przepisów.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Prawo o rowerach elektrycznych" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SummaryCard heading="Najkrócej">
            <li>
              Ustawa to {LAW.publicAct}, uchwalona jako {LAW.bill}. Gubernator
              zatwierdził ją {LAW.approved}, a wchodzi w życie{" "}
              <strong className="text-text">{LAW.effective}</strong>
            </li>
            <li>
              Jeżeli rower ma pedały i silnik poniżej 750 watów, w kwestii
              uprawnień nic się nie zmienia. Nadal nie ma wymogu prawa jazdy,
              tablicy, rejestracji ani ubezpieczenia.
            </li>
            <li>
              Jeżeli silnik przekracza 750 watów, Illinois traktuje maszynę jako
              pojazd napędzany silnikiem, a to oznacza prawo jazdy, tytuł
              własności, rejestrację i ubezpieczenie.
            </li>
            <li>
              Pojawiają się granice wieku dla zwykłych rowerów elektrycznych: 15
              lat dla Klasy 1 i Klasy 2, 16 lat dla Klasy 3 oraz 16 lat dla
              każdego skutera, deskorolki i monocykla.
            </li>
          </SummaryCard>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Sprostowanie, od którego trzeba zacząć
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Znaczna część nadal krążących doniesień opisuje inny projekt ustawy.
            SB 3336, wspierany przez Sekretarza Stanu Alexiego Giannouliasa,
            przeszedł Senat Illinois 54 do 0 dnia 15 kwietnia 2026 r., a Izbę 80
            do 30 dnia 27 maja z dwiema poprawkami. Senat miał następnie
            zagłosować nad przyjęciem tych poprawek i nigdy tego nie zrobił.
            Dnia 2 lipca 2026 r. projekt został skierowany z powrotem do komisji
            na podstawie Reguły 3-9(b) Senatu, czyli tam, gdzie projekty
            pozostają bez dalszego biegu. SB 3336 nie jest prawem.
          </p>
          <p className="text-text-muted leading-relaxed mb-6">
            Przepisy jednak stały się prawem, tylko w innym projekcie. Poprawka
            nr 1 Izby przeniosła je do SB 3484, zbiorczego projektu Sekretarza
            Stanu. Przeszedł obie izby 1 czerwca 2026 r., Gubernator podpisał go
            26 sierpnia 2026 r., a dziś jest to {LAW.publicAct}. Wszystko na tej
            stronie pochodzi z uchwalonego tekstu, a nie z doniesień o
            projekcie, który utknął.
          </p>
          <div className="flex flex-wrap gap-4 mb-14 text-sm">
            <a
              href={LAW.textUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <FileText className="w-4 h-4" />
              Przeczytać {LAW.publicAct}
            </a>
            <a
              href={LAW.statusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              <Gavel className="w-4 h-4" />
              Historia legislacyjna SB 3484
            </a>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Krok pierwszy: ustalić kategorię urządzenia
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Wszystkie zasady nowej ustawy zależą od kategorii, a kategoria
            zależy od silnika. Najważniejsza liczba to moc w watach podana na
            etykiecie producenta.
          </p>
          <CategoryCards items={CATEGORIES} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Minimalny wiek kierującego
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            To zmiana, którą rodziny odczują najszybciej. Wcześniej Illinois
            ustalało minimalny wiek tylko dla rowerów elektrycznych Klasy 3,
            więc dwunastolatek na rowerze Klasy 2 z manetką jeździł legalnie. To
            kończy się {LAW.effective}
          </p>
          <AgeRules
            items={AGE_RULES}
            headings={{
              device: "Urządzenie",
              age: "Wiek",
              change: "Co jest inne",
            }}
          />

          <div className="border-l-4 border-secondary bg-light-gold p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold mb-2">
                  Zasada o pasażerach, o której prawie nikt nie mówi
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Rower elektryczny, rower spalinowy lub pojazd napędzany
                  silnikiem zbudowany do przewozu pasażera nie może być używany
                  przez osobę poniżej 18 lat wiozącą pasażera, chyba że
                  pasażerem jest rodzeństwo, rodzeństwo przyrodnie, dziecko lub
                  pasierb kierującego. Dwoje nastolatków na jednym rowerze
                  elektrycznym staje się naruszeniem {LAW.effective} W przypadku
                  skuterów i podobnych urządzeń nie ma żadnego wyjątku
                  rodzinnego: żadnego pasażera, o ile urządzenie nie zostało
                  zaprojektowane dla więcej niż jednej osoby.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Gdzie można jeździć poszczególnymi urządzeniami
          </h2>
          <WhereRules
            items={WHERE_RULES}
            labels={{ allowed: "Dozwolone.", banned: "Niedozwolone." }}
          />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Jeżeli maszyna przekracza 750 watów
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Przeklasyfikowanie jest istotą tej ustawy. Silnik elektryczny o mocy
            powyżej 750 i do 8 000 watów czyni maszynę pojazdem napędzanym
            silnikiem, a wraz z tym pojawia się pełny zestaw obowiązków
            właściwych pojazdom silnikowym. To kategoria, do której należy
            większość elektrycznych maszyn w stylu motocrossowym, niezależnie od
            tego, jak nazwał je sklep przy sprzedaży.
          </p>
          <DutyList items={MOTOR_DRIVEN_DUTIES} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Czego ustawa nie robi
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Kilka często powtarzanych twierdzeń o tej ustawie nie znajduje się w
            uchwalonym tekście.
          </p>
          <MythList items={NOT_IN_THE_LAW} />

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Co zrobić przed 1 stycznia
          </h2>
          <ActionList items={BEFORE_JANUARY} />

          <div className="rounded-xl border border-border bg-background p-6 mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                Jeżeli ktoś już został poszkodowany, pytania prawne są inne niż
                kwestie zgodności omawiane na tej stronie. Ochrona
                ubezpieczeniowa tych urządzeń nie podąża za kategoriami Kodeksu
                Drogowego, a terminy na wniesienie roszczenia w Illinois są
                krótsze, niż większość osób przypuszcza.{" "}
                <Link
                  href="/pl/practice-areas/e-bike-accidents"
                  className="text-secondary font-semibold hover:underline"
                >
                  Zobaczyć naszą stronę o roszczeniach za obrażenia na rowerze i
                  skuterze elektrycznym
                </Link>
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Często Zadawane Pytania
          </h2>
          <FAQAccordion items={FAQS} />

          <LegalDisclaimer
            label="Zastrzeżenie prawne"
            paragraphs={[
              "Ta strona zawiera ogólne informacje o prawie stanu Illinois, aktualne na 9 września 2026 r. Nie jest to porada prawna, nie zastępuje lektury ustawy ani rozmowy z prawnikiem o Państwa sytuacji, a samo jej przeczytanie lub kontakt z nami nie tworzy relacji prawnik-klient. Ustawy są zmieniane, a agencje wydają do nich przepisy, więc przed oparciem się na jakimkolwiek streszczeniu prosimy potwierdzić aktualny tekst.",
            ]}
          />

          <ConsultationCTA
            heading="Pytania o to, jak dotyczy to Państwa?"
            body="Niezależnie od tego, czy chodzi o mandat, odholowaną maszynę, obrażenia czy rower sprzedany jako coś, czym nie jest, prosimy opowiedzieć, co się stało, a wyjaśnimy Państwa sytuację. Konsultacje są bezpłatne, w języku angielskim, hiszpańskim lub polskim."
            contactHref="/pl/contact"
            contactLabel="Kontakt z Kancelarią"
          />
        </div>
      </section>
    </>
  );
}
