"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Animate, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { ESTATE_PRICING, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function EstatePage() {
  return (
    <>
      <EstateHero />
      <FeaturesSection />
      <HowItWorks />
      <MobileAppSection />
      <PricingSection />
      <EstateCTA />
    </>
  );
}

/* ── Hero ── */

function EstateHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-[var(--spacing-8)] md:pt-40 md:pb-[var(--spacing-9)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt-50/80 via-bg-page to-bg-page" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-cobalt-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-8)] items-center">
          <div>
            <Animate variant="fadeUp">
              <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
                Opright Estate
              </p>
            </Animate>
            <Animate variant="fadeUp" delay={0.1}>
              <h1 className="display-h1 text-text-primary mb-[var(--spacing-5)]">
                Community access management that{" "}
                <span className="text-action-primary">actually works</span>.
              </h1>
            </Animate>
            <Animate variant="fadeUp" delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed mb-[var(--spacing-6)]">
                Visitor QR codes, gate access control, service charge billing, facility booking,
                and security patrol tracking. One platform for estate managers, security guards,
                and residents. Starting at &#x20A6;40,000/month.
              </p>
            </Animate>
            <Animate variant="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" href={SITE_CONFIG.demoUrl}>
                  Start free trial
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="outline" size="lg" href={SITE_CONFIG.demoUrl}>
                  Book a demo
                </Button>
              </div>
            </Animate>
            <Animate variant="fadeUp" delay={0.4}>
              <div className="flex items-center gap-6 mt-[var(--spacing-6)] text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  14-day free trial
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  iOS &amp; Android
                </span>
              </div>
            </Animate>
          </div>

          {/* Product mockup placeholder */}
          <Animate variant="slideInRight" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[var(--radius-lg)] bg-gradient-to-br from-cobalt-100 to-cobalt-200 border border-cobalt-200 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-center p-[var(--spacing-6)]">
                  <div className="h-16 w-16 rounded-[var(--radius-lg)] bg-cobalt-600/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-cobalt-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-cobalt-700">Dashboard Preview</p>
                  <p className="text-xs text-cobalt-500 mt-1">Product screenshot coming soon</p>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -left-4 bg-bg-surface rounded-[var(--radius-md)] shadow-lg border border-border-default p-3 hidden md:block">
                <p className="text-xs text-text-muted">Active estates</p>
                <p className="text-lg font-bold text-text-primary font-[family-name:var(--font-display)]">24+</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-bg-surface rounded-[var(--radius-md)] shadow-lg border border-border-default p-3 hidden md:block">
                <p className="text-xs text-text-muted">Visitors processed</p>
                <p className="text-lg font-bold text-success font-[family-name:var(--font-display)]">12.4K</p>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

/* ── Features ── */

const features = [
  {
    title: "Visitor Management",
    description: "Pre-register visitors, generate QR access codes, and keep a full digital log. Residents authorize guests from their phone; guards scan and confirm.",
    icon: "qr",
  },
  {
    title: "Gate Access Control",
    description: "NFC, access codes, and vehicle plate recognition. Every entry and exit is logged with timestamps, guard ID, and authorization source.",
    icon: "gate",
  },
  {
    title: "Service Charge Billing",
    description: "Set up recurring charges per unit, send invoices, track payments in Naira. Automated reminders for overdue balances. No more spreadsheet arguments.",
    icon: "billing",
  },
  {
    title: "Facility Booking",
    description: "Clubhouse, pool, gym, event hall. Residents book through the app, estate managers approve or set auto-accept rules. Conflicts resolved automatically.",
    icon: "calendar",
  },
  {
    title: "Security Patrol Tracking",
    description: "Define patrol routes with checkpoints. Guards scan NFC tags at each point. Managers see real-time patrol maps and get alerts for missed checkpoints.",
    icon: "patrol",
  },
  {
    title: "Incident Reporting",
    description: "Residents report issues with photos and location. Estate managers assign, track, and resolve. Full audit trail for every complaint.",
    icon: "report",
  },
  {
    title: "Estate Announcements",
    description: "Broadcast messages to all residents or specific blocks. Push notifications, in-app messages, and optional SMS fallback for critical announcements.",
    icon: "broadcast",
  },
  {
    title: "Vendor Access Scheduling",
    description: "Pre-authorize artisans and vendors with time-limited access codes. Track who is on-site, when they arrived, and when they left.",
    icon: "vendor",
  },
  {
    title: "Analytics Dashboard",
    description: "Visitor trends, billing collection rates, security patrol coverage, and facility utilization. The numbers estate managers need to report to their boards.",
    icon: "analytics",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const props = {
    className: "h-5 w-5 text-action-primary",
    fill: "none" as const,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<string, React.ReactNode> = {
    qr: <svg {...props}><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17 14h1v1h-1zM14 17h1v1h-1zM20 17h1v1h-1zM17 20h1v1h-1z" /></svg>,
    gate: <svg {...props}><path d="M3 21V3h18v18M9 21V10h6v11M3 10h18" /></svg>,
    billing: <svg {...props}><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM3 9h18M9 21V9" /></svg>,
    calendar: <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
    patrol: <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4l2 2" /></svg>,
    report: <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M12 18v-6M9 15h6" /></svg>,
    broadcast: <svg {...props}><path d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>,
    vendor: <svg {...props}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
    analytics: <svg {...props}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
  };

  return <>{icons[name] || null}</>;
}

function FeaturesSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Features"
        title="Everything an estate needs. Nothing it does not."
        description="Nine modules that cover the full estate management lifecycle, from the gate to the general meeting. Each works standalone; together they replace five separate tools."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-5)]">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <Card hover className="h-full">
              <div className="h-10 w-10 rounded-[var(--radius-md)] bg-cobalt-50 flex items-center justify-center mb-[var(--spacing-4)]">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/* ── How It Works ── */

const steps = [
  {
    step: "01",
    title: "Sign up your estate",
    description: "Create your estate profile, add blocks/streets, and invite your management team. Takes under 10 minutes.",
  },
  {
    step: "02",
    title: "Onboard residents and guards",
    description: "Residents download the app and join with an estate code. Guards get their own interface with patrol routes pre-configured.",
  },
  {
    step: "03",
    title: "Go live at the gate",
    description: "Visitors get QR codes, guards scan to verify, and every entry is logged automatically. Your estate security just got an audit trail.",
  },
];

function HowItWorks() {
  return (
    <Section className="bg-neutral-0">
      <SectionHeader
        eyebrow="How It Works"
        title="Live in three steps. Not three months."
        description="No hardware installation required for the basic setup. Connect your gate infrastructure later if you want NFC and plate recognition."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-6)]">
        {steps.map((step, i) => (
          <Animate key={step.step} variant="fadeUp" delay={i * 0.15}>
            <div className="relative">
              <span className="text-6xl font-bold text-cobalt-100 font-[family-name:var(--font-display)] leading-none">
                {step.step}
              </span>
              <h3 className="text-base font-semibold text-text-primary mt-[var(--spacing-3)] mb-[var(--spacing-2)]">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </Animate>
        ))}
      </div>
    </Section>
  );
}

