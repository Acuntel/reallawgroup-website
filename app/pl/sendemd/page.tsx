import {
  AlertTriangle,
  Phone,
  Building2,
  MapPin,
  Hash,
  User,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Instrukcje wpłaty zadatku — REAL Law Group",
  description:
    "Instrukcje wpłaty zadatku (earnest money) dla klientów REAL Law Group, P.C. Szczegóły przelewu i wpłaty w Chase Bank, numer routingowy ABA oraz ochrona przed oszustwami przelewowymi.",
  path: "/pl/sendemd",
});

export default function SendEMDPagePL() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Instrukcje wpłaty zadatku
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Gratulujemy nowego domu!
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Instrukcje wpłaty zadatku" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Numbered instructions — loud and proud */}
          <div className="space-y-4 mb-12">
            <div className="bg-red-600 text-white rounded-xl p-6 border-4 border-red-700 shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                1. NIE WYSYŁAĆ ANI NIE DOSTARCZAĆ ZADATKU DO NASZEGO BIURA.
              </p>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 border-4 border-[#6f5524] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                2. PROSIMY O PRZELEW LUB WPŁATĘ ŚRODKÓW W CHASE BANK.
              </p>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 border-4 border-[#0f1c36] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                3. NIE PRZYJMUJEMY GOTÓWKI{" "}
                <span className="block md:inline text-base md:text-lg font-semibold normal-case mt-1 md:mt-0">
                  (ANI BITCOINA 😉 ANI KAWY STARBUCKS ☹).
                </span>{" "}
                <span className="block text-base md:text-lg font-semibold normal-case mt-1">
                  JEŚLI WPŁACĄ PAŃSTWO GOTÓWKĘ, NIE BĘDZIEMY MOGLI POTWIERDZIĆ
                  WPŁATY.
                </span>
              </p>
            </div>

            <div className="bg-secondary text-white rounded-xl p-6 border-4 border-[#6f5524] shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                4. ZADATEK MOŻNA PRZELAĆ LUB WPŁACIĆ W DOWOLNEJ PLACÓWCE CHASE
                BANK.
                <span className="block text-base md:text-lg font-semibold normal-case mt-2">
                  Oszczędzą Państwo czas i unikną wizyty w naszym biurze!
                </span>
              </p>
            </div>

            <div className="bg-red-600 text-white rounded-xl p-6 border-4 border-red-700 shadow-lg">
              <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                5. ŚRODKI MUSZĄ BYĆ PŁATNE NA{" "}
                <span className="underline decoration-4">
                  REAL LAW GROUP P.C. IOLTA
                </span>
              </p>
            </div>

            <div className="bg-primary text-white rounded-xl p-6 border-4 border-[#0f1c36] shadow-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-secondary shrink-0 mt-1" />
                <p className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide">
                  6. REAL LAW GROUP P.C. NIGDY NIE WYŚLE PAŃSTWU E-MAILA Z
                  INSTRUKCJAMI PRZELEWU ANI NIE POPROSI O PRZELEW ŚRODKÓW.
                  <span className="block text-base md:text-lg font-semibold normal-case mt-2">
                    Zatrzymaj się, pomyśl i zachowaj ostrożność, jeśli masz
                    wątpliwości!
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Routing / Account Info */}
          <div className="bg-light-gold rounded-xl p-8 border-2 border-secondary mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
              Numer routingowy i dane konta
            </h2>
            <div className="w-16 h-1 bg-secondary mb-8" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Nazwa odbiorcy
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    REAL Law Group PC IOLTA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Hash className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Numer konta
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
                    939106337
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Hash className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Numer ABA (numer routingowy)
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-wider">
                    071000013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Bank
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    Chase Bank (dowolna placówka Chase Bank)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                    Tytuł przelewu lub czeku
                  </p>
                  <p className="text-lg md:text-xl font-heading font-bold text-primary">
                    Adres nieruchomości, którą Państwo kupują.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm / Questions */}
          <div className="bg-primary rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 uppercase tracking-wide">
              Aby potwierdzić instrukcje lub w razie pytań
            </h3>
            <p className="text-gray-200 text-sm md:text-base mb-6 max-w-xl mx-auto">
              Prosimy o bezpośredni kontakt przed wysłaniem jakichkolwiek
              środków.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń {CONTACT.phone}
            </a>
          </div>

          {/* Wire Fraud Warning */}
          <div className="bg-red-50 border-4 border-red-500 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-10 h-10 text-red-600 shrink-0 mt-0.5" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-red-800 uppercase">
                Ostrzeżenie przed oszustwem przelewowym
              </h2>
            </div>
            <p className="text-red-900 font-semibold text-base md:text-lg leading-relaxed">
              Nie chcemy, abyście stali się Państwo ofiarami oszustwa
              przelewowego. Większość pieniędzy przelanych na oszukańcze konto
              jest kradziona i nie można ich odzyskać. Dodatkowo nie istnieje
              ubezpieczenie od tej straty. Mogą Państwo nigdy nie odzyskać
              swoich pieniędzy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
