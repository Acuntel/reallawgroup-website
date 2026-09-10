/**
 * Illinois e-bike law explainer, built from the enacted text of Public Act
 * 104-0854 (SB 3484), approved August 26, 2026, effective January 1, 2027.
 *
 * Why this file is written the way it is: the bill that got the news coverage
 * in April 2026 was SB 3336, and SB 3336 never became law. It passed the
 * Senate 54-0 and the House 80-30, then died when the Senate never voted on
 * concurrence and it was parked under Senate Rule 3-9(b) on July 2, 2026. The
 * substance moved onto SB 3484 by House Floor Amendment 1. Every rule stated
 * below is traceable to the enacted text of PA 104-0854, not to press
 * coverage of the dead bill. Do not add a provision here from a news article
 * without checking it against the Public Act.
 */

export const LAW = {
  publicAct: "Public Act 104-0854",
  bill: "SB 3484",
  approved: "August 26, 2026",
  effective: "January 1, 2027",
  statusUrl:
    "https://www.ilga.gov/Legislation/BillStatus?DocNum=3484&GAID=18&DocTypeID=SB&SessionID=114&GA=104",
  textUrl:
    "https://www.ilga.gov/documents/legislation/publicacts/104/PDF/104-0854.pdf",
  vehicleCodeUrl:
    "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=1815&ChapterID=49",
};

/** The four buckets every device falls into under the new definitions. */
export const CATEGORIES = [
  {
    name: "Low-speed electric bicycle",
    citation: "625 ILCS 5/1-140.10",
    test: "Operable pedals and an electric motor under 750 watts.",
    detail:
      "This is what most people mean when they say e-bike. Class 1 assists only while you pedal and stops assisting at 20 mph. Class 2 has a throttle that can propel the bike on its own and stops at 20 mph. Class 3 assists only while you pedal and stops at 28 mph. A low-speed electric bicycle is not a motor vehicle in Illinois, so it needs no title, no plate, no registration, no driver's license, and no insurance.",
    verdict: "No license, no plate, no insurance.",
  },
  {
    name: "Electric micromobility device",
    citation: "625 ILCS 5/1-117.6",
    test: "A light electric device for personal transportation operating at speeds up to 28 mph, including electric scooters, electric skateboards, and electric unicycles.",
    detail:
      "This category is new on January 1, 2027, and it replaces the old low-speed electric scooter section that the Act repeals. The law calls these devices motor vehicles for purposes of the Vehicle Code, which is how the rules of the road attach to them, and then exempts them from titling, registration, driver licensing, and mandatory liability insurance. The practical effect is a device treated like a vehicle on the street that you cannot register or insure like one.",
    verdict: "No license or insurance required, but a 16 and older age floor.",
  },
  {
    name: "Motor driven cycle",
    citation: "625 ILCS 5/1-145.001",
    test: "An electric motor rated over 750 watts and up to 8,000 watts, or a gas bicycle capable of more than 28 mph, or any electric bicycle that does not fit one of the three low-speed classes.",
    detail:
      "This is the category that catches the machines commonly sold as e-motos or dirt-bike-style electric bikes. Reclassification is the heart of the new law. A motor driven cycle needs a certificate of title, registration, a VIN, a speedometer, a driver's license, and liability insurance, and it is barred from every sidewalk, bicycle lane, bicycle path, shared-use path, and trail designated for bicycles.",
    verdict: "Full driver's license, title, registration, and insurance.",
  },
  {
    name: "Toy vehicle",
    citation: "625 ILCS 5/1-205.5",
    test: "A battery powered ride-on toy designed not to exceed 10 mph and designed for children under 8 years of age.",
    detail:
      "The Act names Razor and Power Wheels style products as the examples. Toy vehicles may be used only on sidewalks and bicycle paths, and the child operating one has the rights and duties of a pedestrian, which means drivers must yield to them. Municipalities and park districts may prohibit them on their own property by ordinance.",
    verdict: "Sidewalks and bicycle paths only.",
  },
];

