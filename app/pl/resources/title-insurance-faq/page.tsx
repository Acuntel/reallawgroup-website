import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "FAQ o ubezpieczeniu tytułu własności",
  description:
    "Najczęstsze pytania dotyczące ubezpieczenia tytułu własności, na które odpowiada REAL Law Group. Dowiedz się, co obejmuje ubezpieczenie tytułu i dlaczego jest istotne. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources/title-insurance-faq",
});

const faqs = [
  {
    question: "Czym jest ubezpieczenie tytułu własności?",
    answer:
      "Ubezpieczenie tytułu własności to forma ubezpieczenia odszkodowawczego, które chroni ubezpieczonego przed stratami finansowymi wynikającymi z wad tytułu do nieruchomości. W odróżnieniu od tradycyjnych ubezpieczeń, które chronią przed przyszłymi zdarzeniami, ubezpieczenie tytułu chroni przed zdarzeniami z przeszłości, które mogłyby wpłynąć na Państwa prawa własności. Polisa ubezpieczenia tytułu jest zazwyczaj wystawiana po gruntownym badaniu tytułu, które weryfikuje historię prawną własności na podstawie rejestrów publicznych.",
  },
  {
    question: "Dlaczego potrzebuję ubezpieczenia tytułu własności?",
    answer:
      "Nawet po dokładnym badaniu tytułu istnieją ukryte ryzyka, których nie zawsze można odkryć w samych rejestrach publicznych. Ubezpieczenie tytułu chroni przed takimi problemami, jak sfałszowane dokumenty, nieujawnieni spadkobiercy, błędy w rejestrach publicznych, nieodkryte zastawy, spory graniczne oraz inne kwestie mogące zagrażać Państwa własności. Bez ubezpieczenia tytułu mogą Państwo osobiście odpowiadać za obronę tytułu oraz pokrywać wszelkie straty.",
  },
  {
    question:
      "Jaka jest różnica między polisą właściciela a polisą pożyczkodawcy?",
    answer:
      "Polisa pożyczkodawcy (tzw. loan policy) chroni interes pożyczkodawcy hipotecznego w nieruchomości i jest zazwyczaj wymagana jako warunek udzielenia kredytu. Polisa właściciela chroni kapitał własny kupującego w nieruchomości. Podczas gdy polisa pożyczkodawcy chroni wyłącznie pożyczkodawcę, polisa właściciela chroni Państwa jako właścicieli, dopóki Państwo lub Państwa spadkobiercy są właścicielami nieruchomości.",
  },
  {
    question: "Ile kosztuje ubezpieczenie tytułu w Illinois?",
    answer:
      "Stawki ubezpieczenia tytułu w Illinois są regulowane i bazują na cenie zakupu lub kwocie kredytu na nieruchomość. Jest to jednorazowa składka płatna przy zamknięciu i zapewnia ochronę tak długo, jak długo pozostają Państwo właścicielami nieruchomości. Choć stawki są ustandaryzowane, łączny koszt może się różnić w zależności od wartości nieruchomości i wybranych opcji ochrony. Prawnik ds. nieruchomości może przekazać dokładny szacunek dla Państwa transakcji.",
  },
  {
    question: "Co obejmuje ubezpieczenie tytułu?",
    answer:
      "Ubezpieczenie tytułu obejmuje szeroki zakres wad i problemów z tytułem, w tym: błędy lub przeoczenia w zarejestrowanych dokumentach prawnych; sfałszowane akty własności, hipoteki lub zwolnienia; nieujawnionych lub zaginionych spadkobierców zgłaszających roszczenia do własności; zastawy za niezapłacone podatki, opłaty lub inne długi; służebności i obciążenia nieujawnione w rejestrach publicznych; oraz wadliwe rejestracje dokumentów prawnych. Każda polisa może zawierać konkretne wyłączenia, dlatego warto dokładnie ją przeanalizować.",
  },
  {
    question: "Kiedy należy wykupić ubezpieczenie tytułu?",
    answer:
      "Ubezpieczenie tytułu zazwyczaj kupuje się w trakcie procesu zamknięcia transakcji nieruchomościowej. Większość pożyczkodawców hipotecznych wymaga polisy pożyczkodawcy przed uruchomieniem kredytu. Polisa właściciela, choć opcjonalna, jest zdecydowanie zalecana i zwykle nabywana w tym samym momencie. Składka jest jednorazowa i płatna przy zamknięciu — nie występują składki cykliczne ani obowiązkowe odnowienia.",
  },
  {
    question: "Czym jest badanie tytułu i dlaczego jest ważne?",
    answer:
      "Badanie tytułu to analiza rejestrów publicznych dotyczących konkretnej nieruchomości. Odtwarza historię własności, identyfikuje istniejące zastawy i obciążenia oraz potwierdza, że sprzedający ma prawo do sprzedaży nieruchomości. Badanie tytułu to kluczowy etap każdej transakcji nieruchomościowej, ponieważ ujawnia potencjalne problemy mogące wpłynąć na Państwa prawa własności. Polisa ubezpieczenia tytułu jest następnie wystawiana w oparciu o wyniki tego badania.",
  },
  {
    question: "Czy mogę samodzielnie wybrać firmę ubezpieczającą tytuł?",
    answer:
      "Tak. Zgodnie z prawem federalnym (RESPA) mają Państwo prawo wyboru firmy ubezpieczającej tytuł. Choć pożyczkodawca, agent nieruchomości lub prawnik mogą polecić konkretną firmę tytułową, ostateczny wybór należy do Państwa. Porównywanie ofert i usług może być korzystne, jednak ważne jest, aby współpracować z rzetelną firmą oferującą kompleksowe badania tytułu i pełną ochronę.",
  },
];

export default function TitleInsuranceFaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            FAQ o ubezpieczeniu tytułu własności
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Odpowiedzi na najczęstsze pytania dotyczące ubezpieczenia tytułu.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały", href: "/pl/resources" },
          { label: "FAQ o ubezpieczeniu tytułu" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed mb-12 text-lg">
            Ubezpieczenie tytułu jest kluczowym elementem każdej transakcji
            nieruchomościowej, jednak wielu kupujących i sprzedających ma
            pytania, czym właściwie jest, dlaczego jest potrzebne i jak działa.
            Poniżej znajdują się odpowiedzi na najczęstsze pytania dotyczące
            ubezpieczenia tytułu w Illinois.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-border pb-8 last:border-0"
              >
                <h2 className="text-lg md:text-xl font-heading font-semibold mb-4 flex items-start gap-3">
                  <span className="text-secondary font-body text-sm font-bold mt-1">
                    P{i + 1}.
                  </span>
                  {faq.question}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gold rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold mb-3">
              Masz jeszcze pytania?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Ubezpieczenie tytułu potrafi być skomplikowane, a każda transakcja
              nieruchomościowa jest wyjątkowa. Jeśli mają Państwo konkretne
              pytania dotyczące ubezpieczenia tytułu dla swojego zakupu lub
              sprzedaży, nasi doświadczeni prawnicy ds. nieruchomości chętnie
              poprowadzą Państwa przez cały proces.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Potrzebują Państwo pomocy przy zamknięciu transakcji nieruchomościowej?"
        text="Nasz zespół zadba o to, by tytuł do Państwa nieruchomości był czysty, a Państwa interesy chronione."
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
            href="/pl/resources/closing-cost-calculator"
            className="text-primary hover:text-secondary font-semibold underline"
          >
            Kalkulator kosztów zamknięcia
          </a>
        </div>
      </section>
    </>
  );
}
