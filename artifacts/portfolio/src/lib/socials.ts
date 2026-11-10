import type { IconType } from "react-icons";
import { SiInstagram, SiTiktok, SiX } from "react-icons/si";

/** Shared username across social platforms. */
export const SOCIAL_USERNAME = "devsteve06";

export type SocialHandle = {
  label: string;
  handle: string;
  href: string;
  icon: IconType;
};

export const socialHandles: SocialHandle[] = [
  {
    label: "Instagram",
    handle: `@${SOCIAL_USERNAME}`,
    href: `https://instagram.com/${SOCIAL_USERNAME}`,
    icon: SiInstagram,
  },
  {
    label: "X",
    handle: `@${SOCIAL_USERNAME}`,
    href: `https://x.com/${SOCIAL_USERNAME}`,
    icon: SiX,
  },
  {
    label: "TikTok",
    handle: `@${SOCIAL_USERNAME}`,
    href: `https://www.tiktok.com/@${SOCIAL_USERNAME}`,
    icon: SiTiktok,
  },
];
