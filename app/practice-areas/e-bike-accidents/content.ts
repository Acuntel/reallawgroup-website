/**
 * E-bike, e-scooter, and e-moto injury and citation page.
 *
 * Compliance notes, do not remove:
 * 1. REAL Law Group's personal injury model is REFERRAL based. The existing
 *    /practice-areas/personal-injury page says the firm "connects you with
 *    experienced personal injury attorneys" through its network. Injury copy
 *    here must match that. Do not write this page as though the firm tries
 *    these cases itself unless that actually changes.
 * 2. Illinois RPC 7.1 and 7.4: no "specialist" or "expert" claims, no
 *    superlatives, no past results, no dollar figures, no predictions of
 *    outcome. Contingency statements need the costs qualifier.
 * 3. Every statutory citation below was verified against ilga.gov in
 *    September 2026. The new device rules come from Public Act 104-0854,
 *    effective January 1, 2027. See /resources/illinois-e-bike-law.
 */

/** Fact patterns, the theory that fits, and the trap in each one. */
export const SCENARIOS = [
  {
    scenario: "A car turns left across a rider in a bicycle lane",
    theory:
      "Ordinary negligence against the driver, with the driver's failure to yield as evidence of it.",
    coverage:
      "The driver's auto liability policy, then your own uninsured or underinsured motorist coverage if the driver has none or too little.",
    pitfall:
      "Adjusters lean hard on the idea that the rider was going faster than a bicycle. On a Class 3 e-bike or a scooter the closing speed genuinely is higher, so speed becomes the fight. Photographs of the sight lines and the bike's own speedometer reading matter more here than in a car case.",
  },
  {
    scenario: "An e-moto rider strikes a pedestrian on a sidewalk",
    theory:
      "Negligence against the rider, and where the rider is a minor, a separate claim that a parent authorized or knowingly permitted the conduct.",
    coverage:
      "Homeowners or renters liability if the policy does not exclude the machine, and from January 1, 2027 the mandatory liability insurance that a motor driven cycle must carry.",
    pitfall:
      "This is the coverage hole. Today many of these machines are uninsured and the rider is a teenager with no assets. The single most useful early step is finding out what policies exist before anyone gives a statement.",
  },
  {
    scenario: "A parked car door opens into a rider",
    theory:
      "Negligence, with the Vehicle Code duty not to open a door into moving traffic as evidence of it.",
    coverage: "The auto liability policy on the parked car.",
    pitfall:
      "Riders often leave without a police report because the car was not moving. Without a report and the occupant's identity, the claim frequently becomes unprovable.",
  },
  {
    scenario: "A pothole, a utility cut, or an unmarked construction zone",
    theory:
      "Premises or roadway claims against the entity responsible, which is often a municipality, township, park district, or a contractor.",
    coverage:
      "The public entity's coverage or self-insurance, or the contractor's general liability policy.",
    pitfall:
      "The deadline is the problem. A civil action against an Illinois local public entity or its employees generally has to be filed within one year, not two. Waiting on the two-year assumption can end the claim before anyone looks at the merits.",
  },
  {
    scenario: "A battery fire, a brake failure, or a frame that came apart",
    theory:
      "Product liability against the manufacturer, distributor, and seller, on design, manufacturing, or warning theories.",
    coverage: "Product liability coverage in the chain of distribution.",
    pitfall:
      "Do not throw the machine away, and do not let anyone repair it. The device is the evidence. Illinois also has a statute of repose for product claims, so an older machine can be time barred even inside the injury deadline.",
  },
  {
    scenario: "A rented or shared scooter",
    theory:
      "Negligence against the operator company, plus product theories against the manufacturer.",
    coverage: "The rental company's policy, subject to its own terms.",
    pitfall:
      "The app's terms usually contain a liability waiver and an arbitration clause with a class action waiver. Whether those are enforceable in the specific circumstances is a real question, and it is the first thing to look at rather than a reason to give up.",
  },
  {
    scenario: "A delivery rider hurt on the job",
    theory:
      "Workers' compensation if the rider is an employee, a third-party negligence claim against whoever caused the crash either way.",
    coverage:
      "Workers' compensation insurance, plus the at-fault party's liability policy.",
    pitfall:
      "Delivery platforms classify riders as independent contractors, which is a contested characterization rather than a settled answer. Both tracks can matter, and the workers' compensation route has its own notice and filing deadlines.",
  },
  {
    scenario: "A minor was riding, and the new age rules were not met",
    theory:
      "Claims by and against the minor, plus the Vehicle Code provision that a parent or guardian shall not authorize or knowingly permit a child to violate the Code.",
    coverage:
      "Household liability coverage, subject to the policy's exclusions.",
    pitfall:
      "This cuts both ways after January 1, 2027. An underage rider's violation becomes evidence a defense lawyer will use to shift fault onto the child, and it may expose the parent on the other side of the case.",
  },
];

