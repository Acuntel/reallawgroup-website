import {
  Home,
  Building,
  FileText,
  Landmark,
  AlertTriangle,
  Shield,
  Lock,
  Car,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import PracticeAreaCard from "@/components/cards/PracticeAreaCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Practice Areas",
  description:
    "REAL Law Group provides expert legal services in real estate law, business law, and estate planning throughout Chicagoland. Call (630) 299-7600 for a free consultation.",
  path: "/practice-areas",
});

const areas = [
  {
    icon: Home,
    title: "Real Estate Law",
    description:
      "We serve the residential and commercial real estate needs of clients located in Northern Illinois. From contract through the closing, we protect our clients' interests while helping them understand the business, tax, and legal implications pertaining to their real estate transaction.",
    href: "/practice-areas/real-estate",
  },
  {
    icon: Building,
    title: "Business Law",
    description:
      "REAL Law Group advises small to medium-sized businesses operating in a variety of industries. Drawing on our financial and business backgrounds, we assist our clients with challenges faced by business owners and offer proactive solutions.",
    href: "/practice-areas/business-law",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "More than just structuring the transfer of assets, we create unique estate and business plans that preserve assets and minimize taxes during life and for many years beyond. We provide the counsel necessary to advise and plan for you and your family.",
    href: "/practice-areas/estate-planning",
  },
  {
    icon: Landmark,
    title: "HUD Closings",
    description:
      "We serve as HUD closing attorneys, handling all aspects of HUD-related real estate transactions. From reviewing settlement statements to coordinating with lenders and title companies, we ensure full compliance with federal requirements.",
    href: "/practice-areas/hud-closings",
  },
  {
    icon: AlertTriangle,
    title: "Building Violations",
    description:
      "Facing a Chicago building code violation? We represent property owners, landlords, and developers in administrative hearings and help resolve violations from unpermitted work, safety issues, and failed inspections.",
    href: "/practice-areas/building-violations",
  },
  {
    icon: Shield,
    title: "Land Trusts",
    description:
      "Illinois land trusts offer privacy, asset protection, and simplified estate planning for property owners. We help clients establish and manage land trusts to protect their real estate investments.",
    href: "/practice-areas/land-trusts",
  },
  {
    icon: Lock,
    title: "Data Breach & Privacy Litigation",
    description:
      "Was your personal information exposed in a data breach? We represent Illinois residents in data breach, biometric privacy (BIPA), and consumer privacy claims on a contingency basis — no attorney's fees unless you recover. Free, confidential case reviews.",
    href: "/practice-areas/data-breach",
  },
  {
    icon: Car,
    title: "Personal Injury",
    description:
      "If you or a loved one has been injured in a car accident, we connect you with experienced personal injury attorneys through our trusted network. Free consultations available.",
    href: "/practice-areas/personal-injury",
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
              { name: "Home", url: "/" },
              { name: "Practice Areas" },
            ]),
          ),
        }}
      />
      <section className="page-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Practice Areas
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            REAL Law Group, P.C. is committed to providing the highest quality
            legal services.
          </p>
        </div>
      </section>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
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

      <CTABanner />
    </>
  );
}
