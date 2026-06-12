import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  steps,
  freezeVsAlert,
  dataTypeGuides,
  recentBreaches,
  faqs,
} from "./content";

export const metadata = generatePageMetadata({
  title: "List o naruszeniu danych? Co zrobić w Illinois",
  description:
    "Przewodnik krok po kroku po liście o naruszeniu danych w Illinois: jak zweryfikować list, zamrozić kredyt, udokumentować straty i poznać swoje prawa.",
  path: "/pl/resources/data-breach-notification-letter",
});

const ARTICLE_META = {
  title: "Co zrobić po otrzymaniu listu o naruszeniu danych w Illinois",
  description:
    "Przewodnik krok po kroku dla mieszkańców Illinois, którzy otrzymali list powiadamiający o naruszeniu danych: weryfikacja listu, zamrożenie kredytu, alerty o oszustwie i prawa ofiar.",
  path: "/pl/resources/data-breach-notification-letter",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
};

export default function DataBreachLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(ARTICLE_META)),
        }}
      />
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
              { name: "Przewodnik po liście o naruszeniu danych" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Otrzymali Państwo list o naruszeniu danych w Illinois?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Co oznacza ten list, siedem kroków do podjęcia teraz i prawa, jakie
            daje Państwu prawo stanu Illinois — prostym językiem.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Przewodnik po liście o naruszeniu danych" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-sm text-text-muted mb-10">
            Zweryfikowane przez:{" "}
            <Link
              href="/pl/our-team"
              className="text-primary font-semibold underline hover:text-secondary"
            >
              Vincent Anthony Incopero
            </Link>
            , Partner Zarządzający, REAL Law Group, P.C. · Licencja w stanie
            Illinois · Ostatnia aktualizacja: 12 czerwca 2026
          </p>

          <div className="mb-16">
            <p className="section-label">
              Przewodnik po liście o naruszeniu danych
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              &bdquo;Otrzymałem list, że moje dane osobowe zostały objęte
              naruszeniem danych.&rdquo;
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Bez paniki — ale też nie wolno tego ignorować. Ten list istnieje,
              ponieważ prawo stanu Illinois nakazało firmie Państwa
              poinformować. Zgodnie z Ustawą o Ochronie Danych Osobowych stanu
              Illinois (PIPA, 815 ILCS 530) firma, która ujawniła Państwa dane
              osobowe, musi powiadomić Państwa w możliwie najszybszym czasie i
              bez nieuzasadnionej zwłoki — a jeśli naruszenie dotyczy ponad 500
              mieszkańców Illinois, musi je również zgłosić Prokuratorowi
              Generalnemu stanu Illinois.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              &bdquo;Dane osobowe&rdquo; w rozumieniu prawa Illinois to imię i
              nazwisko w połączeniu z numerem Social Security, numerem prawa
              jazdy lub stanowego dowodu tożsamości, numerami kont finansowych
              lub kart, informacjami medycznymi, informacjami o ubezpieczeniu
              zdrowotnym lub danymi biometrycznymi — albo nazwa użytkownika lub
              adres e-mail w połączeniu z hasłem umożliwiającym dostęp do konta
              internetowego. Jeśli otrzymali Państwo list, najprawdopodobniej
              ujawniono co najmniej jedną z tych kategorii.
            </p>
            <p className="text-text-muted leading-relaxed">
              Oto co dokładnie należy zrobić, krok po kroku.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Co zrobić po liście o naruszeniu danych: 7 kroków
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {steps.map((item) => (
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
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href="https://www.annualcreditreport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                AnnualCreditReport.com
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.identitytheft.gov/databreach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                IdentityTheft.gov (FTC)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.illinoisattorneygeneral.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold underline hover:text-secondary"
              >
                Prokurator Generalny Illinois
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Zamrożenie kredytu czy alert o oszustwie: co wybrać?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Oba są bezpłatne. Zamrożenie kredytu to silniejsza ochrona; alert
              o oszustwie jest lżejszy i wygodniejszy. Jeśli ujawniono Państwa
              numer Social Security, większość ekspertów zaleca zamrożenie.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    {freezeVsAlert.headers.map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {freezeVsAlert.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-light-gold/50"}
                    >
                      <td className="px-4 py-3 font-semibold text-primary align-top">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 text-text-muted align-top">
                        {row.freeze}
                      </td>
                      <td className="px-4 py-3 text-text-muted align-top">
                        {row.alert}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Co robić w zależności od ujawnionych danych
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <div className="space-y-6">
              {dataTypeGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {guide.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Czy mogę pozwać za naruszenie danych w Illinois?
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Być może. Prawo stanu Illinois wymaga od firm utrzymywania
              rozsądnych środków bezpieczeństwa danych osobowych, a naruszenie
              stanowej ustawy o powiadamianiu o naruszeniach stanowi
              automatycznie bezprawną praktykę w rozumieniu Ustawy o Oszustwach
              Konsumenckich stanu Illinois. Ofiarom z udokumentowanymi stratami
              — nieautoryzowanymi obciążeniami, kontami otwartymi na ich
              nazwisko, wydatkami z własnej kieszeni — mogą przysługiwać
              roszczenia, a ujawnienie danych biometrycznych lub genetycznych
              może uruchamiać ustawy Illinois przewidujące odszkodowania
              ustawowe bez dowodu kradzieży tożsamości. Dlatego tak ważny jest
              krok 7 powyżej: dokumentacja zamienia list w roszczenie.
            </p>
            <div className="bg-light-gold rounded-xl p-6 border border-secondary/30 flex items-start gap-4">
              <ShieldCheck className="w-7 h-7 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Bezpłatna ocena sprawy dla mieszkańców Illinois
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  REAL Law Group reprezentuje mieszkańców Illinois w sprawach{" "}
                  <Link
                    href="/pl/practice-areas/data-breach"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    naruszeń danych i prywatności
                  </Link>{" "}
                  na zasadzie wynagrodzenia warunkowego — bez honorarium
                  adwokackiego, chyba że uzyskają Państwo odszkodowanie. Prosimy
                  przygotować list powiadamiający i{" "}
                  <Link
                    href="/pl/kontakt"
                    className="text-primary font-semibold underline hover:text-secondary"
                  >
                    skontaktować się z nami
                  </Link>{" "}
                  lub zadzwonić pod (630) 299-7600.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Naruszenia, które dotknęły mieszkańców Illinois
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
            <p className="text-text-muted leading-relaxed mb-6">
              Naruszenia danych nie są rzadkimi zdarzeniami, które przytrafiają
              się gdzieś indziej. Wśród niedawnych, publicznie zgłoszonych
              naruszeń dotykających mieszkańców Illinois są:
            </p>
            <div className="space-y-4">
              {recentBreaches.map((breach) => (
                <div key={breach.name} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <p className="text-sm text-text-muted leading-relaxed">
                    <span className="font-semibold text-primary">
                      {breach.name}:
                    </span>{" "}
                    {breach.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-muted leading-relaxed mt-6">
              Powyższa lista podsumowuje publiczne doniesienia i komunikaty w
              celach informacyjnych. Nie jest to lista pozwów i żaden sąd nie
              stwierdził, że którakolwiek z wymienionych firm naruszyła prawo.
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
            mieszkańców Illinois i nie stanowi porady prawnej w Państwa
            konkretnej sprawie. Kontakt z REAL Law Group, P.C. lub wysłanie
            formularza nie tworzy relacji adwokat–klient i nie wstrzymuje biegu
            żadnego terminu przedawnienia ani innego terminu; reprezentacja
            rozpoczyna się dopiero po podpisaniu pisemnej umowy o świadczenie
            usług prawnych.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Mają Państwo list o naruszeniu danych? Proszę sprawdzić swoją sytuację."
        text="Prosimy zadzwonić do REAL Law Group pod numer (630) 299-7600 lub napisać do nas, aby uzyskać bezpłatną, poufną ocenę sprawy. Bez honorarium adwokackiego, chyba że uzyskają Państwo odszkodowanie."
        buttonText="Bezpłatna ocena sprawy"
      />

      <section className="py-12 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl text-primary mb-6">
            Powiązane strony
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pl/practice-areas/data-breach"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Naruszenia danych i prywatność
            </Link>
            <Link
              href="/pl/resources/data-breach-prevention"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zapobieganie naruszeniom danych dla firm
            </Link>
            <Link
              href="/pl/resources/prevent-wire-fraud"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Zapobieganie oszustwom przelewowym
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
