import { COUNTY_CONTENT_EXPANSION } from "./content-expansion";

export type CountyContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introParas: string[];
  localFacts: string[];
  faqs: { question: string; answer: string }[];
};

const SERVICES_NOTE =
  "Every transaction includes attorney review, contract negotiation, title and survey review, and closing coordination.";

export const COUNTY_CONTENT: Record<string, CountyContent> = {
  "cook-county": {
    metaTitle: "Cook County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and investor deals across Cook County, with meeting locations in Chicago (Logan Square) and Park Ridge. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Cook County",
    heroSubtitle:
      "Closings, attorney review, building violations, and investor representation across Chicago and the Cook County suburbs, with meeting locations in Logan Square and Park Ridge.",
    introParas: [
      "Cook County is the busiest real estate market in Illinois, and it comes with rules the collar counties do not have. The City of Chicago and many suburbs charge their own transfer stamps on top of the standard state and county transfer tax, several municipalities require village transfer stamps, zoning certificates, or final water readings before closing, and Chicago enforces its building code aggressively. We work these requirements every week, so nothing about your closing checklist is a surprise.",
      "Since 2016 we have represented buyers, sellers, landlords, and investors throughout Chicago and the suburbs. Cook County clients can meet us by appointment at our Logan Square satellite office on North Avenue or our Park Ridge satellite office on Prospect Avenue, and we routinely close at title company offices throughout the county. " +
        SERVICES_NOTE,
    ],
    localFacts: [
      "Deeds and other title documents are recorded with the Cook County Clerk's office in downtown Chicago, which took over the recorder of deeds function.",
      "Illinois charges a state transfer tax of $0.50 per $500 of price plus a county transfer tax of $0.25 per $500; the City of Chicago and many Cook County suburbs add their own transfer stamps on top.",
      "Chicago and several suburbs require the seller to obtain a zoning certificate, transfer stamps, or a final water certification before closing.",
      "Under the standard Multi-Board Residential Contract used across Chicagoland, your attorney can propose modifications during the attorney review period, which is typically five business days after acceptance.",
    ],
    faqs: [
      {
        question: "Do I need a real estate attorney to close in Cook County?",
        answer:
          "Illinois does not require one by law, but in Cook County it is the near-universal practice for both buyers and sellers to be represented, and the standard contract is written around an attorney review period. Chicago closings also involve city transfer stamps, zoning certificates, and water certifications that your attorney handles so the closing is not delayed.",
      },
      {
        question: "Where can I meet you in Cook County?",
        answer:
          "By appointment at our Logan Square satellite office at 3250 W North Ave in Chicago, or our Park Ridge satellite office at 222 S Prospect Ave. We also attend closings at title company offices throughout the county. Call (630) 299-7600 to schedule.",
      },
      {
        question: "Who pays transfer taxes on a Cook County sale?",
        answer:
          "State and county transfer taxes are customarily paid by the seller. Municipal transfer stamps vary by town: Chicago splits its stamp between buyer and seller, while some suburbs put it on the seller and others on the buyer. We confirm the exact allocation for your municipality as part of the contract review.",
      },
      {
        question: "Can you help with a Chicago building code violation?",
        answer:
          "Yes. Chicago building code violation defense is one of our core practice areas. We represent owners in administrative hearings and Circuit Court cases, and we resolve open violations that would otherwise block a sale or refinance.",
      },
    ],
  },
  "dupage-county": {
    metaTitle:
      "DuPage County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group's main office is in Elmhurst, in the heart of DuPage County. Real estate closings, attorney review, estate planning, and investor services. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving DuPage County",
    heroSubtitle:
      "Our main office is in Elmhurst, so DuPage County is home turf: closings, attorney review, estate planning, and investor representation across the county.",
    introParas: [
      "REAL Law Group is headquartered at 381 N York St in Elmhurst, which means DuPage County closings are the core of our practice. We know the local title companies, the county recording process in Wheaton, and the handful of DuPage municipalities that charge their own transfer stamps or require village inspections before a sale.",
      "From Elmhurst we represent buyers, sellers, and investors in Wheaton, Naperville, Downers Grove, and every town in between. Most clients meet us at the main office, where the full firm works every day, and closings are typically held at title offices around the county. " +
        SERVICES_NOTE,
    ],
    localFacts: [
      "Deeds for DuPage County properties are recorded with the DuPage County Recorder in Wheaton, the county seat.",
      "DuPage sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; a small number of DuPage municipalities add local stamps or pre-closing requirements, which we confirm for your town.",
      "Our Elmhurst main office is open Monday through Friday 8 AM to 7 PM and Saturday 8 AM to 3 PM, with free parking at the building.",
      "The Multi-Board Residential Contract's attorney review period, typically five business days, applies to DuPage transactions just as it does across Chicagoland.",
    ],
    faqs: [
      {
        question: "Where is your DuPage County office?",
        answer:
          "Our main office is at 381 N York St Suite 1, Elmhurst, IL 60126, just north of downtown Elmhurst and minutes from I-290 and I-294. This is the firm's headquarters, open six days a week.",
      },
      {
        question: "How much does a real estate closing cost in DuPage County?",
        answer:
          "We quote flat fees for residential closings, so you know the cost up front rather than getting an hourly surprise. Use the closing cost calculator on our resources page for a full estimate of taxes, title charges, and fees, or call us for a quote on your specific transaction.",
      },
      {
        question: "Do you handle estate planning for DuPage families?",
        answer:
          "Yes. Wills, living trusts, powers of attorney, land trusts, and trust administration are a core part of the Elmhurst practice, and many DuPage clients pair an estate plan with a home purchase or sale.",
      },
      {
        question: "Can you close my sale if I have already moved out of state?",
        answer:
          "Yes. Sellers rarely need to attend closing in person. With a properly prepared power of attorney or pre-signed documents, we can close your DuPage County sale while you handle everything remotely.",
      },
    ],
  },
  "will-county": {
    metaTitle: "Will County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and investor deals across Will County, including Joliet, Plainfield, Bolingbrook, and Naperville. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Will County",
    heroSubtitle:
      "Closings, attorney review, and investor representation across Joliet, Plainfield, Bolingbrook, and the fast-growing Will County suburbs.",
    introParas: [
      "Will County is one of the fastest-growing parts of Chicagoland, with heavy new-construction activity in Plainfield, Shorewood, and New Lenox alongside established markets in Joliet and Bolingbrook. New-construction contracts are builder-drafted and builder-friendly, which makes attorney review matter even more than in a resale, and we negotiate them regularly.",
      "We represent Will County buyers, sellers, and investors from our Elmhurst office, meet clients by appointment, and attend closings at title offices throughout the county. " +
        SERVICES_NOTE,
    ],
    localFacts: [
      "Will County deeds are recorded at the county recorder's office in Joliet, the county seat.",
      "Will County sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; most Will County towns do not charge a separate municipal stamp, and we confirm the rules for your town during contract review.",
      "Parts of Naperville, Bolingbrook, and Aurora sit in Will County rather than DuPage, which changes where the deed records and which taxes apply.",
      "Builder contracts for Will County new construction routinely waive protections the Multi-Board contract provides, which is exactly what attorney review exists to fix.",
    ],
    faqs: [
      {
        question: "Do you handle new-construction closings in Will County?",
        answer:
          "Yes, frequently. Builder contracts are drafted by the builder's counsel and favor the builder on deadlines, earnest money, and warranty terms. We review and negotiate these contracts, then handle the closing itself.",
      },
      {
        question:
          "My Naperville home is in Will County. Does that change anything?",
        answer:
          "It changes where the deed is recorded and which county's taxes and tax bills apply, but not the quality of your closing. We handle transactions on both sides of the county line and sort this out as a routine part of title review.",
      },
      {
        question: "Where do we meet if I live in Will County?",
        answer:
          "Most Will County clients handle attorney review and document signing electronically and meet us at the closing itself, which is typically at a title office near you. You can also visit our Elmhurst main office, about 30 minutes up I-355 from most of the county.",
      },
      {
        question: "Do you represent Will County real estate investors?",
        answer:
          "Yes. Acquisitions, dispositions, LLC formation, land trusts, and wholesale assignments across Will County, with flat-fee arrangements for investors who close frequently.",
      },
    ],
  },
  "kane-county": {
    metaTitle: "Kane County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and investor deals across Kane County, including Aurora, Elgin, St. Charles, and the Tri-Cities. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Kane County",
    heroSubtitle:
      "Closings, attorney review, and investor representation across Aurora, Elgin, the Tri-Cities, and the Kane County suburbs.",
    introParas: [
      "Kane County stretches from the dense markets of Aurora and Elgin through the Tri-Cities of St. Charles, Geneva, and Batavia into farmland that is steadily becoming subdivisions. That mix means everything from FHA closings in Aurora to new construction in Sugar Grove, and we handle all of it.",
      "We represent Kane County buyers, sellers, and investors from our Elmhurst office, handle attorney review and negotiation electronically, and attend closings at title offices throughout the Fox Valley. " +
        SERVICES_NOTE,
    ],
    localFacts: [
      "Kane County deeds are recorded with the Kane County Recorder in Geneva, the county seat.",
      "Kane County sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; a few municipalities, including Aurora and Elgin, have their own transfer stamp or inspection requirements that we confirm for your transaction.",
      "Aurora and Elgin span multiple counties, so we verify which county your parcel actually sits in as part of title review.",
      "The standard Chicagoland attorney review period, typically five business days, applies to Kane County contracts.",
    ],
    faqs: [
      {
        question: "Do Aurora or Elgin require transfer stamps?",
        answer:
          "Both cities have municipal requirements that most Kane County towns do not, and the details change over time. We confirm the current stamp and inspection requirements for your specific municipality during attorney review so your closing is not delayed at the table.",
      },
      {
        question: "Where do we meet if I live in Kane County?",
        answer:
          "Attorney review and negotiation happen electronically in almost every Kane County deal, and the closing is typically held at a title office in the Fox Valley. You are also always welcome at our Elmhurst main office on the east side of the county line.",
      },
      {
        question: "Do you handle FHA and HUD closings in Kane County?",
        answer:
          "Yes. HUD and government-insured closings are a dedicated practice area for the firm, including the extra documentation and timing rules those transactions carry.",
      },
      {
        question: "Can you help me buy investment property in Kane County?",
        answer:
          "Yes. We handle investor acquisitions, LLC and series LLC formation, land trusts, and 1031 exchanges across Kane County, with flat-fee structures for repeat investors.",
      },
    ],
  },
  "lake-county": {
    metaTitle:
      "Lake County IL Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and estate planning across Lake County, Illinois, from Highland Park to Gurnee, with a by-appointment office in nearby Park Ridge. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving Lake County",
    heroSubtitle:
      "Closings, attorney review, and estate planning from Highland Park and Lake Forest to Libertyville, Gurnee, and the Chain O'Lakes, with a meeting location in nearby Park Ridge.",
    introParas: [
      "Lake County runs from North Shore markets like Highland Park and Lake Forest, where seven-figure sales and estate-related transactions are common, to family markets in Gurnee, Grayslake, and Round Lake. We handle both ends: high-value closings that need careful title and survey work, and standard residential deals that just need to close smoothly and on time.",
      "Lake County clients can meet us by appointment at our Park Ridge satellite office at 222 S Prospect Ave, a short drive down the Tri-State or Milwaukee Avenue from most of the county, and closings are typically held at title offices near you. " +
        SERVICES_NOTE,
    ],
    localFacts: [
      "Lake County deeds are recorded with the Lake County Recorder in Waukegan, the county seat.",
      "Lake County sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; several municipalities, including Highland Park and North Chicago, add their own transfer stamps, which we confirm for your town.",
      "Our Park Ridge satellite office is the closest meeting location for most Lake County clients and is available by appointment.",
      "Estate planning and inherited-property work pairs naturally with North Shore real estate, and we handle wills, trusts, and probate real estate as core practice areas.",
    ],
    faqs: [
      {
        question: "Where can I meet you if I live in Lake County?",
        answer:
          "By appointment at our Park Ridge satellite office at 222 S Prospect Ave, just south of the county line and easy to reach from the Tri-State, Milwaukee Avenue, or Metra. Attorney review and most document work happen electronically, and closings are held at title offices throughout Lake County.",
      },
      {
        question: "Do you handle high-value North Shore closings?",
        answer:
          "Yes. Higher-priced transactions in Highland Park, Lake Forest, and Deerfield tend to involve trusts, surveys with older improvements, and negotiated inspection resolutions. We give these closings the title and contract attention they need.",
      },
      {
        question: "We inherited a Lake County home. Can you help us sell it?",
        answer:
          "Yes. Inherited property and probate real estate is a dedicated practice area: we clear title, handle any required probate filings, and close the sale, coordinating with family members who often live out of state.",
      },
      {
        question: "Does my Lake County town charge transfer stamps?",
        answer:
          "A number of Lake County municipalities do, while most do not. We confirm the current requirement for your town during attorney review, along with any inspection or final water bill rules, so nothing surfaces on closing day.",
      },
    ],
  },
  "mchenry-county": {
    metaTitle:
      "McHenry County Real Estate Attorneys | Closings & Attorney Review",
    metaDescription:
      "REAL Law Group handles real estate closings, attorney review, and investor deals across McHenry County, including Crystal Lake, Algonquin, Huntley, and Woodstock. Free consultation: (630) 299-7600.",
    heroTitle: "Real Estate Attorneys Serving McHenry County",
    heroSubtitle:
      "Closings, attorney review, and investor representation across Crystal Lake, Algonquin, Huntley, Woodstock, and the McHenry County towns along the Fox River.",
    introParas: [
      "McHenry County combines commuter markets like Crystal Lake, Algonquin, and Huntley with small towns and unincorporated property where wells, septic systems, and larger parcels are part of the deal. Those transactions carry their own contract contingencies and title questions, and we build them into attorney review rather than discovering them at closing.",
      "We represent McHenry County buyers, sellers, and investors with attorney review and negotiation handled electronically, closings at title offices in the county, and in-person meetings available by appointment at our Park Ridge satellite office. " +
        SERVICES_NOTE,
    ],
    localFacts: [
      "McHenry County deeds are recorded with the McHenry County Recorder in Woodstock, the county seat.",
      "McHenry County sales pay the standard Illinois state transfer tax of $0.50 per $500 plus the county transfer tax of $0.25 per $500; most McHenry County towns do not add a municipal stamp, which we confirm for your transaction.",
      "Unincorporated McHenry County properties often involve well and septic testing contingencies that need to be in the contract, not an afterthought.",
      "Sun City Huntley and other 55+ communities involve association documents and transfer requirements we review as part of every sale there.",
    ],
    faqs: [
      {
        question: "Do you handle homes on well and septic in McHenry County?",
        answer:
          "Yes. Well and septic testing contingencies, water potability requirements, and county health department rules are standard parts of unincorporated McHenry transactions, and we make sure the contract protects you on each of them.",
      },
      {
        question: "Where do we meet if I live in McHenry County?",
        answer:
          "Almost everything before closing happens electronically, and the closing itself is typically at a title office in Crystal Lake, Algonquin, or a town near you. For in-person meetings, our Park Ridge satellite office is available by appointment.",
      },
      {
        question: "Do you handle Sun City Huntley sales?",
        answer:
          "Yes. Age-restricted communities layer association approvals, transfer fees, and disclosure documents onto the standard closing, and we handle those requirements routinely.",
      },
      {
        question: "Can you represent me on a Fox River property?",
        answer:
          "Yes. River-adjacent parcels raise floodplain, flood insurance, and survey questions that deserve real attention during attorney review, and we address them before you are locked in, not after.",
      },
    ],
  },
  ...COUNTY_CONTENT_EXPANSION,
};
