import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Polityka prywatności i zastrzeżenia prawne",
  description:
    "Polityka prywatności i zastrzeżenia prawne kancelarii REAL Law Group, P.C.",
  path: "/pl/privacy-policy",
  noindex: true,
});

export default function PrivacyPolicyPagePL() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Polityka prywatności i zastrzeżenia prawne
          </h1>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Polityka prywatności" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Privacy Policy */}
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Polityka prywatności
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 text-text-muted text-sm leading-relaxed mb-16">
            <p>
              REAL Law Group, P.C. (&ldquo;my&rdquo;, &ldquo;nas&rdquo;,
              &ldquo;nasz&rdquo;) zobowiązuje się do ochrony Państwa
              prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki
              sposób gromadzimy, wykorzystujemy, ujawniamy i chronimy Państwa
              informacje podczas korzystania z naszej strony internetowej.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Informacje, które gromadzimy
            </h3>
            <p>
              Możemy gromadzić dane osobowe, które Państwo dobrowolnie nam
              udostępniają, kontaktując się z nami za pośrednictwem naszej
              strony internetowej, w tym imię i nazwisko, adres e-mail, numer
              telefonu oraz wszelkie informacje zawarte w wiadomości.
              Automatycznie gromadzimy również pewne informacje podczas Państwa
              wizyty na naszej stronie, w tym adres IP, typ przeglądarki, system
              operacyjny oraz zachowania podczas przeglądania.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Jak wykorzystujemy Państwa informacje
            </h3>
            <p>
              Wykorzystujemy gromadzone informacje, aby odpowiadać na Państwa
              zapytania i świadczyć usługi prawne, komunikować się z Państwem na
              temat naszych usług, ulepszać naszą stronę internetową i
              doświadczenia użytkowników oraz spełniać obowiązki prawne.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Udostępnianie informacji
            </h3>
            <p>
              Nie sprzedajemy, nie wymieniamy ani w inny sposób nie przekazujemy
              Państwa danych osobowych podmiotom zewnętrznym, chyba że jest to
              konieczne do świadczenia naszych usług prawnych, wymagane prawem
              lub w celu ochrony naszych praw. Możemy udostępniać informacje
              zaufanym stronom trzecim, które pomagają nam w obsłudze naszej
              strony internetowej i prowadzeniu działalności, pod warunkiem, że
              strony te zgadzają się zachować poufność tych informacji.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Bezpieczeństwo danych
            </h3>
            <p>
              Stosujemy rozsądne środki bezpieczeństwa w celu ochrony Państwa
              danych osobowych. Jednak żadna metoda przekazywania danych przez
              internet ani elektronicznego przechowywania nie jest w 100%
              bezpieczna i nie możemy zagwarantować absolutnego bezpieczeństwa.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Pliki cookie
            </h3>
            <p>
              Nasza strona internetowa może używać plików cookie i podobnych
              technologii śledzenia w celu ulepszenia Państwa doświadczeń
              podczas przeglądania. Mogą Państwo ustawić przeglądarkę tak, aby
              odrzucała pliki cookie lub ostrzegała, gdy są one wysyłane.
              Niektóre funkcje strony mogą jednak nie działać prawidłowo bez
              plików cookie.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Linki do stron trzecich
            </h3>
            <p>
              Nasza strona internetowa może zawierać linki do stron
              internetowych osób trzecich. Nie ponosimy odpowiedzialności za
              praktyki prywatności ani treść tych stron. Zachęcamy Państwa do
              zapoznania się z polityką prywatności każdej odwiedzanej strony.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Zmiany w niniejszej polityce
            </h3>
            <p>
              Możemy od czasu do czasu aktualizować niniejszą Politykę
              Prywatności. Wszelkie zmiany będą publikowane na tej stronie wraz
              ze zaktualizowaną datą obowiązywania. Dalsze korzystanie z naszej
              strony po opublikowaniu zmian oznacza akceptację zmienionej
              polityki.
            </p>

            <h3 className="text-lg font-semibold text-primary !mt-8">
              Kontakt
            </h3>
            <p>
              W przypadku pytań dotyczących niniejszej Polityki Prywatności
              prosimy o kontakt pod adresem info@reallawgroup.com lub pod
              numerem (630) 299-7600.
            </p>
          </div>

          {/* Disclaimer */}
          <div id="disclaimer">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
              Zastrzeżenie prawne
            </h2>
            <div className="w-12 h-1 bg-secondary mb-8" />

            <div className="space-y-6 text-text-muted text-sm leading-relaxed">
              <p>
                Informacje zawarte na tej stronie internetowej służą wyłącznie
                celom informacyjnym i nie stanowią porady prawnej. Korzystanie z
                tej strony ani kontakt z REAL Law Group, P.C. za jej
                pośrednictwem nie tworzy relacji adwokat–klient.
              </p>

              <p>
                Nie należy działać na podstawie jakichkolwiek informacji
                zawartych na tej stronie bez uprzedniego zasięgnięcia
                wykwalifikowanej profesjonalnej porady w swojej konkretnej
                sprawie. Wynik każdej sprawy prawnej zależy od konkretnych
                faktów i obowiązujących przepisów, a wcześniejsze rezultaty nie
                gwarantują podobnego wyniku.
              </p>

              <p>
                REAL Law Group, P.C. nie składa żadnych oświadczeń ani gwarancji
                dotyczących dokładności, kompletności lub aktualności informacji
                na tej stronie. Nie ponosimy odpowiedzialności za żadne błędy
                lub pominięcia ani za rezultaty uzyskane w wyniku korzystania z
                tych informacji.
              </p>

              <p>
                Reklama adwokacka. Materiały na tej stronie mogą być uznawane za
                reklamę w niektórych jurysdykcjach. Ustalenie potrzeby
                skorzystania z usług prawnych oraz wybór prawnika to niezwykle
                ważne decyzje, których nie należy opierać wyłącznie na reklamach
                lub samodzielnie deklarowanej wiedzy.
              </p>

              <p>
                Jeśli potrzebują Państwo porady prawnej, prosimy o kontakt
                bezpośredni pod numerem (630) 299-7600 lub adresem
                info@reallawgroup.com, aby umówić się na konsultację.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
