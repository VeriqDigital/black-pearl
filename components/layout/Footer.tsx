"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Modal from "@/components/ui/Modal";
import { Arrow, Sparkle } from "@/components/ui/Icons";
import SocialLinks from "@/components/ui/SocialLinks";
import { footerLinks } from "@/config/navigation";

export default function Footer() {
  const [legal, setLegal] = useState<string | null>(null);
  return (
    <>
      <footer id="contact" className="site-footer">
        <Container>
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="wordmark">
                <span className="wordmark-name">Black Pearl</span>
                <span className="wordmark-rule">Collectionz, LLC</span>
              </Link>
              <p>
                Hand-poured, heart-filled,
                <br />
                always real.
              </p>
              <SocialLinks className="footer-social-links" />
            </div>
            <nav aria-label="Footer navigation">
              <h2 className="eyebrow">Explore</h2>
              {footerLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="footer-collection">
              <h2 className="eyebrow">Find your fragrance</h2>
              <Link href="/?collection=candles#shop">Soy candles</Link>
              <Link href="/?collection=melts#shop">Wax melts</Link>
              <Link href="/#shop">Our favorites</Link>
            </div>
            <div className="footer-contact">
              <Sparkle width={28} height={28} />
              <h2>
                Let’s talk <em>fragrance.</em>
              </h2>
              <p>
                A question, a little inspiration, or just a hello.
                <br />
                We’d love to hear from you.
              </p>
              <Link
                className="text-link"
                href="/contact"
              >
                Connect with Queen <Arrow />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Black Pearl Collectionz. All Rights Reserved.</p>
            <div>
              <button onClick={() => setLegal("Privacy Policy")}>
                Privacy Policy
              </button>
              <button onClick={() => setLegal("Terms and Conditions")}>
                Terms and Conditions
              </button>
            </div>
          </div>
        </Container>
      </footer>
      {legal && (
        <Modal title={legal} onClose={() => setLegal(null)}>
          <p className="eyebrow">Black Pearl Collectionz</p>
          <h2>{legal}</h2>
          <p className="legal-copy">
            This website is a design preview.{" "}
            {legal === "Privacy Policy"
              ? "The shop’s privacy policy will be available when the online store launches. This preview has no account registration, payment collection, or newsletter signup."
              : "Purchases are not available through this preview. Store terms, shipping information, and returns details will be published before online ordering opens."}
          </p>
          <button className="text-link" onClick={() => setLegal(null)}>
            Back to the collection <Arrow />
          </button>
        </Modal>
      )}
    </>
  );
}