/* ── Mobile App ── */

function MobileAppSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-8)] items-center">
        <Animate variant="slideInLeft">
          <div>
            <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
              Mobile First
            </p>
            <h2 className="display-h2 text-text-primary mb-[var(--spacing-4)]">
              In every pocket at the gate.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-[var(--spacing-6)]">
              Residents pre-register visitors and share QR codes from their phone.
              Guards scan and verify without paperwork. Estate managers see real-time
              dashboards from anywhere. Available on iOS and Android.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="md">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                App Store
              </Button>
              <Button variant="primary" size="md">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.54c-.37-.73-.55-1.52-.55-2.37V2.83c0-.85.18-1.64.55-2.37L14.25 12 3.18 23.54zm1.52 1.1L17.15 13.6l-2.67-2.67L4.7 24.64zm16.33-11.41c.42.26.7.62.83 1.07.13.45.1.89-.1 1.32-.2.43-.52.73-.97.89L17.91 18l-3.16-3.16 6.28-1.61zM4.7-.64L14.48 13.07l2.67-2.67L4.7-.64z" /></svg>
                Play Store
              </Button>
            </div>
          </div>
        </Animate>

        <Animate variant="slideInRight" delay={0.15}>
          <div className="flex justify-center gap-4">
            {/* Phone mockup placeholders */}
            <div className="w-48 h-96 rounded-3xl bg-gradient-to-b from-cobalt-100 to-cobalt-200 border-2 border-cobalt-200 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <svg className="h-10 w-10 text-cobalt-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <p className="text-xs text-cobalt-600 font-medium">Resident App</p>
              </div>
            </div>
            <div className="w-48 h-96 rounded-3xl bg-gradient-to-b from-neutral-100 to-neutral-200 border-2 border-neutral-200 shadow-xl flex items-center justify-center mt-8">
              <div className="text-center">
                <svg className="h-10 w-10 text-neutral-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="text-xs text-neutral-600 font-medium">Guard App</p>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </Section>
  );
}

