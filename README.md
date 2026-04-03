<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Nothing Goes to Waste - Mekong Delta Innovation Hub

A React + TypeScript single-page application serving as a resource hub for circular economy and green technology innovation in Vietnam's Mekong Delta region.

## Features

- **Multi-language Support**: English and Vietnamese translations
- **Gap Analysis**: 10 world-leading green technology innovations for the Mekong Delta
- **Carbon Market Data**: Real-time carbon pricing ticker
- **Regulations & Incentives**: Green tax incentives and policy information
- **Funding Directory**: International funding sources for sustainable projects
- **Development Roadmap**: 3-stage journey from concept to market

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React icons

## Prerequisites

- Node.js 18+
- npm 9+

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
│   ├── sections/          # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── GapAnalysisSection.tsx
│   │   ├── RegulationsSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   ├── FundingSection.tsx
│   │   └── FooterSection.tsx
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

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_*` | Client-side environment variables | No |

## Testing

This project uses Vitest with React Testing Library.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test

# Run tests with coverage
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

## License

MIT License - See LICENSE file for details.
