import type { CountyContent } from "./content";

const REMOTE_NOTE =
  "Attorney review, negotiation, and document preparation happen electronically, signatures are handled by e-sign, mail-away packages, or remote notarization where permitted, and the closing itself takes place at a title company office in your area. Distance does not change the quality of representation.";

const REMOTE_FAQ = {
  question: "How does a remote closing work with your firm?",
  answer:
    "Everything before closing is electronic: we review and negotiate your contract by email and phone, and review title and survey the same way. Signing is handled through e-signatures, a mail-away package, or remote notarization where permitted, and the closing funds and documents flow through a title company office near you. Most sellers never need to appear in person anywhere.",
};

const MAIL_FAQ = {
  question: "Where should I send mail or legal documents?",
  answer:
    "Please send all mail to our main office: REAL Law Group, P.C., 381 N York St Suite 1, Elmhurst, IL 60126. Most documents move electronically, so physical mail is rarely needed.",
};

export const COUNTY_CONTENT_EXPANSION: Record<string, CountyContent> = {
  "kendall-county": {
    metaTitle:
      "Kendall County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and new-construction contracts across Kendall County: Yorkville, Oswego, Plano, Montgomery, and the Kendall side of Aurora. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Kendall County",
    heroSubtitle:
      "Closings, attorney review, and new-construction contract work across Yorkville, Oswego, Plano, and one of the fastest-growing counties in Illinois.",
    introParas: [
      "Kendall County has spent two decades as one of the fastest-growing counties in the country, and the market still runs on new construction: subdivisions in Yorkville and Oswego, farmland conversions around Plano, and builder contracts everywhere. Builder paperwork is drafted to protect the builder, which makes the attorney review period the buyer's main line of defense, and we negotiate those contracts constantly.",
      "We represent Kendall County buyers, sellers, and investors from our Elmhurst office, with attorney review handled electronically and closings at title offices in the Yorkville and Oswego corridor. " +
        "Every transaction includes attorney review, contract negotiation, title and survey review, and closing coordination.",
    ],
    localFacts: [
      "Kendall County deeds are recorded in Yorkville, the county seat.",
      "Kendall sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; the Kendall County portion of Aurora carries Aurora's municipal requirements, which we confirm during review.",
      "Parts of Aurora and Montgomery sit in Kendall County rather than Kane, which changes where the deed records and which tax bills apply.",
      "New-construction contracts from production builders routinely shorten deadlines and limit warranty remedies; attorney review exists to push back on exactly those terms.",
    ],
    faqs: [
      {
        question: "Do you handle new-construction closings in Kendall County?",
        answer:
          "Yes, it is a core part of our Kendall County work. Builder contracts favor the builder on earnest money, deadlines, and warranties. We review and negotiate the contract during attorney review, then handle title and closing.",
      },
      MAIL_FAQ,
      {
        question:
          "My Aurora or Montgomery home is in Kendall County. Does that matter?",
        answer:
          "It changes where the deed is recorded, which county's taxes apply, and which parcel numbers govern your tax bill. We confirm the county as part of title review; it is routine for us because Aurora spans four counties.",
      },
      {
        question: "Where do we meet if I live in Kendall County?",
        answer:
          "Attorney review and document work happen electronically, and closings are held at title offices in the Yorkville and Oswego area. You are also welcome at our Elmhurst main office, about 45 minutes up the ridge from most of the county.",
      },
    ],
  },
  "grundy-county": {
    metaTitle:
      "Grundy County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings and attorney review across Grundy County: Morris, Minooka, Channahon, and Coal City. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Grundy County",
    heroSubtitle:
      "Closings and attorney review across Morris, Minooka, Channahon, and the I-80 corridor towns of Grundy County.",
    introParas: [
      "Grundy County real estate rides the I-80 logistics corridor: warehouse-driven job growth has pushed new subdivisions into Minooka and Channahon while Morris keeps its small-town core. The mix of new construction, rural parcels on well and septic, and estate sales from long-held family land calls for contract work that fits each property, not a one-size template.",
      "We represent Grundy County buyers, sellers, and investors with attorney review handled electronically and closings at title offices in Morris or the Joliet area. " +
        "Every transaction includes attorney review, contract negotiation, title and survey review, and closing coordination.",
    ],
    localFacts: [
      "Grundy County deeds are recorded in Morris, the county seat.",
      "Grundy sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; Grundy municipalities generally do not add a local stamp, which we confirm for your transaction.",
      "Rural Grundy parcels often involve well and septic contingencies and occasionally farm leases or mineral rights that need attention in the contract.",
      "Minooka and Channahon span county lines with Will and Kendall, so we verify the recording county during title review.",
    ],
    faqs: [
      {
        question: "Do you handle rural properties in Grundy County?",
        answer:
          "Yes. Well and septic testing contingencies, survey questions on larger parcels, and title issues from long-held family land are standard parts of Grundy transactions, and we build them into the contract rather than discovering them at closing.",
      },
      MAIL_FAQ,
      {
        question: "Where do closings happen for Grundy County deals?",
        answer:
          "Usually at a title company office in Morris or the Joliet area, whichever is closer to you. Everything before closing is handled electronically, and sellers can often sign ahead by mail-away package.",
      },
      {
        question: "Do you represent investors buying in Grundy County?",
        answer:
          "Yes. The I-80 corridor draws steady investor interest, and we handle acquisitions, LLC formation, land trusts, and dispositions across the county, with flat-fee structures for repeat investors.",
      },
    ],
  },
  "dekalb-county": {
    metaTitle:
      "DeKalb County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and student-rental investor deals across DeKalb County: DeKalb, Sycamore, Genoa, and Cortland. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving DeKalb County",
    heroSubtitle:
      "Closings, attorney review, and investor representation across DeKalb, Sycamore, and the university market around Northern Illinois University.",
    introParas: [
      "DeKalb County has two markets in one: family homes in Sycamore, Genoa, and Cortland, and a durable student-rental investment market around Northern Illinois University in DeKalb. Rental acquisitions carry their own diligence: city rental licensing and inspections, existing leases and security deposits transferring at closing, and entity structuring for owners who hold more than one property.",
      "We represent DeKalb County buyers, sellers, and investors with attorney review handled electronically and closings at title offices in DeKalb or Sycamore. " +
        "Every transaction includes attorney review, contract negotiation, title and survey review, and closing coordination.",
    ],
    localFacts: [
      "DeKalb County deeds are recorded in Sycamore, the county seat.",
      "DeKalb sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; we confirm any municipal requirements for your town during review.",
      "The City of DeKalb operates rental licensing and inspection programs that matter when buying tenant-occupied property near NIU.",
      "Buying an occupied rental means leases, deposits, and prorated rents transfer at closing, and the contract should say exactly how.",
    ],
    faqs: [
      {
        question: "Do you handle student-rental purchases near NIU?",
        answer:
          "Yes. We review the leases, make sure deposits and prorations are handled in the contract, confirm the city's rental licensing and inspection status, and structure ownership through an LLC or land trust when it fits the client's plans.",
      },
      MAIL_FAQ,
      {
        question: "Where do closings happen for DeKalb County deals?",
        answer:
          "At title company offices in DeKalb or Sycamore for most transactions. Attorney review and negotiation happen electronically, and our Elmhurst office is about an hour east when an in-person meeting is worth the drive.",
      },
      {
        question: "Can you form an LLC for my DeKalb rental property?",
        answer:
          "Yes. LLC and series LLC formation with real operating agreements is a core investor service, and we routinely pair entity formation with the purchase itself so title vests correctly from day one.",
      },
    ],
  },
  "kankakee-county": {
    metaTitle:
      "Kankakee County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings and attorney review across Kankakee County: Kankakee, Bourbonnais, Bradley, and Manteno. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Kankakee County",
    heroSubtitle:
      "Closings and attorney review across Kankakee, Bourbonnais, Bradley, Manteno, and the towns along the Kankakee River.",
    introParas: [
      "Kankakee County offers some of the most affordable homeownership within commuting reach of Chicagoland, which keeps both first-time buyers and cash-flow investors active in Kankakee, Bradley, and Bourbonnais. Affordable markets come with their own diligence: older housing stock, municipal inspection programs, and river-adjacent parcels where flood zones change the insurance math.",
      "We represent Kankakee County buyers, sellers, and investors with attorney review handled electronically and closings at title offices in the county. " +
        "Every transaction includes attorney review, contract negotiation, title and survey review, and closing coordination.",
    ],
    localFacts: [
      "Kankakee County deeds are recorded in Kankakee, the county seat.",
      "Kankakee sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; we confirm municipal requirements for your town during review.",
      "Properties near the Kankakee River can sit in mapped flood zones, which affects lender requirements and insurance cost, and belongs in your contingency planning.",
      "Investor purchases of tenant-occupied homes need lease, deposit, and proration terms handled in the contract, not assumed.",
    ],
    faqs: [
      {
        question:
          "Do you work with investors buying rental property in Kankakee County?",
        answer:
          "Yes. The county's price-to-rent numbers draw steady investor interest, and we handle acquisitions, entity formation, and portfolio purchases, including making sure leases and deposits transfer correctly at closing.",
      },
      MAIL_FAQ,
      {
        question:
          "How do flood zones affect a Kankakee River property purchase?",
        answer:
          "If the parcel is in a mapped flood zone, your lender will require flood insurance, which changes your monthly cost, and some structures carry elevation questions. We flag the zone during review so you can price it before your contingencies expire.",
      },
      {
        question: "Where do closings happen for Kankakee County deals?",
        answer:
          "At title company offices in the Kankakee and Bradley area for most transactions. Everything before closing is electronic, and mail-away signing is available for sellers.",
      },
    ],
  },
  "lasalle-county": {
    metaTitle:
      "LaSalle County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings and attorney review across LaSalle County: Ottawa, Peru, LaSalle, Streator, and the Starved Rock area, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving LaSalle County",
    heroSubtitle:
      "Closings and attorney review across Ottawa, Peru, Streator, and the Starved Rock corridor, handled remotely so distance never delays a deal.",
    introParas: [
      "LaSalle County runs from the I-80 towns of Ottawa, Peru, and LaSalle to Streator in the south, with the Starved Rock area adding a steady market for second homes and short-term rental investments. Vacation-property buyers need contract terms that fit the use: furnishings in the sale, existing rental bookings, and local short-term rental rules.",
      REMOTE_NOTE +
        " We represent LaSalle County buyers, sellers, and investors with closings held at title offices in Ottawa, Peru, or the town nearest you.",
    ],
    localFacts: [
      "LaSalle County deeds are recorded in Ottawa, the county seat.",
      "LaSalle sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; local stamps are uncommon here, which we confirm for your transaction.",
      "Second-home and cabin purchases near Starved Rock should address furnishings, existing bookings, and any short-term rental licensing in the contract itself.",
      "Older river-town housing stock in Ottawa, Peru, and Streator makes inspection resolution a bigger part of the deal than in newer suburbs.",
    ],
    faqs: [
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question: "Do you handle Starved Rock area vacation homes and cabins?",
        answer:
          "Yes. We put furnishings, existing rental bookings, and short-term rental licensing questions into the contract during attorney review, so the property you close on matches the plan you bought it for.",
      },
      {
        question:
          "Can you represent me if I am buying in LaSalle County from out of the area?",
        answer:
          "Yes, that is most of our LaSalle County work. Contract, review, and title all happen electronically, you sign by e-sign or mail-away package, and the closing funds through a title office in the county.",
      },
    ],
  },
  "winnebago-county": {
    metaTitle: "Winnebago County Real Estate Attorneys | Rockford Closings",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and investor purchases across Winnebago County and Rockford, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Winnebago County & Rockford",
    heroSubtitle:
      "Closings, attorney review, and investor representation across Rockford, Loves Park, and Machesney Park, handled remotely so distance never delays a deal.",
    introParas: [
      "Rockford is one of the most active cash-flow investment markets in the Midwest: price-to-rent ratios draw out-of-area and out-of-state buyers, and the city runs active rental registration and inspection programs those buyers need to understand before closing. On the owner-occupied side, Loves Park, Machesney Park, and Roscoe stay steady with family purchases and relocations.",
      REMOTE_NOTE +
        " We represent Winnebago County buyers, sellers, and investors with closings held at title offices in the Rockford area.",
    ],
    localFacts: [
      "Winnebago County deeds are recorded in Rockford, the county seat.",
      "Winnebago sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; the City of Rockford has its own requirements for some transactions, which we confirm during review.",
      "Rockford operates rental registration and inspection programs that matter when buying tenant-occupied property.",
      "Out-of-state investors buying Rockford rentals should hold title through a properly formed entity; we handle the LLC or land trust alongside the closing.",
    ],
    faqs: [
      {
        question:
          "I am an out-of-state investor buying in Rockford. Can you handle everything remotely?",
        answer:
          "Yes, that is exactly how our Rockford investor work runs. We review the contract and leases, confirm rental registration status, form your LLC or land trust if needed, and close through a local title office while you sign electronically or by mail from wherever you are.",
      },
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question:
          "Do you review leases when I buy an occupied Rockford rental?",
        answer:
          "Yes. Existing leases, deposits, and prorated rents transfer at closing, and the contract needs to say how. We review every lease as part of the purchase so you know what you are stepping into as the new landlord.",
      },
    ],
  },
  "peoria-county": {
    metaTitle:
      "Peoria County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and investor purchases across Peoria County, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Peoria County",
    heroSubtitle:
      "Closings, attorney review, and investor representation across Peoria, Dunlap, and Chillicothe, handled remotely so distance never delays a deal.",
    introParas: [
      "Peoria's affordability has made it a national name in cash-flow real estate investing, with out-of-area buyers purchasing rentals sight unseen while local families trade up through Dunlap and the north side. Both kinds of buyers need the same things done right: clean title, leases and deposits handled correctly, and a contract that survives inspection negotiations.",
      REMOTE_NOTE +
        " We represent Peoria County buyers, sellers, and investors with closings held at title offices in the Peoria area.",
    ],
    localFacts: [
      "Peoria County deeds are recorded in Peoria, the county seat.",
      "Peoria sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; we confirm any City of Peoria requirements during review.",
      "The City of Peoria operates rental registration requirements relevant to investor purchases of tenant-occupied property.",
      "Remote and mail-away closings are the norm for our Peoria work; no one needs to drive to Elmhurst to be fully represented.",
    ],
    faqs: [
      {
        question:
          "Can you close my Peoria investment purchase if I live out of state?",
        answer:
          "Yes. Contract review, lease review, entity formation, and title work all happen electronically, and the closing funds through a Peoria-area title office while you sign by e-sign or mail-away package.",
      },
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question:
          "Do you handle portfolio purchases of multiple Peoria rentals?",
        answer:
          "Yes. Multi-property purchases need coordinated title work, per-property lease review, and often a series LLC structure. We handle the package as one engagement with per-closing economics that make sense at volume.",
      },
    ],
  },
  "sangamon-county": {
    metaTitle: "Sangamon County Real Estate Attorneys | Springfield Closings",
    metaDescription:
      "REAL Law Group handles real estate closings and attorney review across Sangamon County and Springfield, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Sangamon County & Springfield",
    heroSubtitle:
      "Closings and attorney review across Springfield, Chatham, and Sherman, handled remotely so distance never delays a deal.",
    introParas: [
      "Springfield's market is anchored by state government and healthcare employment, which keeps demand steady in Chatham, Sherman, and Rochester and makes relocation closings a constant: buyers arriving for state jobs and sellers leaving them, often on tight timelines that reward an attorney who moves fast during review.",
      REMOTE_NOTE +
        " We represent Sangamon County buyers, sellers, and investors with closings held at title offices in the Springfield area.",
    ],
    localFacts: [
      "Sangamon County deeds are recorded in Springfield, the county seat and state capital.",
      "Sangamon sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; local stamps are uncommon here, which we confirm for your transaction.",
      "Relocation timelines are common in this market; we run attorney review same-day whenever the file allows so tight closings stay on schedule.",
      "Estate and inherited-property sales are a steady part of the Springfield market, and probate real estate is a core practice area for the firm.",
    ],
    faqs: [
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question: "Can you handle my relocation closing on a tight timeline?",
        answer:
          "Yes. Relocation deals live and die on responsiveness during attorney review and title turnaround. We handle review electronically, usually same-day, and coordinate with your lender and the title company to keep an aggressive closing date real.",
      },
      {
        question:
          "We inherited a Springfield home. Can you help us sell it from out of town?",
        answer:
          "Yes. We clear title, handle any required probate steps, prepare the deed and transfer documents, and close the sale with every family member signing remotely, wherever they live.",
      },
    ],
  },
  "champaign-county": {
    metaTitle:
      "Champaign County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and student-rental investor deals across Champaign County: Champaign, Urbana, Savoy, and Mahomet, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Champaign County",
    heroSubtitle:
      "Closings, attorney review, and investor representation across Champaign, Urbana, and the University of Illinois market, handled remotely so distance never delays a deal.",
    introParas: [
      "Champaign-Urbana runs on the University of Illinois: one of the largest student-housing markets in the Midwest, a growing tech corridor around the research park, and family markets in Savoy and Mahomet. Student-rental acquisitions carry real diligence: city rental registration and inspections, leases that turn over on the academic calendar, and pricing that depends on occupancy you should verify, not assume.",
      REMOTE_NOTE +
        " We represent Champaign County buyers, sellers, and investors with closings held at title offices in Champaign or Urbana.",
    ],
    localFacts: [
      "Champaign County deeds are recorded in Urbana, the county seat.",
      "Champaign sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; both Champaign and Urbana operate rental registration and inspection programs relevant to investor purchases.",
      "Student leases run on the academic calendar, so closings timed against August turnover need lease assignments and prorations handled precisely in the contract.",
      "Multi-unit purchases near campus routinely justify a series LLC or land trust structure, which we form alongside the closing.",
    ],
    faqs: [
      {
        question:
          "Do you handle student-rental purchases near the University of Illinois?",
        answer:
          "Yes. We verify rental registration and inspection status with the city, review every lease and deposit, time the closing against the academic-year turnover, and structure ownership through an entity when it fits your plans.",
      },
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question:
          "Can you represent me on a Champaign purchase if I live in Chicago or out of state?",
        answer:
          "Yes, most of our Champaign County clients are exactly that. Everything before closing is electronic, and the closing itself funds through a local title office while you sign remotely.",
      },
    ],
  },
  "mclean-county": {
    metaTitle:
      "McLean County Real Estate Attorneys | Bloomington-Normal Closings",
    metaDescription:
      "REAL Law Group handles real estate closings and attorney review across McLean County: Bloomington, Normal, and the surrounding towns, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving McLean County",
    heroSubtitle:
      "Closings and attorney review across Bloomington, Normal, and the Twin Cities market, handled remotely so distance never delays a deal.",
    introParas: [
      "Bloomington-Normal combines three demand engines in one small metro: State Farm's headquarters, Illinois State University, and the Rivian plant that turned Normal into a manufacturing relocation market. That mix produces steady relocation closings, a durable student-rental segment around ISU, and new construction on the north and east sides.",
      REMOTE_NOTE +
        " We represent McLean County buyers, sellers, and investors with closings held at title offices in Bloomington or Normal.",
    ],
    localFacts: [
      "McLean County deeds are recorded in Bloomington, the county seat.",
      "McLean sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; we confirm any municipal requirements during review.",
      "Employer relocations from State Farm and Rivian often run on tight timelines; we handle attorney review same-day whenever the file allows.",
      "The ISU rental market around Normal carries town rental inspection considerations for investor purchases.",
    ],
    faqs: [
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question:
          "Do you handle relocation closings for State Farm or Rivian employees?",
        answer:
          "Yes. Relocation packages often come with employer deadlines and third-party relocation companies in the file. We coordinate with all of them, keep attorney review same-day, and protect your position without endangering the timeline.",
      },
      {
        question: "Do you represent investors in the ISU rental market?",
        answer:
          "Yes. Lease review, deposit transfers, town inspection status, and entity structuring are all standard parts of our Normal rental acquisitions.",
      },
    ],
  },
  "madison-county": {
    metaTitle: "Madison County Real Estate Attorneys | Metro East Closings",
    metaDescription:
      "REAL Law Group handles real estate closings and attorney review across Madison County and the Metro East: Edwardsville, Alton, Collinsville, and Glen Carbon, with remote closings statewide. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Madison County & the Metro East",
    heroSubtitle:
      "Closings and attorney review across Edwardsville, Alton, Collinsville, and the Illinois side of the St. Louis metro, handled remotely so distance never delays a deal.",
    introParas: [
      "Madison County anchors the Illinois side of the St. Louis metro: Edwardsville and Glen Carbon carry the growth, driven by SIUE and one of the region's largest logistics corridors, while Alton, Granite City, and Wood River offer some of the strongest cash-flow numbers in the state. Cross-border life is the local wrinkle: buyers moving from Missouri meet Illinois customs, like attorney involvement and Illinois transfer taxes, for the first time.",
      REMOTE_NOTE +
        " We represent Madison County buyers, sellers, and investors with closings held at title offices in Edwardsville or the town nearest you.",
    ],
    localFacts: [
      "Madison County deeds are recorded in Edwardsville, the county seat.",
      "Madison sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; Missouri buyers should note Illinois transfer taxes and customs differ from what they are used to.",
      "The Edwardsville and Glen Carbon logistics corridor keeps both new construction and investor demand active.",
      "River-adjacent parcels near Alton and Grafton can involve flood-zone insurance requirements that belong in your contingency planning.",
    ],
    faqs: [
      {
        question:
          "I am moving from Missouri. How is buying in Illinois different?",
        answer:
          "The biggest differences: Illinois practice builds an attorney review period into the contract, transfer taxes are structured differently, and title and closing customs vary. We walk Missouri buyers through each difference once, then handle them; nothing about the process should surprise you at the table.",
      },
      REMOTE_FAQ,
      MAIL_FAQ,
      {
        question: "Do you represent investors in Alton and Granite City?",
        answer:
          "Yes. The price-to-rent numbers draw steady investor activity, and we handle acquisitions, lease and deposit transfers, entity formation, and portfolio purchases across the Metro East.",
      },
    ],
  },
};
