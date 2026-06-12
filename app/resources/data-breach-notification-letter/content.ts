export const steps = [
  {
    step: "1",
    title: "Read the Letter Carefully — and Keep It",
    description:
      "The letter tells you exactly what was exposed (Social Security number, medical information, financial accounts), when the breach happened, and what the company is offering you. Keep the letter and the envelope — it is evidence, it may start legal deadlines, and attorneys will ask for it first. A photo of it on your phone is a good backup.",
  },
  {
    step: "2",
    title: "Make Sure the Letter Is Real",
    description:
      "Scammers send fake 'breach support' letters, calls, and texts that piggyback on real breaches. Search the company's name plus 'data breach' to find its official announcement, or go to the company's website directly — do not call phone numbers or click links you cannot verify. A real notification will never ask for your password, full Social Security number, or payment over the phone.",
  },
  {
    step: "3",
    title: "Enroll in the Free Credit Monitoring",
    description:
      "Most letters offer 12–24 months of free credit monitoring or identity protection. Accept it — the Federal Trade Commission recommends taking it, and enrolling generally does not waive your right to participate in a lawsuit or settlement. Just know its limits: monitoring alerts you after something happens; it does not prevent identity theft.",
  },
  {
    step: "4",
    title: "Freeze Your Credit at All Three Bureaus",
    description:
      "A security freeze blocks new credit accounts from being opened in your name and is free by federal law. You must place it separately with Equifax, Experian, and TransUnion, and you can lift it temporarily whenever you apply for credit. If a freeze feels like too much, a free one-year fraud alert is a lighter alternative — see the comparison below.",
  },
  {
    step: "5",
    title: "Pull Your Free Credit Reports and Watch Your Accounts",
    description:
      "You can check your credit reports from all three bureaus for free, as often as weekly, at AnnualCreditReport.com. Look for accounts you do not recognize and hard inquiries you did not authorize. Review bank and card statements line by line, and if medical information was exposed, read every Explanation of Benefits from your insurer for care you never received.",
  },
  {
    step: "6",
    title: "Lock Down Your Logins — and Your Tax Return",
    description:
      "If a password was exposed, change it everywhere you reused it and turn on two-factor authentication. If your Social Security number was exposed, consider requesting an Identity Protection PIN from the IRS so no one can file a tax return in your name, and file your own return early.",
  },
  {
    step: "7",
    title: "Document Everything",
    description:
      "Keep a simple log: every fraudulent charge, every suspicious account, every scam call or phishing text, every dollar you spend on protection, and every hour you spend dealing with the breach. Under Illinois law, documented losses are what turn a notification letter into a viable legal claim. If misuse occurs, report it at IdentityTheft.gov for a personalized recovery plan.",
  },
];

export const freezeVsAlert = {
  headers: ["", "Credit Freeze", "Fraud Alert"],
  rows: [
    {
      label: "What it does",
      freeze:
        "Blocks lenders from accessing your credit file, so new accounts generally cannot be opened in your name",
      alert:
        "Tells businesses to take extra steps to verify your identity before extending credit",
    },
    {
      label: "Cost",
      freeze: "Free by federal law",
      alert: "Free",
    },
    {
      label: "How long it lasts",
      freeze:
        "Until you lift or remove it — you can lift it temporarily any time",
      alert: "1 year, renewable (7 years for confirmed identity theft victims)",
    },
    {
      label: "Setup",
      freeze: "Must be placed separately with each of the three bureaus",
      alert: "Place with one bureau and it must notify the other two",
    },
    {
      label: "Best when",
      freeze:
        "Your Social Security number was exposed, or you will not need new credit soon",
      alert: "You want protection but expect to apply for credit or loans soon",
    },
  ],
};

