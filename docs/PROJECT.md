# Project Brief — Black Pearl Collectionz

> Use `[CONFIRM]` for unknown information. Do not guess.
>
> This repository was repurposed from Amazing Grace architecture. Reuse proven systems, not the previous client’s identity.

## 1. Project Identity

**Client / business name:** Black Pearl Collectionz, LLC  
**Public-facing name:** Black Pearl Collectionz  
**Legal business name:** Black Pearl Collectionz, LLC  
**Client contact:** Queen Matlock  
**Project type:** Ecommerce website redesign demo / multi-page concept  
**Current stage:** Internal demo / revision / pre-client review  
**Primary Veriq contact:** Mick / Veriq

### Project summary

Veriq is creating a redesigned web experience for Black Pearl Collectionz, an artisan business selling hand-poured soy candles and wax melts. The client’s current site is very dark and does not merchandise products prominently on the homepage. Queen explicitly asked for a more inviting, less-dark presentation with products on the first page.

The initial scope was a homepage mockup. The current demo scope has expanded to include polished About and Contact pages so the concept feels like a cohesive small website. Real ecommerce/payment/auth functionality is not part of the current demo.

---

## 2. Project Goals

### Primary goal

Show Queen a substantially warmer, more inviting, product-led redesign that makes Black Pearl Collectionz feel like a polished artisan ecommerce brand.

### Secondary goals

- Put real products prominently on the homepage.
- Preserve recognizable Black Pearl/BPC identity and bronze accents.
- Make the design feel custom rather than like a generic ecommerce template.
- Reuse authentic client photography effectively.
- Demonstrate a cohesive site experience across Home, About, and Contact.
- Create a strong foundation that could later connect to a real ecommerce backend if the client proceeds.

### Primary conversion

**CTA label:** SHOP CANDLES  
**Destination:** Demo/future shop destination

### Secondary conversions

- SHOP WAX MELTS
- SHOP ALL PRODUCTS
- Read About
- Contact Black Pearl
- Visit Instagram/Facebook/TikTok

### Success should feel like

A visitor immediately understands that Black Pearl sells hand-poured soy candles and wax melts, sees products within the first scroll, experiences a warmer/lighter brand presentation than the current site, and has obvious paths to shop, learn about the brand, or contact Queen.

---

## 3. Audience

### Primary customer

Online shoppers looking for candles or wax melts that add fragrance, warmth, ambiance, and an intentional self-care/home atmosphere.

### Secondary audiences

- Existing Black Pearl customers
- Social followers discovering the brand through Facebook/Instagram/TikTok
- Gift shoppers
- Returning customers looking for products/orders/contact information

### Customer questions the site must answer quickly

- What does Black Pearl Collectionz sell?
- Can I see products immediately?
- What kinds of products are available?
- What is the brand/story behind the products?
- How do I shop?
- How do I contact the business?
- Where can I follow the brand socially?
- If full ecommerce is implemented later, how do I manage my cart/account/order?

---

## 4. Service Area / Market

This is primarily an ecommerce product brand based on the information currently provided.

**Primary city/region:** [CONFIRM]  
**State:** [CONFIRM]  
**Additional service areas:** [CONFIRM / likely online shipping rather than service area]  
**Areas explicitly NOT served:** [CONFIRM]

### Geographic notes

Do not infer Iowa, Des Moines, or any other location from Veriq/user context. No location-targeted SEO should be added until the client’s real business location/market is confirmed.

---

## 5. Scope

### Included pages

| Page | Route | Purpose | Status |
|---|---|---|---|
| Home | `/` | Present brand, products, categories, story, social proof/imagery, and shopping CTAs | Implemented / internally approved |
| About | `/about` | Reframe current About/Mission/Satisfaction content in the new visual system | Current revision |
| Contact | `/contact` | Provide email, hours, social links, and polished contact form UI | Current revision |
| Shop | `[existing/demo destination]` | Product shopping destination | Demo/future integration; not a full Veriq build yet |

### Homepage section order

1. Announcement bar
2. Header/navigation
3. Split product-led hero
4. Featured products
5. Brand story
6. Shop by category
7. Social/gallery
8. Dark footer

### About page direction

1. Editorial About hero
2. About Black Pearl Collectionz
3. Mission
4. Crafted With Care
5. 100% Satisfaction Guaranteed
6. Queen/human touch where confirmed
7. Social CTA
8. Footer

### Contact page direction

1. Contact hero
2. Contact form
3. Email
4. Published hours
5. Social links
6. Footer

### Explicitly out of current demo scope

