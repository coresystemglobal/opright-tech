"use client";

import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/badge";
import { Animate, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PRODUCTS, SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <WhyOprightSection />
      <StatsSection />
      <CTASection />
    </>
  );
}

/* ── Hero ── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-[var(--spacing-8)] md:pt-40 md:pb-[var(--spacing-9)]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt-50/60 via-bg-page to-bg-page" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cobalt-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
        <div className="max-w-3xl mx-auto text-center">
          <Animate variant="fadeUp">
            <p className="eyebrow text-action-primary mb-[var(--spacing-4)]">
              {/* By Core System Global Limited */}
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="display-h1 text-text-primary mb-[var(--spacing-5)]">
              Enterprise software built for how Africa{" "}
              <span className="text-action-primary">actually works</span>.
            </h1>
          </Animate>

          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-[var(--spacing-7)] max-w-2xl mx-auto">
              Estate management, school administration, healthcare systems, and logistics.
              Real tools with real numbers, built by people who understand
              the infrastructure gap.
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" href="/estate">
                Explore Opright Estate
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" href={SITE_CONFIG.demoUrl}>
                Book a demo
              </Button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

/* ── Products Grid ── */

function ProductsSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Products"
        title="One platform, four verticals."
        description="Each product is built from the ground up for its industry, not a generic tool with a new skin. They share infrastructure; they do not share compromises."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-5)]">
        {PRODUCTS.map((product) => (
          <StaggerItem key={product.slug}>
            <Link href={product.href} className="block group">
              <Card hover className="h-full">
                <div className="flex items-start justify-between mb-[var(--spacing-4)]">
                  <div className="h-10 w-10 rounded-[var(--radius-md)] bg-cobalt-50 flex items-center justify-center">
                    <ProductCardIcon name={product.icon} />
                  </div>
                  <StatusBadge status={product.status} />
                </div>
                <h3 className="display-h3 text-text-primary mb-[var(--spacing-2)] group-hover:text-action-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-[var(--spacing-4)]">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-action-primary group-hover:gap-2.5 transition-all">
                  {product.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/* ── Why Opright ── */

const reasons = [
  {
    title: "Built here, for here",
    description:
      "Not a Silicon Valley tool adapted for Lagos. Every product handles Naira billing, Nigerian phone numbers, unreliable power, and the way business actually runs on the ground.",
    icon: (
      <svg className="h-6 w-6 text-action-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Security first, always",
    description:
      "Estate access logs, student records, patient data. We handle sensitive information for every vertical, and we take that seriously with NDPA-compliant data handling from day one.",
    icon: (
      <svg className="h-6 w-6 text-action-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "One login, one bill",
    description:
      "Facility management companies running three estates and two schools get one dashboard, one invoice, and one support team. Not four separate vendors with four separate problems.",
    icon: (
      <svg className="h-6 w-6 text-action-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Transparent pricing in Naira",
    description:
      "No dollar-denominated surprise invoices. Every plan is priced in Naira, billed monthly, and cancellable anytime. You see exactly what you pay before you start.",
    icon: (
      <svg className="h-6 w-6 text-action-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

function WhyOprightSection() {
  return (
    <Section className="bg-neutral-0">
      <SectionHeader
        eyebrow="Why Opright"
        title="Software that does not pretend Africa is Silicon Valley."
        description="We build for the context you operate in. Estate gates that lose power, schools that bill per term in Naira, hospitals that handle HMO claims, and delivery trucks navigating Lagos traffic."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6)]">
        {reasons.map((reason, i) => (
          <Animate key={reason.title} variant="fadeUp" delay={i * 0.1}>
            <div className="flex gap-[var(--spacing-4)]">
              <div className="h-12 w-12 rounded-[var(--radius-lg)] bg-cobalt-50 flex items-center justify-center shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </Section>
  );
}

/* ── Stats/Trust ── */

const stats = [
  { value: "4", label: "Product verticals" },
  { value: "Lagos", label: "Launching market" },
  { value: "100%", label: "Naira-denominated pricing" },
  { value: "NDPA", label: "Compliant data handling" },
];

function StatsSection() {
  return (
    <Section className="bg-cobalt-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-6)]">
        {stats.map((stat, i) => (
          <Animate key={stat.label} variant="fadeUp" delay={i * 0.1}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-neutral-0 font-[family-name:var(--font-display)]">
                {stat.value}
              </p>
              <p className="text-sm text-text-inverse-muted mt-[var(--spacing-2)]">
                {stat.label}
              </p>
            </div>
          </Animate>
        ))}
      </div>
    </Section>
  );
}

/* ── CTA Banner ── */

function CTASection() {
  return (
    <Section>
      <Animate variant="scaleIn">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-cobalt-600 to-cobalt-800 px-[var(--spacing-6)] py-[var(--spacing-8)] md:px-[var(--spacing-9)] md:py-[var(--spacing-9)] text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cobalt-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="display-h2 text-neutral-0 mb-[var(--spacing-4)]">
              Ready to see it in action?
            </h2>
            <p className="text-lg text-cobalt-200 mb-[var(--spacing-6)] max-w-xl mx-auto">
              Book a 20-minute walkthrough. We will show you the product with your
              estate data, not a generic demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" href={SITE_CONFIG.demoUrl}>
                Book a demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/estate"
                className="border-cobalt-400 text-neutral-0 hover:bg-cobalt-700 hover:border-cobalt-300"
              >
                Explore Estate
              </Button>
            </div>
          </div>
        </div>
      </Animate>
    </Section>
  );
}

/* ── Product Card Icons ── */

function ProductCardIcon({ name }: { name: string }) {
  const props = {
    className: "h-5 w-5 text-action-primary",
    fill: "none" as const,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "Shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "GraduationCap":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "HeartPulse":
      return (
        <svg {...props}>
          <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
        </svg>
      );
    case "Truck":
      return (
        <svg {...props}>
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    default:
      return null;
  }
}
