import { MapPin } from "lucide-react";

const areas = [
  "Chicago",
  "Schaumburg",
  "Elgin",
  "Des Plaines",
  "Orland Park",
  "Aurora",
  "Davenport, IA",
  "Des Moines, IA",
  "Indianapolis, IN",
  "Louisville, KY",
  "Grand Rapids, MI",
  "Lansing, MI",
  "St. Louis, MO",
  "Columbus, OH",
  "Milwaukee, WI",
  "Cook County",
  "DuPage County",
  "Lake County",
  "Will County",
  "Kane County",
];

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-secondary" />
            <h2 className="text-2xl font-heading font-bold text-primary">
              Serving Illinois & the Midwest
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-xl">
            With 17 offices across 8 states, The Kryder Law Group represents
            injured clients throughout Illinois, Indiana, Iowa, Kentucky,
            Michigan, Missouri, Ohio, and Wisconsin.
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
