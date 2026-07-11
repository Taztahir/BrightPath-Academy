# BrightPath Academy

A fictional private school marketing website — built as a portfolio case study for **Creative Emman**, demonstrating full-stack frontend capability: multi-page architecture, a custom design system, and a fully responsive, production-quality build.

**Live demo:** [add deployed URL here]
**Case study:** [add link to Creative Emman portfolio page here]

---

## Overview

BrightPath Academy is a 12-page marketing and informational website for a private school — admissions, academics, faculty, facilities, news, gallery, and contact. There is no dashboard, authentication, or backend; the goal is a polished, content-rich static site suitable for client pitches and portfolio presentation.

## Tech Stack

- **React** (Vite) — no Next.js; the site has no server-side data fetching or auth
- **TypeScript**
- **React Router** — client-side page navigation
- **Tailwind CSS** — styling and design system
- **Framer Motion** — scroll reveals, animated stat counters
- **ESLint + Prettier** — linting and formatting
- **Deployed on** Vercel / Netlify

## Design System

Full brand guidelines — color palette, typography, component rules, and responsive behavior — are documented in [`DESIGN.md`](./DESIGN.md). Key highlights:

| Token | Hex | Usage |
|---|---|---|
| Mustard | `#F4C452` | Bold section backgrounds |
| Cream | `#FBF3E4` | Primary content surface |
| Navy | `#1B2A4A` | Primary text, buttons, nav |
| Teal | `#3B8C8C` | Secondary accent |
| Burnt Orange | `#E4772C` | Secondary accent |

- **Display font:** Fraunces (serif) — section headlines
- **Body/UI font:** Inter (sans-serif) — nav, body copy, buttons

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone <repo-url>
cd BrightPath-Academy
npm install
```

### Development

```bash
npm run dev
```

The site runs locally at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, PageHeader
    ui/           # Button, Card, Badge, Accordion, etc.
    sections/     # Hero, StatsStrip, TestimonialCarousel, etc.
  pages/
    Home.tsx
    About.tsx
    Admissions.tsx
    Academics.tsx
    Faculty.tsx
    Facilities.tsx
    News.tsx
    NewsDetail.tsx
    Gallery.tsx
    Testimonials.tsx
    Contact.tsx
    NotFound.tsx
  data/
    faculty.ts
    news.ts
    testimonials.ts
    programs.ts
  App.tsx
  main.tsx
```

Content lives in `src/data/` rather than being hardcoded into components — this keeps the site CMS-ready and mirrors how a real client project would be structured.

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, stats strip, value props, program previews, testimonials, news preview |
| About | `/about` | Mission/vision, history timeline, values, principal's message |
| Admissions | `/admissions` | Application process, requirements, tuition, FAQ |
| Academics | `/academics` | Grade-level programs and extracurriculars |
| Faculty | `/faculty` | Staff directory with bios |
| Facilities | `/facilities` | Campus tour — labs, library, sports, cafeteria |
| News & Events | `/news` | Event and announcement listing |
| News Detail | `/news/:slug` | Single article/event view |
| Gallery | `/gallery` | Filterable photo grid |
| Testimonials | `/testimonials` | Parent/student/alumni quotes |
| Contact | `/contact` | Map, contact form, FAQs |
| 404 | `*` | Not-found page |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Quality Checklist

- [x] Fully responsive — mobile, tablet, desktop
- [x] Realistic content — no placeholder/Lorem Ipsum text
- [ ] Deployed live with a shareable URL
- [ ] Lighthouse audit passed — performance, accessibility, SEO
- [ ] Cross-browser tested

## Contributing

This is an internal Creative Emman portfolio project. For changes, create a feature branch and open a pull request:

```bash
git checkout -b feature/your-feature-name
```

## License

Internal project — © Creative Emman. Not for external distribution without permission.