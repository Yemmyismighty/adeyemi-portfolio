import { FadeUp } from "@/components/Motion";

export default function ExperienceItem({
  role,
  company,
  period,
  description,
  highlights,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}) {
  return (
    <FadeUp>
        <div className="h-px w-full bg-white/5" />

      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        {/* Time */}
        <div className="text-sm text-muted">
          {period}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="font-heading text-xl font-medium">
              {role}
            </h3>
            <p className="text-muted">
              {company}
            </p>
          </div>

          <p className="text-muted max-w-2xl">
            {description}
          </p>

          <ul className="space-y-2 text-sm text-muted">
            {highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </FadeUp>
  );
}
