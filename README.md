# H Brothers Restaurant Website

A modern, mobile-first landing page for H Brothers, a comfort food restaurant in Downtown Escondido, CA.

**Live Site:** [https://joblas.github.io/hbrothers-website/](https://joblas.github.io/hbrothers-website/)

---

## Project Overview

This project was developed by **Joe's Tech Solutions** as a proof-of-concept demonstrating modern web development practices including:

- SEO optimization with structured data (JSON-LD Schema)
- Mobile-first responsive design
- AI-powered customer concierge
- Accessibility compliance (WCAG AA)
- Performance optimization with WebP images

## Features

### Smart Logistics System
- Automated open/closed status detection (closed Sunday & Monday)
- Daily specials banner (Taco Tuesday, Wrap Wednesday, Poutine Friday)
- Dynamic announcement system with holiday support

### Mobile UX
- Sticky call-to-action bar with one-tap calling and online ordering
- Responsive design optimized for all screen sizes
- Touch-friendly navigation

### AI Concierge
- Powered by Google Gemini API
- Answers questions about menu, hours, location, and restaurant history
- Context-aware conversation with suggested replies

### SEO & Performance
- JSON-LD structured data for Restaurant, LocalBusiness, and Breadcrumb schemas
- Open Graph and Twitter Card meta tags
- WebP image format for optimal loading
- Lazy loading for images

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, TypeScript |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Routing | React Router v7 |
| AI | Google Gemini API |
| Testing | Vitest, React Testing Library |
| Deployment | GitHub Pages |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joblas/hbrothers-website.git
cd hbrothers-website

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> **Note:** Never commit `.env` files. They are gitignored by default.

### Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Deployment

The site deploys from the `docs` folder on the `main` branch.

```bash
# Build for production (outputs to /docs)
npm run build

# Commit and push to deploy
git add docs
git commit -m "Build for production"
git push origin main
```

Configure GitHub Pages to serve from: **main branch > /docs folder**

## Project Structure

```
hbrothers-website/
├── components/          # React components
│   ├── Header.tsx       # Navigation with announcement banner
│   ├── Hero.tsx         # Hero section
│   ├── Menu.tsx         # Menu showcase
│   ├── About.tsx        # Restaurant story
│   ├── BeerSection.tsx  # Craft beer partners
│   ├── Contact.tsx      # Location and hours
│   ├── StickyMobileCTA.tsx  # Mobile call/order bar
│   └── HBrothersConcierge.tsx  # AI chat widget
├── services/
│   ├── geminiService.ts     # AI integration
│   └── logisticsService.ts  # Hours/specials logic
├── config/
│   └── holidays.ts      # Holiday banner configuration
├── tests/               # Test suites
├── public/images/       # Optimized WebP images
└── content.json         # Menu and restaurant data
```

## Testing

```bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/logistics.test.ts

# Run with coverage
npm test -- --coverage
```

Current test coverage: **38 tests passing**

## Contributing

This is a client project for H Brothers restaurant. For inquiries about similar projects, contact Joe's Tech Solutions.

## License

This project is proprietary software developed for H Brothers restaurant.

---

**Developed by Joe's Tech Solutions**
