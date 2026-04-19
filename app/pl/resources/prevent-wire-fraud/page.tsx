import { ShieldAlert, AlertTriangle } from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Zapobieganie oszustwom przelewowym",
  description:
    "Dowiedz się, jak chronić się przed oszustwami przelewowymi podczas transakcji nieruchomościowych. Praktyczne wskazówki od REAL Law Group. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/prevent-wire-fraud",
});

const tips = [
  {
    title:
      "Zachowaj czujność wobec każdej wiadomości e-mail z prośbą o zmianę instrukcji przelewu",
    description:
      "Oszuści często włamują się na skrzynki e-mail i wysyłają wiadomości wyglądające jak od Państwa agenta nieruchomości, firmy tytułowej lub prawnika z nowymi instrukcjami przelewu. Każdą taką zmianę należy zawsze weryfikować telefonicznie pod znanym, sprawdzonym numerem.",
  },
  {
    title: "Nigdy nie przesyłaj danych finansowych e-mailem",
    description:
      "Nie przesyłaj numerów kont bankowych, numerów rozliczeniowych ani innych wrażliwych danych finansowych drogą mailową. E-mail nie jest bezpiecznym kanałem komunikacji dla tego rodzaju informacji.",
  },
  {
    title:
      "Zweryfikuj instrukcje przelewu telefonicznie przed wysłaniem środków",
    description:
      "Zawsze dzwoń do swojego prawnika lub firmy tytułowej pod numer, który zweryfikowali Państwo niezależnie (nie z podejrzanej wiadomości e-mail), aby potwierdzić instrukcje przelewu przed wysłaniem jakichkolwiek pieniędzy.",
  },
  {
    title:
      "Bądź ostrożny wobec zmian w instrukcjach zamknięcia w ostatniej chwili",
    description:
      "Oszuści często tworzą wrażenie pilności, wysyłając zmiany instrukcji przelewu w ostatniej chwili. Proszę poświęcić czas na weryfikację wszelkich zmian, nawet jeśli czują Państwo presję szybkiego działania.",
  },
  {
    title: "Używaj silnych, unikalnych haseł do swoich kont e-mail",
    description:
      "Chroń swoją skrzynkę e-mail przed włamaniem, stosując silne hasła i włączając uwierzytelnianie dwuskładnikowe. Wiele schematów oszustw przelewowych zaczyna się od skompromitowanego konta e-mail.",
  },
  {
    title: "Potwierdź tożsamość każdej osoby proszącej o środki",
    description:
      "Przed wysłaniem przelewu zweryfikuj tożsamość osoby lub firmy żądającej transferu. Wykorzystaj dane kontaktowe zgromadzone niezależnie, a nie te podane w podejrzanej wiadomości.",
  },
  {
    title: "Uważaj na próby phishingu",
    description:
      "Zwracaj uwagę na wiadomości zawierające literówki, nietypowe formatowanie lub niewielkie różnice w adresach e-mail. To powszechne sygnały próby phishingu zaprojektowanej w celu kradzieży Państwa danych.",
  },
  {
    title: "Natychmiast zgłaszaj podejrzane działania",
    description:
      "Jeśli podejrzewają Państwo, że zostali celem oszustwa przelewowego, natychmiast skontaktuj się ze swoim bankiem w celu próby odwołania przelewu. Zgłoś incydent również do centrum zgłoszeń internetowych FBI (IC3) oraz do lokalnych organów ścigania.",
  },
  {
    title:
      "Współpracuj z profesjonalistami, którzy traktują bezpieczeństwo poważnie",
    description:
      "Wybierz prawnika ds. nieruchomości i firmę tytułową, które podchodzą do cyberbezpieczeństwa z należytą powagą i stosują procedury chroniące Państwa transakcję przed oszustwami.",
  },
];

export default function PreventWireFraudPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Zapobieganie oszustwom przelewowym
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Chroń siebie i swoje pieniądze podczas transakcji
            nieruchomościowych.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Zapobieganie oszustwom przelewowym" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Warning box */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-semibold text-red-800 mb-2">
                Oszustwa przelewowe to rosnące zagrożenie
              </h2>
              <p className="text-sm text-red-700 leading-relaxed">
                Oszustwa przelewowe w transakcjach nieruchomościowych stają się
                coraz powszechniejsze. Przestępcy obierają za cel kupujących,
                sprzedających, a nawet profesjonalistów z branży, by ukraść
                środki w trakcie zamknięcia. Świadomość jest najlepszą obroną.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            9 wskazówek, jak chronić się przed oszustwami przelewowymi
          </h2>

          <div className="space-y-8">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gold shrink-0">
                  <span className="text-secondary font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gold rounded-xl p-8 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                REAL Law Group chroni Państwa interesy
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                W REAL Law Group stosujemy nowoczesne protokoły bezpieczeństwa w
                celu ochrony transakcji finansowych naszych klientów. Jeśli mają
                Państwo jakiekolwiek obawy dotyczące oszustw przelewowych,
                prosimy o natychmiastowy kontakt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Mają Państwo pytania dotyczące zamknięcia?"
        text="Nasz zespół dba o to, aby Państwa transakcja nieruchomościowa była bezpieczna i chroniona."
        buttonHref="/pl/contact"
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
            href="/pl/resources/data-breach-prevention"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Zapobieganie wyciekom danych
          </a>
        </div>
      </section>
    </>
  );
}
