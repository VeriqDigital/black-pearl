import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement>;
const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};
export const Arrow = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 12h15m-5-5 5 5-5 5" />
  </svg>
);
export const SearchIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);
export const UserIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="7" r="3.5" />
    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
  </svg>
);
export const BagIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 8h14l1 13H4L5 8Z" />
    <path d="M8 9V6a4 4 0 0 1 8 0v3" />
  </svg>
);
export const CloseIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m6 6 12 12M6 18 18 6" />
  </svg>
);
export const MenuIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);
export const Sparkle = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 2c0 7-3 10-10 10 7 0 10 3 10 10 0-7 3-10 10-10-7 0-10-3-10-10Z" />
  </svg>
);
export const InstagramIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
  </svg>
);
