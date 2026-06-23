# Design System — Optimity

> "Engineered Editorial." Created by /design-consultation, 2026-06-22.
> Preview: `~/.gstack/projects/Optimity_Website_Rebuild/designs/design-system-20260622/preview.html`

## Product Context
- **What this is:** Marketing site (3 pages) for Optimity, an operations-first AI consulting firm. Its job is to book "The Operations Teardown."
- **Who it's for:** Non-technical SME / mid-market operations leaders. Skeptical, fatigued by AI decks. Global audience (India / USA / UAE footprint).
- **Space:** AI consulting / operations & ERP intelligence. Adjacencies studied: Mechanical Orchard, Palantir, Sierra.
- **Project type:** Marketing site.
- **The one memorable thing:** *"These people actually ship."* Read as substance and restraint legible to an operator — engineered confidence, NOT a developer/hacker aesthetic. Every design choice serves this.

## Core Design Move (non-negotiable)
The hero is a **real, legible Operations Teardown artifact**, never abstract imagery or stock photos of people. The product screenshot IS the brand. Rationale: the firm's thesis is "live systems, not slideware"; the research showed the one competitor who shows the actual working software (Palantir) reads as far more credible than those who show abstract renders (Mechanical Orchard) or hide the product behind people (Sierra). Show the system.

## Aesthetic Direction
- **Direction:** Engineered Editorial — proof-forward precision (Palantir) + editorial serif warmth (Mechanical Orchard), but warmer and more human than either, because the buyer is an SME operator, not a defense department.
- **Decoration level:** minimal-to-intentional. The decoration is the working-software artifacts themselves, not ornament. Hairline rules, structure cues. No blobs, no gradients.
- **Mood:** calm, expensive restraint; rigor a non-technical operator finds trustworthy.

## Typography
- **Display/Hero:** Fraunces (variable, opsz) — warm, optically precise serif. Weights 400/500/600.
- **Body / UI:** Geist — engineered, highly legible. Weights 400/500/600.
- **Data/Tables:** Geist with `tabular-nums`.
- **Technical labels:** Geist Mono — **seasoning only.** Tiny uppercase system tags ("ERP · NetSuite"), eyebrows, metadata. Never body, never a full section. This is how "engineered" reads without "hacker."
- **Loading:** Google Fonts — `Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600` + `Geist:wght@400;500;600` + `Geist+Mono:wght@400;500`.
- **Scale (rem):** display clamp(2.6–4.6); h2 clamp(1.8–2.7); h3 1.3; body 1.0625 (17px); small 0.92; mono-label 0.72 (uppercase, letter-spacing .08em). Headlines letter-spacing -0.015em, line-height ~1.08.

## Color
- **Approach:** restrained warm-monochrome + ONE semantic accent.
- **Ink (text):** `#14110E` (warm near-black)
- **Paper (bg):** `#F5F1EA` (warm off-white — paper, not stark white)
- **Surface (cards):** `#FBF8F2`
- **Muted text:** `#6B6256` (warm gray)
- **Hairline:** `#DED7CB`
- **Accent:** `#B8550F` (deep amber) — **semantic, not decorative.** Used ONLY to mark "where AI changes an outcome" (intervention points), the primary CTA, and rare emphasis. Dodges the AI-green cliché and forbidden purple. Accent tint `#F3E2D2`.
- **Semantic:** success `#2E7D54`, error `#B23A2E`, info `#3A5A8C`.
- **Dark mode:** invert to warm near-black paper `#14110E`, ink `#F2ECE2`, surface `#1D1915`, hairline `#322B23`, muted `#A89D8C`, accent brightens to `#E0853A`. Light is the default; dark is offered.

## Spacing
- **Base unit:** 8px.
- **Density:** spacious-editorial sections wrapping dense, legible data zones. The contrast (calm around tight tabular data) expresses "clarity on top of complexity."
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64).

## Layout
- **Approach:** disciplined grid with editorial moments. Left-aligned, structured, document-like. Not centered-everything.
- **Max content width:** 1180px. Gutters 32px.
- **Hero:** two-column on desktop (copy left, artifact right), stacks on mobile.
- **Border radius:** sm 4px (tags, inputs), md 6px (buttons), lg 10–12px (cards/artifact). No bubble-radius-everything.

## Motion
- **Approach:** minimal-functional. Fast, precise, no choreography.
- **Easing:** enter ease-out, exit ease-in, move ease-in-out.
- **Duration:** micro 50–100ms, short 150–250ms, medium 250–400ms.
- **Optional signature:** the teardown artifact subtly resolving/assembling on load. Keep restrained.

## Content Integrity (enforced — a design rule, not a suggestion)
This rule is load-bearing for the firm's positioning and survives every redesign:
- **No invented proof.** Never render client names, logos, or numbers that aren't real and permissioned — not even as placeholder/filler. An empty proof slot is acceptable; a fake one is not.
- **Sample artifacts must be labeled.** Any illustrative teardown shown in marketing carries a visible "sample · illustrative" / "composite example" marker and uses an obviously-fictional composite company (never a real or known-demo name — e.g. avoid "Northwind", which is a known sample-database name).
- **Anonymized-by-default proof.** Real teardown proof is published fully anonymized (sector-only, ranges) unless a client grants named permission. (Ties to the CEO plan's proof-capture loop.)
- **Live systems over slideware.** Favor real working-software screenshots over decorative imagery everywhere, not just the hero.

## Anti-slop guardrails (do NOT introduce)
Purple/violet gradients · 3-column icon-in-circle feature grids · centered-everything · uniform bubble radius · gradient CTA buttons · stock-photo hero · system-ui/Inter/Space Grotesk as display or body · abstract render as hero (the Mechanical Orchard trap) · "Built for X" filler copy.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-22 | Initial system "Engineered Editorial" created | Research of Mechanical Orchard / Palantir / Sierra + memorable thing "these people actually ship, legible to an operator" |
| 2026-06-22 | Hero = real teardown artifact, not imagery | Eureka: Palantir's show-the-product approach reads most credible; on-thesis with "live systems not slideware" |
| 2026-06-22 | Amber `#B8550F` accent, semantic-only | Dodges AI-green/purple clichés; color marks AI intervention points so it carries meaning |
| 2026-06-22 | Content Integrity section added | User caught fake proof + a known demo-DB name in the preview; rule encoded so builds can't reintroduce invented proof |
