import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opright Estate | Community Access Management",
  description:
    "Visitor management, gate access control, service charge billing, facility booking, and security patrol tracking for estates in Lagos. Starting at N40,000/month.",
  keywords: [
    "estate management app Lagos",
    "gate access control Nigeria",
    "visitor management system",
    "estate security app",
    "service charge billing estate",
    "community management software",
  ],
  openGraph: {
    title: "Opright Estate | Community Access Management",
    description:
      "One platform for estate managers, security guards, and residents. Starting at N40,000/month.",
  },
};

export default function EstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
