import { FadeUp } from "@/components/Motion";
import {
  Shield,
  GraduationCap,
  Layers,
  Award,
} from "lucide-react";

export default function Credentials() {
  return (
    <section className="mt-25">
      <FadeUp>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-muted">
            Credentials
          </p>
          <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight">
            Beyond the Buzz.
          </h2>
          <p className="mt-6 text-muted text-lg">
            A foundation built on formal education, industry certifications,
            and hands-on engineering across security, systems, and product.
          </p>
        </div>
      </FadeUp>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
        <FadeUp>
          <CredentialCard
            icon={<Layers size={20} />}
            title="Skillsets"
            items={[
              "Cybersecurity & Web Application Security",
              "Full-Stack Engineering (Next.js, Typescript, React, Python mastery, Flask, Flutter, PostgreSQL, Database Modelling)",
              "Cloud Infrastructure & AWS Services",
              "System Architecture & Scalability",
              "AI-Driven Systems & Automation",
              "Leadership, Team Management, Problem Solving, Technical Documentation, Creative Innovation",
            ]}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <CredentialCard
            icon={<Award size={20} />}
            title="Certifications"
            items={[
              "ISC2 Certified in Cybersecurity (Level One), 2023 ",
              "Jobberman Accelerated Soft Skills Training Certificate (2021) ",
            ]}
          />
        </FadeUp>

        <FadeUp delay={0.2}>
          <CredentialCard
            icon={<GraduationCap size={20} />}
            title="Education"
            items={[
              "B.Sc. Cybersecurity (First Class Honours)",
              "Dominion University, Ibadan",
                "2022 — 2025",
            ]}
          />
        </FadeUp>
      </div>
    </section>
  );
}

function CredentialCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-surface p-8 transition-colors hover:border-primary/40">
      {/* Ambient hover lift */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-white/10 bg-bg p-2 text-primary">
            {icon}
          </div>
          <h3 className="font-heading text-xl font-medium">
            {title}
          </h3>
        </div>

        <ul className="mt-6 space-y-3 text-muted">
          {items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
