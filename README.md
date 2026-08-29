<div align="right">
  <img src="https://img.shields.io/badge/English_EN-2563EB?style=for-the-badge" alt="English" />
  <a href="./README.tr.md">
    <img src="https://img.shields.io/badge/Türkçe_TR-374151?style=for-the-badge" alt="Türkçe" />
  </a>
</div>

# Recai Güneş — Photography Portfolio & Headless CMS Platform

A high-performance, design-led digital portfolio and editorial platform built for **Recai Güneş**, specializing in commercial gastronomy, food styling, and studio product photography. The platform combines editorial-grade visual presentation with an embedded headless content management architecture, on-demand incremental static regeneration (ISR), and modern motion design.

---

## 🏗 Architecture & Tech Stack

| Layer | Technology | Key Implementation |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server & Client Components, Route Groups `(site)` & `(admin)` |
| **Headless CMS** | Sanity v5 / `next-sanity` | Embedded Studio (`/studio`), schema modeling, GROQ queries |
| **Styling & Design** | Tailwind CSS v3 | Custom dark luxury theme, amber accents, `tailwindcss-animate` |
| **Typography** | `next/font/google` | Zero-layout-shift font optimization with *Outfit* & *Inter* |
| **Motion & UX** | Framer Motion & Lenis | Smooth inertia scroll, custom cursor, magnetic button physics |
| **Media & Lightbox** | Next.js Image & Lightbox | Optimized Sanity CDN pipeline, `yet-another-react-lightbox` |
| **Caching & ISR** | Next.js Cache & Webhook | Tag-based cache, secret-signed instant webhook revalidation |
| **Mail & Contact** | Nodemailer | Server-side SMTP transport, SSL/TLS security, HTML templates |
| **Language & Tooling** | TypeScript 5 & ESLint 9 | Strict type definitions, linting, modular architecture |

---

## ⚡ Core Modules & Functional Capabilities

- **Editorial Portfolio Showcase:** High-resolution responsive gallery with dynamic category filtering, deep-linking slugs, and high-performance lightbox preview.
- **Embedded Sanity Studio:** Fully integrated CMS operating within `/studio`, allowing instant management of portfolio items, client reference logos, timeline milestones, and site metadata.
- **Interactive Motion Engine:** Hardware-accelerated smooth scrolling with Lenis, interactive custom pointer tracking, magnetic interactive elements, and brand partner ticker marquee.
- **Secure Inquiry Pipeline:** Serverless contact endpoint integrating Nodemailer with server-side validation and automated HTML delivery directly to studio inboxes.

---

## 🗂 Route Architecture

The project leverages Next.js App Router route groups to cleanly isolate concerns:

```
src/app/
├── (admin)/                    # Isolated Headless CMS Administration
│   └── studio/[[...tool]]/     # Embedded Sanity Studio workspace
├── (site)/                     # Public Client-Facing Application
│   ├── blog/                   # Photography insights & articles
│   ├── hakkimda/               # Biography & studio statistics
│   ├── iletisim/               # Inquiry form & studio details
│   ├── portfolio/              # Gallery index & [slug] project details
│   └── layout.tsx              # Public shell with Lenis, Cursor, Header & Footer
└── api/                        # Serverless backend routes (contact & ISR webhook)
```

---

## 🚀 Caching, ISR & SEO Engineering

### 1. Tag-Based On-Demand ISR
Data is fetched via `sanityFetch` with granular cache tags (`siteSettings`, `portfolio`, `homePage`, etc.). The `/api/revalidate` webhook cryptographically verifies Sanity signatures via `SANITY_REVALIDATE_SECRET` and executes targeted tag invalidation (`revalidateTag`), providing sub-second content updates without full rebuilds.

### 2. Comprehensive SEO & Structured Data (JSON-LD)
- **Metadata Generation:** Dynamic OpenGraph cards, titles, descriptions, and canonical URLs configured per page via `generateMetadata()`.
- **JSON-LD Schema.org:** Embedded microdata including `WebSite`, `Photographer`, `PostalAddress`, and `ImageGallery` entities for enhanced search engine indexing and rich snippets.
- **Sitemap & Robots:** Fully dynamic `sitemap.ts` discovering all portfolio slugs and articles automatically, paired with `robots.ts` restricting indexing on `/studio/`.

---

## 📁 Project Structure

```
recai-gunes-2/
├── public/                 # Static assets, logos & favicon
├── src/
│   ├── app/                # Next.js App Router (Site, Admin, APIs, SEO)
│   ├── components/
│   │   ├── home/           # Hero, Marquee, AboutStats, Timeline, FeaturedPortfolio
│   │   ├── layout/         # Header, Footer, SmoothScroller
│   │   └── ui/             # CustomCursor, Magnetic, Lightbox, SanityImage
│   └── sanity/
│       ├── lib/            # Sanity client, image builder, GROQ queries
│       ├── schemaTypes/    # Schemas: portfolio, category, pages, settings
│       └── env.ts          # Dataset, project ID & API version configuration
├── sanity.config.ts        # Sanity Studio root configuration
└── tailwind.config.ts      # Custom design tokens, fonts & animations
```

---

## 🔒 Security & Engineering Standards

- **Environment Variable Isolation:** Multi-tier `.env*` coverage in `.gitignore` strictly guarantees zero leak of secrets, API tokens, and SMTP credentials.
- **Serverless API Protection:** Sensitive environment variables (`EMAIL_PASS`, `SANITY_REVALIDATE_SECRET`) reside exclusively on the Node runtime environment and are never bundled into client scripts.
- **Image Pipeline Optimization:** Dynamic CDN transformation using `@sanity/image-url` ensuring responsive formats (WebP/AVIF), proper dimensional constraints, and zero cumulative layout shift (CLS).
