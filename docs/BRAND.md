# Brand Guide — Black Pearl Collectionz

> This file is the visual and verbal source of truth for Black Pearl Collectionz.
>
> The current approved website direction is the Black Pearl homepage demo already implemented in this repository. Preserve that identity unless the user explicitly asks for a redesign.

## 1. Brand Snapshot

**Brand name:** Black Pearl Collectionz  
**Legal business name:** Black Pearl Collectionz, LLC  
**Tagline/slogan:** No official tagline confirmed.  
**Current hero campaign line:** “Hand-Poured for the Moments That Matter.” — approved for the demo, not documented as the company’s permanent slogan.

### Brand in one sentence

A warm, handcrafted candle and wax-melt brand that should feel inviting, elevated, personal, and product-focused rather than dark or generic.

### Core brand traits

- Warm
- Handcrafted
- Premium
- Inviting
- Feminine
- Editorial
- Personal

### The website should feel

- Bright and welcoming
- Boutique and intentional
- Product-led
- Warmly luxurious
- Human and artisan-made
- Calm rather than busy

### The website should NOT feel

- Predominantly black/dark
- Gothic or severe
- Generic Shopify
- Generic AI-generated landing page
- SaaS/tech-oriented
- Overly corporate
- Cheap or template-heavy
- Overdecorated with rounded cards, gradients, pills, or effects

---

## 2. Logo

### Primary logo

Use the existing Black Pearl Collectionz / BPC logo asset already added to the project.

**File:** `[CONFIRM exact repo path]`  
**Preferred background:** Light/cream for the current header; approved logo variants may be used on dark backgrounds.  
**Minimum practical size:** Use the current header implementation as the starting point; do not shrink the wordmark to illegibility.

### Alternate marks

| Asset | File | Intended use |
|---|---|---|
| BPC circular mark | `[CONFIRM exact repo path]` | Compact header / favicon / small brand mark |
| Black Pearl wordmark | `[CONFIRM exact repo path]` | Header / footer where available |
| Light variant | `[CONFIRM if available]` | Dark footer/background |
| Dark/bronze variant | `[CONFIRM if available]` | Light background |

### Logo rules

- Do not distort aspect ratio.
- Do not recreate the logo when the client asset exists.
- Do not add shadows, outlines, or glow effects.
- Preserve clear space.
- Do not recolor outside the approved warm bronze/dark/light system unless an existing official variant supports it.

### Favicon / app icon

**Asset:** Prefer the BPC circular mark if technically suitable.  
**Status:** `[CONFIRM exact asset and generated favicon files]`

---

## 3. Color System

The current implemented homepage is the source of truth. The following values match the approved visual direction and current rendered concept closely; if the code already uses slightly different intentional tokens, keep the existing code tokens and update this table to match.

| Role | Name | Value | Usage |
|---|---|---|---|
| Primary accent | Black Pearl Bronze | `#945E42` | Announcement bar, primary CTA, small accents |
| Background | Warm Ivory | `#FFFDF9` | Main page background |
| Secondary background | Soft Blush | `#F4E8E1` | Hero/story sections |
| Secondary surface | Dusty Rose | `#EFDFD7` | Alternating warm surfaces |
| Dark | Warm Espresso | `#1E1913` | Footer, strongest contrast |
| Dark accent | Cocoa Brown | `#573B2B` | Headings/accents where appropriate |
| Muted accent | Warm Taupe | `#C7AC98` | Borders, quiet decorative detail |
| Text | Deep Warm Brown | `[SYNC FROM CURRENT CSS]` | Main body/headings |
| Muted text | Muted Warm Gray/Brown | `[SYNC FROM CURRENT CSS]` | Secondary copy |
| Border | Soft Warm Border | `[SYNC FROM CURRENT CSS]` | Inputs/dividers |

### Color hierarchy

- Warm ivory/cream should dominate.
- Blush should provide section rhythm without turning the page pink-heavy.
- Bronze/copper is an accent, especially for CTAs, labels, small rules, and emphasis.
- Dark brown/espresso should be reserved for the footer and selective high-contrast moments.
- The client explicitly asked for “less dark,” so black-heavy sections should not return.

### Avoid

- Large uninterrupted black sections outside the footer
- Cool blue/purple accents
- Generic gradients
- Neon colors
- Random new beige/brown shades that dilute the system

---

## 4. Typography

### Display / headings

**Font:** Use the elegant editorial serif already implemented in the current Black Pearl site.  
**Exact family:** `[CONFIRM from repo/font imports]`  
**Use:** H1, H2, editorial statements, product/category titles where appropriate.

