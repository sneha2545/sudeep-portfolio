import {
  Beer,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  HeartHandshake,
  Hotel,
  Sparkles,
  UtensilsCrossed,
  UsersRound,
  Wine,
} from "lucide-react";

export const resumeUrl = "/assets/sudeep-singh.pdf";
export const phoneNumber = "+919760337193";

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Expertise", href: "/expertise" },
  { label: "Documents", href: "/documents" },
  { label: "Contact", href: "/contact" },
];

export const experience = [
  {
    company: "SKY HITCHKI Rooftop Cafe and Restaurant",
    title: "F&B Manager",
    dates: "17 November 2022 — Present",
    location: "Civil Lines, Roorkee",
    detail:
      "Leading day-to-day food and beverage operations, coordinating service teams, and maintaining a welcoming, consistent guest experience.",
    icon: Hotel,
    current: true,
  },
  {
    company: "Desi Indian Handi (Food From Roots)",
    title: "Senior Captain",
    dates: "June 2021 — 11 October 2022",
    location: "Sector 32, Greater Noida",
    detail:
      "Coordinated dining-room service and team activity while upholding thoughtful, attentive standards for every guest.",
    icon: UsersRound,
  },
  {
    company: "Noma Kota House (Bluchi Company)",
    title: "Service Captain",
    dates: "10 May 2020 — 10 April 2021",
    location: "UPSC, Pandara Road, New Delhi",
    detail:
      "Supported polished restaurant service through guest engagement, floor coordination, and consistent attention to detail.",
    icon: UtensilsCrossed,
  },
  {
    company: "Radisson Blu Hotel",
    title: "Assistant Captain",
    dates: "20 February 2019 — 20 March 2020",
    location: "Greater Noida",
    detail:
      "Built hotel restaurant experience in a structured service environment, supporting smooth operations and attentive guest care.",
    icon: Hotel,
  },
  {
    company: "The Forest Grand Restaurant & Bar",
    title: "Bar Steward",
    dates: "10 January 2017 — 15 January 2019",
    location: "Chanakyapuri, New Delhi",
    detail:
      "Delivered bar and restaurant service with a focus on hospitality, reliable teamwork, and a welcoming guest experience.",
    icon: Wine,
  },
  {
    company: "Gourmet Gallery Fine Dining & Resto Bar",
    title: "Bartender & Bar Service",
    dates: "15 May 2015 — 16 December 2016",
    location: "South Extension Part II, New Delhi",
    detail:
      "Started a hospitality career in fine dining and bar service, learning the craft of thoughtful, guest-first service.",
    icon: Beer,
  },
];

export const expertise = [
  { label: "Restaurant Operations", icon: UtensilsCrossed },
  { label: "Food & Beverage Management", icon: BriefcaseBusiness },
  { label: "Guest Relationship Management", icon: HeartHandshake },
  { label: "Fine Dining Service", icon: Sparkles },
  { label: "Bar Operations", icon: Wine },
  { label: "Team Coordination", icon: UsersRound },
  { label: "Service Quality Management", icon: BadgeCheck },
  { label: "Hospitality Operations", icon: Hotel },
  { label: "Staff Supervision", icon: ClipboardCheck },
  { label: "Customer Satisfaction", icon: HeartHandshake },
];

export const strengths = [
  "Punctual",
  "Efficient",
  "Responsible",
  "Enterprising",
  "Analytical",
  "Troubleshooting skills",
];

export const documents = [
  {
    title: "Gourmet Gallery",
    category: "Experience certificate",
    description: "Fine dining & resto bar · 2015–2016",
    image: "/assets/gourmet-gallery-certificate.jpeg",
    alt: "Gourmet Gallery experience certificate",
  },
  {
    title: "The Forest Grand",
    category: "Experience certificate",
    description: "Restaurant & bar · 2017–2019",
    image: "/assets/forest-grand-certificate.jpeg",
    alt: "The Forest Grand experience certificate",
  },
  {
    title: "Radisson Blu",
    category: "Experience certificate",
    description: "Hotel · 2019–2020",
    image: "/assets/radisson-blu-certificate.jpeg",
    alt: "Radisson Blu Hotel experience certificate",
  },
  {
    title: "Hospitality venue document",
    category: "Supporting document",
    description: "Wild Orchid Resort, Havelock · 2018",
    image: "/assets/wild-orchid-venue-document.jpeg",
    alt: "Hospitality venue document for Wild Orchid Resort",
    note: "Venue-related document; not evidence of employment.",
  },
];
