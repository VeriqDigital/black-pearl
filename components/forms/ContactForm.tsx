"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Icons";
import { businessConfig } from "@/config/business";

export default function ContactForm() {
  const [attempted, setAttempted] = useState(false);
  return (
    <form
      className="contact-form"
      aria-label="Contact Black Pearl Collectionz"
      aria-describedby="contact-preview-note"
      onSubmit={(event) => {
        event.preventDefault();
        setAttempted(true);
      }}
    >
      <p id="contact-preview-note" className="contact-form-note">
        This preview form doesn’t send messages yet. Please <a href={`mailto:${businessConfig.email}`}>email us directly</a> to get in touch.
      </p>
      <div>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" autoComplete="name" required maxLength={120} />
      </div>
      <div>
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div>
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" rows={5} required maxLength={5000} />
      </div>
      <button className="solid-link" type="submit">Send message <Arrow /></button>
      <p role="status" className="contact-form-status">
        {attempted && "Your message has not been sent. Please use the email link above to contact us directly."}
      </p>
    </form>
  );
}
