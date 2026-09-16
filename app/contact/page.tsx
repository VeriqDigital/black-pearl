import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import { businessConfig } from "@/config/business";
import { siteConfig, socialImage } from "@/config/site";

const description = "Get in touch with Black Pearl Collectionz for questions about our handcrafted candles, wax melts, or your order. Find our email, hours, and social profiles.";
export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Black Pearl Collectionz", description, url: "/contact",
    siteName: siteConfig.shortName, type: "website", images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: "Contact | Black Pearl Collectionz", description, images: [socialImage.url] },
};

const hours = [
  ["Monday", "9:00 AM – 5:00 PM"],
  ["Tuesday", "9:00 AM – 5:00 PM"],
  ["Wednesday", "9:00 AM – 5:00 PM"],
  ["Thursday", "9:00 AM – 5:00 PM"],
  ["Friday", "9:00 AM – 5:00 PM"],
  ["Saturday", "Closed"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <>
      <section className="contact-page-hero">
        <Container>
          <div className="editorial-centered">
            <p className="eyebrow">Get in touch</p>
            <h1>We’d love to <em>hear from you.</em></h1>
            <p className="editorial-body">
              Have a question about a product, an order, or Black Pearl
              Collectionz? Send a message and we’ll get back to you as soon as we can.
            </p>
          </div>
        </Container>
      </section>
      <section className="contact-content" aria-label="Contact details and message form">
        <Container className="contact-grid">
          <div className="contact-details">
            <div>
              <h2 className="eyebrow">Email us</h2>
              <a className="contact-email" href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
            </div>
            <div className="contact-hours">
              <h2 className="eyebrow">Our hours</h2>
              <dl>
                {hours.map(([day, time]) => (
                  <div key={day}><dt>{day}</dt><dd>{time}</dd></div>
                ))}
              </dl>
            </div>
            <div className="contact-social">
              <h2 className="eyebrow">Connect with us</h2>
              <SocialLinks labels />
            </div>
          </div>
          <div className="contact-form-panel">
            <h2>A note to <em>Queen.</em></h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