/** Minimum ages, the change most families will feel first. */
export const AGE_RULES = [
  {
    device: "Class 1 low-speed electric bicycle",
    age: "15 and older",
    change: "New. Illinois had no minimum age for Class 1 before this Act.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Class 2 low-speed electric bicycle",
    age: "15 and older",
    change: "New. Illinois had no minimum age for Class 2 before this Act.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Class 3 low-speed electric bicycle",
    age: "16 and older",
    change:
      "Unchanged. A rider under 16 may still ride as a passenger on a Class 3 built to carry one.",
    citation: "625 ILCS 5/11-1517(h)",
  },
  {
    device: "Electric scooter, skateboard, or unicycle",
    age: "16 and older",
    change: "New for the whole micromobility category.",
    citation: "625 ILCS 5/11-1435(d)",
  },
  {
    device: "Low-speed gas bicycle",
    age: "16 and older",
    change:
      "Unchanged, but the speed cap for these rises from 20 mph to 28 mph.",
    citation: "625 ILCS 5/11-1516(a), (b)",
  },
  {
    device: "Motor driven cycle, including any e-moto over 750 watts",
    age: "Valid driver's license required",
    change:
      "A 16 or 17 year old may hold an instruction permit and ride in daylight under the direct supervision of a licensed operator 21 or older with a year of experience.",
    citation: "625 ILCS 5/11-1403.4(d)",
  },
];

/** Where each category may and may not be ridden. */
export const WHERE_RULES = [
  {
    device: "Low-speed electric bicycle",
    allowed:
      "Any highway, street, or roadway open to bicycles, including bicycle lanes. Bicycle paths are open unless the State agency with jurisdiction prohibits that class.",
    banned:
      "Sidewalks. Park districts, forest preserve districts, conservation districts, and transit districts may still restrict paths they control, and the Department of Natural Resources may adopt rules for its own properties.",
    citation: "625 ILCS 5/11-1517(e), (f), (g)",
  },
  {
    device: "Electric micromobility device",
    allowed:
      "Highways, streets, roadways, bicycle lanes, and bicycle paths, without impeding traffic.",
    banned:
      "Sidewalks, interstates, and any road posted above 35 mph unless it has a designated bicycle lane. A device capable of and traveling over 28 mph is barred from every public highway at any speed limit, and from bicycle lanes and bicycle paths as well.",
    citation: "625 ILCS 5/11-1435(a), (b)",
  },
  {
    device: "Motor driven cycle",
    allowed: "Public highways, streets, and roadways.",
    banned:
      "Sidewalks, bicycle lanes, bicycle paths, shared-use paths, off-road bicycle trails, natural surface trails designated for bicycle use, any other bicycle-specific facility, interstates, and public land where the agency in charge prohibits it.",
    citation: "625 ILCS 5/11-1403.4(b), (c)",
  },
  {
    device: "Toy vehicle",
    allowed: "Sidewalks and bicycle paths only.",
    banned:
      "Everywhere else, and on municipal or district property that prohibits them by ordinance.",
    citation: "625 ILCS 5/11-1008.5(a), (b)",
  },
];

