export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'REAL Law Group, P.C.',
    image: 'https://reallawgroup.com/images/logo-banner.png',
    '@id': 'https://reallawgroup.com',
    url: 'https://reallawgroup.com',
    telephone: '+16302997600',
    email: 'info@reallawgroup.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '381 N York St Suite 1',
      addressLocality: 'Elmhurst',
      addressRegion: 'IL',
      postalCode: '60126',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.8959,
      longitude: -87.9403,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '15:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 41.8781,
        longitude: -87.6298,
      },
      geoRadius: '50000',
    },
    sameAs: [
      'https://www.facebook.com/reallawgroup',
      'https://www.instagram.com/reallawgroup/',
      'https://www.linkedin.com/company/reallawgroup',
    ],
  };
}

export function generateAttorneySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: 'Vincent Anthony Incopero',
    jobTitle: 'Managing Partner',
    worksFor: {
      '@type': 'LegalService',
      name: 'REAL Law Group, P.C.',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'The John Marshall Law School',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Elmhurst College',
      },
    ],
    knowsAbout: ['Real Estate Law', 'Business Law', 'Estate Planning'],
    memberOf: [
      { '@type': 'Organization', name: 'Chicago Bar Association' },
      { '@type': 'Organization', name: 'DuPage County Bar Association' },
      { '@type': 'Organization', name: 'Illinois State Bar Association' },
      { '@type': 'Organization', name: 'Illinois Real Estate Lawyers Association' },
      { '@type': 'Organization', name: 'Justinian Society of Lawyers' },
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `https://reallawgroup.com${item.url}` }),
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
