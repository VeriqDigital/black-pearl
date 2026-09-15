import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig, socialImage } from "@/config/site";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const bodyFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const title = "Black Pearl Collectionz | Hand-Poured Soy Candles & Wax Melts";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: title, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  category: "shopping",
  keywords: [
    "Black Pearl Collectionz",
    "hand-poured soy candles",
    "wax melts",
    "small-batch candles",
  ],
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    locale: siteConfig.locale,
    type: "website",
    url: "/",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: [socialImage.url],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
