export type OfficeType = "main" | "satellite";

export type Office = {
  slug: "elmhurst" | "chicago" | "park-ridge";
  type: OfficeType;
  shortName: string;
  streetAddress: string;
  locality: string;
  region: "IL";
  postalCode: string;
  county: string;
  fullAddress: string;
  mapsLinkUrl: string;
  mapsEmbedUrl: string;
  areaServed: string[];
};

export const OFFICES: Office[] = [
  {
    slug: "elmhurst",
    type: "main",
    shortName: "Elmhurst",
    streetAddress: "381 N York St Suite 1",
    locality: "Elmhurst",
    region: "IL",
    postalCode: "60126",
    county: "DuPage County",
    fullAddress: "381 N York St Suite 1, Elmhurst, IL 60126",
    mapsLinkUrl: "https://g.page/reallawgroup?share",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0!2d-87.94196!3d41.89784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4e3a93fe3549%3A0xaf4d2ac4f498a3c8!2sREAL%20Law%20Group%2C%20P.C.!5e0!3m2!1sen!1sus!4v1700000000000",
    areaServed: [
      "Elmhurst",
      "Oak Brook",
      "Villa Park",
      "Lombard",
      "Addison",
      "Bensenville",
      "Downers Grove",
      "Wheaton",
      "Naperville",
      "Hinsdale",
    ],
  },
  {
    slug: "chicago",
    type: "satellite",
    shortName: "Chicago (Logan Square)",
    streetAddress: "3250 W North Ave, Unit STO",
    locality: "Chicago",
    region: "IL",
    postalCode: "60647",
    county: "Cook County",
    fullAddress: "3250 W North Ave, Unit STO, Chicago, IL 60647",
    mapsLinkUrl:
      "https://www.google.com/maps/search/?api=1&query=3250%20W%20North%20Ave%2C%20Chicago%2C%20IL%2060647",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=3250%20W%20North%20Ave%2C%20Chicago%2C%20IL%2060647&output=embed",
    areaServed: [
      "Logan Square",
      "Humboldt Park",
      "Bucktown",
      "Wicker Park",
      "Avondale",
      "Hermosa",
      "West Town",
    ],
  },
  {
    slug: "park-ridge",
    type: "satellite",
    shortName: "Park Ridge",
    streetAddress: "222 S Prospect Ave",
    locality: "Park Ridge",
    region: "IL",
    postalCode: "60068",
    county: "Cook County",
    fullAddress: "222 S Prospect Ave, Park Ridge, IL 60068",
    mapsLinkUrl:
      "https://www.google.com/maps/search/?api=1&query=222%20S%20Prospect%20Ave%2C%20Park%20Ridge%2C%20IL%2060068",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=222%20S%20Prospect%20Ave%2C%20Park%20Ridge%2C%20IL%2060068&output=embed",
    areaServed: [
      "Park Ridge",
      "Niles",
      "Des Plaines",
      "Edison Park",
      "Norwood Park",
      "Glenview",
      "Morton Grove",
      "Skokie",
    ],
  },
];

export const MAIN_OFFICE = OFFICES[0];

export function getOffice(slug: string): Office | undefined {
  return OFFICES.find((office) => office.slug === slug);
}
