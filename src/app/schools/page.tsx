"use client";

import { ProductPageTemplate } from "@/components/product-page";
import { SITE_CONFIG } from "@/lib/constants";

const features = [
  {
    title: "Student Enrollment",
    description: "Digital admission forms, document uploads, class placement, and automated enrollment tracking across terms.",
  },
  {
    title: "Attendance Management",
    description: "Daily attendance marking by class teachers, automated reports for parents, and term-end attendance summaries for admin.",
  },
  {
    title: "Gradebook & Report Cards",
    description: "Enter scores by subject, auto-calculate averages and positions, generate print-ready report cards that match Nigerian WAEC/NECO formats.",
  },
  {
    title: "Fee Collection",
    description: "Per-student billing in Naira, payment tracking, outstanding balances, and automated reminders. Supports bank transfer and card payments.",
  },
  {
    title: "Parent Portal",
    description: "Parents check their child's attendance, grades, fee status, and school announcements from their phone. No more lost circulars.",
  },
  {
    title: "Timetable Management",
    description: "Build class timetables, assign teachers, handle conflicts automatically. Teachers see their daily schedule in the app.",
  },
  {
    title: "CBT & Exam Management",
    description: "Create question banks, run computer-based tests, auto-grade objective questions, and export results for manual review.",
  },
  {
    title: "School Announcements",
    description: "Push notifications to parents and staff. Schedule messages for resumption dates, fee deadlines, and PTA meetings.",
  },
  {
    title: "Staff Management",
    description: "Teacher profiles, attendance, leave requests, and basic payroll tracking. Everything the bursar needs in one place.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "1,000",
    period: "/student/month",
    description: "For schools getting started with digital administration. Billed per term.",
    features: [
      "Up to 200 students",
      "Enrollment and attendance",
      "Gradebook and report cards",
      "Fee collection and tracking",
      "Parent portal",
      "Email support",
    ],
    cta: "Join the beta",
    popular: false,
  },
  {
    name: "Professional",
    price: "1,000",
    period: "/student/month",
    description: "Full feature set for established schools. Volume pricing kicks in above 200 students.",
    features: [
      "Unlimited students",
      "Everything in Starter",
      "Timetable management",
      "CBT and exam management",
      "Staff management",
      "School announcements",
      "Priority support",
    ],
    cta: "Join the beta",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For school groups and education companies managing multiple campuses.",
    features: [
      "Everything in Professional",
      "Multi-campus management",
      "Custom branding per school",
      "API access",
      "Dedicated account manager",
      "Training and onboarding",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function SchoolsPage() {
  return (
    <ProductPageTemplate
      eyebrow="Opright Schools"
      title="Run your school,"
      titleAccent="not your spreadsheets."
      description="Student enrollment, attendance, gradebook, fee collection, parent portal, timetabling, and CBT exam management. Built for how Nigerian schools actually operate, from nursery to secondary."
      status="beta"
      features={features}
      pricing={pricing}
      pricingNote="Per-student pricing means you pay only for active enrollment. Billed per term, not per month. No setup fees."
      ctaTitle="Ready to digitize your school?"
      ctaDescription="Join the beta and get your first term free. We will migrate your student data and train your staff."
      ctaLabel="Join the beta"
      ctaHref={SITE_CONFIG.demoUrl}
      accentColor="indigo-600"
      accentBg="indigo-50"
    />
  );
}
