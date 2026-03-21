import { MapPin } from 'lucide-react';

const areas = [
  'Elmhurst',
  'DuPage County',
  'Naperville',
  'Hinsdale',
  'Lisle',
  'Woodridge',
  'Skokie',
  'Niles',
  'Oak Brook',
  'Downers Grove',
  'Wheaton',
  'Chicago',
];

export default function ServiceAreas() {
  return (
    <section className="py-12 bg-white border-t border-border">
      <div className="container-custom">
        <div className="flex items-center gap-2 justify-center mb-6">
          <MapPin className="w-5 h-5 text-secondary" />
          <h2 className="text-lg font-heading font-semibold text-primary">Proudly Serving Chicagoland</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {areas.map((area) => (
            <span key={area} className="text-sm text-text-muted">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
