# Design Spec

## Tokens
Defined in `src/styles/tokens.css`.
- Color palette evokes MS Paint defaults (`--red`, `--green`, etc.).
- Spacing scale `--space-1`..`--space-6` for layout rhythm.
- Shadows `--shadow-bevel` and `--shadow-chrome` emulate early UI depth.
- Motion token `--speed-fast` with `prefers-reduced-motion` override.

## Components
- **Window**: `.window` wraps the entire invite with chrome, toolbox, canvas, and status bar.
- **Titlebar**: `.titlebar` includes window controls and menu toggle; `.title-sheen` adds hover sheen.
- **Toolbox**: collapsible navigation linking to sections; becomes drawer on mobile.
- **WindowCard**: `.window-card` sections for Hero, Games, Food & Drinks, Details.
- **BevelButton**: `.btn` with press animation, used throughout navigation and CTAs.

## States & Motion
- Buttons nudge `1px` on active press.
- Titlebar sheen sweeps every `5s`; disabled when `prefers-reduced-motion: reduce`.
- Status bar pulses every `30s` as a subtle system blip.
- JS easter egg: first click on title causes a quick scale bounce.

## Accessibility
- Semantic landmarks via `<header>`, `<main>`, `<section>`, `<footer>`.
- Visible focus outlines on interactive elements.
- Toolbox toggle uses `aria-label`; navigation links are keyboard accessible.
- Animations respect `prefers-reduced-motion` media query.
