# Track Spec: Final Production Deployment (December 2025 Update)

## Overview
This track executes the final production polish for the H-Brothers website, ensuring 2025 accuracy in pricing, automated operational logic ("Smart Logistics"), and a mobile-first conversion strategy.

## Functional Requirements

### 1. SEO & Rich Snippets
- **JSON-LD Injection**: Inject the specific JSON-LD snippet provided in the master prompt into the `<head>`.
  - Includes: Name, Image (`hero-poutine.webp`), Phone, PriceRange `$$`, Hours (`Tu-Sa 11:00-21:00`), and Cuisine types.

### 2. Menu Overhaul (2025 Pricing)
- Update `content.json` to reflect the following verified 2025 menu:
  - **Poutine**: Original ($11.99+), Adobada Fries ($17.99).
  - **Sandwiches**: H Bros Cheesesteak ($19.50), Brisket Sandwich ($19.20), Parmesan Crusted Chicken ($17.99), Seafood Melt ($20.40).
  - **Wraps**: Tzatziki Chicken ($15.60), Buffalo Ranch ($15.60), Chicken Caesar ($15.60).
  - **Munchies**: Deep Fried Pickles ($12.50), Truffle Fries ($11.50).

### 3. Smart Logistics (Header/Announcement)
- **Closed Logic**:
  - Automatically detect the day of the week.
  - If **Sunday (0)** or **Monday (1)**: Display high-contrast banner "Closed Today - See you Tuesday at 11:00 AM!".
- **Daily Specials Logic**:
  - **Tuesday**: Taco/Adobada Special.
  - **Wednesday**: Wrap Wednesday ($1 off all wraps).
  - **Friday**: Poutine Friday.

### 4. Mobile UX & Conversion
- **Sticky Footer Bar**: Implement a fixed bottom bar (z-index: 9999) visible *only* on mobile viewports.
  - **Left**: "Call: 442-999-5542" (tel: link).
  - **Right**: "Order Online" (primary button style).
- **Beer Section**:
  - Dark-themed block.
  - Display logos for **Stone**, **Burgeon**, and **Artifex**.
  - Text: "Follow @hbrothers_esco for today's tap list."

## Non-Functional Requirements
- **Asset Optimization**: Convert large hero assets (backgrounds, main food shots) to `.webp` format.
- **Verification**: Ensure the "Closed" state correctly triggers for the current date (Sunday, Dec 28, 2025).

## Acceptance Criteria
- [ ] JSON-LD is present and valid in `<head>`.
- [ ] Menu prices in `content.json` match the 2025 list exactly.
- [ ] Visiting the site on Sunday (today) displays the "Closed" banner.
- [ ] Mobile view shows the sticky footer with working Call/Order buttons.
- [ ] Beer section is dark-themed with correct brewery logos.
- [ ] Key images are served as `.webp`.
