"use client";

import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Animate, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PRODUCTS, SITE_CONFIG } from "@/lib/constants";
import { StatusBadge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <PrinciplesSection />
      <ProductOverviewSection />
      <TimelineSection />
      <CTASection />
    </>
  );
}

/* ── Hero ── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-[var(--spacing-8)] md:pt-40 md:pb-[var(--spacing-9)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt-50/60 via-bg-page to-bg-page" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-cobalt-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
        <div className="max-w-3xl">
          <Animate variant="fadeUp">
            <p className="eyebrow text-action-primary mb-[var(--spacing-4)]">
              About Opright
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="display-h1 text-text-primary mb-[var(--spacing-5)]">
              We build the software Africa&apos;s businesses{" "}
              <span className="text-action-primary">should have had</span>{" "}
              years ago.
            </h1>
          </Animate>

          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Opright Technologies is the product brand of Core System Global
              Limited. We build enterprise software for estate management, school
              administration, healthcare, and logistics, all designed for how
              Nigerian businesses actually operate.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
}

/* ── Mission ── */

function MissionSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-7)] items-start">
        <Animate variant="slideInLeft">
          <div>
            <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
              The problem
            </p>
            <h2 className="display-h2 text-text-primary mb-[var(--spacing-4)]">
              Most enterprise software ignores how Africa works.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Estate managers track visitors in exercise books. Schools bill fees
              with WhatsApp messages and bank transfers. Hospitals run patient
              records on paper folders. Logistics companies dispatch drivers by
              phone call and hope for the best.
            </p>
            <p className="text-text-secondary leading-relaxed mt-[var(--spacing-4)]">
              The tools that exist are either too expensive (dollar-denominated
              SaaS from abroad), too generic (built for contexts nothing like
              ours), or too fragile (one-person projects that disappear after
              six months).
            </p>
          </div>
        </Animate>

        <Animate variant="slideInRight">
          <div>
            <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
              Our approach
            </p>
            <h2 className="display-h2 text-text-primary mb-[var(--spacing-4)]">
              Software that fits the infrastructure it runs on.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We build for estate gates that lose power, phone networks that
              drop, and users who switch between data and Wi-Fi mid-session.
              Every product handles Naira billing natively, supports Nigerian
              phone number formats, and works on the devices people actually use.
            </p>
            <p className="text-text-secondary leading-relaxed mt-[var(--spacing-4)]">
              We are not adapting foreign products for Nigeria. We are building
              from scratch, informed by how things work on the ground, with the
              goal of making each vertical operationally self-sufficient through
              software.
            </p>
          </div>
        </Animate>
      </div>
    </Section>
  );
}

/* ── Principles ── */

const principles = [
  {
    number: "01",
    title: "Ship for the context, not the pitch deck",
    description:
      "Every feature we build starts with the reality on the ground. If estate guards cannot read English, the interface works with icons and color codes. If schools bill per term, we bill per term. Context is not a constraint; it is the specification.",
  },
  {
    number: "02",
    title: "Price in Naira, bill transparently",
    description:
      "No dollar-denominated surprises. No hidden fees. Every plan is priced in Naira, billed monthly, and cancellable anytime. We publish pricing on the website because we think you should see the cost before the sales call.",
  },
  {
    number: "03",
    title: "Own the data layer",
    description:
      "We handle estate access logs, student records, patient files, and delivery proof. We take NDPA 2023 compliance seriously because trust is earned, not declared. Data belongs to our customers, and we architect systems that make that real.",
  },
  {
    number: "04",
    title: "Build verticals, not features",
    description:
      "Each product is purpose-built for its industry. Opright Estate is not a generic property tool with an access control plugin. Opright Schools is not a CRM with a gradebook view. Deep vertical knowledge produces software that works without workarounds.",
  },
  {
    number: "05",
    title: "Shared infrastructure, independent products",
    description:
      "Authentication, billing, notifications, and analytics run on shared infrastructure across all verticals. That means one login for a facility management company running estates and schools, without any product making compromises for another.",
  },
  {
    number: "06",
    title: "Prove it with numbers",
    description:
      "We prefer concrete metrics over adjectives. Instead of saying our product is fast, we will tell you the median response time. Instead of claiming affordability, we publish the price. Specificity builds credibility; vagueness erodes it.",
  },
];

