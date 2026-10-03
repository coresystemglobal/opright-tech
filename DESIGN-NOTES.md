# Website review — findings and proposals

Review date: 2026-10-03. Reviewed by walking `/` and `/estate` in Chrome at 1440×900 and
390px against the source, on `next dev`.

**Status: not implemented.** The current design was signed off as-is. This file records what
was found and what was proposed, so it can be picked up later. Nothing here is in the
codebase except the copy corrections in §1, which were applied.

---

## 1. Applied already — cross-product login claim (factual correction)

The site claimed a unified cross-product login that does not exist. Reworded in six places
around what is actually true: each product is independent and scales on its own demand.

| File | Was | Now |
|---|---|---|
| `src/app/about/page.tsx` (principle 05) | "Shared infrastructure, independent products" / "one login for a facility management company" | "Independent products, one standard" |
| `src/app/about/page.tsx` (section header) | "Four verticals. One platform." | "Four verticals. Four products." |
| `src/app/contact/page.tsx` (FAQ) | "One login, one bill… a unified dashboard" | "independent rather than sitting behind a single shared account" |
| `src/app/page.tsx` (products intro) | "They share infrastructure" | "Each one runs independently" |
| `src/app/page.tsx` (reason card) | "One login, one bill" | "Independent, and built to scale" |

Two judgement calls: the **one-invoice** claim was dropped too, since consolidated billing is
the same class of cross-product plumbing as shared login — restore it if billing *is* actually
consolidated. **"One company, one support team"** was kept, as it is true of any single vendor.

---

## 2. Open bugs — not design, still live in the codebase

These were found during the review and are **not fixed**. They are independent of any visual
work and are worth doing regardless.

### 2.1 The demo booking link 404s — highest priority

`src/lib/constants.ts:10` sets `demoUrl: "https://cal.com/opright"`, which **returns 404**.
It is behind **14 CTAs** across every page — every "Book a demo", "Start free trial",
"Join the beta", "Join the waitlist", and every pricing button. The primary conversion action
on the site currently goes nowhere.

`src/app/contact/page.tsx:196` also hardcodes the same dead URL inside an `<iframe>`, so the
contact page renders a 404 booking widget.

**The working URL, supplied and verified 200:** `https://cal.com/opright-tech/demo`
(titled "Opright Demo meeting | Core System Global").

Fix: set it once in `constants.ts`. Keep the link URL and the `?embed=true` embed URL as two
separate values rather than reusing one string, since Cal.com needs the suffix only for the
iframe.

### 2.2 `/privacy` and `/terms` return 404

Both are linked from the footer on every page (`src/components/layout/footer.tsx:12-13`).
A dead Privacy Policy is a particular weak spot on a site whose pitch includes NDPA compliance.

Agreed resolution: scaffold `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` reusing
`Section`/`SectionHeader`, with headings, a "Last updated" line and a contact line pointing at
`SITE_CONFIG.email`. **No invented legal text** — leave body sections clearly marked for real
copy. Give each a `layout.tsx` with metadata matching the existing per-route pattern.

### 2.3 Opright Logistics is live but the site says "Coming Soon"

The product is live at **`https://logistics.opright.org`** (verified 200). In
`src/lib/constants.ts` it is still `status: "coming-soon"` with a "Join the waitlist" CTA.

Fix: status `live`, CTA "Visit Opright Logistics", link to the real site in a new tab.

**Domain mismatch to resolve first:** the live site is on **opright.org**, but `constants.ts`
declares `logistics.opright.co`, and `logistics.opright.co` does not resolve at all. Every
other reference in the codebase (`metadataBase`, all other subdomains) is `opright.co`.
Confirm whether the `.org`/`.co` split is intentional before wiring it in.

### 2.4 Footer RC number

`src/components/layout/footer.tsx` prints `RC Number: Pending`, which reads unfinished.
The real number is **9399829** — render `RC 9399829 · Lagos, Nigeria`.

### 2.5 Internal CTAs trigger full page reloads

`src/components/ui/button.tsx:44-50` renders a raw `<a href>` for every link, including
internal ones like `href="/estate"`. That bypasses the Next router and its prefetching, so
every CTA is a full document request instead of a client-side transition.

Fix: render `next/link` when `href` starts with `/`; keep `<a target="_blank" rel="noreferrer">`
for external URLs. See `node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md`.

### 2.6 No Open Graph image

`src/app/layout.tsx:47-52` declares `twitter: { card: "summary_large_image" }` with no image
anywhere, so shared links render an empty card. Add `src/app/opengraph-image.tsx` using the
file convention
(`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md`)
plus `opengraph-image.alt.txt`.

### 2.7 Smaller items

- `@next/font` is installed and deprecated; `layout.tsx` already uses `next/font/google`.
  `next dev` warns about it on every boot. Remove the dependency.
- `public/` still contains the unused Next.js starter SVGs (`next.svg`, `vercel.svg`,
  `file.svg`, `globe.svg`, `window.svg`).
