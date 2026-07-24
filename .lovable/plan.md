
## Goal
Lift Lighthouse Performance from 73 → 90+ without changing the design or content.

## Likely culprits (based on the current code)
- Google Fonts loaded as a render-blocking `<link rel="stylesheet">` in `__root.tsx` (both Instrument Serif and Inter, multiple weights). This delays FCP/LCP.
- Continuously-running animations that keep the main thread and compositor busy and hurt TBT/INP scores:
  - `marquee-track` (infinite 30s translate)
  - `gradient-animated` on hero headline + hero backdrop + accent panel (infinite background-position animation)
  - Two `float-slow` blurred blobs (`blur-3xl`, large radii) + SVG `float-slow`
- Heavy paint work: `blur-3xl` on 96/80-rem elements and `backdrop-blur` on the sticky header.
- Font sizing: importing Inter 400/500/600 + Instrument Serif italic + regular = larger font payload than needed.

## Changes

### 1. Fonts — non-blocking + trimmed
In `src/routes/__root.tsx`:
- Drop Inter 500 (only 400 + 600 are actually used); keep Instrument Serif regular only (drop italic — no `<em>`/italic serif usage that matters).
- Load the stylesheet non-blocking via `rel="preload" as="style"` + `onLoad` swap to `rel="stylesheet"`, plus a `<noscript>` fallback.
- Add `&display=swap` (already present) and keep the `preconnect` hints.

### 2. Reduce always-on animations
In `src/routes/index.tsx` / `src/styles.css`:
- Hero: remove the two `blur-3xl` floating blobs (or replace with a single static, smaller radial-gradient background — no animation, no blur filter).
- Hero headline: keep the gradient text but drop `gradient-animated` (static gradient).
- Hero right panel: drop `gradient-animated` from the accent background.
- Marquee: pause on `prefers-reduced-motion` (already covered) and pause when the section is off-screen using an IntersectionObserver toggle of `animation-play-state`. Also slow to 45s and hide from a11y tree (already `aria-label`, fine).
- SVG mountain `float-slow`: remove animation (keep static).

### 3. Sticky header paint
- Replace `backdrop-blur` with a solid `bg-background/95` (cheaper paint, same visual weight on this palette).

### 4. Reveal observer
- Keep `useReveal` but set `rootMargin` to `0px` and disconnect after first pass (already unobserves per-element — fine). No code change unless needed.

### 5. Meta/head hygiene (no perf impact but cheap)
- Add `<meta name="theme-color">` so mobile Lighthouse stops flagging it (small PWA-ish nudge, not required for 90+ but free).

## Out of scope
- No content/layout/section changes.
- No dark-mode changes.
- No new dependencies.

## Verification
After edits, run a production build and re-run Lighthouse (mobile) on the published URL. Target: Performance ≥ 90, Accessibility unchanged (still ≥ 90).
