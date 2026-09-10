/**
 * FAQ block for the Illinois e-bike law guide. Kept in its own file so the
 * guide's content.ts stays readable.
 *
 * Answers are written answer-first, because the first sentence is what gets
 * quoted by an AI summary or a search snippet. Every legal statement traces to
 * Public Act 104-0854 or to the statute it amends. No outcome promises, no
 * superlatives, and no statement that creates an attorney-client relationship.
 */

export const FAQS = [
  {
    question: "When does the new Illinois e-bike law take effect?",
    answer:
      "January 1, 2027. Public Act 104-0854 was approved by the Governor on August 26, 2026, and its own effective-date section sets January 1, 2027. Nothing in it applies before that date, so the rules in force through the end of 2026 are the older ones.",
  },
  {
    question: "Do I need a driver's license to ride an e-bike in Illinois?",
    answer:
      "No, not for an actual e-bike. A low-speed electric bicycle has operable pedals and a motor under 750 watts, and Illinois does not treat it as a motor vehicle, so no driver's license, title, registration, or insurance is required. You do need a valid driver's license for a motor driven cycle, which after January 1, 2027 includes any electric two-wheeler with a motor rated over 750 watts and up to 8,000 watts.",
  },
  {
    question: "How old does my child have to be to ride an e-bike in Illinois?",
    answer:
      "Starting January 1, 2027, 15 for a Class 1 or Class 2 low-speed electric bicycle and 16 for a Class 3. The 15 year floor is new, because Illinois previously set a minimum age only for Class 3. Electric scooters, electric skateboards, and electric unicycles all require the operator to be 16 or older. If the machine has a motor over 750 watts it is a motor driven cycle, and no minor may operate it without at least an instruction permit and supervision.",
  },
  {
    question: "Can two kids ride on one e-bike in Illinois?",
    answer:
      "Generally not after January 1, 2027 if the rider is under 18. An e-bike manufactured to accommodate passengers may not be operated by a person under the age of 18 while carrying a passenger unless that passenger is a sibling, stepsibling, child, or stepchild of the operator. The same restriction applies to gas bicycles and to motor driven cycles. For electric scooters and similar devices the rule is simpler: no passenger at all unless the device was originally designed to carry more than one person.",
  },
  {
    question: "Are e-bikes allowed on sidewalks in Illinois?",
    answer:
      "No. Public Act 104-0854 bars low-speed electric bicycles, gas bicycles, electric micromobility devices, and motor driven cycles from sidewalks. The only category the Act permits on a sidewalk is a toy vehicle, meaning a battery ride-on designed for children under 8 that cannot exceed 10 mph, and the child riding one is treated as a pedestrian.",
  },
  {
    question: "What is an e-moto, and is it still legal in Illinois?",
    answer:
      "E-moto is a marketing term, not a legal category. Most machines sold that way have a motor well over 750 watts and no functional pedals, which makes them motor driven cycles under 625 ILCS 5/1-145.001. They remain legal to own and to ride on ordinary streets, but only with a certificate of title, registration, a VIN, a speedometer, a driver's license, and liability insurance. They are barred from every sidewalk, bicycle lane, bicycle path, shared-use path, and trail designated for bicycle use. A machine that was never manufactured or equipped for general highway use cannot be registered at all, which means there is no lawful way to ride it on a public road.",
  },
  {
    question:
      "I already own an e-moto. Do I have to title and register it in 2027?",
    answer:
      "Only if you want to ride it on a public road. The titling requirement in 625 ILCS 5/3-101(b-5) reaches machines purchased new on or after January 1, 2027. The Act then says that a machine bought before that date need not mandatorily be titled, but that if the owner seeks to operate it on public highways it must be titled and registered. Keep documentation of your purchase date.",
  },
  {
    question: "Can police take my e-bike or scooter?",
    answer:
      "Yes, in some circumstances. Public Act 104-0854 gives law enforcement discretion to confiscate and impound both an electric micromobility device and a motor driven cycle found in violation of the operating rules, and to charge a reasonable administrative fee to release it. The Act requires that fee to be waived on verifiable proof that the machine was stolen or hijacked at the time it was impounded. If a device has been impounded, the paperwork and the deadlines in the notice matter, and it is worth getting advice quickly.",
  },
  {
    question:
      "Can my village or city still write its own e-bike rules after January 1, 2027?",
    answer:
      "Mostly no, and this is one of the least reported parts of the Act. Public Act 104-0854 preempts home rule authority over low-speed electric bicycles, gas bicycles, electric micromobility devices, and motor driven cycles, and it strikes the language in 625 ILCS 5/11-208 that let local authorities require registration and licensing of e-bikes and gas bicycles. Narrow exceptions survive. Park districts, forest preserve districts, conservation districts, and transit districts may still regulate use on bicycle paths under their jurisdiction, the Department of Natural Resources may adopt rules for its own properties, and the Department of Transportation may restrict micromobility devices on facilities it controls.",
  },
  {
    question: "Does the new law require a helmet?",
    answer:
      "No. The word helmet does not appear in Public Act 104-0854, and the Act adds no helmet requirement for any category of device. Local rules that applied to bicycles before the Act may still exist in places, and helmet use remains a sensible precaution regardless of what the statute requires.",
  },
  {
    question:
      "The shop told me the bike I bought was street legal and it is not. Do I have any recourse?",
    answer:
      "Possibly, and the new law creates a specific hook. Section 11-1403.4(i) prohibits a retailer, wholesaler, distributor, or manufacturer from marketing, advertising, labeling, or offering a motor driven cycle for sale in a manner that would reasonably cause a consumer to believe the machine is not subject to the licensing, titling, registration, and insurance rules. A violation is an unlawful practice under the Consumer Fraud and Deceptive Business Practices Act, it is enforceable by the Attorney General and by State's Attorneys, and it carries a civil penalty of up to $10,000 per violation with each mislabeled machine counting separately. Whether an individual buyer has a claim depends on what was said, what was written, and what the sale cost you, which is what a consultation looks at.",
  },
  {
    question:
      "Was this the e-bike bill that passed the Illinois Senate unanimously?",
    answer:
      "No, and this trips up a lot of the coverage still circulating. The bill that passed the Senate 54-0 in April 2026 was SB 3336. It went on to pass the House 80-30 in May with two floor amendments, then the Senate never voted to concur in those amendments, and on July 2, 2026 the bill was referred back to Assignments under Senate Rule 3-9(b). It did not become law. The provisions that did become law were added to SB 3484 by House Floor Amendment 1, and SB 3484 was signed on August 26, 2026 as Public Act 104-0854.",
  },
];
