# Implementation Plan: Facebook Integration

This plan outlines the steps to integrate Facebook links, icons, and reviews into the website, matching the existing Yelp and Instagram patterns.

## Phase 1: Data and Assets
- [x] Task: Update `content.json` with Facebook metadata.
    - Add `facebookUrl`: "https://www.facebook.com/HBROTHERSESCO/"
    - Add `facebookRating`: "4.9"
    - Add `facebookReviewCount`: "1,200+"
- [ ] Task: Conductor - User Manual Verification 'Data and Assets' (Protocol in workflow.md)

## Phase 2: Component Updates (Global)
- [x] Task: Update `components/Header.tsx` to include Facebook integration.
    - Define `FacebookIcon` SVG component.
    - Add Facebook icon to desktop navigation social group.
    - Add Facebook icon to mobile menu social group.
- [x] Task: Update `components/Footer.tsx` to include Facebook integration.
    - Add Facebook icon link to the brand column social section.
    - Match existing styling (rounded background, brand color `#1877F2`).
- [ ] Task: Conductor - User Manual Verification 'Component Updates (Global)' (Protocol in workflow.md)

## Phase 3: Testimonials and Reviews
- [x] Task: Update `components/Testimonials.tsx` to include Facebook reviews.
    - Add Facebook rating summary to the "Loved by Locals" section.
    - Add mock Facebook reviews to the `REVIEWS` array.
    - Update the review card rendering logic to handle the Facebook source icon and colors.
- [ ] Task: Conductor - User Manual Verification 'Testimonials and Reviews' (Protocol in workflow.md)

## Phase 4: Final Polish
- [x] Task: Verify all links open in a new tab with proper security attributes.
- [x] Task: Verify responsive behavior on mobile and tablet breakpoints.
- [ ] Task: Conductor - User Manual Verification 'Final Polish' (Protocol in workflow.md)
