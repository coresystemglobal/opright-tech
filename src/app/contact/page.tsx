"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Animate, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactOptionsSection />
      <CalEmbedSection />
      <FAQSection />
    </>
  );
}

/* ── Hero ── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-[var(--spacing-6)] md:pt-40 md:pb-[var(--spacing-7)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cobalt-50/60 via-bg-page to-bg-page" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-cobalt-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
        <div className="max-w-2xl mx-auto text-center">
          <Animate variant="fadeUp">
            <p className="eyebrow text-action-primary mb-[var(--spacing-4)]">
              Contact
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="display-h1 text-text-primary mb-[var(--spacing-5)]">
              Let&apos;s talk about what you{" "}
              <span className="text-action-primary">need</span>.
            </h1>
          </Animate>

          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              Book a demo to see the product with your own data, or reach out
              directly if you have questions. We respond within one business day.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Options ── */

const contactMethods = [
  {
    title: "Book a demo",
    description:
      "20-minute walkthrough with your estate data, school setup, or use case. No generic slides.",
    icon: (
      <svg
        className="h-6 w-6 text-action-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
    action: "Book a time",
    href: SITE_CONFIG.demoUrl,
    accent: true,
  },
  {
    title: "Send us an email",
    description:
      "For partnership inquiries, enterprise pricing, custom integration questions, or anything else.",
    icon: (
      <svg
        className="h-6 w-6 text-action-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    action: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    accent: false,
  },
  {
    title: "Visit our office",
    description:
      "We are based in Lagos, Nigeria. Schedule a visit if you prefer to meet in person.",
    icon: (
      <svg
        className="h-6 w-6 text-action-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    action: "Lagos, Nigeria",
    href: null,
    accent: false,
  },
];

function ContactOptionsSection() {
  return (
    <Section>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-5)]">
        {contactMethods.map((method) => (
          <StaggerItem key={method.title}>
            <div className="relative p-[var(--spacing-5)] rounded-[var(--radius-lg)] border border-border-default bg-bg-surface h-full flex flex-col">
              <div className="h-12 w-12 rounded-[var(--radius-lg)] bg-cobalt-50 flex items-center justify-center mb-[var(--spacing-4)]">
                {method.icon}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                {method.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-[var(--spacing-5)] flex-1">
                {method.description}
              </p>
              {method.href ? (
                <Button
                  variant={method.accent ? "accent" : "outline"}
                  size="sm"
                  href={method.href}
                >
                  {method.action}
                </Button>
              ) : (
                <p className="text-sm font-medium text-text-primary">
                  {method.action}
                </p>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/* ── Cal.com Embed ── */

function CalEmbedSection() {
  return (
    <Section className="bg-neutral-0">
      <div className="max-w-3xl mx-auto text-center mb-[var(--spacing-7)]">
        <Animate variant="fadeUp">
          <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
            Schedule a demo
          </p>
          <h2 className="display-h2 text-text-primary mb-[var(--spacing-4)]">
            Pick a time that works for you.
          </h2>
          <p className="text-text-secondary leading-relaxed">
            We will walk you through the product using your own setup. Bring
            your estate layout, school structure, or logistics flow, and we
            will show you exactly how Opright Technologies handles it.
          </p>
        </Animate>
      </div>

      <Animate variant="fadeUp" delay={0.1}>
        <div className="max-w-4xl mx-auto rounded-[var(--radius-lg)] border border-border-default bg-bg-surface overflow-hidden shadow-sm">
          <iframe
            src="https://cal.com/opright?embed=true&theme=light"
            className="w-full border-0"
            style={{ height: "680px", minHeight: "500px" }}
            title="Book a demo with Opright Technologies"
            loading="lazy"
          />
        </div>
      </Animate>
    </Section>
  );
}

/* ── FAQ ── */

const faqs = [
  {
    question: "How long is the demo?",
    answer:
      "20 minutes. We will use your actual estate or school data (or sample data that mirrors your setup) so you see exactly how Opright Technologies products works in your context, not a generic walkthrough.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No. But if you want the demo to mirror your setup, share details like the number of units in your estate, student count, or fleet size when booking. We will configure the demo accordingly.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Opright Estate offers a free trial on all plans. Opright Schools is currently in beta with free access for early adopters. Health and Logistics are in development; you can join their waitlists.",
  },
  {
    question: "What if I manage multiple verticals?",
    answer:
      "That is exactly what the Opright Technologies platform is designed for. One login, one bill, one support team. If you run estates and a school, you get a unified dashboard without needing separate vendors.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your data is stored securely with NDPA 2023 compliant handling. We use industry-standard encryption at rest and in transit. Data belongs to you, and we never sell or share it with third parties.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Every plan is billed monthly and cancellable anytime. No lock-in contracts. If you cancel, your data is available for export for 30 days before deletion.",
  },
];

function FAQSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <Animate variant="fadeUp">
          <div className="text-center mb-[var(--spacing-7)]">
            <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
              FAQ
            </p>
            <h2 className="display-h2 text-text-primary">
              Common questions, straight answers.
            </h2>
          </div>
        </Animate>

        <StaggerContainer className="divide-y divide-border-default">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <div className="py-[var(--spacing-5)]">
                <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Animate variant="fadeUp" delay={0.2}>
          <div className="mt-[var(--spacing-7)] text-center p-[var(--spacing-5)] rounded-[var(--radius-lg)] bg-cobalt-50">
            <p className="text-sm text-text-secondary mb-[var(--spacing-3)]">
              Have a question not covered here?
            </p>
            <Button
              variant="primary"
              size="sm"
              href={`mailto:${SITE_CONFIG.email}`}
            >
              Email us at {SITE_CONFIG.email}
            </Button>
          </div>
        </Animate>
      </div>
    </Section>
  );
}
