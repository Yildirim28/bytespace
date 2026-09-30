# ByteSpace — Landing, Login & Register

A pixel-faithful React + Tailwind implementation of the **ByteSpace** e-learning design: a
nine-section marketing landing page plus the bonus **Login** and **Register** screens, wired
with client-side routing and deployed to Vercel.

| | |
| --- | --- |
| **Live demo** | https://bytespace-plum-chi.vercel.app |
| **Repository** | https://github.com/Yildirim28/bytespace *(public)* |
| **Pull request** | [#1 — ByteSpace landing page + login/register](https://github.com/Yildirim28/bytespace/pull/1) |
| **Feature branch** | `feat/bytespace-landing-and-auth-pages` |

---

## Table of contents

- [Overview](#overview)
- [Routes](#routes)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Architecture](#architecture)
- [Design tokens](#design-tokens)
- [Styling utilities](#styling-utilities)
- [Deployment](#deployment)
- [Git workflow](#git-workflow)
- [Known limitations](#known-limitations)

---

## Overview

The project delivers three screens — the marketing landing page (required) and the
sign-in / sign-up pair (bonus) — built from a single shared component library, so the auth
pages reuse the same primitives (pills, avatar stacks, badges, logos) as the landing page.

**At a glance**

| | |
| --- | --- |
| Landing sections | 9 |
| Routes | 3 (`/`, `/login`, `/register`) + catch-all redirect |
| Components | 20 in `src/components/` |
| Source size | ~1,640 lines across `.jsx` / `.js` / `.css` |
| Content records | 6 courses · 6 categories · 18 filter chips · 3 testimonials · 5 partner logos |
| Design tokens | 19 colour tokens, 3 font stacks, 3 shadows, 1 animation |

---

## Routes

| Path | Page | Source |
| --- | --- | --- |
| `/` | Landing page | `src/pages/Home.jsx` |
| `/login` | Sign in **(bonus)** | `src/pages/Login.jsx` |
| `/register` | Create account **(bonus)** | `src/pages/Register.jsx` |
| `*` | Anything else → redirects to `/` | `src/App.jsx` |

`ScrollToTop` resets the scroll position on every route change, and `<Link>` is used for all
internal navigation so the SPA never triggers a full page reload.

---

## Features

### Landing page (`/`)

Nine sections composed in `src/pages/Home.jsx`:

| # | Section | Component | Highlights |
| --- | --- | --- | --- |
| 1 | Navbar + Hero | `Navbar.jsx`, `Hero.jsx` | Blueprint grid backdrop, headline + search bar, circular portrait on a lime disc, three floating stat cards, decorative SVG brush strokes / rings / zig-zags |
| 2 | Partner logos | `LogoStrip.jsx` | 5 "Logoipsum" marks drawn as inline SVG |
| 3 | Featured courses | `CoursesSection.jsx`, `CourseCard.jsx` | 18 filter chips with active-state styling, responsive 1 / 2 / 3-column card grid |
| 4 | Categories | `CategoriesSection.jsx` | 6 tiles with lime icon badges and hover lift |
| 5 | Professional growth | `FeatureGrowth.jsx` | Stats (`12K` / `70+` / `16`), layered photography, mini course card, progress card |
| 6 | Create & sell | `FeatureCreate.jsx` | Check-list of creator perks, floating revenue cards |
| 7 | Creator CTA | `CreatorCTA.jsx` | Full-bleed blue panel with grid overlay and lime accents |
| 8 | Testimonials | `Testimonials.jsx` | 3 quote cards on the soft lime / blue wash |
| 9 | Footer | `Footer.jsx` | Newsletter search bar, 3 link columns, legal links |

### Login (`/login`) & Register (`/register`) — bonus

Both screens are thin, declarative pages assembled from four shared pieces:

| Component | Responsibility |
| --- | --- |
| `AuthLayout` | Blue grid background, logo header, marketing column, white auth card |
| `AuthIllustration` | Fanned-out course-card artwork in the marketing column |
| `AuthField` | Label + input + focus ring, configured via `id` / `type` / `autoComplete` props |
| `SocialAuth` | Google and Apple sign-in buttons |

Plus `OrDivider` (from `ui/Bits.jsx`) and the shared `Logo` (from `icons/Icons.jsx`).

`Login.jsx` is 61 lines and `Register.jsx` is 61 lines — each contains only field
configuration and copy, because everything else is shared.

---

## Tech stack

| Tool | Version | Purpose |
| --- | --- | --- |
| React | 18 | UI library |
| Vite | 5 | Dev server + production bundler |
| Tailwind CSS | 3 | Utility-first styling + design tokens |
| React Router | 6 | Client-side routing (`BrowserRouter`) |
| PostCSS / Autoprefixer | — | Tailwind build pipeline |

**Typography** — fonts are declared in `index.html`:

| Role | Font | Source |
| --- | --- | --- |
| Body / UI | **Satoshi** | Fontshare |
| Headings | **Poppins** | Google Fonts |
| Logo wordmark | **Clash Display** | Fontshare |

---

## Getting started

**Prerequisites:** Node.js **18+** (Node 20 LTS recommended) and npm.

```bash
git clone https://github.com/Yildirim28/bytespace.git
cd bytespace
npm install
npm run dev        # http://localhost:5173
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Production build → `dist/` (61 modules, no errors) |
| `npm run preview` | Serve the production build locally |

---

## Project structure

```
src/
├─ components/
│  ├─ auth/                # Reusable auth-screen primitives
│  │  ├─ AuthLayout.jsx        # shared shell for /login & /register
│  │  ├─ AuthField.jsx         # labelled input
│  │  ├─ SocialAuth.jsx        # Google / Apple buttons
│  │  └─ AuthIllustration.jsx  # fanned course-card artwork
│  ├─ icons/
│  │  ├─ Icons.jsx             # Search, Star, Bars, Check, Google, Apple, Logo, …
│  │  └─ CategoryIcons.jsx     # category + partner glyphs
│  ├─ ui/
│  │  ├─ Bits.jsx              # SearchBar, MetaPill, Rating, LevelBadge,
│  │  │                        #   AvatarStack, OrDivider, SectionHeading
│  │  └─ Decorations.jsx       # LimeBrush, LimeRing, WhiteZigZag, … (inline SVG)
│  ├─ Navbar.jsx  Hero.jsx  LogoStrip.jsx
│  ├─ CoursesSection.jsx  CourseCard.jsx  CategoriesSection.jsx
│  ├─ FeatureGrowth.jsx  FeatureCreate.jsx  CreatorCTA.jsx
│  ├─ Testimonials.jsx  Footer.jsx
│  └─ ScrollToTop.jsx
├─ data/                   # All copy & content
│  ├─ courses.js               # 6 course records
│  ├─ categories.js            # 6 categories + 18 filter chips
│  ├─ navigation.js            # nav links, footer columns, partners, stats
│  └─ testimonials.js          # 3 testimonials
├─ pages/
│  ├─ Home.jsx             # composes the 9 landing sections
│  ├─ Login.jsx
│  └─ Register.jsx
├─ App.jsx                 # <BrowserRouter> + <Routes> + catch-all redirect
├─ main.jsx                # React entry point
└─ index.css               # Tailwind layers + .bg-grid / .bg-soft-gradient utilities
```

Alongside `src/`: `index.html`, `tailwind.config.js`, `vite.config.js`,
`postcss.config.js`, `vercel.json`, `public/favicon.svg`.

---

## Architecture

**Content is decoupled from presentation.** Every list, string and statistic lives in
`src/data/`. Components import their content and never hard-code it, so swapping copy — or
wiring an API later — means editing one file per dataset.

**Composition over nesting.** `Home.jsx` is nine section components inside a wrapper, nothing
more. Each section owns its markup and pulls what it needs from `ui/`, `icons/` and `data/`.

**Primitives are shared, not copied.** Measured reuse across the tree:

| Shared module | Consumed by |
| --- | --- |
| `ui/Bits.jsx` | Hero, Footer, CoursesSection, CategoriesSection, FeatureGrowth, CourseCard, Login, Register, AuthIllustration |
| `icons/Icons.jsx` | Navbar, Footer, Hero, FeatureCreate, AuthLayout |
| `auth/*` | Login **and** Register |
| `data/*` | 8 section components |

**Routing is a thin shell.** `App.jsx` declares the routes; pages never deal with the router
beyond `<Link>`.

---

## Design tokens

All tokens are defined in `tailwind.config.js` under `theme.extend`, read directly from the
Figma inspect values, and consumed as Tailwind utilities (`bg-brand-lime`, `text-vulcan`, …).

### Colour

| Token | Value | Used for |
| --- | --- | --- |
| `brand.blue` | `#003BE2` | Hero, CTA and auth backgrounds, accents |
| `brand.blue-dark` | `#0030B8` | Hover state |
| `brand.lime` | `#D4FB20` | Primary buttons, badges, highlights |
| `brand.lime-500` | `#CBFC01` | Revenue `+12$` badge |
| `brand.lime-soft` | `#E8FA8C` | Soft fills |
| `brand.violet` | `#7F30F7` | Occasional accent |
| `brand.mindaro` | `#C1E338` | Occasional accent |
| `ink` | `#242528` | Headings and default text |
| `muted` | `#82868E` | Secondary text |
| `chip` | `#F5F5F6` | Inactive filter chips, logo-strip band |
| `shuttle.50 → 950` | `#F5F5F6` → `#242528` | Shuttle Gray scale (borders, sub-text) |
| `vulcan` | `#040819` | Section headings |

### Typography

| Token | Stack |
| --- | --- |
| `font-sans` | Satoshi → system |
| `font-display` | Poppins → system |
| `font-logo` | Clash Display → Poppins → system |

`index.css` maps `h1`–`h6` to `font-display` globally, so headings match the mock by default.

### Elevation, shape & motion

| Token | Value |
| --- | --- |
| `shadow-card` | `0 14px 34px -18px rgba(15, 23, 42, .28)` |
| `shadow-float` | `0 22px 45px -18px rgba(15, 23, 42, .30)` |
| `shadow-pill` | `0 6px 18px -8px rgba(15, 23, 42, .28)` |
| `rounded-4xl` / `rounded-5xl` | `2rem` / `2.5rem` |
| `max-w-shell` | `1220px` — the page container width |
| `animate-floaty` | 5s ease-in-out vertical drift |

---

## Styling utilities

Custom utilities live in `src/index.css`:

| Class | Description |
| --- | --- |
| `.bg-grid` | 120px blueprint grid — 2px white lines at 12% opacity, used on the blue hero, CTA and auth panels |
| `.bg-soft-gradient` | Layered radial lime + blue wash over `#fafafa`, used behind the growth, create and testimonial sections |
| `.no-scrollbar` | Hides scrollbars where a horizontal scroller is intentional |

---

## Deployment

The site is deployed on **Vercel**. `vercel.json` contains a SPA rewrite so deep links and
direct loads of `/login` and `/register` resolve to `index.html`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Option A — import the repo (recommended)**

1. Go to <https://vercel.com/new> and import `Yildirim28/bytespace`.
2. Vercel auto-detects Vite: build `npm run build`, output `dist`.
3. Deploy.

**Option B — CLI**

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production deployment
```

---

## Git workflow

Standard feature-branch + pull-request flow:

```
*   72f94fc  (main, origin/main)  Merge pull request #1
|\
| * f11c12a  (feat/bytespace-landing-and-auth-pages)
|            feat: build ByteSpace landing page with login & register pages
|/
* b672a26    chore: initialize repository
```

- All feature work happened on **`feat/bytespace-landing-and-auth-pages`** — never directly on
  `main`.
- The work was delivered through **[PR #1](https://github.com/Yildirim28/bytespace/pull/1)**
  (`39 files changed, +4536 / −0`) and merged into `main`.
- `dist/`, `node_modules/`, logs and editor files are excluded via `.gitignore`.

---

## Known limitations

- **Placeholder assets.** Photography comes from the Unsplash CDN and avatars from
  `i.pravatar.cc`; decorative shapes are hand-built inline SVGs approximating the mock. Swap
  these for real design assets before shipping.
- **UI only.** The search bar, newsletter field, filter chips and both auth forms prevent
  their default submit — there is no backend, validation layer, or authentication.
- **Filter chips are presentational.** They track active-state styling but do not yet filter
  the course grid.
- **No state management or data fetching.** Content is imported statically from `src/data/`.
- **Vercel alias.** The vanity domain `bytespace.vercel.app` may return Vercel's
  `402 DEPLOYMENT_DISABLED` (an account-level setting, not a code issue). Use the
  `bytespace-plum-chi.vercel.app` link at the top of this file.

---

## Author

**md shamim isman chowdhury** — <shamimosman344@gmail.com>




