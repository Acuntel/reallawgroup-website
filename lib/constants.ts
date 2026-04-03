export const COLORS = {
  primary: "#1e2c4b",
  secondary: "#dcac35",
  accent: "#32405d",
  background: "#FAFAF8",
  dark: "#0c1a36",
  text: "#1A1A1A",
  textMuted: "#5A6475",
  success: "#2D7A4F",
  border: "#E5E7EB",
  lightGold: "#F5F0E6",
};

export const CONTACT = {
  phone: "(312) 223-1700",
  phoneHref: "tel:+13122231700",
  email: "akryder@kryderlaw.com",
  address: "134 N LaSalle St, Suite 1515, Chicago, IL 60602",
  hours: "24/7 — Free Consultations Available Anytime",
  schedulingUrl: process.env.NEXT_PUBLIC_SCHEDULING_URL || "/contact",
  googleMapsUrl: "https://g.page/kryderlawgroup?share",
  facebook: "https://www.facebook.com/kryderlawgroup/",
  instagram: "https://www.instagram.com/kryderlawgroupllc/",
  linkedin:
    "https://www.linkedin.com/company/the-kryder-law-group-llc-accident-and-injury-lawyers/about/",
  twitter: "https://twitter.com/kryderlawgroup",
  youtube: "https://www.youtube.com/@thekryderlawgroupllc",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      { label: "Car Accidents", href: "/practice-areas/car-accidents" },
      { label: "Truck Accidents", href: "/practice-areas/truck-accidents" },
      {
        label: "Motorcycle Accidents",
        href: "/practice-areas/motorcycle-accidents",
      },
      {
        label: "Medical Malpractice",
        href: "/practice-areas/medical-malpractice",
      },
      {
        label: "Workers' Compensation",
        href: "/practice-areas/workers-compensation",
      },
      {
        label: "Catastrophic Injury",
        href: "/practice-areas/catastrophic-injury",
      },
      { label: "Wrongful Death", href: "/practice-areas/wrongful-death" },
      { label: "Slip and Fall", href: "/practice-areas/slip-and-fall" },
      {
        label: "Construction Accidents",
        href: "/practice-areas/construction-accidents",
      },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Contact Us", href: "/contact" },
];
