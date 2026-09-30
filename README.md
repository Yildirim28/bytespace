# ByteSpace — Landing, Login & Register

Pixel-faithful React + Tailwind implementation of the ByteSpace design (landing page, plus
bonus **Login** and **Register** screens).

## Tech stack

| Tool | Version |
| --- | --- |
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| React Router | 6 |

Fonts (loaded from Google Fonts + Fontshare): **Poppins** (headings), **Satoshi** (body),
**Clash Display** (logo wordmark).

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Routes

| Path | Page | Source |
| --- | --- | --- |
| `/` | Landing page | `src/pages/Home.jsx` |
| `/login` | Sign in (bonus) | `src/pages/Login.jsx` |
| `/register` | Create account (bonus) | `src/pages/Register.jsx` |

Unknown paths redirect back to `/`.

## Project structure

```
src/
├─ components/
│  ├─ auth/            # AuthLayout, AuthField, SocialAuth, AuthIllustration
│  ├─ icons/           # Inline SVG icon set (Icons, CategoryIcons)
│  ├─ ui/              # Bits (SearchBar, pills, avatars…) + Decorations
│  ├─ Navbar / Hero / LogoStrip / CoursesSection / CourseCard
│  ├─ CategoriesSection / FeatureGrowth / FeatureCreate
│  ├─ CreatorCTA / Testimonials / Footer
│  └─ ScrollToTop.jsx
├─ data/               # Content: courses, categories, navigation, testimonials
├─ pages/              # Home, Login, Register
├─ App.jsx             # Router
├─ index.css           # Tailwind layers + .bg-grid / .bg-soft-gradient utilities
└─ main.jsx
```

## Design tokens (`tailwind.config.js`)

| Token | Value | Usage |
| --- | --- | --- |
| `brand.blue` | `#003BE2` | Hero / CTA / auth backgrounds |
| `brand.lime` | `#D4FB20` | Primary buttons, accents |
| `brand.lime-500` | `#CBFC01` | Revenue badge |
| `ink` | `#242528` | Headings, default text |
| `muted` | `#82868E` | Secondary text |
| `shuttle.*` | `#F5F5F6` → `#242528` | Shuttle Gray scale |
| `vulcan` | `#040819` | Section headings |

## Deployment (Vercel)

`vercel.json` contains a SPA rewrite so client-side routes resolve to `index.html`.

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production deployment
```

Or import the GitHub repository at <https://vercel.com/new> — Vercel auto-detects Vite
(build `npm run build`, output `dist`).

> **Note:** photography and avatars are placeholder CDN assets (Unsplash / pravatar);
> decorative shapes are hand-built inline SVGs approximating the mock.