- `src/app/page.tsx:39-42` has an empty `<p className="eyebrow">` with a commented-out label,
  reserving dead vertical space in the hero.

---

## 3. Rendering and motion defects

These are behavioural, not taste. Observed live, not inferred.

### 3.1 Whole sections render blank mid-scroll

`src/components/ui/animate.tsx` starts every wrapped block at `opacity: 0` and only reveals it
when `whileInView` fires. At normal scroll speed the Estate pricing grid, the "Live in three
steps" numbers, the stats band and the home CTA panel were each captured as **completely empty
voids**. The hero headline is also blank on first paint until JS hydrates and framer-motion
runs — and that headline is the LCP element.

The fix is to invert the default: render visible, and only apply the hidden state once JS has
confirmed motion will run. In the prototype this was one CSS rule —
`.js-motion [data-reveal] { opacity: 0 }` with `js-motion` added by script — and it removed the
problem entirely while keeping the animation for everyone who can see it.

### 3.2 The stagger is broken

In `StaggerItem` (`animate.tsx:96-111`) the child declares its own `transition` prop, which
**replaces** the `staggerChildren` timing inherited from `StaggerContainer`. Grids that should
cascade either pop at once or fall back to the cruder `delay={i * 0.1}` used elsewhere.

Fix: put the timing in the parent's `variants`
(`visible: { transition: { staggerChildren } }`) and remove the `transition` prop from the child.

### 3.3 No reduced-motion support anywhere

No `prefers-reduced-motion` handling in `globals.css` or `animate.tsx`, and
`html { scroll-behavior: smooth }` (`globals.css:184-186`) is unconditional. Users who ask the
OS to reduce motion get the full animation set regardless.

Fix: gate `scroll-behavior` behind `@media (prefers-reduced-motion: no-preference)`, add a
reduce block that collapses transitions, and use framer-motion's `useReducedMotion()` so
variants resolve to `opacity: 1` with no transform.

### 3.4 One animation for the entire site

Every section uses `fadeUp` y:24 / 0.5s. Seven sections, one gesture. Shorter and tighter
reads better: ~0.38s, `ease: [0.16, 1, 0.3, 1]`, `y: 12`, and
`viewport={{ once: true, margin: "-10% 0px" }}` so reveals finish before they are scrolled past.

### 3.5 Products dropdown has no keyboard support

`src/components/layout/navbar.tsx:58-128` opens on hover and toggles on click, but has no
Escape, no arrow-key navigation, no click-outside, and no `aria-controls`. It also closes
instantly on `mouseleave`, so the pointer cannot cross the gap to reach it.

A working version was prototyped: `↓`/`Enter` opens and focuses the first item, arrows rove and
wrap, `Home`/`End` jump, `Esc` closes and returns focus to the trigger, `Tab` or an outside
click closes, and hover close is delayed ~120ms.

---

## 4. Visual direction proposed (not implemented)

Direction was "refined evolution": keep cobalt and Sora/IBM Plex, raise the craft. A working
prototype of the home and Estate pages was built and reviewed before this was parked.

- **Tokens** — add a warm secondary ramp (amber/clay) used only for friendly accents (Beta
  badge, onboarding band, one stat, the hero underline), never for primary actions. Cobalt
  stays the spine, indigo stays the action accent. Add a second elevation step
  (`--shadow-card` / `--shadow-lift`) and `--radius-xl`, so cards have more than one depth.
- **Typography** — replace the fixed `display-h1/h2` sizes and their hard 52px→36px jump at
  768px with `clamp()`, plus `text-wrap: balance` on headings. Product-page headlines need one
  step smaller than the brand hero, or long titles wrap to five lines.
  Body prose moves from 14px to 15px.
- **Section rhythm** — the current page is four identical centred eyebrow/h2/description
  blocks. Proposed an asymmetric header (eyebrow + rule + index number, heading left,
  description right) and a `tone`/`size` prop on `Section` so vertical rhythm varies by weight
  instead of every section getting the same padding.
- **Hero** — two columns, copy left and a product mockup right, replacing the empty blurred
  blob. Fills the dead space and shows the product above the fold.
- **Products** — a bento grid with Estate leading (wider, with live KPIs) and the others
  secondary, instead of four identical cards each carrying one 20px icon.
- **Stat band** — currently a tall navy void holding four small numbers. Proposed a compact
  band with counters that animate in and resolve instantly under reduced motion.
- **Product imagery** — the biggest trust gap. Estate's "In every pocket at the gate" is
  currently two empty labelled rectangles. Proposed CSS/SVG mockups built from the design
  tokens: an estate dashboard, and resident + guard phone screens with a QR pass and live
  patrol states. No screenshots, no stock photography, near-zero weight.

### Prototype

Built at `/private/tmp/claude-501/.../scratchpad/preview/` (`index.html`, `estate.html`,
`mobile.html`, `comp.css`, `comp.js`) and served on `:4321`.

**That directory is session-scoped and will be cleared.** If the direction is ever revisited,
say so and it can be preserved into the repo first — otherwise it needs rebuilding from the
notes above.
