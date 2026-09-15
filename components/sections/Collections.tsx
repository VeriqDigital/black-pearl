import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { Arrow } from "@/components/ui/Icons";

export default function Collections() {
  return (
    <Section id="collections" tone="cream" className="collections-section">
      <div className="center-heading">
        <p className="eyebrow">Shop by category</p>
        <h2>
          Explore Our <em>Collection.</em>
        </h2>
      </div>
      <div className="category-grid">
        <Link
          className="category-tile candle-category"
          href="/?collection=candles#shop"
        >
          <div className="category-photo">
            <Image
              src="/images/Exotic Temptation Candle.png"
              alt="Exotic Temptation candle with hand-sculpted pink wax details"
              fill
              sizes="(max-width: 700px) 88vw, 44vw"
            />
          </div>
          <div className="category-copy">
            <div>
              <h3>Candles</h3>
              <p>Set the mood.</p>
            </div>
            <span className="text-link">
              Shop candles <Arrow />
            </span>
          </div>
        </Link>
        <Link
          className="category-tile melt-category"
          href="/?collection=melts#shop"
        >
          <div className="category-photo">
            <Image
              src="/images/Exotic Temptation Wax Melt Back.png"
              alt="Soft pink Exotic Temptation wax melts"
              fill
              sizes="(max-width: 700px) 88vw, 44vw"
            />
          </div>
          <div className="category-copy">
            <div>
              <h3>Wax Melts</h3>
              <p>Fragrance your space.</p>
            </div>
            <span className="text-link">
              Shop wax melts <Arrow />
            </span>
          </div>
        </Link>
      </div>
    </Section>
  );
}
