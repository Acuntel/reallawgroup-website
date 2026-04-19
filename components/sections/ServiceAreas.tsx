import { MapPin } from "lucide-react";

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
  "DuPage County",
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
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {areas.map((area) => (
            <span key={area} className="text-sm text-text-muted font-medium">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
