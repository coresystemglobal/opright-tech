import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opright Health | Hospital Management System",
  description:
    "Patient registration, EMR/EHR, appointment scheduling, pharmacy inventory, lab results, and HMO billing for Nigerian healthcare providers. Coming soon.",
  keywords: [
    "hospital management system Nigeria",
    "EMR software Lagos",
    "clinic management app",
    "HMO billing software Nigeria",
    "healthcare management system Africa",
  ],
};

export default function HealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
