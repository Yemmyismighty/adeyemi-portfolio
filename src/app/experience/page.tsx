import Section from "@/components/Section";
import ExperienceItem from "@/components/ExperienceItem";
import { FadeUp } from "@/components/Motion";

export default function ExperiencePage() {
  return (
    <Section>
      <div className="space-y-24">
        {/* Header */}
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-muted">
              Experience
            </p>

            <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight">
              Professional Experience
            </h1>

            <p className="mt-6 text-muted">
              A timeline of roles and engagements where I took ownership of
              systems, teams, and outcomes.
            </p>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div className="space-y-20">
          <ExperienceItem
            role="Co-Founder & Chief Technology Officer"
            company="Knowvas Technology Ltd."
            period="2024 — Present"
            description="Led the technical vision and execution of a secure digital publishing platform focused on protecting African creators from piracy and unauthorized distribution."
            highlights={[
              "Designed and built the platform end-to-end",
              "Implemented DRM and anti-piracy mechanisms",
              "Integrated AI-driven content moderation",
              "Deployed scalable cloud infrastructure on AWS",
              "Onboarded over 1,000 users with zero unauthorized downloads",
            ]}
          />

          <ExperienceItem
            role="Cybersecurity Intern"
            company="Tech360, Lagos"
            period="Oct 2023 — Dec 2023 · Oct 2024 — Dec 2024"
            description="Supported enterprise cybersecurity operations, incident response, and vulnerability assessments across multiple client environments."
            highlights={[
              "Assisted in network monitoring and security operations",
              "Participated in vulnerability scans and assessments",
              "Supported incident response across 12+ cases",
              "Worked with enterprise clients on data protection",
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
