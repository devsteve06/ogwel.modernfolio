import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Drop your photo in `artifacts/portfolio/public/` using one of these names.
 * The first file that exists is used; otherwise a placeholder is shown so the
 * layout never breaks.
 */
const PROFILE_IMAGES = ["profile.jpg", "profile.jpeg", "profile.png", "profile.webp"].map(
  (file) => `${import.meta.env.BASE_URL}${file}`,
);

type PortraitProps = {
  className?: string;
};

export function Portrait({ className }: PortraitProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const hasImage = imageIndex < PROFILE_IMAGES.length;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      className={cn("relative mx-auto w-full max-w-sm lg:max-w-md", className)}
    >
      {/* Soft glow behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/25 via-accent/5 to-transparent blur-2xl"
      />

      <div className="group relative rounded-2xl border border-border bg-card p-2 shadow-xl">
        {/* Corner accent marks */}
        <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 h-8 w-8 rounded-tl-2xl border-t-2 border-l-2 border-accent" />
        <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-accent" />

        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
          {hasImage ? (
            <img
              src={PROFILE_IMAGES[imageIndex]}
              alt="Portrait of Ogwel Stephen"
              loading="eager"
              decoding="async"
              onError={() => setImageIndex((index) => index + 1)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-background via-background to-accent/10 px-6 text-center">
              <span className="font-mono text-5xl font-bold tracking-tighter text-accent">
                OS
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                Add public/profile.jpg
              </span>
            </div>
          )}

          {/* Subtle inner vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
        className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 shadow-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-muted-foreground">At work</span>
      </motion.div>
    </motion.div>
  );
}
