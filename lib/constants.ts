export const COLORS = {
  primary: "#1B2D4F",
  secondary: "#866A2D",
  accent: "#2A5F8F",
  background: "#FAFAF8",
  dark: "#0F1923",
  text: "#1A1A1A",
  textMuted: "#5A6475",
  success: "#2D7A4F",
  border: "#E5E7EB",
  lightGold: "#F5F0E6",
};

export const CONTACT = {
  phone: "(630) 299-7600",
  phoneHref: "tel:+16302997600",
  email: "info@reallawgroup.com",
  address: "381 N York St Suite 1, Elmhurst, IL 60126",
  hours: "Mon-Fri: 8AM-7PM | Sat: 8AM-3PM",
  schedulingUrl: process.env.NEXT_PUBLIC_SCHEDULING_URL || "/contact",
  googleMapsUrl: "https://g.page/reallawgroup?share",
  facebook: "https://www.facebook.com/reallawgroup",
  instagram: "https://www.instagram.com/reallawgroup/",
  linkedin: "https://www.linkedin.com/company/reallawgroup",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      { label: "Real Estate Law", href: "/practice-areas/real-estate" },
      { label: "Business Law", href: "/practice-areas/business-law" },
      { label: "Estate Planning", href: "/practice-areas/estate-planning" },
      { label: "HUD Closings", href: "/practice-areas/hud-closings" },
      {
        label: "Building Violations",
        href: "/practice-areas/building-violations",
      },
      { label: "Land Trusts", href: "/practice-areas/land-trusts" },
      { label: "Data Breach & Privacy", href: "/practice-areas/data-breach" },
      { label: "Personal Injury", href: "/practice-areas/personal-injury" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Closing Cost Calculator",
        href: "/resources/closing-cost-calculator",
      },
      { label: "For Sale By Owner", href: "/resources/for-sale-by-owner" },
      { label: "Inherited Property", href: "/resources/inherited-property" },
      { label: "Earnest Money FAQs", href: "/emd" },
      { label: "Transfer Stamps", href: "/resources/transfer-stamps" },
      {
        label: "Real Estate Contract",
        href: "/resources/real-estate-contract",
      },
      { label: "Prevent Wire Fraud", href: "/resources/prevent-wire-fraud" },
      {
        label: "Data Breach Letter Guide",
        href: "/resources/data-breach-notification-letter",
      },
      {
        label: "Quit Claim Deeds",
        href: "/resources/quit-claim-deeds-illinois",
      },
      { label: "Title Insurance FAQ", href: "/resources/title-insurance-faq" },
    ],
  },
  {
    label: "Real Estate Investors",
    href: "/real-estate-investors",
  },
  { label: "Contact Us", href: "/contact" },
];
