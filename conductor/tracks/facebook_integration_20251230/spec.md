# Track Specification: Facebook Integration

## 1. Overview
The goal of this track is to integrate Facebook into the H Brothers website, ensuring it has equal presence and functionality as the existing Yelp and Instagram integrations. This includes adding social links/icons to the Header and Footer, and integrating Facebook reviews (initially using placeholders/mocks) into the Testimonials carousel.

## 2. Functional Requirements

### 2.1 Content Management
-   **Update `content.json`**:
    -   Add `facebookUrl` to the `restaurant` object (Value: `https://www.facebook.com/HBROTHERSESCO/`).
    -   Add `facebookRating` (mock value: `4.9` or similar) to `restaurant`.
    -   Add `facebookReviewCount` (mock value: `1,200+` or similar) to `restaurant`.

### 2.2 Header Integration
-   **Social Icons**:
    -   Add a Facebook icon to the desktop navigation bar, alongside Instagram and Yelp.
    -   Use the official Facebook Blue color (approx. `#1877F2`) for the icon.
    -   Ensure hover effects (scale, shadow) match existing icons.
-   **Mobile Menu**:
    -   Add the Facebook icon to the mobile menu drawer, alongside Instagram and Yelp.

### 2.3 Footer Integration
-   **Social Column**:
    -   Add the Facebook icon to the "Brand Column" in the footer.
    -   Ensure styling (rounded square background, hover effects) matches existing footer social icons.

### 2.4 Testimonials Integration
-   **Review Source Indicators**:
    -   Update the "Loved by Locals" summary section to include a Facebook rating summary (e.g., "4.8/5 on Facebook") with the Facebook icon.
-   **Review Cards**:
    -   Add `Facebook` as a supported `source` in the `REVIEWS` data structure.
    -   Create a helper to render the Facebook icon (Blue logo) when `source === 'Facebook'`.
-   **Mock Data**:
    -   Add 2-3 mock Facebook reviews to the `REVIEWS` array in `Testimonials.tsx` to populate the carousel.

## 3. Non-Functional Requirements
-   **Consistency**: Design and behavior must strictly match existing Yelp/Instagram implementations.
-   **Responsiveness**: Icons must be visible and accessible on both desktop and mobile views.
-   **Performance**: SVG icons should be inline or lightweight to avoid layout shifts.

## 4. Acceptance Criteria
-   [ ] Facebook icon appears in the Header (desktop & mobile) and links to the correct URL.
-   [ ] Facebook icon appears in the Footer and links to the correct URL.
-   [ ] "Loved by Locals" section shows a Facebook rating summary.
-   [ ] Testimonials carousel displays at least 2 reviews sourced from "Facebook" with the correct Facebook icon.
-   [ ] All Facebook icons use the correct brand color (`#1877F2`).
