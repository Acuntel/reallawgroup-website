import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Nasi adwokaci i pracownicy",
  description:
    "Poznaj zespół REAL Law Group — doświadczonych adwokatów, asystentów prawnych i pracowników obsługujących klientów w Chicagoland w zakresie nieruchomości, prawa biznesowego i planowania spadkowego. Zadzwoń (630) 299-7600.",
  path: "/pl/our-team",
});

const teamMembers = [
  {
    name: "Vincent Anthony Incopero",
    title: "Wspólnik Zarządzający",
    initials: "VI",
    bio: "Vincent Anthony Incopero koncentruje swoją praktykę w trzech wzajemnie uzupełniających się dziedzinach prawa: sprzedaży i kupnie nieruchomości, organizacjach biznesowych oraz planowaniu spadkowym. Wykształcenie Vincenta w zakresie finansów i ekonomii w połączeniu z jego wykształceniem prawniczym i doświadczeniem zapewniło mu umiejętności analityczne niezbędne do dostarczania praktycznych i opłacalnych rozwiązań. Przed założeniem REAL Law Group, P.C. Vincent pracował w najbardziej uznanej firmie tytułowej w Chicago i praktykował prawo w największej chicagowskiej kancelarii zajmującej się szkodami osobowymi po stronie powoda.",
    education:
      "The John Marshall Law School, J.D. (2014) | Elmhurst College, B.S., podwójny kierunek — Finanse i Ekonomia (2010)",
    barAdmissions:
      "Illinois | U.S. District Court for the Northern District of Illinois",
    affiliations:
      "Chicago Bar Association, DuPage County Bar Association, Illinois State Bar Association, Illinois Real Estate Lawyers Association, Justinian Society of Lawyers",
  },
  {
    name: "Sarah Marie Roth",
    title: "Dyrektor ds. Operacyjnych",
    initials: "SR",
    bio: "Sarah Marie Roth jest Dyrektorem ds. Operacyjnych w REAL Law Group, P.C., gdzie koncentruje się na transakcjach nieruchomości mieszkaniowych i komercyjnych, a także zajmuje się nieruchomościami rolnymi i planowaniem spadkowym. Sarah ma niezrównane doświadczenie w pracy nad transakcjami trudnymi, w tym w krótkiej sprzedaży, przeniesieniach własności w zamian za dług (deed-in-lieu) oraz sprzedażach REO (nieruchomości należących do banku). Współpracuje bezpośrednio z kupującymi, sprzedającymi, pośrednikami i kredytodawcami, od umowy po zamknięcie.",
  },
  {
    name: "Stephanie Milnamow",
    title: "Kierująca Asystentka Prawna",
    initials: "SM",
    bio: "Stephanie Milnamow jest asystentką prawną w REAL Law Group, P.C. i zajmuje się umowami sprzedaży. Stephanie ukończyła Eastern Illinois University, a następnie uzyskała certyfikat Paralegal w 2014 roku. Pracowała jako lider zespołu w dużej chicagowskiej kancelarii windykacyjnej, zanim dołączyła do REAL Law Group w 2019 roku.",
  },
  {
    name: "Alyssa Witnik",
    title: "Koordynator ds. Zakupów",
    initials: "AW",
    bio: "Alyssa Witnik zajmuje się transakcjami zakupowymi w REAL Law Group, P.C., prowadząc kupujących przez każdy etap procesu zamknięcia. Od umowy po odbiór kluczy Alyssa koordynuje pracę z kredytodawcami, firmami tytułowymi i agentami, aby zapewnić bezproblemowe doświadczenie każdemu klientowi.",
  },
  {
    name: "Eva Boozer",
    title: "Asystentka Prawna",
    initials: "EB",
    bio: "Eva pełni funkcję asystentki prawnej w REAL Law Group, P.C., zapewniając niezbędne wsparcie administracyjne i organizacyjne dla adwokatów, pomagając w sprawnym funkcjonowaniu kancelarii. Jej rola obejmuje przygotowywanie i przegląd dokumentów prawnych, prowadzenie akt spraw, planowanie spotkań i terminów sądowych oraz prowadzenie dokładnej dokumentacji. Mówię po polsku.",
  },
  {
    name: "Gina Zardetto",
    title: "Asystentka Prawna",
    initials: "GZ",
    bio: "Gina Zardetto jest asystentką prawną w REAL Law Group, P.C. Studiowała na DePaul University, gdzie skupiała się na naukach politycznych, mediach masowych i marketingu. Wspiera kancelarię w obowiązkach asystenckich w ramach praktyki z zakresu nieruchomości i planowania spadkowego.",
  },
];

export default function OurTeamPagePL() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Strona główna", url: "/pl" },
              { name: "Nasz zespół" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nasz zespół
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Ludzie stojący za REAL Law Group — oddani, aby Państwu służyć.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Strona główna", href: "/pl" },
          { label: "Nasz zespół" },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
