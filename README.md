# Nothing Goes to Waste - Mekong Delta Innovation Hub

A React + TypeScript single-page application serving as a resource hub for circular economy and green technology innovation in Vietnam's Mekong Delta region.

## Features

- **Multi-language Support**: English and Vietnamese translations with in-context switching
- **Gap Analysis**: 10 world-leading green technology innovations for the Mekong Delta
- **Carbon Market Data**: Real-time carbon pricing ticker banner
- **Regulations & Incentives**: Green tax incentives and policy information
- **Funding Directory**: International funding sources for sustainable projects
- **Development Roadmap**: 3-stage journey from concept to market
- **Image Modal**: Full-screen image viewer for innovations and posters
- **Urgency Cards**: Visual cards highlighting regional challenges (saltwater intrusion, land subsidence, flooding)
- **Lazy Loading**: Code-split sections for optimized performance
- **Responsive Design**: Mobile-friendly with Tailwind CSS 4

## Tech Stack

- React 19 + TypeScript
- Vite 6 (build tool)
- Tailwind CSS 4 (styling)
- Motion 12 (animations)
- Lucide React (icons)
- Vitest (testing)

## Prerequisites

- Node.js 18+
- npm 9+
- Docker (optional)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Lazy-loaded page sections
│   │   ├── HeroSection.tsx
│   │   ├── GapAnalysisSection.tsx
│   │   ├── RegulationsSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   ├── FundingSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── UrgencyCards.tsx
│   ├── Navigation.tsx
│   ├── LanguageSwitcher.tsx
│   ├── ImageModal.tsx
│   └── CarbonTickerBanner.tsx
├── i18n/
│   ├── LanguageContext.tsx
│   ├── en.json
│   └── vi.json
├── hooks/
│   └── useTranslatedConstants.ts
├── test/
│   ├── setup.ts
│   ├── LanguageContext.test.tsx
│   └── Navigation.test.tsx
├── types.ts
├── constants.ts
├── App.tsx
└── main.tsx
```

## Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild without cache
docker-compose build --no-cache
```

The app will be available at `http://localhost:8091`

Docker features:
- Multi-stage build (Node builder + Nginx Alpine)
- Non-root user for security
- Health check endpoint at /health
- Gzip compression and security headers
- Traefik labels for reverse proxy

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_*` | Client-side environment variables | No |

## Testing

This project uses Vitest with React Testing Library.

```bash
# Run all tests
npm test

# Run in watch mode
npm test

# Run with coverage
npm run test:coverage
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run TypeScript type checking |
| `npm run test` | Run tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run clean` | Remove dist directory |

## Dependencies

**Runtime:**
- react: ^19.0.0
- react-dom: ^19.0.0
- lucide-react: ^0.546.0
- motion: ^12.23.24

**Dev:**
- vite: ^6.2.0
- @vitejs/plugin-react: ^5.0.4
- tailwindcss: ^4.1.14
- @tailwindcss/vite: ^4.1.14
- typescript: ~5.8.2
- vitest: ^2.0.0
- @testing-library/react: ^16.0.0

## Changelog

### v0.0.0 (2026-04-18)

**Architectural Changes:**
- Migrated to Vite 6 build system
- Updated to Tailwind CSS 4 (with @tailwindcss/vite plugin)
- Added `@` path alias resolution in vite.config.ts
- Implemented code splitting with lazy loading for sections
- Added competition posters to public/images/

**Dependency Updates:**
- React: 19.0.0
- React DOM: 19.0.0
- TypeScript: ~5.8.2
- Vite: 6.2.0
- Tailwind CSS: 4.1.14
- Motion: 12.23.24
- Lucide React: 0.546.0
- Vitest: 2.0.0

**New Features:**
- CarbonTickerBanner: Real-time carbon pricing display
- ImageModal: Full-screen image viewer
- UrgencyCards: Environmental challenge highlights
- Lazy-loaded sections for performance
- Docker multi-stage build optimization
- Health check endpoint at /health
- CI workflow with GitHub Actions

**Testing:**
- Vitest test framework configuration
- React Testing Library integration
- LanguageContext component tests
- Navigation component tests

## API Reference

This is a frontend-only application. No backend API endpoints exist.

Future backend integration placeholders are defined in nginx.conf (commented):
- API proxy location: /api/
- WebSocket support configured

Current data sources:
- Carbon market data: Static (no API)
- Translations: JSON files in i18n/
- Innovation data: constants.ts

## License

MIT License - See LICENSE file for details.