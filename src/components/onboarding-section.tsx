"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { SITE_CONFIG } from "@/lib/constants";

const tracks = [
  {
    title: "Business onboarding",
    description:
      "We set up your organisation the way it actually runs: your structure, users and roles, pricing and billing in Naira, and the records you are bringing over.",
    points: [
      "Account and organisation setup",
      "Users, roles, and permissions",
      "Billing and payment configuration",
    ],
    icon: (
      <svg className="h-5 w-5 text-action-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Operational onboarding",
    description:
      "We work with the people who use the product every day, so your team is confident from the first day live, not three weeks in.",
    points: [
      "Hands-on training for your staff",
      "Workflows mapped to your daily operations",
      "Go-live support from our team",
    ],
    icon: (
      <svg className="h-5 w-5 text-action-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export function OnboardingSection({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <SectionHeader
        eyebrow="Free onboarding"
        title="We set you up. On us."
        description={`Every ${SITE_CONFIG.name} platform and product comes with free onboarding, covering both the business and operational side, so your rollout is smooth from day one.`}
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-5)] max-w-5xl mx-auto">
        {tracks.map((track) => (
          <StaggerItem key={track.title}>
            <Card className="h-full">
              <div className="h-10 w-10 rounded-[var(--radius-md)] bg-cobalt-50 flex items-center justify-center mb-[var(--spacing-4)]">
                {track.icon}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-[var(--spacing-2)]">
                {track.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-[var(--spacing-4)]">
                {track.description}
              </p>
              <ul className="space-y-2.5">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="h-4 w-4 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
