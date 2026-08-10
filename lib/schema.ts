import { COUNTIES } from "./counties";
import { OFFICES, type Office } from "./locations";

function officeAddressSchema(office: Office) {
  return {
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.locality,
    addressRegion: office.region,
    postalCode: office.postalCode,
    addressCountry: "US",
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "REAL Law Group, P.C.",
    description:
      "REAL Law Group is an all-in-one Illinois real estate law firm: residential and commercial closings, wholesale and assignment of contract deals, seller financing, Illinois land trusts, LLC and series LLC formation, 1031 exchanges, short sales, HUD closings, Chicago building violation defense, and estate planning, all under one roof. Serving all of Illinois since 2016.",
    image: "https://reallawgroup.com/images/logo-banner.png",
    logo: "https://reallawgroup.com/images/logo-banner.png",
    "@id": "https://reallawgroup.com",
    url: "https://reallawgroup.com",
    telephone: "+16302997600",
    email: "info@reallawgroup.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "381 N York St Suite 1",
      addressLocality: "Elmhurst",
      addressRegion: "IL",
      postalCode: "60126",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8959,
      longitude: -87.9403,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    slogan: "Hard Work. Integrity. Reliability.",
    foundingDate: "2016",
    knowsLanguage: ["en", "es", "pl"],
    founder: {
      "@type": "Person",
      name: "Vincent Anthony Incopero",
      url: "https://reallawgroup.com/about",
    },
    location: OFFICES.map((office) => ({
      "@type": "Place",
      name:
        office.type === "main"
          ? "REAL Law Group Main Office (Elmhurst)"
          : `REAL Law Group Satellite Office (${office.shortName})`,
      address: officeAddressSchema(office),
      hasMap: office.mapsLinkUrl,
      ...(office.type === "satellite" && {
        description: "Satellite office available by appointment only.",
      }),
    })),
    areaServed: [
      { "@type": "City", name: "Elmhurst" },
      { "@type": "City", name: "Chicago" },
      { "@type": "City", name: "Park Ridge" },
      { "@type": "City", name: "Des Plaines" },
      { "@type": "City", name: "Naperville" },
      { "@type": "City", name: "Hinsdale" },
      { "@type": "City", name: "Oak Brook" },
      { "@type": "City", name: "Downers Grove" },
      { "@type": "City", name: "Wheaton" },
      { "@type": "City", name: "Lisle" },
      { "@type": "City", name: "Woodridge" },
      { "@type": "City", name: "Skokie" },
      { "@type": "City", name: "Niles" },
      { "@type": "State", name: "Illinois" },
      ...COUNTIES.map((county) => ({
        "@type": "AdministrativeArea",
        name: county.name,
      })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 41.8781,
          longitude: -87.6298,
        },
        geoRadius: "50000",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Closings",
            description:
              "Residential and commercial real estate closings for buyers and sellers, including short sales, assignment of contract, and seller financing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Investor Services",
            description:
              "Acquisitions and dispositions, entity formation, land trusts, 1031 exchanges, partnership structuring, and investor closings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estate Planning",
            description: "Wills, trusts, and estate administration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HUD Closings",
            description: "HUD and government-insured property closings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Building Violations",
            description: "Chicago building code violation defense",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Land Trusts",
            description: "Illinois land trust formation and administration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Breach & Privacy Litigation",
            description:
              "Representation of Illinois residents in data breach, biometric privacy (BIPA), and consumer privacy claims",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/reallawgroup",
      "https://www.instagram.com/reallawgroup/",
      "https://www.linkedin.com/company/reallawgroup",
    ],
  };
}

