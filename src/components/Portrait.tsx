import Image from "next/image";

export default function Portrait({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-2xl bg-primary/10 blur-3xl"
      />

      {/* Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface">
        <Image
          src="/images/portrait.jpg"
          alt="Adeyemi Samuel Akitoye"
          width={420}
          height={520}
          priority={priority}
          className="object-cover grayscale-[10%]"
        />
      </div>
    </div>
  );
}
