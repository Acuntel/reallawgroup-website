import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { COUNTIES } from "@/lib/counties";

const areas = [
  "Chicago",
  "Elmhurst",
  "Naperville",
  "Hinsdale",
  "Oak Brook",
  "Downers Grove",
  "Wheaton",
  "Glen Ellyn",
  "Lombard",
  "Villa Park",
  "Lisle",
  "Woodridge",
  "Berwyn",
  "Oak Park",
  "Skokie",
  "Niles",
  "Schaumburg",
  "Arlington Heights",
  "Park Ridge",
];

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-secondary" />
            <h2 className="text-2xl font-heading font-bold text-primary">
              Proudly Serving Chicagoland
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xl">
            From the city to the suburbs, REAL Law Group represents clients
            across Cook County, DuPage County, and the greater Chicagoland area.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {COUNTIES.map((county) => (
            <Link
              key={county.slug}
              href={`/service-areas/${county.slug}`}
              className="text-sm font-medium text-primary bg-light-gold rounded-full px-4 py-1.5 hover:text-secondary transition-colors"
            >
              {county.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {areas.map((area) => (
            <span key={area} className="text-sm text-text-muted font-medium">
              {area}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
          >
            See every county we serve
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
