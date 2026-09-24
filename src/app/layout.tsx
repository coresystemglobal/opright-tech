import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Opright Technologies | Enterprise Software for Africa",
    template: "%s | Opright Technologies",
  },
  description:
    "Estate management, school administration, healthcare systems, and logistics solutions built for how Africa actually works. By Core System Global Limited.",
  keywords: [
    "estate management app Lagos",
    "school management software Nigeria",
    "hospital management system Africa",
    "logistics software Nigeria",
    "Opright Technologies",
    "CSG Limited",
  ],
  authors: [{ name: "Core System Global Limited" }],
  metadataBase: new URL("https://opright.co"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://opright.co",
    siteName: "Opright Technologies",
    title: "Opright Technologies | Enterprise Software for Africa",
    description:
      "Estate management, school administration, healthcare systems, and logistics solutions built for how Africa actually works.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opright Technologies",
    description:
      "Enterprise software built for how Africa actually works.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibmPlexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
