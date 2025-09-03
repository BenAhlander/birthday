# Audit

## Repository Map
- `index.html` – invitation markup and sections.
- `src/`
  - `styles/`
    - `tokens.css` – Y2K palette, spacing, and motion tokens.
    - `base.css` – resets, large typography scale, utilities.
    - `components.css` – window chrome, cards, buttons, and animations.
  - `js/`
    - `main.js` – menu toggle and tiny title bounce.
  - `assets/`
    - `icons/` – window control SVGs (min, max, close).
- `package.json` – Vite setup with lint script.

## Refactor Plan
1. Replace JS-generated markup with semantic HTML.
2. Modularize CSS into tokens/base/components.
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

## Customizing
- **Colors & spacing** – edit CSS variables in `src/styles/tokens.css`.
- **Animations** – adjust timing tokens in `tokens.css` or keyframes in `components.css`; all respect `prefers-reduced-motion`.
