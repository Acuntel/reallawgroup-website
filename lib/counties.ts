export type County = {
  slug: string;
  name: string;
  seat: string;
  recorderCity: string;
  nearestOfficeSlug: "elmhurst" | "chicago" | "park-ridge";
  cities: string[];
};

export const COUNTIES: County[] = [
  {
    slug: "cook-county",
    name: "Cook County",
    seat: "Chicago",
    recorderCity: "Chicago",
    nearestOfficeSlug: "chicago",
    cities: [
      "Chicago",
      "Park Ridge",
      "Skokie",
      "Niles",
      "Des Plaines",
      "Berwyn",
      "Oak Park",
      "Cicero",
      "Evanston",
      "Schaumburg",
      "Arlington Heights",
      "Palatine",
      "Orland Park",
      "Tinley Park",
    ],
  },
  {
    slug: "dupage-county",
    name: "DuPage County",
    seat: "Wheaton",
    recorderCity: "Wheaton",
    nearestOfficeSlug: "elmhurst",
    cities: [
      "Elmhurst",
      "Wheaton",
      "Naperville",
      "Downers Grove",
      "Lombard",
      "Villa Park",
      "Addison",
      "Glen Ellyn",
      "Lisle",
      "Woodridge",
      "Oak Brook",
      "Hinsdale",
      "Bensenville",
      "Carol Stream",
    ],
  },
  {
    slug: "will-county",
    name: "Will County",
    seat: "Joliet",
    recorderCity: "Joliet",
    nearestOfficeSlug: "elmhurst",
    cities: [
      "Joliet",
      "Naperville",
      "Bolingbrook",
      "Plainfield",
      "Romeoville",
      "Lockport",
      "New Lenox",
      "Frankfort",
      "Mokena",
      "Homer Glen",
      "Shorewood",
      "Crest Hill",
    ],
  },
  {
    slug: "kane-county",
    name: "Kane County",
    seat: "Geneva",
    recorderCity: "Geneva",
    nearestOfficeSlug: "elmhurst",
    cities: [
      "Aurora",
      "Elgin",
      "St. Charles",
      "Geneva",
      "Batavia",
      "South Elgin",
      "North Aurora",
      "Montgomery",
      "Sugar Grove",
      "Carpentersville",
      "Algonquin",
      "Gilberts",
    ],
  },
  {
    slug: "lake-county",
    name: "Lake County",
    seat: "Waukegan",
    recorderCity: "Waukegan",
    nearestOfficeSlug: "park-ridge",
    cities: [
      "Waukegan",
      "Highland Park",
      "Lake Forest",
      "Libertyville",
      "Gurnee",
      "Vernon Hills",
      "Buffalo Grove",
      "Mundelein",
      "Deerfield",
      "Grayslake",
      "Lake Zurich",
      "Lincolnshire",
    ],
  },
  {
    slug: "mchenry-county",
    name: "McHenry County",
    seat: "Woodstock",
    recorderCity: "Woodstock",
    nearestOfficeSlug: "park-ridge",
    cities: [
      "Crystal Lake",
      "Algonquin",
      "McHenry",
      "Woodstock",
      "Huntley",
      "Cary",
      "Lake in the Hills",
      "Fox River Grove",
      "Marengo",
      "Harvard",
      "Johnsburg",
      "Spring Grove",
    ],
  },
];

export function getCounty(slug: string): County | undefined {
  return COUNTIES.find((county) => county.slug === slug);
}

export const COUNTY_SLUG_BY_NAME: Record<string, string> = Object.fromEntries(
  COUNTIES.map((county) => [county.name, county.slug]),
);
