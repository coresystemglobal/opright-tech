"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-surface/95 backdrop-blur-md border-b border-border-default shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-8 w-8 rounded-[var(--radius-md)] bg-action-primary flex items-center justify-center">
              <span className="text-text-inverse font-bold text-sm font-[family-name:var(--font-display)]">
                O
              </span>
            </div>
            <span className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary">
              Opright Technologies
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors",
                  "text-text-secondary hover:text-text-primary hover:bg-neutral-100"
                )}
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
              >
                Products
                <svg
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    productsOpen && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-1 w-80 bg-bg-surface rounded-[var(--radius-lg)] border border-border-default shadow-xl p-2"
                  >
                    {PRODUCTS.map((product) => (
                      <Link
                        key={product.slug}
                        href={product.href}
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-[var(--radius-md)] transition-colors",
                          "hover:bg-neutral-50",
                          pathname === product.href && "bg-cobalt-50"
                        )}
                      >
                        <div className="mt-0.5 h-8 w-8 rounded-[var(--radius-md)] bg-cobalt-50 flex items-center justify-center shrink-0">
                          <ProductIcon name={product.icon} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-text-primary">
                              {product.name}
                            </span>
                            <StatusBadge status={product.status} />
                          </div>
                          <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                            {product.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors",
                pathname === "/about"
                  ? "text-action-primary bg-cobalt-50"
                  : "text-text-secondary hover:text-text-primary hover:bg-neutral-100"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors",
                pathname === "/contact"
                  ? "text-action-primary bg-cobalt-50"
                  : "text-text-secondary hover:text-text-primary hover:bg-neutral-100"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href={SITE_CONFIG.demoUrl}>
              Book a demo
            </Button>
            <Button variant="accent" size="sm" href="/estate">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-[var(--radius-md)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-bg-surface border-t border-border-default"
          >
            <div className="px-[var(--spacing-4)] py-[var(--spacing-5)] space-y-1">
              <p className="eyebrow text-text-muted px-3 mb-2">Products</p>
              {PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  href={product.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)] text-sm text-text-primary hover:bg-neutral-50"
                >
                  <div className="h-7 w-7 rounded-[var(--radius-sm)] bg-cobalt-50 flex items-center justify-center shrink-0">
                    <ProductIcon name={product.icon} size={14} />
                  </div>
                  <span className="font-medium">{product.name}</span>
                  <StatusBadge status={product.status} className="ml-auto" />
                </Link>
              ))}
              <div className="border-t border-border-default my-3" />
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-[var(--radius-md)] text-sm font-medium text-text-primary hover:bg-neutral-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-[var(--radius-md)] text-sm font-medium text-text-primary hover:bg-neutral-50"
              >
                Contact
              </Link>
              <div className="border-t border-border-default my-3" />
              <div className="flex flex-col gap-2 px-3">
                <Button variant="outline" size="md" href={SITE_CONFIG.demoUrl}>
                  Book a demo
                </Button>
                <Button variant="accent" size="md" href="/estate">
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ProductIcon({ name, size = 16 }: { name: string; size?: number }) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-action-primary",
  };

  switch (name) {
    case "Shield":
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "GraduationCap":
      return (
        <svg {...iconProps}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "HeartPulse":
      return (
        <svg {...iconProps}>
          <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
          <path d="M12 6v4l2 2" />
        </svg>
      );
    case "Truck":
      return (
        <svg {...iconProps}>
          <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
}
