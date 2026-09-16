import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SocialLinks from "@/components/ui/SocialLinks";
import { Arrow } from "@/components/ui/Icons";
import { businessConfig } from "@/config/business";
import { siteConfig, socialImage } from "@/config/site";
import heroImage from "@/public/images/Strawberry Allure Top.png";
import craftImage from "@/public/images/Candle Misc 2.png";

const description =
  "Meet Black Pearl Collectionz and founder Queen Matlock. Hand-poured soy candles and wax melts, thoughtfully made for everyday moments of self-care.";
export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Black Pearl Collectionz",
    description,
    url: "/about",
    siteName: siteConfig.shortName,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Black Pearl Collectionz",
    description,
    images: [socialImage.url],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="about-page-hero">
        <Container className="about-page-hero-grid">
          <div className="editorial-copy">
            <p className="eyebrow">Our story</p>
            <h1>
              A little luxury,
              <br />
              <em>made with heart.</em>
            </h1>
            <p className="editorial-body">
              Black Pearl Collectionz was created to bring warmth, fragrance,
              and moments of self-care into everyday spaces through handcrafted
              candles and wax melts.
            </p>
          </div>
          <div className="about-hero-photo">
            <Image
              src={heroImage}
              alt="Handcrafted strawberry wax details on a Black Pearl Strawberry Allure candle"
              fill
              placeholder="blur"
              preload
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>
      <Section tone="cream">
        <div className="about-introduction">
          <div>
            <p className="eyebrow">About Black Pearl Collectionz</p>
            <h2>
              Made for the moments
              <br />
              that feel like <em>yours.</em>
            </h2>
          </div>
          <div className="editorial-copy">
            <p className="editorial-body">
              Your space should feel like a sanctuary. Black Pearl Collectionz
              began with that simple idea: to make a little room for self-care,
              right where you are.
            </p>
            <p className="editorial-body">
              Founder and candle maker Queen Matlock brings care to every pour,
              creating hand-poured soy candles and thoughtfully formulated wax
              melts that set the mood for the moments you make your own.
            </p>
            <p className="editorial-body">
              Black Pearl Collectionz was established to provide individuals
              with the ultimate self-care experience within the sanctuary of
              their own space. Elevate your surroundings with our meticulously
              crafted hand-poured soy candles, setting the perfect ambiance.
              Then, pamper yourself with our luxurious skin care essentials,
              carefully formulated with nourishing natural ingredients.
            </p>
            <div className="maker-signature">
              <span>Queen</span>
              <p>
                QUEEN MATLOCK
                <br />
                <span>Founder &amp; Candle Maker</span>
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="blush" className="about-mission">
        <div className="editorial-centered">
          <p className="eyebrow">A little intention, every day</p>
          <h2>Our Mission</h2>
          <p className="mission-statement">
            To make everyday spaces feel warmer, more intentional, and a little
            more special through handcrafted fragrance.
          </p>
          <p className="editorial-body">
            Our mission at Black Pearl Collectionz is to empower individuals to
            prioritize self-care by offering high-quality, handcrafted products
            that enhance well-being and create a sense of sanctuary within their
            own space. Through our carefully curated selection of soothing
            candles and nourishing skin care essentials, we aim to inspire
            moments of relaxation, rejuvenation, and self-indulgence, fostering
            a deeper connection to oneself and promoting overall wellness.
          </p>
        </div>
      </Section>
      <Section tone="ivory">
        <div className="about-craft-grid">
          <div className="about-craft-photo">
            <Image
              src={craftImage}
              alt="Black Pearl candles on a wooden display beside colorful flower and butterfly wax melts"
              fill
              placeholder="blur"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">Crafted with care</p>
            <h2>
              From our hands,
              <br />
              <em>to your home.</em>
            </h2>
            <p className="editorial-body">
              From hand-poured soy candles to wax melts, every piece reflects a
              personal touch. Thoughtful fragrance, small-batch care, and the
              little details in each presentation make the collection feel
              unmistakably Black Pearl.
            </p>
            <p className="editorial-body">
              Made with care. Chosen by you. Ready to become part of your
              everyday.
            </p>
            <Link href="/#shop" className="text-link">
              Explore the collection <Arrow />
            </Link>
          </div>
        </div>
      </Section>
      <Section tone="cream">
        <div className="editorial-centered about-guarantee">
          <p className="eyebrow">Care beyond the candle</p>
          <h2>100% Satisfaction Guaranteed</h2>
          <p className="editorial-body">
            We are committed to ensuring 100% satisfaction with every aspect of
            your self-care journey. From the quality of our handmade products to
            the level of service we provide. If for any reason you&apos;re not
            completely satisfied with your experience, we&apos;re here to make it
            right. Our dedication to your satisfaction is unwavering, ensuring
            that every moment you spend with our products leaves you feeling
            replenished, rejuvenated, and wholly fulfilled.
          </p>
          <Link href="/contact" className="text-link">
            Get in touch <Arrow />
          </Link>
        </div>
      </Section>
      <section className="about-social-cta">
        <Container>
          <p className="eyebrow">A little inspiration for your everyday</p>
          <h2>
            Follow the <em>Glow</em>
          </h2>
          <a
            className="about-social-handle"
            href={businessConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {businessConfig.instagramHandle}
          </a>
          <SocialLinks labels />
        </Container>
      </section>
    </>
  );
}
