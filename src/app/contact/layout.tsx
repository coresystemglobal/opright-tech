import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Opright Technologies | Book a Demo or Get in Touch",
  description:
    "Book a 20-minute product demo, request a quote, or reach out to the Opright Technologies team. Based in Lagos, Nigeria.",
  keywords: [
    "contact Opright Technologies",
    "book demo estate management",
    "Opright Technologies Lagos",
    "enterprise software demo Nigeria",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
