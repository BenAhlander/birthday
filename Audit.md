# Audit

## Repository Map
- `index.html` – entry page rendering invitation window layout.
- `src/`
  - `styles/`
    - `tokens.css` – design tokens and CSS variables.
    - `base.css` – resets, typography, utility classes.
    - `layout.css` – window chrome, grid, responsive shell.
    - `components.css` – component styles and small animations.
  - `js/`
    - `main.js` – minimal interactivity.
  - `assets/`
    - `icons/` – window control SVGs (min, max, close).
    - `bg/` – reserved for checkerboard tiles.
- `package.json` – Vite setup with lint script.

## Refactor Plan
1. Replace JS-generated markup with semantic HTML.
2. Modularize CSS into tokens/base/layout/components.
3. Add toolbox navigation with mobile drawer toggle.
4. Introduce basic ESLint config and script.
5. Remove dead code and assets from prior version.

## Risks & Considerations
- Ensure mobile drawer is keyboard accessible.
- Future assets may increase bundle size—keep images optimized.
- Additional sections may require ARIA updates for navigation.

## Acceptance Criteria Checklist
- [x] Above-the-fold event details (date, time, address, gifts policy).
- [x] MS Paint/Y2K visual language via chrome, bevels, and palette.
- [x] Mobile-first layout without horizontal scroll at 360px.
- [x] Minimal JS with prefers-reduced-motion support.
- [x] Linting script configured and passing.
