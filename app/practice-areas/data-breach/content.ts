export const caseTypes = [
  "Hospital, clinic, and healthcare system breaches",
  "Employer and payroll data breaches",
  "Bank, lender, and financial account breaches",
  "School and student data breaches",
  "Insurance company and benefits vendor breaches",
  "Third-party vendor and software breaches",
  "Biometric privacy violations (fingerprint and face scans)",
  "Genetic and family medical history privacy violations",
];

export const ilStatutes = [
  {
    name: "Personal Information Protection Act (PIPA)",
    citation: "815 ILCS 530",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2702&ChapterID=67",
    summary:
      "Illinois's data breach law. Companies that hold your personal information must maintain reasonable security measures to protect it, and must notify you of a breach in the most expedient time possible and without unreasonable delay. Breaches affecting more than 500 Illinois residents must also be reported to the Illinois Attorney General.",
  },
  {
    name: "Consumer Fraud and Deceptive Business Practices Act",
    citation: "815 ILCS 505",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2356&ChapterID=67",
    summary:
      "A violation of PIPA is automatically an unlawful practice under the Consumer Fraud Act (815 ILCS 530/20). Illinois consumers who suffered actual economic damages from a breach — fraudulent charges, out-of-pocket costs, money spent protecting themselves — may bring claims, and prevailing plaintiffs can recover attorney's fees.",
  },
  {
    name: "Biometric Information Privacy Act (BIPA)",
    citation: "740 ILCS 14",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3004&ChapterID=57",
    summary:
      "The strongest biometric privacy law in the country. If a company collected, stored, or shared your fingerprints, face geometry, or other biometrics without proper written notice and consent, you can sue for the greater of your actual damages or $1,000 per negligent violation ($5,000 if intentional or reckless), plus attorney's fees — no proof of identity theft required. Claims can reach back five years.",
  },
  {
    name: "Genetic Information Privacy Act (GIPA)",
    citation: "410 ILCS 513",
    link: "https://www.ilga.gov/Legislation/ILCS/Articles?ActID=1567&ChapterID=35",
    summary:
      "Protects genetic testing data and genetic information — which courts have held includes family medical history collected in pre-employment physicals. Statutory damages are the greater of actual damages or $2,500 per negligent violation ($15,000 if intentional or reckless), plus attorney's fees.",
  },
];

export const evidenceItems = [
  "The notification letter itself — keep the original and the envelope",
  "Fraudulent charges or withdrawals on any account",
  "Credit cards, loans, or accounts opened in your name",
  "A tax return or government benefits filed using your identity",
  "Suspicious logins, password-reset emails, or locked accounts",
  "Receipts for credit monitoring, freezes, or other protection you paid for",
  "A log of the hours you have spent dealing with the breach",
  "Spam, phishing texts, or scam calls that started after the breach",
];

export const processSteps = [
  {
    step: "1",
    title: "Free, Confidential Case Review",
    description:
      "Call us or send the contact form. Tell us which company sent your notification letter, what the letter says was exposed, and whether you have noticed any misuse. Keep the letter — it is the single most important document in your case.",
  },
  {
    step: "2",
    title: "We Investigate Your Claim",
    description:
      "We review the breach, what Illinois and federal law required of the company, and how the exposure has affected you. Where it strengthens a case, we work alongside experienced national data breach litigation firms we co-counsel with on active matters.",
  },
  {
    step: "3",
    title: "No Attorney's Fees Unless You Recover",
    description:
      "Data breach cases are handled on a contingency-fee basis: you pay no attorney's fees unless there is a recovery. How case costs and expenses are handled is explained clearly in a written fee agreement before we begin.",
  },
];

export const faqs = [
  {
    question: "Can I sue for a data breach in Illinois?",
    answer:
      "Possibly. Illinois residents may have claims when a company fails to reasonably protect their personal information or delays telling them about a breach. Under Illinois law, a violation of the Personal Information Protection Act is an unlawful practice under the Consumer Fraud Act, and separate statutes — BIPA for biometric data and GIPA for genetic information — give Illinois residents some of the strongest privacy claims in the country. Whether you have a viable claim depends on what was exposed and how it affected you, which is exactly what a free case review looks at.",
  },
  {
    question: "Do I have to prove identity theft to have a claim?",
    answer:
      "It depends on the type of claim. For biometric (BIPA) and genetic information (GIPA) claims, no — Illinois courts allow statutory claims without proof of identity theft or monetary loss. For data breach claims, the Illinois Supreme Court held in 2025 that an increased risk of identity theft, by itself, is generally not enough to sue for damages in Illinois state court. That is why documenting actual misuse — fraudulent charges, new accounts, tax fraud — and every dollar and hour you spend responding matters so much.",
  },
  {
    question: "What does it cost to hire a data breach lawyer?",
    answer:
      "Nothing upfront. We handle data breach and privacy cases on a contingency-fee basis: you pay no attorney's fees unless we obtain a recovery for you. Whether you would be responsible for any case costs or expenses — and how they are handled — is explained clearly in a written fee agreement before we begin. The initial case review is free and confidential.",
  },
  {
    question: "What is a class action, and what would my role be?",
    answer:
      "Most data breaches affect thousands of people the same way, so courts allow one or more affected individuals to bring claims on behalf of everyone — a class action. As a class member you generally do not have to appear in court or pay anything; if the case settles, you receive notice and can submit a claim. Some individuals with significant losses, or with BIPA or GIPA claims, may be better served by individual claims — we evaluate both paths in your case review.",
  },
  {
    question: "How long do I have to bring a claim?",
    answer:
      "Deadlines vary by claim: as a general matter, BIPA claims have a five-year limitations period, Illinois Consumer Fraud Act claims three years, and negligence claims two years — and when the clock starts can depend on when you knew or should have known about the breach. The date on your notification letter matters. Because deadlines vary by claim and circumstance, contacting an attorney promptly is the safest way to protect your rights.",
  },
  {
    question:
      "Does accepting the company's free credit monitoring waive my right to sue?",
    answer:
      "Generally, no. Enrolling in the free credit monitoring offered in a notification letter generally does not prevent you from participating in a lawsuit or class settlement, and you should accept it — it is a sensible protective step. Any actual release of claims would have to come from settlement paperwork you sign, which is something we review with you.",
  },
  {
    question: "What can data breach victims actually recover?",
    answer:
      "It varies case by case, and no lawyer can honestly promise you a number. In recent data breach class settlements nationally, class members have typically been able to claim reimbursement of documented losses, an alternative cash payment, and extended credit monitoring. Illinois's BIPA and GIPA provide set statutory damages for biometric and genetic privacy violations. What your claim may be worth depends on what was exposed and what harm you can document — no outcome is ever guaranteed.",
  },
  {
    question:
      "I received a letter but haven't seen any fraud. Should I still do anything?",
    answer:
      "Yes. Keep the letter, enroll in any free credit monitoring offered, consider a free security freeze with all three credit bureaus, and start a simple log of anything suspicious. Stolen data is often sold or posted months after a breach, so problems can surface long after the letter arrives. A free case review costs nothing and tells you where you stand.",
  },
];
