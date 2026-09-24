export const SITE_CONFIG = {
  name: "Opright Technologies",
  legalName: "Core System Global Limited",
  domain: "opright.co",
  url: "https://opright.co",
  tagline: "Enterprise software built for how Africa actually works.",
  description:
    "Estate management, school administration, healthcare systems, and logistics solutions. Real tools, real numbers, real infrastructure.",
  email: "hello@opright.co",
  demoUrl: "https://cal.com/opright", // Cal.com booking link
} as const;

export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  colorLight: string;
  href: string;
  subdomain: string;
  status: "live" | "beta" | "coming-soon";
  cta: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Opright Estate",
    slug: "estate",
    tagline: "Community access management that actually works.",
    description:
      "Visitor management, gate access control, service charge billing, facility booking, and security patrol tracking. One platform for estate managers, guards, and residents.",
    icon: "Shield",
    color: "cobalt-600",
    colorLight: "cobalt-50",
    href: "/estate",
    subdomain: "estate.opright.co",
    status: "live",
    cta: "Start free trial",
  },
  {
    name: "Opright Schools",
    slug: "schools",
    tagline: "Run your school, not your spreadsheets.",
    description:
      "Student enrollment, attendance, gradebook, fee collection, parent portal, timetabling, report cards, and CBT exam management. Built for Nigerian schools.",
    icon: "GraduationCap",
    color: "indigo-600",
    colorLight: "indigo-100",
    href: "/schools",
    subdomain: "schools.opright.co",
    status: "beta",
    cta: "Join the beta",
  },
  {
    name: "Opright Health",
    slug: "health",
    tagline: "Hospital management without the paper trail.",
    description:
      "Patient registration, EMR/EHR, appointment scheduling, pharmacy inventory, lab results, billing and HMO claims, ward management, and referral tracking.",
    icon: "HeartPulse",
    color: "success",
    colorLight: "emerald-50",
    href: "/health",
    subdomain: "health.opright.co",
    status: "coming-soon",
    cta: "Join the waitlist",
  },
  {
    name: "Opright Logistics",
    slug: "logistics",
    tagline: "Move goods. Track everything. Get paid.",
    description:
      "Fleet tracking, dispatch management, route optimization, driver management, delivery confirmation, customer notifications, and automated invoicing.",
    icon: "Truck",
    color: "warning",
    colorLight: "amber-50",
    href: "/logistics",
    subdomain: "logistics.opright.co",
    status: "coming-soon",
    cta: "Join the waitlist",
  },
  // HRM product intentionally excluded from public site. Still in development.
  // {
  //   name: "Opright HRM",
  //   slug: "hrm",
  //   tagline: "People operations, simplified.",
  //   description: "Employee management, payroll, leave tracking, and performance reviews.",
  //   icon: "Users",
  //   color: "cobalt-500",
  //   colorLight: "cobalt-50",
  //   href: "/hrm",
  //   subdomain: "hrm.opright.co",
  //   status: "coming-soon",
  //   cta: "Join the waitlist",
  // },
];

export const ESTATE_PRICING = [
  {
    name: "Starter",
    price: "40,000",
    period: "/month",
    description: "For small estates and gated communities getting started with digital access management.",
    features: [
      "Up to 50 units",
      "Visitor management with QR codes",
      "Resident directory",
      "Basic gate access control",
      "Estate announcements",
      "Email support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "65,000",
    period: "/month",
    description: "For mid-size estates that need billing, facility management, and deeper security features.",
    features: [
      "Up to 200 units",
      "Everything in Starter",
      "Service charge billing and collection",
      "Facility booking",
      "Vendor/artisan scheduling",
      "Guard patrol tracking",
      "Delivery management",
      "Priority support",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Estate Pro",
    price: "170,000",
    period: "/month",
    description: "For large estates and developers who need analytics, multi-site management, and full control.",
    features: [
      "Unlimited units",
      "Everything in Growth",
      "Analytics dashboard",
      "Multi-estate management",
      "Incident/complaint reporting",
      "Custom branding",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For estate developers and facility management companies operating at scale.",
    features: [
      "Everything in Estate Pro",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment option",
      "Dedicated infrastructure",
      "Training and onboarding",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export const NAV_LINKS = [
  {
    label: "Products",
    href: "#",
    children: PRODUCTS.map((p) => ({
      label: p.name,
      href: p.href,
      description: p.tagline,
      status: p.status,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
