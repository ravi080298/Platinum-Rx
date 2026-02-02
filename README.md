# PlatinumRX — Next.js Starter

This project is a minimal Next.js storefront demo focused on a Product Listing Page (PLP) and Product Detail pages.

Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

FAQ — SEO, scaling, and performance

1. What makes this page SEO-friendly?

- Semantic HTML: pages use `<main>`, `<nav>`, `<header>`, and a `<ul>` list of `<li>` product items containing `<article>` product cards and heading tags (`<h1>`, `<h3>`). This gives crawlers and screen readers a clear document outline.
- Pre-rendering: app routes render on the server by default (SSR/SSG) in Next.js so crawlers receive usable HTML without running client JS.
- Meaningful metadata: page titles are generated per route (`generateMetadata`) to provide unique, descriptive titles.
- Crawlable links: each product card is a real anchor (`<a>`) to `/product/[slug]`, making pages discoverable by crawlers.

2. What would you change if the catalog had 100,000 products?

- Use pagination or cursor-based listing and avoid rendering all products on one page; expose sitemap index and paginated URLs for crawlability.
- Implement SSG for top-selling categories and incremental static regeneration (ISR) for others to reduce server load and speed up responses.
- Add a search index (Algolia/Elastic/Typesense) and server-side faceting; drive product pages from the index rather than rendering full DB queries on each request.
- Use CDN for assets and cache HTML at the edge (CDN + caching headers). Pre-generate important pages via build-time or background jobs.

3. What SEO mistakes do frontend engineers commonly make?

- Relying solely on client-side rendering for critical content (blocks crawlers and slows indexing).
- Missing or duplicate title/meta tags and non-unique URLs (poor SERP results).
- Using non-semantic markup (lots of divs) that confuses crawlers and assistive tech.
- Blocking crawlers with robots.txt or relying on client-side navigation for content discovery.
- Not providing meaningful `alt` text or accessible headings.

4. How does SEO differ between a client-side React SPA and an SSR/SSG approach?

- Client-side SPA: initial HTML is often empty, requiring JS to render content — this delays or prevents indexing by some crawlers and increases time-to-content for users.
- SSR/SSG: server returns fully-formed HTML, improving first contentful paint (FCP) and crawlability. SSG is ideal for content that changes infrequently; SSR is suitable when content must be fresh per request.
- Modern crawlers are better at executing JS, but SSR/SSG still delivers more predictable SEO and faster LCP for users.

5. How would you measure SEO and performance in production?

- SEO: monitor index coverage and search performance in Google Search Console; check sitemap submission and crawl errors. Track organic traffic, impressions, and click-through rate (CTR) in analytics.
- Performance: capture Core Web Vitals (LCP, FID/INP, CLS) via Real User Monitoring (RUM) — e.g., Web Vitals, Google Analytics 4, Datadog Browser RUM, or Sentry.
- Synthetic testing: Lighthouse CI, PageSpeed Insights, and WebPageTest for controlled checks and regression tracking.
- Alerts: set thresholds on LCP/CLS and create alerts for regressions. Correlate performance drops with deployments.

---

Setup (detailed)

1. Install dependencies

```bash
npm install
```

2. Local development

```bash
npm run dev
# Opens at http://localhost:3000
```

3. Build and run production locally

```bash
npm run build
npm start
```

4. Helpful commands

- `npm run lint` — run linting (if configured)
- `npm test` — run tests (if configured)

Technical & Architectural Decisions

- Framework: Next.js (app router) — chosen for built-in SSR/SSG routing, image optimization, and good defaults for SEO.
- Rendering model: prefer server-rendered pages for PLP and product pages to provide pre-rendered HTML for crawlers and faster LCP. Use SSG/ISR for pages that can be cached.
- Routing: file-system routing under `/app`, dynamic route for product detail at `/product/[slug]` for readable URLs and discoverability.
- Styling: `styled-components` for scoped styles and theming; kept components small and focused for reusability.
- Data layer: lightweight `lib/products.ts` mock for demo. For production, use a paginated API and a search index (Algolia/Elastic) for fast faceted search.
- Images: use `next/image` with `sizes` and `priority` for above-the-fold images to reduce LCP; add preconnect hints for external CDNs.
- Accessibility: semantic markup, meaningful `alt` attributes, keyboard-focusable links, and native controls (`button` for actions).
- Performance: minimize client JS, server-render static content, use CDN + caching (Cache-Control + ISR), and optimize images.
- Deployment: recommend Vercel for seamless Next.js support, or any platform that supports Node/Edge with CDN in front.

If you'd like, I can now:

- Revert any previous changes you asked about, or
- Add sitemap generation and GitHub Actions for Lighthouse CI.

# PlatinumRX — Next.js Starter

This project is a minimal Next.js storefront demo focused on a Product Listing Page (PLP) and Product Detail pages.

Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

FAQ — SEO, scaling, and performance

1. What makes this page SEO-friendly?

- Semantic HTML: pages use `<main>`, `<nav>`, `<header>`, and a `<ul>` list of `<li>` product items containing `<article>` product cards and heading tags (`<h1>`, `<h3>`). This gives crawlers and screen readers a clear document outline.
- Pre-rendering: app routes render on the server by default (SSR/SSG) in Next.js so crawlers receive usable HTML without running client JS.
- Meaningful metadata: page titles are generated per route (`generateMetadata`) to provide unique, descriptive titles.
- Crawlable links: each product card is a real anchor (`<a>`) to `/product/[slug]`, making pages discoverable by crawlers.

2. What would you change if the catalog had 100,000 products?

- Use pagination or cursor-based listing and avoid rendering all products on one page; expose sitemap index and paginated URLs for crawlability.
- Implement SSG for top-selling categories and incremental static regeneration (ISR) for others to reduce server load and speed up responses.
- Add a search index (Algolia/Elastic/Typesense) and server-side faceting; drive product pages from the index rather than rendering full DB queries on each request.
- Use CDN for assets and cache HTML at the edge (CDN + caching headers). Pre-generate important pages via build-time or background jobs.

3. What SEO mistakes do frontend engineers commonly make?

- Relying solely on client-side rendering for critical content (blocks crawlers and slows indexing).
- Missing or duplicate title/meta tags and non-unique URLs (poor SERP results).
- Using non-semantic markup (lots of divs) that confuses crawlers and assistive tech.
- Blocking crawlers with robots.txt or relying on client-side navigation for content discovery.
- Not providing meaningful `alt` text or accessible headings.

4. How does SEO differ between a client-side React SPA and an SSR/SSG approach?

- Client-side SPA: initial HTML is often empty, requiring JS to render content — this delays or prevents indexing by some crawlers and increases time-to-content for users.
- SSR/SSG: server returns fully-formed HTML, improving first contentful paint (FCP) and crawlability. SSG is ideal for content that changes infrequently; SSR is suitable when content must be fresh per request.
- Modern crawlers are better at executing JS, but SSR/SSG still delivers more predictable SEO and faster LCP for users.

5. How would you measure SEO and performance in production?

- SEO: monitor index coverage and search performance in Google Search Console; check sitemap submission and crawl errors. Track organic traffic, impressions, and click-through rate (CTR) in analytics.
- Performance: capture Core Web Vitals (LCP, FID/INP, CLS) via Real User Monitoring (RUM) — e.g., Web Vitals, Google Analytics 4, Datadog Browser RUM, or Sentry.
- Synthetic testing: Lighthouse CI, PageSpeed Insights, and WebPageTest for controlled checks and regression tracking.
- Alerts: set thresholds on LCP/CLS and create alerts for regressions. Correlate performance drops with deployments.
