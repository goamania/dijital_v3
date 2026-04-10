# Dijital V3 - Award-Winning Web Design Agency

![Dijital V3](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055ff) ![R3F](https://img.shields.io/badge/React%20Three-Fiber-0071b5)

The world's most visually stunning, high-performance, lead-focused, and AI-optimized agency website.

## 🎯 Key Features

### Visual Feast (Görsel Şölen)
- **Framer Motion**: Declarative, high-performance scroll-linked animations
- **React Three Fiber**: Strategic 3D particle effects in the Hero section
- **View Transitions API**: Smooth page transitions
- **Gradient Animations**: Dynamic, eye-catching gradient backgrounds

### Performance (100/100 Lighthouse Target)
- **Next.js 14 App Router**: Static generation with strict optimization
- **Image Optimization**: `next/image` with AVIF format and priority loading
- **Font Optimization**: `next/font/google` with display swap
- **Lazy Loading**: 3D canvas lazy-loaded to protect LCP
- **Bundle Analysis**: Tree-shaking and package optimization

### AI-Visibility (AEO/GEO Optimized)
- **llms.txt**: Comprehensive AI source of truth
- **JSON-LD Schemas**: Organization, ProfessionalService, WebSite, FAQPage
- **robots.txt**: AI crawler directives
- **Semantic HTML**: Proper heading hierarchy and ARIA attributes

### Lead Capture
- **useOptimistic**: Instant feedback on form submission
- **Server Actions**: Secure form processing with Zod validation
- **CRM Integration**: Ready for HubSpot webhook connection
- **Rate Limiting**: API protection against abuse

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
cd dijital_v3

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
dijital_v3/
├── app/
│   ├── layout.tsx                 # Root layout with JSON-LD schemas
│   ├── page.tsx                   # Homepage with Z-Pattern layout
│   ├── globals.css                # Global styles
│   ├── actions/
│   │   └── lead.ts                # Server action for lead capture
│   └── api/
│       ├── lead/route.ts          # Lead submission API
│       └── analytics/route.ts     # Web Vitals reporting API
├── components/
│   ├── animations/
│   │   ├── HeroVisual.tsx         # R3F 3D particle scene
│   │   └── HeroSection.tsx        # Hero with Framer Motion
│   ├── forms/
│   │   └── LeadForm.tsx           # Lead capture form
│   ├── layout/
│   │   ├── Header.tsx             # Responsive navigation
│   │   └── Footer.tsx             # Site footer
│   ├── services/
│   │   ├── ServicesSection.tsx    # Services grid
│   │   ├── WhyChooseUs.tsx        # Trust signals
│   │   ├── IndustriesSection.tsx  # Industry verticals
│   │   ├── PortfolioSection.tsx   # Project showcase
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   └── FAQSection.tsx         # Accordion FAQ
│   └── Analytics/
│       └── WebVitals.tsx          # RUM metrics reporter
├── public/
│   ├── llms.txt                   # AI-optimized source of truth
│   └── robots.txt                 # Crawler directives
└── package.json
```

## 🎨 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D Graphics | React Three Fiber + Drei |
| Icons | Heroicons |
| Validation | Zod |
| Images | Sharp (AVIF) |
| Fonts | Inter + Plus Jakarta Sans |

## 📊 KPIs & Checklist

- [x] `llms.txt` present and referenced in `robots.txt`
- [x] Schema validation passed for Organization and Service
- [x] Static site generation working
- [x] Z-Pattern implemented on homepage
- [x] Lead capture form with useOptimistic
- [x] Web Vitals monitoring enabled
- [x] Responsive design (mobile-first)
- [x] Performance optimized (lazy loading, code splitting)

## 🏗️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Bundle analysis
npm run analyze
```

## 🔧 Environment Variables

Create `.env.local` with:

```env
HUBSPOT_WEBHOOK_URL=https://api.hubapi.com/crm/v3/objects/contacts
CRM_API_KEY=your_crm_api_key_here
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
GA4_API_SECRET=your_ga4_api_secret
NEXT_PUBLIC_SITE_URL=https://www.dijitalv3.com
```

## 📈 Performance Optimizations

1. **Lazy-loaded 3D Canvas**: R3F scene loads after LCP
2. **Adaptive DPR**: Canvas uses `[1, 2]` pixel ratio
3. **Demand Frameloop**: Only renders when needed
4. **Image Optimization**: AVIF format with proper sizes
5. **Font Display Swap**: Prevents FOIT
6. **Package Optimization**: Selective imports for framer-motion, headlessui

## 🤖 AI Optimization

The site implements comprehensive schema markup:
- **Organization**: Company info, catalog, social profiles
- **ProfessionalService**: Services, pricing, area served
- **WebSite**: Search action for site search
- **FAQPage**: Common questions for AI extraction

## 📝 License

This is a proprietary project. All rights reserved.

---

Built with ❤️ by Dijital V3 Team
