# Black Pearl Collectionz — Veriq Project Context

This repository contains the Black Pearl Collectionz website redesign/demo being built by Veriq.

The project documentation in `/docs` is the current source of truth for Codex. The site was started from reusable Veriq/Amazing Grace architecture, but all public-facing identity, content, imagery, metadata, links, and integrations must be specific to Black Pearl Collectionz.

## Current Stage

- Client: **Black Pearl Collectionz, LLC**
- Public-facing brand: **Black Pearl Collectionz**
- Client contact: **Queen Matlock**
- Stage: **Internal demo / pre-client review**
- Current scope: **Homepage redesign + About + Contact demo pages**
- Current live client site: **https://blackpearlcollectionz.com**
- Ecommerce: **Existing client business sells online; the Veriq demo does not yet implement real checkout, customer accounts, payments, or product administration**
- Demo/staging pages should remain **noindex** until a production launch is approved.

## Files

- `AGENTS.md` — stable Veriq-wide instructions for how Codex should work
- `docs/PROJECT.md` — current project scope, goals, page status, legacy cleanup, integrations, and acceptance criteria
- `docs/BRAND.md` — Black Pearl visual identity, design direction, imagery rules, and voice
- `docs/CONTENT.md` — confirmed business facts, products, contact information, social profiles, claims, page copy, and forms
- `docs/SEO.md` — current SEO strategy, metadata direction, schema rules, and demo indexability
- `docs/DECISIONS.md` — chronological record of client/user feedback and project decisions

## Workflow

Before substantial work:

1. Read `AGENTS.md`.
2. Read the relevant files in `/docs`.
3. Treat the user's current instruction as highest priority.
4. Use confirmed content only; leave unknowns as `[CONFIRM]`.
5. Search the repository for Amazing Grace / antique-store residue before considering rebrand work complete.
6. Preserve the approved Black Pearl homepage direction unless the user explicitly requests a redesign.

## Current Design Direction

The approved demo direction is a warm, editorial ecommerce experience:

- warm ivory / cream backgrounds
- soft blush sections
- bronze/copper accents
- dark warm-brown footer
- elegant editorial serif headings
- restrained sans-serif UI/body copy
- authentic Black Pearl product photography
- product-led homepage merchandising
- minimal, purposeful motion
- no generic SaaS/AI-card aesthetic

The client specifically asked for the site to feel **more inviting, less dark**, with **products on the first page**.

## Important Current Links

- Website: https://blackpearlcollectionz.com
- Facebook: https://www.facebook.com/profile.php?id=100083099743693
- Instagram: https://www.instagram.com/queenspalace.bpc
- TikTok: https://www.tiktok.com/@blackpearlcollectionz
- Email: BlackPearlCollectionzLLC@gmail.com

## Suggested Codex Prompt

> Read `AGENTS.md` and all applicable project documentation in `/docs` before making changes. This is the Black Pearl Collectionz client project. Preserve the approved warm editorial ecommerce direction, use only confirmed client facts, and audit for Amazing Grace/antique-store residue before finishing. Do not implement real ecommerce/payment/auth functionality unless the user explicitly brings it into scope.

## Before Client Delivery

At minimum:

- verify desktop/tablet/mobile layouts
- verify `/`, `/about`, and `/contact`
- verify Facebook, Instagram, and TikTok links
- verify no Amazing Grace identity remains
- verify contact information and hours
- verify demo forms do not silently pretend to be live
- verify ecommerce/account/cart UI is clearly demo-only internally
- verify staging is noindex
- run applicable lint/type/build checks