export function generateAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vincent Anthony Incopero",
    jobTitle: "Managing Partner",
    url: "https://reallawgroup.com/about",
    image: "https://reallawgroup.com/images/logo-banner.png",
    telephone: "+16302997600",
    email: "info@reallawgroup.com",
    worksFor: {
      "@type": "LegalService",
      name: "REAL Law Group, P.C.",
      url: "https://reallawgroup.com",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "The John Marshall Law School",
      },
      {
        "@type": "EducationalOrganization",
        name: "Elmhurst College",
      },
    ],
    knowsAbout: [
      "Real Estate Closings",
      "Residential Real Estate Closings",
      "Commercial Real Estate Closings",
      "Illinois Attorney Review",
      "HUD and FHA Closings",
      "Illinois Land Trusts",
      "Quit Claim Deeds",
      "For Sale By Owner (FSBO) Transactions",
      "1031 Tax-Deferred Exchanges",
      "Inherited Property and Probate Real Estate",
      "Short Sales",
      "Assignment of Contract and Wholesale Transactions",
      "Seller Financing and Installment Agreements",
      "Real Estate Investor Representation",
      "LLC and Corporate Formation",
      "Estate Planning",
      "Wills and Trusts",
      "Chicago Building Code Violation Defense",
      "Data Breach Litigation",
      "Illinois Personal Information Protection Act (PIPA)",
      "Illinois Biometric Information Privacy Act (BIPA)",
      "Consumer Privacy Litigation",
    ],
    memberOf: [
      { "@type": "Organization", name: "Chicago Bar Association" },
      { "@type": "Organization", name: "DuPage County Bar Association" },
      { "@type": "Organization", name: "Illinois State Bar Association" },
      {
        "@type": "Organization",
        name: "Illinois Real Estate Lawyers Association",
      },
      { "@type": "Organization", name: "Justinian Society of Lawyers" },
    ],
  };
}

export function generateLocationSchema(office: Office) {
  const path = `/locations/${office.slug}`;
  const isMain = office.type === "main";
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `https://reallawgroup.com${path}#office`,
    name: isMain
      ? "REAL Law Group, P.C."
      : `REAL Law Group, P.C. (${office.shortName} Office)`,
    description: isMain
      ? "Main office of REAL Law Group, P.C. in Elmhurst, Illinois. Real estate closings, real estate investor services, and estate planning for DuPage County and all of Chicagoland."
      : `Satellite office of REAL Law Group, P.C. in ${office.locality}, Illinois, available by appointment only. Client meetings are scheduled in advance; mail is handled at the firm's main office in Elmhurst.`,
    image: "https://reallawgroup.com/images/logo-banner.png",
    url: `https://reallawgroup.com${path}`,
    telephone: "+16302997600",
    email: "info@reallawgroup.com",
    address: officeAddressSchema(office),
    hasMap: office.mapsLinkUrl,
    priceRange: "$$",
    ...(isMain
      ? {
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "15:00",
            },
          ],
        }
      : {
          branchOf: {
            "@type": "LegalService",
            "@id": "https://reallawgroup.com",
            name: "REAL Law Group, P.C.",
          },
          parentOrganization: {
            "@type": "LegalService",
            "@id": "https://reallawgroup.com",
            name: "REAL Law Group, P.C.",
          },
        }),
    areaServed: [
      { "@type": "AdministrativeArea", name: office.county },
      ...office.areaServed.map((name) => ({ "@type": "City", name })),
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "REAL Law Group",
    url: "https://reallawgroup.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://reallawgroup.com/practice-areas?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `https://reallawgroup.com${item.url}` }),
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `https://reallawgroup.com${article.path}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://reallawgroup.com${article.path}`,
    },
    image: "https://reallawgroup.com/images/logo-banner.png",
    inLanguage: "en-US",
    datePublished: article.datePublished ?? "2025-01-01",
    dateModified: article.dateModified ?? new Date().toISOString().slice(0, 10),
    author: {
      "@type": "Person",
      name: "Vincent Anthony Incopero",
      url: "https://reallawgroup.com/about",
    },
    publisher: {
      "@type": "LegalService",
      name: "REAL Law Group, P.C.",
      logo: {
        "@type": "ImageObject",
        url: "https://reallawgroup.com/images/logo-banner.png",
      },
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
