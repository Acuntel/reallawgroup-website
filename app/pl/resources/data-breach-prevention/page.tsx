import {
  Shield,
  Lock,
  Eye,
  Wifi,
  Users,
  FileWarning,
  AlertCircle,
  Server,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Zapobieganie wyciekom danych",
  description:
    "Kluczowe strategie ochrony danych osobowych i firmowych przed zagrożeniami cybernetycznymi. Porady od REAL Law Group. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/data-breach-prevention",
});

const strategies = [
  {
    icon: Lock,
    title: "Stosuj silne, unikalne hasła",
    description:
      "Twórz złożone hasła łączące wielkie i małe litery, cyfry oraz znaki specjalne. Używaj innego hasła dla każdego konta i rozważ korzystanie z renomowanego menedżera haseł, aby bezpiecznie przechowywać dane logowania.",
  },
  {
    icon: Shield,
    title: "Włącz uwierzytelnianie wieloskładnikowe (MFA)",
    description:
      "Uwierzytelnianie wieloskładnikowe dodaje dodatkową warstwę zabezpieczeń, wymagając potwierdzenia tożsamości poza samym hasłem. Może to być kod SMS, aplikacja uwierzytelniająca lub weryfikacja biometryczna, np. odcisk palca czy rozpoznawanie twarzy.",
  },
  {
    icon: Eye,
    title: "Zachowaj czujność wobec phishingu",
    description:
      "Ataki phishingowe pozostają jedną z najczęstszych metod wycieków danych. Zachowaj ostrożność wobec niechcianych e-maili, SMS-ów lub telefonów z prośbą o dane osobowe. Zweryfikuj nadawcę, zanim klikniesz jakikolwiek link lub udostępnisz wrażliwe informacje.",
  },
  {
    icon: Wifi,
    title: "Zabezpiecz swoją sieć",
    description:
      "Upewnij się, że Państwa sieci Wi-Fi w domu i firmie są szyfrowane standardem WPA3. Unikaj przeprowadzania wrażliwych transakcji w publicznych sieciach Wi-Fi. Rozważ korzystanie z VPN (wirtualnej sieci prywatnej) przy łączeniu się z internetem w sieciach publicznych.",
  },
  {
    icon: Server,
    title: "Aktualizuj oprogramowanie",
    description:
      "Regularnie aktualizuj system operacyjny, przeglądarki oraz aplikacje. Aktualizacje często zawierają krytyczne poprawki bezpieczeństwa usuwające znane luki. Jeśli to możliwe, włącz aktualizacje automatyczne, aby zawsze być chronionym.",
  },
  {
    icon: Users,
    title: "Ogranicz dostęp do wrażliwych informacji",
    description:
      "Stosuj zasadę minimalnych uprawnień — przyznawaj pracownikom i członkom rodziny dostęp tylko do tych danych, których rzeczywiście potrzebują. Regularnie przeglądaj i aktualizuj uprawnienia, a dostęp cofaj natychmiast, gdy przestaje być potrzebny.",
  },
  {
    icon: FileWarning,
    title: "Regularnie twórz kopie zapasowe danych",
    description:
      "Utrzymuj regularne kopie zapasowe ważnych danych zarówno lokalnie, jak i w chmurze. W przypadku ataku ransomware lub wycieku danych aktualne kopie zapasowe pozwalają odzyskać informacje bez konieczności płacenia okupu ani utraty kluczowych danych.",
  },
  {
    icon: AlertCircle,
    title: "Miej plan reagowania na incydenty",
    description:
      "Zarówno osoby prywatne, jak i firmy powinny mieć plan działania na wypadek wycieku danych. Obejmuje on wiedzę o tym, jak zgłosić incydent, jak powiadomić poszkodowane strony oraz jak współpracować z prawnikiem w celu minimalizacji odpowiedzialności i zgodności z obowiązującymi przepisami o powiadamianiu.",
  },
];

export default function DataBreachPreventionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Zapobieganie wyciekom danych
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Chroń swoje dane osobowe i firmowe przed zagrożeniami
            cybernetycznymi.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Zapobieganie wyciekom danych" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-6 text-lg">
            W dzisiejszym cyfrowym świecie wycieki danych stanowią poważne
            ryzyko zarówno dla osób prywatnych, jak i firm. Cyberprzestępcy
            nieustannie opracowują nowe metody kradzieży wrażliwych informacji —
            od danych identyfikacyjnych po dane finansowe i poufne informacje
            biznesowe.
          </p>
          <p className="text-text-muted leading-relaxed mb-12">
            Niezależnie od tego, czy są Państwo właścicielem domu chroniącym
            dane osobowe podczas transakcji nieruchomościowej, czy
            przedsiębiorcą zabezpieczającym dane klientów, proaktywne działania
            zapobiegające wyciekom danych mają kluczowe znaczenie. Poniżej
            znajdują się kluczowe strategie pomagające chronić Państwa dane.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8">
            Kluczowe strategie ochrony danych
          </h2>

          <div className="space-y-8">
            {strategies.map((strategy, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-background rounded-xl border border-border"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-gold shrink-0">
                  <strategy.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 gold-border-left pl-8 py-4">
            <h3 className="text-xl font-heading font-semibold mb-3">
              Konsekwencje prawne wycieków danych w Illinois
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Illinois wprowadził silne regulacje dotyczące ochrony danych, w
              tym ustawę o ochronie danych osobowych (PIPA) oraz ustawę o
              ochronie danych biometrycznych (BIPA). Przepisy te nakładają
              konkretne obowiązki na firmy zbierające dane osobowe oraz dają
              osobom fizycznym istotne prawa w sytuacji naruszenia ich danych.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Jeśli Państwa firma doświadczy wycieku danych, prawo stanu
              Illinois wymaga niezwłocznego powiadomienia poszkodowanych, a w
              niektórych przypadkach również biura Prokuratora Generalnego.
              Współpraca z prawnikiem doświadczonym w sprawach ochrony danych
              pomaga zapewnić zgodność z przepisami i zminimalizować potencjalną
              odpowiedzialność.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Martwią się Państwo o bezpieczeństwo danych?"
        text="Nasz zespół pomoże Państwu zrozumieć obowiązki prawne i wdrożyć środki ochronne."
        buttonHref="/pl/contact"
      />

      <section className="py-8 bg-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4">
          <a
            href="/pl/real-estate-investors"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Inwestorzy nieruchomości
          </a>
          <a
            href="/pl/resources/prevent-wire-fraud"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Zapobieganie oszustwom przelewowym
          </a>
        </div>
      </section>
    </>
  );
}
