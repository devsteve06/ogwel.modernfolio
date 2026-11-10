import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Looks for a project screenshot in `public/projects/` using the given base
 * name and any of the supported extensions. Until a screenshot exists, a
 * styled placeholder is shown.
 */
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

type ProjectPhotoProps = {
  /** File name without extension, e.g. "projects/studentconnect". */
  baseName: string;
  alt: string;
  /** Shown in the placeholder while no screenshot is available. */
  title: string;
};

export function ProjectPhoto({ baseName, alt, title }: ProjectPhotoProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const sources = EXTENSIONS.map(
    (ext) => `${import.meta.env.BASE_URL}${baseName}.${ext}`,
  );
  const hasImage = imageIndex < sources.length;

  return (
    <>
      {hasImage ? (
        <img
          src={sources[imageIndex]}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setImageIndex((index) => index + 1)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-background via-background to-accent/10 px-6 text-center">
          <ImageIcon className="h-8 w-8 text-muted-foreground/60" aria-hidden="true" />
          <span className="font-mono text-lg text-muted-foreground">
            {title.toLowerCase().replace(/\s+/g, "")}.web
          </span>
        </div>
      )}
    </>
  );
}
