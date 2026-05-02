export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "REAL Law Group, P.C.",
    description:
      "REAL Law Group provides personalized legal guidance for real estate transactions, business law, and estate planning. Serving Chicagoland since 2016.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "300",
    },
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Vincent Anthony Incopero",
      url: "https://reallawgroup.com/about",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Elmhurst",
        "@id": "https://en.wikipedia.org/wiki/Elmhurst,_Illinois",
      },
      {
        "@type": "City",
        name: "Chicago",
        "@id": "https://en.wikipedia.org/wiki/Chicago",
      },
      { "@type": "City", name: "Naperville" },
      { "@type": "City", name: "Hinsdale" },
      { "@type": "City", name: "Lisle" },
      { "@type": "City", name: "Woodridge" },
      { "@type": "City", name: "Skokie" },
      { "@type": "City", name: "Niles" },
      { "@type": "City", name: "Oak Brook" },
      { "@type": "City", name: "Downers Grove" },
      { "@type": "City", name: "Wheaton" },
      { "@type": "AdministrativeArea", name: "DuPage County, Illinois" },
      { "@type": "AdministrativeArea", name: "Cook County, Illinois" },
      { "@type": "AdministrativeArea", name: "Will County, Illinois" },
      { "@type": "AdministrativeArea", name: "Kane County, Illinois" },
      { "@type": "AdministrativeArea", name: "Lake County, Illinois" },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Vincent Anthony Incopero",
        jobTitle: "Managing Partner",
      },
      {
        "@type": "Person",
        name: "Sarah Marie Roth",
        jobTitle: "Director of Operations",
      },
      {
        "@type": "Person",
        name: "Stephanie Milnamow",
        jobTitle: "Managing Paralegal",
      },
      {
        "@type": "Person",
        name: "Gina Zardetto",
        jobTitle: "Paralegal & Social Media Manager",
      },
      {
        "@type": "Person",
        name: "Alyssa Witnik",
        jobTitle: "Purchase Coordinator",
      },
      { "@type": "Person", name: "Eva Boozer", jobTitle: "Legal Assistant" },
    ],
    knowsAbout: [
      "Illinois real estate law",
      "residential real estate closings",
      "commercial real estate closings",
      "HUD closings",
      "FHA closings",
      "attorney review",
      "earnest money deposits",
      "quit claim deeds",
      "Illinois land trusts",
      "for sale by owner (FSBO) transactions",
      "1031 tax-deferred exchanges",
      "title insurance",
      "estate planning",
      "wills and trusts",
      "probate",
      "business formation",
      "LLC formation",
      "Chicago building code violations",
      "inherited property",
      "wire fraud prevention",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Law",
            description:
              "Residential and commercial real estate transactions, closings, and contract review",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Law",
            description: "Business formation, contracts, and corporate counsel",
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
    "@type": "Attorney",
    name: "Vincent Anthony Incopero",
    honorificSuffix: "J.D.",
    jobTitle: "Managing Partner",
    description:
      "Vincent Anthony Incopero is the Managing Partner and founder of REAL Law Group, P.C., a Chicago-area law firm focused on real estate, business, and estate planning law. A Chicago native, he founded the firm in 2016 to deliver approachable, relatable legal services.",
    url: "https://reallawgroup.com/about",
    image: "https://reallawgroup.com/images/logo-banner.png",
    telephone: "+16302997600",
    email: "info@reallawgroup.com",
    nationality: { "@type": "Country", name: "United States" },
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "381 N York St Suite 1",
        addressLocality: "Elmhurst",
        addressRegion: "IL",
        postalCode: "60126",
        addressCountry: "US",
      },
    },
    worksFor: {
      "@type": "LegalService",
      name: "REAL Law Group, P.C.",
      url: "https://reallawgroup.com",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Attorney at Law",
      occupationLocation: {
        "@type": "State",
        name: "Illinois",
      },
      skills:
        "Real estate law, HUD closings, business law, estate planning, land trusts",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "The John Marshall Law School",
        sameAs:
          "https://en.wikipedia.org/wiki/John_Marshall_Law_School_(Chicago)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Elmhurst College",
        sameAs: "https://en.wikipedia.org/wiki/Elmhurst_University",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "Doctorate",
        name: "Juris Doctor (J.D.)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "B.S. Finance & Economics",
      },
    ],
    knowsAbout: [
      "Illinois real estate law",
      "Residential and commercial closings",
      "HUD and FHA closings",
      "Attorney review in Illinois",
      "Quit claim deeds",
      "Illinois land trusts",
      "1031 tax-deferred exchanges",
      "Business formation and corporate law",
      "Wills, trusts, and estate planning",
      "Probate administration",
      "Chicago building code violations",
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

export function generateServiceSchema({
  name,
  description,
  path,
  serviceType,
  inLanguage = "en-US",
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  inLanguage?: string;
}) {
  const url = `https://reallawgroup.com${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    inLanguage,
    provider: {
      "@type": "LegalService",
      name: "REAL Law Group, P.C.",
      url: "https://reallawgroup.com",
      telephone: "+16302997600",
      address: {
        "@type": "PostalAddress",
        streetAddress: "381 N York St Suite 1",
        addressLocality: "Elmhurst",
        addressRegion: "IL",
        postalCode: "60126",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Elmhurst" },
      { "@type": "City", name: "Chicago" },
      { "@type": "City", name: "Naperville" },
      { "@type": "City", name: "Hinsdale" },
      { "@type": "City", name: "Oak Brook" },
      { "@type": "City", name: "Downers Grove" },
      { "@type": "City", name: "Wheaton" },
      { "@type": "AdministrativeArea", name: "DuPage County, Illinois" },
      { "@type": "AdministrativeArea", name: "Cook County, Illinois" },
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Homebuyers, sellers, real estate investors, and business owners in Illinois",
    },
  };
}

export function generateTeamSchema(
  members: {
    name: string;
    jobTitle: string;
    description?: string;
    image?: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "REAL Law Group, P.C.",
    url: "https://reallawgroup.com",
    employee: members.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.jobTitle,
      ...(m.description && { description: m.description }),
      ...(m.image && { image: `https://reallawgroup.com${m.image}` }),
      worksFor: {
        "@type": "LegalService",
        name: "REAL Law Group, P.C.",
        url: "https://reallawgroup.com",
      },
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  path,
  imagePath = "/images/logo-banner.png",
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
}) {
  const url = `https://reallawgroup.com${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `https://reallawgroup.com${imagePath}`,
    url,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "REAL Law Group, P.C.",
      url: "https://reallawgroup.com",
    },
    publisher: {
      "@type": "Organization",
      name: "REAL Law Group, P.C.",
      logo: {
        "@type": "ImageObject",
        url: "https://reallawgroup.com/images/logo-banner.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: {
      "@type": "LegalService",
      name: "REAL Law Group, P.C.",
      url: "https://reallawgroup.com",
    },
  };
}
