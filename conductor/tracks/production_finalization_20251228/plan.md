# Implementation Plan: Final Production Deployment (December 2025 Update)

## Phase 1: Foundation, SEO & Asset Optimization
- [x] Task: Convert primary hero and menu images to `.webp` format and update references in code.
- [x] Task: Inject JSON-LD Schema markup into `index.html` or a React Helmet/Head component.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Foundation, SEO & Asset Optimization' (Protocol in workflow.md)

## Phase 2: Menu Data Migration (2025 Pricing)
- [x] Task: Update `content.json` with new 2025 menu items, categories, and verified pricing.
- [x] Task: Refactor the `Menu` component to support the new item structure (e.g., price ranges like $11.99+).
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Menu Data Migration (2025 Pricing)' (Protocol in workflow.md)

## Phase 3: Smart Logistics (Automated Hours & Specials)
- [x] Task: Create `services/logisticsService.ts` to calculate current day status and active specials.
- [x] Task: Update `Header` or create an `AnnouncementBanner` component to display "Closed" state and "Daily Specials".
- [x] Task: Write unit tests for `logisticsService` verifying Sunday/Monday "Closed" logic and Friday "Poutine" logic.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Smart Logistics (Automated Hours & Specials)' (Protocol in workflow.md)

## Phase 4: Mobile UX & Craft Beer Section
- [x] Task: Implement `components/StickyMobileCTA.tsx` with "Call" and "Order Online" buttons, fixed to bottom.
- [x] Task: Create/Update the `BeerSection` component with dark theme and brewery logos (Stone, Burgeon, Artifex).
- [x] Task: Add ARIA labels to all new interactive elements for accessibility compliance.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Mobile UX & Craft Beer Section' (Protocol in workflow.md)

## Phase 5: Final Production Verification
- [x] Task: Run full test suite and verify >80% coverage on new logistics and UI logic.
- [x] Task: Perform mobile responsiveness audit (Safari/Chrome DevTools).
- [ ] Task: Conductor - User Manual Verification 'Phase 5: Final Production Verification' (Protocol in workflow.md)
