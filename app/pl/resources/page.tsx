import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ResourceCard from "@/components/cards/ResourceCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Materiały i poradniki dot. nieruchomości w Illinois",
  description:
    "Materiały prawne i poradniki od REAL Law Group obejmujące zapobieganie oszustwom przelewowym, akty zrzeczenia (quit claim), zapobieganie naruszeniom danych oraz ubezpieczenia tytułu własności. Zadzwoń (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/resources",
});

const resources = [
  {
    title: "Kalkulator kosztów zamknięcia",
    excerpt:
      "Oszacuj swoje koszty zamknięcia jako kupujący lub sprzedający dla transakcji nieruchomości w regionie Chicagoland dzięki naszemu interaktywnemu kalkulatorowi.",
    href: "/pl/resources/closing-cost-calculator",
  },
  {
    title: "Sprzedaż bez pośrednika (FSBO)",
    excerpt:
      "Sprzedajesz dom bez agenta? Dowiedz się, dlaczego sprzedający FSBO w Illinois nadal potrzebują adwokata ds. nieruchomości.",
    href: "/pl/resources/for-sale-by-owner",
  },
  {
    title: "Nieruchomość odziedziczona — poradnik",
    excerpt:
      "Straciłeś bliską osobę i odziedziczyłeś nieruchomość? Poznaj swoje możliwości dotyczące postępowania spadkowego, sprzedaży lub zachowania odziedziczonego domu w Illinois.",
    href: "/pl/resources/inherited-property",
  },
  {
    title: "Zadatek — najczęstsze pytania",
    excerpt:
      "Czym jest zadatek, ile powinieneś wpłacić i kiedy możesz go odzyskać? Wszystko, co kupujący w Illinois muszą wiedzieć.",
    href: "/pl/emd",
  },
  {
    title: "Opłaty transferowe (transfer stamps)",
    excerpt:
      "Zapoznaj się z przepisami i stawkami opłat transferowych dla gmin w aglomeracji chicagowskiej.",
    href: "/pl/resources/transfer-stamps",
  },
  {
    title: "Umowa nieruchomości",
    excerpt:
      "Uzyskaj dostęp do umowy Multi-Board Residential Real Estate Contract używanej w transakcjach w Chicagoland.",
    href: "/pl/resources/real-estate-contract",
  },
  {
    title: "Zapobieganie oszustwom przelewowym",
    excerpt:
      "Dowiedz się, jak chronić się przed oszustwami przelewowymi podczas transakcji nieruchomości dzięki tym niezbędnym wskazówkom.",
    href: "/pl/resources/prevent-wire-fraud",
  },
  {
    title: "Akty zrzeczenia (Quit Claim Deeds)",
    excerpt:
      "Wszystko, co musisz wiedzieć o aktach zrzeczenia, w tym kiedy i jak są stosowane.",
    href: "/pl/resources/quit-claim-deeds-illinois",
  },
  {
    title: "Inwestorzy w nieruchomości",
    excerpt:
      "Wsparcie prawne dla inwestorów kupujących, sprzedających i utrzymujących nieruchomości w Chicagoland — akwizycje, zakładanie spółek, sprawy tytułowe i zamknięcia.",
    href: "/pl/real-estate-investors",
  },
  {
    title: "Zapobieganie naruszeniom danych",
    excerpt:
      "Niezbędne strategie ochrony danych osobowych i biznesowych przed coraz bardziej zaawansowanymi zagrożeniami cybernetycznymi.",
    href: "/pl/resources/data-breach-prevention",
  },
  {
    title: "Ubezpieczenie tytułu własności — FAQ",
    excerpt:
      "Odpowiedzi na często zadawane pytania dotyczące ubezpieczenia tytułu własności, w tym co obejmuje i dlaczego ma znaczenie.",
    href: "/pl/resources/title-insurance-faq",
  },
];

export default function ResourcesPagePL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Materiały" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Materiały i poradniki
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Przydatne informacje i poradniki od naszego zespołu prawnego.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Materiały" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <ResourceCard key={i} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
