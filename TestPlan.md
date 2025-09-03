# Test Plan

## Manual QA
- [ ] Load page on mobile (360px) and ensure no horizontal scroll.
- [ ] Verify titlebar controls and toolbox buttons are reachable via keyboard.
- [ ] Toggle menu with the hamburger on small screens; toolbox should slide in/out.
- [ ] Confirm RSVP links open mail client with subject prefilled.
- [ ] Ensure sections are navigable via toolbox links.
- [ ] Check focus outline visibility on buttons and links.
- [ ] Confirm animations stop when `prefers-reduced-motion` is enabled.

## Performance Notes
- Run `npm run build` to produce optimized bundle.
- Use Lighthouse mobile audit aiming for ≥90 scores across Performance, Accessibility, Best Practices, and SEO.
