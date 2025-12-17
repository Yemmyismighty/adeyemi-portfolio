import Section from "@/components/Section";
import { FadeUp } from "./Motion";

export default function TechnicalBreakdown({
  title,
  overview,
  stack,
  architecture,
  responsibilities,
}: {
  title: string;
  overview: string;
  stack: string[];
  architecture: string[];
  responsibilities: string[];
}) {
  return (
    <Section>
      <div className="max-w-3xl space-y-16">
        {/* Header */}

        
        <div>
          <FadeUp>
          <h1 className="font-heading text-4xl font-medium tracking-tight">
            {title}
          </h1>
          </FadeUp>

            <FadeUp delay={0.1}>
                <p className="mt-6 text-muted">
                    {overview}
                </p>
            </FadeUp>
        </div>

        {/* Tech Stack */}
        <FadeUp delay={0.2}>
        <div>
          <h2 className="font-heading text-2xl font-medium">
            Technology Stack
          </h2>

          <ul className="mt-4 space-y-2 text-muted">
            {stack.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        </FadeUp>

        {/* Architecture */}
        <FadeUp delay={0.3}>
        <div>
          <h2 className="font-heading text-2xl font-medium">
            System Architecture
          </h2>

          <ul className="mt-4 space-y-2 text-muted">
            {architecture.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        </FadeUp>

        {/* Responsibilities */}
        <FadeUp delay={0.4}>
        <div>
          <h2 className="font-heading text-2xl font-medium">
            My Role & Responsibilities
          </h2>

          <ul className="mt-4 space-y-2 text-muted">
            {responsibilities.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        </FadeUp>
      </div>
    </Section>
  );
}