export const dataTypeGuides = [
  {
    title: "Social Security Number",
    advice:
      "The most serious exposure — an SSN cannot be changed like a password. Freeze your credit at all three bureaus, consider an IRS Identity Protection PIN, file your tax return early, and review your Social Security statement annually. Stolen SSNs are often used months or years later, so stay vigilant after the free monitoring ends.",
  },
  {
    title: "Financial Account or Card Numbers",
    advice:
      "Contact your bank or card issuer, ask for a replacement card or new account number, and review statements line by line. Dispute fraudulent charges promptly in writing and keep copies — unreimbursed fraud losses are exactly the kind of documented damage that supports a legal claim.",
  },
  {
    title: "Medical or Health Insurance Information",
    advice:
      "Medical identity theft can mean someone receives care or prescriptions under your insurance. Read every Explanation of Benefits, ask your providers for copies of your records if something looks wrong, and report errors to your insurer immediately. Healthcare breaches are among the most common breaches affecting Illinois residents.",
  },
  {
    title: "Your Child's Information",
    advice:
      "Children's data is valuable to thieves precisely because misuse can go unnoticed for years. You can ask each credit bureau to check whether your child has a credit file and place a free freeze on it. School and education software breaches have exposed millions of students' records nationally — including Illinois students.",
  },
  {
    title: "Usernames and Passwords",
    advice:
      "Change the exposed password immediately — and everywhere else you used it. Turn on two-factor authentication for email and financial accounts first; your email account is the master key to everything else. Watch for targeted phishing that references the breached company by name.",
  },
];

export const recentBreaches = [
  {
    name: "Erie Family Health Centers (Chicago area)",
    detail:
      "The Chicago-area community health network publicly reported in 2026 that a late-2025 intrusion affected roughly 570,000 patients, with exposed data potentially including Social Security numbers, financial information, and treatment records.",
  },
  {
    name: "Illinois Department of Human Services",
    detail:
      "The state publicly disclosed that information of roughly 705,000 Illinois residents — largely Medicaid-related records — was viewable online due to incorrect privacy settings between 2022 and 2025.",
  },
  {
    name: "Saint Anthony Hospital (Chicago)",
    detail:
      "The West Side hospital publicly reported that compromised email accounts exposed information of more than 146,000 people; notification letters went out roughly a year after the 2025 intrusion.",
  },
  {
    name: "Chicago Public Schools (vendor breach)",
    detail:
      "CPS publicly disclosed in 2025 that a breach at a third-party file-transfer vendor exposed records of more than 700,000 current and former students.",
  },
  {
    name: "TransUnion (Chicago-based credit bureau)",
    detail:
      "TransUnion publicly disclosed in 2025 that a breach involving a third-party application exposed personal information of more than 4 million U.S. consumers, including names, Social Security numbers, and dates of birth.",
  },
];

export const faqs = [
  {
    question:
      "How long does a company have to notify me of a data breach in Illinois?",
    answer:
      "Illinois's Personal Information Protection Act (815 ILCS 530) requires notification 'in the most expedient time possible and without unreasonable delay,' allowing time to determine the breach's scope and restore system security. There is no fixed number of days for private companies, which is why some letters arrive months after the intrusion. Breaches affecting more than 500 Illinois residents must also be reported to the Illinois Attorney General no later than when consumers are notified.",
  },
  {
    question: "How can I tell if my data breach letter is a scam?",
    answer:
      "Verify independently: search the company's name plus 'data breach' for its official announcement, or visit the company's website directly instead of using links or phone numbers in a letter you do not trust. Legitimate breach notifications do not ask for your password, full Social Security number, or any payment. If a 'breach support' caller or texter asks for personal information, hang up — real notifiers do not do that.",
  },
  {
    question: "What if I threw away my notification letter?",
    answer:
      "It is not fatal to a claim, but try to recover the information. The company's website usually has its breach notice posted, you can request another copy from the company, and large healthcare breaches appear on the federal HHS breach portal. If you contact us, we can usually help confirm whether a breach was publicly reported and whether you fit the affected group.",
  },
  {
    question: "Should I accept the free credit monitoring the company offered?",
    answer:
      "Yes — the FTC recommends accepting free credit monitoring after a breach, and enrolling generally does not waive your right to participate in a lawsuit or class settlement. Be aware of what it does not do: it alerts you to changes on your credit report after they happen, but it does not block new accounts (a credit freeze does that) and it usually will not catch misuse of medical information or existing bank accounts.",
  },
  {
    question: "Can I sue the company that exposed my information?",
    answer:
      "Possibly. Illinois residents may have claims under the Consumer Fraud Act — a violation of Illinois's breach notification law is automatically an unlawful practice under it — and under common-law theories, especially when there are documented losses like fraudulent charges or out-of-pocket costs. Biometric and genetic information exposures can trigger BIPA and GIPA, which provide statutory damages without proof of identity theft. A free case review is the fastest way to find out where you stand.",
  },
];
