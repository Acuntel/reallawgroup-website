import {
  Home,
  Building,
  FileText,
  Landmark,
  AlertTriangle,
  Shield,
  Car,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import PracticeAreaCard from "@/components/cards/PracticeAreaCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title:
    "Obszary praktyki — prawo nieruchomości, biznesowe i spadkowe (Chicago)",
  description:
    "REAL Law Group świadczy profesjonalne usługi prawne w zakresie prawa nieruchomości, prawa gospodarczego oraz planowania spadkowego na terenie całego Chicagoland. Zadzwoń pod (630) 299-7600, aby umówić bezpłatną konsultację.",
  path: "/pl/practice-areas",
});

const areas = [
  {
    icon: Home,
    title: "Prawo nieruchomości",
    description:
      "Obsługujemy mieszkaniowe i komercyjne transakcje na nieruchomościach dla klientów z północnego Illinois. Od umowy aż po zamknięcie transakcji chronimy interesy naszych klientów, pomagając im zrozumieć biznesowe, podatkowe i prawne konsekwencje związane z ich transakcją.",
    href: "/pl/practice-areas/real-estate",
  },
  {
    icon: Building,
    title: "Prawo gospodarcze",
    description:
      "REAL Law Group doradza małym i średnim firmom działającym w różnych branżach. Opierając się na naszym doświadczeniu finansowym i biznesowym, wspieramy klientów w wyzwaniach, przed którymi stają właściciele firm, i oferujemy proaktywne rozwiązania.",
    href: "/pl/practice-areas/business-law",
  },
  {
    icon: FileText,
    title: "Planowanie spadkowe",
    description:
      "Wykraczamy poza sam transfer majątku — tworzymy indywidualne plany spadkowe i biznesowe, które chronią aktywa i minimalizują podatki za życia klienta oraz przez wiele lat po nim. Zapewniamy kompleksowe doradztwo dla Państwa i Państwa rodziny.",
    href: "/pl/practice-areas/estate-planning",
  },
  {
    icon: Landmark,
    title: "Zamknięcia HUD",
    description:
      "Pełnimy funkcję prawników obsługujących zamknięcia HUD, zajmując się wszystkimi aspektami transakcji nieruchomościowych związanych z HUD. Od analizy dokumentów rozliczeniowych po koordynację z pożyczkodawcami i firmami tytułowymi zapewniamy pełną zgodność z wymogami federalnymi.",
    href: "/pl/practice-areas/hud-closings",
  },
  {
    icon: AlertTriangle,
    title: "Naruszenia przepisów budowlanych",
    description:
      "Otrzymali Państwo zawiadomienie o naruszeniu przepisów budowlanych w Chicago? Reprezentujemy właścicieli nieruchomości, wynajmujących i deweloperów w postępowaniach administracyjnych i pomagamy rozwiązywać sprawy dotyczące prac bez pozwolenia, kwestii bezpieczeństwa oraz negatywnych inspekcji.",
    href: "/pl/practice-areas/building-violations",
  },
  {
    icon: Shield,
    title: "Trusty gruntowe (Land Trusts)",
    description:
      "Trusty gruntowe w stanie Illinois zapewniają prywatność, ochronę aktywów oraz uproszczone planowanie spadkowe dla właścicieli nieruchomości. Pomagamy klientom utworzyć i zarządzać trustami gruntowymi, aby chronić ich inwestycje w nieruchomości.",
    href: "/pl/practice-areas/land-trusts",
  },
  {
    icon: Car,
    title: "Szkody osobowe",
    description:
      "Jeśli Państwo lub ktoś bliski odnieśli obrażenia w wypadku samochodowym, łączymy Państwa z doświadczonymi prawnikami zajmującymi się sprawami szkód osobowych poprzez naszą zaufaną sieć współpracowników. Bezpłatne konsultacje.",
    href: "/pl/practice-areas/personal-injury",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Obszary praktyki" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Obszary praktyki
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group, P.C. zobowiązuje się do świadczenia usług prawnych
            najwyższej jakości.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Obszary praktyki" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <PracticeAreaCard key={i} {...area} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner buttonHref="/pl/contact" />
    </>
  );
}
