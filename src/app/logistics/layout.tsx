import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opright Logistics | Fleet & Delivery Management",
  description:
    "Fleet tracking, dispatch management, route optimization, delivery confirmation, and automated invoicing for Nigerian logistics operators. Coming soon.",
  keywords: [
    "logistics software Nigeria",
    "fleet management app Lagos",
    "delivery tracking system",
    "dispatch management Nigeria",
    "logistics management Africa",
  ],
};

export default function LogisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
