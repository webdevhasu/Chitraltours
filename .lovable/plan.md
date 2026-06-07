
# Chitral Tours — Premium Travel Website

A luxury, conversion-focused tourism site for Chitral Tours. Every page funnels visitors to WhatsApp (+92 347 4054450) with pre-filled inquiry messages. Built on the current TanStack Start stack (React 19 + Vite + Tailwind v4 + Framer Motion) — equivalent capability to Next.js 15 with the same SEO, performance, and animation features.

## Visual direction
- **Palette**: deep midnight blue `#0A1A2F` background, ivory `#FAFAF7` surface, emerald `#0F766E` primary accent, gold `#C9A227` highlight. Tokens added to `src/styles.css` in `oklch` under `@theme`.
- **Typography**: Instrument Serif (display headlines) + Inter (body) — loaded via `<link>` in `__root.tsx`.
- **Feel**: cinematic mountain hero, generous whitespace, soft gold dividers, subtle parallax, Framer Motion fade/slide-in on scroll, hover lift on cards.
- **Imagery**: AI-generated Chitral landscapes (Tirich Mir, Kalash, Shandur, Garam Chashma, Chitral Fort, Bumburet, Rumbur) saved to `src/assets/` and uploaded as CDN assets.

## Routes (multi-page for SEO)

```
src/routes/
  __root.tsx          shared shell: nav, footer, floating WhatsApp, fonts, sitewide JSON-LD
  index.tsx           home (hero, featured tours, why us, destinations preview, testimonials, Shandur urgency, FAQ teaser, CTA)
  tours.index.tsx     all 6 tour packages grid
  tours.$slug.tsx     individual tour detail page (highlights, itinerary, price, WhatsApp CTA, lead form)
  destinations.tsx    7-destination gallery with descriptions
  about.tsx           company story, mission, team note
  blog.index.tsx      blog list (4 articles)
  blog.$slug.tsx      blog article pages
  contact.tsx         lead form + contact info + map placeholder
```

Each route has its own `head()` with unique title, description, og:title, og:description, og:url, canonical (leaf only). JSON-LD: `TravelAgency` Organization on root; `TouristTrip` on each tour page; `Article` on each blog post; `FAQPage` on home.

## Conversion mechanics
- **Floating WhatsApp FAB** (bottom-right, all pages) with pulse animation
- **Sticky bottom WhatsApp bar** on mobile
- **Multiple inline CTA buttons** in hero, each tour card, after testimonials, in footer
- **Shandur urgency banner** at top: "Shandur Polo Festival 2026 — July 7–9 · Limited Seats · Book Now" → WhatsApp
- **Lead form** (`/contact` + on each tour detail): Name, Phone, Email, Travel Date, Travelers, Preferred Tour (select), Message. Submit → opens `https://wa.me/923474054450?text=<urlencoded inquiry summary>` in new tab. All fields validated with Zod (trim, max lengths, email format).
- **Trust strip**: "500+ travelers · 4.9★ · Local since 2015 · 24/7 support"

## Section content

**Hero** — full-bleed Tirich Mir cinematic image with dark gradient, headline + subhead, two CTAs ("Book on WhatsApp" emerald, "Explore Tour Packages" gold outline), trust strip below.

**Tour packages** (6 cards on home, all on `/tours`):
1. Kalash Valley Cultural Tour — 5 days, from PKR 65,000
2. Shandur Pass Polo Festival 2026 — 7 days, from PKR 95,000 (featured badge)
3. Chitral Cultural Heritage Experience — 4 days, from PKR 55,000
4. Tirich Mir Base Camp Trek — 10 days, from PKR 145,000
5. Family Chitral Tour — 6 days, from PKR 75,000/family
6. Chitral Honeymoon Escape — 5 days, from PKR 110,000/couple

Each card: image, title, duration chip, 3 highlights, price, "Inquire on WhatsApp" button (pre-filled with package name).

**Why Choose Us** — 6 icon tiles (Lucide icons in gold).

**Destinations gallery** — masonry of 7 destinations with hover overlay captions.

**Testimonials** — 6 real-sounding reviews with name, city, 5-star, tour taken. Motion-carousel on mobile, grid on desktop.

**About** — 2-column: story copy + image. Founded by Chitrali locals, 10+ years guiding, community-first.

**FAQ** — Radix Accordion, 8 Q&As covering pricing, transport (4WD Land Cruisers), accommodation (heritage hotels + guesthouses), best time (May–Oct, July for Shandur), safety, booking, payments, customization.

**Blog** — 4 articles with hero image, excerpt, full body content authored for SEO targeting the listed keywords.

**Footer** — logo, tagline, quick links, tour links, contact (WhatsApp tel link, email, Chitral office address), socials (FB/IG/YouTube placeholders), copyright.

## Technical details
- **WhatsApp helper** (`src/lib/whatsapp.ts`): `buildWhatsAppUrl(message: string)` returns `https://wa.me/923474054450?text=...`. Default message: "Hello Chitral Tours, I am interested in booking a tour package. Please share details." Per-tour variant injects tour name.
- **Lead form**: pure frontend → opens WhatsApp with summarized inquiry. No backend storage (avoids needing Cloud for this MVP). If user later wants persistence, we can enable Lovable Cloud.
- **Images**: generated with `imagegen` (standard quality, landscape 1536×1024 for hero, 1024×768 for cards), uploaded via `lovable-assets` so the repo stays light.
- **Animations**: Framer Motion `motion.div` with `whileInView` fade-up; hero gets subtle Ken Burns scale on the bg image.
- **Responsive**: mobile-first, sticky bottom WhatsApp bar appears <768px, hero collapses to single column, gallery becomes 2-col then 1-col.
- **SEO**: per-route meta, canonicals on leaves, sitemap.xml + robots.txt in `public/`, semantic HTML (single H1 per route, h2 sections), alt text on every image, lazy-loaded below-fold images.
- **Performance**: CDN assets, no heavy libs beyond Framer Motion + Radix (already present via shadcn).

## Out of scope (can add later)
- Real CMS / dynamic blog (currently static MDX-like data file)
- Booking persistence / admin dashboard (would need Lovable Cloud)
- Multilingual (Urdu) version
- Real payment processing

After you approve, I'll build it end to end in one pass: tokens → fonts → assets → shared shell → routes → polish.
