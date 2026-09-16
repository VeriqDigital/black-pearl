# Project Decisions Log — Black Pearl Collectionz

> `PROJECT.md`, `BRAND.md`, `CONTENT.md`, and `SEO.md` reflect the CURRENT approved state. This file records how the direction changed over time so Codex does not revive superseded decisions.

## Current Priority

**What Codex should optimize for right now:**  
Finish the Black Pearl demo as a cohesive small website: preserve the approved homepage, add/refine `/about` and `/contact`, correct all social links, remove Amazing Grace residue, and complete desktop/mobile QA before sending the concept to Queen.

**Waiting on:**  
- Client reaction/approval after the demo is sent
- Confirmation of production ecommerce scope/platform if Queen wants to proceed
- Confirmation of production contact-form routing
- Confirmation of phone/address/location details if they should be public
- Confirmation of any unsupported copy details such as “small-batch” and the public “Founder” title

**Do not work on yet unless explicitly requested:**  
- Real checkout/payment processing
- Custom card handling
- Customer account/auth implementation
- Product admin/inventory migration
- Production DNS/domain cutover
- Live email/form routing
- Full Shopify migration

---

## Decision Log

### 2026-09-15 — Expand demo to About and Contact

**Source:** Veriq/user  
**Status:** Active

**Decision:**

The demo should no longer be only a homepage. Add a complete `/about` page and `/contact` page using the same approved Black Pearl visual system and content available from the existing client site.

**Affected areas:**

- Project scope
- Navigation
- About
- Contact
- Content
- Social links

**Implementation notes:**

- Homepage direction remains approved and should not be redesigned.
- About page should reinterpret the client’s current About/Mission/Satisfaction content in the lighter Black Pearl visual language.
- Contact page should use the current published email and hours.
- Contact form may remain demo-only until routing is explicitly approved.

**Supersedes:** Earlier homepage-only demo scope.

**Follow-up:**

- [ ] Build/verify `/about`
- [ ] Build/verify `/contact`
- [ ] Confirm form behavior before production

---

### 2026-09-15 — Correct social profiles

**Source:** Veriq/user  
**Status:** Active

**Decision:**

Use the following exact social profiles everywhere:

- Facebook: https://www.facebook.com/profile.php?id=100083099743693
- Instagram: https://www.instagram.com/queenspalace.bpc
- TikTok: https://www.tiktok.com/@blackpearlcollectionz

The prior Instagram destination was incorrect and Facebook was missing.

**Affected areas:**

- Homepage
- Footer
- About
- Contact
- Shared social components

**Implementation notes:**

- Open external profiles safely in a new tab where appropriate.
- Do not invent additional social profiles.

**Supersedes:** Any previous placeholder/incorrect social URLs.

**Follow-up:**

- [ ] Search repository for stale social URLs

---

### 2026-09-15 — Ecommerce architecture should avoid custom payment handling

**Source:** Veriq/internal technical decision  
**Status:** Active recommendation; not yet client-approved production scope

**Decision:**

If the project proceeds to full ecommerce, Veriq should use an established commerce/payment platform rather than building custom card handling. Headless Shopify with Shopify-hosted checkout is the current preferred architecture to evaluate.

**Why / context:**

Black Pearl already sells products online and the redesign presents ecommerce/account/cart UI. Veriq should not directly process or store raw card data.

**Affected areas:**

- Future ecommerce
- Payments
- Product/catalog integration
- Customer accounts
- Security

**Implementation notes:**

- Demo cart/account/shop UI does not imply real functionality.
- Queen/Black Pearl should own the commerce/payment account and receive payouts directly.
- Final platform and migration scope remain to be confirmed before quoting/implementation.

**Supersedes:** None.

**Follow-up:**

- [ ] If client proceeds, audit current products/orders/shipping/discounts/accounts before final scope
- [ ] Confirm Shopify vs other provider

---

### 2026-09-15 — Final homepage direction approved internally

**Source:** Veriq/user  
**Status:** Active

**Decision:**

The current Black Pearl homepage is good enough for client presentation after final QA. Stop broad redesign cycles and preserve the current structure.

**Affected areas:**

- Homepage
- Brand
- Layout
- QA

**Implementation notes:**

Approved structure:

1. Announcement bar
2. Header
3. Split product-led hero
4. Featured products
5. Story section
6. Shop by category
7. Social gallery
8. Dark footer

The latest refinement uses a lit-candle image in the story section and a more cohesive wax-melt category image.

**Supersedes:** Earlier refinement iterations.

**Follow-up:**

- [ ] Verify mobile/tablet
- [ ] Verify demo links/routes
- [ ] Verify noindex on staging

---

### 2026-09-14 — Client requested lighter, more inviting, product-first redesign

**Source:** Queen Matlock lead form  
**Status:** Active

**Decision:**

Queen described Black Pearl Collectionz as an artisan candle business selling soy candles and wax melts. She asked for the website to be:

- more inviting
- less dark
- products visible on the first page

**Affected areas:**

- Homepage
- Brand
- Ecommerce merchandising
- Content

**Implementation notes:**

- Preserve Black Pearl/bronze identity without making the whole site black.
- Use authentic client product imagery.
- Put featured products directly below the hero.

**Supersedes:** Current client-site dark visual direction for the redesign concept.

**Follow-up:** None.

---

### 2026-09-14 — Reuse Amazing Grace architecture, not identity

**Source:** Veriq/user  
**Status:** Active

**Decision:**

The Amazing Grace repository was cloned as a starting point because its spacing, editorial structure, typography foundation, and reusable layout architecture were useful.

The Black Pearl result must not feel like an Amazing Grace reskin.

**Affected areas:**

- Project architecture
- Brand
- Legacy cleanup
- Content
- SEO
- Forms

**Implementation notes:**

Reusable:
- layout systems
- responsive patterns
- typography infrastructure
- generic components/utilities

Must remove/replace:
- Amazing Grace name/content
- antique imagery
- events
- sell-item content
- store-location-specific content
- old metadata/schema
- old contact/form routing
- old social links/assets

**Supersedes:** None.

**Follow-up:**

- [ ] Complete repository-wide legacy audit before delivery