### Body / UI

**Font:** Use the clean sans-serif already implemented.  
**Exact family:** `[CONFIRM from repo/font imports]`  
**Use:** Body copy, navigation, buttons, prices, labels, form UI.

### Accent typography

Use the italic variant of the primary serif sparingly for expressive words such as:

- “That Matter.”
- “Favorite.”
- “Intention.”
- “Collection.”

Do not introduce a third decorative font unless the approved logo itself contains custom lettering.

### Type personality

- Editorial
- Elegant
- Warm
- Boutique
- Refined but readable

### Type rules

- Body copy must remain easy to read.
- Avoid tiny luxury-brand text that becomes unusable on mobile.
- Use all-caps only for small eyebrows, labels, nav, and buttons where already established.
- Maintain strong line-height on long serif headlines.
- Keep italic emphasis deliberate rather than applying it to every heading.

---

## 5. Layout and Shape Language

### General composition

- Spacious editorial ecommerce layout
- Strong split hero
- Product imagery given generous visual weight
- Alternating light/soft-blush sections
- Clean section boundaries
- Editorial image/text pairings
- Product merchandising before long storytelling

### Container width

Follow the current implemented Black Pearl container/max-width system.

### Corner treatment

Mostly square or nearly square. Avoid rounded-card UI unless an existing component requires a very subtle radius.

### Borders

Subtle, warm, thin borders only where useful.

### Shadows

Minimal to none. Prefer composition, contrast, and whitespace over shadows.

### Icon style

Minimal outline icons for search, account, cart, and social UI.

### Spacing

Airy but not empty. Product sections should feel commercially useful, not like sparse art-direction exercises.

---

## 6. Hero Direction

### Hero objective

Within the first viewport, a visitor should understand:

1. Black Pearl Collectionz sells handcrafted soy candles and wax melts.
2. The brand is warm, inviting, and elevated.
3. Products are immediately shoppable/discoverable.
4. This redesign is substantially lighter and more product-led than the current client site.

### Preferred structure

- Eyebrow: handcrafted / small brand descriptor; do not use unsupported claims
- H1: **Hand-Poured for the Moments That Matter.**
- Supporting copy: concise description of soy candles and wax melts
- Primary CTA: **SHOP CANDLES**
- Secondary CTA: **SHOP WAX MELTS**
- Image: prominent real Black Pearl product/lifestyle photo
- Optional product callout card: restrained, ecommerce-oriented

### Hero imagery

**Preferred:** Real Black Pearl candle photography already in the project.  
**Focal point:** Product label/candle should remain legible and recognizable.  
**Desktop:** Preserve the current split text/image composition.  
**Mobile:** Stack/recompose so the headline, CTA, and product image remain strong without awkward cropping.

### Avoid in hero

- Stock candles replacing the client’s actual products
- Giant BPC graphic that obscures what the business sells
- Dark full-screen background
- Excessive badges/decorations
- Unsupported product claims

---

## 7. Photography and Imagery

### Priority order

1. Real Black Pearl product photography
2. Real Black Pearl lit-candle/lifestyle imagery
3. Real Black Pearl wax-melt/display imagery
4. Decorative graphics only if already part of the approved direction
5. Stock imagery only if the user explicitly approves it

### Best current asset types

| Asset | Best use | Crop/focal notes |
|---|---|---|
| Strawberry Allure candle | Hero / featured product | Keep product label and topping visible |
| Pink Obsession | Product grid | Consistent product-card crop |
| Mystique Island | Product grid | Consistent product-card crop |
| Exotic Temptation / Wax Melt | Product/category | Avoid overcropping label |
| Lit orange candle | About/story | Strong warmth and craft signal |
| Wax melt tray photography | Category/social | Keep colors cohesive |
| Product display photo | About/social | Useful for authentic business context |

**Exact paths:** `[SYNC FROM CURRENT /public assets]`

### Do not use

- Amazing Grace imagery
- Antique-store imagery
- Generic stock candles as substitutes for Queen’s products
- Another client’s photography
- Heavy filters that make the client’s products look artificial

### Image treatment

- Warm, natural presentation
- Intentional cropping
- Consistent product-card aspect ratios
- No excessive artificial blur or overlays
- Use object-position thoughtfully to protect product labels/focal points

---

## 8. UI Components

### Buttons

**Primary:** Bronze fill, light text, restrained square/near-square shape.  
**Secondary:** Light/cream background or transparent with warm border and dark text.  
**Hover/focus:** Small contrast/underline/arrow changes; clear keyboard focus.

### Cards