/* ── Pricing ── */

function PricingSection() {
  return (
    <Section className="bg-neutral-0">
      <SectionHeader
        eyebrow="Pricing"
        title="Transparent. In Naira. No surprises."
        description="Every plan includes mobile apps for residents and guards, email support, and a 14-day free trial. Cancel anytime."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-5)]">
        {ESTATE_PRICING.map((plan, i) => (
          <Animate key={plan.name} variant="fadeUp" delay={i * 0.1}>
            <div
              className={cn(
                "relative flex flex-col bg-bg-surface rounded-[var(--radius-lg)] border p-[var(--spacing-6)]",
                plan.popular
                  ? "border-action-primary shadow-lg shadow-cobalt-100 ring-1 ring-action-primary"
                  : "border-border-default"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-action-primary text-text-inverse text-xs font-semibold px-3 py-1 rounded-[var(--radius-pill)]">
                  Most popular
                </span>
              )}

              <div className="mb-[var(--spacing-5)]">
                <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-text-muted">&#x20A6;</span>
                  )}
                  <span className="text-3xl font-bold text-text-primary font-[family-name:var(--font-display)]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-text-muted">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mt-[var(--spacing-2)] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-[var(--spacing-6)] flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="h-4 w-4 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "accent" : "outline"}
                size="md"
                href={plan.cta === "Contact sales" ? "/contact" : SITE_CONFIG.demoUrl}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </Animate>
        ))}
      </div>
    </Section>
  );
}

/* ── Estate CTA ── */

function EstateCTA() {
  return (
    <Section>
      <Animate variant="scaleIn">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-cobalt-600 to-cobalt-800 px-[var(--spacing-6)] py-[var(--spacing-8)] md:px-[var(--spacing-9)] md:py-[var(--spacing-9)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cobalt-500/20 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-6)] items-center">
            <div>
              <h2 className="display-h2 text-neutral-0 mb-[var(--spacing-4)]">
                Your estate is still using a paper logbook?
              </h2>
              <p className="text-lg text-cobalt-200 mb-[var(--spacing-6)]">
                Book a 20-minute walkthrough. We will set up your estate profile
                live and show you the product with your actual data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" href={SITE_CONFIG.demoUrl}>
                  Book a demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cobalt-400 text-neutral-0 hover:bg-cobalt-700 hover:border-cobalt-300"
                >
                  Call us: +234 XXX XXX XXXX
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-64 h-64 rounded-full bg-cobalt-500/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-cobalt-500/20 flex items-center justify-center">
                  <svg className="h-16 w-16 text-cobalt-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animate>
    </Section>
  );
}