function PrinciplesSection() {
  return (
    <Section className="bg-neutral-0">
      <SectionHeader
        eyebrow="How we work"
        title="Six principles that guide every product decision."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-6)]">
        {principles.map((principle) => (
          <StaggerItem key={principle.number}>
            <div className="relative">
              <span className="text-5xl font-bold text-cobalt-100 font-[family-name:var(--font-display)] select-none">
                {principle.number}
              </span>
              <h3 className="text-base font-semibold text-text-primary mt-[var(--spacing-2)] mb-[var(--spacing-3)]">
                {principle.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/* ── Product Overview ── */

function ProductOverviewSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our products"
        title="Four verticals. One platform."
        description="Each product targets a specific industry vertical in the Nigerian market. They share infrastructure; they do not share compromises."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-5)]">
        {PRODUCTS.map((product) => (
          <StaggerItem key={product.slug}>
            <Link href={product.href} className="block group">
              <div className="relative p-[var(--spacing-5)] rounded-[var(--radius-lg)] border border-border-default bg-bg-surface hover:border-border-strong hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-[var(--spacing-3)]">
                  <div className="h-9 w-9 rounded-[var(--radius-md)] bg-cobalt-50 flex items-center justify-center shrink-0">
                    <ProductIcon name={product.icon} />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-action-primary transition-colors">
                      {product.name}
                    </h3>
                    <StatusBadge status={product.status} />
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-[var(--spacing-4)]">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-action-primary group-hover:gap-2.5 transition-all">
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/* ── Timeline ── */

const milestones = [
  {
    period: "2024",
    title: "Foundation",
    description:
      "Core System Global Limited incorporated in Lagos. Product research and architecture design begins across all four verticals.",
  },
  {
    period: "2025",
    title: "Opright Estate launches",
    description:
      "First product goes live with visitor management, gate access control, service charge billing, and resident mobile app. Targeting Lagos estates and gated communities.",
  },
  {
    period: "2025",
    title: "Opright Schools enters beta",
    description:
      "Student enrollment, attendance, gradebook, fee collection, and CBT exam management. Early-access schools begin onboarding.",
  },
  {
    period: "2026",
    title: "Health and Logistics",
    description:
      "Opright Health and Opright Logistics enter development. Waitlists open for healthcare providers and logistics operators.",
  },
];

function TimelineSection() {
  return (
    <Section className="bg-neutral-0">
      <SectionHeader
        eyebrow="Timeline"
        title="Where we are and where we are going."
      />

      <div className="max-w-2xl mx-auto">
        {milestones.map((milestone, i) => (
          <Animate key={i} variant="fadeUp" delay={i * 0.1}>
            <div className="relative flex gap-[var(--spacing-5)] pb-[var(--spacing-7)] last:pb-0">
              {/* Vertical connector */}
              <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-action-primary shrink-0 mt-1.5" />
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 bg-border-default mt-2" />
                )}
              </div>

              <div className="pb-[var(--spacing-2)]">
                <span className="text-xs font-semibold text-action-primary uppercase tracking-wider">
                  {milestone.period}
                </span>
                <h3 className="text-base font-semibold text-text-primary mt-1 mb-[var(--spacing-2)]">
                  {milestone.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </Section>
  );
}

/* ── CTA ── */

function CTASection() {
  return (
    <Section id="careers">
      <Animate variant="scaleIn">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-cobalt-600 to-cobalt-800 px-[var(--spacing-6)] py-[var(--spacing-8)] md:px-[var(--spacing-9)] md:py-[var(--spacing-9)] text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cobalt-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="display-h2 text-neutral-0 mb-[var(--spacing-4)]">
              Want to build with us?
            </h2>
            <p className="text-lg text-cobalt-200 mb-[var(--spacing-6)] max-w-xl mx-auto">
              We are always looking for engineers, designers, and operators who
              care about building useful software for African businesses. If that
              sounds like you, reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" href="/contact">
                Get in touch
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`mailto:${SITE_CONFIG.email}`}
                className="border-cobalt-400 text-neutral-0 hover:bg-cobalt-700 hover:border-cobalt-300"
              >
                {SITE_CONFIG.email}
              </Button>
            </div>
          </div>
        </div>
      </Animate>
    </Section>
  );
}

/* ── Product Icon (inline SVG) ── */

function ProductIcon({ name }: { name: string }) {
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
