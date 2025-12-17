import Image from "next/image";

export default function ProjectVisual({
  label,
  darkImage,
  lightImage,
  flipped = false,
}: {
  label: string;
  darkImage: string;
  lightImage: string;
  flipped?: boolean;
}) {
  return (
    <div className="relative h-80 overflow-hidden rounded-xl border border-white/10 bg-surface">
      {/* Ambient glow */}
      <div
        aria-hidden
        className={`absolute -inset-10 blur-8xl ${
          flipped ? "bg-primary/10" : "bg-primary/15"
        }`}
      />

      {/* Frame */}
      <div className="relative h-full p-2">
        <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-bg">
          {/* Dark image */}
          <Image
            src={darkImage}
            alt={`${label} (dark mode)`}
            fill
            className="show-dark object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />

          {/* Light image */}
          <Image
            src={lightImage}
            alt={`${label} (light mode)`}
            fill
            className="show-light object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}