- Real card processing
- Custom checkout
- Real customer account/auth system
- Inventory management
- Order history
- Product admin CMS
- Shipping/tax configuration
- Payment payouts
- Full product migration
- Live form routing unless explicitly configured
- Production domain/DNS changes
- Production analytics
- Legal policy authoring

### Future ideas, not current commitments

- Headless Shopify storefront/backend
- Shopify-hosted checkout
- Real cart integration
- Customer account integration
- Product/variant/inventory migration
- Shipping, discounts, tax, returns
- Real contact form/email integration
- Analytics and ecommerce event tracking
- SEO/product structured data

---

## 6. Products / Offerings

### Primary offerings

1. Hand-poured soy candles
2. Wax melts

### Current observed product examples

- Strawberry Allure
- Pink Obsession
- Mystique Island
- Exotic Temptation
- Citrus Seduction
- Exotic Temptation Wax Melt
- Citrus Seduction Wax Melt

See `CONTENT.md` for observed prices and content rules.

### Offerings that must NOT be shown without confirmation

- Skincare products
- Any product category not confirmed by Queen/current store
- Unsupported ingredients/benefits

---

## 7. Features and Integrations

| Feature | Required? | Current status | Notes |
|---|---:|---|---|
| Contact form | Yes for demo UI | Demo/current revision | Do not route live until destination is confirmed |
| Click-to-call | No / unknown | Not implemented | No phone provided |
| Email link | Yes | Can be implemented | BlackPearlCollectionzLLC@gmail.com |
| Analytics | Future | Not confirmed | Do not add inherited IDs |
| CMS/admin editing | Future | Not in demo | Ecommerce backend may provide this |
| Authentication | Future | UI only | Existing client site has account login; demo does not implement it |
| Ecommerce/payment | Future if client proceeds | UI/demo only | Prefer established hosted commerce/payment platform |
| Cart | Future | UI/demo only | Do not imply real state if not implemented |
| Social links | Yes | Must be correct | Facebook, Instagram, TikTok confirmed |
| External API | Future | None required now | Shopify Storefront API is a possible later architecture |

### Form behavior

**Form name:** Contact Form  
**Recipient/destination:** [CONFIRM]  
**Fields:** Name, Email, Message  
**Success behavior:** Do not fake a successful send if no backend exists  
**Spam prevention:** [CONFIRM / reuse only correctly configured infrastructure]  
**Demo-only or live:** Demo only until explicitly wired

Never use inherited Amazing Grace recipients/endpoints.

---

## 8. Technical Context

### Existing stack

This repository was cloned from the Amazing Grace Veriq project.

**Framework:** Next.js-based project — `[SYNC exact version from package.json]`  
**Language:** TypeScript/JavaScript — `[SYNC from repo]`  
**Styling:** Existing project styling system — `[SYNC exact Tailwind/CSS setup from repo]`  
**Hosting:** Vercel is the expected demo hosting path; verify actual project config  
**Forms/email:** Demo-only unless explicitly configured for Black Pearl  
**Analytics:** [CONFIRM / remove inherited IDs]  
**Other integrations:** None required for the current demo

### Technical constraints

- Preserve working current homepage architecture.
- Do not upgrade major framework versions as part of content/design work.
- Do not add unnecessary dependencies.
- Keep demo/staging noindex.
- Do not commit secrets.
- Do not implement raw card handling.

### Do not change without approval

- Framework major version
- Hosting provider
- Production domain/DNS
- Production environment variables
- Payment/ecommerce platform
- Live form routing
- Analytics properties

---

## 9. Reuse / Legacy Project Audit

### Was this repository repurposed?

**Source project:** Amazing Grace / Amazing Grace Antiques  
**Reason for reuse:** Strong layout architecture, editorial spacing, responsive system, typography foundation, and reusable components.

### What may be safely reused

- Generic layout/container system
- Responsive utilities
- Header/footer architecture where rebranded
- Typography infrastructure
- Generic image/layout components
- Accessible form primitives
- General animation/utilities if still appropriate

### What must be re-evaluated for this client

- Page hierarchy
- Copy
- Calls to action
- Colors/typography
- Photography
- Product merchandising
- Trust signals
- SEO
- Metadata/schema
- Forms/integrations
- Social links
- Legal links
- Analytics
- Favicons/OG images

### Legacy identifiers/content to remove everywhere

Search for and remove/review:

