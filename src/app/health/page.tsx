"use client";

import { ProductPageTemplate } from "@/components/product-page";
import { SITE_CONFIG } from "@/lib/constants";

const features = [
  {
    title: "Patient Registration",
    description: "Digital patient records with photo ID, contact info, next-of-kin, and HMO details. No more lost paper files.",
  },
  {
    title: "Electronic Medical Records",
    description: "Structured clinical notes, diagnosis codes, prescription history, and lab results in one patient timeline.",
  },
  {
    title: "Appointment Scheduling",
    description: "Online booking, doctor availability management, automated reminders, and walk-in queue management.",
  },
  {
    title: "Pharmacy & Inventory",
    description: "Drug dispensing linked to prescriptions, stock tracking, expiry alerts, and automated reorder points.",
  },
  {
    title: "Lab Results Management",
    description: "Order tests, record results, and deliver them to the requesting doctor digitally. Full audit trail.",
  },
  {
    title: "Billing & HMO Claims",
    description: "Generate invoices, process HMO pre-authorizations, track claims, and reconcile payments. All in Naira.",
  },
  {
    title: "Ward Management",
    description: "Bed availability, patient admission and discharge, nursing notes, and ward-level reporting.",
  },
  {
    title: "Referral Tracking",
    description: "Track patient referrals between departments and to external facilities. Maintain continuity of care documentation.",
  },
];

export default function HealthPage() {
  return (
    <ProductPageTemplate
      eyebrow="Opright Health"
      title="Hospital management without"
      titleAccent="the paper trail."
      description="Patient registration, EMR, appointment scheduling, pharmacy inventory, lab results, billing and HMO claims, ward management, and referral tracking. Designed for Nigerian healthcare providers."
      status="coming-soon"
      features={features}
      ctaTitle="Be the first to know."
      ctaDescription="Opright Health is in active development. Join the waitlist and we will reach out when early access opens."
      ctaLabel="Join the waitlist"
      ctaHref={SITE_CONFIG.demoUrl}
      accentColor="success"
      accentBg="emerald-50"
    />
  );
}
