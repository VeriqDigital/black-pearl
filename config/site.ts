const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const socialImage = {
  url: "/images/Banner.png",
  width: 1280,
  height: 784,
  alt: "Black Pearl Collectionz bronze BPC branding",
} as const;
export const siteConfig = {
  name: "Black Pearl Collectionz, LLC",
  shortName: "Black Pearl Collectionz",
  description:
    "Small-batch, hand-poured soy candles and wax melts by Queen Matlock. Discover a little everyday luxury with Black Pearl Collectionz.",
  locale: "en_US",
  siteUrl: (configuredSiteUrl || "http://localhost:3000").replace(/\/+$/, ""),
} as const;
