"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Animate, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
};

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

interface ProductPageProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  features: Feature[];
  pricing?: PricingPlan[];
  pricingNote?: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
  accentColor: string;
  accentBg: string;
}

export function ProductPageTemplate({
  eyebrow,
  title,
  titleAccent,
  description,
  status,
  features,
  pricing,
  pricingNote,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
  accentColor,
  accentBg,
}: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-[var(--spacing-8)] md:pt-40 md:pb-[var(--spacing-9)]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-cobalt-50/60 via-bg-page to-bg-page" />
        </div>

        <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
          <div className="max-w-3xl">
            <Animate variant="fadeUp">
              <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
                {eyebrow}
              </p>
            </Animate>
            <Animate variant="fadeUp" delay={0.1}>
              <h1 className="display-h1 text-text-primary mb-[var(--spacing-5)]">
                {title}{" "}
                <span className="text-action-primary">{titleAccent}</span>
              </h1>
            </Animate>
            <Animate variant="fadeUp" delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed mb-[var(--spacing-6)]">
                {description}
              </p>
            </Animate>
            <Animate variant="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                {status === "coming-soon" ? (
                  <Button variant="accent" size="lg" href={ctaHref}>
                    Join the waitlist
                  </Button>
                ) : (
                  <>
                    <Button variant="accent" size="lg" href={ctaHref}>
                      {status === "beta" ? "Join the beta" : "Start free trial"}
                    </Button>
                    <Button variant="outline" size="lg" href={SITE_CONFIG.demoUrl}>
                      Book a demo
                    </Button>
                  </>
                )}
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionHeader
          eyebrow="Features"
          title="What you get."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-5)]">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card hover className="h-full">
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

      {/* Pricing (if provided) */}
      {pricing && (
        <Section className="bg-neutral-0">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, transparent pricing."
            description={pricingNote}
          />

          <div className={cn(
            "grid gap-[var(--spacing-5)]",
            pricing.length <= 3 ? "grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          )}>
            {pricing.map((plan, i) => (
              <Animate key={plan.name} variant="fadeUp" delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex flex-col bg-bg-surface rounded-[var(--radius-lg)] border p-[var(--spacing-6)]",
                    plan.popular
                      ? "border-action-primary shadow-lg ring-1 ring-action-primary"
                      : "border-border-default"
                  )}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-action-primary text-text-inverse text-xs font-semibold px-3 py-1 rounded-[var(--radius-pill)]">
                      Recommended
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-[var(--spacing-2)]">
                    {plan.price !== "Custom" && <span className="text-sm text-text-muted">&#x20A6;</span>}
                    <span className="text-3xl font-bold text-text-primary font-[family-name:var(--font-display)]">
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-sm text-text-muted">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-text-secondary mb-[var(--spacing-5)] leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-2.5 mb-[var(--spacing-6)] flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                        <svg className="h-4 w-4 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
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
      )}

      {/* CTA */}
      <Section>
        <Animate variant="scaleIn">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-cobalt-600 to-cobalt-800 px-[var(--spacing-6)] py-[var(--spacing-8)] md:px-[var(--spacing-9)] md:py-[var(--spacing-9)] text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cobalt-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="display-h2 text-neutral-0 mb-[var(--spacing-4)]">
                {ctaTitle}
              </h2>
              <p className="text-lg text-cobalt-200 mb-[var(--spacing-6)] max-w-xl mx-auto">
                {ctaDescription}
              </p>
              <Button variant="accent" size="lg" href={ctaHref}>
                {ctaLabel}
              </Button>
            </div>
          </div>
        </Animate>
      </Section>
    </>
  );
}
