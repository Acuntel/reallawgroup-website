import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Akty zrzeczenia się (Quit Claim Deeds)",
  description:
    "Pełny przewodnik po aktach zrzeczenia się. Dowiedz się, czym są, kiedy się je stosuje i jakie niosą konsekwencje prawne — materiał od REAL Law Group. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/quit-claim-deeds-illinois",
});

export default function QuitClaimDeedsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Akty zrzeczenia się (Quit Claim Deeds)
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Zrozumienie aktów zrzeczenia się i sposobów ich stosowania.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "Akty zrzeczenia się" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6">
            Czym jest akt zrzeczenia się?
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />
          <p className="text-text-muted leading-relaxed mb-6">
            Akt zrzeczenia się (quit claim deed) to dokument prawny używany do
            przeniesienia udziału w nieruchomości z jednej strony (zbywcy) na
            drugą (nabywcę). W odróżnieniu od aktu z rękojmią (warranty deed)
            akt zrzeczenia się nie daje żadnych gwarancji dotyczących udziału
            własnościowego zbywcy. Zbywca po prostu „zrzeka się” wszelkich
            roszczeń, które może mieć do nieruchomości, przenosząc je na nabywcę
            bez gwarancji i zapewnień co do ważności tytułu.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            W Illinois akty zrzeczenia się są powszechnie stosowane w
            konkretnych sytuacjach, gdy strony łączy już istniejąca relacja lub
            gdy transfer nieruchomości nie wiąże się z tradycyjną sprzedażą.
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Kiedy stosuje się akty zrzeczenia się?
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="space-y-6 mb-10">
            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Transfery między członkami rodziny
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Jednym z najczęstszych zastosowań jest przeniesienie
                nieruchomości pomiędzy członkami rodziny — na przykład rodzic
                dopisuje dziecko do tytułu własności lub małżonkowie przekazują
                sobie nieruchomość w trakcie lub po zawarciu małżeństwa.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Postępowania rozwodowe
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Podczas podziału majątku w toku rozwodu akt zrzeczenia się jest
                często wykorzystywany do przeniesienia udziału jednego z
                małżonków w domu małżeńskim na drugiego małżonka, zgodnie z
                postanowieniem wyroku rozwodowego.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Przeniesienie nieruchomości do trustu
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Planowanie spadkowe często wiąże się z przeniesieniem
                nieruchomości do trustu za życia. Akt zrzeczenia się umożliwia
                takie działanie, przenosząc nieruchomość z osoby fizycznej do
                trustu w celu zarządzania majątkiem i unikania postępowania
                spadkowego.
              </p>
            </div>

            <div className="gold-border-left pl-6">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Dopisanie lub usunięcie osoby z tytułu własności
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Niezależnie od tego, czy chodzi o dopisanie małżonka do tytułu
                po ślubie, czy wykreślenie byłego małżonka po rozwodzie, akt
                zrzeczenia się zapewnia prosty mechanizm dostosowania zapisów
                dotyczących własności nieruchomości.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold mb-6">
            Ważne kwestie do rozważenia
          </h2>
          <div className="w-12 h-1 bg-secondary mb-8" />

          <div className="bg-light-gold rounded-xl p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">1.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Brak gwarancji tytułu:
                  </strong>{" "}
                  Akt zrzeczenia się nie gwarantuje, że zbywca rzeczywiście jest
                  właścicielem nieruchomości ani że posiada czysty tytuł. Całe
                  ryzyko przejmuje nabywca.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">2.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Konsekwencje podatkowe:
                  </strong>{" "}
                  Przeniesienie nieruchomości aktem zrzeczenia się może
                  powodować powstanie podatków transferowych, ponownej wyceny
                  podatku od nieruchomości lub obowiązku rozliczenia podatku od
                  darowizny. Prosimy skonsultować z prawnikiem szczegółowe
                  konsekwencje podatkowe.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">3.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">Kwestie hipoteczne:</strong>{" "}
                  Przeniesienie nieruchomości aktem zrzeczenia się nie zwalnia z
                  istniejących zobowiązań hipotecznych. Pierwotny kredytobiorca
                  nadal odpowiada za hipotekę, o ile nie zostanie formalnie
                  zwolniony przez pożyczkodawcę.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">4.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">Wymóg rejestracji:</strong> W
                  Illinois akt zrzeczenia się musi zostać zarejestrowany w
                  biurze rejestratora hrabstwa, w którym położona jest
                  nieruchomość, aby skutecznie powiadomić osoby trzecie o
                  transferze.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-0.5">5.</span>
                <p className="text-text-muted text-sm leading-relaxed">
                  <strong className="text-primary">
                    Zalecana pomoc prawna:
                  </strong>{" "}
                  Chociaż akty zrzeczenia się są stosunkowo prostymi
                  dokumentami, ich konsekwencje prawne i finansowe mogą być
                  istotne. Współpraca z doświadczonym prawnikiem ds.
                  nieruchomości zapewnia prawidłowe sporządzenie i
                  zarejestrowanie aktu.
                </p>
              </li>
            </ul>
          </div>

          <p className="text-text-muted leading-relaxed">
            W REAL Law Group regularnie przygotowujemy i analizujemy akty
            zrzeczenia się dla klientów z całego Chicagoland. Niezależnie od
            tego, czy przekazują Państwo nieruchomość w rodzinie, przenoszą ją
            do trustu, czy rozwiązują kwestię tytułu własności, nasz zespół
            zadba o prawidłowe i sprawne przeprowadzenie procesu.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Potrzebują Państwo pomocy przy akcie zrzeczenia się?"
        text="Nasi doświadczeni prawnicy ds. nieruchomości przygotują i przeanalizują Państwa akt zrzeczenia się."
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
            href="/pl/practice-areas/estate-planning"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Planowanie spadkowe
          </a>
        </div>
      </section>
    </>
  );
}
