export type LocationContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  badge: string;
  appointmentNotice?: string;
  aboutHeading: string;
  aboutParas: string[];
  servicesHeading: string;
  services: { label: string; href: string }[];
  areasHeading: string;
  areasIntro: string;
  faqs: { question: string; answer: string }[];
};

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  elmhurst: {
    metaTitle: "Elmhurst Law Office: Real Estate Attorneys in DuPage County",
    metaDescription:
      "Visit REAL Law Group's main office at 381 N York St Suite 1, Elmhurst, IL 60126. Real estate closings, estate planning, and investor services for DuPage County and all of Chicagoland. Call (630) 299-7600.",
    heroTitle: "Elmhurst Law Office",
    heroSubtitle:
      "Our main office on York Street serves Elmhurst, DuPage County, and all of Chicagoland with real estate closings, estate planning, and real estate investor services.",
    badge: "Main Office",
    aboutHeading: "Our Main Office in Elmhurst",
    aboutParas: [
      "REAL Law Group, P.C. has been headquartered in Elmhurst since the firm was founded in 2016. Our office at 381 N York St Suite 1 sits on the York Street corridor just north of downtown Elmhurst, minutes from I-290, I-294, and the Elmhurst Metra station, which makes it an easy stop for clients across DuPage County and the western suburbs.",
      "This is where the full firm operates every day. Closings, document signings, estate planning meetings, and investor consultations all happen here, and every piece of client mail for the firm is received and processed at this address.",
    ],
    servicesHeading: "What We Handle at This Office",
    services: [
      { label: "Real Estate Closings", href: "/practice-areas/real-estate" },
      {
        label: "Real Estate Investor Services",
        href: "/real-estate-investors",
      },
      { label: "Estate Planning", href: "/practice-areas/estate-planning" },
      { label: "HUD Closings", href: "/practice-areas/hud-closings" },
      { label: "Land Trusts", href: "/practice-areas/land-trusts" },
      { label: "Data Breach & Privacy", href: "/practice-areas/data-breach" },
    ],
    areasHeading: "Communities We Serve From Elmhurst",
    areasIntro:
      "From our main office we represent buyers, sellers, investors, and families throughout DuPage County and the western suburbs, including:",
    faqs: [
      {
        question: "Do I need an appointment to visit the Elmhurst office?",
        answer:
          "We recommend scheduling ahead so the right attorney is available for your matter. Call (630) 299-7600 or use our contact form and we will find a time that works, including Saturdays.",
      },
      {
        question: "What are the office hours?",
        answer:
          "Monday through Friday from 8 AM to 7 PM, and Saturday from 8 AM to 3 PM.",
      },
      {
        question: "Is parking available?",
        answer:
          "Yes. Free parking is available at the building, and the office is a short walk from the Elmhurst Metra station for clients coming from the city.",
      },
      {
        question: "Where should I send mail or legal documents?",
        answer:
          "All mail for REAL Law Group, P.C. should be sent to this office: 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
    ],
  },
  chicago: {
    metaTitle: "Chicago Law Office in Logan Square: Real Estate Attorneys",
    metaDescription:
      "Meet REAL Law Group attorneys by appointment at our Logan Square satellite office, 3250 W North Ave, Chicago, IL 60647. Real estate closings, building violations, and investor services for Chicago's Northwest Side. Call (630) 299-7600.",
    heroTitle: "Chicago Law Office in Logan Square",
    heroSubtitle:
      "A satellite meeting location at 3250 W North Ave serving Logan Square, Humboldt Park, and Chicago's Northwest Side, available by appointment.",
    badge: "Satellite Office: By Appointment Only",
    appointmentNotice:
      "This location is a satellite office of REAL Law Group, P.C. and is available by appointment only. Please call (630) 299-7600 to schedule before visiting. All mail and legal documents should be sent to our main office at 381 N York St Suite 1, Elmhurst, IL 60126.",
    aboutHeading: "Meet With Us on the Northwest Side",
    aboutParas: [
      "Our Logan Square satellite office at 3250 W North Ave gives Chicago clients a convenient place to meet with a REAL Law Group attorney without driving out to the suburbs. The storefront location sits on North Avenue near the border of Logan Square and Humboldt Park, close to the 606 trail and well served by the North Avenue bus.",
      "Meetings here are scheduled in advance, which means when you arrive, your attorney is there for you and your matter. Closings, attorney review of contracts, building violation strategy sessions, and investor consultations can all be arranged at this location.",
    ],
    servicesHeading: "What We Handle at This Location",
    services: [
      { label: "Real Estate Closings", href: "/practice-areas/real-estate" },
      {
        label: "Building Violations",
        href: "/practice-areas/building-violations",
      },
      {
        label: "Real Estate Investor Services",
        href: "/real-estate-investors",
      },
      { label: "Land Trusts", href: "/practice-areas/land-trusts" },
      { label: "Data Breach & Privacy", href: "/practice-areas/data-breach" },
    ],
    areasHeading: "Chicago Neighborhoods We Serve",
    areasIntro:
      "From this location we serve buyers, sellers, landlords, and investors across Chicago's Northwest Side, including:",
    faqs: [
      {
        question: "Do I need an appointment to visit the Chicago office?",
        answer:
          "Yes. This is a satellite meeting location, so all visits are by appointment only. Call (630) 299-7600 or use our contact form and we will schedule a time that works for you.",
      },
      {
        question: "Where should I send mail or legal documents?",
        answer:
          "Please send all mail to our main office: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
      {
        question: "What can I meet about at this location?",
        answer:
          "Any matter the firm handles, including real estate closings, attorney review, Chicago building code violations, investor and land trust work, and data breach claims. Tell us what you need when you book and we will make sure the meeting is set up for it.",
      },
      {
        question: "Is parking available?",
        answer:
          "Street parking is available on and around North Avenue, and the location is on the North Avenue bus route. We will confirm the easiest way to arrive when you schedule your appointment.",
      },
    ],
  },
  "park-ridge": {
    metaTitle:
      "Park Ridge Law Office: Real Estate Attorneys in North Cook County",
    metaDescription:
      "Meet REAL Law Group attorneys by appointment at our Park Ridge satellite office, 222 S Prospect Ave, Park Ridge, IL 60068. Real estate closings, estate planning, and probate real estate for the north suburbs. Call (630) 299-7600.",
    heroTitle: "Park Ridge Law Office",
    heroSubtitle:
      "A satellite meeting location at 222 S Prospect Ave serving Park Ridge, Niles, Des Plaines, and the north Cook County suburbs, available by appointment.",
    badge: "Satellite Office: By Appointment Only",
    appointmentNotice:
      "This location is a satellite office of REAL Law Group, P.C. and is available by appointment only. Please call (630) 299-7600 to schedule before visiting. All mail and legal documents should be sent to our main office at 381 N York St Suite 1, Elmhurst, IL 60126.",
    aboutHeading: "Meet With Us in Park Ridge",
    aboutParas: [
      "Our Park Ridge satellite office at 222 S Prospect Ave puts a REAL Law Group attorney within a short drive of the north Cook County suburbs. The office sits in the Uptown Park Ridge area near the Park Ridge Metra station, an easy stop for clients in Park Ridge, Niles, Des Plaines, and Chicago's far Northwest Side neighborhoods.",
      "Meetings here are scheduled in advance, so your attorney is prepared and focused on your matter when you arrive. Closings, attorney review, estate planning conversations, and inherited property matters can all be handled at this location.",
    ],
    servicesHeading: "What We Handle at This Location",
    services: [
      { label: "Real Estate Closings", href: "/practice-areas/real-estate" },
      { label: "Estate Planning", href: "/practice-areas/estate-planning" },
      {
        label: "Inherited Property & Probate",
        href: "/resources/inherited-property",
      },
      {
        label: "Real Estate Investor Services",
        href: "/real-estate-investors",
      },
      { label: "Data Breach & Privacy", href: "/practice-areas/data-breach" },
    ],
    areasHeading: "North Suburbs We Serve From Park Ridge",
    areasIntro:
      "From this location we serve homeowners, families, and investors across north Cook County, including:",
    faqs: [
      {
        question: "Do I need an appointment to visit the Park Ridge office?",
        answer:
          "Yes. This is a satellite meeting location, so all visits are by appointment only. Call (630) 299-7600 or use our contact form and we will schedule a time that works for you.",
      },
      {
        question: "Where should I send mail or legal documents?",
        answer:
          "Please send all mail to our main office: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126.",
      },
      {
        question: "What can I meet about at this location?",
        answer:
          "Any matter the firm handles, including real estate closings, attorney review, estate planning, inherited property and probate real estate, and data breach claims. Tell us what you need when you book and we will make sure the meeting is set up for it.",
      },
      {
        question: "How do I get there?",
        answer:
          "The office is on Prospect Avenue in Uptown Park Ridge, a short walk from the Park Ridge Metra station, with street parking nearby. We will confirm details when you schedule your appointment.",
      },
    ],
  },
};
