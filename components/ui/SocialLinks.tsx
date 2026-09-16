import { businessConfig } from "@/config/business";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./Icons";

const profiles = [
  { name: "Facebook", href: businessConfig.facebook, Icon: FacebookIcon },
  { name: "Instagram", href: businessConfig.instagram, Icon: InstagramIcon },
  { name: "TikTok", href: businessConfig.tiktok, Icon: TikTokIcon },
];

export default function SocialLinks({
  labels = false,
  className = "",
}: {
  labels?: boolean;
  className?: string;
}) {
  return (
    <div className={`social-links ${className}`}>
      {profiles.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Black Pearl Collectionz on ${name}`}
        >
          <Icon />
          {labels && <span>{name}</span>}
        </a>
      ))}
    </div>
  );
}
