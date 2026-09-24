import Link from "next/link";
import { PRODUCTS, SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  Products: PRODUCTS.map((p) => ({ label: p.name, href: p.href })),
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about#careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-text-inverse">
      <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
        {/* Main footer */}
        <div className="py-[var(--spacing-8)] md:py-[var(--spacing-9)]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-[var(--spacing-4)]">
                <div className="h-8 w-8 rounded-[var(--radius-md)] bg-neutral-0 flex items-center justify-center">
                  <span className="text-action-primary font-bold text-sm font-[family-name:var(--font-display)]">
                    O
                  </span>
                </div>
                <span className="text-lg font-semibold font-[family-name:var(--font-display)] text-neutral-0">
                  Opright Technologies
                </span>
              </Link>
              <p className="text-sm text-text-inverse-muted leading-relaxed max-w-xs mb-[var(--spacing-5)]">
                Enterprise software built for how Africa actually works. Estate management,
                school administration, healthcare, and logistics.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm text-text-inverse-muted hover:text-neutral-0 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-neutral-0 mb-[var(--spacing-4)]">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-inverse-muted hover:text-neutral-0 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 py-[var(--spacing-5)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-inverse-muted">
            &copy; {new Date().getFullYear()} Core System Global Limited. All rights reserved.
          </p>
          <p className="text-xs text-text-inverse-muted">
            RC Number: Pending &middot; Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
