import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Opright Technologies | Built for How Africa Actually Works",
  description:
    "Core System Global Limited builds enterprise software for Nigerian businesses. Estate management, school administration, healthcare, and logistics. Lagos-based, Africa-focused.",
  keywords: [
    "Opright Technologies",
    "Core System Global Limited",
    "enterprise software Nigeria",
    "tech company Lagos",
    "African software company",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
