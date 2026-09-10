import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Scale,
  ShieldQuestion,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import {
  ConsultationCTA,
  LegalDisclaimer,
} from "@/components/ebike/PageFooterBlocks";
import {
  DEADLINES,
  EVIDENCE,
  FAULT_POINTS,
  HOW_WE_HELP,
  INSURANCE_POINTS,
  SCENARIOS,
} from "./content";
import { FAQS } from "./faqs";

export const metadata = generatePageMetadata({
  title: "Wypadki na Rowerze i Skuterze Elektrycznym w Illinois",
  description:
    "Obrażenia w wypadku na rowerze elektrycznym, skuterze lub e-moto w Illinois? Kto płaci, gdy nie ma ubezpieczenia, jak prawo ze stycznia 2027 r. zmienia ocenę winy i roczny termin, który zaskakuje wiele osób. Bezpłatna konsultacja. (630) 299-7600.",
  path: "/pl/practice-areas/e-bike-accidents",
});

export default function WypadkiRowerElektrycznyPage() {
  return (
    <>
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
              { name: "Obszary praktyki", url: "/pl/practice-areas" },
              { name: "Wypadki na rowerze i skuterze elektrycznym" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Wypadki na Rowerze i Skuterze Elektrycznym
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Rowery i skutery elektryczne wprowadzają ludzi w ruch drogowy z
            prędkością samochodu, bez żadnej ochrony i bardzo często bez żadnego
            ubezpieczenia. Gdy ktoś zostaje poszkodowany, pierwszym pytaniem
            rzadko jest to, kto zawinił. Pytaniem jest, która polisa zapłaci, a
            odpowiedź dla roweru elektrycznego jest inna niż dla samochodu.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki", href: "/pl/practice-areas" },
          { label: "Wypadki na rowerze elektrycznym" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="rounded-xl border border-border bg-light-gold p-6 mb-14">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-semibold text-lg mb-2">
                  Jeśli wypadek właśnie się zdarzył, dziś liczą się trzy rzeczy
                </h2>
                <p className="text-text-muted leading-relaxed mb-3">
                  Skorzystać z pomocy medycznej i zachować dokumentację.
                  Zachować maszynę w niezmienionym stanie, ponieważ urządzenie i
                  jego etykieta są dowodem. Nie składać nagrywanego oświadczenia
                  likwidatorowi szkód przed rozmową z prawnikiem.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Jeżeli za stan drogi lub ścieżki może odpowiadać miasto,
                  gmina, township albo okręg parkowy, termin na wniesienie
                  sprawy może wynosić{" "}
                  <strong className="text-text">jeden rok</strong>, a nie dwa.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Kwestia ubezpieczenia, wyjaśniona rzetelnie
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Właśnie tu wygrywa się lub przegrywa większość spraw dotyczących
            rowerów elektrycznych i właśnie tu ogólne porady krążące w
            internecie są najmniej wiarygodne. Rower elektryczny nie jest
            samochodem, a ochrona ubezpieczeniowa nie działa tak, jak zakładają
            Państwo na pierwszy rzut oka.
          </p>
          <div className="space-y-4 mb-14">
            {INSURANCE_POINTS.map((p) => (
              <div
                key={p.heading}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-heading font-semibold mb-2 flex items-start gap-2">
                  <ShieldQuestion className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  {p.heading}
                </h3>
                <p className="text-text-muted leading-relaxed pl-7">{p.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Typowe sytuacje i pułapka w każdej z nich
          </h2>
          <div className="space-y-4 mb-14">
            {SCENARIOS.map((s) => (
              <div
                key={s.scenario}
                className="rounded-xl border border-border p-6"
              >
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {s.scenario}
                </h3>
                <dl className="space-y-2 text-sm leading-relaxed">
                  <div>
                    <dt className="inline font-semibold">Roszczenie. </dt>
                    <dd className="inline text-text-muted">{s.theory}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">
                      Prawdopodobna ochrona.{" "}
                    </dt>
                    <dd className="inline text-text-muted">{s.coverage}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-secondary">
                      Na co uważać.{" "}
                    </dt>
                    <dd className="inline text-text-muted">{s.pitfall}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Jak nowe prawo zmienia spór o winę
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Nowe ramy prawne Illinois dla rowerów elektrycznych, Ustawa
            Publiczna 104-0854, wchodzą w życie 1 stycznia 2027 r. Nie tworzą
            nowego rodzaju powództwa. Tworzą dłuższą listę zasad, na które każda
            ze stron może się powołać przy ocenie winy.
          </p>
          <ul className="space-y-3 mb-8">
            {FAULT_POINTS.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/pl/resources/illinois-e-bike-law"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline mb-14"
          >
            Przeczytać nasz pełny przewodnik po prawie Illinois o rowerach
            elektrycznych wchodzącym w życie 1 stycznia 2027 r.
            <ArrowRight className="w-4 h-4" />
          </Link>

          <h2 className="text-2xl font-heading font-semibold mb-4">
            Terminy, które decydują o sprawach
          </h2>
          <div className="overflow-x-auto mb-14">
            <table className="w-full text-left text-sm border border-border rounded-lg">
              <thead className="bg-light-gold">
                <tr>
                  <th className="p-4 font-heading font-semibold">Roszczenie</th>
                  <th className="p-4 font-heading font-semibold">
                    Termin wniesienia
                  </th>
                </tr>
              </thead>
              <tbody>
                {DEADLINES.map((d) => (
                  <tr key={d.claim} className="border-t border-border">
                    <td className="p-4 align-top font-medium">
                      {d.claim}
                      <span className="block text-xs text-text-muted font-normal mt-1">
                        {d.citation}
                      </span>
                    </td>
                    <td className="p-4 align-top text-text-muted">
                      {d.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-l-4 border-secondary bg-background p-6 rounded-r-lg mb-14">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-text-muted leading-relaxed">
                To terminy ogólne, a ten właściwy dla Państwa sprawy zależy od
                tego, kto ponosi odpowiedzialność i kiedy obrażenia zostały
                wykryte. Wyjątki mogą je skrócić. Najbezpieczniej traktować
                najkrótszy możliwy termin jako rzeczywisty.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Co zrobić w pierwszych 48 godzinach
          </h2>
          <ul className="space-y-3 mb-14">
            {EVIDENCE.map((e) => (
              <li key={e} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-muted leading-relaxed">{e}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Jak pomaga REAL Law Group
          </h2>
          <div className="space-y-4 mb-14">
            {HOW_WE_HELP.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-heading font-semibold mb-2">{h.title}</h3>
                <p className="text-text-muted leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Często Zadawane Pytania
          </h2>
          <FAQAccordion items={FAQS} />

          <LegalDisclaimer
            label="Zastrzeżenie prawne"
            paragraphs={[
              "Ta strona zawiera ogólne informacje o prawie stanu Illinois, aktualne na 9 września 2026 r. Nie jest to porada prawna, samo jej przeczytanie ani kontakt z kancelarią nie tworzy relacji prawnik-klient, a każda sprawa zależy od własnych okoliczności. Sprawy o obrażenia ciała są przekazywane prawnikom z sieci, z którą współpracuje REAL Law Group, i przez nich prowadzone. Wcześniejsze wyniki nie gwarantują podobnego rozstrzygnięcia i żaden rezultat nie jest gwarantowany.",
            ]}
          />

          <ConsultationCTA
            heading="Prosimy opowiedzieć, co się stało"
            body="Konsultacja jest bezpłatna i nie zobowiązuje do niczego. Prosimy przynieść protokół policyjny, jeśli jest, zdjęcia maszyny i jej etykiety oraz każde pismo otrzymane od ubezpieczyciela."
            contactHref="/pl/contact"
            contactLabel="Kontakt z Kancelarią"
          />
        </div>
      </section>

      <CTABanner
        heading="Gotowi na następny krok?"
        text="Skorzystajcie Państwo z rzetelnego, lokalnego wsparcia prawnego zespołu, który dobrze zna Illinois."
        buttonText="Kontakt z nami"
        buttonHref="/pl/contact"
      />
    </>
  );
}
