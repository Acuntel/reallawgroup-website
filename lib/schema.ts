export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "The Kryder Law Group, LLC",
    description:
      "The Kryder Law Group is a Chicago personal injury law firm with over $100 million recovered for clients. Injuries hurt — we make the legal process painless. Free consultations 24/7.",
    image: "https://kryderlaw.com/images/logo-banner.png",
    logo: "https://kryderlaw.com/images/logo-banner.png",
    "@id": "https://kryderlaw.com",
    url: "https://kryderlaw.com",
    telephone: "+13122231700",
    email: "akryder@kryderlaw.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "134 N LaSalle St, Suite 1515",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60602",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8819,
      longitude: -87.6328,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "535",
    },
    priceRange: "Free Consultation",
    founder: {
      "@type": "Person",
      name: "Andrew S. Kryder",
      url: "https://kryderlaw.com/about",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Illinois",
      },
      {
        "@type": "State",
        name: "Indiana",
      },
      {
        "@type": "State",
        name: "Iowa",
      },
      {
        "@type": "State",
        name: "Kentucky",
      },
      {
        "@type": "State",
        name: "Michigan",
      },
      {
        "@type": "State",
        name: "Missouri",
      },
      {
        "@type": "State",
        name: "Wisconsin",
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
            name: "Car Accident Claims",
            description:
              "Representation for car accident victims including head-on collisions, rear-end impacts, hit-and-run, and rideshare accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Truck Accident Claims",
            description:
              "Commercial vehicle collision representation including rear-end, rollover, jackknife, and underride accidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Malpractice",
            description:
              "Diagnostic errors, treatment failures, surgical complications, and medication errors",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workers' Compensation",
            description:
              "Filing claims, negotiating with insurance, covering medical bills and occupational illness claims",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wrongful Death",
            description:
              "Claims filed under the Illinois Wrongful Death Act and Survival Act",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catastrophic Injury",
            description:
              "TBI, spinal cord injuries, amputations, severe burns, and internal organ damage",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/kryderlawgroup/",
      "https://www.instagram.com/kryderlawgroupllc/",
      "https://www.linkedin.com/company/the-kryder-law-group-llc-accident-and-injury-lawyers/about/",
      "https://twitter.com/kryderlawgroup",
      "https://www.youtube.com/@thekryderlawgroupllc",
    ],
  };
}

export function generateAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrew S. Kryder",
    jobTitle: "Founding Partner",
    url: "https://kryderlaw.com/about",
    image: "https://kryderlaw.com/images/logo-banner.png",
    telephone: "+13122231700",
    email: "akryder@kryderlaw.com",
    worksFor: {
      "@type": "LegalService",
      name: "The Kryder Law Group, LLC",
      url: "https://kryderlaw.com",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "DePaul Law School",
      },
      {
        "@type": "EducationalOrganization",
        name: "Ohio State University",
      },
    ],
    knowsAbout: [
      "Personal Injury Law",
      "Car Accidents",
      "Truck Accidents",
      "Medical Malpractice",
      "Workers' Compensation",
      "Wrongful Death",
    ],
    memberOf: [
      { "@type": "Organization", name: "Chicago Bar Association" },
      { "@type": "Organization", name: "Illinois State Bar Association" },
      { "@type": "Organization", name: "Lake County Bar Association" },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Kryder Law Group",
    url: "https://kryderlaw.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kryderlaw.com/practice-areas?q={search_term_string}",
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
      ...(item.url && { item: `https://kryderlaw.com${item.url}` }),
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
