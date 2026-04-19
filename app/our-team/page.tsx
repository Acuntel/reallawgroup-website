import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Team — REAL Law Group Attorneys & Staff",
  description:
    "Meet the REAL Law Group team — experienced attorneys, paralegals, and staff serving Chicagoland real estate, business law, and estate planning clients. Call (630) 299-7600.",
  path: "/our-team",
});

const teamMembers = [
  {
    name: "Vincent Anthony Incopero",
    title: "Managing Partner",
    initials: "VI",
    bio: "Vincent Anthony Incopero concentrates his practice in three complementary areas of law: real estate sales/purchases, business organizations, and estate planning. Vincent's educational background in finance and economics, coupled with his legal training and experience, has provided him with the analytical skills necessary to provide practical, cost-effective solutions. Prior to founding REAL Law Group, P.C., Vincent worked at Chicago's most recognized title company and practiced law with Chicago's largest Plaintiff's personal injury firm.",
    education:
      "The John Marshall Law School, J.D. (2014) | Elmhurst College, B.S., Double Major, Finance & Economics (2010)",
    barAdmissions:
      "Illinois | U.S. District Court for the Northern District of Illinois",
    affiliations:
      "Chicago Bar Association, DuPage County Bar Association, Illinois State Bar Association, Illinois Real Estate Lawyers Association, Justinian Society of Lawyers",
  },
  {
    name: "Sarah Marie Roth",
    title: "Director of Operations",
    initials: "SR",
    bio: "Sarah Marie Roth is the Director of Operations at REAL Law Group, P.C. where she concentrates on residential and commercial real estate transactions, as well as handling Agricultural Real Estate and Estate Planning. Sarah has an unparalleled level of experience working on distressed transactions, including short sales, deed-in-lieus and REO sales (bank owned real estate), and she works directly with Buyers, Sellers, Brokers, and Lenders from contract to closing.",
  },
  {
    name: "Stephanie Milnamow",
    title: "Managing Paralegal",
    initials: "SM",
    bio: "Stephanie Milnamow is a paralegal at REAL Law Group, P.C. and works sales contracts. Stephanie graduated from Eastern Illinois University before acquiring her Paralegal Certificate in 2014. She worked as a team lead at a large Chicago based collections law firm before joining REAL Law Group in 2019.",
  },
  {
    name: "Alyssa Witnik",
    title: "Purchase Coordinator",
    initials: "AW",
    bio: "Alyssa Witnik handles purchase transactions at REAL Law Group, P.C., guiding buyers through every step of the closing process. From contract to keys, Alyssa coordinates with lenders, title companies, and agents to ensure a seamless experience for every client.",
  },
  {
    name: "Eva Boozer",
    title: "Legal Assistant",
    initials: "EB",
    bio: "Eva serves as the Legal Assistant at REAL Law Group, P.C., providing essential administrative and organizational support to attorneys, helping ensure the efficient operation of a legal office. This role involves preparing and reviewing legal documents, managing case files, scheduling appointments and court dates, and maintaining accurate records. Mówię po polsku.",
  },
  {
    name: "Gina Zardetto",
    title: "Paralegal",
    initials: "GZ",
    bio: "Gina Zardetto is a paralegal for REAL Law Group, P.C. She attended DePaul University and studied political science, mass media, and marketing. She assists with paralegal duties supporting the firm's real estate and estate planning practices.",
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
            Our Team
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            The people behind REAL Law Group — dedicated to serving you.
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
