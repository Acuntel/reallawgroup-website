import Link from "next/link";
import { CheckCircle, FileWarning, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  caseTypes,
  ilStatutes,
  evidenceItems,
  processSteps,
  faqs,
} from "./content";

export const metadata = generatePageMetadata({
  title: "Prawnicy ds. naruszeń danych w Illinois — Chicago i DuPage County",
  description:
    "Otrzymali Państwo list o naruszeniu danych? REAL Law Group reprezentuje mieszkańców Illinois w sprawach naruszeń danych i prywatności. Bezpłatna ocena sprawy. (630) 299-7600.",
  path: "/pl/practice-areas/data-breach",
});

export default function DataBreachPage() {
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
              { name: "Naruszenia danych i prywatność" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Naruszenia danych i prywatność
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Reprezentujemy mieszkańców Illinois, których dane osobowe zostały
            ujawnione w wyniku naruszenia danych. Bezpłatna, poufna ocena sprawy
            — bez honorarium adwokackiego, chyba że uzyskają Państwo
            odszkodowanie.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Naruszenia danych i prywatność" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <p className="section-label">Naruszenia danych i prywatność</p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Otrzymali Państwo list powiadamiający o naruszeniu danych?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Jeśli firma wysłała Państwu list informujący, że Państwa dane
              osobowe zostały objęte naruszeniem danych, ten list istnieje,
              ponieważ wymaga tego prawo stanu Illinois. Oznacza to również, że
              Państwa numer Social Security, dokumentacja medyczna, konta
              finansowe lub inne prywatne informacje mogą znajdować się w rękach
              przestępców. Mogą Państwu przysługiwać prawa na mocy prawa
              stanowego Illinois i prawa federalnego — a szybkie działanie
              chroni zarówno Państwa tożsamość, jak i potencjalne roszczenie.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              REAL Law Group reprezentuje osoby i rodziny w rejonie Chicago,
              powiecie Cook i powiecie DuPage w sprawach naruszeń danych i
              prywatności, a aktywne sprawy prowadzi wspólnie z doświadczonymi
              ogólnokrajowymi kancelariami procesowymi zajmującymi się
              naruszeniami danych. Otrzymują Państwo lokalnego prawnika, z
              którym naprawdę można usiąść przy stole w Elmhurst — wspartego
              zasobami, jakich wymagają te sprawy.
            </p>

            <div className="bg-light-gold rounded-xl p-6 border border-secondary/30 flex items-start gap-4">
              <FileWarning className="w-7 h-7 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  List &bdquo;Notice of Data Breach&rdquo;? Proszę go zachować.
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  List wskazuje, jakie dane i kiedy zostały ujawnione — to
                  najważniejszy dokument w Państwa sprawie. Proszę go nie
                  wyrzucać. Następnie warto skorzystać z naszego{" "}
                  <Link
                    href="/pl/resources/data-breach-notification-letter"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    przewodnika krok po kroku: co zrobić po otrzymaniu listu o
                    naruszeniu danych w Illinois
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Illinois ma jedne z najsilniejszych przepisów o ochronie
              prywatności w USA
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-8">
              Illinois nie ma jednej kompleksowej ustawy o prywatności — zamiast
              tego obowiązuje zestaw wyspecjalizowanych przepisów, które łącznie
              dają mieszkańcom Illinois silniejsze środki ochrony prywatności
              niż w niemal każdym innym stanie:
            </p>
            <div className="space-y-6">
              {ilStatutes.map((statute) => (
                <div
                  key={statute.citation}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {statute.name}
                  </h3>
                  <a
                    href={statute.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-secondary font-semibold mb-3 hover:underline"
                  >
                    {statute.citation}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {statute.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Naruszenia, które analizujemy dla mieszkańców Illinois
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
              Co wzmacnia roszczenie z tytułu naruszenia danych?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              W 2025 roku Sąd Najwyższy stanu Illinois orzekł, że samo
              zwiększone ryzyko kradzieży tożsamości po naruszeniu zasadniczo
              nie wystarcza, aby pozwać o odszkodowanie w sądzie stanowym
              Illinois. Tym, co zamienia list powiadamiający w realne
              roszczenie, jest dokumentacja. Prosimy zachować i przynieść nam:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {evidenceItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Jak to działa — i ile to kosztuje
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

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Lokalna kancelaria do bezosobowego problemu
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Większość ofiar naruszeń danych szukających pomocy w internecie
              trafia na ogólnokrajowe &bdquo;fabryki zgłoszeń&rdquo;: zdjęcia ze
              stocka, anonimowe formularze i kancelarię, której nigdy nie
              zobaczą. REAL Law Group działa inaczej. Partner zarządzający{" "}
              <Link
                href="/pl/our-team"
                className="text-primary font-semibold underline hover:text-secondary"
              >
                Vincent Anthony Incopero
              </Link>{" "}
              i nasz zespół pracują w prawdziwym biurze w Elmhurst, obsługują
              klientów po angielsku, hiszpańsku i polsku, a rodzinom z rejonu
              Chicago służą od 2016 roku.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Gdy sprawa naruszenia danych wymaga zasobów typowych dla pozwów
              zbiorowych, prowadzimy ją wspólnie z doświadczonymi
              ogólnokrajowymi kancelariami procesowymi zajmującymi się
              naruszeniami danych — dzięki czemu otrzymują Państwo osobistą,
              lokalną opiekę bez rezygnacji z siły, jakiej te sprawy wymagają.
              Wcześniejsze wyniki nie gwarantują podobnego rezultatu; każda
              sprawa zależy od własnych okoliczności faktycznych.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Najczęściej zadawane pytania
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <FAQAccordion items={faqs} />
          </div>

          <p className="text-xs text-text-muted leading-relaxed border-t border-border pt-6">
            Reklama adwokacka. Niniejsza strona zawiera informacje ogólne dla
            mieszkańców Illinois i nie stanowi porady prawnej w żadnej
            konkretnej sprawie. Kontakt z REAL Law Group, P.C. lub wysłanie
            formularza nie tworzy relacji adwokat–klient i nie wstrzymuje biegu
            żadnego terminu przedawnienia ani innego terminu; reprezentacja
            rozpoczyna się dopiero po podpisaniu pisemnej umowy o świadczenie
            usług prawnych. Nasi prawnicy posiadają licencję w stanie Illinois.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Czy Państwa dane zostały ujawnione w wyniku naruszenia?"
        text="Prosimy zadzwonić do REAL Law Group pod numer (630) 299-7600 lub napisać do nas, aby uzyskać bezpłatną, poufną ocenę sprawy. Bez honorarium adwokackiego, chyba że uzyskają Państwo odszkodowanie."
        buttonText="Bezpłatna ocena sprawy"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Powiązane materiały
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pl/resources/data-breach-notification-letter"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Co zrobić po otrzymaniu listu o naruszeniu danych
            </Link>
            <Link
              href="/pl/resources/data-breach-prevention"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zapobieganie naruszeniom danych dla firm
            </Link>
            <Link
              href="/pl/practice-areas/business-law"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Prawo gospodarcze
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
