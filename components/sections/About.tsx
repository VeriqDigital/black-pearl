import Image from "next/image";
import Container from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Icons";
import storyImage from "@/public/images/Candle Misc.png";

export default function About() {
  return (
    <section id="about" className="story-section">
      <Container className="story-grid">
        <div className="story-visual">
          <div className="story-photo">
            <Image
              src={storyImage}
              alt="The warm amber glow of a lit Black Pearl candle"
              fill
              placeholder="blur"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Our story</p>
          <h2>
            Made With <em>Intention.</em>
          </h2>
          <p>
            A familiar fragrance. A soft glow. A moment that belongs just to
            you.
          </p>
          <p>
            Artisan candle maker Queen Matlock puts care into every pour. Her
            small-batch soy candles and wax melts are made to turn your everyday
            spaces into somewhere you love to be.
          </p>
          <a href="#contact" className="text-link">
            Discover our story <Arrow />
          </a>
          <div className="maker-signature">
            <span>Queen</span>
            <p>
              QUEEN MATLOCK
              <br />
              <span>Founder &amp; candle maker</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
