# The Eagle Hub

**Build. Innovate. Rise.** — a cinematic, 3D-driven marketing site for a
full-service digital agency, built with Next.js 16 (App Router), React 19,
TypeScript, Tailwind CSS v4, Three.js / React Three Fiber, GSAP, and Framer
Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint      # ESLint
```

Requires Node.js 20.9+.

## What's implemented

- **Hero** — a scroll-jacked cinematic sequence: an eagle (built entirely
  from procedural Three.js geometry — no external model file) spreads its
  wings, dissolves into a particle system, and reforms into a wireframe
  digital globe, all driven by one GSAP `ScrollTrigger` and read inside
  R3F's render loop via a mutable "motion store" (`lib/motionStore.ts`) so
  scrolling never re-renders React.
- **Navbar** — transparent over the hero, glassmorphism on scroll, active-
  section pill indicator, mobile menu with a dimmed backdrop.
- **Services** — 10 services in interactive tilt cards; hovering shows a
  small 3D motif (laptop / phone / AI core) and blurs the other cards.
- **About** — animated stat counters, floating decorative nodes.
- **Digital Vision** — a lightweight CSS/SVG "eagle eye zooms into a
  network" scroll transition (no extra WebGL cost).
- **Portfolio** — glass project cards with 3D tilt-on-hover.
- **Process** — a 7-step vertical timeline with a scroll-linked progress
  line.
- **Technology** — floating tech nodes connected to a central "hub" core.
- **Why Us**, **Testimonials**, **CTA** (a flying eagle with a particle
  trail), **Contact** (working form + API route), **Footer**.
- **Performance** — a device-tier heuristic (`components/PerfProvider.tsx`)
  reads `prefers-reduced-motion`, viewport size, `navigator.deviceMemory`
  and `hardwareConcurrency` once on mount to pick a `high` / `medium` /
  `low` budget: particle counts, DPR cap, and whether 3D renders at all are
  all gated on it. Every 3D scene also lazy-mounts only once it's in the
  viewport (`components/3d/Scene3D.tsx`) and unmounts nothing renders on
  `prefers-reduced-motion`.
- **SEO** — metadata, Open Graph image (generated), sitemap.xml,
  robots.txt, JSON-LD.

## Content to replace before launch

Everything below is realistic placeholder content, not real business data —
swap it out before this goes live:

- **Testimonials** (`components/Testimonials.tsx` / `lib/constants.ts`) —
  currently generic placeholder quotes. Replace with real, attributed
  client testimonials.
- **Portfolio case studies** (`lib/constants.ts` → `PROJECTS`) — illustrative
  example projects, not real client work.
- **Stats** (`lib/constants.ts` → `STATS`) — only publish numbers that
  accurately represent the agency.
- **Contact info & socials** (`lib/constants.ts` → `SITE`,
  `SOCIAL_LINKS`) — placeholder email/phone/handles.
- **Contact form backend** (`app/api/contact/route.ts`) — currently
  validates and logs the submission server-side only. Wire in real delivery
  (e.g. [Resend](https://resend.com), SendGrid, or a database write) before
  launch.
- **3D eagle model** — fully procedural today (see
  `public/models/README.md` for how to swap in a sculpted `.glb`).

## Project structure

```
app/                 Routes, layout, metadata, API route
components/           Page sections
components/3d/        All Three.js / React Three Fiber pieces
components/ui-ish helpers: ScrollReveal, StatCounter, Navbar, etc.
lib/                  Constants, utils, hooks, the scroll/pointer motion store
```
