import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About REAL Law Group — Elmhurst Real Estate Attorneys",
  description:
    "Learn about REAL Law Group, P.C. - founded in 2016 on hard work, integrity, and reliability. Meet our team of experienced Chicago attorneys. Call (630) 299-7600 for a free consultation.",
  path: "/about",
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
    name: "Eva Boozer",
    title: "Attorney",
    initials: "EB",
    bio: "Eva Boozer is an attorney at REAL Law Group, P.C. where she assists clients with real estate transactions, contract review, and closings throughout Chicagoland. Eva works closely with Managing Partner Vincent Incopero to provide personalized legal guidance to every client the firm serves.",
  },
  {
    name: "Sarah Marie Roth",
    title: "Director of Operations",
    initials: "SR",
    bio: "Sarah Marie Roth is the Director of Operations at REAL Law Group, P.C. where she concentrates on residential and commercial real estate transactions, as well as handling Agricultural Real Estate and Estate Planning. Sarah has an unparalleled level of experience working on distressed transactions, including short sales, deed-in-lieus and REO sales (bank owned real estate), and she works directly with Buyers, Sellers, Brokers, and Lenders from contract to closing.",
  },
  {
    name: "Alyssa Witnik",
    title: "Purchase Coordinator",
    initials: "AW",
    bio: "Alyssa Witnik handles purchase transactions at REAL Law Group, P.C., guiding buyers through every step of the closing process. From contract to keys, Alyssa coordinates with lenders, title companies, and agents to ensure a seamless experience for every client.",
  },
  {
    name: "Ava",
    title: "Office Manager",
    initials: "A",
    bio: "Ava serves as the Office Manager at REAL Law Group, P.C., ensuring the day-to-day operations of the firm run smoothly. She is the first point of contact for many of the firm's clients, providing a welcoming and organized experience from the moment you walk through the door.",
  },
  {
    name: "Stephanie Milnamow",
    title: "Managing Paralegal",
    initials: "SM",
    bio: "Stephanie Milnamow is a paralegal at REAL Law Group, P.C. and works sales contracts. Stephanie graduated from Eastern Illinois University before acquiring her Paralegal Certificate in 2014. She worked as a team lead at a large Chicago based collections law firm before joining REAL Law Group in 2019.",
  },
  {
    name: "Gina Zardetto",
    title: "Paralegal & Social Media Manager",
    initials: "GZ",
    bio: "Gina Zardetto is a paralegal and social media manager for REAL Law Group, P.C. She attended DePaul University and studied political science, mass media, and marketing. She assists with paralegal duties and manages the firm's marketing and social media presence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About" },
            ]),
          ),
        }}
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Story
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Founded in 2016 on the principles of hard work, integrity, and
            reliability.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Founding Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-text-muted leading-relaxed text-lg mb-8">
            In 2016, REAL Law Group, P.C. was founded on the principles of
            hard-work, integrity, and reliability. These qualities, instilled in
            us at young ages, are what separates us from our competition. Born
            and raised in Chicago and the surrounding suburbs, we know the
            people and the communities we serve. Our collegiate and legal
            educations were obtained at some of the finest institutions in
            Illinois. Not only are we the first members of our families to
            attend college, we are also the only lawyers within our entire
            extended families. Mindful of our earlier days, when we were
            unfamiliar with and even intimidated by the law, we strive to relate
            to our clients, and educate them as we work closely to assist with
            their legal needs.
          </p>

          <div className="gold-border-left pl-8 py-2 mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Our Philosophy: Hard Work, Integrity, Reliability
            </h3>
            <p className="text-text-muted leading-relaxed">
              We are committed to providing the highest quality, personalized
              legal services to our clients. We view ourselves as a strategic
              partner in your endeavors, both current and future. Through
              communication, availability, and close personal attention, we
              build trust. Trust is the cornerstone of any long lasting
              attorney-client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet the Team
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

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