Cards are not a major design device. Product merchandising should feel editorial and flat rather than boxed into generic rounded containers.

### Navigation

- Clean light header
- Black Pearl/BPC branding centered or visually balanced
- Desktop links: Home, Shop, About, Contact
- Right-side ecommerce utility icons: search, account, cart
- Mobile menu should be simple, touch-friendly, and visually consistent

### Forms

- Light/cream editorial fields
- Clear labels
- Warm borders
- Comfortable mobile spacing
- No dark GoDaddy-style form recreation

### Trust/proof treatment

Confirmed proof may include:

- Authentic product imagery
- Existing “100% Satisfaction Guaranteed” statement, without inventing refund/legal details
- Founder/owner identity only where confirmed
- Social profiles

Do not fabricate reviews, stars, customer counts, awards, or certifications.

---

## 9. Motion

### Motion level

Subtle.

### Allowed

- Small hover scale on imagery
- Underline/arrow movement
- Button state transitions
- Gentle section/image reveals if already implemented and performant

### Avoid

- Scroll-jacking
- Large parallax on mobile
- Bounce effects
- Constant animation
- Anything that delays shopping/content access

Respect reduced-motion preferences.

---

## 10. Voice and Tone

### Voice

Warm, polished, personal, sensory, and confident without sounding grandiose.

### Copy should sound like

- A real artisan maker
- Inviting
- Calm
- Product-aware
- Human
- Boutique

### Copy should not sound like

- A tech startup
- A generic AI brochure
- Overly poetic to the point of saying nothing
- Aggressively salesy
- Medical/therapeutic
- Larger or more established than confirmed facts support

### Preferred terminology

| Use | Avoid | Notes |
|---|---|---|
| Hand-poured soy candles | “Non-toxic candles” | Non-toxic claim is not confirmed |
| Wax melts | “Chemical-free wax melts” | Unsupported |
| Artisan / handcrafted | “Luxury-grade” as a factual claim | Luxury is positioning, not a certification |
| Fragrance / ambiance | Therapeutic / healing claims | Avoid health claims |
| Self-care | Wellness treatment claims | Keep self-care as lifestyle positioning |

---

## 11. Design References

### External references supplied during concept development

- **Vellabox** — clean, product-first candle ecommerce merchandising
- **By Wysteria** — airy artisan presentation and approachable handmade feel
- **Capri Blue** — straightforward premium product catalog
- **Milwaukee Candle Co.** — editorial artisan collection presentation
- **Brooklyn Candle Studio** — rich lifestyle photography and premium hero treatment

Use these as directional references only. Do not copy their brand identity, copy, product photography, or proprietary layout details.

### Veriq/internal references

- Current Black Pearl homepage implementation — primary visual source of truth
- Amazing Grace source project — architecture/layout ideas may be reused, but no identity/content may survive

---

## 12. Responsive Design Notes

### Mobile priorities

- Hero value proposition and CTAs remain visible early
- Product photography stays large enough to sell
- Product grids do not become cramped
- Category tiles stack cleanly
- Contact form is full-width and easy to complete
- About image/text sections stack in a sensible order
- Social gallery stays useful rather than shrinking into tiny thumbnails
- No horizontal overflow

### Tablet priorities

- Check split hero balance around 768–1024px
- Avoid awkward two-column widths in story/about sections
- Ensure header navigation does not collide with logo/utilities
- Product grid should transition intentionally

### Desktop priorities

- Maintain editorial whitespace without excessive dead space
- Keep product section visually prominent
- Preserve strong alignment between major containers
- Avoid making the logo/header too small relative to the rest of the page

---

## 13. Accessibility Notes

**Known color contrast concerns:** Check bronze text on blush/ivory at small sizes.  
**Logo text requiring accessible duplicate text:** Ensure logo images have appropriate alt/accessible naming.  
**Motion concerns:** Keep optional motion subtle and reduced-motion aware.  
**Special interaction notes:** Ecommerce utility icons need accessible labels even while demo-only.

---

## 14. Final Brand Check

Before approval:

- [ ] Correct Black Pearl logo assets are used
- [ ] No Amazing Grace colors or imagery remain unintentionally
- [ ] Warm ivory/blush/bronze/dark-brown palette is consistent
- [ ] Typography matches the approved editorial direction
- [ ] Photography belongs to Black Pearl
- [ ] Image cropping is checked responsively
- [ ] Products appear prominently on the homepage
- [ ] The site feels substantially lighter than the current client site
- [ ] UI patterns feel cohesive
- [ ] The design does not look like a generic ecommerce/AI reskin
- [ ] Social profile links are correct