/** Obligations that attach to the reclassified high-powered machines. */
export const MOTOR_DRIVEN_DUTIES = [
  {
    duty: "Certificate of title",
    detail:
      "Required for an electric motor driven cycle rated over 750 watts and up to 8,000 watts, or a gas bicycle capable of more than 28 mph, purchased new on or after January 1, 2027, as long as the machine has a VIN. A machine bought before that date does not have to be titled, but it must be titled and registered before it may be operated on a public highway.",
    citation: "625 ILCS 5/3-101(b-5)",
  },
  {
    duty: "Registration and plates",
    detail:
      "A machine not manufactured or equipped for general highway use is not eligible for registration at all. It receives a distinctive title and cannot legally be ridden on the road.",
    citation: "625 ILCS 5/3-101(b-5)",
  },
  {
    duty: "Driver's license",
    detail:
      "No person may operate a motor driven cycle without a valid driver's license.",
    citation: "625 ILCS 5/11-1403.4(d)",
  },
  {
    duty: "Liability insurance",
    detail:
      "Every owner of a motor driven cycle is subject to the mandatory insurance requirements of the Vehicle Code.",
    citation: "625 ILCS 5/11-1403.4(l)",
  },
  {
    duty: "Equipment",
    detail:
      "A speedometer reading in miles per hour, a VIN, compliance with federal vehicle safety standards, and no tampering with the speed capability.",
    citation: "625 ILCS 5/11-1403.4(g)",
  },
  {
    duty: "Confiscation and impoundment",
    detail:
      "A machine found in violation may be confiscated and impounded at the discretion of the law enforcement agency, which may charge a reasonable administrative fee to release it. The fee is waived on verifiable proof the vehicle was stolen or hijacked at the time.",
    citation: "625 ILCS 5/11-1403.4(j)",
  },
];

/** What the Act does not do. Corrects the most common misreadings. */
export const NOT_IN_THE_LAW = [
  {
    myth: "E-bike riders will need a driver's license and insurance.",
    reality:
      "Not for a real e-bike. A low-speed electric bicycle is not a motor vehicle in Illinois, and the Act expressly exempts electric micromobility devices from titling, registration, licensing, and mandatory insurance. Those requirements attach only when a machine is powerful enough to be a motor driven cycle, which generally means a motor rated over 750 watts.",
  },
  {
    myth: "Illinois is requiring helmets.",
    reality:
      "The word helmet does not appear anywhere in Public Act 104-0854. The Act imposes no helmet requirement on any category of device.",
  },
  {
    myth: "Everyone has to be 16.",
    reality:
      "The floors differ by device. Class 1 and Class 2 e-bikes are 15 and older. Class 3 e-bikes, gas bicycles, and every electric micromobility device are 16 and older. Motor driven cycles require a license rather than a birthday.",
  },
  {
    myth: "This is the Giannoulias bill that passed the Senate unanimously.",
    reality:
      "That bill was SB 3336, and it is not law. It cleared the Senate 54-0 in April 2026 and the House 80-30 in May, then the Senate never voted to concur in the House amendments and the bill was parked in July. The provisions that became law rode on SB 3484 instead, which the Governor signed on August 26, 2026 as Public Act 104-0854.",
  },
];

/** Concrete steps before the effective date. */
export const BEFORE_JANUARY = [
  {
    who: "Parents",
    action:
      "Find the label on the bike and read the wattage. Under 750 watts with a class number on it is an e-bike, and your rider needs to be 15 for Class 1 or Class 2 and 16 for Class 3. Over 750 watts is a motor driven cycle, which means your child cannot legally ride it at all without a driver's license, a title, plates, and insurance.",
  },
  {
    who: "Riders",
    action:
      "Check whether your machine is capable of more than 28 mph. If it is, and it is a micromobility device, it is barred from public roads, bicycle lanes, and bicycle paths entirely once the Act takes effect, which leaves private property with permission.",
  },
  {
    who: "Anyone who bought before January 1, 2027",
    action:
      "You are not forced to title a machine you already own, but you cannot ride it on a public highway until it is titled and registered. Keep your proof of purchase date.",
  },
  {
    who: "Retailers and shops",
    action:
      "Review how every machine on the floor is labeled and advertised. Marketing a motor driven cycle as though it is exempt from these rules is an unlawful practice under the Consumer Fraud and Deceptive Business Practices Act, carrying a civil penalty up to $10,000 for each unit.",
  },
  {
    who: "Municipalities",
    action:
      "Local e-bike ordinances are preempted. The Act removes the authority of local governments to license or register low-speed electric bicycles and gas bicycles, and bars home rule units from regulating e-bikes, gas bicycles, micromobility devices, and motor driven cycles except where the Act specifically allows it.",
  },
];
