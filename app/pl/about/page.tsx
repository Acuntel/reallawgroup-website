import Link from "next/link";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "O REAL Law Group — adwokaci ds. nieruchomości z Elmhurst",
  description:
    "Poznaj REAL Law Group, P.C. — kancelarię założoną w 2016 roku na zasadach ciężkiej pracy, uczciwości i rzetelności. Doświadczeni adwokaci ds. nieruchomości w Chicago. Zadzwoń (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/about",
});

export default function AboutPagePL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "O nas" },
            ]),
          ),
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nasza historia
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Założona w 2016 roku na zasadach ciężkiej pracy, uczciwości i
            rzetelności.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Strona główna", href: "/pl" }, { label: "O nas" }]}
      />

      {/* Founding Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            W 2016 roku REAL Law Group, P.C. została założona w oparciu o zasady
            ciężkiej pracy, uczciwości i rzetelności. Te wartości, wpojone nam w
            młodym wieku, wyróżniają nas spośród konkurencji. Urodzeni i
            wychowani w Chicago oraz w okolicznych przedmieściach, znamy ludzi i
            społeczności, którym służymy. Nasze wykształcenie uniwersyteckie i
            prawnicze zdobyliśmy w jednych z najlepszych instytucji w Illinois.
            Jesteśmy nie tylko pierwszymi członkami naszych rodzin, którzy
            ukończyli studia, ale także jedynymi prawnikami w naszych
            rozszerzonych rodzinach. Pamiętając o wcześniejszych latach, gdy
            sami nie znaliśmy się na prawie i czuliśmy się nim onieśmieleni,
            staramy się nawiązywać autentyczne relacje z naszymi klientami oraz
            edukować ich, ściśle współpracując nad ich potrzebami prawnymi.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Nasza filozofia: ciężka praca, uczciwość, rzetelność
            </h3>
            <p className="text-text-muted leading-relaxed">
              Jesteśmy zobowiązani do świadczenia naszym klientom usług prawnych
              najwyższej jakości, dostosowanych do ich indywidualnych potrzeb.
              Postrzegamy siebie jako strategicznego partnera w Państwa
              przedsięwzięciach, zarówno obecnych, jak i przyszłych. Poprzez
              komunikację, dostępność i bliską, osobistą uwagę budujemy
              zaufanie. Zaufanie jest fundamentem każdej długotrwałej relacji
              adwokat–klient.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/pl/our-team"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-[#b8994e] transition-colors"
            >
              Poznaj nasz zespół
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
