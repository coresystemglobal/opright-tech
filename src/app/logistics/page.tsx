"use client";

import { ProductPageTemplate } from "@/components/product-page";
import { SITE_CONFIG } from "@/lib/constants";

const features = [
  {
    title: "Fleet Tracking",
    description: "Real-time GPS tracking for every vehicle. See your entire fleet on one map with speed, fuel, and status indicators.",
  },
  {
    title: "Dispatch Management",
    description: "Assign jobs to drivers, set pickup and delivery points, and track progress from dispatch to proof of delivery.",
  },
  {
    title: "Route Optimization",
    description: "Automated route planning that accounts for Lagos traffic patterns, fuel costs, and delivery time windows.",
  },
  {
    title: "Driver Management",
    description: "Driver profiles, license tracking, trip history, performance scores, and automated commission calculations.",
  },
  {
    title: "Delivery Confirmation",
    description: "Digital proof of delivery with photo capture, e-signature, and GPS-stamped timestamps. No more delivery disputes.",
  },
  {
    title: "Customer Notifications",
    description: "Automated SMS and WhatsApp updates at each delivery milestone. Customers track their shipment without calling your office.",
  },
  {
    title: "Warehouse Management",
    description: "Inbound/outbound tracking, bin locations, pick lists, and stock level alerts for your warehouse operations.",
  },
  {
    title: "Invoicing & Payments",
    description: "Auto-generate invoices from completed deliveries, track payments, and manage commission-based pricing tiers.",
  },
];

export default function LogisticsPage() {
  return (
    <ProductPageTemplate
      eyebrow="Opright Logistics"
      title="Move goods. Track everything."
      titleAccent="Get paid."
      description="Fleet tracking, dispatch management, route optimization, driver management, delivery confirmation, customer notifications, and automated invoicing. Built for Nigerian logistics operators."
      status="coming-soon"
      features={features}
      ctaTitle="Logistics, simplified."
      ctaDescription="Opright Logistics is in active development. Join the waitlist to get early access and shape the product."
      ctaLabel="Join the waitlist"
      ctaHref={SITE_CONFIG.demoUrl}
      accentColor="warning"
      accentBg="amber-50"
    />
  );
}
