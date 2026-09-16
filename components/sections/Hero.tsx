import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Arrow } from "@/components/ui/Icons";
import heroImage from "@/public/images/Strawberry Allure.png";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Hand-Poured for
            <br />
            the Moments
            <br />
            <em>That are all yours.</em>
          </h1>
          <p className="hero-description">
            Small-batch soy candles and wax melts designed to bring warmth,
            comfort, and unforgettable fragrance into your space.
          </p>
          <div className="hero-actions">
            <Button href="/?collection=candles#shop">
              Shop candles <Arrow />
            </Button>
            <Button variant="outline" href="/?collection=melts#shop">
              Shop wax melts
            </Button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src={heroImage}
              alt="Strawberry Allure, a hand-poured pink candle decorated with sculpted wax strawberries"
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 720px"
              preload
              placeholder="blur"
            />
          </div>
          <Link
            className="hero-caption"
            href="/?product=strawberry-allure#shop"
            aria-label="Discover Strawberry Allure"
          >
            <span>
              <strong>Strawberry Allure</strong>
              <span>Hand-poured soy candle · $22.00</span>
            </span>
            <Arrow />
          </Link>
        </div>
      </Container>
    </section>
  );
}
