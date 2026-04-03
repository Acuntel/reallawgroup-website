import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Attorneys — The Kryder Law Group",
  description:
    "Meet the experienced personal injury attorneys at The Kryder Law Group. Over $100 million recovered. Admitted in 10+ courts. Call (312) 223-1700.",
  path: "/our-team",
});

const teamMembers = [
  {
    name: "Andrew S. Kryder, Esq.",
    title: "Founding Partner",
    initials: "AK",
    bio: "Andrew S. Kryder founded The Kryder Law Group in 2002 with a mission to make the legal process painless for injury victims. With over 20 years of litigation experience, he has recovered over $100 million in compensation across thousands of cases. Andrew has argued multiple cases before the Illinois Appellate Court and is admitted to practice before the U.S. Supreme Court. Notable results include a $7.5M construction worker recovery, $3M wrongful death settlement, and $2.2M auto collision verdict.",
    education:
      "DePaul Law School, J.D. (1998) | Ohio State University, B.A. (1995)",
    barAdmissions:
      "Illinois | Indiana | Iowa | Kentucky | Michigan | Minnesota | Missouri | Wisconsin | N.D. Illinois | N.D. Indiana | U.S. Supreme Court",
    affiliations:
      "Chicago Bar Association, CBA Judicial Evaluation Committee, Illinois State Bar Association, Lake County Bar Association",
  },
  {
    name: "Justin Hare, Esq.",
    title: "Partner",
    initials: "JH",
    bio: "Justin Hare has recovered over $30 million for clients through trials, arbitrations, mediations, and settlements. He believes that clear communication and truly listening to clients are the keys to successful outcomes. Justin brings a client-first approach to every case, ensuring injured victims receive the compensation and attention they deserve.",
    education: "Chicago-Kent College of Law, J.D. | Denison University, B.A.",
  },
  {
    name: "Alexander Gerteis, Esq.",
    title: "Partner",
    initials: "AG",
    bio: "Alexander Gerteis joined the firm in 2015 and focuses on auto/trucking accidents, premises liability, dog attacks, and product liability cases. He has been named a Super Lawyers Rising Star from 2022-2024 and was recognized as a Top 10 Under 40 by the National Academy of Personal Injury Attorneys in 2018. His seven-figure motorcycle accident recovery was featured in the Chicago Daily Law Bulletin.",
    education:
      "DePaul University College of Law, J.D. (magna cum laude) | University of Wisconsin-Madison, B.A. Political Science",
    affiliations:
      "Super Lawyers Rising Star (2022-2024), Top 10 Under 40 — NAPIA (2018)",
  },
  {
    name: "Nick Friel, Esq.",
    title: "Associate Attorney",
    initials: "NF",
    bio: "Nick Friel is a third-generation lawyer who has secured over $21 million for clients, including a $1M policy limit wrongful death settlement and multiple six-figure recoveries. His passion for justice and tenacious advocacy make him a powerful asset for clients facing insurance companies and negligent parties.",
    education:
      "Loyola Law School, J.D. (2021) | Indiana University, B.S. History & Political Science (2018)",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Our Team" },
            ]),
          ),
        }}
      />

      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Attorneys
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Experienced trial lawyers fighting for the injured across Illinois
            and the Midwest.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
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
