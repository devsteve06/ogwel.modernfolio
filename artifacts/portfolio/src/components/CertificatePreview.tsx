import { useState } from "react";
import { Award } from "lucide-react";

/**
 * Resolves a certificate image in `public/certifications/`. Pass either an
 * exact file name (`certifications/ai-ethics.png`) or a base name
 * (`certifications/ai-ethics`) to probe the supported extensions. The hook
 * keeps track of which file exists so callers can link to it and fall back to
 * a styled placeholder when no certificate has been added yet.
 */
const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function useCertificateImage(baseName: string) {
  const [imageIndex, setImageIndex] = useState(0);
  const hasExtension = EXTENSIONS.some((ext) =>
    baseName.toLowerCase().endsWith(`.${ext}`),
  );
  const sources = hasExtension
    ? [`${import.meta.env.BASE_URL}${baseName}`]
    : EXTENSIONS.map((ext) => `${import.meta.env.BASE_URL}${baseName}.${ext}`);
  const hasImage = imageIndex < sources.length;

  return {
    src: hasImage ? sources[imageIndex] : null,
    onError: () => setImageIndex((index) => index + 1),
  };
}

type CertificatePreviewProps = {
  /** Resolved image URL, or `null` while no certificate file exists. */
  src: string | null;
  onError: () => void;
  name: string;
  issuer: string;
};

export function CertificatePreview({
  src,
  onError,
  name,
  issuer,
}: CertificatePreviewProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} certificate issued by ${issuer}`}
        loading="lazy"
        decoding="async"
        onError={onError}
        className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover/certificate:scale-[1.02]"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-background via-background to-accent/10 px-6 text-center">
      <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-accent">
        <Award className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-foreground">{name}</span>
      <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        Preview coming soon
      </span>
    </div>
  );
}
