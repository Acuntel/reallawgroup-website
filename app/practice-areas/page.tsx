import {
  Car,
  Truck,
  Bike,
  Stethoscope,
  HardHat,
  Heart,
  AlertTriangle,
  Footprints,
  Shield,
} from "lucide-react";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import PracticeAreaCard from "@/components/cards/PracticeAreaCard";
import CTABanner from "@/components/sections/CTABanner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Practice Areas — Personal Injury Law",
  description:
    "The Kryder Law Group handles car accidents, truck accidents, motorcycle accidents, medical malpractice, workers' compensation, wrongful death, and more. Call (312) 223-1700.",
  path: "/practice-areas",
});

const areas = [
  {
    icon: Car,
    title: "Car Accidents",
    description:
      "Head-on collisions, rear-end impacts, side-impact crashes, hit-and-run, rideshare accidents, and fatal car accidents. We handle all types of auto collision claims.",
    href: "/practice-areas/car-accidents",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    description:
      "Commercial vehicle collisions including rear-end, rollover, jackknife, underride, and tire blowout cases. We investigate trucking records and pursue multi-party liability.",
    href: "/practice-areas/truck-accidents",
  },
  {
    icon: Bike,
    title: "Motorcycle Accidents",
    description:
      "Rear-end, left-turn, intersection, lane splitting, and multi-vehicle motorcycle accident claims. We fight for riders injured by negligent drivers.",
    href: "/practice-areas/motorcycle-accidents",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description:
      "Diagnostic errors, treatment failures, surgical complications, medication errors, and failure to obtain informed consent. We hold healthcare providers accountable.",
    href: "/practice-areas/medical-malpractice",
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    description:
      "Filing claims, negotiating with insurance, covering medical bills, occupational illness claims, and survivor benefits under the Illinois Workers' Compensation Act.",
    href: "/practice-areas/workers-compensation",
  },
  {
    icon: Heart,
    title: "Catastrophic Injury",
    description:
      "Traumatic brain injuries, spinal cord injuries, amputations, multiple fractures, severe burns, and internal organ damage from any type of accident.",
    href: "/practice-areas/catastrophic-injury",
  },
  {
    icon: AlertTriangle,
    title: "Wrongful Death",
    description:
      "Claims filed under the Illinois Wrongful Death Act and Survival Act. Only the personal representative of the estate can file — we guide families through this difficult process.",
    href: "/practice-areas/wrongful-death",
  },
  {
    icon: Footprints,
    title: "Slip and Fall",
    description:
      "Premises liability cases involving dangerous conditions on someone else's property. We prove negligence and fight for full compensation for your injuries.",
    href: "/practice-areas/slip-and-fall",
  },
  {
    icon: Shield,
    title: "Construction Accidents",
    description:
      "Falls from heights, electrocutions, struck by falling objects, caught-in-between, machinery accidents, and chemical exposures. Workers' comp and third-party claims.",
    href: "/practice-areas/construction-accidents",
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
            The Kryder Law Group represents injured clients across a wide range
            of personal injury and accident cases.
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