/** The coverage question, which is the part almost nobody explains correctly. */
export const INSURANCE_POINTS = [
  {
    heading: "An e-bike is not a motor vehicle in Illinois",
    body: "A low-speed electric bicycle sits outside the Vehicle Code's definition of a motor vehicle, so there is no plate, no registration, and no mandatory auto policy attached to it. When an e-bike rider causes injury, there is frequently no vehicle policy anywhere in the picture.",
  },
  {
    heading:
      "Homeowners and renters coverage is the usual fallback, and it has exclusions",
    body: "Household liability policies often respond to a resident's negligence away from home, which can reach an e-bike collision. Many of those same policies exclude liability arising from motorized vehicles, and how a given carrier applies that exclusion to a 3,000 watt machine is a coverage question that turns on the policy wording rather than on the statute.",
  },
  {
    heading: "Your own uninsured motorist coverage may or may not reach it",
    body: "Uninsured and underinsured motorist coverage under an Illinois auto policy responds to injury caused by an uninsured motor vehicle, as that policy defines the term. Public Act 104-0854 calls an electric micromobility device a motor vehicle for purposes of the Vehicle Code, which is not automatically the same as the definition printed in an insurance contract. Anyone told flatly that coverage does not apply should have the actual policy language read before accepting that answer.",
  },
  {
    heading: "The new law improves the picture for the heavy machines",
    body: "From January 1, 2027, a motor driven cycle, which now includes electric machines rated over 750 watts, is subject to the Vehicle Code's mandatory insurance requirements. A machine ridden lawfully after that date should have a liability policy behind it. A machine ridden without one is an insurance problem for its rider and a recovery problem for whoever it hits.",
  },
  {
    heading: "Medical payments coverage and health insurance still matter",
    body: "Medical payments coverage on a household auto policy sometimes applies to a family member hurt while cycling, and health insurance covers treatment in the meantime. Health plans commonly assert a right to be repaid out of any recovery, so those claims need to be identified early rather than discovered at the end.",
  },
];

/** Deadlines. All verified against ilga.gov, September 2026. */
export const DEADLINES = [
  {
    claim: "Personal injury",
    period: "2 years from the date of the injury",
    citation: "735 ILCS 5/13-202",
  },
  {
    claim: "Wrongful death",
    period:
      "2 years from the date of death, with narrow exceptions that extend it",
    citation: "740 ILCS 180/2(d), (e)",
  },
  {
    claim:
      "Against a city, village, township, park district, or other local public entity",
    period:
      "1 year from when the injury was received or the cause of action accrued",
    citation: "745 ILCS 10/8-101(a)",
  },
  {
    claim: "Injured person was under 18",
    period:
      "Generally 2 years after turning 18, though claims against public entities and product claims have their own limits",
    citation: "735 ILCS 5/13-211(a)",
  },
  {
    claim: "Product liability, outer limit",
    period:
      "12 years from first sale by a seller or 10 years from delivery to the first user, whichever expires earlier",
    citation: "735 ILCS 5/13-213(b)",
  },
];

/** How the new rules affect fault allocation, in both directions. */
export const FAULT_POINTS = [
  "Illinois follows modified comparative fault. A plaintiff whose own contributory fault is more than 50% of the proximate cause recovers nothing, and at 50% or less the award is reduced by that percentage (735 ILCS 5/2-1116).",
  "Illinois courts generally treat the violation of a safety statute as evidence of negligence rather than automatic liability. That means a rule broken on either side is argued to the jury, not applied mechanically.",
  "After January 1, 2027 the new rules give defense lawyers a longer list to point at: riding on a sidewalk, riding under the new minimum age, carrying a passenger the law does not allow, tampering with the speed limiter, or operating a machine that needed a license and a plate.",
  "The same list works for an injured rider when the other side broke it. A driver who parked across a bicycle lane, a shop that sold an unregistrable machine as street legal, or a public body that failed to post the signage the Act now requires are all facts worth developing.",
];

/** What the firm actually does, kept honest about the referral model. */
export const HOW_WE_HELP = [
  {
    title: "Injury claims, through our network",
    body: "For injury cases we connect you with experienced personal injury attorneys through the network REAL Law Group works with, the same way we handle car and truck collision matters. Those cases are handled on a contingency-fee basis, meaning no attorney's fees unless there is a recovery, with the treatment of case costs and expenses set out in a written fee agreement before anything begins.",
  },
  {
    title: "A machine sold to you as something it was not",
    body: "Public Act 104-0854 makes it an unlawful practice under the Consumer Fraud and Deceptive Business Practices Act for a retailer, wholesaler, distributor, or manufacturer to market a motor driven cycle in a way that would lead a consumer to believe it is exempt from licensing, titling, registration, and insurance. The firm already litigates under that statute in its privacy practice. Bring the advertisement, the invoice, and the label.",
  },
  {
    title: "Citations, impoundment, and what a violation means for you",
    body: "The Act lets law enforcement confiscate and impound both micromobility devices and motor driven cycles at its discretion, and charge a fee to release them. Tell us what the notice says and what happened, and we will tell you where you stand and point you to the right counsel if the matter falls outside what the firm handles.",
  },
  {
    title: "Free consultations, in three languages",
    body: "Consultations cost nothing and are available in English, Spanish, and Polish. Nothing on this page is legal advice, and contacting the firm does not by itself create an attorney-client relationship.",
  },
];

/** First-48-hours checklist. Practical, and it protects the claim. */
export const EVIDENCE = [
  "Photograph the scene, the vehicles, the device, the road surface, and every visible injury before anything is moved or repaired.",
  "Keep the device exactly as it is. Do not repair it, do not discard the battery, and do not let a shop take it.",
  "Photograph the manufacturer's label showing the class, the top assisted speed, and the motor wattage. That label decides which legal category applies.",
  "Get a police report, even when the other vehicle was parked or the rider seems unhurt.",
  "Collect names, phone numbers, and insurance information for every driver, rider, and witness.",
  "Get medical attention the same day, because a documented record close in time to the crash is difficult to reconstruct later.",
  "Save the app, the rental agreement, the receipt, and the sale paperwork if a rented or newly purchased machine was involved.",
  "Do not give a recorded statement to an adjuster before you have talked to a lawyer.",
];
