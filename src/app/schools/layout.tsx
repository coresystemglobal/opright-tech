import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opright Schools | School Management Software",
  description:
    "Student enrollment, attendance, gradebook, fee collection, parent portal, and CBT exam management for Nigerian schools. From N1,000/student/month.",
  keywords: [
    "school management software Nigeria",
    "school ERP Lagos",
    "student management system",
    "school fee collection app",
    "CBT exam software Nigeria",
  ],
};

export default function SchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
