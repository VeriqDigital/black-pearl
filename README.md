# Black Pearl Collectionz

A homepage presentation for Queen Matlock’s hand-poured soy candles and wax melts. Built with Next.js 16, React 19, Tailwind CSS 4, and supplied Black Pearl photography.

## Develop

```bash
npm install
npm run dev
```

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Scope

This is a homepage mockup. Product filters, product previews, image views, search, and mobile navigation work locally. Account, bag, and legal dialogs are presentation placeholders. There is no authentication, cart state, checkout, inventory, analytics, or CMS. Names and display prices come from the supplied brief and need client confirmation before launch. The Instagram destination uses the handle supplied in the brief.

The original Container, Section, Button, font setup, App Router layout, and generic form/email utilities are retained. Obsolete store sections and form endpoints are removed. Contact and About routes lead to the relevant homepage sections.

## Content

- `data/products.ts`: presentation catalog and prices.
- `components/sections/`: homepage sections.
- `components/layout/`: responsive header and footer.
- `app/globals.css`: ivory, blush, and bronze design system and responsive layouts.
- `public/images/`: original client product photography and branding.
- `config/`: brand, navigation, social link, and metadata.

The preview is marked noindex. Set `NEXT_PUBLIC_SITE_URL` for a hosted preview. Confirm product details, contact destinations, policies, and the production domain before any live store launch.