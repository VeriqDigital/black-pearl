import Image from "next/image";
import Container from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/Icons";
import { businessConfig } from "@/config/business";
const gallery = [
  { image: "Strawberry Allure Top.png", alt: "Strawberry-shaped wax details" },
  {
    image: "Exotic Temptation Candle Top.png",
    alt: "Hand-poured pink wax details on an Exotic Temptation candle",
  },
  {
    image: "Candle Misc 2.png",
    alt: "Black Pearl candles and colorful wax melts on display",
  },
  {
    image: "Citrus Seduction Wax Melt Back.png",
    alt: "Pink and yellow Citrus Seduction wax melts",
  },
  {
    image: "Pink Obsession Candle Top.png",
    alt: "Delicate white wax flowers on a Pink Obsession candle",
  },
];
export default function SocialGallery() {
  return (
    <section className="social-section">
      <Container>
        <div className="social-heading">
          <p className="eyebrow">Follow the glow</p>
          <h2>
            <a
              className="instagram-link"
              href={businessConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon /> @blackpearlcollectionz
            </a>
          </h2>
        </div>
        <div className="social-grid">
          {gallery.map(({ image, alt }) => (
            <a
              key={image}
              className="social-photo"
              href={businessConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alt} — visit Black Pearl Collectionz on Instagram`}
            >
              <Image
                src={`/images/${image}`}
                alt={alt}
                fill
                sizes="(max-width: 700px) 44vw, 18vw"
              />
              <span>
                <InstagramIcon />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