- `Amazing Grace`
- `Amazing Grace Antiques`
- `amazing-grace`
- `amazing grace`
- `antiques`
- `antique`
- `vintage finds` where specific to previous client
- previous-client store address
- previous-client phone
- previous-client email
- previous-client social URLs
- previous-client events/calendar content
- previous-client “sell item” / item submission content
- previous-client store hours
- previous-client logos/favicons/OG images
- previous-client metadata/JSON-LD/schema
- previous-client form recipients/endpoints
- previous-client analytics IDs
- old event/store/sell routes that no longer belong
- old image alt text/captions
- old README/docs content

**Exact old domain/email/phone:** `[CONFIRM from repository audit and add here]`

Before client delivery, search source files, `/public`, metadata, manifests, sitemaps/robots, tests, fixtures, environment examples, and docs.

---

## 10. Client Feedback / Direction

### Current approved direction

- More inviting
- Less dark
- Products on the first page
- Warm ivory/cream/blush palette
- Bronze/copper identity retained
- Editorial serif typography
- Product-led ecommerce feel
- Authentic client imagery
- Homepage structure is internally approved; avoid further broad redesign

### Current requested revisions

- Correct social links everywhere
- Add real `/about`
- Add real `/contact`
- Preserve homepage
- Ensure Facebook is present
- Use Instagram `@queenspalace.bpc`
- Use TikTok `@blackpearlcollectionz`
- Flesh out About using current site’s About/Mission/Satisfaction information
- Flesh out Contact using current email/hours

### Explicit client dislikes / avoid

- Dark/black-heavy presentation
- Products hidden away from homepage
- Generic/template feel

---

## 11. Open Questions

Questions that materially affect production implementation:

- [ ] Does Queen want the full site rebuilt if she approves the demo?
- [ ] Which ecommerce platform should power production?
- [ ] What exact products/variants/inventory need migration?
- [ ] Are existing customer accounts/orders migrated?
- [ ] What shipping/tax/discount rules exist?
- [ ] What are the real return/refund policies?
- [ ] What is the production contact-form recipient/workflow?
- [ ] Is there a public phone number?
- [ ] Is there a physical business address/location to display?
- [ ] Is “small-batch” accurate?
- [ ] Is Queen’s public title “Founder & Candle Maker”?
- [ ] Does the business still sell skincare products?

Questions that can wait until later:

- [ ] Analytics provider/property
- [ ] Google Business Profile
- [ ] Newsletter/email marketing
- [ ] Final SEO geography
- [ ] Production legal copy review

---

## 12. Milestones

| Milestone | Status | Notes |
|---|---|---|
| Initial lead/client request gathered | Complete | Queen submitted site + redesign goals |
| Homepage concept | Complete | Approved internally |
| Internal homepage refinement | Complete | Final direction reached |
| About page | In progress | Current expansion |
| Contact page | In progress | Current expansion |
| Social links corrected | In progress | Exact URLs confirmed |
| Internal Veriq QA | Pending | Desktop/tablet/mobile + routes |
| Client review | Pending | Demo not yet sent |
| Client approval | Pending | |
| Ecommerce scope | Pending | Only if client proceeds |
| Forms/integrations live | Out of current demo scope | |
| Production SEO/launch | Out of current demo scope | |

---

## 13. Launch / Deployment

**Production domain:** https://blackpearlcollectionz.com — currently belongs to the existing client site; do not alter without approval  
**Current temporary/demo URL:** [CONFIRM after Vercel deployment]  
**Hosting project:** [CONFIRM]  
**Domain owner:** Client / [CONFIRM exact account ownership]  
**DNS status:** Existing production site active; no Veriq cutover authorized  
**Production form destination confirmed:** No  
**Analytics confirmed:** No

### Demo deployment rules

- Deploy to a clean Vercel preview/demo URL.
- Add `noindex, nofollow`.
- Do not alter the client’s real domain/DNS.
- Do not imply checkout/account features are live if they are not.
- Verify nonfunctional demo links do not lead to broken/error states.

---

## 14. Acceptance Criteria for Client Demo

The demo is ready to send when:

- [ ] Black Pearl identity is correct everywhere
- [ ] Homepage matches approved design direction
- [ ] `/about` is implemented and polished
- [ ] `/contact` is implemented and polished
- [ ] Home/About/Contact navigation works
- [ ] Facebook link is correct
- [ ] Instagram link is correct
- [ ] TikTok link is correct
- [ ] Email/hours are correct
- [ ] No Amazing Grace content/contact/metadata remains in user-visible demo routes
- [ ] Demo-only form behavior is honest
- [ ] Ecommerce/account/cart UI does not produce broken experiences
- [ ] Mobile/tablet/desktop layouts are usable
- [ ] Staging is noindex
- [ ] No unsupported claims or fake proof were added
- [ ] Applicable lint/type/build checks pass
- [ ] Remaining production limitations are documented
