# GPRS Tech — Professional Studio Web Platform

The official production-ready website for **GPRS Tech** (Technology & Creative Studio), founded by **Pradeep Singh** (`@gprspradeep`).

Built with **React 19**, **TypeScript**, **Vite**, and **React Router**, following the master architecture defined in [`docs/master.md`](docs/master.md) and adhering to the verified brand identity from `src/assets/brand/logo.png` and `src/assets/brand/banner.png`.

---

## 🎨 Visual Design & Theme

- **Surfaces**: Deep Space Navy (`#070B14`, `#0B1120`, `#0F172A`, `#131E35`)
- **Technology Accent**: Electric Blue (`#0066FF`) & Cyber Cyan (`#00D4FF`)
- **Creative Accent**: Vivid Emerald Green (`#00E575`) & Lime Highlight (`#A3E635`)
- **Typography**: Outfit (Headings) & Inter (Body)
- **Reduced Motion**: Full support via `@media (prefers-reduced-motion: reduce)`

---

## 🚀 Key Features

1. **Dual-Studio Experience**: Seamless split between **Technology Studio** (mobile apps, web platforms, custom tools, UI/UX) and **Creative Studio** (2D/3D animation, motion graphics, video editing).
2. **Honest Portfolio Attribution**: Every project card and case study features transparent attribution badges:
   - *GPRS Tech Client Project*
   - *Founder Project*
   - *Work Completed While Employed*
   - *Concept or Experiment*
3. **Draft Guard**: Unpublished projects (`publishable: false`) are strictly omitted from public routes.
4. **Interactive Discovery Form**: Multi-step project builder with client-side validation, accessible announcements, and direct mailto fallback.
5. **Verified Channels Only**: Direct links to official LinkedIn, X (`@gprstech`), YouTube, and personal founder portfolio.

---

## 📁 Project Architecture

```text
gprstech/
├── docs/
│   ├── master.md            # Master specification
│   └── content-status.md    # Verified claims & attribution status
├── public/
│   ├── banner.png           # Dual-studio brand banner
│   ├── logo.png             # Authoritative 3D circular mark
│   ├── favicon.png          # App icon
│   └── og-image.png         # OpenGraph social card
├── src/
│   ├── app/
│   │   ├── App.tsx          # Root provider
│   │   └── router.tsx       # 15 routes with lazy-loaded Suspense
│   ├── assets/brand/        # Brand assets (logo.png, banner.png)
│   ├── components/
│   │   ├── layout/          # Header, Footer, Breadcrumbs
│   │   └── seo/             # Dynamic SEO metadata & OpenGraph
│   ├── content/             # Typed content catalog
│   │   ├── brand.ts         # Studio info & verified social links
│   │   ├── services.ts      # Technology & Creative service listings
│   │   ├── projects.ts      # Portfolio projects & case studies
│   │   ├── insights.ts      # Engineering & animation articles
│   │   └── faqs.ts          # Categorized FAQs
│   ├── pages/               # Route-level pages
│   │   ├── home/            # HomePage (8 sections)
│   │   ├── services/        # Services overview, Technology, Creative
│   │   ├── portfolio/       # Hub, Apps, Websites, Animation, Detail
│   │   ├── about/           # About & Founder story (GPRS acronym)
│   │   ├── insights/        # Insights hub & reader
│   │   ├── contact/         # Project inquiry builder
│   │   ├── privacy/         # Privacy policy
│   │   └── notfound/        # Custom 404 page
│   └── styles/
│       ├── tokens.css       # Brand tokens & CSS custom properties
│       ├── reset.css        # Element reset
│       └── index.css        # Global utilities, badges & cards
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Content & Projects

To add or update portfolio projects, services, or articles without editing UI components, modify the typed files in `src/content/`:
- **New Project**: Add an entry to `PROJECTS` in [`src/content/projects.ts`](src/content/projects.ts). Set `publishable: true` when ready for public display.
- **New Article**: Add an entry to `INSIGHTS` in [`src/content/insights.ts`](src/content/insights.ts).
- **Social Links**: Update `BRAND.socials` in [`src/content/brand.ts`](src/content/brand.ts).
